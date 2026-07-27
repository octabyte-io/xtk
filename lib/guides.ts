/**
 * Content store for the /guides section (user-guide articles).
 *
 * Mirrors lib/posts.ts but with a richer block AST (images, steps, h3, video)
 * and guide-specific metadata (series, order, updated, faq, relatedSlugs).
 * Articles are authored one per session — see user-guide/MASTER-PLAN.md for
 * slugs, briefs and status.
 */

export type GuideStep = {
  /** Short imperative name for the step (feeds HowTo JSON-LD `name`). */
  title: string;
  /** The full step instruction. */
  text: string;
  /** Intrinsic pixel size defaults to the 1440×900 screenshot standard. */
  image?: { src: string; alt: string; width?: number; height?: number };
};

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string }
  | {
      type: "image";
      /** Path under public/, e.g. "/images/guides/<slug>/01-name.png". */
      src: string;
      alt: string;
      caption?: string;
      /** Intrinsic pixel size; defaults to the 1440×900 screenshot standard. */
      width?: number;
      height?: number;
    }
  | {
      type: "steps";
      /** Optional heading rendered above the steps (h3-level). */
      title?: string;
      steps: GuideStep[];
    }
  | {
      type: "video";
      /** Path under public/ to an .mp4/.webm (or .gif — rendered as <img>). */
      src: string;
      /** Static-fallback description, also used as alt/aria-label. */
      alt: string;
      caption?: string;
    };

export type GuideSeries =
  | "Getting started"
  | "Documents"
  | "Client-facing"
  | "Account & trust";

/** Index-page and prev/next ordering of the series. */
export const guideSeriesOrder: GuideSeries[] = [
  "Getting started",
  "Documents",
  "Client-facing",
  "Account & trust",
];

export type GuideFaq = { q: string; a: string };

export type Guide = {
  slug: string;
  /** Page H1 and <title> (≤60 chars, contains the primary keyword). */
  title: string;
  /** Meta description, 150–160 chars, action-phrased. */
  description: string;
  series: GuideSeries;
  /** Position within the series (drives index grouping and prev/next). */
  order: number;
  date: string; // ISO date first published
  updated: string; // ISO date last materially updated
  readingTime: string;
  faq: GuideFaq[];
  /** Slugs of related guides, rendered under the article and used for interlinks. */
  relatedSlugs: string[];
  /** Path under public/ to the 1200×630 OG image; falls back to the site default. */
  ogImage?: string;
  /**
   * Path under public/ to the 1200×675 card/post thumbnail (rendered from
   * user-guide/assets/thumb-template.html); omitted → text-only card.
   */
  thumbnail?: { src: string; alt: string };
  body: GuideBlock[];
};

export function formatGuideDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/**
 * The guides, in no particular order — helpers below sort. Written one per
 * session; keep slugs/titles in sync with user-guide/MASTER-PLAN.md.
 */
