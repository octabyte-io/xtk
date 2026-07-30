import type { Guide } from "../types";

export const guide: Guide = {
  slug: "bulk-file-actions",
  title: "Bulk file actions: merge PDFs in Xero Practice Manager",
  description:
    "Select multiple files in XTK's Documents tab to move, copy, zip and merge PDFs inside Xero Practice Manager — without downloading anything or leaving XPM.",
  series: "Documents",
  order: 6,
  date: "2026-07-27",
  updated: "2026-07-27",
  readingTime: "6 min read",
  ogImage: "/images/guides/bulk-file-actions/og.png",
  thumbnail: {
    src: "/images/guides/bulk-file-actions/thumb.png",
    alt: "XTK's selection bar in the Documents tab with three PDFs selected, offering Move, Copy, Download as zip, Merge PDFs, Delete and Share",
  },
  relatedSlugs: [
    "manage-client-documents",
    "set-up-client-portal",
    "connect-document-storage",
  ],
  relatedLinks: [
    { label: "Sub-processors", href: "/legal/subprocessors" },
    { label: "Support", href: "/support" },
  ],
  faq: [
    {
      q: "Why don't I see the Merge PDFs button?",
      a: "It appears only when everything you've selected is a PDF and you've selected at least two. If a Word document, image or folder is in the selection, the button stays hidden — untick the non-PDFs and it appears.",
    },
    {
      q: "Does merging change or delete my original PDFs?",
      a: "No. Merging creates a brand-new PDF in the destination folder you choose; the source files stay exactly where they were. If you don't need the originals afterwards, delete them separately.",
    },
    {
      q: "Can I download a whole folder as a zip?",
      a: "Not directly — the zip download takes files only. Open the folder, tick the select-all checkbox at the top of the list, and use “Download as zip” on its contents instead.",
    },
    {
      q: "Can I move files to a different client?",
      a: "No. Move and copy destinations are limited to folders inside the same client's storage folder — that containment is what stops documents ending up under the wrong client. For a genuine cross-client move, work in Google Drive, OneDrive or SharePoint directly.",
    },
    {
      q: "Is there a limit on merging?",
      a: "You can merge up to 50 PDFs at a time, as long as the sources add up to no more than 100 MB. Bigger jobs work fine in batches: merge in groups, then merge the results.",
    },
  ],
  body: [
    {
      type: "p",
      text: [
        "Tick more than one file in XTK's ",
        { text: "Documents tab", href: "/guides/manage-client-documents" },
        " and a selection bar appears with actions that work on the whole selection: move, copy, download as zip, merge PDFs, convert to PDF, delete, and share to ",
        { text: "the client portal", href: "/guides/set-up-client-portal" },
        ". It's the fastest way to reorganise a client's folder, bundle records for a lender, or combine a season's bank statements into one PDF — all inside Xero Practice Manager (XPM), with every file staying in your practice's own storage.",
      ],
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: "You'll want the basics of the Documents tab first — see “Manage client documents inside Xero Practice Manager” in the related guides. Bulk actions work for every team member; nothing here is Admin-only.",
    },
    { type: "h2", text: "Select files and meet the selection bar" },
    {
      type: "p",
      text: "Every row in the Documents tab has a checkbox on the left, and the checkbox in the header row selects everything in the current folder. As soon as anything is ticked, the selection bar appears above the list: a “3 selected” count with “Clear selection” on the left, and the bulk actions on the right.",
    },
    {
      type: "image",
      src: "/images/guides/bulk-file-actions/01-selection-bar.png",
      alt: "Three PDFs selected in XTK's Documents tab in Xero Practice Manager, with the selection bar offering Move, Copy, Download as zip, Merge PDFs, Delete and Share",
      caption:
        "Three PDFs ticked — the bar offers exactly what that selection can do.",
      width: 1512,
      height: 795,
    },
    {
      type: "p",
      text: "The bar only shows actions your selection can actually perform, so it changes as you tick and untick: “Download” appears when exactly one file is selected, “Convert to PDF” when that one file is a Word document, “Merge PDFs” only when everything selected is a PDF, and “Download as zip” refuses folders. If a button you expected is missing, look at what's ticked — there's usually a folder or an odd file type in the mix.",
    },
    {
      type: "callout",
      title: "Your selection follows you between folders",
      text: "Ticked files stay selected while you navigate around the client's folder, so you can collect files from several subfolders — say a PDF from “FY25 — Tax” and two from “Correspondence” — and then move, merge or zip them together in one action.",
    },
    { type: "h2", text: "Move or copy files between folders" },
    {
      type: "steps",
      steps: [
        {
          title: "Select the files or folders",
          text: "Tick anything you want to relocate — files, folders, or a mix.",
        },
        {
          title: "Click “Move” (or “Copy”)",
          text: "A folder picker opens, rooted at the client's storage folder. Filter folders by name, or click “New folder” to create the destination on the spot.",
        },
        {
          title: "Pick the destination",
          text: "Click “Move here” next to a folder, or open a folder and click “Move in current folder” to drop the selection exactly where you're looking.",
          image: {
            src: "/images/guides/bulk-file-actions/02-move-dialog.png",
            alt: "XTK's Move dialog in Xero Practice Manager listing the client's folders with Move here buttons, a name filter and a New folder button",
            width: 1512,
            height: 795,
          },
        },
      ],
    },
    {
      type: "p",
      text: "Move relocates the originals; Copy leaves them in place and creates duplicates in the destination. Either way the destination list never leaves the client's own storage folder — that's the containment guarantee, and it's why bulk filing can't scatter documents into another client's folder. XTK also checks every item before touching anything, so a bulk move either happens completely or not at all.",
    },
    { type: "h2", text: "Download several files as a zip" },
    {
      type: "p",
      text: "With two or more files selected, “Download as zip” bundles them into a single download named after the client and today's date — “Acme Trading Ltd - 2026-07-27.zip”, ready to forward or archive. Folders can't be included: if one is ticked the button is greyed out with a hint to select individual files, so open the folder and select its contents instead (the select-all checkbox makes that quick).",
    },
    { type: "h2", text: "How do I merge PDFs?" },
    {
      type: "p",
      text: "Merging combines the pages of several PDFs into one new file — engagement letter packs, board packs, or a quarter's bank statements in one document. Select at least two PDFs (and nothing else) and “Merge PDFs” appears in the bar:",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Select the PDFs and click “Merge PDFs”",
          text: "The merge dialog lists your files in the order their pages will appear in the result.",
        },
        {
          title: "Put the files in order",
          text: "Drag rows to reorder them, or use the ↑ and ↓ buttons on each row.",
          image: {
            src: "/images/guides/bulk-file-actions/03-merge-dialog.png",
            alt: "The Merge 3 PDFs dialog in XTK for Xero Practice Manager with a reorderable file list, output filename field and destination folder",
            width: 1512,
            height: 795,
          },
        },
        {
          title: "Name the result and pick its folder",
          text: "Replace the default “Merged.pdf” with something meaningful — the .pdf extension is added for you if you leave it off. The destination defaults to the folder the sources came from; if they came from different folders, click “Pick destination” and choose one.",
        },
        {
          title: "Click “Merge”",
          text: "XTK combines the pages and files the new PDF into the destination folder — your original PDFs are untouched.",
        },
      ],
    },
    {
      type: "video",
      src: "/images/guides/bulk-file-actions/merge-pdfs.mp4",
      width: 1512,
      height: 794,
      alt: "Selecting three bank statement PDFs in the Documents tab, opening Merge PDFs, naming the output and merging — the combined PDF appears in the client's folder",
      caption:
        "Three bank statements in, one “Bank statements – Q1 FY25.pdf” out — a few seconds, no other tools.",
    },
    {
      type: "callout",
      title: "Merge limits",
      text: "Up to 50 PDFs per merge, and the sources can total at most 100 MB. If a merge is rejected for size, run it in smaller batches and merge the results.",
    },
    { type: "h2", text: "Convert a Word document to PDF" },
    {
      type: "p",
      text: [
        "Select exactly one Word document (.doc or .docx) and “Convert to PDF” appears in the bar — the same action as the row menu offers. It creates a PDF copy beside the original, which is the usual first step when you want to merge a letter with existing PDFs or send it for ",
        { text: "e-signature", href: "/guides/send-documents-for-signature" },
        ".",
      ],
    },
    { type: "h2", text: "Delete several files at once" },
    {
      type: "p",
      text: "“Delete” asks for confirmation and lists everything you're about to remove, so there are no surprises. Like single-file deletes, it's a soft delete — “Move to Trash” sends the items to your storage provider's trash, where they can be restored for around 30 days.",
    },
    { type: "h2", text: "Share or unshare with the client portal" },
    {
      type: "p",
      text: "If this client's portal is set up, the bar also offers “Share” (when the selection includes items not yet shared) and “Unshare” (when it includes shared ones). XTK works through the selection one item at a time so you can watch each row update. Shared folders are read-write for the client and shared files read-only — the client portal guide covers the rules in full.",
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: [
        "Bulk actions cover organising what's already in the client's folder. The rest of the series fills the folder for you: ",
        { text: "document templates", href: "/guides/document-templates" },
        " generate client letters, ",
        { text: "folder templates", href: "/guides/folder-templates" },
        " lay down a standard structure, and ",
        { text: "document requests", href: "/guides/document-requests" },
        " collect records straight from the client.",
      ],
    },
  ],
};
