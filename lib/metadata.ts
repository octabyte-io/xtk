import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, withTitleSuffix } from "./site";
import { absoluteUrl } from "./structured-data";

export { DEFAULT_OG_IMAGE };

/**
 * Page metadata builder. Every page goes through this so that Open Graph and
 * Twitter tags are always complete.
 *
 * The reason it exists: Next *replaces* the parent `openGraph` object rather
 * than merging into it. A page that sets only `title`/`description` inherits
 * the root layout's OG title verbatim, and a page that sets its own
 * `openGraph` without `images` silently drops the default OG image. Both
 * happened here. Building the whole object in one place makes either mistake
 * impossible.
 */

export type PageMetadataInput = {
  /** Page title. Templated to "<title> — XTK" unless `absoluteTitle`. */
  title: string;
  /**
   * OG/Twitter card title, when it should differ from the document title.
   * Defaults to the document title as rendered — the brand tail included,
   * since the title template does not reach OG tags.
   */
  socialTitle?: string;
  description: string;
  /** Site-relative canonical path, e.g. "/pricing". */
  path: string;
  /** Site-relative OG image path; defaults to the site card. */
  image?: string;
  /**
   * Skip the "%s — XTK" template. Use for titles that already carry their own
   * keyword tail (guides, blog posts) and would otherwise run past ~60 chars.
   */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  /** ISO date — article pages only. */
  publishedTime?: string;
  /** ISO date — article pages only. */
  modifiedTime?: string;
};

export function pageMetadata({
  title,
  socialTitle,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  absoluteTitle = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  const cardTitle =
    socialTitle ?? (absoluteTitle ? title : withTitleSuffix(title));
  const images = [{ url: image, width: 1200, height: 630, alt: cardTitle }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: "XTK",
      url: absoluteUrl(path),
      // Set explicitly: the root `title.template` does not apply to OG tags.
      title: cardTitle,
      description,
      images,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: cardTitle,
      description,
      images,
    },
  };
}
