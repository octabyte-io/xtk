import {
  Bricolage_Grotesque,
  Caveat,
  Geist_Mono,
  Instrument_Sans,
} from "next/font/google";

// next/font preloads a family on every route that the calling file covers, so a
// family called from the root layout costs a <link rel=preload> on every page.
// Bricolage (headings) and Instrument Sans (body) earn that; Caveat and Geist
// Mono are used by a handful of components, so they set preload: false and are
// applied at those components instead of on <html>.

export const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

/** Handwritten signature accent. Apply `caveat.variable` where `font-script` is used. */
export const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

/** Code and timestamps. Apply `geistMono.variable` where `font-mono` is used. */
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});
