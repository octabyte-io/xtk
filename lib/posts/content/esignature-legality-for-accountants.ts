import type { Post } from "../types";

export const post: Post = {
  slug: "esignature-legality-for-accountants",
  title: "E-signature legality for accountants, by jurisdiction",
  seoTitle: "Are e-signatures legally binding? A guide for accountants",
  description:
    "Are e-signatures legally binding? The law for accountants in the UK, Australia, NZ, the US and more, and what your audit trail has to prove.",
  excerpt:
    "An e-signed engagement letter is enforceable in every major Xero market, and has been for two decades. The harder question is evidence: what your audit trail can actually prove if a client denies signing.",
  date: "2026-08-04",
  readingTime: "13 min read",
  category: "Practice tips",
  topic: "e-signatures",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/esignature-legality-for-accountants/og.png",
  thumbnail: {
    src: "/images/blog/esignature-legality-for-accountants/thumb.png",
    alt: "The easy half — seven jurisdictions each ticked with the effect its own statute gives an electronic signature — above the half that decides it: the four things a signature has to prove, intent, consent, attribution and integrity, plus retention as a fifth no statute frames as a signature requirement",
  },
  relatedSlugs: [
    "e-signatures-inside-xpm",
    "how-long-accountants-keep-client-records",
    "xero-practice-manager-document-management",
  ],
  relatedLinks: [
    { label: "Send documents for e-signature", href: "/guides/send-documents-for-signature" },
    { label: "How clients sign documents online", href: "/guides/esignatures-what-your-client-sees" },
    { label: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
    { label: "Privacy Policy", href: "/legal/privacy" },
  ],
  body: [
    {
      type: "p",
      text: "Yes. An electronically signed engagement letter is enforceable in the United States, the European Union, the United Kingdom, Australia, New Zealand, Canada and Singapore, and has been for roughly two decades. Every one of those regimes asks for the same four things in substance: that the signer meant to sign, that they were content to sign electronically, that the signature can be attributed to them, and that the document has not changed since.",
    },
    {
      type: "p",
      text: "So legality is the easy half, and not where practices get caught out. The question that decides whether e-signing is safe to rely on is evidentiary: if a client says in four years that they never signed that letter, what can you put in front of a tribunal? Nearly every statute below is technology-neutral — it says what a signature must achieve and leaves the proving to you. The audit that matters is of your tool, not the law.",
    },
    { type: "h2", text: "Is an e-signed engagement letter legally valid?" },
    {
      type: "p",
      text: "Yes, in every major Xero market — but by three different routes, and the difference matters if you have to argue one. Some statutes say an electronic signature may not be denied legal effect merely for being electronic. Some deem a signature requirement met once a functional test is satisfied. Only a qualified electronic signature under European Union rules is declared the outright equivalent of a handwritten signature.",
    },
    {
      type: "table",
      head: ["Jurisdiction", "Governing law", "Effect", "Notably outside it"],
      rows: [
        [
          "United States",
          [{ text: "ESIGN Act 2000", href: "https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap96.htm" }],
          "Not denied validity",
          "Wills, family law",
        ],
        [
          "European Union",
          [{ text: "eIDAS, 2014", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014R0910-20241018" }],
          "Qualified signature equals handwritten",
          "National form rules",
        ],
        [
          "United Kingdom",
          [{ text: "Electronic Communications Act 2000", href: "https://www.legislation.gov.uk/ukpga/2000/7/section/7" }],
          "Admissible in evidence",
          "Deeds, witnessing",
        ],
        [
          "Australia",
          [{ text: "Electronic Transactions Act 1999", href: "https://www.legislation.gov.au/C2004A00553/latest/text" }],
          "Requirement taken as met",
          "Corporations Act 2001",
        ],
        [
          "New Zealand",
          [{ text: "Contract and Commercial Law Act 2017", href: "https://www.legislation.govt.nz/act/public/2017/5/en/latest/" }],
          "Requirement met if reliable",
          "Affidavits, wills",
        ],
        [
          "Canada",
          [{ text: "Provincial, e.g. Ontario 2000", href: "https://www.ontario.ca/laws/statute/00e17" }],
          "Requirement is satisfied",
          "Wills, powers of attorney",
        ],
        [
          "Singapore",
          [{ text: "Electronic Transactions Act 2010", href: "https://sso.agc.gov.sg/Act/ETA2010" }],
          "Requirement is satisfied",
          "Wills, land dealings",
        ],
      ],
      caption:
        "Each statute checked against its own jurisdiction's official legislation site on 4 August 2026. Legislation changes — verify anything you intend to rely on.",
    },
    {
      type: "p",
      text: "Five of those rows carry a trap vendor summaries routinely flatten.",
    },
    {
      type: "list",
      items: [
        [
          "The United States rule is non-discrimination, not equivalence. 15 U.S.C. § 7001(a), from the ",
          { text: "Electronic Signatures in Global and National Commerce Act 2000", href: "https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap96.htm" },
          ", says a signature or contract may not be denied legal effect “solely because it is in electronic form” — not the same as declaring it identical to wet ink, and § 7001(b)(2) does not oblige anyone to accept electronic records. The consent formalities in § 7001(c) bite only where a law requires information be given to a consumer in writing, not on business contracts. The Uniform Electronic Transactions Act 1999 is adopted by nearly every state; New York uses its own Electronic Signatures and Records Act.",
        ],
        [
          "The United Kingdom's headline statute governs only admissibility. Section 7 of the ",
          { text: "Electronic Communications Act 2000", href: "https://www.legislation.gov.uk/ukpga/2000/7/section/7" },
          " makes an electronic signature and its certification “admissible in evidence” on authenticity and integrity. It does not say the signature is valid. The express equivalence rule for a qualified electronic signature comes instead from the assimilated eIDAS Regulation retained in UK law. Separately, section 1(3) of the Law of Property (Miscellaneous Provisions) Act 1989 still requires an individual's deed to be witnessed in that person's presence — unamended for remote witnessing as at 4 August 2026.",
        ],
        [
          "Australia carves out company execution. Section 10 of the ",
          { text: "Electronic Transactions Act 1999", href: "https://www.legislation.gov.au/C2004A00553/latest/text" },
          " (Cth) deems a Commonwealth signature requirement met where a method identifies the person and indicates their intention, and is either as reliable as appropriate or proven in fact to have done both. But Schedule 1 of the Electronic Transactions Regulations 2020 disapplies that section to the Corporations Act 2001, so company execution runs on Corporations Act sections 110A and 126 — a technology-neutral regime made permanent in February 2022, which also removes witnessing for an agent's deed. Each state and territory has its own corresponding Act.",
        ],
        [
          "Canada's federal privacy statute does less here than its reputation suggests. Part 2 of the Personal Information Protection and Electronic Documents Act 2000 reaches only the federal provisions listed in its Schedules 2 and 3 — three Acts and one regulation. Ordinary commercial signing is provincial: section 11 of Ontario's ",
          { text: "Electronic Commerce Act, 2000", href: "https://www.ontario.ca/laws/statute/00e17" },
          " says a legal requirement for a signature “is satisfied by an electronic signature”, with British Columbia's Electronic Transactions Act at section 11 and Alberta's at section 16. Exclusions differ between provinces, and Quebec runs a different scheme again.",
        ],
        [
          "New Zealand's presumption is a floor, not a ceiling. Part 4, subpart 3 of the ",
          { text: "Contract and Commercial Law Act 2017", href: "https://www.legislation.govt.nz/act/public/2017/5/en/latest/" },
          " restated the repealed Electronic Transactions Act 2002 without changing its effect. Section 226 requires a signature to adequately identify the signatory, indicate their approval, and be as reliable as is appropriate for the purpose. Note the direction of consent in section 226(2): where information must legally be given to a person, it is that recipient who consents to an electronic signature, not the party demanding it.",
        ],
      ],
    },
    {
      type: "quote",
      text: "Not one of these statutes tells you what to keep. They tell you what you will need to be able to show, and then stop.",
    },
    { type: "h2", text: "What almost every jurisdiction excludes" },
    {
      type: "p",
      text: "The exclusions are narrow and strikingly consistent: wills and other testamentary instruments, documents sworn on oath, some powers of attorney, negotiable instruments, and land dealings in several places. For an accounting practice, virtually nothing you sign in an ordinary week is on those lists.",
    },
    {
      type: "list",
      items: [
        "Wills, codicils and testamentary instruments are excluded almost everywhere — 15 U.S.C. § 7003(a)(1), Schedule 5 Part 3 of New Zealand's Contract and Commercial Law Act 2017, and the First Schedule to Singapore's Electronic Transactions Act 2010.",
        "Affidavits, statutory declarations and anything on oath or affirmation sit outside New Zealand's subpart, and Australia's Statutory Declarations Act 1959 is listed in Schedule 1 of the Electronic Transactions Regulations 2020.",
        "Documents that must be witnessed or notarised are the sharpest practical limit, because the constraint is the witnessing, not the signing. England and Wales still require physical presence; New South Wales has statutory audio-visual witnessing.",
        "Land and immovable property varies more than any other category, so check locally. British Columbia and Alberta exclude instruments transferring interests in land; Ontario repealed its land-transfer exclusion from 1 July 2015; Singapore still excludes contracts for the sale or disposition of immovable property.",
        "Negotiable instruments are excluded in the United States, Australia, New Zealand and parts of Canada — but no longer in Singapore, where that exclusion was deleted in 2021 alongside new Part 2A.",
        "Anything a regulator or tax authority prescribes on paper or through its own portal is a separate question from e-signature law — the prescribed form usually wins.",
      ],
    },
    {
      type: "p",
      text: "Which leaves the answer an accounting audience wants. Engagement letters, authorities to act, financial statement approvals, terms of business and most client consents are fine to sign electronically in all seven jurisdictions above. Check anything a tax authority prescribes a form for, and anything needing a witness.",
    },
    {
      type: "p",
      text: "Two of these lists moved recently, which is the argument for dating your own note. New Zealand inserted section 218(3) of the Contract and Commercial Law Act 2017 on 30 March 2025, so a deed creating a power of attorney in connection with a security interest is back inside the subpart — a flat “powers of attorney are excluded” is no longer accurate there. Singapore's Electronic Conveyancing and Other Matters Act 2025 would narrow its immovable-property exclusions but was still uncommenced as at 4 August 2026.",
    },
    { type: "h2", text: "The four things an electronic signature has to prove" },
    {
      type: "p",
      text: "Intent, consent, attribution and integrity. Those four are the substance behind every statute above, and the right checklist to hold a tool against: capture all four and your evidence works in all seven jurisdictions at once.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Intent — the signer meant to sign, not merely to open. Evidenced by a deliberate signing action on a document they could see in full, on a page that says what signing means. Every functional test above pairs identification with an indication of intention, and the second half is the half tools skimp on.",
        "Consent to sign electronically — explicit in some regimes, implied by conduct in others, so capture it either way. The direction differs: New Zealand's section 226(2) and Australia's section 10(1)(d) both look to the consent of the person to whom the signature is to be given, and Australia's applies only where that recipient is not a Commonwealth entity. One paragraph in your engagement terms settles it.",
        "Attribution — this signature belongs to this person and not to their bookkeeper. Evidenced by a unique link sent to that individual's own address, plus the timestamp, originating IP address and device recorded against each event. A shared link to a shared inbox destroys attribution, and it is the commonest way a practice weakens its own evidence.",
        "Integrity — the document has not changed since signing. Section 228 of New Zealand's Contract and Commercial Law Act 2017 is the most useful statutory hook here: it presumes a signature reliable where the signing means was linked to and controlled by the signatory alone, and where any later alteration to the signature — and, where assuring integrity is the purpose, to the information itself — is detectable. Section 228(2) makes that a rebuttable safe harbour rather than a limit.",
      ],
    },
    {
      type: "p",
      text: [
        "Then add a fifth that no statute frames as a signature requirement and every practice discovers late: retention. You have to produce all four years later, long after whoever sent the request has left. That means the signed document and its evidence living in storage your practice controls and can open with no subscription attached — the same reason ",
        { text: "where your client documents live", href: "/blog/xero-practice-manager-document-management" },
        " is a compliance question, not a tidiness one. ",
        { text: "How long you actually have to keep them", href: "/blog/how-long-accountants-keep-client-records" },
        " is a separate article, because the periods differ by jurisdiction and by document class.",
      ],
    },
    { type: "h2", text: "What belongs in the audit trail" },
    {
      type: "p",
      text: "A defensible trail records every event with a timestamp you can compare across timezones, and travels with the document rather than living in a dashboard. Hold your current tool against this list — it describes good evidence generally, not any one product.",
    },
    {
      type: "list",
      items: [
        "Every event in the request's life — created, sent, delivered, viewed, signed, declined, completed, voided — each with its own timestamp.",
        "Timestamps in one stated timezone, ideally UTC, so signers in different countries can be placed in order rather than merely listed.",
        "The actor for each event: the name and exact email address the request was addressed to, not a display name that can be edited afterwards.",
        "The originating IP address and a device or browser summary for each signing action.",
        "The signing order actually followed, which is not always the order you configured.",
        "Something that makes silent alteration detectable, so a changed value no longer matches what was attested.",
        "A completion certificate that travels with the signed file itself, plus the original in unaltered form so the two can be compared.",
      ],
    },
    {
      type: "callout",
      title: "The test that sorts real retention from a login",
      text: "Cancel the subscription in your head, then ask what evidence you still hold. If the audit trail lives only in the vendor's interface, that is not retention — it is a login. Ask it of every e-signature tool you assess, including ours.",
    },
    { type: "h2", text: "Six rules worth writing into your practice policy" },
    {
      type: "p",
      text: "Adopt these six and you close the gap between what the law asks and what your firm can produce. None needs a project; all six can be in place this week.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Send every signer their own unique link. Never circulate one link to a group, and never forward a link addressed to somebody else — the moment two people share a link, attribution is gone.",
        "Never let one person sign on another's behalf to save time. A director signing for a co-director is what turns a dispute into a loss, whatever the tool recorded.",
        "Send to the individual's own address, not a shared inbox. “accounts@” proves nothing about who clicked.",
        "Set a signing order on multi-director documents, so the record shows who committed first rather than presenting simultaneous signatures with no sequence.",
        "File the certificate with the signed document, in the client's folder — not in the sender's downloads or the vendor's dashboard.",
        "Put one paragraph in your engagement terms confirming the client accepts electronic signatures and electronic delivery. It costs a sentence and settles the consent limb of every statute above.",
      ],
    },
    { type: "h2", text: "How XTK handles it" },
    {
      type: "p",
      text: [
        "XTK signs from inside the client record and files the evidence into storage you already own. You pick a PDF from the client's folder, place fields per recipient — signature, date signed, email, text, number, dropdown and checkbox — and set the signing order by moving signer cards between numbered steps. Each recipient gets their own single-use tokenised link and signs in an ordinary browser with no account and no password. ",
        { text: "How a request runs from send to filed is in our e-signatures overview", href: "/blog/e-signatures-inside-xpm" },
        ", and the ",
        { text: "step-by-step is in the guide", href: "/guides/send-documents-for-signature" },
        ".",
      ],
    },
    {
      type: "p",
      text: [
        "What matters here is what completion produces. For each document XTK stamps the captured values onto a copy of the original, appends the Certificate of Completion as that PDF's final page, and files it beside the original in the client's folder in your own Google Drive, OneDrive or SharePoint. That is one file per document, not a signed PDF plus a separate certificate, and the original is never replaced. The certificate prints the request id, an integrity hash, then per signer: their name and the address the request went to, the moment they signed written out in UTC, their IP address and a device summary such as “Chrome on macOS”. The same events sit behind the Status dialog's timestamped history; ",
        { text: "what your client sees", href: "/guides/esignatures-what-your-client-sees" },
        " is documented separately.",
      ],
    },
    {
      type: "p",
      text: "Two points of precision. The integrity hash is a SHA-256 fingerprint of the request, its signers and every captured value, so a quietly altered value no longer matches the hash printed on the page. It fingerprints the captured signing data rather than the document's bytes, and it cannot prove a person was who they claimed to be. Second, a Date Signed field stamps the signer's own calendar day, so near midnight the stamped field and the certificate can legitimately name different days — the certificate records the attested instant in UTC and is the one to cite in a dispute.",
    },
    {
      type: "p",
      text: [
        "One honesty note. Flattening a signed PDF streams the file through XTK's backend — in flight, not written to disk and not stored — because stamping needs a document engine. Uploads otherwise go from your browser straight to Google or Microsoft. The ",
        { text: "full account of what moves where", href: "/guides/how-xtk-handles-your-data" },
        " is worth reading first, and the ",
        { text: "Privacy Policy", href: "/legal/privacy" },
        " states what XTK holds.",
      ],
    },
    { type: "h2", text: "The question to ask before you adopt anything" },
    {
      type: "p",
      text: "Stop asking whether electronic signatures are legal. They have been in every market your practice operates in since roughly 2000. Ask the harder question: if this client denies signing in four years, can I produce the document, the certificate, the event history and the untouched original, from storage I control, with no active subscription? A practice that can answer yes has an e-signature process. One that cannot has a convenient way of sending files.",
    },
    {
      type: "callout",
      title: "Not legal advice",
      text: "This article summarises primary legislation checked on 4 August 2026 and is not legal advice. Statutes change, exclusions differ by state and province, and your professional body's rules and local retention requirements apply on top. Take advice on anything you intend to rely on. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
  ],
  faq: [
    {
      q: "Is a typed name a valid electronic signature?",
      a: "Usually yes. These regimes are technology-neutral: the United States ESIGN Act 2000 defines an electronic signature as any sound, symbol or process adopted with intent to sign, and the Australian, New Zealand and Singaporean tests ask only that the method identify the signer and indicate their intention. A typed name can satisfy that. What varies is how much evidence sits behind it.",
    },
    {
      q: "Does the client need an account or a password to sign?",
      a: "No. Nothing in ESIGN, eIDAS or the Australian, New Zealand and Singaporean Electronic Transactions Acts requires a signer to hold an account, and demanding one lowers completion rates without improving evidence. What matters is that the link went to that individual's own address and that every event against it is logged. XTK sends each signer a single-use tokenised link with no account and no password.",
    },
    {
      q: "Can a client dispute an electronic signature?",
      a: "Yes, and so can they dispute a wet-ink one — the purpose of an audit trail is that disputes get decided on evidence. A challenge almost always attacks attribution or intent rather than electronic form itself. The evidence that answers it is the address the request was sent to, the timestamped event history, the originating IP address and device, and proof the document has not been altered since signing.",
    },
    {
      q: "How long should we keep signed documents and their certificates?",
      a: "Follow your local retention rules and your professional body's guidance rather than a figure from a software vendor, because periods differ by jurisdiction, document type and regulator. Two practical rules do generalise. Keep the certificate with the signed document rather than in a separate system, and keep both somewhere that survives cancelling your e-signature subscription.",
    },
    {
      q: "Do we need a qualified electronic signature in the EU?",
      a: "Rarely. Regulation (EU) No 910/2014, known as eIDAS, gives only a qualified electronic signature the express equivalent legal effect of a handwritten signature, but it does not itself require one. Article 2(3) leaves the conclusion and validity of contracts and other form requirements to national and sector-specific law. A qualified signature is needed where a national form rule demands it, commonly for land, notarial acts and public registers.",
    },
  ],
};
