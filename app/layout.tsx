import type { Metadata, Viewport } from "next";
import { bricolage, instrument } from "./fonts";
import "./globals.css";
import JsonLd from "@/components/json-ld";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  THEME_COLOR,
  TITLE_TEMPLATE,
} from "@/lib/site";
import { DEFAULT_OG_IMAGE } from "@/lib/metadata";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Pages pass a bare title ("Pricing") and the template adds the suffix, so
  // the brand tail lives here rather than being retyped in every page file.
  title: { default: SITE_TITLE, template: TITLE_TEMPLATE },
  description: SITE_DESCRIPTION,
  // /llms.txt was generated but referenced by nothing — no <link>, not in
  // robots.txt, not linked from any page. This advertises it sitewide; /sitemap
  // links it for humans.
  alternates: { types: { "text/plain": [{ url: "/llms.txt", title: "llms.txt" }] } },
  openGraph: {
    type: "website",
    siteName: "XTK",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_TITLE }],
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${bricolage.variable} ${instrument.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Sitewide entity graph — every Article/HowTo publisher points at it. */}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
