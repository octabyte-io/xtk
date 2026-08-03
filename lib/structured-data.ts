/**
 * JSON-LD builders for schema.org structured data. Each returns a plain
 * object; render it with <JsonLd data={...} /> (components/json-ld.tsx).
 */

import { company, pricing } from "./legal";
import { plainText } from "./inline";
import {
  CHROME_STORE_URL,
  DEFAULT_OG_IMAGE,
  FIREFOX_STORE_URL,
  SITE_DESCRIPTION,
  SITE_URL,
} from "./site";
import type { Guide, GuideFaq } from "./guides";
import type { Post } from "./posts";

/** Absolute URL from a site-relative path. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

/** Stable node ids so every graph on the site points at one Organization. */
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Reference to the Organization node emitted sitewide by the root layout. */
const publisher = { "@id": ORGANIZATION_ID } as const;

/** Emitted once, from app/layout.tsx. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: company.legalName,
    alternateName: company.product,
    url: SITE_URL,
    logo: absoluteUrl("/apple-icon.png"),
    description: SITE_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: company.supportEmail,
      url: absoluteUrl("/support"),
    },
  };
}

/** Emitted once, from app/layout.tsx. */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: company.shortName,
    alternateName: company.product,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-GB",
    publisher,
  };
}

export function articleJsonLd(guide: Guide) {
  const url = absoluteUrl(`/guides/${guide.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.updated,
    author: publisher,
    publisher,
    mainEntityOfPage: url,
    url,
    ...(guide.ogImage && { image: absoluteUrl(guide.ogImage) }),
  };
}

export function blogPostingJsonLd(post: Post) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher,
    articleSection: post.category,
    mainEntityOfPage: url,
    url,
    image: absoluteUrl(post.ogImage ?? DEFAULT_OG_IMAGE),
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/**
 * HowTo built from the `steps` blocks of a body (all of them, flattened, in
 * article order). Only emit this for pages that are genuinely step-driven.
 *
 * Typed as the structural subset it reads rather than `Guide`, so /get-started
 * — which authors a `GuideBlock[]` inline instead of registering a guide — can
 * pass its own title, description and blocks.
 */
export function howToJsonLd(guide: Pick<Guide, "title" | "description" | "body">) {
  const steps = guide.body
    .flatMap((b) => (b.type === "steps" ? b.steps : []))
    .map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      // plainText, not s.text: step text is `Inline`, and this object literal is
      // untyped — handing it an array would silently emit objects into JSON-LD.
      text: plainText(s.text),
      ...(s.image && { image: absoluteUrl(s.image.src) }),
    }));
  if (steps.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.description,
    step: steps,
  };
}

export function faqPageJsonLd(faqs: GuideFaq[]) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** For the home page. */
export function softwareApplicationJsonLd() {
  /** Only listings that are actually published — see lib/site.ts. */
  const listings = [CHROME_STORE_URL, FIREFOX_STORE_URL].filter(
    (url): url is string => url !== null
  );
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: company.product,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Chrome, Firefox",
    description:
      "XTK adds document management, e-signatures, client portals and template automation to Xero Practice Manager — in a panel that opens right inside it.",
    url: SITE_URL,
    ...(listings.length > 0 && {
      downloadUrl: listings[0],
      installUrl: listings[0],
      sameAs: listings,
    }),
    offers: {
      "@type": "Offer",
      price: pricing.amount.replace(/[^0-9.]/g, ""),
      priceCurrency: pricing.currency,
      description: `Per practice, per ${pricing.interval}, after a ${pricing.trialDays}-day free trial.`,
    },
    publisher,
  };
}
