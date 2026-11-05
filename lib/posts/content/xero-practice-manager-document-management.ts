import type { Post } from "../types";

export const post: Post = {
  slug: "xero-practice-manager-document-management",
  title:
    "Document management in Xero Practice Manager: where it stops and what to decide",
  seoTitle: "Xero Practice Manager document management, explained",
  excerpt:
    "XPM stores documents, but it was never built to be a document management system. Here's what it does, where it stops, and the decisions every practice ends up making about storage, folders, names, jobs, retention and leaving.",
  description:
    "Xero Practice Manager document management: what XPM does with files, where it stops, and the decisions on storage, folders, naming and retention.",
  date: "2026-08-04",
  updated: "2026-11-05",
  readingTime: "9 min read",
  category: "Guides",
  topic: "document-management",
  author: { name: "The XTK team", role: "Product" },
  featured: true,
  ogImage: "/images/blog/xero-practice-manager-document-management/og.png",
  thumbnail: {
    src: "/images/blog/xero-practice-manager-document-management/thumb.png",
    alt: "The four options laid along an axis measuring distance from the client record — Practice Manager's own Documents tab and a layer over your own drive together in the client record, a cloud drive a tab away, and a practice document management system a whole system away — each labelled with what it costs you",
  },
  relatedSlugs: [
    "document-management-for-xero-practices-compared",
    "organise-client-documents-google-drive",
    "how-long-accountants-keep-client-records",
    "stop-chasing-clients-for-documents",
  ],
  relatedLinks: [
    { label: "Manage client documents", href: "/guides/manage-client-documents" },
    { label: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
    { label: "Pricing", href: "/pricing" },
  ],
  body: [
    {
      type: "p",
      text: "Xero Practice Manager can store documents against a client, a job or a quote, and for a small number of small files that is genuinely enough. What it does not have is a folder structure worth the name, a generous upload limit, version history, anything client-facing, or e-signing. So practices past their first dozen clients keep documents somewhere else, and then have to make the same handful of decisions every practice makes: where the files live, how the folders are laid out, what the files are called, whether to file by job, how long to keep things, and what happens when a client or a tool leaves.",
    },
    {
      type: "p",
      text: "This is not a knock on XPM. It is a jobs, time and billing system, and it is a good one. Document management is simply a different product. This article covers what XPM does with documents, where it stops, and each of those decisions in a few paragraphs, with a link to the article that covers it in full.",
    },
    { type: "h2", text: "What XPM gives you today" },
    {
      type: "p",
      text: [
        "The Documents tab attaches files to a client, a job or a quote, and any other user in your practice can see and download them. You can group them into folders inside Practice Manager, and you can email documents and notes from a job or quote using XPM's collaboration features. Uploads are capped at ",
        {
          text: "16MB per file",
          href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
        },
        ", and ",
        { text: "documents list alphabetically", href: "/blog/how-to-name-client-files" },
        ", which makes the file name the only sort order you have.",
      ],
    },
    {
      type: "p",
      text: [
        "XPM can also hand storage to an outside system. Xero Central's page on ",
        {
          text: "uploading documents to your document management system",
          href: "https://central.xero.com/0/article/Upload-documents-to-your-document-management-system",
        },
        " lists Box, Dropbox, Google Drive, and SharePoint via SuiteFiles: you link one parent folder and every client folder sits inside it. That integration is the subject of two articles of its own, one for ",
        { text: "Google Drive and shared drives", href: "/blog/xero-practice-manager-google-shared-drive" },
        " and one for ",
        { text: "Microsoft 365 practices", href: "/blog/xero-practice-manager-sharepoint-onedrive" },
        ", because how it is set up decides whether your files survive a member of staff leaving.",
      ],
    },
    {
      type: "p",
      text: "The Documents tab has a real sweet spot: a signed form that belongs to one particular job, a note with a screenshot attached, a piece of correspondence that only ever needs to be found again from the job it relates to. If that describes your document flow, you don't have a problem to solve.",
    },
    { type: "h2", text: "Where it stops" },
    {
      type: "p",
      text: "Five gaps show up in roughly this order as a practice grows.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "No structure that survives people. Folders inside Practice Manager have no template and no enforcement, so “2026 / Tax / Workpapers” is a convention rather than a rule, and three people will express it three ways.",
        "The 16MB ceiling. A scanned bundle of source records, a financial statement pack, a set of photographed receipts: these routinely exceed it, and the workaround is always email.",
        "No version history. When you cannot see what changed, filenames start doing that job, which is how a folder ends up holding Accounts_FINAL, Accounts_FINAL_v2 and Accounts_FINAL_JS.",
        [
          "Nothing client-facing. There is no portal and no upload link, so collecting records means asking for email attachments, and a file that arrives in an inbox has to be filed by a human before it counts as filed at all. That is ",
          {
            text: "a chase you can design out",
            href: "/blog/stop-chasing-clients-for-documents",
          },
          ".",
        ],
        [
          "No signing. Engagement letters leave for a separate e-signature tool and come back by hand, which means the signed copy lands wherever the person who downloaded it put it, and the ",
          {
            text: "audit trail you would need in a dispute",
            href: "/blog/esignature-legality-for-accountants",
          },
          " lands there too.",
        ],
      ],
    },
    {
      type: "quote",
      text: "Every one of these gaps has the same shape: the documents end up further from the client record than the work does.",
    },
    { type: "h2", text: "The kinds of solution, in brief" },
    {
      type: "p",
      text: "Almost every firm running on XPM ends up with one of four arrangements. They are not levels of sophistication; they suit different practices, and two of them cost nothing extra.",
    },
    {
      type: "list",
      items: [
        "Stay in XPM's Documents tab. Free and already there; fine for a sole practitioner whose clients never need to see or send anything.",
        "A cloud drive on its own. One folder per client in Google Drive, OneDrive or SharePoint, beside XPM in another tab. You own the files and pay nothing more, and filing rests entirely on discipline.",
        "A practice document management system or platform, such as SuiteFiles, FYI or Karbon. Enforced filing, retention controls, portals and signing, for a migration project and a higher price.",
        "A layer over the drive you already have. The files stay in your own storage and the missing pieces are added inside the Practice Manager screen. This is the kind of tool XTK is.",
      ],
    },
    {
      type: "p",
      text: [
        "Which one suits which firm, with vendor names, each vendor's published prices and the cost per person at your headcount, is a separate article: ",
        {
          text: "document management software for Xero practices, compared",
          href: "/blog/document-management-for-xero-practices-compared",
        },
        ". The rest of this one is about the decisions that apply whichever you pick.",
      ],
    },
    { type: "h2", text: "Decision 1: where the files live" },
    {
      type: "p",
      text: [
        "The first question is whose storage the documents sit in, and the answer most practices give without noticing is “one person's”. A Google My Drive or a OneDrive belongs to the account that owns it, and both providers delete a departed person's files after a short grace period unless someone acts. For a practice with staff, client files belong in storage the practice owns: a ",
        { text: "Google shared drive rather than anyone's My Drive", href: "/blog/xero-practice-manager-google-shared-drive" },
        ", or a ",
        { text: "SharePoint library rather than a OneDrive", href: "/blog/xero-practice-manager-sharepoint-onedrive" },
        ". Both articles cover the setup and the move, and both are worth doing whether or not you ever add a tool on top.",
      ],
    },
    { type: "h2", text: "Decision 2: how client folders are laid out" },
    {
      type: "p",
      text: [
        "One rule matters more than the rest, and it is free: one folder per client, named exactly as that client is named in XPM. That name is the only key your two systems share, so the moment “ACME Trading Ltd” also exists as “Acme” and “ACME (new)”, no amount of tooling will reconcile them. Getting it right when the client is created is ",
        {
          text: "the first step of onboarding for a reason",
          href: "/blog/accounting-client-onboarding-checklist",
        },
        ". Below that, a shallow tree of evergreen folders and year folders does most of the work; the full layout, with an example, is in ",
        { text: "a client folder structure for accountants", href: "/blog/organise-client-documents-google-drive" },
        ".",
      ],
    },
    {
      type: "p",
      text: [
        "The same key breaks in the other direction when one client ends up with two XPM records. A Partner Hub merge carries Xero's own documents across but not a folder in your drive, so ",
        { text: "merge the folders first, then the records", href: "/blog/duplicate-client-records-and-their-documents" },
        ".",
      ],
    },
    { type: "h2", text: "Decision 3: what files are called" },
    {
      type: "p",
      text: [
        "A file's name is the only part of it that travels: into an email, a download, a zip. In XPM it is also the sort order. A rule such as type, then detail, then period, with dates written year first, turns a folder into something a new starter can read. ",
        { text: "How to name client files", href: "/blog/how-to-name-client-files" },
        " sets out the convention and the habit of renaming on arrival.",
      ],
    },
    { type: "h2", text: "Decision 4: whether to file by job and quote" },
    {
      type: "p",
      text: [
        "One folder per client stops being enough around the third year, when a client folder holds every return, every set of accounts and every proposal in one place. Filing by job and quote puts each piece of work's documents beside the job in XPM. It works only if you settle what the folder is called, when it is created, and what happens to folders already made by hand, which is what ",
        { text: "filing job and quote documents in XPM", href: "/blog/xero-practice-manager-job-documents" },
        " works through.",
      ],
    },
    { type: "h2", text: "Decision 5: how long to keep things, and who can prove it" },
    {
      type: "p",
      text: [
        "Five to seven years covers most Xero markets, but ",
        { text: "how long accountants keep client records", href: "/blog/how-long-accountants-keep-client-records" },
        " depends on three clocks started by different events, and a retention period outlives most software subscriptions. Some records carry their own rules: a practice that verifies identities for Companies House has to keep ",
        { text: "seven years of verification evidence", href: "/blog/companies-house-identity-verification-records" },
        ", including for people it refused.",
      ],
    },
    { type: "h2", text: "Decision 6: what happens when a client, or a tool, leaves" },
    {
      type: "p",
      text: [
        "When a client moves to another practice, the new accountant needs the client's records, not your working papers. ",
        { text: "Handing files to the new accountant", href: "/blog/handing-client-files-to-new-accountant" },
        " is easier when those two were never in the same folder.",
      ],
    },
    {
      type: "p",
      text: [
        "When the tool is the thing leaving, the documents are usually fine; what goes is the audit trails, links, portals and templates around them. ",
        { text: "What leaving a document system costs", href: "/blog/what-leaving-a-document-system-costs" },
        " lists what to ask a vendor before you sign. Xero's own changes raise the same question from the other side: ",
        { text: "Partner Hub absorbing Practice Manager", href: "/blog/xero-partner-hub-what-happens-to-your-documents" },
        " says nothing about documents, and ",
        { text: "the new Xero Workpapers", href: "/blog/xero-workpapers-and-your-client-documents" },
        " is a locked pack for one period, not a filing system.",
      ],
    },
    {
      type: "callout",
      title: "Ask every option the leaving question",
      text: "“If we stop paying, where are our documents?” is not a prediction that you will leave. It is a test of how much of your filing system belongs to you. Ask it of every option, including ours.",
    },
    { type: "h2", text: "How XTK fits" },
    {
      type: "p",
      text: [
        "XTK is the fourth kind of tool: a layer over storage you own. Your practice ",
        { text: "connects one storage provider", href: "/guides/connect-document-storage" },
        " (Google Drive, OneDrive or SharePoint) and picks a Main Storage Folder. Each client then gets one folder inside it: a folder with the client's XPM name is adopted rather than duplicated, one is created if none exists, and if two match you choose. From then on the ",
        { text: "Documents tab in the XTK panel", href: "/guides/manage-client-documents" },
        " opens against whichever client you have open in Practice Manager, in place of Xero's own Documents tab.",
      ],
    },
    {
      type: "p",
      text: [
        "Files stay ordinary files in your drive, so your provider's own version history applies. Uploads are capped at 100MB, deletes go to your provider's trash, and the gaps above close in the same panel: ",
        { text: "folder templates", href: "/guides/folder-templates" },
        ", ",
        { text: "a client portal", href: "/guides/set-up-client-portal" },
        ", ",
        { text: "document requests", href: "/guides/document-requests" },
        ", ",
        { text: "e-signatures", href: "/guides/send-documents-for-signature" },
        " that file the signed PDF beside the original, and ",
        { text: "templates", href: "/guides/document-templates" },
        " that fill themselves from the client's XPM details.",
      ],
    },
    {
      type: "p",
      text: [
        "What it does not have is the depth of a mature DMS: no retention engine and no records-management enforcement. Uploads go from your browser straight to Google or Microsoft, but downloads and jobs such as zipping, merging PDFs or generating from a template stream through XTK's backend in flight, without being stored, and “Convert to PDF” hands that one file to CloudConvert. The ",
        { text: "full account of what moves where", href: "/guides/how-xtk-handles-your-data" },
        " is the guide to read before you decide anything. Pricing is ",
        { text: "one flat monthly price for the whole practice", href: "/pricing" },
        ", and ",
        { text: "getting set up", href: "/guides/getting-started-with-xtk" },
        " against one client takes about ten minutes.",
      ],
    },
    { type: "h2", text: "The test that actually matters" },
    {
      type: "p",
      text: "Whichever arrangement you land on, judge it the same way: can somebody who joined last week find last year's engagement letter for a client they have never worked on, in under a minute, without asking anyone? A practice that can do that has a document management system. A practice that cannot has a folder of files and a set of people who remember things.",
    },
    {
      type: "callout",
      title: "XTK and Xero",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited. XPM limits described here were checked against Xero Central in August 2026. Xero changes its product, so check anything you plan to rely on.",
    },
  ],
  faq: [
    {
      q: "Does Xero Practice Manager have a client portal?",
      a: "No. XPM has no client-facing portal for document exchange. You can email documents from a job or quote, but clients cannot log in to view or upload files, so practices that need a portal add a third-party product: a document management system, or a layer over their own cloud storage.",
    },
    {
      q: "What is the file size limit for documents in Xero Practice Manager?",
      a: "16MB per file in XPM's Documents tab, as of August 2026. Larger files, such as scanned record bundles or financial statement packs, have to go somewhere else, which in most practices means email or a cloud drive.",
    },
    {
      q: "Can I connect Google Drive to Xero Practice Manager?",
      a: "Xero Central lists Google Drive among the document management systems Practice Manager integrates with: you link one parent folder and keep every client folder inside it. Xero documents it around My Drive and says nothing about Google shared drives. Third-party tools such as XTK instead show your Drive, OneDrive or SharePoint folders inside the Practice Manager screen.",
    },
    {
      q: "Does XPM keep version history for documents?",
      a: "No. XPM's Documents tab does not keep document version history, which is why filenames in practice folders tend to carry version information instead. Storing files in Google Drive, OneDrive or SharePoint gives you that provider's own file history.",
    },
  ],
};
