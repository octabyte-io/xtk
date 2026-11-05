import type { Faq, Inline, RelatedLink } from "../inline";

export type { Faq, RelatedLink };

/**
 * `Inline` fields may carry inline links; `string` fields deliberately may not.
 * Headings are landmarks and anchor targets, a pull-quote's display type fights
 * an underlined link, a callout title is a label rather than a sentence, and
 * table headers and captions are plain-text sinks by definition.
 */
export type PostBlock =
  | { type: "p"; text: Inline }
  | { type: "h2"; text: string }
  | { type: "list"; items: Inline[]; ordered?: boolean }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: Inline }
  | {
      /**
       * Renders through the same component as a guide's table. Worth reaching
       * for only when the content is genuinely tabular — a comparison across
       * options — because a table is the densest thing on the page to read on a
       * phone, and the widest thing to get wrong.
       */
      type: "table";
      /** Column headers. */
      head: string[];
      rows: Inline[][];
      caption?: string;
    };

export type PostCategory = "Product" | "Guides" | "Practice tips" | "Company";

/**
 * Topic clusters (the blog's pillar-and-spoke structure). Each topic has one
 * pillar post; every other post in the topic links up to it automatically and
 * the pillar lists every post in the topic. Registry lives in ./topics.ts.
 */
export type PostTopic = "document-management" | "e-signatures" | "client-documents";

export type Post = {
  slug: string;
  /** On-page H1 and card title. May be long and conversational. */
  title: string;
  /**
   * The search-result <title>, when `title` is too long for one (Google cuts
   * at ~60 characters). Lead with the phrase people search; ≤ 60 characters.
   * " — XTK" is appended automatically only when it still fits in 60.
   */
  seoTitle?: string;
  /** Card teaser. Also the meta description when `description` is absent. */
  excerpt: string;
  /**
   * Meta description: 120–158 characters, the page's main search phrase in the
   * first sentence. Falls back to `excerpt`, which is usually too long.
   */
  description?: string;
  date: string; // ISO date
  /** ISO date of the last substantive revision; drives dateModified + sitemap. */
  updated?: string;
  /** Topic cluster this post belongs to. See ./topics.ts. */
  topic?: PostTopic;
  readingTime: string;
  category: PostCategory;
  author: { name: string; role: string };
  featured?: boolean;
  /**
   * Slugs of related posts, in the order they should appear. Omit to fall back
   * to `getRelatedPosts`'s same-category-then-newest heuristic, which is thin
   * on a five-post blog.
   */
  relatedSlugs?: string[];
  /**
   * Destinations that aren't posts — guides, /pricing, a legal page — rendered
   * alongside the related posts. The blog's only way out of its own silo.
   */
  relatedLinks?: RelatedLink[];
  /** Path under public/ to the 1200×630 OG image; falls back to the site default. */
  ogImage?: string;
  /**
   * Path under public/ to the 1200×675 card/post cover (rendered from
   * user-guide/assets/thumb-template.html when the post has a screenshot to
   * frame, else blog-cover-template.html); omitted → text-only card.
   */
  thumbnail?: { src: string; alt: string };
  body: PostBlock[];
  /**
   * Optional FAQ, rendered as an accordion under the body and emitted as
   * `FAQPage` JSON-LD — the same treatment guides get, where a guide's `faq` is
   * required. Most posts don't want one: only add it where the questions are
   * ones readers actually arrive with, since an FAQ of invented questions is
   * the most obvious form of SEO padding there is.
   */
  faq?: Faq[];
};
