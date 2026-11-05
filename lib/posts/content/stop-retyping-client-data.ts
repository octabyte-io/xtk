import type { Post } from "../types";

export const post: Post = {
  slug: "stop-retyping-client-data",
  title: "Stop retyping client data: templates that fill themselves",
  seoTitle: "Document automation for accountants: letters from XPM",
  description:
    "Document automation for accountants: build each letter once, fill it from client data already in Xero Practice Manager, and know what to leave to a person.",
  excerpt:
    "Your practice types each client's name, address and entity details dozens of times a year. XPM already knows all of it — templates should too.",
  date: "2026-06-08",
  updated: "2026-11-05",
  readingTime: "8 min read",
  category: "Product",
  topic: "client-documents",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/stop-retyping-client-data/og.png",
  thumbnail: {
    src: "/images/blog/stop-retyping-client-data/thumb.png",
    alt: "Placeholders resolving against a client record: [CLIENT:NAME] filling as ACME Trading Ltd, a postal address, the primary contact's name, a custom GST period field and today's date — with a note that a primary-contact placeholder resolves to nothing if no contact is flagged primary in Practice Manager",
  },
  relatedSlugs: [
    "accountants-letter-for-a-home-loan",
    "icaew-engagement-letter-update-2026",
    "stop-chasing-clients-for-documents",
    "duplicate-client-records-and-their-documents",
  ],
  relatedLinks: [
    { label: "Document templates in Xero Practice Manager", href: "/guides/document-templates" },
    { label: "Placeholder reference", href: "/guides/placeholder-reference" },
    { label: "Email templates", href: "/guides/email-templates" },
  ],
  body: [
    {
      type: "p",
      text: "Document automation in an accounting practice means writing each recurring letter once, with placeholders where the client's details belong, and letting those details fill in from the client record. If you use Xero Practice Manager (XPM), the record already holds the legal name, addresses, contacts, tax numbers and your own custom fields. The work is deciding which documents to automate, getting the client record clean enough to trust, and being clear about what the template fills and what a person still types.",
    },
    {
      type: "p",
      text: "This article covers where the retyping happens, what a template can and cannot fill, which letters to automate first, how to write a template that survives a year of use, and how it works in XTK.",
    },
    { type: "h2", text: "Where the retyping actually happens" },
    {
      type: "p",
      text: "Count the places a single client's legal name gets typed in a year: the engagement letter, the ethical letter, the fee increase letter, the minutes, the covering letters, the letter a broker asks for. Now multiply by your client list. It is hours of work, and every keystroke is a chance for “Ltd” to become “Limited” on a legal document, or for last year's address to survive into this year's letter.",
    },
    {
      type: "p",
      text: [
        "The data already exists. Practice Manager holds the client's details, and the only reason anyone retypes them is that Word cannot see XPM. That is the gap document automation closes. It is the same principle as ",
        { text: "a standard document request list", href: "/blog/stop-chasing-clients-for-documents" },
        ": write the thing once, carefully, and stop rewriting it under deadline pressure.",
      ],
    },
    { type: "h2", text: "What a template can fill, and what it shouldn't" },
    {
      type: "p",
      text: "A template fills what the client record knows. That is identity and contact data: names, addresses, contacts, the business and company numbers, the balance month, the account manager, today's date, and any custom fields your practice keeps in XPM, such as a GST or VAT period. These are the fields that are boring to type and embarrassing to get wrong.",
    },
    {
      type: "p",
      text: [
        "It does not know the numbers, the judgements or the period-specific facts: the fee for this year's work, the income figures in a lender's letter, the scope you agreed on the phone. Those have to be typed each time, and that is the right way round, because the fields a template cannot fill are the ones carrying the risk. ",
        { text: "The accountant's letter for a home loan", href: "/blog/accountants-letter-for-a-home-loan" },
        " is a worked example of exactly that split: the template fills the client's name, ABN and address, and a person types the income figures and checks them.",
      ],
    },
    {
      type: "quote",
      text: "Automation isn't about speed first. It's about the version of the document that never gets the client's name wrong.",
    },
    { type: "h2", text: "Which documents to automate first" },
    {
      type: "p",
      text: "Not every document is worth a template. The good candidates go out often, repeat the same client details every time, and change little between clients. Roughly in order:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        [
          "Engagement letters. Every client, every year, and the most expensive document to get wrong. If your professional body has changed its guidance, ",
          { text: "updating the engagement letter", href: "/blog/icaew-engagement-letter-update-2026" },
          " is the moment to rebuild it as a template rather than edit forty copies.",
        ],
        "Fee and scope letters. The wording is fixed and the fee changes, so the template fills everything except the number.",
        "Letters to third parties: lenders, landlords, the tax office. They ask for the same facts about the client in the same order.",
        "Minutes and resolutions for company clients. Names, company numbers and registered addresses repeated on every page.",
        "Covering letters. Short, frequent and full of client details. The year-end pack's covering letter is the obvious one.",
      ],
    },
    {
      type: "p",
      text: "Leave one-off letters alone. A document you write twice a year for different reasons will cost more to template than to type.",
    },
    { type: "h2", text: "Get the client record right before you build anything" },
    {
      type: "p",
      text: "A template only moves the client record onto paper, so its mistakes become your mistakes, faster. Before you build the first template, look at a dozen client records with one question in mind: if this went straight into a letter, would it be right?",
    },
    {
      type: "list",
      items: [
        "Legal name versus trading name. Decide which field holds which, and which one a formal letter uses.",
        "A primary contact on every client. Letters addressed to the client's main contact need someone flagged as primary; without that flag, a well-built template should leave the name blank rather than guess.",
        "Postal and street addresses kept separately, and kept current.",
        "Custom fields for anything your letters repeat that XPM has no field for, such as a GST period, a year end or a reporting date.",
        [
          "One record per client. ",
          { text: "Duplicate client records", href: "/blog/duplicate-client-records-and-their-documents" },
          " mean half your letters fill from the stale one.",
        ],
      ],
    },
    { type: "h2", text: "Writing a template that survives a year" },
    {
      type: "list",
      items: [
        "One template per letter, not per client type. Use conditional passages for the paragraph that only applies to companies, or only to Australian clients, instead of keeping five near-identical copies that drift apart.",
        "Put the date in as a placeholder. Every letter is then dated the day it was produced, and nobody sends a letter dated last March.",
        "Give each template an owner. One person changes it, and the rest of the team uses it. A shared template anyone edits quietly becomes several templates.",
        "Test on awkward clients before you roll it out: one with no primary contact, one with an overseas address, a trust, and an individual. These are where the blanks and the odd wording show up.",
        "Name the template for when to use it, so the team picks the right one: “Engagement letter, company” rather than “EL v3 final”.",
        "Save a copy of the old version before you replace it. Letters already sent were produced from it, and if a client queries a clause next year you want to see what it said.",
      ],
    },
    { type: "h2", text: "What changes beyond the typing" },
    {
      type: "p",
      text: "The hours saved are the obvious gain, and the smaller one. The larger gains are in consistency and in who can do the work.",
    },
    {
      type: "list",
      items: [
        "Every letter carries the current wording. When the partner changes a clause, it changes once, in the template, rather than in whichever copy someone last saved to their desktop.",
        "Entity details are right on every document, because nobody edits them by hand. The legal name in the letter is the legal name in XPM.",
        "New staff produce letters to the practice's standard on their first day. The template carries the wording, the layout and the order of things, so the review is about the numbers rather than the formatting.",
        "Review gets shorter and sharper. A reviewer who trusts the boilerplate reads the fields that were typed by hand, which are the ones worth reading.",
        "The client record gets better. Once letters fill from XPM, a wrong address shows up on paper within days, and somebody fixes it at the source.",
      ],
    },
    {
      type: "p",
      text: [
        "The chain also gets shorter. A letter generated from the client record, converted to PDF and ",
        { text: "sent for signature from the same client", href: "/blog/e-signatures-inside-xpm" },
        " never leaves the client's folder, so there is no download, no re-upload and no copy in someone's Downloads folder to wonder about later.",
      ],
    },
    { type: "h2", text: "How document automation works in XTK" },
    {
      type: "p",
      text: [
        "XTK is a browser extension that adds document management, e-signatures, client requests and templates to each client in Practice Manager. A ",
        { text: "document template", href: "/guides/document-templates" },
        " is an ordinary Word .docx with ",
        { text: "placeholders", href: "/guides/placeholder-reference" },
        " typed where client data belongs, such as [CLIENT:NAME], [CONTACT:PRIMARY:NAME], [CUSTOM:GST Period] or [DATE:d MMMM yyyy]. Passages wrapped in [IF …] and [ENDIF] are kept or dropped per client. You upload the template once, and it is shared across the practice.",
      ],
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Open the client in XPM, go to the Documents tab and choose “Create ▾ → File from template”.",
        "Pick the template. XTK reads the client's details from the page you have open and pre-fills every placeholder it can.",
        "Check the values and type the ones it could not fill. Every value is editable, and a count shows how many are still empty.",
        [
          "Name the file and generate. The finished .docx is ",
          { text: "filed in the client's folder", href: "/guides/manage-client-documents" },
          " in your own Google Drive, OneDrive or SharePoint, with no link back to the template.",
        ],
        [
          "If it needs signing, convert it to PDF from the file's row menu and ",
          { text: "send it for e-signature", href: "/guides/send-documents-for-signature" },
          "; the signed copy is filed beside the original.",
        ],
      ],
    },
    {
      type: "p",
      text: "Two things are deliberate. Nothing is written back to XPM: the client's details are only read, to fill the dialog. And an empty field is never silently blank in the letter: anything still empty when you generate appears as its literal token, like [CLIENT:MOBILE], so it is obvious when you read the document.",
    },
    {
      type: "callout",
      title: "What XTK's templates don't do",
      text: "One client at a time: there is no batch run that produces a letter for a whole client list. Templates must be Word .docx files (not legacy .doc, and not PDF), up to 25 MB. Generating works from the client's own page in XPM, not from job or quote pages. And email templates are a separate feature: they carry the portal and document-request links, not client fields.",
    },
    {
      type: "p",
      text: [
        "The full step-by-step is in the ",
        { text: "document templates guide", href: "/guides/document-templates" },
        ", and every token, including date formats, the :LAST4 modifier for tax numbers and the condition grammar, is in ",
        { text: "the placeholder reference", href: "/guides/placeholder-reference" },
        ". For a complete worked example from blank page to letter, read ",
        { text: "how to build the accountant's letter a broker asks for", href: "/blog/accountants-letter-for-a-home-loan" },
        ".",
      ],
    },
    {
      type: "callout",
      title: "XTK and Xero",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited. Product behaviour described here was correct as of November 2026.",
    },
  ],
};
