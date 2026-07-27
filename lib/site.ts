import { company } from "./legal";

/** Canonical site origin — used for metadataBase, sitemap, robots, JSON-LD. */
export const SITE_URL = company.website;

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
