/**
 * Inline links inside body copy.
 *
 * Guide and post bodies store prose as plain strings, which React escapes — so
 * for a long time a paragraph physically could not contain a link. Rather than
 * add a parallel `spans` field (two sources of truth) or a markdown-lite string
 * convention (two guides *teach* `[label](url)` syntax and would be eaten by the
 * parser), the text fields are widened to `Inline`:
 *
 *   type Inline = string | InlineNode[]
 *
 * `Inline` is a supertype of `string`, so every existing paragraph compiles
 * untouched. Authors opt in one paragraph at a time by swapping the string for
 * an array:
 *
 *   { type: "p", text: [
 *       "Files stay in your own Drive — the ",
 *       { text: "Privacy Policy", href: "/legal/privacy" },
 *       " spells out what XTK holds.",
 *   ] }
 */

import type { LegalPage } from "./legal";

/**
 * Every route the site builds, as a type. The static segments and the seven
 * legal pages are pinned exactly, so a typo like "/legal/privcy" is a compile
 * error. Post and guide slugs are `${string}` because the content registries
 * cannot be imported from here without a cycle (content → types → inline);
 * their existence is checked at build time instead — see ./routes.ts.
 */
export type SitePath =
  | "/"
  | "/about"
  | "/pricing"
  | "/support"
  | "/blog"
  | "/guides"
  | "/sitemap"
  | `/legal/${LegalPage}`
  | `/blog/${string}`
  | `/guides/${string}`;

/** Anything a link in content may point at. */
export type Href =
  | SitePath
  | `${SitePath}#${string}`
  | `https://${string}`
  | `mailto:${string}`;

/** A linked run of text inside a paragraph. */
export type InlineLink = { text: string; href: Href };

export type InlineNode = string | InlineLink;

/**
 * Body copy that may contain inline links. A plain string is the common case
 * and stays the common case — reach for the array form only when a phrase in
 * the middle of a sentence should be a link.
 */
export type Inline = string | InlineNode[];

/**
 * A structural link to a page that isn't resolvable from a slug — used by the
 * `relatedLinks` field on both guides and posts, and rendered in the article
 * footer's Related-reading block.
 */
export type RelatedLink = {
  /** Link text, normally the destination page's own title. */
  label: string;
  href: Href;
};

/**
 * Inline copy flattened to plain text. Every non-DOM sink (JSON-LD, meta
 * descriptions, anything that must be a JSON string) has to go through this —
 * handing an `Inline` straight to an untyped object literal silently emits an
 * array of objects where a string was meant.
 */
export function plainText(value: Inline): string {
  if (typeof value === "string") return value;
  return value.map((node) => (typeof node === "string" ? node : node.text)).join("");
}

/** Every href in a piece of inline copy. Used by the build-time link check. */
export function inlineHrefs(value: Inline): Href[] {
  if (typeof value === "string") return [];
  return value.flatMap((node) => (typeof node === "string" ? [] : [node.href]));
}
