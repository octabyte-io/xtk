import type { Guide } from "../types";

export const guide: Guide = {
  slug: "job-documents",
  title: "Job documents in Xero Practice Manager",
  description:
    "File a job's paperwork on the job itself — XTK adds a Documents tab to every Xero Practice Manager job page, storing files in your practice's own Drive.",
  series: "Documents",
  order: 19,
  date: "2026-08-12",
  updated: "2026-08-12",
  readingTime: "6 min read",
  ogImage: "/images/guides/job-documents/og.png",
  thumbnail: {
    src: "/images/guides/job-documents/thumb.png",
    alt: "XTK's Documents tab open on a job in Xero Practice Manager, listing the job's working papers, bank statement and engagement letter",
  },
  relatedSlugs: [
    "manage-client-documents",
    "bulk-file-actions",
    "folder-templates",
    "connect-document-storage",
    "getting-started-with-xtk",
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
      q: "Where does XTK put a job's files?",
      a: "In your practice's own storage, inside the client's folder: <client folder>/Jobs/<job number> - <job name>. So J000042 - FY25 Tax Return for Acme Trading Ltd lands in Acme Trading Ltd/Jobs/J000042 - FY25 Tax Return. The Jobs layer and the job's own folder are created the first time someone opens the Documents tab on that job — never before.",
    },
    {
      q: "I already made a folder for this job by hand. Will XTK make a second one?",
      a: "No. XTK looks for a folder with exactly that name (trimmed, case-insensitive) and adopts it, files and all. It only creates a folder when there's nothing to adopt. If two folders match the name, XTK stops and asks you to pick one rather than guessing — and creates nothing while it waits.",
    },
    {
      q: "Why is “File from template” missing on a job?",
      a: "A job's Documents tab is deliberately files-only. Generating a document from a template fills in the client's details, and Xero's older job pages don't carry those details for XTK to read. The same goes for document requests, sending for signature and sharing to the client portal — all four live on the client's own Documents tab, which is one click away.",
    },
    {
      q: "What happened to Xero's own Documents tab on the job?",
      a: "XTK hides it and stands in its place, so there's one Documents tab rather than two. It isn't gone: whenever XTK can't show you the folder, it renders an “Open XPM's own Documents” link beside the explanation, and Xero's tab reappears the moment you sign out of XTK.",
    },
    {
      q: "Does opening the Documents tab reload the job page?",
      a: "No. Every native job tab — Information, Timesheet, Notes, Costs — is a full page load. XTK's Documents tab opens instantly without reloading, and leaving it puts Xero's page back exactly as it was served.",
    },
  ],
  body: [
    {
      type: "p",
      text: [
        "XTK adds its own ",
        { text: "Documents tab", href: "/guides/manage-client-documents" },
        " to every job page in Xero Practice Manager (XPM), so a job's engagement letter, working papers and bank statements sit on the job itself instead of in a shared pile under the client. The files live in your practice's own Google Drive, OneDrive or SharePoint, in a folder XTK creates for the job the first time you open the tab.",
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
        " — that's an Admin job, and it's the only prerequisite. Once it's connected, the job Documents tab works for every team member, on every job, with nothing to switch on per job or per client.",
      ],
    },
    { type: "h2", text: "Where the Documents tab appears on a job" },
    {
      type: "p",
      text: "Open any job — from Job Manager, or from a client's Jobs tab — and look at the job's tab strip. XTK's Documents tab sits where Xero's own Documents tab was, fourth along, between Notes and Costs. It looks like the tabs either side of it because it is meant to: this is the job's Documents tab now, not a bolted-on panel.",
    },
    {
      type: "image",
      src: "/images/guides/job-documents/02-tab-position.png",
      alt: "The Xero Practice Manager job tab strip showing Information, Timesheet, Notes, Documents, Costs and Financial, with the XTK Documents tab selected",
      caption:
        "XTK's tab takes the native Documents tab's own position — not appended at the end.",
      width: 1568,
      height: 107,
    },
    {
      type: "p",
      text: "Clicking it opens the job's folder straight away, with no page reload — every other tab on this page is a full round trip to Xero's server, so the difference is obvious the first time. Click Notes or Costs afterwards and Xero's page comes back exactly as it always did.",
    },
    {
      type: "image",
      src: "/images/guides/job-documents/01-job-documents-tab.png",
      alt: "XTK's Documents tab open on job J000042 in Xero Practice Manager, listing a Working papers folder and three files with sizes and modified dates",
      caption:
        "The job's own folder, inside Xero Practice Manager. Same document manager as the client tab.",
      width: 1456,
      height: 822,
    },
    { type: "h2", text: "Where do a job's files actually go?" },
    {
      type: "p",
      text: [
        "Inside the client's folder, under a ",
        { text: "Jobs", href: "/guides/manage-client-documents" },
        " layer:",
      ],
    },
    {
      type: "quote",
      text: "Acme Trading Ltd / Jobs / J000042 - FY25 Tax Return",
    },
    {
      type: "p",
      text: "The folder name is composed from the job's number and name, so it always matches what the job header says. That matters more than it sounds: XPM has two different URLs for the same job depending on whether you arrived from Job Manager or from a client's Jobs tab, and both open the same folder. One job, one folder, however you got there.",
    },
    {
      type: "list",
      items: [
        "If a correctly-named folder already exists — because your practice has been filing by hand for years — XTK adopts it, contents and all. No second folder, no migration.",
        "If nothing matches, XTK creates the Jobs layer and the job folder silently the first time someone opens the tab. Jobs nobody opens get no folders at all.",
        "If two folders match the name, XTK stops and asks you to choose. It never guesses, and it creates nothing while it's asking.",
        "Rename the folder in Drive afterwards and XTK keeps pointing at it — it follows the folder, not the name.",
      ],
    },
    { type: "h2", text: "How do I file a document on a job?" },
    {
      type: "steps",
      steps: [
        {
          title: "Open the job in Xero Practice Manager",
          text: "From Job Manager, or from the Jobs tab on the client — either route works, and both land on the same folder.",
        },
        {
          title: "Click the Documents tab",
          text: "Fourth in the job's tab strip, between Notes and Costs. It opens without reloading the page, on the job's own folder.",
        },
        {
          title: "Click Create ▾ → Upload",
          text: "Pick one file or several. Uploads go straight from your browser to your practice's Drive, with a progress tray at the bottom of the panel.",
          image: {
            src: "/images/guides/job-documents/03-create-menu.png",
            alt: "The Create menu open on a job's Documents tab in Xero Practice Manager, offering Upload, Create folder and Folder from template",
            width: 1456,
            height: 822,
          },
        },
        {
          title: "Organise as you go",
          text: "Create folder adds a subfolder inside the job — “Working papers”, “Correspondence” — and Folder from template lays down your practice's standard structure in one action.",
        },
      ],
    },
    { type: "h2", text: "What else you can do on a job's Documents tab" },
    {
      type: "p",
      text: [
        "It's the same document manager as the ",
        { text: "client Documents tab", href: "/guides/manage-client-documents" },
        ", pointed at the job's folder. Upload files, create subfolders, rename, move, copy, download, delete to the provider's trash, star favourites, and search by filename. The ",
        { text: "bulk actions", href: "/guides/bulk-file-actions" },
        " are all here too — tick two or more rows and the selection bar appears with Move, Copy, Download as zip, Merge PDFs and Delete.",
      ],
    },
    {
      type: "image",
      src: "/images/guides/job-documents/05-bulk-actions.png",
      alt: "Two PDFs selected on a job's Documents tab in Xero Practice Manager, with the selection bar showing Move, Copy, Download as zip, Merge PDFs and Delete",
      caption: "Two PDFs ticked on a job — Merge PDFs appears because everything selected is a PDF.",
      width: 1456,
      height: 822,
    },
    {
      type: "p",
      text: [
        "Applying a ",
        { text: "folder template", href: "/guides/folder-templates" },
        " to a job is safe to repeat: it merges by name, so a second run reports what already existed rather than creating a duplicate set.",
      ],
    },
    {
      type: "callout",
      title: "A job's tab is files-only, on purpose",
      text: [
        "Four things you'll find on a client's Documents tab are deliberately absent on a job: ",
        { text: "File from template", href: "/guides/document-templates" },
        ", ",
        { text: "Request documents", href: "/guides/document-requests" },
        ", ",
        { text: "Send for signature", href: "/guides/send-documents-for-signature" },
        " and sharing to ",
        { text: "the client portal", href: "/guides/set-up-client-portal" },
        ". All four need the client's own details — a contact to email, an address to merge into a letter — and Xero's older job pages don't carry those for XTK to read. Do those from the client's Documents tab; the files are in the same storage either way.",
      ],
    },
    {
      type: "image",
      src: "/images/guides/job-documents/06-row-actions.png",
      alt: "The row menu on a Word document in a job's Documents tab in Xero Practice Manager, offering Download, Convert to PDF, Rename and Delete",
      caption: "A Word document's row menu on a job: Download, Convert to PDF, Rename, Delete.",
      width: 1456,
      height: 822,
    },
    { type: "h2", text: "Everything stays inside the client's folder" },
    {
      type: "p",
      text: "Move, copy and merge destinations are all fenced to the client that owns the job, and so is search — searching a job's folder never turns up a file from somewhere else in your storage. There is no path through the job tab that files a document into another client's folder, which is the whole point of filing by job rather than by habit.",
    },
    { type: "h3", text: "Re-point a job to a different folder" },
    {
      type: "p",
      text: "If XTK adopted the wrong folder, or your practice reorganises, use “Change storage folder” in the toolbar. The picker is rooted at the client's folder and can't leave it. Existing files aren't moved — XTK just points at the new folder from now on.",
    },
    {
      type: "image",
      src: "/images/guides/job-documents/04-change-storage-folder.png",
      alt: "The Change storage folder dialog for a job in Xero Practice Manager, rooted at the client's folder and listing the Quotes and Jobs layers",
      caption:
        "Rooted at the client — and you can see the Jobs and Quotes layers sitting side by side inside it.",
      width: 1456,
      height: 822,
    },
    { type: "h3", text: "Open a subfolder, and link straight to it" },
    {
      type: "p",
      text: "Subfolders work as you'd expect, with a breadcrumb back to the job's folder. The address bar updates as you move around, so a subfolder deep inside a job can be bookmarked or pasted into a note — the link reopens the job page with that folder showing.",
    },
    {
      type: "image",
      src: "/images/guides/job-documents/07-subfolder-breadcrumb.png",
      alt: "A subfolder open inside a job's Documents tab in Xero Practice Manager, with a breadcrumb back to the job folder",
      caption: "Inside “Working papers”, with the breadcrumb back to the job.",
      width: 1456,
      height: 822,
    },
    { type: "h2", text: "When XTK can't open the folder" },
    {
      type: "p",
      text: "A few situations stop XTK short of showing you files. Each one says what's happening in plain words, and each one keeps a way forward — there's an “Open XPM's own Documents” link beside every single one, because hiding Xero's tab is only fair if the way back is always there.",
    },
    {
      type: "table",
      head: ["What you see", "What it means"],
      rows: [
        [
          "“Filing paused — upgrade to continue.”",
          [
            "Your ",
            { text: "trial has ended or the subscription lapsed", href: "/guides/billing-trial-and-subscription" },
            ", and this job has no folder yet. Jobs already filed are unaffected — you can still open and download those.",
          ],
        ],
        [
          "“Drive isn't connected for this Practice yet.”",
          [
            "Nobody has ",
            { text: "connected document storage", href: "/guides/connect-document-storage" },
            " yet. Admins get a link to do it; everyone else is told who to ask.",
          ],
        ],
        [
          "“Two or more folders match…”",
          "There's more than one candidate folder with that name. Pick the right one and XTK remembers it. Nothing is created while it asks.",
        ],
        [
          "A folder picker instead of the files",
          "XTK couldn't work out which client this job belongs to. Choose the folder yourself and it files correctly from then on.",
        ],
      ],
      caption: "Every one of these keeps the “Open XPM's own Documents” link beside it.",
    },
    {
      type: "p",
      text: "In a read-only practice you can still browse and download everything already filed; it's only new folders and uploads that stop. And if you sign out of XTK entirely, the job page goes back to exactly how Xero serves it — Xero's own Documents tab included.",
    },
  ],
};
