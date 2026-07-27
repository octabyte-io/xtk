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
      "invite-your-team",
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
  {
    slug: "connect-your-email",
    title: "Connect Gmail or Outlook so XTK can send email for you",
    description:
      "Connect a Gmail or Microsoft mailbox to XTK and send portal invites, document requests and signature emails from your own address in Xero Practice Manager.",
    series: "Getting started",
    order: 3,
    date: "2026-07-27",
    updated: "2026-07-27",
    readingTime: "5 min read",
    ogImage: "/images/guides/connect-your-email/og.png",
    thumbnail: {
      src: "/images/guides/connect-your-email/thumb.png",
      alt: "The XTK Email Templates tab in Xero Practice Manager with the Send my mail from section showing a connected Practice account",
    },
    relatedSlugs: [
      "email-templates",
      "document-requests",
      "set-up-client-portal",
      "getting-started-with-xtk",
    ],
    faq: [
      {
        q: "Can XTK read my email?",
        a: "No. XTK asks Google or Microsoft for send-only permission — the Gmail “send” scope or Microsoft's Mail.Send. It can send messages from your address when you use an XTK feature that sends email, and nothing else: it cannot read, search or delete anything in your mailbox.",
      },
      {
        q: "Do emails sent by XTK appear in my Sent folder?",
        a: "Yes. Mail sent through a connected Gmail account lands in that account's Sent folder, and mail sent through a connected Microsoft account lands in its Sent Items — so you always have your own copy of what went to the client.",
      },
      {
        q: "What happens if we don't connect any mailbox?",
        a: "Everything still works. Portal invites, document requests and signature emails send from XTK's own shared address instead, and the Email Templates tab shows a “Sending from a shared address” notice. Connect a mailbox whenever you're ready and your mail switches to your own name.",
      },
      {
        q: "Can I pick a different sender for each email?",
        a: "No — there is no per-message sender picker. Each person has one saved choice under “Send my mail from”: the Practice account or their own connected mailbox. Change it any time in the XTK panel's Email Templates tab.",
      },
      {
        q: "Can we connect both Gmail and Microsoft?",
        a: "Each slot holds exactly one mailbox — the Practice account is either a Gmail or a Microsoft account, and so is each person's own connection. To switch providers, disconnect and reconnect. The two slots are independent, though: a practice can happily pair a shared Gmail with your personal Outlook.",
      },
    ],
    body: [
      {
        type: "p",
        text: "XTK sends real email on your behalf — client portal invites, document requests and e-signature emails. Connect a Gmail or Microsoft (Outlook) mailbox and those messages go out from your practice's own address rather than a generic one, replies come straight back to you, and every message lands in your own Sent folder. Connecting takes a couple of minutes in the XTK panel inside Xero Practice Manager (XPM).",
      },
      {
        type: "p",
        text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      },
      {
        type: "callout",
        title: "Before you start",
        text: "Anyone can connect their own mailbox, but only the practice Admin can connect the shared Practice account. You'll need the sign-in details for the mailbox you're connecting. Nothing else has to be set up first — email works independently of document storage. New to XTK? Start with the getting-started guide.",
      },
      { type: "h2", text: "What does XTK send email for?" },
      {
        type: "list",
        items: [
          "Client portal invites — the email that gives a client access to their portal.",
          "Document requests — the checklist link a client uses to send you records.",
          "E-signature emails — signing invitations, and the completion email with the signed PDF attached.",
        ],
      },
      {
        type: "p",
        text: "Two kinds of mailbox can do that sending. The Practice account is one shared mailbox — say info@yourpractice.com — that the Admin connects once; it's the default sender for the whole team. Your own account is personal: anyone can connect their own Gmail or Microsoft mailbox and have their mail go out under their own name instead. You can use either, or both.",
      },
      { type: "h2", text: "Connect the Practice account (Admin only)" },
      {
        type: "steps",
        steps: [
          {
            title: "Open the XTK panel",
            text: "In Practice Manager, click the XTK launcher — the last item in the main navigation.",
          },
          {
            title: "Go to Email Templates",
            text: "Click the “Email Templates” tab. Below the templates list you'll find the “Send my mail from” section with two rows: “Practice account” and “Your own account”.",
          },
          {
            title: "Connect the shared mailbox",
            text: "On the “Practice account” row, click “Connect Gmail” or “Connect Microsoft”, whichever matches the mailbox your practice sends from.",
            image: {
              src: "/images/guides/connect-your-email/01-send-my-mail-from.png",
              alt: "The Send my mail from section in XTK's Email Templates tab, with a connected Practice account and Connect Gmail and Connect Microsoft buttons to send email from Xero Practice Manager",
              width: 1456,
              height: 822,
            },
          },
          {
            title: "Approve send-only access",
            text: "Your browser opens the Google or Microsoft consent screen. Sign in with the shared mailbox and approve. You're returned to XTK, and the row now shows the connected address, the date, and a “Sending from this” tag.",
          },
        ],
      },
      {
        type: "p",
        text: "From this moment every team member's mail sends from the shared address automatically — nobody else has to do anything. Members see the Practice account row read-only, marked “Managed by your Practice Admin.”",
      },
      {
        type: "callout",
        title: "XTK can send, never read",
        text: "XTK asks for send-only permission — the Gmail “send” scope on Google, Mail.Send on Microsoft. It cannot read, search or delete anything in the mailbox. And it only sends when you use an XTK feature that sends email; there's no background mail.",
      },
      { type: "h2", text: "Connect your own mailbox" },
      {
        type: "steps",
        steps: [
          {
            title: "Open the same section",
            text: "XTK panel → “Email Templates” → “Send my mail from”. This works for every team member, not just the Admin.",
          },
          {
            title: "Connect on the “Your own account” row",
            text: "Click “Connect Gmail” or “Connect Microsoft”, sign in with your personal work mailbox and approve.",
          },
          {
            title: "You're now the sender",
            text: "Connecting your own mailbox automatically switches your sending to it — your row gains the “Sending from this” tag. Mail you send through XTK now goes out under your own name.",
          },
        ],
      },
      { type: "h2", text: "Choose which address your mail sends from" },
      {
        type: "p",
        text: "Once your own mailbox is connected, the two rows under “Send my mail from” become a picker — click a row to make it your sender, and the “Sending from this” tag moves with your choice. It's a personal setting: your colleagues' choices are their own, and anyone who hasn't connected a personal mailbox simply sends from the Practice account. There is no per-message sender picker — you choose once here, and every portal invite, document request and signature email you send follows it.",
      },
      { type: "h2", text: "What your clients see" },
      {
        type: "p",
        text: "Whatever mailbox does the sending, XTK dresses the message in the same tidy, practice-branded email layout — your clients get a consistent look whether the invite came from the shared address or a colleague's own. And because the mail genuinely goes through Gmail or Microsoft, a copy sits in that mailbox's Sent folder and replies come back to the real address.",
      },
      { type: "h2", text: "Nothing connected? Mail still sends" },
      {
        type: "p",
        text: "You don't have to connect a mailbox to use XTK. With nothing connected, portal invites, document requests and signature emails send from XTK's own shared address, and the Email Templates tab shows a “Sending from a shared address” notice with the exact address your clients will see. It's a perfectly good fallback — but clients recognise your own name more readily, so connecting a mailbox is worth the two minutes.",
      },
      {
        type: "p",
        text: "One exception goes the other way: messages you send to XTK's support team from the Help & Support tab always travel via XTK's own address, never through your mailbox.",
      },
      { type: "h2", text: "Disconnect a mailbox" },
      {
        type: "p",
        text: "Both rows have a “Disconnect” action next to their connected address. Disconnecting your own mailbox flips your sending back to the Practice account. Disconnecting the Practice account (Admin only) leaves colleagues without a personal connection sending from the XTK address until it's reconnected — XTK spells out the consequence and asks you to confirm first.",
      },
      {
        type: "image",
        src: "/images/guides/connect-your-email/02-disconnect-practice-confirm.png",
        alt: "XTK's confirmation dialog when disconnecting the Practice account mailbox, warning that the team can only send from their own connected mailboxes until it is reconnected",
        caption:
          "Disconnecting asks for confirmation and explains exactly what changes.",
        width: 1456,
        height: 822,
      },
      {
        type: "callout",
        title: "Microsoft 365 said no?",
        text: "Some Microsoft 365 organisations block new apps until IT approves them. If the consent screen refuses with a message about needing admin approval, ask your IT admin to approve XTK, then try connecting again. Personal Outlook.com accounts connect without any of that.",
      },
      { type: "h2", text: "Where next" },
      {
        type: "p",
        text: "With a mailbox connected, the features that use it are ready: write reusable email templates for invites and requests, ask clients for records with a document request, or set up a client portal — all covered in the related guides below.",
      },
    ],
  },
  {
    slug: "invite-your-team",
    title: "Invite your team to XTK: members, roles and admin transfer",
    description:
      "Invite team members to XTK from Xero Practice Manager, see what the Admin role controls, transfer Admin to a colleague, and remove or restore members.",
    series: "Getting started",
    order: 4,
    date: "2026-07-27",
    updated: "2026-07-27",
    readingTime: "6 min read",
    ogImage: "/images/guides/invite-your-team/og.png",
    thumbnail: {
      src: "/images/guides/invite-your-team/thumb.png",
      alt: "The XTK Team Members tab in Xero Practice Manager showing a roster of team members with their roles and statuses",
    },
    relatedSlugs: [
      "getting-started-with-xtk",
      "connect-document-storage",
      "connect-your-email",
      "billing-trial-and-subscription",
    ],
    faq: [
      {
        q: "Does each team member need their own XTK subscription?",
        a: "No. One subscription (or one free trial) covers the whole practice — there is no per-seat pricing. Invite as many colleagues as you like; each signs in with their own email and password.",
      },
      {
        q: "Can our practice have two Admins?",
        a: "No — there is exactly one Admin at a time. The Admin is the only person who can connect document storage, connect the shared practice mailbox, manage the team and handle billing. If the wrong person holds the role, transfer it from the Team Members tab: the moment you make a colleague the Admin, you become a Member.",
      },
      {
        q: "What if the invite expires or never arrives?",
        a: "Invite links are single-use and expire after 7 days. Just invite the same email again — XTK sends a fresh link and the old one stops working. If the email hasn't arrived at all, ask your colleague to check their spam folder before you resend.",
      },
      {
        q: "Can I bring back someone I removed?",
        a: "Yes. Removing a member hides them rather than erasing them — tick “Show deleted” to see removed members. To restore someone, simply invite the same email address again; they set a new password and rejoin with their old account.",
      },
      {
        q: "Why is there no “forgot password” link on the staff sign-in page?",
        a: "Staff passwords are changed from inside XTK: open the panel, go to My Account and choose Change password. If a colleague is locked out entirely, the Admin can remove them and re-invite the same email — accepting the fresh invite lets them set a brand-new password.",
      },
    ],
    body: [
      {
        type: "p",
        text: "One XTK subscription covers your whole practice, so once you're set up the next step is bringing everyone else in. The practice Admin invites colleagues by email from the Team Members tab in the XTK panel; each person clicks their invite link, chooses a password and lands signed in — ready to use XTK inside Xero Practice Manager (XPM) with their own account. This guide covers inviting, what Members can and can't do, handing the Admin role to someone else, and removing or restoring a member.",
      },
      {
        type: "p",
        text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      },
      {
        type: "callout",
        title: "Before you start",
        text: "Only the practice Admin — the person who registered the practice, unless the role has been transferred — can invite, remove or promote team members. You'll need each colleague's email address, and they'll need the XTK extension installed in their own browser plus their own Practice Manager login. New to XTK? Start with the getting-started guide.",
      },
      { type: "h2", text: "How team access works in XTK" },
      {
        type: "p",
        text: "Every practice has exactly one Admin; everyone else is a Member. Members use all the day-to-day features — documents, templates, signatures, document requests and the client portal — on the same shared storage and practice mailbox. Four things are reserved for the Admin: connecting or changing document storage, connecting the shared practice mailbox, managing the team, and billing. Members see the Document Storage tab as read-only information, and the Team Members and Billing & Subscription tabs don't appear for them at all.",
      },
      { type: "h2", text: "Invite a team member" },
      {
        type: "steps",
        steps: [
          {
            title: "Open the Team Members tab",
            text: "In Practice Manager, click the XTK launcher — the last item in the main navigation — then click “Team Members”. You'll see everyone in your practice with their role and status.",
            image: {
              src: "/images/guides/invite-your-team/01-team-members-roster.png",
              alt: "The Team Members tab in the XTK panel listing team members with roles and statuses, a filter box, a Show deleted toggle and an Invite member button",
              width: 1456,
              height: 822,
            },
          },
          {
            title: "Click “Invite member”",
            text: "The invite dialog opens with a single field.",
          },
          {
            title: "Enter their email and click “Invite”",
            text: "XTK emails your colleague a single-use invite link that's valid for 7 days.",
            image: {
              src: "/images/guides/invite-your-team/02-invite-member-dialog.png",
              alt: "XTK's Invite member dialog with an email address filled in, ready to add team members to the practice",
              width: 1456,
              height: 822,
            },
          },
          {
            title: "Watch for the new row",
            text: "Your colleague appears in the list straight away as “Member · Invited”, flipping to “Active” once they accept.",
          },
        ],
      },
      {
        type: "callout",
        title: "One practice per email",
        text: "An email address can only belong to one practice on XTK. If you see “That email is already attached to another Practice on XTK”, your colleague has an account elsewhere — they'll need to use a different address for yours.",
      },
      { type: "h2", text: "What your colleague sees" },
      {
        type: "steps",
        steps: [
          {
            title: "They open the invite email",
            text: "It's titled “You've been invited to XTK” and names your practice and the person who sent it. They click “Accept invitation” within 7 days.",
          },
          {
            title: "They choose a password",
            text: "The link opens the “Join your team on XTK” page, where they set a password of at least 8 characters and click “Set password and join”.",
            image: {
              src: "/images/guides/invite-your-team/04-accept-invite.png",
              alt: "The Join your team on XTK page where an invited team member sets a password to finish creating their account",
              width: 1456,
              height: 822,
            },
          },
          {
            title: "They're in — no verification step",
            text: "Accepting the invite signs them straight in. With the XTK extension installed in their browser, they open Practice Manager and everything is already connected — storage, templates and the practice mailbox are shared automatically.",
          },
        ],
      },
      {
        type: "callout",
        title: "Passwords change from My Account",
        text: "There is no “forgot password” link on the staff sign-in page. To change a password, open the XTK panel, go to My Account and click Change next to Password. If someone is locked out completely, the Admin can remove them and re-invite the same email — the fresh invite lets them set a new password.",
      },
      { type: "h2", text: "Transfer the Admin role" },
      {
        type: "p",
        text: "Handing over the practice — or just giving the role to the person who actually manages billing? The Admin role moves in one step, and because there is only ever one Admin, promoting a colleague automatically makes you a Member.",
      },
      {
        type: "steps",
        steps: [
          {
            title: "Open the member's row menu",
            text: "In “Team Members”, click the three-dot menu on your colleague's row. “Make admin” is offered only for members who have accepted their invite — you can't hand the role to someone still marked Invited.",
          },
          {
            title: "Click “Make admin” and confirm",
            text: "XTK spells out what changes: they gain full practice access, and you become a Member.",
            image: {
              src: "/images/guides/invite-your-team/03-make-admin-confirm.png",
              alt: "XTK's Make admin confirmation dialog explaining that the chosen member gains full practice access and the current Admin becomes a Member",
              width: 1456,
              height: 822,
            },
          },
          {
            title: "The role moves instantly",
            text: "Your colleague is now the Admin and the admin-only tabs leave your panel. If they have Practice Manager open at that moment, they should refresh the page to see their new Team Members and Billing tabs appear.",
          },
        ],
      },
      { type: "h2", text: "Remove a member — and bring them back" },
      {
        type: "p",
        text: "When someone leaves the practice, remove them from the same row menu: click the three-dot menu, choose “Delete” and confirm. They are signed out of XTK immediately on every device and their row disappears from the list. Nothing they worked on goes with them — client documents live in your practice's storage, and templates and requests belong to the practice.",
      },
      {
        type: "p",
        text: "Removal is reversible. Tick “Show deleted” above the list to see removed members, struck through with a “Deleted” status. To restore someone, invite the same email address again: they accept the fresh invite, choose a new password and rejoin as a Member.",
      },
      {
        type: "callout",
        title: "A few guard rails",
        text: "You can't remove yourself, and you can't transfer the Admin role to yourself. To leave a practice as the Admin, make a colleague the Admin first — then they can remove you.",
      },
      { type: "h2", text: "Where next" },
      {
        type: "p",
        text: "With the team on board, everyone shares the same storage, templates and mailbox — so anything one person sets up benefits the whole practice. If you're still in your trial, the billing guide below explains what happens when it ends and how upgrading covers everyone at once.",
      },
    ],
  },
  {
    slug: "manage-client-documents",
    title: "Manage client documents inside Xero Practice Manager",
    description:
      "Browse, upload, organise and find client files without leaving Xero Practice Manager — XTK's Documents tab keeps every file in your practice's own storage.",
    series: "Documents",
    order: 5,
    date: "2026-07-27",
    updated: "2026-07-27",
    readingTime: "7 min read",
    ogImage: "/images/guides/manage-client-documents/og.png",
    thumbnail: {
      src: "/images/guides/manage-client-documents/thumb.png",
      alt: "The XTK Documents tab on a client in Xero Practice Manager, listing folders and files with sizes and modified dates",
    },
    relatedSlugs: [
      "bulk-file-actions",
      "document-templates",
      "folder-templates",
      "document-requests",
      "send-documents-for-signature",
      "set-up-client-portal",
      "connect-document-storage",
      "getting-started-with-xtk",
    ],
    faq: [
      {
        q: "Where are the files actually stored?",
        a: "In your practice's own Google Drive, OneDrive or SharePoint — one folder per client inside your Main Storage Folder. The Documents tab is a window onto that folder: uploads and downloads travel directly between your browser and Google or Microsoft, and XTK's servers never hold your file contents.",
      },
      {
        q: "What happened to Xero's own Documents tab?",
        a: "XTK hides Xero's native Documents tab on client pages and replaces it with its own, so there's one place to look. Anything you previously stored through Xero's tab is still in Xero — XTK doesn't touch it — but new filing happens in your practice's connected storage.",
      },
      {
        q: "Can I move a file from one client to another?",
        a: "Not from the Documents tab. Every XTK file operation is contained inside the client's own folder — move and copy destinations can't leave it, which is what stops documents ending up under the wrong client. For a genuine cross-client move, use Google Drive, OneDrive or SharePoint directly.",
      },
      {
        q: "Are my favourite stars visible to colleagues?",
        a: "No — favourites are personal bookmarks. Starring a file or folder changes what you see when you switch on the favourites filter, and nothing for anyone else.",
      },
      {
        q: "Is there a file size limit on uploads?",
        a: "Yes, 100 MB per file. There's no practical limit on how many files you upload — pick as many as you like in one go and the upload tray works through them.",
      },
      {
        q: "I deleted a file by mistake — can I get it back?",
        a: "Yes. Delete moves files to your storage provider's trash (for example Drive's bin), where they can be restored for around 30 days. Restore it there and press refresh in the Documents tab.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Every client in Xero Practice Manager (XPM) gets a Documents tab from XTK: a full file manager for that client's folder in your practice's own Google Drive, OneDrive or SharePoint. You can browse, search, upload, rename, favourite, share and organise client files without leaving Practice Manager — and because it's your storage underneath, everything you do here is just ordinary files and folders in your own drive.",
      },
      {
        type: "p",
        text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      },
      {
        type: "callout",
        title: "Before you start",
        text: "Your practice Admin must have connected document storage (see the related guide) — until then the Documents tab shows a notice instead of files. Everything in this guide works for every team member, Admin or not.",
      },
      { type: "h2", text: "Open a client's documents" },
      {
        type: "p",
        text: "Open any client in Practice Manager and click the “Documents” tab — XTK replaces Xero's native Documents tab with its own. What you're looking at is the client's own folder in your practice's storage: files and folders listed with size and modified date, a search box, and a toolbar for everything you can create.",
      },
      {
        type: "image",
        src: "/images/guides/manage-client-documents/01-documents-tab.png",
        alt: "The XTK Documents tab on a client page in Xero Practice Manager, showing folders and files with sizes, modified dates, a search box and the Create menu",
        caption:
          "The Documents tab: the client's storage folder, without leaving Practice Manager.",
        width: 1456,
        height: 822,
      },
      { type: "h2", text: "How XTK finds the client's folder" },
      {
        type: "p",
        text: "The first time anyone opens a client's Documents tab, XTK looks inside your Main Storage Folder for a folder named after the client:",
      },
      {
        type: "list",
        items: [
          "Exactly one folder matches the client's name — XTK adopts it, and your existing files appear immediately.",
          "No folder matches — XTK creates one named after the client, so brand-new clients need no setup at all.",
          "Two or more folders match — XTK asks you to pick the right one (or create a fresh one) rather than guess.",
        ],
      },
      {
        type: "p",
        text: "Picked the wrong folder, or reorganised your drive? Click “Change storage folder” at the right of the toolbar and choose again. It only re-points XTK — nothing in your drive is moved or deleted.",
      },
      { type: "h2", text: "Find files: browse, search, favourites" },
      {
        type: "list",
        items: [
          "Browse: click a folder to open it, and use the breadcrumb above the list to step back up. Click a file's name to open it in Google Drive, OneDrive or SharePoint in a new tab.",
          "Search: type in the search box to find files by name — it searches the folder you're in and every subfolder beneath it, and each result shows the folder path it lives in. Click the × to return to browsing.",
          "Favourites: hover over a row and click the star to bookmark files or folders you keep coming back to. The star button in the toolbar filters the list to your favourites only — they're personal, so your stars are yours alone.",
          "Refresh: the circular-arrow button re-reads the folder — handy when a colleague has just filed something.",
        ],
      },
      { type: "h2", text: "Upload files" },
      {
        type: "steps",
        steps: [
          {
            title: "Open the Create menu",
            text: "Click “Create” in the toolbar. Everything you can add to the folder lives here: “Upload”, “Create folder”, “File from template”, “Folder from template” and “Request documents”.",
            image: {
              src: "/images/guides/manage-client-documents/02-create-menu.png",
              alt: "The Create menu in XTK's Documents tab open, showing Upload, Create folder, File from template, Folder from template and Request documents",
              width: 1456,
              height: 822,
            },
          },
          {
            title: "Choose “Upload” and pick your files",
            text: "Select one file or many — each can be up to 100 MB. The upload starts as soon as you confirm the picker.",
          },
          {
            title: "Watch the upload tray",
            text: "A tray appears at the bottom of the tab listing each file's progress. Files travel straight from your browser to Google or Microsoft — if one fails, click “Retry” next to it (or “Retry all failed”), and click “Clear” to dismiss the tray when everything's done.",
            image: {
              src: "/images/guides/manage-client-documents/04-upload-tray.png",
              alt: "XTK's upload tray at the bottom of the Documents tab showing a file uploading to the client folder in Xero Practice Manager",
              width: 1456,
              height: 822,
            },
          },
        ],
      },
      {
        type: "p",
        text: "To add a folder, use “Create” → “Create folder”, name it, and it appears in the listing — inside the client's folder, like everything else here. If your practice files every client the same way, folder templates can create the whole structure in one action (see the related guide).",
      },
      { type: "h2", text: "Rename, download and more: the row menu" },
      {
        type: "p",
        text: "Each row has a ⋮ menu at the right, and it only offers what makes sense for that item:",
      },
      {
        type: "image",
        src: "/images/guides/manage-client-documents/03-row-actions.png",
        alt: "The per-row actions menu on a PDF in XTK's Documents tab, showing Download, Send for signature, Rename, Delete and Share",
        caption:
          "The row menu on a PDF. A Word document shows “Convert to PDF” here too; folders keep just Rename, Delete and Share.",
        width: 1456,
        height: 822,
      },
      {
        type: "list",
        items: [
          "Download — saves the file through your browser.",
          "Convert to PDF — Word documents only: creates a PDF copy beside the original, keeping both.",
          "Send for signature — PDFs only: starts an e-signature request for this file (covered in its own guide).",
          "Rename — the name becomes editable in place; type the new name and press Enter.",
          "Delete — moves the item to your storage provider's trash (more below).",
          "Share / Unshare — publishes the file or folder to this client's portal, once the portal is enabled (covered in its own guide).",
        ],
      },
      { type: "h2", text: "Delete a file — and get it back" },
      {
        type: "p",
        text: "Deleting asks for confirmation, and it's a soft delete: the file moves to your storage provider's trash, where it can be restored for around 30 days. Nothing is permanently destroyed from the Documents tab.",
      },
      {
        type: "image",
        src: "/images/guides/manage-client-documents/05-delete-confirm.png",
        alt: "XTK's delete confirmation dialog offering Move to Trash, noting the file can be restored from the storage provider's trash for about 30 days",
        caption:
          "Delete is reversible — files go to your drive's trash, not into the void.",
        width: 590,
        height: 270,
      },
      { type: "h2", text: "Working with several files at once" },
      {
        type: "p",
        text: "Tick the checkboxes at the left of the list and a selection bar appears with bulk actions: move, copy, download as zip, merge PDFs, convert to PDF, delete and share. That's a guide of its own — see “Bulk file actions” in the related guides.",
      },
      {
        type: "callout",
        title: "Everything stays in the client's folder",
        text: "Every action on this tab is contained inside the client's own folder — uploads land there, new folders nest there, and move or copy destinations can't leave it. Filing from Practice Manager can never scatter documents across your drive or into another client's folder.",
      },
      { type: "h2", text: "Where next" },
      {
        type: "p",
        text: "With filing sorted, the rest of the Documents series builds on this tab: bulk actions for moving and merging, document templates that write client letters for you, and folder templates for a standard structure. When you need something from the client instead, “Create” → “Request documents” sends them a checklist — that's the document requests guide.",
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
