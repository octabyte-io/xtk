import type { Post } from "../types";

export const post: Post = {
  slug: "e-signatures-inside-xpm",
  title: "E-signatures for accountants, from inside Xero Practice Manager",
  seoTitle: "E-signatures for accountants in Xero Practice Manager",
  description:
    "E-signatures for accountants using Xero Practice Manager: what to ask of an e-signing tool, how send, sign and filing work, and how to stop what goes wrong.",
  excerpt:
    "What an accounting practice needs from e-signing, how a signature request runs from inside the client record in Xero Practice Manager, from send to signed copy filed, and where it goes wrong, with a link to the in-depth article for each part.",
  date: "2026-04-02",
  updated: "2026-11-05",
  readingTime: "9 min read",
  category: "Product",
  topic: "e-signatures",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/e-signatures-inside-xpm/og.png",
  thumbnail: {
    src: "/images/blog/e-signatures-inside-xpm/thumb.png",
    alt: "E-signatures, from send to filed, inside Xero Practice Manager: one document moving through four stages on bands that darken from cream to blue — Prepare, a page with a signature field placed; Send, an envelope; Sign, the page signed; Back and filed, the signed page in a folder with a tick",
  },
  relatedSlugs: [
    "esignature-legality-for-accountants",
    "fix-a-signature-request-after-sending",
    "year-end-pack-xero-practice-manager",
  ],
  relatedLinks: [
    { label: "Send documents for e-signature in Xero Practice Manager", href: "/guides/send-documents-for-signature" },
    { label: "How clients sign documents online with XTK e-signatures", href: "/guides/esignatures-what-your-client-sees" },
    { label: "Pricing", href: "/pricing" },
  ],
  body: [
    {
      type: "p",
      text: "An accounting practice needs four things from e-signatures: the request starts from the client it belongs to, the client can sign without creating an account, the signed copy and its evidence end up in that client's folder without anyone moving them, and someone can see what is still out. Most of the trouble comes after the send, not before it: a wrong address, a signer who goes to paper, an email that bounced, a signed pack that nobody picks up. This article walks through a signature request from send to filed, and links to a longer article on each part.",
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    { type: "h2", text: "What does a practice need from an e-signature tool?" },
    {
      type: "p",
      text: "Engagement letters, tax returns, financial statements, trust minutes and authority forms all need a signature, and most of them go out in the same few weeks of the year. A tool that only collects signatures leaves the rest of the job to you: downloading the PDF, uploading it somewhere else, retyping the client's email address, and later saving the signed copy back to the right folder. Before you choose one, it is worth asking five questions.",
    },
    {
      type: "list",
      items: [
        "Does the request belong to a client? If it starts from the client record, the signed copy has an obvious home and the request can be found from that client later.",
        "What does the signer have to do before they can sign? Every account, password or app between the email and the signature loses some clients.",
        "Where does the signed copy go, and what proves it was signed? You want one file, filed where you keep the client's documents, with the audit trail inside it.",
        "Who can see what is still unsigned, and who hears when it comes back?",
        "How is it charged? Per signature or per pack, a request you have to cancel and send again costs twice.",
      ],
    },
    {
      type: "p",
      text: [
        "Xero's own answer is document packs in Xero HQ and Partner Hub, signed through Xero Sign. They are a reasonable fit for documents that already live in Xero, such as approved tax returns and published reports, but each signer needs a Xero login and signatures are bought in bundles. The ",
        { text: "year-end pack article", href: "/blog/year-end-pack-xero-practice-manager" },
        " covers what they will and won't do, including how to put a pack together in the first place.",
      ],
    },
    { type: "h2", text: "Is an e-signed engagement letter legally binding?" },
    {
      type: "p",
      text: [
        "Yes, in the UK, Australia, New Zealand, the US, Canada, the EU and Singapore. The exclusions are narrow, such as wills, documents sworn on oath and anything that must be witnessed, so engagement letters, authorities and financial statement approvals are fine to sign electronically. Legality is the easy half. The harder question is evidence: if a client says in four years that they never signed, what can you show? That comes down to the audit trail your tool keeps and how long you keep it. Our ",
        { text: "guide to e-signature legality for accountants", href: "/blog/esignature-legality-for-accountants" },
        " sets out each country's law and what the trail needs to prove. For engagement letters in particular, proving which version a client agreed to is a filing decision made when you send, as the ",
        { text: "2026 engagement letter refresh", href: "/blog/icaew-engagement-letter-update-2026" },
        " explains.",
      ],
    },
    { type: "h2", text: "How a signature request runs, from send to filed" },
    {
      type: "p",
      text: "XTK is a browser extension that adds a Documents tab and a Signatures tab to each client in Practice Manager. A signature request in XTK goes through the same four stages as in any tool, and each stage has its own common mistake.",
    },
    {
      type: "table",
      head: ["Stage", "What happens", "What usually goes wrong"],
      rows: [
        ["Prepare", "Pick the PDFs, add signers and a signing order, place fields", "The wrong contact, a signer with no signature field"],
        ["Send", "Each signer is emailed their own link", "A covering email nobody opens, a bounce nobody sees"],
        ["Sign", "The client opens the link and signs in the browser", "A login, a phone that won't show the page"],
        ["Back and filed", "Signed copy and certificate saved to the client's folder", "Nobody is told, or nobody acts on it"],
      ],
      caption: "The four stages of a signature request, and the mistake each one invites.",
    },
    { type: "h2", text: "Prepare: the documents, the signers and the fields" },
    {
      type: "p",
      text: [
        "In XTK you start from a PDF in the client's folder (“Send for signature”) or from the Signatures tab (“New signature”), give the request a title and tick one or more PDFs. Only PDFs can be signed, so a Word letter is converted first. A letter ",
        { text: "generated from a template", href: "/guides/document-templates" },
        " with the client's details already filled in is a good starting point. The ",
        { text: "step-by-step guide to sending a document for signature", href: "/guides/send-documents-for-signature" },
        " shows every screen.",
      ],
    },
    {
      type: "p",
      text: [
        "Then the signers. XTK fills in the first one from the client's primary contact, which is a real address and the one that gets emailed, so check it is the person who should sign. A company, a trust or a couple often has several people and one email field in Practice Manager. Deciding who receives what, by what the document asks them to do, is covered in ",
        { text: "which client contact gets which document", href: "/blog/which-client-contact-gets-which-document" },
        ". Signers sit on numbered steps: everyone on step 1 signs in parallel, and a later step is emailed only when the step before it has finished.",
      ],
    },
    {
      type: "p",
      text: [
        "Last, the fields. XTK offers Signature, Date Signed, Email, Text, Number, Dropdown and Checkbox, each placed for a particular signer and shown in their colour. A form that asks for an account number or a yes/no answer needs more care than a signature line: the field type, whether it is required, and where the answers end up afterwards. ",
        { text: "E-sign forms your clients fill in", href: "/blog/esignature-forms-clients-fill-in" },
        " goes through it field by field. For a year-end pack, build one PDF per signer, in the order they should read it, and keep the sources you built it from.",
      ],
    },
    {
      type: "callout",
      title: "Check each signer has a field",
      text: "XTK won't send a request with no fields, but it checks the request as a whole, not each signer. Switch “Placing for” to each person before you send and make sure they have a signature field. Once sent, nothing can be added.",
    },
    { type: "h2", text: "Send: the covering email and the mailbox it leaves from" },
    {
      type: "p",
      text: [
        "Sending locks the request. Its recipients, documents and fields can't be changed afterwards, and each signer on the first step gets an email with your subject, your message and a link to the signing page. The subject defaults to the request title, so change it if the title is an internal label. What to put in that email, and the small set of standard wordings worth keeping, is in ",
        { text: "the covering email", href: "/blog/covering-email-for-client-documents" },
        ".",
      ],
    },
    {
      type: "p",
      text: [
        "XTK sends through the Gmail or Microsoft mailbox you ",
        { text: "connect", href: "/guides/connect-your-email" },
        ", either your own or a shared practice mailbox. That decides two things. Replies and bounces go back to that mailbox, so it needs to be one somebody reads; ",
        { text: "the email bounced", href: "/blog/email-bounced-document-never-arrived" },
        " explains how to make sure failures reach a person. And the message you typed sits in that mailbox's Sent folder, which is the only copy of it. If the email carried instructions, such as a payment deadline, ",
        { text: "keeping a record of what you sent", href: "/blog/keep-a-record-of-what-you-sent-clients" },
        " covers where to save it so a colleague can find it later.",
      ],
    },
    { type: "h2", text: "Sign: what the client has to do" },
    {
      type: "p",
      text: [
        "In XTK, signers need no account, no password and nothing to install. The link opens straight onto the document, pages fit the width of a phone, “Next field” moves through what they need to fill in, and nothing is signed until they click “Finish signing”. Each link works for 30 days. A signer who is also an active contact on the client's portal sees the request there too. The ",
        { text: "guide to what your client sees", href: "/guides/esignatures-what-your-client-sees" },
        " walks through the signing page screen by screen.",
      ],
    },
    {
      type: "p",
      text: [
        "No login is easier, but it means the link is the access: anyone who has it can sign as that signer, and there is no SMS code or ID check. Where clients still get stuck, and what to say in advance so they don't, is in ",
        { text: "getting clients to sign without an account", href: "/blog/clients-cant-log-in-to-sign" },
        ".",
      ],
    },
    { type: "h2", text: "Back and filed: the signed copy and who deals with it" },
    {
      type: "p",
      text: [
        "When the last signer finishes, XTK stamps every value onto a copy of each document, adds a Certificate of Completion as its last page and saves it in the client's folder as, for example, “Engagement letter 2026 (signed).pdf”. The original is never changed. The certificate lists each signer's name and email address, when they signed, their IP address and browser, the request id and an integrity hash. Every signer is emailed the signed PDF as their copy. The ",
        { text: "Documents tab", href: "/guides/manage-client-documents" },
        " shows it alongside the original.",
      ],
    },
    {
      type: "p",
      text: [
        "Filed is not the same as done. Someone still has to lodge the return, start the work or send the invoice, and that only happens if the right person hears it is back. XTK's ",
        { text: "notification bell", href: "/guides/notifications" },
        " shows each completion, set to your own requests or the whole practice's. ",
        { text: "Signed and back", href: "/blog/signed-documents-back-who-deals-with-them" },
        " covers routing that notice to a role and keeping a list of what is back but not dealt with. Keep the signed copy for as long as ",
        { text: "your record-keeping rules", href: "/blog/how-long-accountants-keep-client-records" },
        " require.",
      ],
    },
    { type: "h2", text: "Tracking what is still out" },
    {
      type: "p",
      text: [
        "Each client's Signatures tab lists every request with its status and progress, such as “1 of 2 signed” or “1 viewing”. Clicking one opens its Status dialog: each signer's state (“Sent”, “Viewed, not signed”, “Signed”, “Declined”) and a timestamped history of every event. “Sent” for days without “Viewed” often means the email never arrived. Chasing is up to you: “Resend link” emails a fresh link to the same address, and there are no automatic reminders.",
      ],
    },
    { type: "h2", text: "When something goes wrong after you send" },
    {
      type: "p",
      text: "Because a sent request can't be edited, every fix is one of two moves: resend the link to the same person, or void the request and send a new one. Which mistakes need which is the difference between a quick nudge and an awkward phone call.",
    },
    {
      type: "list",
      items: [
        [
          "Wrong address, wrong document or a missing field: ",
          { text: "fixing a signature request after it's gone", href: "/blog/fix-a-signature-request-after-sending" },
          " matches each mistake to the fix, and explains why you should warn the client before the cancellation email reaches them.",
        ],
        [
          "One signer signs a printed copy: the request can never complete, and voiding it leaves no copy of the e-signatures already given. ",
          { text: "One signer signed on paper", href: "/blog/one-signer-signed-on-paper" },
          " shows how to end up with one complete document.",
        ],
        [
          "The email never arrived: XTK doesn't detect bounces, so the bounce is a message in the sending mailbox. See ",
          { text: "how to know a document never arrived", href: "/blog/email-bounced-document-never-arrived" },
          ".",
        ],
        "A signer declines: they give a reason, the whole request stops, and the reason appears in the Status dialog. Fix the problem and send a new request.",
      ],
    },
    {
      type: "callout",
      title: "What XTK doesn't do",
      text: "There is no way to send one request to many clients at once, and no list of signature requests across all clients: you check them client by client. There are no scheduled reminders, no saved email templates for signature requests, and no SMS or ID check for signers. Signatures are stamped only when everyone has signed, so a request voided part-way leaves no signed copy. And a sent request can't be copied, so a replacement is built again from the same files.",
    },
    { type: "h2", text: "What it costs" },
    {
      type: "p",
      text: [
        "XTK is $59 USD a month for the whole practice after a 30-day trial, with e-signatures included and no charge per signature or per signer. A request you void and send again costs nothing extra. The ",
        { text: "pricing page", href: "/pricing" },
        " has the detail.",
      ],
    },
    { type: "h2", text: "The short version" },
    {
      type: "list",
      items: [
        "Start every request from the client it belongs to, so the signed copy has a home.",
        "Check the signer, the fields and the covering email before you send. Nothing can change after.",
        "Send from a mailbox somebody reads, so bounces and replies reach a person.",
        "Keep the steps between the email and the signature to a minimum.",
        "Decide who deals with a signed document before it comes back.",
      ],
    },
  ],
  faq: [
    {
      q: "Does Xero Practice Manager have e-signatures built in?",
      a: "Not in Practice Manager itself. Xero's e-signing sits in document packs in Xero HQ and Partner Hub, signed through Xero Sign, and in e-signature requests for tax returns. For document packs, each signer needs a Xero login and signatures are bought in bundles. XTK adds e-signatures to the client record in Practice Manager as a browser extension.",
    },
    {
      q: "Do clients need an account to sign with XTK?",
      a: "No. Each signer gets their own emailed link, which opens the document in an ordinary browser on a phone or computer. There is nothing to install and no password. The link works for 30 days.",
    },
    {
      q: "Where does the signed document go?",
      a: "Into the client's folder in your own Google Drive, OneDrive or SharePoint, as a new PDF named after the original with “(signed)” added and a Certificate of Completion as its last page. The original is kept unchanged, and every signer is emailed the signed copy.",
    },
  ],
};
