import type { Post } from "../types";

export const post: Post = {
  slug: "year-end-pack-xero-practice-manager",
  title: "How to build a year-end pack in Xero Practice Manager",
  description:
    "How to build a year-end pack in Xero Practice Manager: what goes in it and in what order, when to merge, what Xero's document packs do, and what to keep.",
  excerpt:
    "A year-end pack is two records: the pack you send and the pack that comes back signed. Here is what goes in one, what order it goes in, when to merge and when not to, what Xero's own document packs will and won't do, and what to keep once the client has signed.",
  date: "2026-09-14",
  readingTime: "13 min read",
  category: "Guides",
  topic: "e-signatures",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/year-end-pack-xero-practice-manager/og.png",
  thumbnail: {
    src: "/images/blog/year-end-pack-xero-practice-manager/thumb.png",
    alt: "Five documents. One file to sign: five white cards labelled Letter, Accounts, Rep letter, Tax return and Summary, fanned on a mint ground with an arrow into a single PDF titled Year-end pack FY2026 that carries a pen signature on its signature line, beside the line Keep the signed copy beside it",
  },
  relatedSlugs: [
    "how-to-name-client-files",
    "xero-practice-manager-job-documents",
  ],
  relatedLinks: [
    { label: "Bulk file actions: merge PDFs in Xero Practice Manager", href: "/guides/bulk-file-actions" },
    { label: "Send documents for e-signature in Xero Practice Manager", href: "/guides/send-documents-for-signature" },
    { label: "Document templates in Xero Practice Manager", href: "/guides/document-templates" },
    { label: "Pricing", href: "/pricing" },
  ],
  body: [
    {
      type: "p",
      text: "Build a year-end pack as one PDF for each person who has to sign it: a covering letter first, then the documents that person signs, then anything they only need to read, named for the client, the pack and the year. Make it from source files you keep, send that one file for signature, and file the signed copy beside the sources rather than in place of them. Everything else in this article is the reasoning behind those three sentences.",
    },
    {
      type: "p",
      text: [
        "It covers what goes in a pack, what order it goes in, when to merge and when not to, what Xero Practice Manager (XPM) and Xero's own document packs will and won't do, and what to keep afterwards. It is about assembling and filing the pack, not preparing what goes in it: collecting the client's records is ",
        { text: "a different problem", href: "/blog/stop-chasing-clients-for-documents" },
        ", and so is ",
        { text: "naming the files", href: "/blog/how-to-name-client-files" },
        ", though both come up. Sending the pack for signature is one stage of ",
        { text: "e-signing from Xero Practice Manager", href: "/blog/e-signatures-inside-xpm" },
        ", which has its own overview.",
      ],
    },
    { type: "h2", text: "What is a year-end pack?" },
    {
      type: "p",
      text: "It is the set of documents a practice sends a client at the end of the year's work, for the client to read, approve and sign, and which the practice then keeps as the record of what the client approved. The contents change with the client and the country. The shape does not: something that explains, something to sign, and something to keep.",
    },
    {
      type: "table",
      head: ["Part", "Typical contents", "Signed?"],
      rows: [
        ["Covering letter", "What's enclosed, what to check, by when", "No"],
        ["Accounts", "Financial statements for the year", "Yes"],
        ["Representation letter", "The client's confirmations to you", "Yes"],
        ["Tax return", "Return or computation, with declaration", "Yes"],
        ["For information", "Tax payable, dates, notes", "No"],
      ],
      caption: "A company's pack. A sole trader's is usually shorter, and an individual's may be a letter and a return.",
    },
    {
      type: "p",
      text: "Two things make assembling one a document problem rather than an accounting one. The parts come from different places: the accounts and the return out of tax software, the letter out of a template, the summary out of a spreadsheet, so they arrive as separate files with separate names. And the pack is really two records, the one you sent and the one that came back signed. Most year-end filing trouble is one of those two going missing, or one being mistaken for the other.",
    },
    { type: "h2", text: "Should a year-end pack be one PDF or several files?" },
    {
      type: "p",
      text: "One PDF for everything a single person reads and signs at one sitting, and a separate file wherever the signer or the occasion changes. A director approving a company's accounts and the same director signing their personal return are two packs, because they are two approvals by two different taxpayers, and a signed file should be the record of exactly one of them.",
    },
    {
      type: "p",
      text: "The case for merging is that a pack is read like a printed bundle. One file opens in one place, in the order you chose, on whatever device the client has to hand, and it carries one name everywhere it goes. Five attachments arrive in whatever order the email app likes, and the client signs the one they found first.",
    },
    {
      type: "p",
      text: "The case against merging too much is size and status. Practice Manager accepts uploads of up to 16MB. Xero's document packs take up to 10MB per document. A tool that tracks signatures per document can tell you the accounts are signed and the representation letter is not, but only if they are different documents. So merge by signer, not by client, and check the size of the result before you plan to send it anywhere.",
    },
    { type: "h2", text: "What order should a year-end pack be in?" },
    {
      type: "list",
      ordered: true,
      items: [
        "The covering letter. What is enclosed, what the client should check, what they need to sign, and by when. For some clients it is the only page they will read closely, so it has to work on its own.",
        "The documents that need a signature, in the order the letter lists them.",
        "Documents for information: the tax payable and when, next year's dates, notes the client should keep.",
      ],
    },
    {
      type: "p",
      text: "Refer to pages, not bookmarks. Merged PDFs often lose the bookmarks their sources had, and a client reading on a phone would not see them anyway. If the letter says the signature is on page 14, the client finds page 14. That does mean the letter is the last part to finish, once the order and page count are settled.",
    },
    { type: "h2", text: "What can Practice Manager do with the pack on its own?" },
    {
      type: "p",
      text: [
        "Store it. ",
        {
          text: "Xero Central's page on documents",
          href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
        },
        ", now titled for Xero Partner Hub, describes uploading files of up to 16MB to a client, job or quote, editing a document's title and note, and deleting it; documents are stored in Practice Manager unless you connect a document management system, and listed in alphabetical order. It describes no way to merge files, reorder pages or download several documents at once. So in XPM alone, a pack is assembled somewhere else — a PDF editor, or the export options in whatever produced the accounts — and uploaded as a finished file.",
      ],
    },
    {
      type: "p",
      text: "That leaves the sending, and for sending Xero has built something specific.",
    },
    { type: "h2", text: "What do Xero's document packs do?" },
    {
      type: "p",
      text: [
        "Document packs, in Xero HQ and Xero Partner Hub, collect a client's documents into one pack, add e-signature requests through Xero Sign, powered by Adobe Acrobat Sign, and send the client a link to a secure Xero portal where they read and sign. Xero launched them for ",
        { text: "Australian partners", href: "https://blog.xero.com/product-updates/e-signing-made-easy-in-au/" },
        " first and for ",
        { text: "UK partners in October 2022", href: "https://blog.xero.com/news-events/added-value-to-uk-practice-tools/" },
        ", and they are available in New Zealand too. A pack can hold published reports from the client's Xero organisation, tax returns from Xero Tax once they are marked Approved, and PDFs uploaded from your computer.",
      ],
    },
    {
      type: "table",
      head: ["Xero Central says", "Limit"],
      rows: [
        ["Documents per pack", "Up to 15"],
        ["Size per document", "10MB"],
        ["E-signature requests", "At least one per pack"],
        ["Each signer", "Their own Xero login"],
        ["Who can see packs", "Everyone in the practice"],
        ["Unsigned after 12 months", "Expired, removed from portal"],
        ["Signatures", "Bought in Xero Sign bundles"],
      ],
      caption: "From Xero Central's document pack pages, read 14 September 2026.",
    },
    {
      type: "p",
      text: "For tax returns it is the natural tool, because the return goes into the pack with its signature request already attached and locked, and the pack's status tells you who has signed. Before relying on it as the whole year-end process, four details on those pages are worth reading twice.",
    },
    {
      type: "list",
      items: [
        "It is a way of sending, not a place to file. Packs are listed under the Practice menu, and Xero Central describes downloading the documents in a pack but not where the signed copies go afterwards. If you use packs, make saving the signed documents into the client's file a named step, with a named owner.",
        "Everyone can see them. Xero Central warns that all Xero Partner Hub users in the practice can open document packs and view what is in them, and recommends not adding restricted or confidential information.",
        "Assembly still happens first. Uploaded documents come from your computer, one PDF each, so the merging, ordering and naming happen before the pack does, inside the 15-document and 10MB limits.",
        [
          "Signatures are paid for separately. In the UK, ",
          {
            text: "Xero Sign bundles",
            href: "https://www.xero.com/uk/accountants-bookkeepers/document-packs/bundle-pricing/",
          },
          " run from 100 transactions for £60 to 2,500 for £600, excluding VAT, and expire 12 months after purchase. Xero counts a transaction as a document with at least one e-signature, and caps each at 100 pages or 10MB — so how you split a pack changes both what it costs and whether it fits.",
        ],
      ],
    },
    { type: "h2", text: "How do you assemble a year-end pack step by step?" },
    {
      type: "p",
      text: "Whatever the tools, the order of work is the same, and doing it in this order is what keeps the sources and the two records apart.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        [
          "Make a folder for the pack inside the year's folder, or inside the year-end job's folder if you ",
          { text: "file by job", href: "/blog/xero-practice-manager-job-documents" },
          ": FY2026 / Year-end pack.",
        ],
        [
          "Copy, don't move, the final version of each part into it. The accounts stay where the job keeps them, and the pack gets a copy. It is the same rule that applies to ",
          { text: "a workpaper pack", href: "/blog/xero-workpapers-and-your-client-documents" },
          ": a pack is a bundle for one purpose, not the file.",
        ],
        "Turn every part into a PDF, and name each one so it would make sense on its own: Accounts - Acme Trading Ltd - FY2026.pdf.",
        "Merge the parts for each signer, in order, into one file named for what it is: Year-end pack - Acme Trading Ltd - FY2026.pdf. The client's name belongs in it, because the person receiving it has no folder to tell them whose it is.",
        "Open the merged file and check it: the page count, that every signature page is there, and that the pages the letter refers to are the right ones.",
        "Send it for signature, then file what comes back in the same folder, beside the pack as sent.",
      ],
    },
    { type: "h2", text: "What should you keep once the client has signed?" },
    {
      type: "p",
      text: "Three things, together in the pack's folder, each as its own file.",
    },
    {
      type: "list",
      items: [
        "The sources, as they were when the pack was made.",
        "The pack as sent. If the client asks for a change, make a new pack and name its state — Year-end pack - Acme Trading Ltd - FY2026 - revised 2026-10-02.pdf — rather than overwriting the first. The version the client queried is part of the record of how the accounts were agreed.",
        "The pack as signed, with whatever record of the signing your tool produces.",
      ],
    },
    {
      type: "p",
      text: [
        "Then leave the signed file alone. Don't merge it into a bigger bundle, don't combine it with next year's, and don't replace it with a tidier copy. The signed file, with its signing record, is the evidence of what the client approved; a merge makes a new file that contains a picture of the signature but is not the thing that was signed. If a lender wants everything in one PDF, make that as a copy and keep the original as it came back. Who hears the pack is back, and who lodges and invoices, is covered in ",
        { text: "signed and back", href: "/blog/signed-documents-back-who-deals-with-them" },
        ".",
      ],
    },
    { type: "h2", text: "How do you send the pack to a lender or broker?" },
    {
      type: "p",
      text: [
        "Send the signed files, not the pack as sent, and send them as they are. A lender or mortgage broker usually asks months later, for the last two years' signed accounts and returns, which is when a folder that holds the signed copies beside the packs pays for itself. If several files go at once in a zip, remember that ",
        { text: "a zip is flat", href: "/blog/how-to-name-client-files" },
        ": each file arrives with its own name and nothing else, so two files both called Accounts.pdf from two years become indistinguishable. Names that carry the client and the year survive the trip.",
      ],
    },
    { type: "h2", text: "How does this work in XTK?" },
    {
      type: "p",
      text: [
        "XTK is a browser extension that adds a Documents tab to each client, job and quote in Practice Manager, showing that client's folder in your practice's own Google Drive, OneDrive or SharePoint. The assembly steps above map onto actions in ",
        { text: "the client's Documents tab", href: "/guides/manage-client-documents" },
        ", so the pack is built, sent and filed without leaving XPM.",
      ],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [
          "Select the finished parts and use “Copy” to put them in the pack folder. ",
          { text: "Bulk actions", href: "/guides/bulk-file-actions" },
          " take up to 200 items at a time, only ever within the same client's folder, and XTK checks every item before touching any of them.",
        ],
        [
          "Generate the covering letter from a ",
          { text: "document template", href: "/guides/document-templates" },
          ". Templates are Word files and produce a Word file, with placeholders such as [CLIENT:NAME] filled from XPM. There is no placeholder for the year end or the job, so type the year into the letter. Then use “Convert to PDF” on it.",
        ],
        "Select the letter and the other PDFs and choose “Merge PDFs”. Drag the files into order, replace the suggested Merged.pdf with the pack's real name, and pick the pack folder as the destination. The sources are left exactly where they were.",
        [
          "Send the merged pack ",
          { text: "for signature", href: "/guides/send-documents-for-signature" },
          ". Signers can be anyone with an email address, so a second director is simply a second signer, and they can sign at the same time or in turn. Place signature and date fields on the pages each person signs.",
        ],
        "When everyone has signed, XTK saves a new file beside the pack — Year-end pack - Acme Trading Ltd - FY2026 (signed).pdf — with a certificate of completion as its last page, and leaves the pack as sent untouched. That is the two records, filed side by side, without anyone remembering to do it.",
      ],
    },
    {
      type: "callout",
      title: "Limits worth knowing before a busy week",
      text: [
        "A merge takes up to 50 PDFs with a combined size of 100MB, and XTK tells you if you are over only after you click Merge. The merged file has no bookmarks, even if the sources did, which is another reason for page numbers in the letter. A password-protected PDF will not merge, so remove the password first. “Convert to PDF” works on one Word document at a time. Each PDF in a signature request is signed as its own file with its own certificate, so merge before you send, not after. Signing links expire after 30 days, and when a request completes every signer is emailed the signed PDFs as attachments, so a very large pack makes ",
        { text: "a very large email", href: "/blog/send-documents-to-clients-without-attachments" },
        ".",
      ],
    },
    {
      type: "p",
      text: [
        "Two hedges this site owes on every article like this. Files live in your own storage, and uploads go straight from the browser to Google or Microsoft, but merging, zipping, generating from a template and flattening signatures all stream the file through XTK's backend in flight; “Convert to PDF” hands the Word file to CloudConvert. ",
        { text: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
        " and the ",
        { text: "sub-processors page", href: "/legal/subprocessors" },
        " have the detail. XTK is $59 USD a month for the whole practice after a 30-day trial, with no per-user charge — the ",
        { text: "pricing page", href: "/pricing" },
        " has the rest.",
      ],
    },
    {
      type: "callout",
      title: "What XTK does not do here",
      text: "It does not connect to Xero or Xero Tax, so it cannot pull in published reports or returns: export them and upload the PDFs. It does not send or read Xero's document packs, or file their signed copies. It does not number pages, add bookmarks or build a contents page. It does not know which job or year a file belongs to, so the folder and the name still carry that. And it does not stop anyone moving or deleting a signed file; the folder's permissions in Google Drive, OneDrive or SharePoint do that.",
    },
    { type: "h2", text: "The year-end pack checklist" },
    {
      type: "list",
      items: [
        "One pack per signer and occasion, not per client.",
        "Covering letter first, then what to sign, then what to read.",
        "Page numbers in the letter, not bookmarks.",
        "A pack folder inside the year or the job, with copies of the parts, never the originals.",
        "Every part a PDF, named so it makes sense on its own.",
        "The pack named for the client, the pack and the year.",
        "Check the page count and the signature pages before sending.",
        "Keep the sources, the pack as sent and the pack as signed, side by side.",
        "Never merge, replace or tidy a signed file. Copy it.",
        "Send lenders the signed files, named to survive a zip.",
      ],
    },
    {
      type: "callout",
      title: "Sources and dates",
      text: [
        "Practice Manager's document behaviour is from Xero Central's ",
        {
          text: "Upload and manage documents",
          href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
        },
        " page. Document pack limits are from Xero Central's pages on ",
        { text: "adding documents", href: "https://central.xero.com/s/article/Add-documents-to-a-document-pack" },
        ", ",
        { text: "sending a pack", href: "https://central.xero.com/s/article/Send-a-document-pack" },
        " and ",
        {
          text: "e-signature requests",
          href: "https://central.xero.com/s/article/Add-or-remove-e-signatures-in-a-document-pack",
        },
        ", and Xero Sign pricing from Xero's UK bundle pricing page. All were read on 14 September 2026; Xero changes these pages, so check the limits before you plan around them. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      ],
    },
  ],
  faq: [
    {
      q: "What goes in a year-end pack for an accounting client?",
      a: "Usually a covering letter explaining what is enclosed and what needs signing, the financial statements, a representation letter, the tax return or computation with its declaration, and information-only documents such as the tax payable and upcoming deadlines. A company's pack is typically the fullest; an individual's may be just a letter and a return.",
    },
    {
      q: "Should a year-end pack be one PDF or separate files?",
      a: "One PDF for everything a single person reads and signs at one sitting, in order: letter, documents to sign, documents for information. Keep separate packs where the signer changes, such as a company's accounts and a director's personal return, so each signed file records exactly one approval. Check the merged file's size: Xero Practice Manager accepts uploads of up to 16MB and Xero's document packs take up to 10MB per document.",
    },
    {
      q: "Can Xero Practice Manager merge PDFs?",
      a: "Xero Central's page on Practice Manager documents, read on 14 September 2026, describes uploading, editing and deleting documents but no way to merge them or download several at once. Xero's document packs group documents for e-signature but hold them as separate documents. Merging needs a PDF editor or an add-on that works inside Practice Manager.",
    },
    {
      q: "How many documents can a Xero document pack hold?",
      a: "Up to 15 documents, with a maximum file size of 10MB each, according to Xero Central as read on 14 September 2026. Each pack needs at least one e-signature request, each signer needs their own Xero login, and Xero's UK pricing page caps a signed document at 100 pages. Signatures are bought in Xero Sign bundles that expire 12 months after purchase.",
    },
    {
      q: "Should signed documents be merged into one file?",
      a: "No. Keep each signed document exactly as it came back, with its signing record, because that file is the evidence of what the client approved. A merge creates a new file that shows the signature but is not the signed document. If someone needs a single PDF, make it as a copy and keep the originals.",
    },
  ],
};
