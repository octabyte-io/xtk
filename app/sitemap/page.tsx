import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/site/legal/legal-layout";
import { H2, P } from "@/components/site/legal/prose";
import { getGuidesBySeries } from "@/lib/guides";
import { LEGAL_UPDATED } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/posts";

/**
 * The human-readable counterpart to app/sitemap.ts. Both read the same stores,
 * so a new guide, post or policy appears here the moment it is registered —
 * nothing to maintain by hand except the labels below.
 *
 * Route note: this is /sitemap; app/sitemap.ts is the metadata route for
 * /sitemap.xml. Metadata sitemaps nest per route segment, so they don't collide.
 */

export const metadata: Metadata = pageMetadata({
  title: "Sitemap",
  description:
    "Every page on the XTK site — user guides, blog posts, product pages and policies — in one list.",
  path: "/sitemap",
});

const MAIN_PAGES: { href: string; label: string; blurb: string }[] = [
  { href: "/", label: "Home", blurb: "What XTK adds to Xero Practice Manager." },
  { href: "/pricing", label: "Pricing", blurb: "One price per practice, and what the trial covers." },
  { href: "/guides", label: "User guides", blurb: "Step-by-step walkthroughs of every feature." },
  { href: "/blog", label: "Blog", blurb: "Product news and practice tips." },
  { href: "/about", label: "About", blurb: "Who builds XTK and why." },
  { href: "/support", label: "Support", blurb: "How to get help." },
];

const LEGAL_LABELS: Record<keyof typeof LEGAL_UPDATED, string> = {
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  dpa: "Data Processing Addendum",
  subprocessors: "Sub-processors",
  cookies: "Cookies & tracking",
  refunds: "Refund & cancellation policy",
  "data-deletion": "Your data rights & deletion",
};

const linkCls =
  "font-medium text-accent-deep underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent";

function SitemapLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className={linkCls}>
      {label}
    </Link>
  );
}

/**
 * sitemap.xml and llms.txt are generated files, not routes — next/link would
 * attempt a client-side navigation, and a raw href needs the basePath that Link
 * would otherwise add for us.
 */
function FileLink({ href, label }: { href: string; label: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <a href={`${basePath}${href}`} className={linkCls}>
      {label}
    </a>
  );
}

/** A plain list of links, one per line. */
function LinkList({
  items,
}: {
  items: { href: string; label: string; blurb?: string }[];
}) {
  return (
    <ul className="mt-5 flex flex-col gap-2.5 text-lg leading-relaxed text-ink-soft">
      {items.map((item) => (
        <li key={item.href}>
          <SitemapLink href={item.href} label={item.label} />
          {item.blurb && <span className="text-base"> — {item.blurb}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function Sitemap() {
  const series = getGuidesBySeries();
  const posts = getAllPosts();

  return (
    <LegalLayout
      path="/sitemap"
      eyebrow="Index"
      title="Sitemap"
      lede="Every page on this site, in one place."
    >
      <H2 id="pages">Main pages</H2>
      <LinkList items={MAIN_PAGES} />

      <H2 id="guides">User guides</H2>
      <P>
        {series.reduce((n, g) => n + g.guides.length, 0)} step-by-step guides,
        grouped by series and in reading order.
      </P>
      {series.map((group) => (
        <div key={group.series} className="mt-6">
          <h3 className="font-display text-lg font-bold text-ink">
            {group.series}
          </h3>
          <LinkList
            items={group.guides.map((guide) => ({
              href: `/guides/${guide.slug}`,
              label: guide.title,
            }))}
          />
        </div>
      ))}

      <H2 id="blog">Blog</H2>
      <LinkList
        items={posts.map((post) => ({
          href: `/blog/${post.slug}`,
          label: post.title,
          blurb: post.category,
        }))}
      />

      <H2 id="legal">Policies</H2>
      <LinkList
        items={(
          Object.keys(LEGAL_UPDATED) as (keyof typeof LEGAL_UPDATED)[]
        ).map((page) => ({
          href: `/legal/${page}`,
          label: LEGAL_LABELS[page],
        }))}
      />

      <H2 id="machine">For machines</H2>
      <P>
        <FileLink href="/sitemap.xml" label="sitemap.xml" /> lists the same pages
        for crawlers, and <FileLink href="/llms.txt" label="llms.txt" />{" "}
        summarises the site for language models.
      </P>
    </LegalLayout>
  );
}
