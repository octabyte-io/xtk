import type { Guide } from "../types";

export const guide: Guide = {
  slug: "client-portal-guide-for-clients",
  title: "How to use your accountant's client portal",
  description:
    "How to use your accountant's client portal: accept the invite, sign in, download shared files, upload your own, sign documents and reset your password.",
  series: "Client-facing",
  order: 15,
  date: "2026-07-29",
  updated: "2026-07-29",
  readingTime: "10 min read",
  ogImage: "/images/guides/client-portal-guide-for-clients/og.png",
  thumbnail: {
    src: "/images/guides/client-portal-guide-for-clients/thumb.png",
    alt: "The XTK client portal open in a browser showing a client's shared folders and shared files, ready to download or upload",
  },
  relatedSlugs: [
    "set-up-client-portal",
    "esignatures-what-your-client-sees",
    "document-requests",
  ],
  faq: [
    {
      q: "Do I need to create an account or install anything?",
      a: "You need a password, and nothing else. The invite link from your accountant is where you choose it — there is no sign-up form to find, no software to install, and no app to download. If you have been invited by more than one practice, or for more than one business, the same email and password covers all of them.",
    },
    {
      q: "Can my accountant see everything in my portal, and can I see everything in theirs?",
      a: "No, in both directions. You only ever see the folders and files your accountant has deliberately shared with you: the folder that contains them, their other clients, and anything they have not shared stay invisible, and you cannot browse upwards out of a shared folder. Anything you upload goes into the shared folder, where they can see it.",
    },
    {
      q: "I uploaded the wrong file. Can I delete it?",
      a: "Yes, within 10 minutes of uploading it. Your own uploads carry a “…” menu with “Rename”, “Move to” and “Delete” for those 10 minutes; after that they are fixed, like everything else in the folder, and you should ask your accountant. The 10 minutes runs from when the file was created and is not extended by renaming it.",
    },
    {
      q: "What happens if I forget my password?",
      a: "Use “Forgot your password?” on the sign-in page. XTK emails a link that lasts one hour and works once, and setting a new password signs you out everywhere else. Your accountant cannot see or set your password — they can only re-send the original invite, which is a different thing.",
    },
    {
      q: "Why is my name wrong, and how do I change it?",
      a: "The name on your portal is the one your accountant typed when they invited you, and Settings deliberately does not let you edit it — it is their record of who you are, not your profile. Ask them to change it. Your email address and password are yours to manage.",
    },
  ],
  body: [
    {
      type: "p",
      text: "Your accountant has given you a client portal: one web page where you can pick up the documents they have prepared for you, send them the paperwork they have asked for, and sign what needs signing — without email attachments, file-size limits or a stack of scanned PDFs. This guide walks through the whole thing, from the invitation email to changing your password.",
    },
    {
      type: "p",
      text: "It is written to be handed straight to a client. If you are the accountant setting the portal up, the companion guide on setting up the client portal is the one you want. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: "You need the invitation email from your accountant, which contains a personal link. That link works once and expires 30 days after it was sent — if yours has gone stale, ask them to send another. There is nothing to install, and the portal works in any modern browser on a laptop, tablet or phone.",
    },
    { type: "h2", text: "How do I set up my access?" },
    {
      type: "p",
      text: "The invitation email comes from your accountant's practice, not from XTK, and carries one link. Opening it lands you on a page headed “Set up your Client Portal access”. What it asks for depends on whether this email address has used an XTK portal before.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Open the link in your invitation",
          text: "The link is personal to your email address and can only be used once, so do not forward it to a colleague — ask your accountant to invite them properly instead.",
        },
        {
          title: "Choose a password",
          text: "If this is your first XTK portal, the page reads “Choose a password to finish setting up your account.” Pick a password of at least 8 characters and click “Set password and continue”. That creates your account and signs you straight in — there is no separate verification email to wait for.",
          image: {
            src: "/images/guides/client-portal-guide-for-clients/01-accept-set-password.png",
            alt: "The XTK client portal accept-invite page asking a new client to choose a password to finish setting up their account",
            width: 1489,
            height: 812,
          },
        },
        {
          title: "Or reuse the login you already have",
          text: "If you have used an XTK portal before — for another business, or with another practice — the page recognises your address instead: “You already have a Client Portal account for …”. Click “Accept and continue” and the new portal is added to your existing login. No second password, no second account.",
          image: {
            src: "/images/guides/client-portal-guide-for-clients/02-accept-existing-account.png",
            alt: "The XTK client portal recognising an existing Portal Member and offering Accept and continue to add another client portal to the same login",
            width: 1489,
            height: 812,
          },
        },
        {
          title: "Sign in",
          text: "You land on the sign-in page with “Invite accepted. Sign in with your existing password to enter this client portal.” Sign in with your email and password. A session lasts 30 days, so on your own device you will rarely be asked again.",
        },
      ],
    },
    {
      type: "callout",
      title: "One login, however many accountants",
      text: "Your portal account belongs to your email address, not to a practice. If a second accountant — or the same accountant, for a second business — invites the same address, accepting adds it to the login you already have. You never end up juggling passwords per practice.",
    },
    { type: "h2", text: "Which business am I looking at?" },
    {
      type: "p",
      text: "Signing in shows a hub headed “Welcome back”, with your portals grouped under the practice that shared them. Each card is one business, labelled with the name your accountant put on your contact, and marked “Shared documents”. Click one to go in.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/03-portal-landing.png",
      alt: "The XTK client portal hub after signing in, listing two client portals grouped under the accounting practice that shared them",
      caption:
        "Two businesses under one practice. A second practice would appear as its own heading below.",
      width: 1489,
      height: 812,
    },
    {
      type: "p",
      text: "Once you are inside, the name in the top bar is also the switcher: click it to jump between businesses without going back to the hub. Everything below the bar — documents, signatures, requests, notifications — always belongs to the business named there.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/04-switcher.png",
      alt: "The client portal switcher open in the top bar, listing each client portal under its accounting practice heading",
      caption:
        "The switcher groups by practice, so it stays readable if you deal with more than one firm.",
      width: 1200,
      height: 445,
    },
    {
      type: "p",
      text: "If you see “No portals shared with you yet”, your account exists but nothing has been shared — that is a nudge to your accountant, not something you can fix from here.",
    },
    { type: "h2", text: "How do I find the documents my accountant shared?" },
    {
      type: "p",
      text: "The main page of each portal has two sections. “Shared folders” holds the folders you can browse and add to. “Shared files” holds individual documents your accountant has sent you to read — each is a download, not a folder, so there is nothing to open into. The number on the right of each heading is how many there are.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/05-documents-roots.png",
      alt: "A client portal showing one shared folder and one shared file with its type and size, ready to download",
      caption:
        "Folders you can work in, files you can take. The size and type are shown before you download.",
      width: 1489,
      height: 812,
    },
    {
      type: "p",
      text: "Clicking a folder opens its contents, with a trail at the top starting from “Shared folders”. That trail is as far up as you can go: the folder your accountant keeps your records in, their other clients, and anything they have not shared are not just hidden from the list — they are unreachable. Nothing you do here can stray outside what was shared with you.",
    },
    {
      type: "p",
      text: "If a portal shows “Nothing shared yet”, or you can see files but there is no folder to put anything in, the page will tell you to ask your accountant to share a folder. Only they can do it.",
    },
    { type: "h2", text: "How do I send documents to my accountant?" },
    {
      type: "p",
      text: "Inside a shared folder there is a card headed “Add to this folder” with everything you can do: name a folder and click “Create”, or drop files onto “Drag files here or browse”. It sits above the file list on purpose, so it is still there when the folder gets long.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/06-folder-view.png",
      alt: "Inside a shared folder in the XTK client portal, showing the Add to this folder card above the documents the accountant has shared",
      caption:
        "The write controls stay pinned above the list. The documents below were put there by the practice.",
      width: 1489,
      height: 812,
    },
    {
      type: "p",
      text: "You can select several files at once; a few upload at a time and each gets its own line with a spinner, then a tick. A line only ticks when the file has genuinely arrived and appeared in the list below — so a tick is your receipt. “Clear finished” tidies the list away. Single files can be up to 100 MB, which is far more than a scanned bank statement needs.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/07-upload-done.png",
      alt: "A client's upload finishing in the XTK client portal, ticked in the progress list and appearing in the shared folder below",
      caption:
        "The upload is ticked and the file is now in the folder, where your accountant can see it.",
      width: 1489,
      height: 812,
    },
    {
      type: "callout",
      title: "Your files go straight to your accountant's storage",
      text: "The portal is a window onto the folder your accountant keeps in their own Google Drive, OneDrive or SharePoint. Your upload goes from your browser directly there — XTK never keeps a copy of its own — and it lands in the shared folder immediately, with no “send” step to forget.",
    },
    { type: "h2", text: "Can I rename or delete something I uploaded?" },
    {
      type: "p",
      text: "For 10 minutes, yes. Anything you create — an upload or a folder you made — carries a “…” menu for 10 minutes with “Rename”, “Move to” (any other shared folder you can reach) and “Delete”. It is there to fix the ordinary mistakes: the wrong file, a typo in a folder name, something dropped in the wrong place.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/08-own-item-menu.png",
      alt: "The menu on a client's own uploaded file in the XTK client portal, offering Rename, Move to and Delete within the ten-minute window",
      caption:
        "Only your own recent items carry this menu — the rows without one belong to your accountant.",
      width: 1030,
      height: 290,
    },
    {
      type: "p",
      text: "After 10 minutes the menu goes, and if you try anyway the portal says so plainly: “You can only change items you created, and only within 10 minutes of creating them.” The documents your accountant shared never carry the menu at all — you can read and download them, but not change or remove them. Deleting your own upload moves it to their storage bin rather than destroying it, so a genuine accident is still recoverable at their end.",
    },
    { type: "h2", text: "How do I sign a document?" },
    {
      type: "p",
      text: "“Signatures”, at the top right of your documents page, lists everything your accountant has sent you to sign for this business, split into “Awaiting your signature” and “On file”. Anything still waiting on you has a “Review & sign” button that opens the signing page.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/09-signatures-awaiting.png",
      alt: "The Signatures section of the XTK client portal with a document awaiting the client's signature and a Review and sign button",
      caption:
        "Requests waiting on you come first, with the status spelled out.",
      width: 1489,
      height: 812,
    },
    {
      type: "p",
      text: "Signing itself happens on the same page you would reach from an emailed signing link, and the companion guide on what your client sees walks through it in detail. The portal simply means you do not have to find the email: everything addressed to you is in this list.",
    },
    {
      type: "p",
      text: "Once everybody has signed, the request moves to “On file”, marked “Completed” and “You signed this”, with the signed PDF — the original with every signature stamped in and a certificate as its last page — there to download whenever you need it. That is worth knowing at tax time: this list is a permanent record, not a to-do list that empties.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/10-signatures-on-file.png",
      alt: "A completed signature request on file in the XTK client portal, marked Completed with the signed PDF available to download",
      caption:
        "Completed requests keep the signed copy available for download indefinitely.",
      width: 1489,
      height: 812,
    },
    { type: "h2", text: "What are document requests?" },
    {
      type: "p",
      text: "When your accountant needs a specific list of things — last year's bank statements, a logbook, a rebate notice — they send a document request instead of an email asking for “everything”. “Document requests” beside “Signatures” lists the ones addressed to you, each showing how far along it is: “Awaiting your upload”, “In progress”, “Submitted”, “Cancelled” or “Expired”, with a count such as “1 of 1 provided”.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/11-document-requests.png",
      alt: "The Document requests section of the XTK client portal showing a submitted request with its provided count",
      caption:
        "A submitted request stays visible as a record. Live ones show “Open →” instead.",
      width: 1489,
      height: 812,
    },
    {
      type: "p",
      text: "A request still needing you shows “Open →”; opening it gives you a checklist with an upload button against each item, so you can see what is still outstanding and finish in more than one sitting. Submitting tells your accountant you are done. Once it is submitted, cancelled or expired the row stops being a link and simply reports where it ended — a submitted one reads “This request is complete” if you open it.",
    },
    { type: "h2", text: "How do I know when something arrives?" },
    {
      type: "p",
      text: "The bell in the top bar carries a count of anything new for the business you are currently in — a document to sign, or a new document request. Opening it lists them newest first under “Today”, “Yesterday” and “Earlier”; clicking one takes you to it, and “Mark all as read” clears the count. When there is nothing, it says “You're all caught up”.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/12-notification-bell.png",
      alt: "The notification bell open in the XTK client portal, showing a document ready for the client's signature",
      caption:
        "The bell is per business — switch businesses and the count changes with it.",
      width: 1489,
      height: 360,
    },
    {
      type: "p",
      text: "The count refreshes on its own about once a minute and whenever you come back to the tab, so you can leave the portal open. It only covers signing and document requests: files your accountant drops into a shared folder appear quietly, without a notification.",
    },
    { type: "h2", text: "Settings, passwords and signing out" },
    {
      type: "p",
      text: "The circle at the top right of the bar holds your email address, “Settings” and “Sign out”. Settings has exactly two things: your account, and your password.",
    },
    {
      type: "image",
      src: "/images/guides/client-portal-guide-for-clients/13-settings.png",
      alt: "The Settings page of the XTK client portal, showing the client's email address and the change-password form",
      caption:
        "Two things only. Your display name belongs to your accountant's records.",
      width: 1489,
      height: 812,
    },
    {
      type: "p",
      text: "To change your password, type the current one and a new one of at least 8 characters. Doing so signs out every other device but keeps you signed in here — useful if you have ever signed in on a machine you would rather not be signed in on.",
    },
    {
      type: "p",
      text: "If you cannot get in at all, use “Forgot your password?” on the sign-in page. Enter your email and XTK sends a link that lasts one hour and can be used once; whether or not the address has an account, the page says the same thing, so nobody can use it to discover who has a portal. Setting a new password signs out every existing session. Your accountant cannot look up or set your password — if you would rather start over, ask them for a fresh invitation instead.",
    },
    {
      type: "callout",
      title: "If uploading suddenly stops working",
      text: "Very occasionally a write will fail with “This practice's account is inactive — changes are temporarily unavailable.” That is about your accountant's XTK subscription, not your account or your file: browsing and downloading still work, and uploading returns as soon as they sort it out. Tell them, and try again shortly.",
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: "If you have a document waiting, the guide on how clients sign documents online covers the signing page screen by screen. If you have been sent a document request, the guide on requesting documents shows the same checklist from your accountant's side. And if you are the accountant reading this to decide what to send out, the guide on setting up the client portal covers enabling it, inviting contacts and choosing what to share.",
    },
  ],
};
