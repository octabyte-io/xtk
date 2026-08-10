import type { Guide } from "../types";

export const guide: Guide = {
  slug: "getting-started-with-xtk",
  title: "Getting started with XTK — Xero Practice Manager extension",
  description:
    "Install the XTK extension in Chrome or Firefox, register your practice account and take your first look at your new tools inside Xero Practice Manager.",
  series: "Getting started",
  order: 1,
  date: "2026-07-27",
  updated: "2026-08-10",
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
  relatedLinks: [
    { label: "Get started — install XTK", href: "/get-started" },
    { label: "Introducing XTK", href: "/blog/introducing-xtk" },
    { label: "Pricing", href: "/pricing" },
    { label: "Support", href: "/support" },
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
      a: "It is built for both and behaves identically in each. The same extension is published in the Chrome Web Store and on Firefox Add-ons — install it in whichever browser you use for Practice Manager.",
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
      text: [
        "XTK is a browser extension for Chrome and Firefox that adds document management, ",
        { text: "e-signatures", href: "/guides/send-documents-for-signature" },
        ", ",
        { text: "document requests", href: "/guides/document-requests" },
        " and ",
        { text: "a client portal", href: "/guides/set-up-client-portal" },
        " to Xero Practice Manager (XPM) — with every file stored in your practice's own ",
        { text: "Google Drive, OneDrive or SharePoint", href: "/guides/connect-document-storage" },
        ". This guide shows you how to install the extension, register your practice and find your way around the XTK tools that appear inside Practice Manager. Setup takes about ten minutes, and your ",
        { text: "30-day free trial", href: "/pricing" },
        " only starts once you verify your email.",
      ],
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
          text: [
            "Open the XTK listing for your browser — the ",
            {
              text: "Chrome Web Store",
              href: "https://chromewebstore.google.com/detail/octabyte-xtk/kgkoohdbndecnpacdnpobbdbcecbncpo",
            },
            " or ",
            {
              text: "Firefox Add-ons",
              href: "https://addons.mozilla.org/firefox/addon/octabyte-xtk/",
            },
            ". Both buttons are also on the ",
            { text: "Get started page", href: "/get-started" },
            ".",
          ],
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
      text: [
        "XTK is installed, but it isn't connected to anything yet. Two short setup jobs finish the picture: ",
        { text: "connect your document storage", href: "/guides/connect-document-storage" },
        " (Google Drive, OneDrive or SharePoint — ",
        { text: "an Admin-only job", href: "/guides/invite-your-team" },
        ", and the one to do first), then ",
        { text: "connect your email", href: "/guides/connect-your-email" },
        " so XTK can send portal invites and document requests on your behalf.",
      ],
    },
  ],
};
