import type { Post } from "../types";

export const post: Post = {
  slug: "companies-house-identity-verification-records",
  title: "Verified is not filed: seven years of Companies House ID evidence",
  seoTitle: "Companies House ID verification records: what to keep",
  excerpt:
    "If you verify a director's identity, you must keep the request and every piece of evidence you considered for seven years — including for the people you refused. The rules say what to keep and how long. They never say where, and the hardest file is the one with no client attached to it.",
  description:
    "Companies House identity verification records: an ACSP must keep the request and all evidence for seven years, refused people included. Where to keep it.",
  date: "2026-08-31",
  readingTime: "16 min read",
  category: "Practice tips",
  topic: "document-management",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/companies-house-identity-verification-records/og.png",
  thumbnail: {
    src: "/images/blog/companies-house-identity-verification-records/thumb.png",
    alt: "Two retention clocks side by side — the money laundering clock stopped at zero, waiting for a client relationship to end, and the regulation 15 clock already running from the day an identity check was refused — with the refused file shown outside every client folder",
  },
  relatedSlugs: [
    "how-long-accountants-keep-client-records",
    "stop-chasing-clients-for-documents",
  ],
  relatedLinks: [
    { label: "Request documents from clients", href: "/guides/document-requests" },
    { label: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
    { label: "Connect document storage", href: "/guides/connect-document-storage" },
    { label: "Privacy Policy", href: "/legal/privacy" },
  ],
  body: [
    {
      type: "p",
      text: [
        "If your practice verifies a director's identity for Companies House, you must keep the request and every piece of evidence you considered for seven years — including for the people you refused to verify. The duty is ",
        {
          text: "regulation 15 of the Registrar (Identity Verification and Authorised Corporate Service Providers) Regulations 2025",
          href: "https://www.legislation.gov.uk/uksi/2025/50/regulation/15/made",
        },
        ". It states precisely what to keep and precisely how long to keep it. It never says where.",
      ],
    },
    {
      type: "p",
      text: "That gap is the subject of this article. Identity verification became a legal requirement on 18 November 2025, starting a 12-month transition period that runs out on 17 November 2026, and the published figures put a little under half of the appointments in scope as verified by the end of June. Almost everything written for accountants about this regime answers one question — how do I verify somebody — and stops at the moment the evidence exists. The seven years that follow are where the compliance risk actually sits.",
    },
    {
      type: "p",
      text: "Nothing below requires you to install anything, and it applies whether your practice verifies ten identities or a thousand.",
    },
    { type: "h2", text: "What exactly must an ACSP keep, and for how long?" },
    {
      type: "p",
      text: [
        "Seven years, of two categories of person, and of more than most practices assume. Regulation 15 applies to anyone who is or has been an authorised corporate service provider — the duty does not end when your registration does. It requires records for every individual on whose behalf you delivered a verification or reverification statement, and, separately, for every individual in respect of whom you ",
        {
          text: "did not become satisfied under regulation 9",
          href: "https://www.legislation.gov.uk/uksi/2025/50/regulation/9/made",
        },
        " that the required personal information was true.",
      ],
    },
    {
      type: "p",
      text: "What the records must contain is the part worth reading twice. Regulation 15(5) requires them to include any records of the requests made under regulation 9, and “all information and evidence the relevant person considered when determining such requests”. Not the evidence you relied on. Not the evidence that persuaded you. All of it, including whatever you looked at and set aside.",
    },
    {
      type: "p",
      text: [
        "Regulation 9(5) widens that further, and it is the sentence most summaries leave out: the ACSP “may consider other information and evidence in addition to that provided by the individual”. So a supplementary check your own team ran — a register search, a returned letter, a note of a call that resolved an address mismatch — is information you considered, and regulation 15 keeps it for seven years alongside the passport scan. The duty covers your working, not just the client's uploads.",
      ],
    },
    {
      type: "p",
      text: "The two start dates differ, and the second surprises people. For someone you verified, the seven years run from the date stated in the statement. For someone you refused, from the date you decided not to deliver one. Neither waits for anything else to happen.",
    },
    {
      type: "callout",
      title: "Failing to keep the records is a criminal offence",
      text: [
        {
          text: "Regulation 16",
          href: "https://www.legislation.gov.uk/uksi/2025/50/regulation/16/made",
        },
        " makes it an offence to fail, without reasonable excuse, to comply with regulation 15 — and every officer of a firm in default commits the offence too. On indictment it carries imprisonment for up to two years, or a fine, or both. That is unusual drafting: most record-keeping duties are enforced with penalties, and this one is enforced with a prison sentence aimed at individuals in the firm as well as at the firm.",
      ],
    },
    { type: "h2", text: "Which documents count as evidence?" },
    {
      type: "p",
      text: [
        "The evidence itself is fixed by the registrar rather than left to judgement. The ",
        {
          text: "Registrar's (Identity Verification by Authorised Corporate Service Providers) Rules 2025",
          href: "https://resources.companieshouse.gov.uk/about/policyDocuments/registrarsRules/the-registrars-identity-verification-by-acsps-rules-2025.pdf",
        },
        ", made 24 January 2025 and in force from 25 February 2025, set out two routes. Which route you are on is decided by your own technology, not by the individual in front of you.",
      ],
    },
    {
      type: "table",
      head: ["Route", "How many items", "Examples from the rules"],
      rows: [
        [
          "Option 1 — only where the ACSP can validate cryptographic features",
          "One",
          "Biometric or machine-readable passport, up to 6 months expired if the cryptographic features still validate; UK, Channel Islands, Isle of Man or EU photocard driving licence; biometric EU or EEA identity card; UK biometric residence permit or card",
        ],
        [
          "Option 2, Group A — where the ACSP cannot",
          "Two from Group A, or one from A plus one from B",
          "Passport or Irish Passport Card up to 18 months expired; EU or EEA identity card; UK biometric residence permit or card; PASS card; HM Forces ID or Veteran Card; photographic visa or work permit",
        ],
        [
          "Option 2, Group B — never on its own",
          "Only alongside a Group A item",
          "Birth, adoption, marriage or civil partnership certificate; bank or building society statement; mortgage, council tax or utility bill at the current address",
        ],
      ],
      caption:
        "The two evidence routes in the Registrar's Rules 2025. Expired evidence and foreign equivalents are excluded except where a table permits them, and an individual eligible for biometric or photographic evidence must provide it.",
    },
    {
      type: "p",
      text: "Read that table as a filing specification rather than a checklist, because that is what it becomes the moment the check is done. A practice on Option 2 collects two identity documents per individual, one of which may be a utility bill or a bank statement, and holds them for seven years. Multiplied across the directors and people with significant control in your client base, that is a body of highly sensitive personal data that arrived over a few months and has to be findable, and then deletable, years later.",
    },
    { type: "h2", text: "Why is this clock unlike every other clock in your practice?" },
    {
      type: "p",
      text: [
        "Because it does not wait for the client to leave. Under ",
        {
          text: "regulation 40 of the Money Laundering Regulations 2017",
          href: "https://www.legislation.gov.uk/uksi/2017/692/regulation/40",
        },
        ", client due diligence records are kept for five years beginning when you know or reasonably believe the business relationship has ended. That is the clock most practice retention policies are built around, and it has a comfortable property: it starts at an event you will notice.",
      ],
    },
    {
      type: "p",
      text: "Regulation 15 has neither property. It is seven years rather than five, and it starts at the date of your own decision — a date that passes silently, on an ordinary Tuesday, months or years before the relationship ends, and possibly without a relationship ever beginning. Two clocks, two lengths, two triggers, on documents that often arrive in the same email.",
    },
    {
      type: "p",
      text: [
        "So satisfying one does not satisfy the other, in either direction. Delete an identity check five years after a client leaves and you may be two years short on regulation 15. Keep it under a policy reading “seven years from the end of the engagement” and you are holding it longer than regulation 15 requires, which is its own problem. ",
        {
          text: "The wider set of retention periods a UK practice is already running",
          href: "/blog/how-long-accountants-keep-client-records",
        },
        " has the same structure — several obligations, several clocks, one folder — and this is simply the newest and least forgiving member of the set.",
      ],
    },
    { type: "h2", text: "What happens to the evidence for someone you refused?" },
    {
      type: "p",
      text: "You keep it for seven years from the day you refused, and this is the case the regime handles least intuitively. Regulation 15(3)(b) covers every individual in respect of whom you did not become satisfied — no exemption for a check that went nowhere, none for a person who never became a client.",
    },
    {
      type: "p",
      text: "Consider what that file looks like. Somebody approached you, or was put forward as a director by an existing client. You asked for two documents. Something did not reconcile — the address history, the likeness, a document you could not satisfy yourself about — and you declined to deliver a statement. There is no engagement letter, possibly no client record in Practice Manager, and no year folder because there is no client to open one under. You are now the custodian of that person's passport image and proof of address for seven years, on a clock your own decision started.",
    },
    {
      type: "p",
      text: "Every instinct in a practice points the wrong way here. The natural response to a failed check is to close the file and delete the attachments — particularly when the person was never taken on and the data is exactly what you would rather not hold. Under regulation 15 that is the offence.",
    },
    {
      type: "quote",
      text: "The refusals have no client, no engagement and no folder — and the longest clock in the regime starts the day you write one.",
    },
    { type: "h2", text: "How many appointments are still unverified?" },
    {
      type: "p",
      text: [
        "A little over half were unverified at the end of June, and the figure for people with significant control is worse. Companies House publishes quarterly management information on this, and the release covering April to June 2026 was ",
        {
          text: "published on 30 July 2026",
          href: "https://www.gov.uk/government/statistics/companies-house-management-information-identity-verification-april-to-june-2026",
        },
        ". As at 30 June 2026 it reports 4,710,086 director appointments verified, or 55.33%; 82,686 LLP member appointments, or 49.47%; and 2,571,827 individual PSC appointments, or 41.86%. Across all three, 7,364,599 appointments were verified — 49.68% of those in scope.",
      ],
    },
    {
      type: "p",
      text: "One correction is worth making because almost every secondary write-up of these numbers gets it wrong. These are appointments, not people. The release says so in its own notes: an individual can hold more than one appointment in more than one corporate body, so the number of verified appointments may not equal the number of verified individuals. “55% of directors are verified” is not what the table says, and a practice planning capacity off that sentence is planning off the wrong denominator.",
    },
    {
      type: "p",
      text: "Two further qualifications: the figures are unaudited management information, by the release's own description, and the July 2026 release restated earlier quarters after dormant-company appointments were added to both the verified count and the in-scope population. They are not comparable with figures from an earlier release.",
    },
    {
      type: "p",
      text: "The shape survives the qualifications: with under five months of the transition period left, the PSC line was furthest behind, and PSCs are disproportionately the people a practice chases rather than the ones who chase you.",
    },
    { type: "h2", text: "The rules say what to keep. They do not say where." },
    {
      type: "p",
      text: "Nothing in the regulations or the rules specifies a location, a format or a system. That silence is the practical question, because the duty in regulation 15 sits on the ACSP — on your practice and its officers personally — and is not delegated by uploading a file into somebody else's product.",
    },
    {
      type: "p",
      text: [
        "In practice the evidence ends up in one of three places, rarely by deliberate choice: the verification vendor's platform, where the check was performed; ",
        { text: "a practice management or document management system", href: "/blog/xero-practice-manager-document-management" },
        "; or a Google Workspace or Microsoft 365 tenant the practice controls directly.",
      ],
    },
    {
      type: "p",
      text: "The three are indistinguishable in year one and very different in year six. A seven-year duty outlasts subscriptions, procurement cycles, vendor acquisitions and the partner who signed the original order form. The question to ask of the first two is not whether the vendor stores the records — it does — but what happens on the day you stop paying, and whether that answer sits in the contract or in a help article that can change. A vendor that deletes on termination, or offers an export you must run inside a notice period, has handed you a criminal record-keeping risk with a date on it.",
    },
    {
      type: "p",
      text: [
        "This is the same question ",
        {
          text: "an exit from any document system turns on",
          href: "/blog/what-leaving-a-document-system-costs",
        },
        ", asked about the one category of record where getting it wrong is an offence rather than an inconvenience. The six questions in that article are the right ones to put to a verification vendor in writing, and the first of them — whose storage tenant are the bytes in — is the only one that changes the answer for all seven years at once.",
      ],
    },
    { type: "h2", text: "Does holding ID documents for seven years conflict with data protection?" },
    {
      type: "p",
      text: [
        "No, and regulation 15 is what makes that true — but it also fixes the date on which it stops being true. Article 5(1)(e) of the ",
        {
          text: "UK GDPR",
          href: "https://www.legislation.gov.uk/eur/2016/679/article/5",
        },
        " requires personal data to be kept in a form permitting identification for no longer than is necessary. A statutory duty to retain is exactly the answer to why you still hold a passport scan in year six. The difficulty is that it is also, precisely, the answer to why you should not hold it in year eight.",
      ],
    },
    {
      type: "p",
      text: [
        "So the regime hands you a deletion date per individual, computable from a date you already recorded. Few retention obligations are that tidy, and acting on it is the hard part — the one described in ",
        {
          text: "the wider retention article",
          href: "/blog/how-long-accountants-keep-client-records",
        },
        ": the records sit in storage, in the email archive, in whatever somebody saved locally, and in the backups behind all three. Deleting from one is not deleting, and no document tool makes that disappear, ours included.",
      ],
    },
    { type: "h2", text: "What XTK does here, and what it does not" },
    {
      type: "callout",
      title: "XTK does not verify anybody's identity",
      text: "It performs no identity verification, no cryptographic validation of a passport chip, no likeness assessment, no PEP screening and no risk scoring. That means XTK cannot put your practice on Option 1 of the registrar's rules, because Option 1 exists only where the ACSP can validate cryptographic features. Verification stays wherever your practice does it today — an identity verification provider, Companies House's own service, or a check done in person. XTK is a document tool, and everything below is about the seven years after the check, not the check.",
    },
    {
      type: "p",
      text: [
        "What it does is collect the evidence into somewhere you own. A ",
        {
          text: "document request",
          href: "/guides/document-requests",
        },
        " is a checklist sent as one link — “passport or photocard licence”, “proof of address dated within three months” — and your client uploads against each line with no account and no password. Accepted types include PDF and images, iPhone HEIC among them, at up to 100 MB per file, which covers a photographed document without asking a director to work out how to make a PDF.",
      ],
    },
    {
      type: "p",
      text: [
        "Two properties of that flow matter for this particular category of record. The bytes go straight from your client's browser to Google or Microsoft — a client upload through a request link never passes through XTK's servers at all, which is worth knowing before you invite somebody to send you their passport. And the file lands in that client's folder in your practice's own Drive, OneDrive or SharePoint, as an ordinary file you could open tomorrow without XTK's help. ",
        {
          text: "What XTK's backend does and does not hold",
          href: "/guides/how-xtk-handles-your-data",
        },
        " is set out in full, including the operations where bytes do stream through it.",
      ],
    },
    {
      type: "p",
      text: "The retention property follows from that rather than from a feature. Nothing you have collected is ever removed automatically: cancelling a request closes the link, expiry closes the link, your client's submission closes the link, and none of the three deletes a file. Files that arrived stay in the client's folder. The seven-year clock therefore runs against storage your practice controls, not against a subscription — which is the only version of this that is safe to rely on, because the clock is longer than any software decision you are making this year.",
    },
    {
      type: "p",
      text: "Now the four places it does not help, because on a duty carrying a prison sentence the limits matter more than the pitch.",
    },
    {
      type: "list",
      items: [
        "The refusals are the hardest case, and XTK does not solve them. A document request belongs to exactly one client in Practice Manager, so somebody you declined to verify — who may have no client record at all — has nowhere natural to sit. Those files need a deliberate answer of their own.",
        "XTK has no retention engine. It will not tell you that a file reaches seven years next month, will not delete it for you, and holds no concept of a retention period. Regulation 15's expiry dates have to live in whatever your practice uses to track obligations.",
        "Retrieval is not the same as storage. Uploads bypass XTK's servers, but downloading a file, zipping a selection or merging PDFs all stream through the backend — bytes pass through in flight and are never written to disk or stored, which is a different claim from “never touched”.",
        "The request history is a subscription record. The checklist, who was asked, when it was sent and what arrived against each line live in XTK's database and end when your account does; the documents in your Drive do not. Every vendor has that split — the part worth checking is which side of it your evidence sits on.",
      ],
    },
    { type: "h2", text: "What to do before 17 November" },
    {
      type: "p",
      text: "None of this needs a software decision. It needs an hour, a written answer from one vendor, and a note of two dates.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Establish whether your practice is acting as an ACSP and verifying identities at all. If not, regulation 15 does not bind you, and the work is chasing clients to verify directly rather than holding evidence.",
        "Ask your verification provider in writing: where are the records held, whose tenant are the bytes in, what happens if we stop paying, and for how long do you keep them? File the reply with your supplier records.",
        "Find out where a refused check currently ends up in your practice, by asking whoever did the last one. If the answer is an inbox or a deleted folder, that is the first thing to fix.",
        "Write the two clocks into your retention policy as separate lines — five years from the end of the relationship for due diligence, seven from the statement or refusal date for identity verification — rather than reconciling them into one number.",
        "Pull your list of unverified directors and PSCs now rather than in October, noting that the PSC population is the one furthest behind nationally.",
      ],
    },
    {
      type: "callout",
      title: "Not legal advice · sources and date · last checked 31 August 2026",
      text: [
        "This article describes UK obligations only and is not legal advice; your professional body and your AML supervisor are the authorities on how the regime applies to your practice. Primary sources, all read 31 August 2026: ",
        {
          text: "regulations 9, 15 and 16 of SI 2025/50",
          href: "https://www.legislation.gov.uk/uksi/2025/50/contents/made",
        },
        ", the ",
        {
          text: "Registrar's Rules 2025",
          href: "https://resources.companieshouse.gov.uk/about/policyDocuments/registrarsRules/the-registrars-identity-verification-by-acsps-rules-2025.pdf",
        },
        " and the ",
        {
          text: "Companies House identity verification statistics for April to June 2026",
          href: "https://www.gov.uk/government/statistics/companies-house-management-information-identity-verification-april-to-june-2026",
        },
        ", published 30 July 2026 — the next quarterly release is due in the autumn and will supersede those figures. Companies House states the start of the 12-month transition period as 18 November 2025 on its own ",
        {
          text: "changes to UK company law site",
          href: "https://changestoukcompanylaw.campaign.gov.uk/identity-verification/",
        },
        " without naming an end date; 17 November 2026 is that period's final day. The separate requirement for third-party filing agents to be registered ACSPs is not yet in force and is currently expected no earlier than November 2027, so nothing above relies on it. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      ],
    },
  ],
  faq: [
    {
      q: "How long must an ACSP keep Companies House identity verification records?",
      a: "Seven years. Regulation 15 of the Registrar (Identity Verification and Authorised Corporate Service Providers) Regulations 2025 requires records for every individual on whose behalf a verification or reverification statement was delivered, and for every individual the ACSP did not become satisfied about. The seven years run from the date stated in the statement, or — for a refusal — from the date the ACSP decided not to deliver one. The records must include the requests made under regulation 9 and all information and evidence the ACSP considered.",
    },
    {
      q: "Do you have to keep records of identity checks that failed?",
      a: "Yes, and for the same seven years. Regulation 15(3)(b) covers every individual in respect of whom the ACSP did not become satisfied that the required personal information was true. There is no exemption for a check that went nowhere or for a person who never became a client. The clock starts on the date of the decision not to deliver a statement, so it can begin before any engagement exists.",
    },
    {
      q: "Is the seven-year period the same as the five years under the Money Laundering Regulations?",
      a: "No — they differ in both length and trigger. Regulation 40 of the Money Laundering Regulations 2017 requires client due diligence records for five years beginning when the business relationship is known or reasonably believed to have ended. Regulation 15 requires seven years from the date of the verification statement or of a refusal. Satisfying one does not satisfy the other in either direction, so a retention policy needs both as separate lines rather than one reconciled figure.",
    },
    {
      q: "What documents can an ACSP accept as identity evidence?",
      a: "It depends on the ACSP's own technology. Under the Registrar's Rules 2025, Option 1 allows a single item — a biometric or machine-readable passport, a UK or EU photocard driving licence, a biometric EU or EEA identity card, a UK biometric residence permit or card — but only where the ACSP can validate cryptographic features. Where it cannot, Option 2 requires two items: two from Group A, largely photographic identity documents, or one from Group A plus one from Group B, which includes birth certificates, bank statements and utility or council tax bills at the current address.",
    },
    {
      q: "What proportion of directors and PSCs have verified their identity?",
      a: "As at 30 June 2026, Companies House reported 55.33% of director appointments verified, 49.47% of LLP member appointments and 41.86% of individual PSC appointments — 7,364,599 verified appointments in total, or 49.68% of those in scope. Those are appointments, not individuals: the release notes that a person can hold appointments in more than one corporate body. The figures are unaudited management information published on 30 July 2026, and that release restated earlier quarters after dormant-company appointments were added to the calculation.",
    },
    {
      q: "Where should identity verification evidence be stored?",
      a: "The regulations do not say, which makes it a decision rather than a default. The duty sits with the ACSP and its officers personally and is not transferred by uploading a file into a vendor's product, so the test is what happens to the records on the day you stop paying — seven years is longer than most software decisions survive. Storage in a tenant the practice controls directly, such as its own Google Workspace or Microsoft 365, removes that dependency. Whichever you choose, get the vendor's answer in writing.",
    },
    {
      q: "Can XTK do Companies House identity verification?",
      a: "No. XTK performs no identity verification, no cryptographic validation, no likeness assessment and no PEP or risk screening, so it cannot put a practice on Option 1 of the Registrar's Rules. Verification stays with whatever provider or process your practice already uses. What XTK does is collect the resulting evidence through a document request link — uploads go straight from your client's browser to your own Google Drive, OneDrive or SharePoint without passing through XTK's servers — and file it in that client's folder, where cancelling, expiry and submission all delete nothing. It has no retention engine, so it will not track or act on the seven-year expiry for you.",
    },
  ],
};
