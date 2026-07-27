/**
 * Content store for the /guides section (user-guide articles).
 *
 * Mirrors lib/posts.ts but with a richer block AST (images, steps, h3, video)
 * and guide-specific metadata (series, order, updated, faq, relatedSlugs).
 * Articles are authored one per session — see user-guide/MASTER-PLAN.md for
 * slugs, briefs and status.
 */

export type GuideStep = {
  /** Short imperative name for the step (feeds HowTo JSON-LD `name`). */
  title: string;
  /** The full step instruction. */
  text: string;
  image?: { src: string; alt: string };
};

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string }
  | {
      type: "image";
      /** Path under public/, e.g. "/images/guides/<slug>/01-name.png". */
      src: string;
      alt: string;
      caption?: string;
      /** Intrinsic pixel size; defaults to the 1440×900 screenshot standard. */
      width?: number;
      height?: number;
    }
  | {
      type: "steps";
      /** Optional heading rendered above the steps (h3-level). */
      title?: string;
      steps: GuideStep[];
    }
  | {
      type: "video";
      /** Path under public/ to an .mp4/.webm (or .gif — rendered as <img>). */
      src: string;
      /** Static-fallback description, also used as alt/aria-label. */
      alt: string;
      caption?: string;
    };

export type GuideSeries =
  | "Getting started"
  | "Documents"
  | "Client-facing"
  | "Account & trust";

/** Index-page and prev/next ordering of the series. */
export const guideSeriesOrder: GuideSeries[] = [
  "Getting started",
  "Documents",
  "Client-facing",
  "Account & trust",
];

export type GuideFaq = { q: string; a: string };

export type Guide = {
  slug: string;
  /** Page H1 and <title> (≤60 chars, contains the primary keyword). */
  title: string;
  /** Meta description, 150–160 chars, action-phrased. */
  description: string;
  series: GuideSeries;
  /** Position within the series (drives index grouping and prev/next). */
  order: number;
  date: string; // ISO date first published
  updated: string; // ISO date last materially updated
  readingTime: string;
  faq: GuideFaq[];
  /** Slugs of related guides, rendered under the article and used for interlinks. */
  relatedSlugs: string[];
  /** Path under public/ to the 1200×630 OG image; falls back to the site default. */
  ogImage?: string;
  body: GuideBlock[];
};

export function formatGuideDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/**
 * The guides, in no particular order — helpers below sort. Written one per
 * session; keep slugs/titles in sync with user-guide/MASTER-PLAN.md.
 */
export const guides: Guide[] = [];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/** All guides in reading order: series order, then `order` within a series. */
export function getAllGuides(): Guide[] {
  return [...guides].sort((a, b) => {
    const s =
      guideSeriesOrder.indexOf(a.series) - guideSeriesOrder.indexOf(b.series);
    return s !== 0 ? s : a.order - b.order;
  });
}

/** Guides grouped by series, in series order; empty series omitted. */
export function getGuidesBySeries(): { series: GuideSeries; guides: Guide[] }[] {
  const all = getAllGuides();
  return guideSeriesOrder
    .map((series) => ({ series, guides: all.filter((g) => g.series === series) }))
    .filter((group) => group.guides.length > 0);
}

/** The guide's declared related guides, resolved and in declaration order. */
export function getRelatedGuides(slug: string): Guide[] {
  const current = getGuide(slug);
  if (!current) return [];
  return current.relatedSlugs
    .map((s) => getGuide(s))
    .filter((g): g is Guide => Boolean(g));
}

/** Previous/next guide within the full reading order (for series navigation). */
export function getAdjacentGuides(slug: string): {
  prev?: Guide;
  next?: Guide;
} {
  const all = getAllGuides();
  const i = all.findIndex((g) => g.slug === slug);
  if (i === -1) return {};
  return { prev: all[i - 1], next: all[i + 1] };
}
