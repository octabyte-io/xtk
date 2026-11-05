import type { Post } from "../types";

export const post: Post = {
  slug: "email-bounced-document-never-arrived",
  title: "The email bounced: how to know a document never arrived",
  description:
    "Email bounced, or a client document never arrived? Why bounces go missing when a system sends for you, how to catch silent failures, and what to fix first.",
  excerpt:
    "A tax letter, a pack to sign or a request for documents goes out and never lands. If a system sent it for you, the bounce went back to that system, not to you. Here is how to make sure failures reach someone who reads them, how to spot the emails that vanish without a bounce, and what to fix before you send again.",
  date: "2026-10-19",
  readingTime: "8 min read",
  category: "Practice tips",
  topic: "e-signatures",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/email-bounced-document-never-arrived/og.png",
  thumbnail: {
    src: "/images/blog/email-bounced-document-never-arrived/thumb.png",
    alt: "Silence isn't delivery. On a kraft-paper ground, an envelope labelled Tax letter, Sent, is stamped Undeliverable, while the practice's inbox below shows nothing new",
  },
  relatedSlugs: [
    "fix-a-signature-request-after-sending",
    "which-client-contact-gets-which-document",
    "keep-a-record-of-what-you-sent-clients",
  ],
  relatedLinks: [
    { label: "Connect your Gmail or Microsoft mailbox to XTK", href: "/guides/connect-your-email" },
    { label: "Send documents for e-signature from Xero Practice Manager", href: "/guides/send-documents-for-signature" },
  ],
  body: [
    {
      type: "p",
      text: "When an email can't be delivered, the receiving server sends a bounce back to the mailbox it came from. If your practice sent the email from its own mailbox, you see it. If Xero or another system sent it for you, the bounce goes back to that system, and you may never hear about it. Send client documents from a mailbox someone in the practice reads, filter bounces so they stand out, and treat silence on anything with a deadline as a reason to check. When an address bounces, fix it on the client record before you send again.",
    },
    {
      type: "p",
      text: [
        "This article covers why bounces go missing, the failures that never bounce at all, how to catch both, and what to fix before you resend. For signature requests, ",
        { text: "the e-signatures overview", href: "/blog/e-signatures-inside-xpm" },
        " covers the other things that go wrong after you send.",
      ],
    },
    { type: "h2", text: "Why doesn't anyone tell you an email bounced?" },
    {
      type: "p",
      text: "A bounce is just another email. When a server can't deliver a message, because the address doesn't exist or the mailbox is full or blocked, it writes a report and sends it back to the address the message came from. In Gmail it arrives from “Mail Delivery Subsystem” with a subject like “Delivery Status Notification (Failure)”. In Outlook it comes from “Microsoft Outlook” with a subject starting “Undeliverable:”. It goes to the sending mailbox and nowhere else.",
    },
    {
      type: "p",
      text: "That works well when you send from your own mailbox. It works badly when a system sends on your behalf: a tax letter from Xero Tax, a document pack, an invoice. The message goes out through the system's own email service, so the bounce goes back there. Whether you hear about it depends on whether that system passes it on.",
    },
    {
      type: "p",
      text: [
        "Practices say that Xero often doesn't. On 19 October 2026 the idea ",
        {
          text: "NZ Tax Letters – Notification when Tax Letter email fails to send",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/46537603",
        },
        " had 51 votes and was marked Accepted, though Xero's community manager wrote in December 2025 that it is “not currently on the roadmap”. The original post calls the current position “blind faith that all letters are sent”. One practice found out weeks later, when the client missed their tax payment, that the letter had never gone because the client had no email address in Practice Manager. Another lost penalties and interest for a client because Gmail blocked Xero's email. A third commenter describes a client whose address had been blocked from all Xero mail, which only Xero support could see.",
      ],
    },
    {
      type: "p",
      text: [
        "It isn't only tax letters. ",
        {
          text: "NZ Tax – Ability to have bounce back email when email address is invalid",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/45557875",
        },
        " (15 votes) comes from a practice sending “600+ tax emails 4 times per year”, and a commenter there says the same happens with invoices and quotes. ",
        {
          text: "Document Packs – Email notification if email bounced",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/46307467",
        },
        " asks for the same thing for signing packs. Between them, 74 votes, and comments from practices that have paid for it.",
      ],
    },
    { type: "h2", text: "What are the ways an email fails to arrive?" },
    {
      type: "p",
      text: "Not every failure produces a bounce. It helps to know which kind you're dealing with, because each one is found a different way.",
    },
    {
      type: "table",
      head: ["What went wrong", "Is there a bounce?", "How you find out"],
      rows: [
        ["A typo, an old address, a closed mailbox", "Yes, within minutes", "The bounce, if it reaches a mailbox you read"],
        ["The mailbox is full or the server is down", "Usually a delay notice first, then a failure days later", "The same, but late"],
        ["Delivered, but to spam, a quarantine or a filtered folder", "No", "Only by noticing the client hasn't acted"],
        ["Delivered to a mailbox nobody reads", "No", "The same"],
        ["Never sent: no address on the record, or the send failed", "No", "The sending system has to tell you"],
      ],
      caption: "Only the first two produce a bounce. The last three look exactly like a delivered email until a deadline passes.",
    },
    {
      type: "p",
      text: "The bottom three rows are why a bounce filter on its own isn't enough. An email that went to spam was delivered, as far as any server is concerned. The practice in the Xero thread whose client only got tax letters half the time, despite adding Xero to his safe senders, wasn't getting bounces. It was getting silence.",
    },
    { type: "h2", text: "How do you make sure bounces reach someone?" },
    {
      type: "p",
      text: "Start with where the email leaves from, because that's where its bounce comes back to.",
    },
    {
      type: "list",
      items: [
        "Send client documents from a mailbox at your own domain where you can. A tax letter you send yourself from Outlook is more work than one Xero sends in bulk, which is exactly the trade one practice in the thread made: they stopped sending tax letters through Xero and send them from Outlook instead, so they can see what was delivered and read.",
        "If you use a shared mailbox, such as admin@ or tax@, decide who reads it. A bounce that lands in a shared inbox nobody owns is no better than one that goes to Xero.",
        "Make bounces stand out. In Gmail, a filter on “from:mailer-daemon” that applies a label and stars the message. In Outlook, a rule on messages from “Microsoft Outlook” or with “Undeliverable” in the subject that moves them to a folder and flags them. Check that folder every day you send anything with a deadline.",
        "Read the whole bounce, not just the subject. It quotes the address it tried and gives a reason: “address not found”, “mailbox full”, “message rejected”. The first means the address is wrong. The second means it's right but try again later. The third usually means the client's server is filtering you, and the client needs to know.",
      ],
    },
    { type: "h2", text: "How do you spot the emails that never bounce?" },
    {
      type: "p",
      text: "For the silent failures, the only signal is that nothing happens. So decide in advance how long silence can last before someone checks.",
    },
    {
      type: "list",
      items: [
        "Give anything with a deadline a check-by date. A tax payment letter, a return to sign before lodgment, a request for documents you need this week. If the client hasn't opened, signed, uploaded or replied by that date, it's a call, not another email.",
        "Use whatever the sending system tells you. Many signing and request tools show whether a link has been opened. An email that was opened and ignored needs a nudge. One that was never opened may never have arrived.",
        "Phone or text to confirm the address, not to chase. “We emailed your tax letter on Monday to sophie@acmetrading.example. Did it come through?” finds a typo, a spam folder and an address the client stopped using, all in one call.",
        "Ask clients to add your sending address to their contacts when they join, and again when you change how you send. It won't beat every filter, but it helps with personal Gmail and Outlook accounts.",
        "Before a bulk run, look for clients with no email address at all. That's the failure in the Xero thread that cost a client their payment deadline, and it's the easiest to find in advance.",
      ],
    },
    { type: "h2", text: "When an address bounces, what do you fix first?" },
    {
      type: "p",
      text: "Fix the address where it lives, then resend. If you only correct it in the send, the old address is still on the client record, and the next letter, pack or request goes straight back to it.",
    },
    {
      type: "list",
      items: [
        "Confirm the right address with the client, by phone or another channel you know works. A bounce tells you the address is wrong, not what the right one is.",
        [
          "Update the client or contact record in Practice Manager. Check for a second contact or a duplicate client record holding the same old address. Stale duplicates are often where it lives, as our article on ",
          { text: "duplicate client records", href: "/blog/duplicate-client-records-and-their-documents" },
          " explains.",
        ],
        [
          "Update anywhere else the address is stored: a custom field for the signing email, a contact in your document system or client portal. Our article on ",
          { text: "which client contact gets which document", href: "/blog/which-client-contact-gets-which-document" },
          " covers practices that keep several.",
        ],
        [
          "Resend. In many tools, including Xero's document packs, a resend goes to the address the request was first sent to. Changing the address means cancelling the request and sending a new one. Our article on ",
          { text: "fixing a signature request after it's gone", href: "/blog/fix-a-signature-request-after-sending" },
          " walks through it.",
        ],
        "Note what happened on the client record: which email bounced, when, why, and when you resent it. If a late payment is ever disputed, that note is your account of it.",
      ],
    },
    {
      type: "callout",
      title: "Keep the bounce",
      text: [
        "Don't delete a bounce once you've dealt with it. File it with the client's correspondence. With the copy of what you sent in your Sent folder, it shows what you sent, when, to which address and why it didn't arrive. Our article on ",
        { text: "keeping a record of what you sent a client", href: "/blog/keep-a-record-of-what-you-sent-clients" },
        " covers the rest of that record.",
      ],
    },
    { type: "h2", text: "How does XTK handle bounced emails?" },
    {
      type: "p",
      text: [
        "XTK is a browser extension that adds documents, e-signatures, document requests and a client portal to each client in Practice Manager. Every email it sends to a client, whether a signature request, a resent link, a document request or a portal invite, goes out through a Gmail or Microsoft mailbox your practice connects. That's either your own mailbox or the practice's shared one, depending on what you've chosen. As the ",
        { text: "email connection guide", href: "/guides/connect-your-email" },
        " explains, a copy lands in that mailbox's Sent folder and replies come back to it. Bounces do too. Gmail or Microsoft sends them to the mailbox the email left from, the same as anything else you send.",
      ],
    },
    {
      type: "list",
      items: [
        "Know whose mailbox gets them. Emails that belong to a signature request, including resent links and the email to the next signer, always go from the mailbox of the person who created the request, even when a colleague clicks “Resend link”. Document request resends work the same way. So a bounce on one of those comes back to the creator's mailbox, or to the shared mailbox if that's the one they send from.",
        [
          "Watch for “Sent” without “Viewed”. A signature request shows each signer as “Sent” until they open the link, then “Viewed, not signed”, and the request's History records when. A signer still on “Sent” a few days later may never have received it. You can also turn on the “A recipient opens a request” notification, which is off by default. See ",
          { text: "sending documents for signature", href: "/guides/send-documents-for-signature" },
          ".",
        ],
        "Read document requests and portal invites differently. A document request stays “Sent” until the client uploads their first file, with no signal for opening the email. A portal contact stays “Invited” until they accept, and then shows “Active”.",
        "Resend to the same address, or start again for a new one. “Resend link” on a signature request and “Resend email” on a document request both go to the original address. A resent link replaces the old one, and a document request resend doesn't extend its 30-day deadline. To use a corrected address, void the signature request or cancel the document request, update the client's record, and send a new one.",
      ],
    },
    {
      type: "p",
      text: "XTK is $59 USD a month for the whole practice after a 30-day trial, so connecting a mailbox and sending from it costs nothing per email.",
    },
    {
      type: "callout",
      title: "What XTK doesn't do",
      text: "XTK doesn't detect bounces. Once Gmail or Microsoft accepts an email, XTK's part is done, and a bounce that comes back later is a message in your mailbox, not a status in XTK. Nothing on the request changes, and nobody is notified there. XTK does tell you when it couldn't send at all, for example because a mailbox connection expired, with a prompt to reconnect or an “An email fails to send” notification. That is a different failure. And if your practice hasn't connected a mailbox, XTK sends from its own address instead, so bounces go to XTK and never reach you. Connect a mailbox before you send anything that matters.",
    },
    { type: "h2", text: "The short version" },
    {
      type: "list",
      items: [
        "A bounce goes back to the mailbox the email left from. If a system sent it for you, you may never see it.",
        "Send client documents from a mailbox at your own domain, and make sure someone reads it.",
        "Filter bounces into a folder you check every day you send something with a deadline.",
        "Spam, filtered folders and unread inboxes never bounce, so give deadline emails a check-by date and phone when it passes.",
        "Fix a bounced address on the client record before you resend, and look for duplicates that hold the old one.",
        "Keep the bounce with the client's correspondence. It's part of the record of what you sent.",
      ],
    },
    {
      type: "callout",
      title: "Sources and dates",
      text: [
        "Xero Product Ideas, ",
        {
          text: "NZ Tax Letters – Notification when Tax Letter email fails to send",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/46537603",
        },
        " (posted 14 April 2023; 51 votes, Accepted; Xero's update of 4 December 2025), ",
        {
          text: "NZ Tax – Ability to have bounce back email when email address is invalid",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/45557875",
        },
        " (posted 16 August 2022; 15 votes) and ",
        {
          text: "Document Packs – Email notification if email bounced",
          href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/46307467",
        },
        " (posted 16 February 2023; 8 votes), all read on 19 October 2026. Comments there are practitioners' own accounts, not Xero's. Bounce senders and subject lines are Gmail's and Microsoft 365's standard ones and can vary with your mail setup. XTK's behaviour is as of 19 October 2026. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      ],
    },
  ],
  faq: [
    {
      q: "Does Xero tell you when a tax letter or document pack email bounces?",
      a: "Practices on Xero Product Ideas say it often doesn't. The idea asking for a notification when a tax letter fails to send had 51 votes on 19 October 2026, and in December 2025 Xero said it was not currently on the roadmap. For anything with a deadline, don't rely on hearing about a failure: check that the client acted.",
    },
    {
      q: "Where does a bounce go?",
      a: "To the mailbox the email was sent from. If you sent it from your own Gmail or Outlook, it arrives there from “Mail Delivery Subsystem” or “Microsoft Outlook”. If a system sent it on your behalf, the bounce goes to that system's email service, and you only hear about it if the system passes it on.",
    },
    {
      q: "Can an email fail without bouncing?",
      a: "Yes. An email delivered to spam, a quarantine or a mailbox nobody reads counts as delivered, so no bounce is sent. An email that was never sent, because the client had no address on file, doesn't bounce either. The only signal is that the client doesn't act, which is why emails with a deadline need a date by which you check.",
    },
    {
      q: "What should I do when a client's email bounces?",
      a: "Confirm the right address with the client by phone, update it on the client record in Practice Manager and anywhere else it's stored, then send again. If your tool's resend only goes to the original address, cancel the request and send a new one. Keep the bounce with the client's correspondence.",
    },
  ],
};
