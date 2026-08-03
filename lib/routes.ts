/**
 * The set of routes the site actually builds, and a build-time check that every
 * authored link resolves to one of them.
 *
 * `Href` in lib/inline pins the static segments and the seven legal pages at the
 * type level, but it cannot pin post and guide slugs — importing the content
 * registries there would cycle (content → types → inline). So slugs are checked
 * here instead, at module load, during `next build`. There is no test runner in
 * this project; the repo's idiom is to make the build the checker (see the
 * `satisfies Record<LegalPage, string>` in lib/legal.ts).
 */

import { getAllGuides } from "./guides";
import { getAllPosts } from "./posts";
import { LEGAL_UPDATED } from "./legal";
import { inlineHrefs, type Href, type Inline, type RelatedLink } from "./inline";

/**
 * Every non-dynamic route with a page.tsx under app/. Hand-maintained because a
 * bundled module cannot read app/ under `output: "export"` — but this is not a
 * new source of truth: app/sitemap.ts used to hardcode the same list and now
 * consumes it from here.
 */
export const STATIC_PATHS = [
  "/",
  "/get-started",
  "/about",
  "/pricing",
  "/support",
  "/blog",
  "/guides",
  "/sitemap",
] as const;

/** Every path the build emits, as a lookup set. */
export function allRoutes(): Set<string> {
  return new Set<string>([
    ...STATIC_PATHS,
    ...Object.keys(LEGAL_UPDATED).map((page) => `/legal/${page}`),
    ...getAllPosts().map((post) => `/blog/${post.slug}`),
    ...getAllGuides().map((guide) => `/guides/${guide.slug}`),
  ]);
}

let checked = false;

/**
 * Throws if any authored href — inline in body copy, or structural in
 * `relatedLinks` — points at a route that doesn't exist. Aggregates every
 * failure into one message so a bad rename is fixed in a single pass.
 *
 * Idempotent, so it is safe to call from every entry point that is guaranteed
 * to run: sitemap() covers `next build`, and the two generateStaticParams cover
 * `next dev`, where the sitemap is only built if you visit /sitemap.xml.
 */
export function assertContentLinks(): void {
  if (checked) return;
  checked = true;

  const routes = allRoutes();
  const errors: string[] = [];

  const check = (where: string, href: Href) => {
    if (/^(https?:|mailto:|tel:)/.test(href)) return;
    if (!href.startsWith("/")) {
      errors.push(`${where}: "${href}" is not root-relative`);
      return;
    }
    // "/pricing#plans" → "/pricing"; "/#get-xtk" → "/".
    const path = href.split("#")[0].split("?")[0];
    const target = path === "" ? "/" : path.replace(/(.)\/$/, "$1");
    if (!routes.has(target)) {
      errors.push(`${where}: "${href}" → no such route ("${target}")`);
    }
  };

  const walk = (where: string, value: Inline) => {
    for (const href of inlineHrefs(value)) check(where, href);
  };

  const checkRelated = (where: string, links: RelatedLink[] | undefined) => {
    for (const link of links ?? []) check(`${where} relatedLinks`, link.href);
  };

  for (const guide of getAllGuides()) {
    const at = `guide "${guide.slug}"`;
    checkRelated(at, guide.relatedLinks);
    for (const slug of guide.relatedSlugs) {
      if (!routes.has(`/guides/${slug}`)) {
        errors.push(`${at} relatedSlugs: "${slug}" is not a published guide`);
      }
    }
    for (const block of guide.body) {
      switch (block.type) {
        case "p":
        case "callout":
          walk(at, block.text);
          break;
        case "list":
          for (const item of block.items) walk(at, item);
          break;
        case "steps":
          for (const step of block.steps) walk(at, step.text);
          break;
        case "table":
          for (const row of block.rows) for (const cell of row) walk(at, cell);
          break;
      }
    }
  }

  for (const post of getAllPosts()) {
    const at = `post "${post.slug}"`;
    checkRelated(at, post.relatedLinks);
    for (const slug of post.relatedSlugs ?? []) {
      if (!routes.has(`/blog/${slug}`)) {
        errors.push(`${at} relatedSlugs: "${slug}" is not a published post`);
      }
    }
    for (const block of post.body) {
      switch (block.type) {
        case "p":
        case "callout":
          walk(at, block.text);
          break;
        case "list":
          for (const item of block.items) walk(at, item);
          break;
        case "table":
          for (const row of block.rows) for (const cell of row) walk(at, cell);
          break;
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Broken internal links in content:\n  ${errors.join("\n  ")}`);
  }
}
