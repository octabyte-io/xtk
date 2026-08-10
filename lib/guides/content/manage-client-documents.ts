import type { Guide } from "../types";

export const guide: Guide = {
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
  relatedLinks: [
    { label: "A sane folder structure for client documents", href: "/blog/organise-client-documents-google-drive" },
    {
      label: "Document management in Xero Practice Manager: four options",
      href: "/blog/xero-practice-manager-document-management",
    },
    { label: "Privacy Policy", href: "/legal/privacy" },
  ],
  faq: [
    {
      q: "Where are the files actually stored?",
      a: "In your practice's own Google Drive, OneDrive or SharePoint — one folder per client inside your Main Storage Folder. The Documents tab is a window onto that folder. Uploads travel straight from your browser to Google or Microsoft; downloads stream through XTK's servers, which pass the bytes along without storing them. Either way, XTK's servers never hold your file contents.",
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
      text: [
        "Every client in Xero Practice Manager (XPM) gets a Documents tab from XTK: a full file manager for that client's folder in your practice's own ",
        { text: "Google Drive, OneDrive or SharePoint", href: "/guides/connect-document-storage" },
        ". You can browse, search, upload, rename, favourite, share and organise client files without leaving Practice Manager — and because it's your storage underneath, everything you do here is just ordinary files and folders in your own drive.",
      ],
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
      text: [
        "Open any client in Practice Manager and click the “Documents” tab — XTK replaces ",
        {
          text: "Xero's native Documents tab",
          href: "/blog/xero-practice-manager-document-management",
        },
        " with its own. What you're looking at is the client's own folder in your practice's storage: files and folders listed with size and modified date, a search box, and a toolbar for everything you can create.",
      ],
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
      text: [
        "To add a folder, use “Create” → “Create folder”, name it, and it appears in the listing — inside the client's folder, like everything else here. If your practice files every client the same way, ",
        { text: "folder templates", href: "/guides/folder-templates" },
        " can create the whole structure in one action.",
      ],
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
      text: [
        "Tick the checkboxes at the left of the list and a selection bar appears with ",
        { text: "bulk actions", href: "/guides/bulk-file-actions" },
        ": move, copy, download as zip, merge PDFs, convert to PDF, delete and share — a guide of its own.",
      ],
    },
    {
      type: "callout",
      title: "Everything stays in the client's folder",
      text: "Every action on this tab is contained inside the client's own folder — uploads land there, new folders nest there, and move or copy destinations can't leave it. Filing from Practice Manager can never scatter documents across your drive or into another client's folder.",
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: [
        "With filing sorted, the rest of the Documents series builds on this tab: bulk actions for moving and merging, ",
        { text: "document templates", href: "/guides/document-templates" },
        " that write client letters for you, and ",
        { text: "folder templates", href: "/guides/folder-templates" },
        " for a standard structure. When you need something from the client instead, “Create” → “Request documents” sends them a checklist — that's ",
        { text: "the document requests guide", href: "/guides/document-requests" },
        ".",
      ],
    },
  ],
};
