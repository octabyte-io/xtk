import type { Post } from "../types";

export const post: Post = {
  slug: "client-portals-clients-actually-use",
  title: "Client portals your clients will actually use",
  seoTitle: "Client portal for accountants: what makes clients use it",
  description:
    "A client portal for accountants only works if clients use it. Why they abandon portals, what to look for in one, how to introduce it and how to measure it.",
  excerpt:
    "Most portals fail at the login screen. The fix isn't more features — it's removing every step between “your accountant needs this” and “done”.",
  date: "2026-05-12",
  updated: "2026-11-05",
  readingTime: "9 min read",
  category: "Practice tips",
  topic: "client-documents",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/client-portals-clients-actually-use/og.png",
  thumbnail: {
    src: "/images/blog/client-portals-clients-actually-use/thumb.png",
    alt: "Two emails from an accountant side by side: a faded, vague “Please upload your records” on a muted grey half, and a crisp “Upload your November bank statements” on a blue half with a checklist showing 3 of 5 received, above the headline “Ask for things, not for visits.”",
  },
  relatedSlugs: [
    "stop-chasing-clients-for-documents",
    "clients-cant-log-in-to-sign",
    "send-documents-to-clients-without-attachments",
    "accounting-client-onboarding-checklist",
  ],
  relatedLinks: [
    { label: "Set up a client portal", href: "/guides/set-up-client-portal" },
    { label: "How to use your accountant's client portal", href: "/guides/client-portal-guide-for-clients" },
    { label: "Request documents from clients", href: "/guides/document-requests" },
  ],
  body: [
    {
      type: "p",
      text: "A client portal for an accounting practice works when every visit is prompted by a specific task, when getting in is easy for someone who visits four times a year, and when the documents in it are the ones the client actually comes looking for. Most portals that fail, fail on those three points rather than on missing features. This article covers why clients stop using portals, which jobs need a portal at all, what to look for when you choose one, how to introduce it, and how to tell whether it is working.",
    },
    { type: "h2", text: "Why clients stop using their accountant's portal" },
    {
      type: "p",
      text: "Ask a practice why they gave up on their last client portal and you will rarely hear about missing features. You will hear that clients would not log in. The documents went back to email within a month, and the portal became a line on an invoice nobody wanted to look at. The reasons are usually some mix of these:",
    },
    {
      type: "list",
      items: [
        "Visits are rare. A client deals with you a handful of times a year. They will not remember a password they created in February, and every recovery email or “verify your device” screen is a reason to reply with a photo of a bank statement instead.",
        "Nothing sends them there. A portal treated as a place clients should check gets checked by nobody. Clients go where an email with a specific task sends them.",
        "It holds what the practice wants to store, not what the client wants to find. A portal full of working papers and internal folder names tells the client nothing. The final accounts, the lodged return and the signed engagement letter are what they come back for.",
        "Email still works. If an attachment sent by reply gets the same result as an upload, the portal is optional, and optional things lose.",
        "The wrong people are invited. The director gets the invite, the bookkeeper who actually has the statements does not, and the login ends up shared or forgotten.",
      ],
    },
    {
      type: "quote",
      text: "A portal isn't a destination. It's a doorway that files things.",
    },
    { type: "h2", text: "Which jobs need a portal, and which only need a link" },
    {
      type: "p",
      text: "Not every exchange with a client should need a login. Signing this year's engagement letter, or uploading the bank statements for one return, is a one-off task. A link in an email, opened once, is enough for that, and asking an occasional signer to create an account first is where many practices lose them.",
    },
    {
      type: "p",
      text: [
        "A portal earns its login when the relationship is ongoing: a client who wants last year's accounts at nine at night, a bookkeeper who uploads every month, a director who needs the lodged return for a bank. So split the two. Send one-off asks as ",
        { text: "an itemised request for documents", href: "/blog/stop-chasing-clients-for-documents" },
        " or a signing link, and keep the portal for the documents both sides return to. The ",
        { text: "sign-in troubleshooting for e-signatures", href: "/blog/clients-cant-log-in-to-sign" },
        " is its own subject, and so is ",
        { text: "sending finished documents without attachments", href: "/blog/send-documents-to-clients-without-attachments" },
        ", where a portal is one of several options.",
      ],
    },
    { type: "h2", text: "Ask for things, not for visits" },
    {
      type: "p",
      text: [
        "When you do send clients to the portal, give them a reason that fits in a subject line. The portal earns its keep when every visit is prompted by ",
        { text: "a specific, concrete request", href: "/guides/document-requests" },
        ":",
      ],
    },
    {
      type: "list",
      items: [
        "“Upload your November bank statements” beats “please upload your records”.",
        "One request with five named items beats five emails with one item each.",
        "A visible checklist (three of five received) lets clients see their progress and lets you stop chasing what has already arrived.",
        "A shared folder named for the client, “Send us these”, beats one named for you, “FY26 Tax (client provided)”.",
      ],
    },
    { type: "h2", text: "What to look for in a client portal" },
    {
      type: "p",
      text: "Most portal comparisons are feature lists. The questions below are about whether clients will get in and keep coming back, and whether your team will trust what they find there. Ask each vendor, and then try it yourself from a personal email address on your own phone.",
    },
    {
      type: "table",
      head: ["Question to ask", "Why it matters"],
      rows: [
        [
          "How does a client get in the first time, and the fifth time?",
          "First access is usually smooth. The fifth visit, months later, is where forgotten passwords and resets that land on the wrong page cost you.",
        ],
        [
          "Does one login cover several businesses?",
          "A client with a company, a trust and a personal return should not need three accounts with three passwords.",
        ],
        [
          "Does it work on a phone?",
          "Clients photograph receipts and download statements on their phones. If uploading from a phone is awkward, they will email the photo.",
        ],
        [
          "Where do uploaded files end up?",
          "Files that land straight in the client's folder are filed. Files that land in an inbox inside the portal still need someone to move them.",
        ],
        [
          "Who holds the files?",
          [
            "Your own storage, or the vendor's? That decides what ",
            { text: "leaving the system one day costs", href: "/blog/what-leaving-a-document-system-costs" },
            ".",
          ],
        ],
        [
          "Can each person have their own access?",
          "When a director leaves or a bookkeeper changes, you want to remove one person without deleting their uploads or disturbing anyone else.",
        ],
        [
          "Are requests and signatures in the same place?",
          "A client who uploads in one tool and signs in another has two sets of instructions to forget.",
        ],
        [
          "Whose name is on the emails?",
          "Clients open mail from their accountant. Mail from a software brand they have never heard of looks like phishing.",
        ],
        [
          "What does your team see?",
          "Who has accepted, who has uploaded, and what is still outstanding, without opening every client.",
        ],
        [
          "How is it priced?",
          "Check whether client logins count as seats. A per-client charge changes which clients you invite.",
        ],
      ],
      caption: "Ten questions about adoption rather than features. Answer them from your own test account, not only from the sales demo.",
    },
    { type: "h2", text: "How to introduce a portal so clients use it" },
    {
      type: "p",
      text: "The invitation email is the worst place to explain a portal, because it arrives looking like every other account invitation. Do the explaining before it arrives.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Start small. One group of clients, one season. New clients are the easiest, because the portal is simply how you work, rather than a change to how you used to work.",
        "Tell them it is coming. A short note from a person they know: what the portal is for, what it is not for (“we'll still email you about everything else”), which address the invite will come to, and how long the link lasts.",
        [
          "Invite the right people, each with their own login. The person who has the statements is often not the person on the engagement letter. Deciding ",
          { text: "which contact gets which document", href: "/blog/which-client-contact-gets-which-document" },
          " before you invite saves a shared password later.",
        ],
        "Put something in it they want. The signed engagement letter and last year's accounts give a reason to come back that has nothing to do with your requests.",
        "Give a name and a number. “If the link won't open, call Sam on 03 9555 1000” turns a stuck client into a two-minute call.",
        "Decide what happens to attachments. If you accept emailed documents without comment, you have kept email as the main route. You do not need to refuse them; file them, and point to the portal next time.",
      ],
    },
    {
      type: "p",
      text: [
        "If you are bringing on new clients anyway, the portal invitation fits naturally into ",
        { text: "the client onboarding checklist", href: "/blog/accounting-client-onboarding-checklist" },
        ", straight after the engagement letter is signed.",
      ],
    },
    { type: "h2", text: "How to measure whether clients are using it" },
    {
      type: "p",
      text: "Pick a few numbers before you launch, so the decision to keep or drop the portal after a season is not made on a feeling. None of them need special software, only a note of where you started.",
    },
    {
      type: "list",
      items: [
        "Acceptance: of the people you invited, how many have signed in within two weeks? Low acceptance points at the invite (the wording, the address, or the timing), not at the clients.",
        "Route: in one busy month, how many documents arrived through the portal or a request, and how many by email? This is the number that shows whether email is still the real system.",
        "Time to complete: the median days from a request being sent to it being complete. Compare it with last season.",
        "Calls about logging in: count them for a month. Each one is a step you could remove or explain in advance.",
      ],
    },
    {
      type: "callout",
      title: "One metric to watch",
      text: "Track the median time-to-complete on your document requests across one season. If it falls, clients have accepted the portal. If it doesn't, the friction is still winning, so look at the request wording and the sign-in steps before you blame the clients.",
    },
    { type: "h2", text: "How XTK's client portal works" },
    {
      type: "p",
      text: [
        "XTK is a browser extension that adds a client portal, documents, e-signatures and document requests to each client in Xero Practice Manager (XPM). You ",
        { text: "switch the portal on per client", href: "/guides/set-up-client-portal" },
        " from the “Client Portal” tab inside XPM, invite each person by email, and share folders or files from the client's Documents tab. Nothing is copied: the files stay in your practice's own Google Drive, OneDrive or SharePoint, and a share is only a marker that makes them visible to the client.",
      ],
    },
    {
      type: "list",
      items: [
        "Getting in: each invited person sets a password from their invitation link, which works once and lasts 30 days. One login covers every business they are invited to, across practices, with a switcher in the top bar. A forgotten password is reset from the portal's sign-in page.",
        "Uploads: a shared folder is read-write, so clients can upload into it from a laptop or a phone, and the files land in that client's folder in your storage. A shared file is read-only. Clients need at least one shared folder before they can upload anything.",
        "One-off asks need no account: document requests and signature requests reach the client by an emailed link, with no password. When the recipient is also an active portal member, the same requests also appear in their portal under “Document requests” and “Signatures”.",
        "Access per person: each contact can be disabled or removed on their own, and a client's uploads are never deleted when you do.",
        [
          "What you see: the roster shows each contact as Invited or Active, which is your acceptance number, and ",
          { text: "notifications", href: "/guides/notifications" },
          " tell you when someone accepts and when they upload.",
        ],
        "Cost: portal members do not count against your practice's users or your bill.",
      ],
    },
    {
      type: "callout",
      title: "Check one thing before you enable it",
      text: "Clicking “Enable client portal” immediately emails an invitation to the client's primary email address in XPM, with no preview. Check that address first. And invitations go by email only: there is no link to copy and send yourself, and XTK sends no automatic reminders.",
    },
    {
      type: "p",
      text: [
        "The step-by-step set-up, including sharing and the roster, is in ",
        { text: "the guide to setting up the portal", href: "/guides/set-up-client-portal" },
        ". When a client asks what to do with the invitation, send them ",
        { text: "the client's guide to the portal", href: "/guides/client-portal-guide-for-clients" },
        ", which is written for them.",
      ],
    },
    {
      type: "callout",
      title: "XTK and Xero",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited. Product behaviour described here was correct as of November 2026.",
    },
  ],
};
