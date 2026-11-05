import type { Post } from "../types";

export const post: Post = {
  slug: "accountants-letter-for-a-home-loan",
  title: "The accountant's letter for a home loan: what you can send",
  seoTitle: "Accountant's letter for a home loan: what you can send",
  description:
    "An accountant's letter for a home loan should state facts, not affordability. What brokers ask for, what to decline, what to send and how to template it.",
  excerpt:
    "Brokers ask for a letter saying the client can afford the loan. That is the one letter you should decline. Here is the smaller, factual letter you can send instead, and how to build it once so nobody retypes it.",
  date: "2026-09-17",
  readingTime: "15 min read",
  category: "Guides",
  topic: "client-documents",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/accountants-letter-for-a-home-loan/og.png",
  thumbnail: {
    src: "/images/blog/accountants-letter-for-a-home-loan/thumb.png",
    alt: "The line you can't sign: a tilted letter page on a clay ground, with the sentence “…and can repay the loan” struck through in red above a kept line reading “Accounts compiled to 30 June 2026” with a tick beside it",
  },
  relatedSlugs: [
    "icaew-engagement-letter-update-2026",
    "send-documents-to-clients-without-attachments",
  ],
  relatedLinks: [
    { label: "Document templates in Xero Practice Manager", href: "/guides/document-templates" },
    { label: "Placeholder reference", href: "/guides/placeholder-reference" },
    { label: "Send documents for e-signature in Xero Practice Manager", href: "/guides/send-documents-for-signature" },
    { label: "Pricing", href: "/pricing" },
  ],
  body: [
    {
      type: "p",
      text: "An accountant's letter for a home loan should say only what you already know: who the client is, since when you have acted, what you compiled and for which years, and that you make no assessment of whether they can repay. The version that asks you to certify the repayment is the version to decline. What is left is a short factual letter — which means it is a template, filled from the client record, not something to retype for every broker who asks.",
    },
    {
      type: "p",
      text: [
        "This article covers what brokers and lenders actually ask for, why the professional bodies say to refuse the repayment question, what you can send instead, the consent you need first, and how to build the letter once in Word so Practice Manager fills it. It is about one document, end to end. The general case — every client detail you type more than once — is ",
        { text: "a post on document automation", href: "/blog/stop-retyping-client-data" },
        ", and the annual letter that goes to every client is ",
        { text: "the engagement letter", href: "/blog/icaew-engagement-letter-update-2026" },
        ".",
      ],
    },
    { type: "h2", text: "What is an accountant's letter?" },
    {
      type: "p",
      text: "It is a letter an accountant writes at a client's request, addressed to a bank, lender, landlord or government agency, confirming something about the client's financial affairs. Brokers call it an accountant's letter, a reference, a declaration or a certificate. For a self-employed borrower it turns up when the tax returns alone do not tell the lender what it wants to know — a business under two years old, an income that moves, a director drawing from a company.",
    },
    {
      type: "p",
      text: [
        "The request side is specific about the form. A broker guide for borrowers, ",
        { text: "Home Loan Experts", href: "https://www.homeloanexperts.com.au/home-loan-documents/accountant-letter/" },
        ", updated 8 May 2025, lists what lenders look for: the accountant's own letterhead with contact numbers and the firm's ABN, the professional membership of the signatory, a date, a signature and the signer's name, the client's name, a confirmation that the firm acts for them, and a disclaimer. Every item on that list is administrative.",
      ],
    },
    {
      type: "p",
      text: "The hard part is the sentence often wanted next to it — some form of “in our opinion the borrower can meet the repayments”. That one sentence turns a statement of fact into an opinion about the future, and it is why the letter has a reputation as the job nobody wants.",
    },
    { type: "h2", text: "Can you decline to certify that a client can repay?" },
    {
      type: "p",
      text: [
        "In Australia, yes, and your professional body says you should. CPA Australia, Chartered Accountants ANZ and the Institute of Public Accountants publish a joint toolkit, ",
        {
          text: "Accountant's letters, declarations and capacity to repay certificates",
          href: "https://www.cpaaustralia.com.au/tools-and-resources/financial-planning/accountants-letters",
        },
        ", first issued in May 2023, updated in December 2024 and revised again in August 2026, applicable from 1 August 2026. Its joint position is that accountant's letters requested to facilitate a financing arrangement are to be declined, because the credit assessment is the lender's responsibility and the lender has obligations under its own credit licence when making one.",
      ],
    },
    {
      type: "p",
      text: "The reasoning is about opinions, not paperwork. Expressing an opinion on a client's financial viability requires a full audit whatever the purpose, and giving one without an audit breaches APES 110 and APES 210 — and may put the letter outside your professional indemnity cover, which is the part that tends to end the argument with a partner. The toolkit sorts the possible engagements by risk.",
    },
    {
      type: "table",
      head: ["Risk", "What you are asked to do", "Toolkit's line"],
      rows: [
        ["Low", "Collate historical documents", "Acceptable"],
        ["Low to moderate", "Authenticate, explain impact", "Consider carefully"],
        ["High", "Certify capacity to repay", "Strongly recommended you decline"],
        ["High", "Forecasts, future plans", "Strongly recommended you decline"],
      ],
      caption: "The joint professional bodies' risk ladder, from the August 2026 Accountant's Letter Toolkit. Historical facts sit at the bottom; anything about the future sits at the top.",
    },
    {
      type: "p",
      text: [
        "The banks moved too, though less far than it is usually reported. The ",
        { text: "2025 Banking Code of Practice", href: "https://www.ausbanking.org.au/banking-code/" },
        ", which commenced on 28 February 2025, says at clause 78 that when assessing whether you can repay a loan, “We will not ask a third party (such as your accountant) to certify that you can repay the Loan.” Read it in place before you rely on it: clause 78 sits in Part B5, lending to small business, where the Code states that “you” means Small Business — and it binds only banks that subscribe to the Code. A self-employed borrower applying for an ordinary home loan, a non-bank lender, a landlord or a licensing agency are all outside it. The toolkit says as much, and expects the requests to keep coming.",
      ],
    },
    {
      type: "callout",
      title: "The UK version of the same problem",
      text: [
        "ICAEW's technical release ",
        {
          text: "02/01AAF, Requests for references on clients' financial status and their ability to service loans",
          href: "https://www.icaew.com/-/media/corporate/files/technical/technical-releases/audit/tech-02-01aaf-requests-for-references-on-clients-financial-status.ashx",
        },
        ", last updated December 2019, reaches the same place by a different route. Future income is inherently uncertain, it says, so no amount of enquiry can let accountants confirm that a client will have the income to service a loan. It adds two rules the Australian toolkit does not: do not charge a fee for the reference, because a fee risks implying a contract, and disclaim liability in writing. Declining outright, where the risk is too high, is legitimate. Appendices A and B carry example wordings, for an individual borrower and for a director of a client company.",
      ],
    },
    { type: "h2", text: "What can you send instead?" },
    {
      type: "p",
      text: [
        "Three things, and most requests are satisfied by the first. The toolkit publishes a template for each, as Word files you can adapt. The first assumes the documents are on your file; if last year's return or the latest activity statement is still with the client, that is ",
        { text: "an ordinary document request", href: "/blog/stop-chasing-clients-for-documents" },
        ", and worth sending before you reply to the broker.",
      ],
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Documents from the file, with a covering letter. Historical accounts, tax returns, activity statements — things that exist, and that you are confirming rather than asserting. The covering letter states that you have not audited them, that you accept no duty of care to the reader, that it is provided for one named purpose only, and that you make no comment on the client's ability to meet its obligations.",
        "An accountant's letter on the toolkit's own form, if you choose to write one. It is a short structured page: client name, business address, trading name, ABN, the period for which you compiled the accounts, the years for which returns have been lodged, whether the accounts are audited, the principal sources of income, and gross taxable income for the last three years — five if you compiled them. Then the compilation wording, the disclaimer, your membership, the date and the signature block.",
        "A letter declining, if the request is one you will not meet. The toolkit includes both the letter to the client and an information sheet explaining to them why, which is the part that stops the conversation becoming personal.",
      ],
    },
    {
      type: "p",
      text: "One warning printed on the toolkit's own letter is easy to miss: if the credit contract is regulated under the National Consumer Credit Protection Act 2009, you cannot use the financing letter to support the application unless you hold or are authorised under an Australian Credit Licence — or you are providing purely factual information to verify what the client has already told the lender. That last clause is the lane most practices are in, and another reason to keep the letter to facts.",
    },
    { type: "h2", text: "Get the client's consent before anything leaves" },
    {
      type: "p",
      text: "Nothing goes to a lender without the client's express written consent — the toolkit is unambiguous, and it appears twice in the working-paper checklist. This is the step most likely to be done by phone and never written down, and the one that matters if the loan sours and somebody asks what you sent and on whose instruction.",
    },
    {
      type: "p",
      text: [
        "It is also the step that fits an e-signature best. The letter needs a signature block; the consent needs a record of who agreed, when, and to what. Sending a one-page consent for signature gives you a signed PDF and a timestamped audit trail filed against the client, instead of a line in a file note. XTK's ",
        { text: "signature requests", href: "/guides/send-documents-for-signature" },
        " run from the client's own Documents tab in Practice Manager: pick the file, pick the recipient from the client's XPM contacts, and the signed copy lands beside the original as “… (signed).pdf”, with a certificate of completion as its last page.",
      ],
    },
    { type: "h2", text: "Turn the letter into a template once" },
    {
      type: "p",
      text: "Sort the fields on the toolkit's letter into three piles: things Practice Manager already knows, things only this request knows, and things that never change. The first pile is bigger than it looks.",
    },
    {
      type: "p",
      text: [
        "A ",
        { text: "document template", href: "/guides/document-templates" },
        " in XTK is an ordinary Word .docx stored once for the whole practice, with ",
        { text: "placeholders", href: "/guides/placeholder-reference" },
        " typed where client data belongs. Generating one from a client's Documents tab fills every placeholder from that client's record in XPM, shows you the values, and writes the finished .docx into the client's folder. Here is the toolkit's letter, mapped.",
      ],
    },
    {
      type: "table",
      head: ["Field on the letter", "Placeholder", "Filled from"],
      rows: [
        ["Client's name", "[CLIENT:NAME]", "XPM client record"],
        ["ABN", "[CLIENT:BUSINESSNUMBER]", "XPM client record"],
        ["Business address", "[CLIENT:STREET:ADDRESS]", "XPM address, by type"],
        ["Addressed to", "[CONTACT:PRIMARY:ADDRESSEE]", "XPM contacts"],
        ["Date of the letter", "[DATE:d MMMM yyyy]", "Your computer's clock"],
        ["Trading name, GST period", "[CUSTOM:Trading Name]", "An XPM custom field"],
        ["Partner acting", "[CLIENT:ACCOUNTMANAGER]", "XPM account manager"],
        ["Lender, purpose, figures", "Typed each time", "You, at generation"],
      ],
      caption: "Placeholders work in headers and footers as well as the body, so a letterhead can carry the date and the client reference. Address types are STREET, POSTAL, DELIVERY, OTHER or ANY.",
    },
    {
      type: "p",
      text: "Two rows deserve a note. A custom field is how you get anything XPM does not hold natively — a trading name, a GST period — by defining it once in Practice Manager and referring to it by name. And the partner placeholder is the client's assigned account manager, not your practice's own details: XTK has no placeholders for your firm, so the letterhead, firm name, professional membership and signature block live in the template itself, typed once and correct forever.",
    },
    {
      type: "p",
      text: "If one letter has to serve both a company and a sole trader, wrap the paragraph that differs between [IF …] and [ENDIF] and it is kept or dropped per client, on a presence test, an equals or a not-equals. There is no AND, no OR and no [ELSE].",
    },
    {
      type: "callout",
      title: "One thing to watch when you paste in a pro-forma",
      text: "XTK reads a placeholder as an uppercase word in square brackets, so most of what the member bodies put in their own templates is safe: [We/I], [our/my], [date], [Name and address of lender] and [his/her] are all left alone, because they are not all uppercase. A single uppercase word in brackets is not. Paste ICAEW's Appendix B heading — “REFERENCE IN CONNECTION WITH THE [LENDING] APPLICATION” — and XTK will offer you a field called LENDING to fill in. So will [NOTE], [DRAFT] and [TBC]. Nothing breaks: a field you leave empty is stamped into the document as its own literal text, so you will see it in the output. But it is easier to reword the heading than to explain the stray field to whoever generates the letter next.",
    },
    { type: "h2", text: "What Practice Manager cannot fill in, and why that is right" },
    {
      type: "p",
      text: "The money. Gross taxable income for each of the last three years, the period over which you compiled the accounts, the years for which returns have been lodged, whether the accounts were audited: none of that is in the client record, and all of it has to be typed into the fill step for every letter.",
    },
    {
      type: "p",
      text: "That is the correct division of labour. A template fills the fields that are boring to type and embarrassing to get wrong — a legal name with the wrong suffix, last year's address, a misspelt director. The fields it cannot fill are the ones carrying the risk, and they are exactly the ones a human should look at each time. A letter that assembled its own numbers would be a letter nobody checked.",
    },
    {
      type: "p",
      text: "XTK is explicit about what it could not fill. The fill step shows one box per placeholder with the resolved value in it, every box editable, and a running count underneath of how many are still empty, along with a note that an empty one will appear as its literal token. An unfilled field is never silently blank: [CLIENT:BUSINESSNUMBER] arrives in the finished letter as those exact characters, which is ugly and obvious, which is the point.",
    },
    { type: "h2", text: "Generating, converting and sending one letter" },
    {
      type: "p",
      text: "Once the template exists, a letter is a couple of minutes' work from the client's own record in Practice Manager, and the sequence is the same every time.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Open the client in XPM and go to the Documents tab. Everything below happens against that one client — there is no way to run a letter for several at once.",
        "Choose “File from template” and pick the letter. XTK reads the template's placeholders and pre-fills them from the client's record.",
        [
          "Check every value, and type the ones it could not fill. Then name the output. The name defaults to the template's name, so every letter is called “Accountant's letter.docx” unless you change it — worth two seconds, because ",
          { text: "the file name is what travels", href: "/blog/how-to-name-client-files" },
          ".",
        ],
        "Pick the destination folder inside the client's folder, and generate. The finished .docx is written there; the template is untouched.",
        "Read it in Word. This is a letter going to a third party about a client's money, and it is the last point where a wrong number is cheap to fix.",
        "Convert it to PDF from the file's row menu, which writes a PDF beside the .docx. Word documents only — .doc and .docx — and up to 100 MB, which a letter will never trouble.",
        "Send it, with the client's consent already on file, the way the lender asked for it.",
      ],
    },
    {
      type: "p",
      text: [
        "Whether to e-sign the letter itself is a judgement call, and the honest answer is usually no. Adding yourself as a signer works — the signature panel has an “Add me as a signer” button precisely because the sender is sometimes the signer — but the signed copy comes back with a certificate of completion appended as an extra page, in US Letter size, which is not what most people want to hand a lender. A signature image in the template, or a wet signature on the printed PDF, gives the lender the page it expects. Keep the e-signature for the client's consent, where the audit trail is the point. ",
        { text: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
        " covers where the bytes go: generating from a template and flattening signatures stream through XTK's backend, and Convert to PDF hands the file to CloudConvert, even though the files themselves live in your own Google Drive, OneDrive or SharePoint.",
      ],
    },
    { type: "h2", text: "What to keep on the client's file afterwards" },
    {
      type: "p",
      text: "The toolkit's working-paper checklist ends with a documentation list, and it reads as a filing instruction. Everything on it is a file, and every one belongs with the client rather than in an inbox.",
    },
    {
      type: "list",
      items: [
        "The request itself, from the lender, agency or client.",
        "Any correspondence with your insurer about the request, and file notes of those discussions.",
        "A file note of what you told the client you could and could not provide.",
        "The amended engagement letter and fee advice, if the scope changed.",
        "The client's written consent to release their information to the third party.",
        "A copy of what you actually sent, and the covering letter you sent it with.",
        "The letter telling the client what went to the lender, with the enclosure attached.",
      ],
    },
    {
      type: "p",
      text: [
        "That is seven small files per request — precisely the kind of bundle that ends up scattered across a mailbox, a desktop and a shared drive. A folder under the client called “Lender requests 2026”, holding all seven, is the whole of the practice management here. If your client folders are ",
        { text: "in your own Drive or SharePoint", href: "/blog/xero-practice-manager-sharepoint-onedrive" },
        ", they are already in the right place; XTK's job is to put the generated letter and the signed consent there without anyone downloading and re-uploading them.",
      ],
    },
    {
      type: "callout",
      title: "What XTK does not do here",
      text: "It does not write the letter, hold a view on what belongs in it, or know anything about a loan. Templates are Word .docx only, up to 25 MB, and generation produces a .docx — never a PDF directly. Everything is one client at a time: no generating the same letter for several clients, no saved checklist of the seven records above, no practice-wide list of outstanding requests. There are no placeholders for your own firm, and none for jobs. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Sources and dates",
      text: [
        "The joint position, the risk ladder and the letter templates are from “Accountant's letters, declarations and capacity to repay certificates — a toolkit for members”, published by CPA Australia, Chartered Accountants ANZ and the Institute of Public Accountants, August 2026 edition, applicable from 1 August 2026, read on 17 September 2026 from ",
        {
          text: "CPA Australia's page",
          href: "https://www.cpaaustralia.com.au/tools-and-resources/financial-planning/accountants-letters",
        },
        ". Clause 78 is quoted from the 2025 Banking Code of Practice, published by the Australian Banking Association in July 2024 and commenced 28 February 2025. The UK guidance is ICAEW Technical Release 02/01AAF (Revised), last updated December 2019. The lender requirements are from Home Loan Experts, updated 8 May 2025. This article is not legal, financial or professional advice, and it does not reproduce the toolkit's wording: if you are deciding what to send, work from your own body's current guidance and your insurer's.",
      ],
    },
  ],
  faq: [
    {
      q: "Can an accountant refuse to write a letter for a home loan?",
      a: "Yes. In Australia the joint position of CPA Australia, Chartered Accountants ANZ and the Institute of Public Accountants is that accountant's letters requested to facilitate a financing arrangement should be declined, because assessing credit is the lender's responsibility. Their August 2026 toolkit includes a template letter for declining and an information sheet to give the client. In the UK, ICAEW's technical release 02/01AAF says it is legitimate to decline where the risk is too high.",
    },
    {
      q: "What should an accountant's letter for a lender actually say?",
      a: "Facts you hold and nothing else: who the client is, their ABN and address, how long you have acted for them, what you have compiled and for which years, whether the accounts are audited, the sources of income, and historical income figures. It should state that you have not audited the information unless you have, that you accept no duty of care to the reader, that it is provided for one named purpose, and that you make no comment on the client's ability to meet their obligations.",
    },
    {
      q: "What is clause 78 of the Banking Code of Practice?",
      a: "Clause 78 of the 2025 Banking Code of Practice, which commenced on 28 February 2025, sets out how a subscribing bank assesses whether a borrower can repay a loan and states that the bank will not ask a third party such as the borrower's accountant to certify that they can repay it. It sits in Part B5, which covers lending to small business, so it does not by itself cover every home loan, and it binds only banks that subscribe to the Code.",
    },
    {
      q: "Can I fill an accountant's letter automatically from Xero Practice Manager?",
      a: "The administrative half of it. Client name, ABN, business address, the contact it is addressed to, the account manager and the date can all be filled from the client's record in XPM by a Word template with placeholders, and anything XPM does not hold natively can be added as a custom field. The financial figures — income by year, the period compiled, the years lodged — are not in XPM and are typed for each letter, which is also where they should be checked.",
    },
    {
      q: "Does the client need to consent before I send anything to their lender?",
      a: "Yes, in writing. The joint professional bodies' toolkit says you should never provide client information to a third party without the client's express written consent, and its working-paper checklist asks you to obtain and document that consent on the engagement file. A signed one-page consent, filed with the client's other documents, is a stronger record than a note of a phone call.",
    },
  ],
};