export const guides: Guide[] = [
  {
    slug: "getting-started-with-xtk",
    title: "Getting started with XTK — Xero Practice Manager extension",
    description:
      "Install the XTK extension in Chrome or Firefox, register your practice account and take your first look at your new tools inside Xero Practice Manager.",
    series: "Getting started",
    order: 1,
    date: "2026-07-27",
    updated: "2026-07-27",
    readingTime: "5 min read",
    ogImage: "/images/guides/getting-started-with-xtk/og.png",
    thumbnail: {
      src: "/images/guides/getting-started-with-xtk/thumb.png",
      alt: "The XTK practice registration form, framed in a browser window",
    },
    relatedSlugs: [
      "connect-document-storage",
      "connect-your-email",
      "billing-trial-and-subscription",
    ],
    faq: [
      {
        q: "Does XTK need access to my Xero account?",
        a: "No. XTK never asks you to authorise it with Xero and has no server-side access to your Xero data. It reads client details live inside your own signed-in Practice Manager tab, and only on practicemanager.xero.com — the extension does nothing on any other website.",
      },
      {
        q: "When does the 30-day free trial start?",
        a: "When you click the verification link in your email — not when you submit the registration form. The trial covers your whole practice, and no payment card is needed to start it.",
      },
      {
        q: "Does XTK work in both Chrome and Firefox?",
        a: "Yes. The same extension is published for Google Chrome and for Firefox, and it behaves the same way in both. Install it in whichever browser you use for Practice Manager.",
      },
      {
        q: "Can my whole team use XTK?",
        a: "Yes — one subscription covers the whole practice. Once you're set up, the Admin can invite colleagues from the XTK panel's Team Members tab, and each person signs in with their own account.",
      },
      {
        q: "How do I change my XTK password?",
        a: "Open the XTK panel from the launcher in Practice Manager's navigation, go to My Account and choose Change password. There is no “forgot password” link on the staff sign-in page, so keep your password somewhere safe.",
      },
    ],
    body: [
      {
        type: "p",
        text: "XTK is a browser extension for Chrome and Firefox that adds document management, e-signatures, document requests and a client portal to Xero Practice Manager (XPM) — with every file stored in your practice's own Google Drive, OneDrive or SharePoint. This guide shows you how to install the extension, register your practice and find your way around the XTK tools that appear inside Practice Manager. Setup takes about ten minutes, and your 30-day free trial only starts once you verify your email.",
      },
      {
        type: "p",
        text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited. It works alongside your existing Practice Manager login — there is nothing to set up on the Xero side.",
      },
      {
        type: "callout",
        title: "Before you start",
        text: "You need Google Chrome or Firefox, a Xero Practice Manager login, and an email address for your new account. The person who registers becomes the practice Admin — the only role that can connect storage, invite the team and manage billing — so if that should be someone else, send them this guide instead. No payment card is needed.",
      },
      { type: "h2", text: "What is XTK?" },
      {
        type: "p",
        text: "Once installed, XTK lives entirely inside Practice Manager. On every client you'll see three new tabs — Documents, Signatures and Client Portal — where you organise files, send documents for e-signature, request records from clients and share files securely through a portal. Behind the scenes your files stay in your own cloud storage: XTK never copies them to its servers.",
      },
      { type: "h2", text: "Install the extension" },
      {
        type: "steps",
        steps: [
          {
            title: "Open the store listing",
            text: "Open the XTK listing in the Chrome Web Store, or on Firefox Add-ons if Firefox is your browser. Both are linked from the XTK homepage.",
          },
          {
            title: "Add it to your browser",
            text: "Click Add to Chrome (or Add to Firefox) and confirm. The XTK icon appears in your browser toolbar.",
          },
          {
            title: "Land on the sign-in page",
            text: "Right after installing, the extension opens the XTK sign-in page in a new tab. If your practice already uses XTK, sign in here and skip ahead to the tour below — otherwise carry on to registration.",
          },
        ],
      },
      { type: "h2", text: "Register your practice" },
      {
        type: "steps",
        steps: [
          {
            title: "Open the registration form",
            text: "On the sign-in page, click Create one under “No account yet?”. You can also reach it any time at the XTK web portal's /register page.",
          },
          {
            title: "Fill in your practice details",
            text: "Enter your practice name, your email address, and a password of at least 8 characters (twice).",
            image: {
              src: "/images/guides/getting-started-with-xtk/01-register-form.png",
              alt: "The Create your XTK practice registration form filled in with a practice name, email and password",
              width: 1489,
              height: 812,
            },
          },
          {
            title: "Accept the terms and submit",
            text: "Tick “I agree to the Terms of Service and Privacy Policy”, then click Create practice.",
          },
          {
            title: "Check your inbox",
            text: "XTK confirms it has sent you a verification link. Click the link in the email within 15 minutes.",
            image: {
              src: "/images/guides/getting-started-with-xtk/02-verification-sent.png",
              alt: "Confirmation that a verification link was sent, with a reminder to click it within 15 minutes to start the 30-day trial",
              width: 1489,
              height: 812,
            },
          },
        ],
      },
      { type: "h2", text: "Verify your email — your trial starts here" },
      {
        type: "p",
        text: "The verification link signs you in and hands your session straight to the extension. When you see “All set. You can close this tab and open the XTK toolbar.”, you're done — there is nothing else to configure in the browser.",
      },
      {
        type: "image",
        src: "/images/guides/getting-started-with-xtk/03-handoff-all-set.png",
        alt: "The XTK secure handoff screen confirming you are verified and signed in, ready to use the Xero Practice Manager extension",
        caption: "After verification, XTK signs the extension in for you automatically.",
        width: 1489,
        height: 812,
      },
      {
        type: "callout",
        title: "Two things worth knowing",
        text: "The verification link expires after 15 minutes, so click it promptly. And your 30-day trial starts at the moment you verify — not when you filled in the form — so you lose nothing by registering ahead of time.",
      },
      { type: "h2", text: "Take your first look inside Practice Manager" },
      {
        type: "p",
        text: "Open Practice Manager at practicemanager.xero.com (or refresh the tab if it was already open). XTK appears automatically in four places:",
      },
      {
        type: "list",
        items: [
          "The XTK banner sits at the very top of every page and shows your trial status — for example “Trial — 30 days left” — with an Upgrade button for the Admin.",
          "The XTK launcher is the last item in Practice Manager's main navigation. It opens the full-page XTK panel, home to Document Storage, Email Templates, Team Members, Billing, My Account and Help & Support.",
          "The notification bell is the first icon in Practice Manager's top-right tools row — separate from Xero's own bell — and collects XTK activity such as completed signatures and client uploads.",
          "On every client page, three new tabs appear: Documents, Signatures and Client Portal. XTK's Documents tab replaces Xero's native one, which is hidden while the extension is active.",
        ],
      },
      {
        type: "p",
        text: "The XTK icon in your browser toolbar is a status window rather than a control panel: it shows the email you're signed in with and your trial countdown, plus Upgrade and Log out buttons. Everything you actually do with XTK happens inside Practice Manager itself.",
      },
      {
        type: "callout",
        title: "No “forgot password” on the staff sign-in page",
        text: "Staff accounts change their password inside XTK: open the panel from the launcher, go to My Account, then Change password. Only your clients' portal sign-in has a self-serve password reset — so keep your own password somewhere safe.",
      },
      { type: "h2", text: "Where next" },
      {
        type: "p",
        text: "XTK is installed, but it isn't connected to anything yet. Two short setup jobs finish the picture: connect your document storage (Google Drive, OneDrive or SharePoint — an Admin-only job, and the one to do first), then connect your email so XTK can send portal invites and document requests on your behalf. Both are covered in the related guides below.",
      },
    ],
  },
  {
    slug: "connect-document-storage",
    title: "Connect Google Drive, OneDrive or SharePoint to XTK",
    description:
      "Connect Google Drive, OneDrive or SharePoint to XTK so each client document in Xero Practice Manager stays in storage your practice owns. A 10-minute Admin job.",
    series: "Getting started",
    order: 2,
    date: "2026-07-27",
    updated: "2026-07-27",
    readingTime: "6 min read",
    ogImage: "/images/guides/connect-document-storage/og.png",
    thumbnail: {
      src: "/images/guides/connect-document-storage/thumb.png",
      alt: "The XTK Document Storage tab in Xero Practice Manager showing a connected OneDrive and the practice's storage root folder",
    },
    relatedSlugs: [
      "manage-client-documents",
      "how-xtk-handles-your-data",
      "connect-your-email",
      "getting-started-with-xtk",
    ],
    faq: [
      {
        q: "Can we connect more than one storage provider?",
        a: "No — a practice uses exactly one of Google Drive, OneDrive or SharePoint at a time. To switch providers, the Admin disconnects the current one and connects the new one. Your files stay where they are; XTK only ever points at storage, it doesn't hold it.",
      },
      {
        q: "Do my team members connect their own Google or Microsoft accounts?",
        a: "No. The Admin connects once for the whole practice, and everyone works through that connection. Members see a read-only summary of what's connected in the XTK panel — they never sign in to the storage account themselves.",
      },
      {
        q: "We already have client folders in Drive — will XTK duplicate them?",
        a: "No, if you point XTK at them. During setup, choose Browse and pick the folder that encloses your existing per-client folders. When someone first opens a client, XTK adopts the folder with the matching name instead of creating a new one.",
      },
      {
        q: "Does XTK copy our files to its own servers?",
        a: "No. Files stay in your practice's own Google Drive, OneDrive or SharePoint. Uploads and downloads go directly between your browser and Google or Microsoft — XTK's servers store account and request details, never your file contents.",
      },
      {
        q: "What happens to our files if we disconnect?",
        a: "Nothing. Disconnecting only removes XTK's access — every folder and file stays exactly where it is in your storage, as ordinary folders and files. Members lose access to client folders through XTK until you reconnect, and adopting the same folder again picks up where you left off.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Connect your practice's own Google Drive, OneDrive or SharePoint to XTK and every client document you handle in Xero Practice Manager (XPM) stays in storage you control. It's a one-off job for the practice Admin: choose a provider, approve access, and pick one main storage folder. From then on the whole team works with the same client folders without leaving Practice Manager.",
      },
      {
        type: "p",
        text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      },
      {
        type: "callout",
        title: "Before you start",
        text: "Only the practice Admin can connect, change or disconnect document storage — everyone else sees a read-only summary. Have the sign-in details for the Google or Microsoft account your practice keeps documents in; for SharePoint that must be a work or school account, not a personal one. New to XTK? Start with the getting-started guide first.",
      },
      { type: "h2", text: "Why connect storage first?" },
      {
        type: "p",
        text: "Almost everything XTK does ends up as a file: the Documents tab, generated letters, records clients send you, signed PDFs and their completion certificates, and everything you share through the client portal. Until storage is connected, none of that has anywhere to live — your colleagues will simply see “Your Practice Admin hasn't connected document storage yet.” Connect it once and every other feature lights up.",
      },
      { type: "h2", text: "Choose your provider and approve access" },
      {
        type: "steps",
        steps: [
          {
            title: "Open the XTK panel",
            text: "In Practice Manager, click the XTK launcher — the last item in the main navigation. The full-page XTK panel opens.",
          },
          {
            title: "Go to Document Storage",
            text: "Click the “Document Storage” tab. You'll see “Connect your document storage” with three choices: “Google Drive”, “OneDrive” and “SharePoint”.",
          },
          {
            title: "Pick your provider",
            text: "Click the provider your practice uses. A practice connects exactly one. If you're a Microsoft shop, choose “SharePoint” when client files live in a SharePoint site's document library, and “OneDrive” when they live in a single OneDrive — the choice matters, because it decides what access XTK asks Microsoft for.",
          },
          {
            title: "Sign in and approve",
            text: "Your browser opens the Google or Microsoft consent screen. Sign in with the account that holds (or should hold) your practice's documents and approve the access. You're returned to XTK automatically, and the panel moves on to storage setup.",
          },
        ],
      },
      {
        type: "callout",
        title: "Microsoft 365 said no?",
        text: "Some Microsoft 365 organisations block new apps until IT approves them. If the consent screen refuses with a message about needing admin approval, ask your IT admin to approve XTK, then try connecting again. And if XTK can't reach SharePoint at all, check you signed in with a work or school account — personal Microsoft accounts don't have SharePoint.",
      },
      { type: "h2", text: "Tell XTK where your documents live" },
      {
        type: "p",
        text: "Depending on the provider, XTK may ask one more question before the folder step — it wants to anchor itself on the drive your team actually uses. Everything XTK ever stores stays inside the drive you pick here.",
      },
      {
        type: "list",
        items: [
          "Google Drive: if your account has Shared Drives, XTK asks “Where do your client documents live?” — click “Use My Drive” for your personal drive, or “Use this drive” next to a Shared Drive your team shares. If you have no Shared Drives, this step is skipped.",
          "OneDrive: there's only one drive, so XTK goes straight to the folder step.",
          "SharePoint: pick your site first — sites you follow are listed, and you can search for any other site in your organisation. If the site has more than one document library, pick the one that holds your client documents.",
        ],
      },
      {
        type: "p",
        text: "Changed your mind mid-way? Click “← Choose a different storage option” to go back and pick another drive or provider — nothing is committed until the storage folder is set.",
      },
      { type: "h2", text: "Set your main storage folder" },
      {
        type: "p",
        text: "XTK keeps everything it manages inside one folder — your Main Storage Folder — with one subfolder per client. On this step XTK searches the drive you picked for an existing folder named “XTK – XPM Storage”, and you have three ways to finish:",
      },
      {
        type: "list",
        items: [
          "Adopt the folder XTK found: if your practice has used XTK before, the existing folder appears as a card — click “Use this folder” and you're done, with all your client folders intact.",
          "Create a fresh one: choose the create option and XTK makes a new, empty folder named “XTK – XPM Storage” at the top level of the drive you picked.",
          "Browse and choose your own: click “Browse…” and pick any folder. Choose the folder that encloses your existing per-client folders — it becomes your practice's storage root.",
        ],
      },
      {
        type: "callout",
        title: "Already keep client folders in your drive?",
        text: "Browse to their parent folder and adopt it, rather than creating a fresh one. When someone first opens a client in Practice Manager, XTK looks for a folder with that client's name inside your Main Storage Folder and adopts it — so your existing structure carries straight over, nothing gets duplicated, and nothing is moved.",
      },
      {
        type: "p",
        text: "One more folder appears later without any setup: “XTK – Templates”, created automatically inside your Main Storage Folder the first time your practice uses document templates.",
      },
      { type: "h2", text: "What your team sees" },
      {
        type: "p",
        text: "Once connected, the Document Storage tab shows the provider, your storage root folder, the account it's connected as, and the date it was connected. Members see the same summary with a note — “Read-only — only the Practice Admin can change the Drive connection.” Nobody else signs in to Google or Microsoft; the whole team works through the practice connection, and client folders simply appear in each client's Documents tab.",
      },
      {
        type: "image",
        src: "/images/guides/connect-document-storage/03-connected-view.png",
        alt: "The XTK Document Storage tab in Xero Practice Manager showing OneDrive connected, with the storage root folder, the connected account and the Change storage folder and Disconnect buttons",
        caption:
          "The connected view: your storage root, the connected account, and the Admin-only actions.",
        width: 1456,
        height: 822,
      },
      { type: "h2", text: "Change the storage folder later" },
      {
        type: "steps",
        steps: [
          {
            title: "Open Document Storage",
            text: "In the XTK panel, go to “Document Storage”. As Admin you'll see two buttons under the connection summary.",
          },
          {
            title: "Click “Change storage folder”",
            text: "A folder browser opens. Pick the folder that encloses your per-client folders — it becomes the new storage root.",
            image: {
              src: "/images/guides/connect-document-storage/04-change-folder-browse.png",
              alt: "The Change storage folder browser in XTK listing the drive's folders, each with a Use folder button and a filter box",
              width: 1456,
              height: 822,
            },
          },
          {
            title: "Confirm the move",
            text: "XTK explains exactly what changes: each client and your templates are re-located by name under the new folder the next time they're opened, and anything without a matching folder will ask you to choose one again. Click “Use this folder” to confirm.",
            image: {
              src: "/images/guides/connect-document-storage/05-change-folder-confirm.png",
              alt: "XTK's Change storage folder confirmation dialog explaining that clients re-locate by name and nothing in the drive is moved or deleted",
              width: 1456,
              height: 822,
            },
          },
        ],
      },
      {
        type: "callout",
        title: "Changing folders never moves your files",
        text: "“Change storage folder” only re-points XTK. Nothing in your drive is moved or deleted, so if you switch back to the previous folder, the previous mappings are restored.",
      },
      { type: "h2", text: "Disconnect document storage" },
      {
        type: "p",
        text: "On the same tab, the Admin can click “Disconnect”. XTK asks you to confirm, with a plain warning: members will lose access to client folders until you reconnect. Your files are untouched — disconnecting only removes XTK's access to the account. Reconnecting walks the same setup again, and adopting your existing “XTK – XPM Storage” folder brings everything back as it was.",
      },
      { type: "h2", text: "Your files never leave your storage" },
      {
        type: "p",
        text: "This connection is also XTK's core privacy promise. Files are stored only in your practice's Google Drive, OneDrive or SharePoint — uploads and downloads travel directly between your browser and Google or Microsoft, and XTK's servers never hold your file contents. Every file operation stays inside the client's own folder, so nothing you do in XTK can scatter documents around your drive. Even client portal sharing works by marking files, not copying them out. The full story is in the related guide on how XTK handles your data.",
      },
      { type: "h2", text: "Where next" },
      {
        type: "p",
        text: "With storage connected, open any client in Practice Manager and the Documents tab is ready to use — that's the next guide. And if you also connect your email, XTK can send document requests and portal invites for you from your own address.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/** All guides in reading order: series order, then `order` within a series. */
export function getAllGuides(): Guide[] {
  return [...guides].sort((a, b) => {
    const s =
      guideSeriesOrder.indexOf(a.series) - guideSeriesOrder.indexOf(b.series);
    return s !== 0 ? s : a.order - b.order;
  });
}

/** Guides grouped by series, in series order; empty series omitted. */
export function getGuidesBySeries(): { series: GuideSeries; guides: Guide[] }[] {
  const all = getAllGuides();
  return guideSeriesOrder
    .map((series) => ({ series, guides: all.filter((g) => g.series === series) }))
    .filter((group) => group.guides.length > 0);
}

/** The guide's declared related guides, resolved and in declaration order. */
export function getRelatedGuides(slug: string): Guide[] {
  const current = getGuide(slug);
  if (!current) return [];
  return current.relatedSlugs
    .map((s) => getGuide(s))
    .filter((g): g is Guide => Boolean(g));
}

/** Previous/next guide within the full reading order (for series navigation). */
export function getAdjacentGuides(slug: string): {
  prev?: Guide;
  next?: Guide;
} {
  const all = getAllGuides();
  const i = all.findIndex((g) => g.slug === slug);
  if (i === -1) return {};
  return { prev: all[i - 1], next: all[i + 1] };
}
