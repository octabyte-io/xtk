/**
 * Guide content types and series ordering. Shared by the per-guide content
 * files in ./content and the store entry point ./index.ts.
 */

export type GuideStep = {
  /** Short imperative name for the step (feeds HowTo JSON-LD `name`). */
  title: string;
  /** The full step instruction. */
  text: string;
  /** Intrinsic pixel size defaults to the 1440×900 screenshot standard. */
  image?: { src: string; alt: string; width?: number; height?: number };
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
      /** Path under public/ to an .mp4/.webm. */
      src: string;
      /** Static-fallback description, also used as alt/aria-label. */
      alt: string;
      caption?: string;
      /** Intrinsic pixel size; required so the player reserves space. */
      width: number;
      height: number;
    }
  | {
      type: "table";
      /** Column headers. */
      head: string[];
      rows: string[][];
      caption?: string;
      /** Column indices rendered in monospace, e.g. a placeholder-token column. */
      codeColumns?: number[];
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

/**
 * A related destination that is not a guide — a site page such as
 * /legal/privacy. `relatedSlugs` resolves guide slugs only, so anything else a
 * guide needs to link to structurally goes here.
 */
export type GuideLink = {
  /** Link text, normally the destination page's own title. */
  label: string;
  /** Root-relative path, e.g. "/legal/privacy". */
  href: string;
};

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
  /**
   * Non-guide destinations (site pages such as the legal policies), rendered
   * alongside the related guides. Optional — most guides need only slugs.
   */
  relatedLinks?: GuideLink[];
  /** Path under public/ to the 1200×630 OG image; falls back to the site default. */
  ogImage?: string;
  /**
   * Path under public/ to the 1200×675 card/post thumbnail (rendered from
   * user-guide/assets/thumb-template.html); omitted → text-only card.
   */
  thumbnail?: { src: string; alt: string };
  body: GuideBlock[];
};
