import type { Post } from "../types";

export const post: Post = {
  slug: "keep-a-record-of-what-you-sent-clients",
  title: "Keeping a record of what you sent a client: the message, the documents and the proof",
  seoTitle: "How to keep a record of what you sent a client",
  description:
    "How to keep a record of what you sent a client: the message, the documents as they went and the proof of delivery, and where each should be kept.",
  excerpt:
    "The message you typed when you sent a client documents to sign is often the one thing nobody can find later. Here is what a record of a send is made of, where each part should live, and how to set it up before the next send.",
  date: "2026-10-07",
  readingTime: "10 min read",
  category: "Practice tips",
  topic: "e-signatures",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/keep-a-record-of-what-you-sent-clients/og.png",
  thumbnail: {
    src: "/images/blog/keep-a-record-of-what-you-sent-clients/thumb.png",
    alt: "What did we tell them? On a manila ground, a sent email marked Sent, copy kept, with its payment instruction highlighted and the tax return attached",
  },
  relatedSlugs: [
    "covering-email-for-client-documents",
    "fix-a-signature-request-after-sending",
    "send-documents-to-clients-without-attachments",
  ],
  relatedLinks: [
    { label: "Connect Gmail or Outlook so XTK can send email for you", href: "/guides/connect-your-email" },
    { label: "Send documents for e-signature in Xero Practice Manager", href: "/guides/send-documents-for-signature" },
  ],
  body: [
    {
      type: "p",
      text: "A record of something you sent a client has three parts: the message you wrote, the documents exactly as they went, and the facts of delivery (who it went to, when, and whether it was opened or signed). They usually end up in three different places, and the message is the part most often lost. Decide where each part lives before the next send. Then, when a client rings to ask what you told them, the answer is one search away.",
    },
    {
      type: "p",
      text: [
        "This article covers why the message goes missing with Xero document packs and Xero Sign, what each part of the record is for, where to keep it, and what to do so the record doesn't leave with a member of staff. How the send fits into the whole signing process is in ",
        { text: "our e-signatures overview", href: "/blog/e-signatures-inside-xpm" },
        ".",
      ],
    },
    { type: "h2", text: "Why can't we see what we sent with a document pack?" },
    {
      type: "p",
      text: [
        "Because the email a document pack or Xero Sign request sends goes out from Xero, and practices report that no copy comes back to them. The Xero Product Ideas idea ",
        {
          text: "Xero Sign – Send copy to self",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/45088205",
        },
        " has asked for one since April 2022. It had 80 votes when we read it on 7 October 2026, is marked Submitted, and its latest comment is from January 2026. A second idea, ",
        {
          text: "Document Packs – Send me a copy of the email",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/46366477",
        },
        ", had 49 votes the same day and is also Submitted. A third, ",
        {
          text: "Document packs – Record of messages sent",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/45728371",
        },
        ", had 11.",
      ],
    },
    {
      type: "p",
      text: "The reasons in the comments are practical. A client rings with a question and the person taking the call can't see what the client is looking at. A client disputes an instruction, such as a payment date, that was written in the message and nowhere else. A firm that edits the wording for each client has no trail of the edits. One commenter says their practice doesn't use document packs at all for this reason. Several call keeping a copy of client correspondence a professional requirement.",
    },
    {
      type: "p",
      text: [
        "Xero's own help doesn't fill the gap. Its Xero Central article ",
        {
          text: "Request an e-signature for a return form",
          href: "https://central.xero.com/s/article/Request-an-e-signature-for-a-tax-form",
        },
        " says you can edit the message text before sending, and that when the return is signed the tax agent gets an email confirmation and a time-stamped note is added to the return's history. It doesn't mention keeping a copy of the message you sent.",
      ],
    },
    {
      type: "p",
      text: "The workaround commenters describe is to copy the email text and paste it into a note on the client in Xero Practice Manager before sending. It works when somebody remembers. The rest of this article is about not having to remember.",
    },
    { type: "h2", text: "What makes up the record of a send?" },
    {
      type: "p",
      text: "Treat every send as three separate things, because each one answers a different question and each one is kept somewhere different.",
    },
    {
      type: "table",
      head: ["Part", "Answers", "Usually lives in"],
      rows: [
        ["The message", "What did we tell them?", "A mailbox, if anywhere"],
        ["The documents as sent", "What exactly did they get?", "The client's folder"],
        ["Delivery facts", "Who, when, opened, signed?", "The sending tool's log"],
      ],
      caption: "Three parts, three places. The first is the one that goes missing.",
    },
    {
      type: "p",
      text: "Most practices have the second part covered, because the documents are filed anyway. The third part usually exists in the e-signing tool's history. The first part is the one that depends entirely on how the email was sent.",
    },
    { type: "h2", text: "Where should the message be kept?" },
    {
      type: "p",
      text: "In a mailbox the whole practice can search, and in the client's folder when the message is one you might need to rely on.",
    },
    {
      type: "p",
      text: "The simplest arrangement is for client email to go out from a shared practice mailbox, such as info@ or admin@, rather than from each person's own. Every message then lands in one Sent folder, which anyone with access can search by client name or email address. That only works if the sending tool really sends through your mailbox. A tool that sends from its own address leaves nothing in your Sent folder at all, which is exactly the document pack complaint.",
    },
    {
      type: "p",
      text: "Where you can't send from your own mailbox, the next best thing is a copy to an address the practice controls. Some tools offer a CC or BCC field. If yours doesn't, the copy has to be made by hand, and the note in Practice Manager is the usual place for it. If you do that, paste the whole message, not a summary, and add the date, the address it went to and the name of the person who sent it.",
    },
    {
      type: "p",
      text: "For the sends that carry an instruction, save the sent email into the client's folder as a PDF as well. Gmail and Outlook can both print a message to PDF. That puts the message next to the document it carried, so nobody has to go looking in a mailbox for it. It also makes the message part of the client file, so it goes wherever the file goes, including to the next accountant if the client leaves.",
    },
    { type: "h2", text: "Which sends need a copy in the client's folder?" },
    {
      type: "p",
      text: "Not every email does. A Sent folder is enough for routine notices. Save a PDF to the client's folder when the message itself says something the client might act on or dispute.",
    },
    {
      type: "list",
      items: [
        "An amount or a date: “pay $4,312 by 21 November”, “sign by Friday so we can lodge”.",
        "A condition or an instruction: “we have lodged on the basis that the rental was available all year”.",
        "Anything you wrote differently for this client from your standard wording.",
        "An engagement letter or a change to terms, along with the version of the letter that went out.",
        "A request for records that sets a deadline you may later need to point to.",
      ],
    },
    {
      type: "p",
      text: [
        "If the same instruction goes out in the same words every time, it is already recorded in your standard wording. The ",
        { text: "covering email", href: "/blog/covering-email-for-client-documents" },
        " article suggests keeping a small set of standard wordings in one shared place. That set doubles as the record of what clients were told, as long as you keep old versions when you change it.",
      ],
    },
    { type: "h2", text: "The documents exactly as they went" },
    {
      type: "p",
      text: "The documents part is mostly a filing habit. The rule is that the file in the client's folder must be the one that was sent, not a later edit of it.",
    },
    {
      type: "list",
      items: [
        "Send from the copy in the client's folder, not from a download or a desktop copy.",
        "Once a document has gone out, don't edit that file. If it needs changing, save a new version with a new name and send that.",
        [
          "Put the date and version in the file name. Our article on ",
          { text: "naming client files", href: "/blog/how-to-name-client-files" },
          " suggests a pattern.",
        ],
        "Keep the signed copy as well as the one you sent. They are two records: what you asked the client to sign, and what came back.",
      ],
    },
    {
      type: "p",
      text: [
        "Sending a link instead of an attachment helps here too. When the email only points to the file, there is one copy to keep track of, not one in your folder and another in the client's inbox. Our article on ",
        { text: "sending documents without attachments", href: "/blog/send-documents-to-clients-without-attachments" },
        " covers the trade-offs.",
      ],
    },
    { type: "h2", text: "Delivery facts: sent, opened, signed" },
    {
      type: "p",
      text: "E-signing tools keep a history for each request: when it was sent, when each signer opened it, when they signed, and whether it was cancelled. That history is the proof that a client received something, and it is usually more reliable than an email read receipt.",
    },
    {
      type: "p",
      text: "Two cautions. First, “opened” means the signing link was opened, not that the client read every page. Some email security filters open links on arrival to scan them, so an early open may be a machine. Second, the history lives in the tool. If you might need it after you stop using the tool, the certificate or audit page that comes with the signed PDF is the copy to keep, because it travels with the document.",
    },
    { type: "h2", text: "When the person who sent it leaves" },
    {
      type: "p",
      text: "A Sent folder in one person's mailbox is a record only while that mailbox exists. When the person leaves and their account is deleted, their Sent folder goes with it, unless someone exports it or transfers it first. That is the strongest reason to send client email from a shared practice mailbox.",
    },
    {
      type: "list",
      items: [
        "Send client email from the practice mailbox by default, and let people send from their own only where there's a reason.",
        "Make exporting or transferring the mailbox part of every leaver's checklist, alongside their files.",
        "Copies saved into client folders don't depend on anyone's mailbox, which is another reason to save the ones that matter.",
      ],
    },
    { type: "h2", text: "How does XTK keep a record of what you sent?" },
    {
      type: "p",
      text: [
        "XTK is a browser extension that adds a Documents tab to each client in Practice Manager, where you send documents for signature, request records and invite clients to a portal. Every email it sends goes through a Gmail or Microsoft 365 mailbox ",
        { text: "you connect", href: "/guides/connect-your-email" },
        ", and that mailbox keeps a copy in its Sent folder (Sent Items in Outlook).",
      ],
    },
    {
      type: "list",
      items: [
        "Your practice Admin can connect one shared “Practice account”, which becomes the sender for the whole team. Anyone can also connect their own mailbox and choose to send from it instead. XTK's access is send-only. It can't read your mailbox.",
        "Signature invites, resent links, invites to later signers, and cancellation and decline notices all go through that mailbox, so each one lands in its Sent folder with your message in it.",
        [
          "When the last signer finishes, the completion email goes to every signer with the signed PDF and its Certificate of Completion attached, and opens with the same message you wrote when you sent the request. So the Sent folder holds the message and the signed copy together. The ",
          { text: "signed PDF", href: "/guides/send-documents-for-signature" },
          " is also filed beside the original in the client's folder, and the original isn't changed.",
        ],
        "Document requests and portal invites have a CC field, so you can copy in a colleague or a filing address as well.",
        "Each signature request has a History list: Created, Sent, Link resent, Viewed, Signed, Declined, Completed and Voided, each with its date and time, and the signer's email address where a signer did it. Viewed is recorded the first time each signer opens their link.",
      ],
    },
    {
      type: "callout",
      title: "What XTK doesn't do",
      text: "XTK doesn't show your message again after you send it. A signature request's details show its title, signers and history, not the message, and a document request's details show its items, not the email. The Sent folder is where the message is kept. Signature requests have no CC or BCC field. With no mailbox connected, XTK sends from its own address and no copy is kept anywhere you can open, so connect one. If someone sends from their own mailbox, the copies are in that person's Sent folder and leave with them, so prefer the Practice account. Every email on a signature request goes from the mailbox of the person who created it, except the cancellation notice, which goes from whoever voided it. Nothing is written into Practice Manager's notes, and XTK doesn't save emails into the client's folder. History times are shown in UTC.",
    },
    {
      type: "p",
      text: [
        "In practice: connect the Practice account, make it everyone's sender, and save the emails that carry an instruction into the client's folder as a PDF. If a request goes out wrong, our article on ",
        { text: "fixing a sent signature request", href: "/blog/fix-a-signature-request-after-sending" },
        " covers resending and voiding.",
      ],
    },
    { type: "h2", text: "The short version" },
    {
      type: "list",
      items: [
        "A record of a send has three parts: the message, the documents as sent, and the delivery facts.",
        "Send client email from a shared practice mailbox, so every message lands in one searchable Sent folder.",
        "If your tool sends from its own address, copy the whole message into a note before sending, with the date, address and sender.",
        "Save any email that gives an amount, a date or an instruction into the client's folder as a PDF.",
        "Never edit a document after it has gone out. Save a new version instead.",
        "Keep the signing certificate with the signed PDF. The tool's history stays behind in the tool.",
        "Make the leaver's mailbox part of the leaver's checklist.",
      ],
    },
    {
      type: "callout",
      title: "Sources and dates",
      text: [
        "Xero Product Ideas, ",
        {
          text: "Xero Sign – Send copy to self",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/45088205",
        },
        " (posted 28 April 2022; 80 votes, Submitted), ",
        {
          text: "Document Packs – Send me a copy of the email",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/46366477",
        },
        " (posted 2 March 2023; 49 votes, Submitted) and ",
        {
          text: "Document packs – Record of messages sent",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/45728371",
        },
        " (posted 23 September 2022; 11 votes, Submitted), all read on 7 October 2026. Comments there are practitioners' own accounts, not Xero's. Xero Central, ",
        {
          text: "Request an e-signature for a return form",
          href: "https://central.xero.com/s/article/Request-an-e-signature-for-a-tax-form",
        },
        ", read the same day. XTK's behaviour is as of 7 October 2026. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      ],
    },
  ],
  faq: [
    {
      q: "Can I get a copy of the email a Xero document pack sends?",
      a: "Practices report that they can't. The idea asking Xero for a copy of the document pack email (Document Packs – Send me a copy of the email) had 49 votes on 7 October 2026 and is marked Submitted, and a similar Xero Sign idea had 80. The usual workaround is to paste the message into a Practice Manager note before sending.",
    },
    {
      q: "What should an accounting practice keep as a record of a document it sent?",
      a: "Three things: the message, the documents exactly as they were sent, and the delivery facts (recipient, date, opened, signed). Keep the message in a shared mailbox's Sent folder, the documents unedited in the client's folder, and the signing certificate with the signed PDF.",
    },
    {
      q: "Should client emails go out from a shared mailbox or each person's own?",
      a: "A shared practice mailbox, for anything the practice may need to refer back to. Every message then lands in one Sent folder the team can search, and the record doesn't disappear when a member of staff leaves and their account is deleted.",
    },
    {
      q: "Does “viewed” in an e-signature history mean the client read the document?",
      a: "No. It means the signing link was opened. Some email security filters open links automatically to scan them, so an open soon after sending may not be the client. A signature is the reliable sign that the client went through the document.",
    },
  ],
};
