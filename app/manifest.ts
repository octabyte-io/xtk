import type { MetadataRoute } from "next";
import { company } from "@/lib/legal";
import { SITE_DESCRIPTION, THEME_COLOR } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.product,
    short_name: company.shortName,
    description: SITE_DESCRIPTION,
    start_url: "/",
    // A marketing site, not an installable app — keep browser chrome.
    display: "browser",
    background_color: "#ffffff",
    theme_color: THEME_COLOR,
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
