import type { Guide } from "../types";

export const guide: Guide = {
  slug: "document-requests",
  title: "Request documents from clients in Xero Practice Manager",
  description:
    "Request documents from clients in Xero Practice Manager with one secure link: build a checklist, watch items turn Provided, and chase what's outstanding.",
  series: "Client-facing",
  order: 11,
  date: "2026-07-28",
  updated: "2026-07-28",
  readingTime: "10 min read",
  ogImage: "/images/guides/document-requests/og.png",
  thumbnail: {
    src: "/images/guides/document-requests/thumb.png",
    alt: "The client's document request upload page showing a checklist of requested items, a provided count and an optional extras bucket",
  },
  relatedSlugs: [
    "manage-client-documents",
    "email-templates",
    "notifications",
    "set-up-client-portal",
  ],
  faq: [
    {
      q: "Does my client need an XTK account or password to upload files?",
      a: "No. The link's one-off token is the authorisation, so clicking it opens the upload page — no account, nothing to install. That's deliberate: clients you ask for records are often one-off contacts. The trade-off is that anyone holding the link can upload, so treat it as private. Its reach is bounded — it only adds files to that request's destination folder, can't read your existing storage, and expires after 30 days or on submit or cancel.",
    },
    {
      q: "How big a file can my client upload, and which file types are allowed?",
      a: "Up to 100 MB per file, with no limit on how many. Accepted: PDF, images (including iPhone HEIC), Word, Excel, PowerPoint, OpenDocument, text and CSV. Anything else is refused before it reaches your storage: “That file type isn't supported. Please upload a PDF, image, Office document (Word, Excel, PowerPoint, OpenDocument), or a text/CSV file.” The allowlist bounds an un-authenticated link — it stops one being used to park an executable in your Drive.",
    },
    {
      q: "What happens to files my client already uploaded if I cancel the request?",
      a: "They stay exactly where they are. Cancelling closes the link so nothing more arrives; it deletes nothing, and nor does expiry or your client's submit. Everything that came in is already filed in the client's folder and visible in the Documents tab and the status view — a sent request is an audit record. To remove a file, delete it like any other.",
    },
    {
      q: "Does XTK chase the client for me?",
      a: "No — there are no automatic reminders. Nudging is deliberate: open the Document Requests list and choose “Resend email” on the row. Know this first: resending mints a fresh link and the previously emailed one stops working, so a client with an older email open will need the new one. A resend doesn't extend the 30-day deadline.",
    },
    {
      q: "Can I edit a request after I've sent it, or save it as a draft?",
      a: "Neither. The wizard builds the request and sends the email in a single action, so there's no draft and no editing afterwards: the checklist, recipient and destination folder are fixed the moment you press “Send request”. If something's wrong, cancel and send a new one; files already uploaded to the cancelled request stay put.",
    },
  ],
  body: [
    {
      type: "p",
      text: "A document request is a checklist you send a client with one secure link. You list what you need — bank statements, a logbook, a signed letter — and XTK emails your client a page where they upload against each line. No account, no password. Files land in that client's folder in your own Google Drive, OneDrive or SharePoint, and in Xero Practice Manager (XPM) each item turns from Outstanding to Provided as it arrives.",
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: "Your document storage must be connected (see “Connect Google Drive, OneDrive or SharePoint to XTK”), and the client's Documents tab opened once so the client has a storage folder. No Admin-only gate — any team member can send and track requests. A mailbox connection is optional: with none connected the request still sends from XTK's shared address. All of this is disabled while a practice is read-only, including your client's uploads.",
    },
    { type: "h2", text: "How do I request documents from a client?" },
    {
      type: "p",
      text: "Requests start in the client's Documents tab, because that's where the files end up: one wizard, three steps — “1. Recipient”, “2. Items”, “3. Email” — under a live line reading “Ask Sophie Baxter to upload files into Client provided.”",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Open the client's Documents tab",
          text: "Browse into the folder the files should arrive in — say “Client provided”. That becomes the default destination.",
        },
        {
          title: "Click “Create ▾ → Request documents”",
          text: "Last item in the Create menu, under “Upload”, “Create folder”, “File from template” and “Folder from template”.",
          image: {
            src: "/images/guides/document-requests/01-create-menu-request-documents.png",
            alt: "The Create menu in XTK's Documents tab in Xero Practice Manager with Request documents highlighted, used to request documents from clients",
            width: 1501,
            height: 812,
          },
        },
        {
          title: "Check the recipient",
          text: "Both fields arrive prefilled from the client's record — the client's own name and primary email. Overwrite them with whoever will actually upload, for example Sophie Baxter and sophie@acmetrading.example; the request stays filed under this client either way.",
          image: {
            src: "/images/guides/document-requests/02-recipient-and-destination.png",
            alt: "Step 1 of XTK's Request documents wizard in Xero Practice Manager showing the recipient name, recipient email and destination folder fields",
            width: 1501,
            height: 812,
          },
        },
        {
          title: "Confirm the destination folder, then click “Next”",
          text: "“Destination folder” shows where uploads land, with “Change” beside it. The picker is confined to this client's folder — browse it, create a subfolder, pick one or “Use current folder”. Uploads can't reach anywhere else in your storage.",
        },
        {
          title: "Write the list of requested items",
          text: "Each row is one thing you're asking for. Type a name — “Bank statements — 1 Jul to 30 Sep” — then “Add item” for the next. “↑”/“↓” reorder, “Remove” deletes, and the on-screen order is what your client sees. One named item is the minimum.",
          image: {
            src: "/images/guides/document-requests/03-requested-items.png",
            alt: "Step 2 of XTK's Request documents wizard listing the requested items a client must supply, with reorder and remove controls and an optional message",
            width: 1501,
            height: 812,
          },
        },
        {
          title: "Add a message for the client (optional)",
          text: "It isn't part of the email — it appears above the checklist on your client's upload page, so use it for context like “These are for the FY25 return, due 15/05/2026.” XTK reuses it if you resend.",
        },
        {
          title: "Compose the email",
          text: "If your practice has email templates, an “Email template” dropdown appears, starting on “No template (custom)”; picking one replaces subject and body. Otherwise you get XTK's default: subject “Documents requested for Acme Trading Ltd” and a body containing {{document_request_url}}, which XTK swaps for the link at send time. “CC (optional)” takes comma-separated extras.",
          image: {
            src: "/images/guides/document-requests/04-compose-email.png",
            alt: "Step 3 of XTK's Request documents wizard with the Email template dropdown, subject, body containing the document_request_url variable and a CC field",
            width: 1501,
            height: 812,
          },
        },
        {
          title: "Click “Send request”",
          text: "Request created and email sent in one action — there's no draft. The dialog closes and the request appears in the client's list as “Sent”.",
        },
      ],
    },
    {
      type: "callout",
      title: "The link always reaches your client",
      text: "If your wording never mentions {{document_request_url}}, XTK appends the link rather than sending a request nobody can act on. One catch: a link on its own line goes out as plain text, so most mail apps make it clickable but none is guaranteed to. Writing “[Upload your documents]({{document_request_url}})” in a template guarantees a proper link.",
    },
    { type: "h2", text: "What does my client actually see?" },
    {
      type: "p",
      text: "The email arrives from whichever mailbox your practice sends through, wearing your practice name. The link opens one plain page: “Document request”, “Acme Accounting has asked you for some documents.”, “Hi Sophie,”, your message, the checklist.",
    },
    {
      type: "image",
      src: "/images/guides/document-requests/05-client-upload-page.png",
      alt: "The client-facing document request upload page showing the What we need checklist, a provided count and progress bar, and the Anything else extras section",
      caption:
        "No login, no download, nothing to install.",
      width: 1562,
      height: 784,
    },
    {
      type: "list",
      items: [
        "Every item takes as many files as your client wants — “Add file” becomes “Add another” once one is in.",
        "A counter and green progress bar track completion — “1 of 3 provided”, then “Everything's provided — ready to submit.”",
        "One catch-all dropzone sits below: “Anything else? Add any other files you think might help — these are optional.” Extras land in the same folder and you can see them, but never count toward the progress.",
        "Each file shows a spinner, then a tick and “uploaded”. Reopen the link later and files already sent are still named.",
        "Files travel straight from your client's browser to your Drive — the bytes never pass through XTK's servers.",
      ],
    },
    {
      type: "image",
      src: "/images/guides/document-requests/06-client-item-provided.png",
      alt: "A requested item on the client's document request page flipped to provided, with a green tick, the uploaded filename and the progress count increasing",
      caption:
        "An item flips to Provided on its first file — and your request moves to “In progress”.",
      width: 1562,
      height: 784,
    },
    {
      type: "video",
      src: "/images/guides/document-requests/request-documents.gif",
      alt: "A client uploading files to an XTK document request: choosing a file for a requested item, the item flipping to provided with its filename, the progress bar advancing, and pressing Submit",
      caption:
        "Add a file, the item ticks over, the count advances, Submit closes the request.",
    },
    {
      type: "p",
      text: "“Submit” closes the link, and your client can submit at any point — with items outstanding they get a prompt first: “You still have 1 item outstanding — submit anyway?”, offering “Submit anyway” and “Keep adding”. The count is recorded either way, so “2 of 3 provided” shows something is missing.",
    },
    {
      type: "image",
      src: "/images/guides/document-requests/07-submit-confirm.png",
      alt: "The client's document request page asking You still have 1 item outstanding — submit anyway, with Submit anyway and Keep adding buttons",
      width: 1562,
      height: 784,
    },
    {
      type: "p",
      text: "They then see “Thank you — your documents have been sent to Acme Accounting.” No further email goes out; reopening the link shows “This request is complete”.",
    },
    { type: "h2", text: "Which file types can a client upload?" },
    {
      type: "p",
      text: "Because the link needs no account, XTK refuses anything outside everyday client formats — at the point of upload, before touching your storage.",
    },
    {
      type: "table",
      head: ["Kind", "Accepted file extensions"],
      rows: [
        ["PDF", "pdf"],
        ["Images", "jpg, jpeg, png, gif, webp, heic, heif, tif, tiff, bmp"],
        ["Word", "doc, docx"],
        ["Excel", "xls, xlsx"],
        ["PowerPoint", "ppt, pptx"],
        ["OpenDocument", "odt, ods, odp"],
        ["Text and data", "txt, csv"],
      ],
      codeColumns: [1],
      caption:
        "The complete allowlist for client uploads, with a 100 MB cap per file and no limit on the number of files.",
    },
    { type: "h2", text: "Where do the uploaded files go?" },
    {
      type: "p",
      text: "Into the destination folder you chose, inside that client's own folder — and renamed. A file uploaded against an item takes the item's name, keeping its extension: “IMG_4471.HEIC” on “Motor vehicle logbook” becomes “Motor vehicle logbook.HEIC”, a second becomes “Motor vehicle logbook (2).HEIC”. Your naming wins. Extras keep the name your client gave them, since there's no item name to use.",
    },
    { type: "h2", text: "How do I track what's outstanding?" },
    {
      type: "p",
      text: "The Documents toolbar's “Document requests” button swaps the file browser for that client's request list, with “Back to Documents” and a “Request documents” button.",
    },
    {
      type: "image",
      src: "/images/guides/document-requests/08-tracking-list.png",
      alt: "XTK's Document Requests tracking list in Xero Practice Manager showing recipient, status, provided count and sent date for each request, with status filter buttons",
      caption:
        "One row per request: who it went to, its status, how much has come in and when you sent it.",
      width: 1501,
      height: 812,
    },
    {
      type: "p",
      text: "A “Search by recipient…” box sits above filter buttons — “All”, “Sent”, “In progress”, “Submitted”, “Canceled”, “Expired”. Each row carries a colour-coded status pill and an “X of Y provided” count; both the name and the count open the status view.",
    },
    { type: "h2", text: "The five statuses, and what each one lets you do" },
    {
      type: "table",
      head: ["Status", "What it means", "Actions on the row"],
      rows: [
        [
          "Sent",
          "The email has gone, the link is live, nothing uploaded yet",
          "View status · Open folder · Resend email · Cancel request",
        ],
        [
          "In progress",
          "At least one file has arrived; the link is still open",
          "View status · Open folder · Resend email · Cancel request",
        ],
        [
          "Submitted",
          "Your client pressed “Submit” and the link is closed",
          "View status · Open folder",
        ],
        [
          "Canceled",
          "You closed the link early; this can't be undone",
          "View status · Open folder",
        ],
        [
          "Expired",
          "30 days passed with no submit or cancel; the link is closed",
          "View status · Open folder",
        ],
      ],
      caption:
        "Sent and In progress are the live states. Submitted, Canceled and Expired are closed — the link no longer accepts uploads.",
    },
    {
      type: "p",
      text: "The link never closes by itself when the last item is provided — that would lock out a client mid-way through a multi-file item — so a fully provided request sits at “In progress” until someone submits. “Fulfilled” isn't a status, just the state of every item being provided.",
    },
    { type: "h2", text: "Checking a single request in detail" },
    {
      type: "p",
      text: "The status view leads with the recipient, a status pill and a progress bar, then lists each item badged “Provided” or “Outstanding” with the files that came in, each a link into your provider. Extras sit under “Other files (not counted toward fulfilment)”; the footer repeats the row actions.",
    },
    {
      type: "image",
      src: "/images/guides/document-requests/09-request-detail.png",
      alt: "The status view of an XTK document request showing each requested item marked Provided or Outstanding, the uploaded file links, and Open folder, Resend email and Cancel request actions",
      caption:
        "Item by item, with the uploaded files linked — where you see what's still missing.",
      width: 1501,
      height: 812,
    },
    { type: "h2", text: "Nudging, cancelling and expiry" },
    {
      type: "image",
      src: "/images/guides/document-requests/10-row-actions.png",
      alt: "The row actions menu on an XTK document request showing View status, Open folder, Resend email and Cancel request",
      width: 1501,
      height: 812,
    },
    {
      type: "list",
      items: [
        "“Open folder” jumps to the destination folder and briefly pulses the files that arrived through it.",
        "“Resend email” sends a fresh nudge — subject “Reminder: documents requested”, carrying your original message if you wrote one. The button reads “Resending…”, then “Email resent.”",
        "“Cancel request” closes the link immediately: no confirmation, no undo. Uploaded files are kept.",
      ],
    },
    {
      type: "callout",
      title: "Resending replaces the link",
      text: "A resend doesn't repeat the same email — it mints a new link and the previously emailed one stops working, so a client working from an older email needs the newest. It doesn't extend the deadline, and the wording is XTK's, not what you composed: the original email isn't kept.",
    },
    {
      type: "p",
      text: "With no submit and no cancel, the link expires 30 days after sending and the row reads “Expired”; your client sees “This request link has expired — ask the sender to resend a fresh link.” Like cancelling, expiry stops new uploads and deletes nothing, and can't be undone.",
    },
    { type: "h2", text: "What if the email doesn't send?" },
    {
      type: "p",
      text: "If your mailbox connection has gone stale the request is still created, and XTK says so: “The request was saved but the email couldn't be sent. Reconnect Gmail and try again.” Don't press “Send request” again — that creates a duplicate request. Close the dialog, reconnect your mailbox, then “Resend email” on the row already in the list. A notification about the failed send arrives too.",
    },
    { type: "h2", text: "Notifications you'll get" },
    {
      type: "p",
      text: "Four notification types feed the XTK bell, switchable in My Account: a client submitted (one per submit, however many files), a colleague cancelled and a request expired are on by default; a client's first upload is off.",
    },
    { type: "h2", text: "Tips from practice" },
    {
      type: "list",
      items: [
        "One item per thing, not per document: an item takes many files, so “Bank statements — Q1” holds three PDFs as one line.",
        "Name items precisely — the uploaded file inherits the name, so a vague “Statements” gives you a vague document.",
        "Put the deadline in “Message (optional)”, not the email — it stays on screen every time they reopen the link.",
      ],
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: "Write your request wording once with email templates so composing becomes two clicks, and turn on the notifications you want. If a client sends records regularly, a client portal gives them a permanent, logged-in place to do it — requests suit the one-off ask, the portal the ongoing relationship.",
    },
  ],
};
