import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Caveat,
  Geist_Mono,
  Instrument_Sans,
} from "next/font/google";
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

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Pages pass a bare title ("Pricing") and the template adds the suffix, so
  // the brand tail lives here rather than being retyped in every page file.
  title: { default: SITE_TITLE, template: TITLE_TEMPLATE },
  description: SITE_DESCRIPTION,
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
      className={`${bricolage.variable} ${instrument.variable} ${caveat.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
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
