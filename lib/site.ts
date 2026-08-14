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
 * Browser extension store listings — the single source of truth for every
 * install CTA on the site. A `null` here is not a gap to work around: the
 * helpers below fall back to /get-started, which explains the state of that
 * store rather than offering a dead button.
 */
export const CHROME_STORE_URL: string | null =
  "https://chromewebstore.google.com/detail/octabyte-xtk/kgkoohdbndecnpacdnpobbdbcecbncpo";

/**
 * Locale-free path on purpose — AMO redirects to the visitor's own locale.
 * Should a listing ever be pulled, setting this back to null is the only edit
 * needed: every Firefox CTA falls back to /get-started, which explains why.
 */
export const FIREFOX_STORE_URL: string | null =
  "https://addons.mozilla.org/firefox/addon/octabyte-xtk/";

/** The product's own LinkedIn Page — footer link and Organization `sameAs`. */
export const LINKEDIN_URL = "https://www.linkedin.com/company/octabyte-xtk/";

/** The install-and-onboard page. Also where a CTA points if its store is null. */
export const GET_STARTED_PATH = "/get-started";

export function chromeStoreHref(): string {
  return CHROME_STORE_URL ?? GET_STARTED_PATH;
}

export function firefoxStoreHref(): string {
  return FIREFOX_STORE_URL ?? GET_STARTED_PATH;
}
