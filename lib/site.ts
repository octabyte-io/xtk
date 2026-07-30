import { company } from "./legal";

/** Canonical site origin — used for metadataBase, sitemap, robots, JSON-LD. */
export const SITE_URL = company.website;

/** Home-page <title> and the fallback title for any page that sets none. */
export const SITE_TITLE = "XTK — The toolkit for Xero Practice Manager";

/** Brand tail appended to page titles. `%s` is the page's own title. */
export const TITLE_TEMPLATE = "%s — XTK";

/** Applies TITLE_TEMPLATE outside Next's metadata resolver (e.g. OG titles). */
export function withTitleSuffix(title: string): string {
  return TITLE_TEMPLATE.replace("%s", title);
}

/** Default meta description, and the Organization/WebSite description. */
export const SITE_DESCRIPTION =
  "XTK adds document management, e-signatures, client portals and template automation to Xero Practice Manager — in a panel that opens right inside it.";

/** Brand blue — matches the rect fill in app/icon.svg. */
export const THEME_COLOR = "#0077C7";

/** 1200×630 social card used by any page that doesn't ship its own. */
export const DEFAULT_OG_IMAGE = "/images/og-default.png";

/**
 * Browser extension store listings. The extension is not yet published to
 * either store (see user-guide/PRODUCT-FACTS.md → Known gaps), so both are
 * null and CTAs fall back to the on-page install section. Replace with the
 * real listing URLs when the store submissions go live — every CTA and guide
 * picks them up from here.
 */
export const CHROME_STORE_URL: string | null = null;
export const FIREFOX_STORE_URL: string | null = null;

/** Where "get XTK" CTAs point until the store listings exist. */
export const GET_XTK_FALLBACK = "/#get-xtk";

export function chromeStoreHref(): string {
  return CHROME_STORE_URL ?? GET_XTK_FALLBACK;
}

export function firefoxStoreHref(): string {
  return FIREFOX_STORE_URL ?? GET_XTK_FALLBACK;
}
