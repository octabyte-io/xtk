import type { Post } from "../types";

export const post: Post = {
  slug: "covering-email-for-client-documents",
  title: "The covering email: what to write when you send a client documents to sign",
  seoTitle: "Covering email for documents to sign: what to write",
  description:
    "What to write in the covering email when you send a client documents to sign: the five things it must say, the subject line, and a wording you can copy.",
  excerpt:
    "The covering email decides whether a document gets opened. Here is what it has to say, how to write the subject line, a wording you can copy, and the small set of standard emails worth keeping, whether your tool saves templates or not.",
  date: "2026-10-01",
  readingTime: "11 min read",
  category: "Practice tips",
  topic: "e-signatures",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/covering-email-for-client-documents/og.png",
  thumbnail: {
    src: "/images/blog/covering-email-for-client-documents/thumb.png",
    alt: "Say what's inside. On a deep plum ground, two emails sit in an inbox: one from noreply with the subject Document pack is faded out, and the other, from Acme Accounting with the subject Please sign: 2026 tax return, stands out in white",
  },
  relatedSlugs: [
    "send-documents-to-clients-without-attachments",
    "fix-a-signature-request-after-sending",
    "stop-chasing-clients-for-documents",
  ],
  relatedLinks: [
    { label: "Email templates: write once, reuse for invites and requests", href: "/guides/email-templates" },
    { label: "Connect Gmail or Outlook so XTK can send email for you", href: "/guides/connect-your-email" },
    { label: "Send documents for e-signature in Xero Practice Manager", href: "/guides/send-documents-for-signature" },
  ],
  body: [
    {
      type: "p",
      text: "The covering email is the short message that arrives with a link to sign or upload something. It decides whether the document gets opened. A good one tells the client who it is from, what is inside, what to do and by when, in a subject line and a few sentences. Write that wording once for each kind of thing you send, keep the set small, and stop relying on the default text your software supplies.",
    },
    {
      type: "p",
      text: [
        "This article covers what the email has to say, how to write the subject line, a wording you can copy, which standard emails are worth keeping, and what to do when your tool won't save them for you. Where the email sits in the rest of the signing process is in ",
        { text: "our guide to e-signatures in Practice Manager", href: "/blog/e-signatures-inside-xpm" },
        ".",
      ],
    },
    { type: "h2", text: "Can you save an email template for a Xero document pack?" },
    {
      type: "p",
      text: [
        "No. When you send a document pack, Xero's help article ",
        { text: "Send a document pack", href: "https://central.xero.com/s/article/Send-a-document-pack" },
        " lists an optional step to edit the email before sending, and says every recipient of the pack receives the same email. So you can change the wording for one pack. You can't save your wording and have it there next time.",
      ],
    },
    {
      type: "p",
      text: [
        "Practices have asked for that since June 2022. The idea ",
        {
          text: "Document Packs Email Templates – Ability to edit",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/45254551",
        },
        " had 72 votes when we read it on 1 October 2026. It has been marked Submitted since 13 June 2022, and the latest comment is from 31 August 2026. A second idea about document packs has the same request mixed into its comments, and in November 2022 Xero's community manager pointed those commenters to the first one.",
      ],
    },
    {
      type: "p",
      text: "The comments say the same things for four years. The default wording doesn't sound like the practice. Rewriting it for every pack takes time and lets mistakes in, and several people describe pasting the same paragraph into the box each time. One practitioner says some clients took the email for junk. Others ask for more than one saved wording, for the client's first name to be filled in, for different text for companies and individuals, for a practice logo, and for the email to list the documents in the pack.",
    },
    {
      type: "p",
      text: "That list is a good description of what a covering email should do. You can meet most of it today with a few minutes of writing, whatever tool sends the email.",
    },
    { type: "h2", text: "What does the covering email have to do?" },
    {
      type: "p",
      text: "A client reading it should be able to answer five questions without opening anything.",
    },
    {
      type: "list",
      items: [
        "Who is this from? Your practice name, and a person's name, in words the client already knows.",
        "What is inside? The documents, named the way the client thinks of them: your 2026 tax return, not your document pack.",
        [
          "What do I do? Read and sign, or upload, or just keep a copy. Say how long it takes and ",
          { text: "whether they need an account", href: "/blog/clients-cant-log-in-to-sign" },
          ".",
        ],
        "By when, and why? A date, and the reason for it, such as a lodgment deadline.",
        "What happens next, and who do I ask? What they'll receive once it's done, and a name and number for questions.",
      ],
    },
    {
      type: "p",
      text: "Five short answers fit in six or seven sentences. Anything longer belongs in the document itself or in a letter inside the pack. The email's job is to get the client to open the link, knowing what they'll find.",
    },
    { type: "h2", text: "Write the subject line first" },
    {
      type: "p",
      text: "The subject line is all a client sees before deciding whether to open the email, and it is what they search for three weeks later. Put the action first, then what the document is, then who it is for.",
    },
    {
      type: "table",
      head: ["Instead of", "Write"],
      rows: [
        ["Document pack", "Please sign: 2026 tax return, Sophie Baxter"],
        ["Signature request", "Please sign: FY26 accounts, Acme Trading"],
        ["FY26_ITR_final_v3.pdf", "Please sign: 2026 tax return"],
        ["Documents required", "Records we need for your 2026 return"],
        ["URGENT action needed", "Please sign by 16 October: BAS, Acme Trading"],
      ],
      caption: "Action, document, and who it is for. Name the entity when a client has more than one.",
    },
    {
      type: "list",
      items: [
        "Name the entity whenever the client has several. A director with a company, a trust and a personal return gets three emails that look alike otherwise.",
        "Use the same opening words every time. A client who has seen “Please sign:” from you before knows what the next one is.",
        "Keep amounts and tax file numbers out of it. A subject line shows on lock screens and in shared inboxes.",
        "Don't use a file name. A file name is written for your filing, not for the client.",
        "Save “urgent” for when it is true, and give the date instead.",
      ],
    },
    { type: "h2", text: "A covering email you can copy" },
    {
      type: "p",
      text: "Here is a signature request for a company's year-end documents. Change the names, the documents and the date, and keep the rest.",
    },
    {
      type: "quote",
      text: "Hi Sophie, the 2026 tax return and financial statements for Acme Trading are ready for you to sign. There are three documents: the company tax return, the financial statements and the directors' declaration. Please read them, then sign where marked. It takes about five minutes and you don't need an account. We need your signature by Friday 16 October so we can lodge on time. When everyone has signed, you'll receive the signed copies by email. If anything looks wrong, don't sign. Reply to this email or call Sam on 03 9555 1000.",
    },
    {
      type: "p",
      text: "It answers the five questions in order. It also tells the client what to do if something is wrong, which is the sentence most covering emails leave out. A client who spots a mistake and has no instruction will either sign anyway or do nothing.",
    },
    { type: "h2", text: "Should the email list the documents?" },
    {
      type: "p",
      text: "Yes, when there is more than one. A client who is told there are three documents, and what they are, can check that they have seen all three before they finish. It also separates what they are signing from what they are only being given to read, which matters when a pack holds a return to sign and a set of notes that needs no signature.",
    },
    {
      type: "p",
      text: [
        "Use plain names, in the order the client will meet them, and leave the figures out. The refund or the amount payable belongs in the document or in your cover letter inside it, because an email can still reach the wrong person. Our article on ",
        { text: "sending documents without attachments", href: "/blog/send-documents-to-clients-without-attachments" },
        " explains why the email should carry the notice and not the content.",
      ],
    },
    { type: "h2", text: "Why do clients take it for junk?" },
    {
      type: "p",
      text: "An email from an address the client has never seen, with a generic subject and a link, looks like every phishing email they have been warned about. Three things change that.",
    },
    {
      type: "list",
      items: [
        "Tell clients in advance. At onboarding, and again in the email you send with your engagement letter, say which address signing emails come from and what the subject line will start with.",
        [
          "Send from your own address where the tool allows it. A reply then reaches a person, and so does ",
          { text: "the bounce if the address is wrong", href: "/blog/email-bounced-document-never-arrived" },
          ". The client has seen the address before, too.",
        ],
        "Make the email specific. A real name, the entity, the financial year and a phone number are details a mass phishing email doesn't have.",
      ],
    },
    {
      type: "p",
      text: "If your signing tool sends from its own address and you can't change that, the first point does most of the work. A one-line note from your own mailbox saying that a signing email is on its way, and what it's called, takes less time than the phone call asking whether it is real.",
    },
    { type: "h2", text: "Keep a small set, not one per client" },
    {
      type: "p",
      text: "Most practices send the same six or seven emails all year. Write each one once.",
    },
    {
      type: "table",
      head: ["Email", "The line it must have"],
      rows: [
        ["Tax return to sign", "Sign by this date so we can lodge"],
        ["Accounts to sign", "Who signs, and in what order"],
        ["Engagement letter", "What changed since last year"],
        ["Records request", "What to upload, and where"],
        ["Portal invite", "What the portal is for"],
        ["Reminder", "The date, and that the link still works"],
        ["Cancelled, resending", "Nothing is wrong with the work"],
      ],
      caption: "Seven standard emails cover most of a practice's document sending.",
    },
    {
      type: "list",
      items: [
        "Write a second version only where the wording really differs. A company email says the directors sign on the company's behalf, and an individual's doesn't. That is two versions of one email, not a reason for a wording per client.",
        "Name each one by what it is for, so anyone on your team picks the right one.",
        "Leave the greeting, the entity, the document list and the date as the parts you fill in each time. Everything else stays fixed.",
        [
          "Keep them where everyone can reach them. If your tool saves templates, use that. If it doesn't, a shared document your team pastes from gives you the same consistency. Our article on ",
          { text: "fixing a sent signature request", href: "/blog/fix-a-signature-request-after-sending" },
          " has the wording for the cancellation note.",
        ],
        "Read the set once a year, before your busy season, and have one person own the changes.",
      ],
    },
    { type: "h2", text: "Read the emails you don't write" },
    {
      type: "p",
      text: "The covering email is the one you control. Most signing tools also send reminders, cancellation notices and a completion email, and their wording is often fixed. Send a test request to yourself once, sign it, and read everything that arrives.",
    },
    {
      type: "p",
      text: "Then use your covering email to prepare the client for the rest. If signed copies arrive by email as attachments, say so. If the completion email goes out under the same subject as the request, expect a client to ask why they are being asked to sign again, and say in the first email that a second message with the signed copies will follow.",
    },
    { type: "h2", text: "How does XTK handle the covering email?" },
    {
      type: "p",
      text: [
        "XTK is a browser extension that adds a Documents tab to each client in Practice Manager. It has saved ",
        { text: "email templates", href: "/guides/email-templates" },
        ", but not for every kind of email, so here is where they apply and where they don't.",
      ],
    },
    {
      type: "list",
      items: [
        "Email templates are shared across the practice. Each has a name, a subject and a body, with bold, bullet lists and links, and a “Preview” that shows the email as the client will receive it.",
        [
          "A ",
          { text: "document request", href: "/guides/document-requests" },
          " has an “Email template” dropdown on its last step. It starts on XTK's own short wording, and choosing a template replaces the subject and body with yours. You can still edit both, and add CC addresses, before sending.",
        ],
        "A client portal invite always starts from a template. Every practice begins with one called “Portal invite”, which you can rewrite.",
        [
          "A ",
          { text: "signature request", href: "/guides/send-documents-for-signature" },
          " has a “Subject” and an optional “Message”, typed each time. Your message goes above a fixed line asking the recipient to review and sign, with the link. A dashed list in the message comes out as bullets, so a document list reads cleanly.",
        ],
        [
          "Mail goes from ",
          { text: "your own Gmail or Microsoft mailbox", href: "/guides/connect-your-email" },
          " once it's connected, either a shared practice address or your own. A copy lands in that mailbox's Sent folder and replies come back to it. Your practice name is the heading of every client email.",
        ],
      ],
    },
    {
      type: "callout",
      title: "What XTK doesn't do",
      text: "Signature emails have no template picker, so that wording is pasted in, the same as with a document pack. The subject of a signature request starts as the request's title, which is often an internal label, so check it before you send. Templates can fill in only two things, the document request link and the portal invite link. There is no client name or first name to insert, so the greeting is typed by hand, and there is no switch between company and individual wording, so you keep two templates. No email lists the documents or the requested items for you. There is no logo, only your practice name, and each email ends with a small “Powered by XTK” line. “Resend email” on a document request sends a fixed subject, “Reminder: documents requested”, with the request's message and link, not your template. The completion email reuses your subject and message above a fixed line saying signing is complete, with the signed PDFs attached, and the notices for a voided or declined request are fixed wording. With no mailbox connected, mail goes from XTK's shared address.",
    },
    {
      type: "p",
      text: "Two habits follow from that. Write the signature message so it still makes sense at the top of the completion email, by saying in it that signed copies will follow. And keep your signature wording in the same shared place as the rest of the set, so the one email XTK doesn't template is still the same from everyone on your team.",
    },
    { type: "h2", text: "The short version" },
    {
      type: "list",
      items: [
        "The covering email decides whether the document is opened. Say who it's from, what's inside, what to do, by when, and what happens next.",
        "Write the subject as action, document, and who it is for. Never a file name or the tool's default.",
        "List the documents when there is more than one, and keep the figures out.",
        "Tell clients in advance which address signing emails come from.",
        "Keep about seven standard emails, named by purpose, in one shared place.",
        "A Xero document pack's email can be edited per pack but not saved. Paste from your shared set.",
        "Send yourself a test and read the automatic emails, so your covering email can prepare the client for them.",
      ],
    },
    {
      type: "callout",
      title: "Sources and dates",
      text: [
        "Xero Central, ",
        { text: "Send a document pack", href: "https://central.xero.com/s/article/Send-a-document-pack" },
        ", read on 1 October 2026. Xero Product Ideas, ",
        {
          text: "Document Packs Email Templates – Ability to edit",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/45254551",
        },
        " (posted 3 June 2022; 72 votes, Submitted) and ",
        {
          text: "Document Packs – Text box for documents within a pack",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/45428698",
        },
        " (posted 15 July 2022; 58 votes, Submitted, Xero response of 3 November 2022), both read the same day. Comments there are practitioners' own accounts, not Xero's. XTK's behaviour is as of 1 October 2026. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      ],
    },
  ],
  faq: [
    {
      q: "Can I create an email template for Xero document packs?",
      a: "Not a saved one. Xero's help article on sending a document pack lets you edit the email before each send, and every recipient of the pack gets the same email. Practices have asked for saved templates since June 2022. The idea had 72 votes on 1 October 2026 and is still marked Submitted. Until that changes, keep your wording in a shared document and paste it in.",
    },
    {
      q: "What should the subject line of a signature request say?",
      a: "The action, the document and who it is for, in that order: “Please sign: 2026 tax return, Sophie Baxter”. Start every signing email with the same words so clients recognise them, name the entity when a client has more than one, and keep amounts, tax file numbers and file names out of it.",
    },
    {
      q: "Should a covering email list the documents being sent?",
      a: "Yes, when there is more than one. Name each document plainly, in the order the client will see them, and say which need a signature and which are only for reading. Leave figures such as a refund or an amount payable in the documents themselves.",
    },
    {
      q: "How many email templates does a practice need?",
      a: "About seven: a tax return to sign, accounts to sign, an engagement letter, a records request, a portal invite, a reminder, and a note for when a request is cancelled and resent. Add a second version only where the wording differs, such as a company and an individual.",
    },
    {
      q: "Can XTK email templates insert the client's name?",
      a: "No. XTK's email templates fill in two links only, the document request link and the client portal invite link. The greeting and any client details are typed in the compose box before sending. Templates apply to document requests and portal invites. Signature requests take a subject and a message typed each time.",
    },
  ],
};
