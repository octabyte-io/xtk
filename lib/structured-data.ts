/**
 * JSON-LD builders for schema.org structured data. Each returns a plain
 * object; render it with <JsonLd data={...} /> (components/json-ld.tsx).
 */

import { company, pricing } from "./legal";
import { SITE_URL } from "./site";
import type { Guide, GuideFaq } from "./guides";

/** Absolute URL from a site-relative path. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

const publisher = {
  "@type": "Organization",
  name: company.legalName,
  url: SITE_URL,
} as const;

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

/**
 * HowTo built from the guide's `steps` blocks (all of them, flattened, in
 * article order). Only emit this for guides that are genuinely step-driven.
 */
export function howToJsonLd(guide: Guide) {
  const steps = guide.body
    .flatMap((b) => (b.type === "steps" ? b.steps : []))
    .map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.text,
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
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: company.product,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Chrome, Firefox",
    description:
      "XTK adds document management, e-signatures, client portals and template automation to Xero Practice Manager — in a panel that opens right inside it.",
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      price: pricing.amount.replace(/[^0-9.]/g, ""),
      priceCurrency: pricing.currency,
      description: `Per practice, per ${pricing.interval}, after a ${pricing.trialDays}-day free trial.`,
    },
    publisher,
  };
}
