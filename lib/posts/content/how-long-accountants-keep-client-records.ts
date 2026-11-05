import type { Post } from "../types";

export const post: Post = {
  slug: "how-long-accountants-keep-client-records",
  title: "How long must accountants keep client records?",
  excerpt:
    "Five to seven years in most Xero markets — but that number hides three obligations, three clocks and a ceiling most policies forget. Then the harder half: can you still open the file when the period ends?",
  description:
    "How long accountants must keep client records: five to seven years in most Xero markets, the three clocks behind that, and how to still open the files.",
  date: "2026-08-10",
  readingTime: "16 min read",
  category: "Practice tips",
  topic: "document-management",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/how-long-accountants-keep-client-records/og.png",
  thumbnail: {
    src: "/images/blog/how-long-accountants-keep-client-records/thumb.png",
    alt: "A bar chart of statutory record-retention periods — New Zealand 7 tax years, Canada 6, the United Kingdom 5, Australia 5, the United States 3 — each with a paler extension for its notable longer period, above a separate AML/CDD bar of 5 to 7 years that starts only when the client leaves",
  },
  relatedSlugs: [
    "esignature-legality-for-accountants",
    "xero-practice-manager-document-management",
    "document-management-for-xero-practices-compared",
  ],
  relatedLinks: [
    { label: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
    { label: "Folder templates", href: "/guides/folder-templates" },
    { label: "Your data rights & deletion", href: "/legal/data-deletion" },
    { label: "Pricing", href: "/pricing" },
  ],
  body: [
    {
      type: "p",
      text: "Five to seven years, in most of the markets a Xero practice works in. New Zealand's Inland Revenue says seven tax years. The Australian Taxation Office says five. The Canada Revenue Agency says six. HMRC counts from a filing deadline rather than a year end. And money-laundering rules in both the United Kingdom and Australia do not start counting until the client leaves.",
    },
    {
      type: "p",
      text: [
        "So the useful answer is not a number. It is a small set of clocks, each started by a different event, applied to different documents. Get that far and you have a policy — but not yet the ability to comply with it, because a seven-year period outlives most software subscriptions, most of the staff who created the files, and several product decisions by your vendors. A practice can hold an impeccable policy and still be unable to produce a 2021 engagement letter, because the tool it lived in was cancelled in 2024. Duration is a policy question. Custody is an architecture question — which is why ",
        { text: "where your client documents live", href: "/blog/xero-practice-manager-document-management" },
        " decides whether you can comply with the policy you wrote — and it is the half that fails quietly.",
      ],
    },
    { type: "h2", text: "Whose records are they? Three obligations, three clocks" },
    {
      type: "p",
      text: "Three separate duties get collapsed into one figure, and that collapse is how a practice ends up over-retaining and under-retaining in the same filing cabinet.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Your client's own statutory records — the company's or the taxpayer's duty to keep its books, which you may be holding on their behalf. The period belongs to them, but the files are in your Drive, so in practice it becomes yours to honour.",
        [
          "Your engagement file and working papers — the practice's own duty, set less by tax law than by your professional body and by how long you could be sued. In England and Wales, section 5 of the ",
          { text: "Limitation Act 1980", href: "https://www.legislation.gov.uk/ukpga/1980/58/section/5" },
          " gives six years from the date the cause of action accrued for a claim founded on simple contract, which is why professional indemnity insurers and retention policies tend to converge on six or seven.",
        ],
        [
          "Your client due diligence evidence — money-laundering records, on a clock that does not start when the work was done but when the relationship ends. This is the one most commonly filed in the wrong year folder, because it belongs to the client rather than to any engagement, and because it is gathered ",
          { text: "during onboarding", href: "/blog/accounting-client-onboarding-checklist" },
          ", years before the clock that governs it starts running.",
        ],
      ],
    },
    {
      type: "p",
      text: "The commonest response is a flat “seven years for everything”, and it is wrong in both directions at once: too short for a client you onboarded in 2019 and disengaged last month, and too long for personal data you have had no reason to hold since 2020.",
    },
    { type: "h2", text: "How long must you keep client records?" },
    {
      type: "p",
      text: "Five jurisdictions, five headline periods, and in every one of them the headline is the general rule rather than the whole rule. Each figure below comes from the revenue authority's own guidance or from the statute itself.",
    },
    {
      type: "table",
      head: ["Jurisdiction", "Most records", "Notable longer period", "Set by"],
      rows: [
        [
          "United Kingdom",
          "5 years after filing",
          "Public companies, 6 years",
          [{ text: "HMRC", href: "https://www.gov.uk/self-employed-records/how-long-to-keep-your-records" }],
        ],
        [
          "Australia",
          "5 years",
          "Companies, 7 years",
          [{ text: "ATO", href: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/record-keeping-for-business/overview-of-record-keeping-rules-for-business" }],
        ],
        [
          "New Zealand",
          "7 tax years",
          "10 years, if extended",
          [{ text: "Inland Revenue", href: "https://www.ird.govt.nz/managing-my-tax/record-keeping" }],
        ],
        [
          "United States",
          "3 years",
          "6 years, income understated",
          [{ text: "IRS", href: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }],
        ],
        [
          "Canada",
          "6 years",
          "Longer if the CRA directs",
          [{ text: "CRA", href: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records/where-keep-your-records-long-request-permission-destroy-them-early.html" }],
        ],
      ],
      caption:
        "Each period read from the revenue authority's or the regulator's own guidance, or from the statute itself, on 10 August 2026. Periods depend on entity type and document class, and they change — verify anything you intend to rely on.",
    },
    {
      type: "p",
      text: "Every row hides something a summary would flatten.",
    },
    {
      type: "list",
      items: [
        [
          "The United Kingdom runs two clocks and neither starts at your year end. HMRC tells the self-employed to keep records ",
          { text: "at least five years after the 31 January submission deadline", href: "https://www.gov.uk/self-employed-records/how-long-to-keep-your-records" },
          " of the relevant tax year — and 15 months after the date of submission instead, where a return goes in more than four years late. Separately, section 388(4) of the ",
          { text: "Companies Act 2006", href: "https://www.legislation.gov.uk/ukpga/2006/46/section/388" },
          " requires accounting records to be preserved for three years from the date they are made by a private company, and six by a public one — a distinction almost every retention template ignores.",
        ],
        [
          "Australia's five years is measured from the later of two events. The ",
          { text: "ATO", href: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/record-keeping-for-business/overview-of-record-keeping-rules-for-business" },
          " counts from when you prepared or obtained the record, or completed the transactions it relates to, whichever is later — and for depreciating and capital gains tax assets you keep the record for as long as the asset is held, then five years after disposal, which for a commercial property can be decades. Company financial records run longer again: section 286 of the Corporations Act 2001 obliges a company to keep them, and ",
          { text: "ASIC puts the period at at least seven years", href: "https://www.asic.gov.au/for-business-and-companies/companies/company-building-blocks/company-record-keeping/" },
          " after the transactions covered are completed. The ATO's own page tells readers to check ASIC's seven years alongside its five.",
        ],
        [
          "New Zealand is the strictest of the five and adds two conditions the others do not. ",
          { text: "Inland Revenue", href: "https://www.ird.govt.nz/managing-my-tax/record-keeping" },
          " requires records, including electronic ones, to be kept for at least seven tax years, in English or Māori unless it approves another language, and — the clause that matters for any cloud-based practice — if you store records offshore, including in cloud computing, either you or your provider needs Inland Revenue's approval. The Commissioner can extend the seven years to ten.",
        ],
        [
          "The United States three-year figure is a period of limitations, not a retention policy. The ",
          { text: "IRS", href: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" },
          " sets three years generally, six where more than 25% of gross income is unreported, seven for a claim on worthless securities or a bad debt deduction, four years for employment tax records, and indefinitely where no return was filed or a fraudulent one was. State boards of accountancy then add their own periods for the firm's own files, so there is no single national answer for a US practice.",
        ],
        [
          "Canada's six years runs from the end of the last tax year the records relate to, not from the date of the document — and from the filing date where a return is filed late. The ",
          { text: "CRA", href: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records/where-keep-your-records-long-request-permission-destroy-them-early.html" },
          " can require longer, and it is the one authority here with a formal route to destroying records early: you ask permission rather than deciding for yourself.",
        ],
      ],
    },
    {
      type: "p",
      text: [
        "For the practice's own papers rather than the client's, the ",
        { text: "ICAEW's document retention helpsheet", href: "https://www.icaew.com/technical/tas-helpsheets/ethics/document-retention" },
        " gives the profession's most quotable default: firms may destroy correspondence and other papers more than seven years old, except those they think may be of continuing significance, with audit working papers kept at least six years from the date of the auditor's report. Note the shape of it — a default with a judgement call attached, which means somebody has to exercise the judgement rather than the software.",
      ],
    },
    { type: "h2", text: "When does the clock actually start?" },
    {
      type: "p",
      text: "Rarely on the date printed on the document, which is why filing by document date makes a purge unauditable. Across the five jurisdictions above the start event is the filing deadline, the date of submission, the date the record was made or obtained, the end of the last tax year it relates to, or the completion of the transaction — and money-laundering rules add the end of the business relationship, asset rules the date of disposal.",
    },
    {
      type: "p",
      text: "Which gives the single most useful filing rule in this article: file by the year the clock starts, not the year the document was created. A 2026 engagement letter for a client whose relationship ends in 2031 is a 2031 record for due diligence purposes, and no amount of policy will make that obvious to whoever runs the purge in 2036 unless the folder says so.",
    },
    {
      type: "callout",
      title: "Year folders are a compliance control, not tidiness",
      text: [
        "A structure with a folder per year and a small set of evergreen folders — Engagement, Identity, Correspondence — is what makes an annual purge a task rather than an excavation. That is the practical argument for ",
        { text: "a shallow, predictable folder structure", href: "/blog/organise-client-documents-google-drive" },
        ": the retention period has to be legible from the folder name years after everyone involved has left.",
      ],
    },
    { type: "h2", text: "The clock that starts when the client leaves" },
    {
      type: "p",
      text: [
        "Client due diligence records are the ones practices file wrongly, because they are the only category whose period is triggered by disengagement. Regulation 40 of the United Kingdom's ",
        { text: "Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017", href: "https://www.legislation.gov.uk/uksi/2017/692/regulation/40" },
        " sets five years beginning on the date the relevant person knows, or has reasonable grounds to believe, that the transaction is complete or that the business relationship has come to an end. It also does something none of the tax rules do: it caps retention, at ten years for records of transactions within a continuing relationship. ICAEW reads it the same way, and extends it to non-engagement documents about the relationship and its monitoring.",
      ],
    },
    {
      type: "p",
      text: [
        "Australian practices have a newer version of the same question. From 1 July 2026, accountants providing designated services came inside the Anti-Money Laundering and Counter-Terrorism Financing regime as reporting entities — the reform generally called tranche 2 — and ",
        { text: "AUSTRAC's record-keeping obligations", href: "https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/develop-your-amlctf-programs/record-keeping/record-keeping-overview" },
        " run to seven years, with customer identification records kept seven years after you stop providing designated services. Whether your practice is caught depends on which services you provide, which is a question for your own advice — but if the answer is yes, your identification records now outlast your tax workpapers. Be precise about what that record is. The OAIC's ",
        { text: "privacy guidance for AML/CTF reporting entities", href: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/privacy-guidance-for-reporting-entities-under-the-anti-money-laundering-and-counter-terrorism-financing-act" },
        " says that from 1 July 2026 for tranche 2 entities the Act does not require you to keep scanned copies or photocopies of identity documents themselves: what you keep is the details you relied on, the type of document, what you did to verify the customer and the outcome. The same guidance brings practices under the $3 million small-business threshold inside the Privacy Act for this work. So if you are still ",
        { text: "collecting ID by email", href: "/blog/stop-chasing-clients-for-documents" },
        ", the copy you did not need to keep is sitting in an inbox, while the record you do need has no folder with a period attached to it.",
      ],
    },
    {
      type: "p",
      text: "New Zealand, Canada and the United States run their own regimes, with their own triggers and periods — do not port a number across a border. The structural point does travel: this is the one category whose clock starts on the day you stop working for someone, which is exactly the day a practice is most likely to tidy up.",
    },
    { type: "h2", text: "Is there an upper limit? Yes, and it is easier to miss" },
    {
      type: "p",
      text: [
        "Retention has a ceiling as well as a floor, and the ceiling is data protection. Article 5(1)(e) of the ",
        { text: "UK GDPR", href: "https://www.legislation.gov.uk/eur/2016/679/article/5" },
        " requires personal data to be “kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed”. Keeping a client's identity documents indefinitely because storage is cheap is not caution. It is a second compliance problem, taken on to avoid thinking about the first.",
      ],
    },
    {
      type: "p",
      text: [
        "Australia states the duty as an action rather than a principle. Under ",
        { text: "Australian Privacy Principle 11.2", href: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information" },
        ", an entity must take such steps as are reasonable in the circumstances to destroy personal information or ensure it is de-identified once it is no longer needed — unless Australian law or a court order requires it to be retained. Read those halves together and the floor and ceiling stop competing: the statutory period is precisely the answer to why you still hold the file, and the day it expires is the day that answer runs out.",
      ],
    },
    {
      type: "p",
      text: "Which makes deletion a required step rather than an optional one. It is also harder than it sounds: a client's records sit in the Drive, the practice email archive, a portal, whatever someone saved to a laptop, and the backups behind all four. Deleting from one is not deleting. No document tool makes that disappear, ours included.",
    },
    {
      type: "quote",
      text: "A retention policy with no deletion step is a hoarding policy with a compliance vocabulary.",
    },
    { type: "h2", text: "Can you still open it in year seven?" },
    {
      type: "p",
      text: "This is the half a retention policy never covers, because it reads like an IT question. It is not: an obligation you cannot discharge is the same as an obligation you ignored. Four questions, asked of every system that holds client documents.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "If the subscription stops today, do the files remain readable? A vendor whose product becomes a login screen has not been storing your records; it has been renting you access to them.",
        "Are they in formats that outlive the vendor? Ordinary PDFs and Office files in ordinary folders will open in 2033. Rows in a proprietary store depend on somebody still running the software that reads them.",
        "Does the evidence travel with the document? A signed agreement whose audit trail lives in a dashboard is two artefacts in two custody arrangements, and only one of them is yours.",
        "Could someone who joins in 2031 find the 2026 file without asking anyone? Retention is not achieved by a file existing. It is achieved by a stranger locating it under time pressure.",
      ],
    },
    {
      type: "callout",
      title: "The test that outlasts a subscription",
      text: [
        "Pick your longest retention period, then ask what you would still hold if every software contract you have today ended tomorrow. Whatever survives that is your real retention capability, and the gap between it and your policy is the work. It is the same test worth applying to ",
        { text: "an e-signature tool's audit trail", href: "/blog/esignature-legality-for-accountants" },
        ", and to us.",
      ],
    },
    { type: "h2", text: "A retention procedure a practice can actually run" },
    {
      type: "p",
      text: "Seven steps, none of which needs a project. A practice that does these can answer a regulator, a professional body or a departing client without a search party.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Write a period per document class rather than one number for everything: tax records, statutory records, engagement files and working papers, due diligence evidence, correspondence. Five lines is a complete policy for most firms.",
        "State that period in your engagement letter, including that files are destroyed afterwards without further notice and that originals are returned at the end. It turns a policy into a term the client has agreed to.",
        "File by the year the clock starts. Everything else here depends on that one habit.",
        "Put one annual purge in the practice diary, owned by a named person, on a fixed date after your busiest filing season rather than during it.",
        "Keep a one-line log of what was destroyed and when. It is the only evidence that a deletion was a decision rather than an accident, and it is what you produce when someone asks for a file you no longer hold.",
        [
          "Export and ",
          { text: "hand back before you offboard a client", href: "/blog/handing-client-files-to-new-accountant" },
          ", not after — access to your systems ends on disengagement, and the clock on their due diligence records starts the same day.",
        ],
        "Re-check the policy whenever you change document software. A migration is the most common way a retention period is quietly broken, so ask what happens to the files you do not bring over.",
      ],
    },
    { type: "h2", text: "What XTK does and does not do here" },
    {
      type: "p",
      text: [
        "Start with what XTK does not do, because it is the more important half. There is no retention engine: no scheduled deletion, no legal hold, no policy enforcement, no records-management module, no ethical walls. XTK will not stop anyone deleting a file inside the retention period, and it will not delete one for you when the period ends. If a regulator expects retention enforced by software rather than encouraged by policy, buy a practice document management system — ",
        { text: "the honest comparison names SuiteFiles and FYI", href: "/blog/document-management-for-xero-practices-compared" },
        " and says who should choose them.",
      ],
    },
    {
      type: "p",
      text: [
        "What XTK does is the custody half. Every document sits in ",
        { text: "your practice's own Google Drive, OneDrive or SharePoint", href: "/guides/connect-document-storage" },
        ", in a folder per client, as an ordinary file you could open tomorrow without XTK's help — so the period runs against storage you already own, back up and control the residency of. ",
        { text: "Folder templates", href: "/guides/folder-templates" },
        " take the same [DATE:yyyy] tokens as document templates, so a standard structure stamps itself with the right year as it is created and every client ends up the same shape.",
      ],
    },
    {
      type: "p",
      text: [
        "The exits matter more than the features. Disconnecting storage removes XTK's access and leaves every file where it is. A lapsed trial or a cancellation puts the practice into a server-enforced read-only state rather than taking anything away — you can still browse, and a ",
        { text: "zip download of selected files", href: "/guides/bulk-file-actions" },
        " still works, so getting your documents out is not gated behind paying again. Closing the account deletes XTK's own records and never touches your Drive; the ",
        { text: "deletion and data-rights page", href: "/legal/data-deletion" },
        " states the mechanics. And ",
        { text: "a completed signature", href: "/guides/send-documents-for-signature" },
        " produces one file, with the Certificate of Completion appended as the signed PDF's final page beside the untouched original, rather than a document here and a certificate in a dashboard.",
      ],
    },
    {
      type: "p",
      text: [
        "And the honesty note this site owes on every article of this kind: uploads go from your browser straight to Google or Microsoft, but downloads, zip downloads, PDF merges, template generation and signature flattening stream bytes through XTK's backend — in flight, never written to disk or stored — and “Convert to PDF” hands that one file to CloudConvert, a ",
        { text: "disclosed third-party sub-processor", href: "/legal/subprocessors" },
        " and the only operation that sends a document outside your own storage provider. The ",
        { text: "full account of what moves where", href: "/guides/how-xtk-handles-your-data" },
        " is the thing to read before signing anything off, alongside the ",
        { text: "Privacy Policy", href: "/legal/privacy" },
        ".",
      ],
    },
    { type: "h2", text: "The question to ask before your next software change" },
    {
      type: "p",
      text: "Retention policies are written as though the only variable is time. The variable that actually decides whether you comply is custody: whose storage, whose format, whose subscription. So before you migrate, adopt or cancel anything, ask the question in its unflattering form — if this contract ends and nobody renews it, which of my retention obligations quietly become impossible? A practice that can answer that has a retention policy. One that cannot has a filing habit and a document about it.",
    },
    {
      type: "callout",
      title: "Not legal advice · last checked 10 August 2026",
      text: "Every period here was read from the revenue authority's or regulator's own guidance, or from the statute itself, on 10 August 2026, and none of it is legal advice. Retention periods differ by jurisdiction, entity type, document class and regulator, your professional body's rules apply on top, and all of it changes. Take advice on anything you intend to rely on. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
  ],
  faq: [
    {
      q: "How long do accountants have to keep client records?",
      a: "Between five and seven years for most records in most Xero markets, but the period depends on the jurisdiction and the document. As of August 2026, New Zealand's Inland Revenue requires at least seven tax years, the Australian Taxation Office five, the Canada Revenue Agency six from the end of the last relevant tax year, HMRC five years after the 31 January filing deadline for the self-employed, and the IRS three years as a general period of limitations. Company financial records and money-laundering records usually run longer than the tax figure.",
    },
    {
      q: "Do we have to keep records for a client who has left the practice?",
      a: "Yes, and one clock only starts when they leave. Under regulation 40 of the UK's Money Laundering Regulations 2017, client due diligence records are kept for five years beginning when you know or reasonably believe the business relationship has ended. Tax and statutory periods continue running on their own timetable regardless of whether the client is still yours, so disengagement reduces your access to the client, not your obligations.",
    },
    {
      q: "Can we keep client records electronically instead of on paper?",
      a: "Generally yes — the revenue authorities in the UK, Australia, New Zealand, the United States and Canada all accept electronic records, provided they are complete, legible and producible on request. New Zealand adds two conditions worth knowing: records must be in English or Māori unless Inland Revenue approves another language, and storing records offshore, including in cloud computing, requires that either you or your cloud provider has Inland Revenue's approval.",
    },
    {
      q: "Who owns the working papers, the practice or the client?",
      a: "Broadly, documents you prepared for your own purposes as part of delivering the engagement are the practice's, while documents belonging to the client that you hold on their behalf remain theirs. The distinction affects what you must hand over on disengagement as well as what you must retain, it is governed by your professional body's rules and your engagement terms rather than by tax law, and it is worth settling in the engagement letter rather than at the point of a dispute.",
    },
    {
      q: "What happens to our retention obligations when we change document software?",
      a: "They do not move with the software, which is the risk. A migration typically carries across current files and leaves a tail behind — old clients, archived years, anything outside the new system's structure — and that tail is usually the part still inside a retention period. Before you migrate, ask what happens to files you do not bring over, whether the outgoing system stays readable without a subscription, and who is accountable for the records in it.",
    },
    {
      q: "Do we have to delete records once the retention period ends?",
      a: "You have to consider it, and in some places act on it. Article 5(1)(e) of the UK GDPR permits personal data to be kept no longer than is necessary for the purpose, and Australian Privacy Principle 11.2 requires reasonable steps to destroy or de-identify personal information no longer needed, unless a law or court order requires retention. In practice this means a retention policy needs a deletion step with a named owner and a log, not merely a maximum period.",
    },
  ],
};
