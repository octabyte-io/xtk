import type { Post } from "../types";

export const post: Post = {
  slug: "icaew-engagement-letter-update-2026",
  title: "Issued is not agreed: the 2026 engagement letter refresh",
  seoTitle: "ICAEW engagement letter update 2026: what changed",
  description:
    "ICAEW's March 2026 engagement letter update adds MTD and ACSP schedules and AI terms. What changed, whether to reissue, and proving which version was agreed.",
  excerpt:
    "ICAEW revised its engagement letter templates in March 2026 — new schedules for MTD and for acting as an ACSP, and Terms of Business that now refer to AI. Updating your letter is the easy half. Proving which version each client agreed to is a filing decision you make at the moment you send.",
  date: "2026-09-02",
  readingTime: "14 min read",
  category: "Practice tips",
  topic: "e-signatures",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/icaew-engagement-letter-update-2026/og.png",
  thumbnail: {
    src: "/images/blog/icaew-engagement-letter-update-2026/thumb.png",
    alt: "A signature scribbled on a ruled line, labelled signed, dated and filed — and a question mark over three dashed arrows forking from it towards three candidate terms of business, May 2022, May 2023 and March 2026, with none of them marked as the version that was agreed",
  },
  relatedSlugs: [
    "esignature-legality-for-accountants",
    "companies-house-identity-verification-records",
  ],
  relatedLinks: [
    { label: "Document templates", href: "/guides/document-templates" },
    { label: "Placeholder reference", href: "/guides/placeholder-reference" },
    { label: "Send documents for signature", href: "/guides/send-documents-for-signature" },
    { label: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
  ],
  body: [
    {
      type: "p",
      text: [
        "ICAEW revised its ",
        {
          text: "engagement letters helpsheet",
          href: "https://www.icaew.com/technical/tas-helpsheets/practice/engagement-letters",
        },
        " in March 2026. The page carries three change summaries — May 2022, May 2023 and March 2026 — so a practice still working from 2023-era letters is a full revision behind. What arrived: schedules for Making Tax Digital for Income Tax and for acting as an Authorised Corporate Service Provider, a new agreed-upon-procedures schedule, and Terms of Business that now refer to the use of artificial intelligence.",
      ],
    },
    {
      type: "p",
      text: "Redrafting is the easy half, and every proposal tool on the market will do it for you. The half this article is about is harder and almost nothing has been written on it: in three years' time, when you need to rely on your own contract, can you show which version of the terms this particular client agreed to, and when? That is not a drafting question. It is a filing question, it is answered at the moment you send, and it cannot be retrofitted.",
    },
    {
      type: "p",
      text: [
        "This is UK-scoped, because ICAEW's templates are. Nothing below requires you to install anything. If you send letters for e-signature, ",
        { text: "how e-signatures work for accountants", href: "/blog/e-signatures-inside-xpm" },
        " is covered separately.",
      ],
    },
    { type: "h2", text: "What changed in the March 2026 engagement letter update?" },
    {
      type: "p",
      text: [
        "Four things, and three of them are regulatory catch-up rather than housekeeping. ICAEW's ",
        {
          text: "practice-news summary",
          href: "https://www.icaew.com/technical/practice-resources/practice-news/engagement-letter-updates",
        },
        " describes the revisions as reflecting recent regulatory, operational and technological developments.",
      ],
    },
    {
      type: "p",
      text: "In Part 2, the schedules of services, the additions published by name are a personal tax schedule for individuals, sole traders and couples in MTD for Income Tax (schedule E-B); three covering work as an Authorised Corporate Service Provider — one with identity verification services, one without, and a guidance note (U A, U B and U GN); and a schedule for agreed-upon procedures (T). Part 3 carries limitation-of-liability and alternative data-protection wording. Part 4, the Terms of Business, now refers to the use of AI, and \"Artificial Intelligence\" is a listed topic in the separate related-guidance download.",
    },
    {
      type: "p",
      text: "The fourth change is the one nobody mentions, because it is a deletion. The published list of Part 2 schedules now reads, at position P, \"Schedule removed\". If your engagement letter incorporates schedules by reference — and the ICAEW structure invites exactly that, a letter plus schedules plus terms of business — then a letter you have not touched since 2023 can now point at a schedule that no longer exists. An engagement letter is not a signed-once artefact. It is a document that rots quietly while you are not looking at it.",
    },
    {
      type: "callout",
      title: "Best practice, not a standard",
      text: "ICAEW is explicit that the helpsheet \"provides best practice guidance\" and \"does not constitute a professional standard\". Nothing in the update compels a particular form of words. What it does is move the baseline that a court, a professional-conduct panel or your PII insurer would treat as reasonable.",
    },
    { type: "h2", text: "Do you have to reissue engagement letters to existing clients?" },
    {
      type: "p",
      text: "Not automatically, and not all of them — but ICAEW's position is that firms should not assume engagement terms stay valid indefinitely. Its guidance is to review letters regularly, ideally annually or whenever the scope of work changes, and it names three developments that should prompt an update to the agreed terms: new regulatory requirements, the introduction of additional services, and — this is the new one — the adoption of new digital tools.",
    },
    {
      type: "p",
      text: "That third trigger is worth sitting with, because it converts a software decision into a client-contract event. Historically a practice changed its document system, its tax software or its portal without telling anyone outside the building. On ICAEW's 2026 reading, if that change alters who processes client data or how the work gets done, it belongs in the terms.",
    },
    {
      type: "p",
      text: "In practice the March 2026 update sorts your client base into three groups, and the distinction matters because the evidence you need differs for each.",
    },
    {
      type: "table",
      head: ["What happened", "What to issue", "Evidence to keep"],
      rows: [
        [
          "New service added — MTD filing, ACSP identity verification",
          "New letter with the relevant schedule",
          "Signed letter, dated terms, date sent",
        ],
        [
          "Terms of business updated only",
          "Reissued terms, client acknowledgement",
          "Dated terms plus proof of issue and receipt",
        ],
        [
          "Client entity changed — incorporation, new partnership",
          "New letter to the new entity",
          "Signed letter, plus the old entity's closed file",
        ],
        [
          "Scope and terms both unchanged",
          "Nothing",
          "The existing signed letter, still findable",
        ],
      ],
      caption:
        "How the March 2026 revision sorts an existing client base. Which row a client sits in is a judgement for the firm; the third column is the same discipline in every case.",
    },
    {
      type: "p",
      text: "The fourth row is not a free pass. \"Nothing to do\" still assumes you can produce the existing signed letter, with its terms, on request. For a lot of practices that assumption is the actual weak point — the letter was signed in 2021, by a partner who has retired, using an e-sign tool the firm no longer subscribes to.",
    },
    { type: "h2", text: "Why \"we sent it\" is not the same as \"they agreed\"" },
    {
      type: "p",
      text: "An issued letter is not an agreed letter, and ICAEW's own list of common pitfalls says so directly: firms should avoid assuming terms are agreed simply because a letter has been issued, and an unsigned or partially updated engagement letter offers limited protection in a dispute.",
    },
    {
      type: "p",
      text: "This is the failure mode a bulk refresh produces. A firm sends 300 updated letters in a fortnight, 210 come back signed, and the remaining 90 sit in a state nobody is tracking. Twelve months later the practice believes its whole client base is on 2026 terms. Roughly a third of it is not, and the third that is not looks identical from the outside.",
    },
    {
      type: "p",
      text: [
        "Cerys Freemantle, Senior Professional Consultant in ICAEW's Technical Advisory Services, is quoted on the follow-up discipline: chase the slow returns, and keep \"a proper record of the version provided\" while you do. Her framing of why is the sharpest line on the page — your engagement letter is your contract for services, and if you ever have to enforce it, it needs to be current enough to give you the protection you think you have. Getting a signature on it is the same job as ",
        {
          text: "getting a signature on anything else",
          href: "/blog/esignature-legality-for-accountants",
        },
        ": the signature is worth what the surrounding record is worth.",
      ],
    },
    { type: "h2", text: "Which terms was this client on in 2027?" },
    {
      type: "p",
      text: "This is the question the whole exercise is really for, and ICAEW anticipated it inside the template itself. Part 4 is drafted so the terms of business can be dated — provision is made, in ICAEW's words, so that \"it is clear which terms of business have been applied\", because they may be updated from time to time. The standard-setter built a version stamp into the document because it expects drift.",
    },
    {
      type: "p",
      text: "Most practices then defeat it, and they defeat it with a tool. The natural way to update an engagement letter is to open the master template, edit it, and save. Do that and the previous terms are gone — not archived, gone. The template library now describes only your current position, and the question \"what did this client sign in 2024?\" has no answer anywhere in the system. It is a one-line action with a three-year blast radius, and it is genuinely easy to do by accident.",
    },
    {
      type: "p",
      text: "The fix is a change of mental model rather than a change of software: the template is not the record. The generated, signed document is. A template is a mould, and it is meant to be replaced. The letter that came out of it, filed against one client with a date and a signature, is the only thing that can answer a question about that client three years later. So version the artefact, not the mould.",
    },
    {
      type: "callout",
      title: "Put the version in the filename",
      text: "The cheapest durable fix in this entire article: name the output with the terms version, not just the client and the year — \"Engagement letter — Terms 2026-03 — signed 2026-09-14\". It survives a change of software, a change of staff and an export, because it lives in the filename rather than in a vendor's metadata column.",
    },
    { type: "h2", text: "The AI clause is a supplier list in disguise" },
    {
      type: "p",
      text: "The new AI guidance asks for three things: whether AI or other software tools will be used in service delivery, the limitations of those tools and their potential impact on outputs, and responsibilities for data protection, confidentiality and due diligence on technology providers.",
    },
    {
      type: "p",
      text: "Read that last item slowly, because it is not really an AI clause. It is a due-diligence duty on your technology providers, disclosed to your clients, and it has no natural expiry. To make a disclosure like that you need to know which suppliers touch client data, what each one does with it, and where it goes — which is a supplier register, maintained, not a paragraph written once.",
    },
    {
      type: "p",
      text: [
        "And it is a moving target, including for firms who changed nothing. Xero's own stack shifted during 2026: JAX now reads source documents and pulls data into the platform, and the new Xero Workpapers is documented as requiring BGL to be given access to your clients' Xero organisations — a point covered in ",
        {
          text: "the article on Workpapers and your client documents",
          href: "/blog/xero-workpapers-and-your-client-documents",
        },
        ". Neither change involved a decision by your practice. Both change the honest answer to \"which third parties process our clients' data\", and therefore what your 2026 disclosure is actually worth by 2027.",
      ],
    },
    {
      type: "p",
      text: "There is a small irony in the helpsheet worth exactly one sentence: given the professional judgement needed to tailor a letter to a client, ICAEW says \"the use of AI software should be considered with caution\". The letter now discloses your AI. ICAEW would rather you did not use AI to write the letter.",
    },
    { type: "h2", text: "How to run the refresh without losing the audit trail" },
    {
      type: "p",
      text: "The sequence below is deliberately boring, and the order matters — steps one and two are the ones that cannot be done retrospectively.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Date your terms of business before you send anything. One version string, used everywhere, in the document itself.",
        "Decide where a signed letter lives, once, for the whole firm — a named folder in each client's file, not wherever the sender happened to click.",
        "Segment the client base by the table above, rather than sending everyone the maximal letter. A client with no MTD obligation does not need the MTD schedule, and an over-scoped letter is its own risk.",
        "Generate per client, from one master, so the terms version is identical across the run and only the client-specific values differ.",
        [
          "Send for signature and ",
          { text: "track what comes back", href: "/blog/signed-documents-back-who-deals-with-them" },
          ", per client, until every one is closed or explicitly written off.",
        ],
        "File the signed copy against the client with the version in its name — and keep the superseded letter rather than replacing it. The old terms governed real work, and they still do for the period they covered.",
        "Diarise the review. ICAEW's position is annually or on any change of scope, which for most firms means a standing item, not a project.",
      ],
    },
    {
      type: "p",
      text: [
        "Step six is where most of the long-term value sits, and it is the same argument as ",
        {
          text: "the one about what leaving a document system costs",
          href: "/blog/what-leaving-a-document-system-costs",
        },
        ". Superseded terms are not clutter. They are the only evidence of what was agreed for the years they were in force, and a retention policy that discards them is discarding the contract half of ",
        {
          text: "the records you already have to keep",
          href: "/blog/how-long-accountants-keep-client-records",
        },
        ".",
      ],
    },
    { type: "h2", text: "What XTK does here, and what it does not" },
    {
      type: "p",
      text: [
        "XTK is a browser extension that adds a panel inside Xero Practice Manager, and a re-engagement run is close to the middle of what it was built for. A ",
        {
          text: "document template",
          href: "/guides/document-templates",
        },
        " is a Word file carrying square-bracket ",
        {
          text: "placeholders",
          href: "/guides/placeholder-reference",
        },
        " like [CLIENT:NAME]; \"Create ▾ → File from template\" fills them from that client's live XPM details, you review every value, and the finished document lands in a folder you choose inside that client's own storage.",
      ],
    },
    {
      type: "p",
      text: "The part that matters for a schedule-by-schedule refresh is conditional blocks. The placeholder grammar includes [IF] … [ENDIF], so one master engagement letter can carry the MTD schedule and the ACSP schedules and keep or drop each per client, rather than becoming four near-identical templates that drift apart. One master means one terms version across the whole run — which is step four above, done structurally instead of by discipline.",
    },
    {
      type: "p",
      text: [
        "From there, ",
        {
          text: "sending for signature",
          href: "/guides/send-documents-for-signature",
        },
        " happens in the same tab. Each request keeps an append-only event log — created, sent, resent, viewed, signed, declined, completed, voided — timestamped, with IP and user agent recorded for the recipient's own actions, and the signed PDF is written to a folder you nominate in your own Google Drive, OneDrive or SharePoint. Nothing about that record depends on XTK still being in the picture in 2029, which is the whole point of the exercise.",
      ],
    },
    {
      type: "p",
      text: "Now the limits, because three of them bite specifically on a mass refresh and you should plan around them rather than discover them at client 40.",
    },
    {
      type: "list",
      items: [
        "There is no multi-client send. A signature request belongs to exactly one client, so 300 clients is 300 requests generated from one template. The template does the drafting work; the sending is per client.",
        "XTK does not version templates. Replacing a template's file swaps it in place, and the library keeps no history of the terms it used to hold — which is precisely why the advice above is to put the version in the generated document's name rather than to rely on any tool's template library, including this one.",
        "There is no firm-wide \"who hasn't signed yet\" view. The signature list is per client. Practice-wide activity does surface in the notification tray as events happen, but that is a feed rather than a roll-up, so a 300-letter run still needs a tracker of your own.",
      ],
    },
    {
      type: "callout",
      title: "XTK is a filing tool, not a compliance one",
      text: [
        "XTK does not draft engagement terms, check them, or tell you whether a client needs a new letter. It has no retention engine and will not diarise your annual review. It is also a technology provider that belongs on the supplier register described above: bytes do pass through XTK's backend for template generation and signature flattening, and ",
        {
          text: "how XTK handles your data",
          href: "/guides/how-xtk-handles-your-data",
        },
        " sets out exactly which operations those are.",
      ],
    },
    { type: "h2", text: "The checklist" },
    {
      type: "list",
      items: [
        "Find out which version your letters are based on. If nobody knows, that is the finding.",
        "Read ICAEW's March 2026 summary of changes against the May 2023 one, and check whether any letter of yours references the removed Part 2 schedule at position P.",
        "Add the schedules your services actually need — MTD for Income Tax, ACSP with or without identity verification, agreed-upon procedures.",
        "Write the AI and technology paragraph from a real list of your suppliers, and keep that list somewhere it will be maintained.",
        "Date your terms of business, and put that date in every generated letter's filename.",
        "Segment the client base before sending: new letter, reissued terms, or nothing.",
        "Track returns to zero, and keep the superseded letters.",
        "Diarise the next review now.",
      ],
    },
    {
      type: "callout",
      title: "Sources, and not legal advice",
      text: [
        "This article describes ICAEW's published guidance and is not legal advice; the helpsheet itself states it is best practice rather than a professional standard, and that professional judgement and, where necessary, legal advice should be applied to any letter. The changes above are taken from ICAEW's ",
        {
          text: "engagement letters and privacy notices helpsheet page",
          href: "https://www.icaew.com/technical/tas-helpsheets/practice/engagement-letters",
        },
        " and its ",
        {
          text: "practice-news summary of the updates",
          href: "https://www.icaew.com/technical/practice-resources/practice-news/engagement-letter-updates",
        },
        ", both read on 2 September 2026. ICAEW publishes the revision as \"March 2026\" and names no day, so no more precise date is given here. The helpsheet's sample wordings are licensed to ICAEW members for personal, non-commercial use and are not reproduced in this article — schedules are referred to by their published titles only. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      ],
    },
  ],
  faq: [
    {
      q: "What changed in ICAEW's engagement letter templates in March 2026?",
      a: "ICAEW added Part 2 schedules for personal tax under MTD for Income Tax (E-B), for acting as an Authorised Corporate Service Provider with and without identity verification services (U A and U B) with a guidance note (U GN), and for agreed-upon procedures (T). Part 3 carries limitation-of-liability and alternative data-protection wording, and Part 4, the Terms of Business, now refers to the use of AI, with \"Artificial Intelligence\" added as a topic in the related guidance. The published schedule list also shows position P as removed. ICAEW's page lists change summaries for May 2022, May 2023 and March 2026.",
    },
    {
      q: "Do accountants have to reissue engagement letters to existing clients?",
      a: "Not automatically, but ICAEW's position is that firms should not assume terms remain valid indefinitely and should review letters regularly — ideally annually or whenever scope changes. It names new regulatory requirements, additional services and the adoption of new digital tools as developments that should prompt an update. In practice that sorts a client base into three groups: those needing a new letter with a new schedule, those needing only reissued terms of business with an acknowledgement, and those needing nothing beyond a signed letter you can still produce.",
    },
    {
      q: "Is an engagement letter valid if the client never signed it?",
      a: "It offers materially less protection. ICAEW's common-pitfalls guidance warns firms against assuming terms are agreed simply because a letter has been issued, and states that an unsigned or partially updated engagement letter gives limited protection in a dispute. The practical consequence for a bulk refresh is that sending is not finishing: the letters that come back unsigned look identical to the ones that were never sent unless you track returns to zero.",
    },
    {
      q: "How do you prove which version of your terms a client agreed to?",
      a: "By dating the terms and keeping the signed document, not the template. ICAEW drafts Part 4 so the terms of business can be dated, precisely because they get updated over time. The risk is that updating a master template in place erases the previous wording, leaving nothing in the system that answers what a client signed in an earlier year. Putting the terms version in the generated document's filename, filing it against the client, and keeping superseded letters rather than replacing them makes the answer survive a change of software or staff.",
    },
    {
      q: "What does an engagement letter need to say about AI?",
      a: "ICAEW's new guidance covers whether AI or other software tools will be used in service delivery, the limitations of those tools and their potential impact on outputs, and responsibilities for data protection, confidentiality and due diligence on technology providers. That last point makes it a supplier-disclosure duty rather than a single clause: it requires knowing which providers process client data and what they do with it. It is also a moving target, since a provider can change its own processing — Xero's 2026 changes to JAX and to Workpapers both altered who touches client data without any decision by the practice.",
    },
    {
      q: "Can XTK send updated engagement letters to every client at once?",
      a: "No. A signature request in XTK belongs to exactly one client, so a 300-client refresh means 300 requests, and there is no firm-wide view of which are still outstanding — the signature list is per client, and practice-wide activity appears in the notification tray as a feed rather than a roll-up. What XTK does automate is the drafting and filing: one master template with square-bracket placeholders and [IF] … [ENDIF] conditional blocks generates each client's letter from their live Practice Manager details, and the signed PDF, with its append-only event log, lands in your own Google Drive, OneDrive or SharePoint.",
    },
  ],
};
