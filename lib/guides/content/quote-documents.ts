import type { Guide } from "../types";

export const guide: Guide = {
  slug: "quote-documents",
  title: "Quote documents in Xero Practice Manager",
  description:
    "Keep a quote's paperwork on the quote — XTK adds a Documents tab to every Xero Practice Manager quote and estimate, filing to your practice's own Drive.",
  series: "Documents",
  order: 20,
  date: "2026-08-13",
  updated: "2026-08-13",
  readingTime: "5 min read",
  ogImage: "/images/guides/quote-documents/og.png",
  thumbnail: {
    src: "/images/guides/quote-documents/thumb.png",
    alt: "XTK's Documents tab open on quote Q000018 in Xero Practice Manager, listing the proposal, fee schedule and scope of work",
  },
  relatedSlugs: [
    "job-documents",
    "manage-client-documents",
    "folder-templates",
    "bulk-file-actions",
    "connect-document-storage",
  ],
  relatedLinks: [
    {
      label: "A sane folder structure for client documents",
      href: "/blog/organise-client-documents-google-drive",
    },
    {
      label: "Document management in Xero Practice Manager: four options",
      href: "/blog/xero-practice-manager-document-management",
    },
  ],
  faq: [
    {
      q: "Where does XTK put a quote's files?",
      a: "In your practice's own storage, inside the client's folder: <client folder>/Quotes/<quote number> - <quote name>. So Q000018 - FY25 Advisory Engagement for Acme Trading Ltd lands in Acme Trading Ltd/Quotes/Q000018 - FY25 Advisory Engagement. Quotes sits beside Jobs, and both are created the first time someone opens the Documents tab on that quote or job — never before.",
    },
    {
      q: "I opened the quote from a job. Does it file under the job?",
      a: "No. A quote is always filed under its client, in the Quotes layer, whichever route you took to reach it — Quote Manager, the client's Quotes tab, or the job's Financial tab. Filing by the route taken would put the same quote's documents in two different places depending on who opened it.",
    },
    {
      q: "Does this work on estimates as well as quotes?",
      a: "Yes. Xero Practice Manager keeps quotes and estimates on the same screen — a job's Financial tab is headed “Quotes and estimates” and gives both a Q number — so XTK's Documents tab appears on an estimate exactly as it does on a quote, and files it in the same Quotes layer.",
    },
    {
      q: "Why is there no “Send for signature” on a quote's documents?",
      a: "A quote's Documents tab is deliberately files-only. Sending for signature, requesting documents, generating a file from a template and sharing to the client portal all need the client's own details, and Xero's older quote pages don't carry those for XTK to read. All four live on the client's Documents tab, which files into the same storage.",
    },
    {
      q: "What happened to Xero's own Documents tab on the quote?",
      a: "XTK hides it and stands in its place, so there's one Documents tab rather than two. Whenever XTK can't show you the folder it renders an “Open XPM's own Documents” link beside the explanation — and that link keeps the quote's current web address, so a quote you reached from a job still knows about the job. Xero's tab reappears the moment you sign out of XTK.",
    },
  ],
  body: [
    {
      type: "p",
      text: [
        "XTK adds its own ",
        { text: "Documents tab", href: "/guides/manage-client-documents" },
        " to every quote page in Xero Practice Manager (XPM), so the proposal, the fee schedule and the scope of work sit on the quote itself. The files land in your practice's own Google Drive, OneDrive or SharePoint, in a folder XTK creates for the quote the first time you open the tab — and because XPM treats estimates as quotes, the tab appears on those too.",
      ],
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: [
        "Your practice needs ",
        { text: "document storage connected", href: "/guides/connect-document-storage" },
        " — that's an Admin job, and it's the only prerequisite. This is the same document manager XTK puts on ",
        { text: "job pages", href: "/guides/job-documents" },
        ", on a second XPM page, so if you've read that guide most of this will be familiar.",
      ],
    },
    { type: "h2", text: "Where the Documents tab appears on a quote" },
    {
      type: "p",
      text: "Open any quote — from Quote Manager, from a client's Quotes tab, or from the Financial tab of a job — and look at the quote's tab strip. There are four tabs, and XTK's Documents sits third, between Notes and History, exactly where Xero's own Documents tab was. Xero's is hidden while XTK's is there, so you get one Documents tab rather than two.",
    },
    {
      type: "image",
      src: "/images/guides/quote-documents/01-tab-position.png",
      alt: "The Xero Practice Manager quote tab strip showing Information, Notes, Documents and History, with the XTK Documents tab selected",
      caption:
        "Third of four, in the native Documents tab's own position — not appended at the end.",
      width: 1150,
      height: 122,
    },
    {
      type: "p",
      text: "Clicking it opens the quote's folder straight away, with no page reload. Click Information, Notes or History afterwards and Xero's page comes back exactly as it was served.",
    },
    {
      type: "image",
      src: "/images/guides/quote-documents/02-quote-documents-tab.png",
      alt: "XTK's Documents tab open on quote Q000018 in Xero Practice Manager, listing a proposal, a fee schedule and a scope of work with sizes and modified dates",
      caption: "The quote's own folder, inside Xero Practice Manager.",
      width: 1150,
      height: 813,
    },
    { type: "h2", text: "Where do a quote's files actually go?" },
    {
      type: "p",
      text: "Inside the client's folder, under a Quotes layer:",
    },
    {
      type: "quote",
      text: "Acme Trading Ltd / Quotes / Q000018 - FY25 Advisory Engagement",
    },
    {
      type: "p",
      text: [
        "Quotes is a sibling of the ",
        { text: "Jobs layer", href: "/guides/job-documents" },
        ", both sitting directly inside the client's folder. You can see both of them in the “Change storage folder” dialog, which is rooted at the client and can't leave it.",
      ],
    },
    {
      type: "image",
      src: "/images/guides/quote-documents/03-quotes-and-jobs-siblings.png",
      alt: "The Change storage folder dialog for a quote in Xero Practice Manager, rooted at the client's folder and listing Quotes and Jobs side by side",
      caption:
        "Quotes and Jobs, side by side inside one client — the two layers XTK files legacy XPM pages into.",
      width: 1150,
      height: 813,
    },
    {
      type: "list",
      items: [
        "The folder name is composed from the quote's number and its name, so it matches what the quote header says however you reached the page.",
        "If a correctly-named folder already exists, XTK adopts it, contents and all. If nothing matches, it creates the Quotes layer and the quote's folder silently the first time someone opens the tab.",
        "If two folders match the name, XTK stops and asks you to choose — and creates nothing while it's asking.",
        "Rename the folder in Drive afterwards and XTK keeps pointing at it; the breadcrumb then shows the folder's live name.",
      ],
    },
    { type: "h2", text: "A quote is filed under its client, never under the job" },
    {
      type: "p",
      text: "This is the one thing worth knowing that a job's Documents tab won't teach you. A quote's page links back to a job, and a job's Financial tab lists its quotes — but that link is navigation, not filing. Whichever way you arrive, the quote's documents go in the client's Quotes layer.",
    },
    {
      type: "image",
      src: "/images/guides/quote-documents/04-quote-from-a-job.png",
      alt: "The Financial tab of a job in Xero Practice Manager, showing a Quotes and estimates table with one Quote and one Estimate, both numbered Q0000…",
      caption:
        "Reached from a job's Financial tab — and note the Type column: XPM keeps quotes and estimates on the same screen.",
      width: 1114,
      height: 790,
    },
    {
      type: "p",
      text: "It matters because the alternative is worse than it sounds: file by the route the person took and the same quote's paperwork ends up in two places, depending on who opened it and from where. One quote, one folder, under the client whose work it is.",
    },
    {
      type: "callout",
      title: "Estimates get the tab too",
      text: "XPM heads that section “Quotes and estimates” and gives both kinds a Q number, because they're one record on one screen. XTK's Documents tab injects on an estimate exactly as it does on a quote, and files it in the same Quotes layer. We call the thing a Quote throughout XTK; if your practice says estimate, it's the same page.",
    },
    { type: "h2", text: "How do I file a document on a quote?" },
    {
      type: "steps",
      steps: [
        {
          title: "Open the quote in Xero Practice Manager",
          text: "From Quote Manager, the client's Quotes tab, or the job's Financial tab — all three land on the same folder.",
        },
        {
          title: "Click the Documents tab",
          text: "Third in the quote's tab strip, between Notes and History. It opens without reloading the page, on the quote's own folder.",
        },
        {
          title: "Click Create ▾ → Upload",
          text: "Pick one file or several. Uploads go straight from your browser to your practice's Drive, with a progress tray at the bottom of the panel.",
        },
        {
          title: "Organise as you go",
          text: [
            "Create folder adds a subfolder inside the quote, and Folder from template lays down your practice's standard structure — applying a ",
            { text: "folder template", href: "/guides/folder-templates" },
            " twice is safe, because it merges by name rather than duplicating.",
          ],
        },
      ],
    },
    { type: "h2", text: "What a quote's Documents tab can and can't do" },
    {
      type: "p",
      text: [
        "It's the same document manager as the ",
        { text: "client Documents tab", href: "/guides/manage-client-documents" },
        ", pointed at the quote's folder: upload, create subfolders, rename, move, copy, download, delete to the provider's trash, star favourites, convert a Word document to PDF, and search by filename. Tick two or more rows and the ",
        { text: "bulk actions", href: "/guides/bulk-file-actions" },
        " appear — Move, Copy, Download as zip, Merge PDFs and Delete.",
      ],
    },
    {
      type: "callout",
      title: "A quote's tab is files-only, on purpose",
      text: [
        "Four things you'll find on a client's Documents tab are deliberately absent here: ",
        { text: "File from template", href: "/guides/document-templates" },
        ", ",
        { text: "Request documents", href: "/guides/document-requests" },
        ", ",
        { text: "Send for signature", href: "/guides/send-documents-for-signature" },
        " and sharing to ",
        { text: "the client portal", href: "/guides/set-up-client-portal" },
        ". All four need the client's own details, and Xero's older quote pages don't carry those for XTK to read — the same rule, for the same reason, as on a job. Do those from the client's Documents tab; the files sit in the same storage either way.",
      ],
    },
    {
      type: "image",
      src: "/images/guides/quote-documents/05-row-actions.png",
      alt: "The row menu on a PDF in a quote's Documents tab in Xero Practice Manager, offering only Download, Rename and Delete",
      caption:
        "A PDF's row menu on a quote: Download, Rename, Delete — no “Send for signature”, and no Share.",
      width: 740,
      height: 424,
    },
    { type: "h3", text: "Everything stays inside the quote's folder" },
    {
      type: "p",
      text: "Move, copy and merge destinations are rooted at the quote's own folder, and so is search — searching here never turns up a file from the client's other folders, let alone another client's. Re-pointing is the one exception, and it is fenced one level wider: “Change storage folder” browses the client's folder so you can pick a different home for this quote, and existing files aren't moved when you do.",
    },
    {
      type: "p",
      text: "Subfolders behave as you'd expect, with a breadcrumb back to the quote's folder. The address bar updates as you move around, so a subfolder deep inside a quote can be bookmarked or pasted into a note, and the link reopens the quote page with that folder showing.",
    },
    { type: "h2", text: "When XTK can't open the folder" },
    {
      type: "p",
      text: [
        "The same handful of situations stop XTK short here as on a job — a ",
        { text: "trial that has ended", href: "/guides/billing-trial-and-subscription" },
        " (“Filing paused — upgrade to continue”, with quotes already filed unaffected), storage not connected yet, or two folders matching one name. Each says what's happening in plain words, and each keeps an “Open XPM's own Documents” link beside it, so hiding Xero's tab never leaves you without a document surface. ",
        { text: "The job documents guide", href: "/guides/job-documents" },
        " sets all of them out in a table.",
      ],
    },
    {
      type: "p",
      text: "That escape link carries the quote page's current web address with it, which matters most for the case this guide is about: follow it from a quote you reached through a job, and you land somewhere that still knows about the job.",
    },
  ],
};
