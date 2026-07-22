/**
 * Central facts for the legal / policy pages.
 *
 * NOTE: XTK currently operates under the "OctaByte" brand as an individual — no
 * company is registered and no postal address is published on the site; the
 * contact point is support@octabyte.io. When you register the Chrome Web Store /
 * Firefox developer accounts (and for Google restricted-scope OAuth review),
 * you'll need to supply a real legal name and physical address there, and it's
 * worth adding them here and having a lawyer review these policies at that point.
 * These drafts describe how XTK works but are not legal advice.
 */

export const LAST_UPDATED = "23 July 2026";

export const company = {
  /** Marketing / brand name used in body copy. */
  product: "OctaByte XTK",
  shortName: "XTK",

  /**
   * Who operates XTK and is the data controller / contracting party. Operating
   * as an individual under the "OctaByte" brand for now. Set companyNumber /
   * registeredAddress once a company is registered.
   */
  legalName: "OctaByte",
  /** Published postal address, or null to rely on the contact email instead. */
  registeredAddress: null as string | null,
  /** Set once a company is registered. */
  companyNumber: null as string | null,

  /** Public site + product surfaces. */
  website: "https://xtk.octabyte.io",
  portal: "https://xtk.octabyte.app",

  /**
   * Contact addresses. Only support@ and dev@octabyte.io exist today, so all
   * public-facing contact points route to support@octabyte.io. Consider adding a
   * dedicated privacy@ mailbox later if request volume grows.
   */
  supportEmail: "support@octabyte.io",
  privacyEmail: "support@octabyte.io",
  legalEmail: "support@octabyte.io",
} as const;

export const pricing = {
  amount: "$59",
  currency: "USD",
  interval: "month",
  trialDays: 30,
} as const;

/** A sub-processor XTK relies on. Sourced from the app's integrations + ADRs. */
export type SubProcessor = {
  name: string;
  purpose: string;
  region: string;
};

/**
 * Sub-processors grounded in the codebase + confirmed infrastructure:
 * Google Drive/Gmail (ADR-0009 / 0018), Microsoft Graph/Outlook (ADR-0034 /
 * 0038), Stripe billing (UK account), Sentry error monitoring + replay (ADR-0039,
 * US data region), Resend outbound mail (ADR-0029 / 0030), Hetzner (EU) for the
 * portal/backend/database, and GitHub Pages for this public website.
 */
export const subProcessors: SubProcessor[] = [
  {
    name: "Google LLC / Google Ireland Ltd",
    purpose:
      "Document storage in the practice's connected Google Drive and sending mail from a connected Gmail mailbox, via OAuth.",
    region: "United States / EU",
  },
  {
    name: "Microsoft Corporation",
    purpose:
      "Optional document storage (OneDrive / SharePoint) and outbound mail (Outlook) via Microsoft Graph, when a practice connects Microsoft.",
    region: "United States / EU",
  },
  {
    name: "Stripe Payments UK, Ltd. / Stripe, Inc.",
    purpose:
      "Subscription billing and payment processing. XTK stores only customer and subscription identifiers; card data is handled by Stripe.",
    region: "United Kingdom / United States",
  },
  {
    name: "Functional Software, Inc. (Sentry)",
    purpose:
      "Error monitoring and, where enabled, session replay across the extension, portal and backend for diagnosing faults.",
    region: "United States",
  },
  {
    name: "Resend (Plus Five Five, Inc.)",
    purpose: "Delivery of transactional and support emails sent by XTK.",
    region: "United States",
  },
  {
    name: "Hetzner Online GmbH",
    purpose:
      "Hosting of the XTK web portal, backend API and application database.",
    region: "EU (Germany)",
  },
  {
    name: "GitHub, Inc. (GitHub Pages)",
    purpose: "Hosting of the XTK public website.",
    region: "United States",
  },
];
