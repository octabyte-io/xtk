import type { Guide } from "../types";

export const guide: Guide = {
  slug: "connect-your-email",
  title: "Connect Gmail or Outlook so XTK can send email for you",
  description:
    "Connect a Gmail or Microsoft mailbox to XTK and send portal invites, document requests and signature emails from your own address in Xero Practice Manager.",
  series: "Getting started",
  order: 3,
  date: "2026-07-27",
  updated: "2026-07-27",
  readingTime: "5 min read",
  ogImage: "/images/guides/connect-your-email/og.png",
  thumbnail: {
    src: "/images/guides/connect-your-email/thumb.png",
    alt: "The XTK Email Templates tab in Xero Practice Manager with the Send my mail from section showing a connected Practice account",
  },
  relatedSlugs: [
    "email-templates",
    "document-requests",
    "set-up-client-portal",
    "getting-started-with-xtk",
    "invite-your-team",
  ],
  relatedLinks: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Sub-processors", href: "/legal/subprocessors" },
  ],
  faq: [
    {
      q: "Can XTK read my email?",
      a: "No. XTK asks Google or Microsoft for send-only permission — the Gmail “send” scope or Microsoft's Mail.Send. It can send messages from your address when you use an XTK feature that sends email, and nothing else: it cannot read, search or delete anything in your mailbox.",
    },
    {
      q: "Do emails sent by XTK appear in my Sent folder?",
      a: "Yes. Mail sent through a connected Gmail account lands in that account's Sent folder, and mail sent through a connected Microsoft account lands in its Sent Items — so you always have your own copy of what went to the client.",
    },
    {
      q: "What happens if we don't connect any mailbox?",
      a: "Everything still works. Portal invites, document requests and signature emails send from XTK's own shared address instead, and the Email Templates tab shows a “Sending from a shared address” notice. Connect a mailbox whenever you're ready and your mail switches to your own name.",
    },
    {
      q: "Can I pick a different sender for each email?",
      a: "No — there is no per-message sender picker. Each person has one saved choice under “Send my mail from”: the Practice account or their own connected mailbox. Change it any time in the XTK panel's Email Templates tab.",
    },
    {
      q: "Can we connect both Gmail and Microsoft?",
      a: "Each slot holds exactly one mailbox — the Practice account is either a Gmail or a Microsoft account, and so is each person's own connection. To switch providers, disconnect and reconnect. The two slots are independent, though: a practice can happily pair a shared Gmail with your personal Outlook.",
    },
  ],
  body: [
    {
      type: "p",
      text: [
        "XTK sends real email on your behalf — ",
        { text: "client portal invites", href: "/guides/set-up-client-portal" },
        ", ",
        { text: "document requests", href: "/guides/document-requests" },
        " and ",
        { text: "e-signature emails", href: "/guides/send-documents-for-signature" },
        ". Connect a Gmail or Microsoft (Outlook) mailbox and those messages go out from your practice's own address rather than a generic one, replies come straight back to you, and every message lands in your own Sent folder. Connecting takes a couple of minutes in the XTK panel inside Xero Practice Manager (XPM).",
      ],
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: "Anyone can connect their own mailbox, but only the practice Admin can connect the shared Practice account. You'll need the sign-in details for the mailbox you're connecting. Nothing else has to be set up first — email works independently of document storage. New to XTK? Start with the getting-started guide.",
    },
    { type: "h2", text: "What does XTK send email for?" },
    {
      type: "list",
      items: [
        "Client portal invites — the email that gives a client access to their portal.",
        "Document requests — the checklist link a client uses to send you records.",
        "E-signature emails — signing invitations, and the completion email with the signed PDF attached.",
      ],
    },
    {
      type: "p",
      text: [
        "Two kinds of mailbox can do that sending. The Practice account is one shared mailbox — say info@yourpractice.com — that ",
        { text: "the Admin", href: "/guides/invite-your-team" },
        " connects once; it's the default sender for the whole team. Your own account is personal: anyone can connect their own Gmail or Microsoft mailbox and have their mail go out under their own name instead. You can use either, or both.",
      ],
    },
    { type: "h2", text: "Connect the Practice account (Admin only)" },
    {
      type: "steps",
      steps: [
        {
          title: "Open the XTK panel",
          text: "In Practice Manager, click the XTK launcher — the last item in the main navigation.",
        },
        {
          title: "Go to Email Templates",
          text: "Click the “Email Templates” tab. Below the templates list you'll find the “Send my mail from” section with two rows: “Practice account” and “Your own account”.",
        },
        {
          title: "Connect the shared mailbox",
          text: "On the “Practice account” row, click “Connect Gmail” or “Connect Microsoft”, whichever matches the mailbox your practice sends from.",
          image: {
            src: "/images/guides/connect-your-email/01-send-my-mail-from.png",
            alt: "The Send my mail from section in XTK's Email Templates tab, with a connected Practice account and Connect Gmail and Connect Microsoft buttons to send email from Xero Practice Manager",
            width: 1456,
            height: 822,
          },
        },
        {
          title: "Approve send-only access",
          text: "Your browser opens the Google or Microsoft consent screen. Sign in with the shared mailbox and approve. You're returned to XTK, and the row now shows the connected address, the date, and a “Sending from this” tag.",
        },
      ],
    },
    {
      type: "p",
      text: "From this moment every team member's mail sends from the shared address automatically — nobody else has to do anything. Members see the Practice account row read-only, marked “Managed by your Practice Admin.”",
    },
    {
      type: "callout",
      title: "XTK can send, never read",
      text: "XTK asks for send-only permission — the Gmail “send” scope on Google, Mail.Send on Microsoft. It cannot read, search or delete anything in the mailbox. And it only sends when you use an XTK feature that sends email; there's no background mail.",
    },
    { type: "h2", text: "Connect your own mailbox" },
    {
      type: "steps",
      steps: [
        {
          title: "Open the same section",
          text: "XTK panel → “Email Templates” → “Send my mail from”. This works for every team member, not just the Admin.",
        },
        {
          title: "Connect on the “Your own account” row",
          text: "Click “Connect Gmail” or “Connect Microsoft”, sign in with your personal work mailbox and approve.",
        },
        {
          title: "You're now the sender",
          text: "Connecting your own mailbox automatically switches your sending to it — your row gains the “Sending from this” tag. Mail you send through XTK now goes out under your own name.",
        },
      ],
    },
    { type: "h2", text: "Choose which address your mail sends from" },
    {
      type: "p",
      text: "Once your own mailbox is connected, the two rows under “Send my mail from” become a picker — click a row to make it your sender, and the “Sending from this” tag moves with your choice. It's a personal setting: your colleagues' choices are their own, and anyone who hasn't connected a personal mailbox simply sends from the Practice account. There is no per-message sender picker — you choose once here, and every portal invite, document request and signature email you send follows it.",
    },
    { type: "h2", text: "What your clients see" },
    {
      type: "p",
      text: "Whatever mailbox does the sending, XTK dresses the message in the same tidy, practice-branded email layout — your clients get a consistent look whether the invite came from the shared address or a colleague's own. And because the mail genuinely goes through Gmail or Microsoft, a copy sits in that mailbox's Sent folder and replies come back to the real address.",
    },
    { type: "h2", text: "Nothing connected? Mail still sends" },
    {
      type: "p",
      text: [
        "You don't have to connect a mailbox to use XTK. With nothing connected, portal invites, document requests and signature emails send from XTK's own shared address, and the ",
        { text: "Email Templates", href: "/guides/email-templates" },
        " tab shows a “Sending from a shared address” notice with the exact address your clients will see. It's a perfectly good fallback — but clients recognise your own name more readily, so connecting a mailbox is worth the two minutes.",
      ],
    },
    {
      type: "p",
      text: "One exception goes the other way: messages you send to XTK's support team from the Help & Support tab always travel via XTK's own address, never through your mailbox.",
    },
    { type: "h2", text: "Disconnect a mailbox" },
    {
      type: "p",
      text: "Both rows have a “Disconnect” action next to their connected address. Disconnecting your own mailbox flips your sending back to the Practice account. Disconnecting the Practice account (Admin only) leaves colleagues without a personal connection sending from the XTK address until it's reconnected — XTK spells out the consequence and asks you to confirm first.",
    },
    {
      type: "image",
      src: "/images/guides/connect-your-email/02-disconnect-practice-confirm.png",
      alt: "XTK's confirmation dialog when disconnecting the Practice account mailbox, warning that the team can only send from their own connected mailboxes until it is reconnected",
      caption:
        "Disconnecting asks for confirmation and explains exactly what changes.",
      width: 1456,
      height: 822,
    },
    {
      type: "callout",
      title: "Microsoft 365 said no?",
      text: "Some Microsoft 365 organisations block new apps until IT approves them. If the consent screen refuses with a message about needing admin approval, ask your IT admin to approve XTK, then try connecting again. Personal Outlook.com accounts connect without any of that.",
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: "With a mailbox connected, the features that use it are ready: write reusable email templates for invites and requests, ask clients for records with a document request, or set up a client portal — all covered in the related guides below.",
    },
  ],
};
