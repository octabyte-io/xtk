import type { Faq, Inline, RelatedLink } from "./inline";

export type { Faq, RelatedLink };

/**
 * `Inline` fields may carry inline links; `string` fields deliberately may not.
 * Headings are landmarks and anchor targets, a pull-quote's display type fights
 * an underlined link, a callout title is a label rather than a sentence, and
 * table headers and captions are plain-text sinks by definition.
 */
export type PostBlock =
  | { type: "p"; text: Inline }
  | { type: "h2"; text: string }
  | { type: "list"; items: Inline[]; ordered?: boolean }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: Inline }
  | {
      /**
       * Renders through the same component as a guide's table. Worth reaching
       * for only when the content is genuinely tabular — a comparison across
       * options — because a table is the densest thing on the page to read on a
       * phone, and the widest thing to get wrong.
       */
      type: "table";
      /** Column headers. */
      head: string[];
      rows: Inline[][];
      caption?: string;
    };

export type PostCategory = "Product" | "Guides" | "Practice tips" | "Company";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  readingTime: string;
  category: PostCategory;
  author: { name: string; role: string };
  featured?: boolean;
  /**
   * Slugs of related posts, in the order they should appear. Omit to fall back
   * to `getRelatedPosts`'s same-category-then-newest heuristic, which is thin
   * on a five-post blog.
   */
  relatedSlugs?: string[];
  /**
   * Destinations that aren't posts — guides, /pricing, a legal page — rendered
   * alongside the related posts. The blog's only way out of its own silo.
   */
  relatedLinks?: RelatedLink[];
  /** Path under public/ to the 1200×630 OG image; falls back to the site default. */
  ogImage?: string;
  /**
   * Path under public/ to the 1200×675 card/post cover (rendered from
   * user-guide/assets/thumb-template.html when the post has a screenshot to
   * frame, else blog-cover-template.html); omitted → text-only card.
   */
  thumbnail?: { src: string; alt: string };
  body: PostBlock[];
  /**
   * Optional FAQ, rendered as an accordion under the body and emitted as
   * `FAQPage` JSON-LD — the same treatment guides get, where a guide's `faq` is
   * required. Most posts don't want one: only add it where the questions are
   * ones readers actually arrive with, since an FAQ of invented questions is
   * the most obvious form of SEO padding there is.
   */
  faq?: Faq[];
};

export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export const posts: Post[] = [
  {
    slug: "introducing-xtk",
    title: "Introducing XTK: the toolkit for Xero Practice Manager",
    excerpt:
      "Practice Manager is great at jobs and time — and silent on documents, signatures and client collaboration. XTK adds the missing half, in a panel that opens right inside it.",
    date: "2026-03-10",
    readingTime: "5 min read",
    category: "Company",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/introducing-xtk/og.png",
    thumbnail: {
      src: "/images/blog/introducing-xtk/thumb.png",
      alt: "The XTK panel open beside a client record in Practice Manager, listing that client's folders and documents",
    },
    relatedSlugs: [
      "e-signatures-inside-xpm",
      "client-portals-clients-actually-use",
    ],
    relatedLinks: [
      { label: "Getting started with XTK", href: "/guides/getting-started-with-xtk" },
      { label: "Pricing", href: "/pricing" },
      { label: "About XTK", href: "/about" },
    ],
    body: [
      {
        type: "p",
        text: "Every accounting practice we spoke to while building XTK told us a version of the same story. Xero Practice Manager runs the practice — jobs, time, WIP, invoicing — and then the actual work happens somewhere else entirely: documents in a Drive nobody tidies, signatures in a separate e-sign tool, client requests scattered across inboxes.",
      },
      {
        type: "p",
        text: "The cost isn't any single tool. It's the switching. Opening four tabs to answer one client question. Copying a client's name and address into a template for the hundredth time. Chasing a signature by email because the e-sign tool doesn't know which job the engagement letter belongs to.",
      },
      { type: "h2", text: "One panel, inside Practice Manager" },
      {
        type: "p",
        text: [
          "XTK is a browser extension that adds a panel directly inside Xero Practice Manager. Open a client in XPM and the panel shows that client's ",
          { text: "documents", href: "/guides/manage-client-documents" },
          ", e-signature requests, portal activity and templates — in context, without leaving the page you were already on.",
        ],
      },
      {
        type: "list",
        items: [
          [
            "Documents live in ",
            { text: "your practice's own Google Drive", href: "/guides/connect-document-storage" },
            ", organised per client automatically.",
          ],
          [
            { text: "E-signature requests", href: "/guides/send-documents-for-signature" },
            " are created from the client record and tracked to completion.",
          ],
          [
            "A ",
            { text: "client portal", href: "/guides/set-up-client-portal" },
            " gives clients one place to upload, sign and see what you need from them.",
          ],
          [
            { text: "Templates", href: "/guides/document-templates" },
            " fill themselves from the client data XPM already holds.",
          ],
        ],
      },
      { type: "h2", text: "Your data stays yours" },
      {
        type: "p",
        text: "We made one decision early that shaped everything else: XTK doesn't store your documents. Files live in your practice's Google Drive, under your ownership, your retention rules and your existing backup story. XTK organises and connects — it doesn't become another silo you'd have to migrate out of one day.",
      },
      {
        type: "quote",
        text: "The best practice tools disappear into the workflow you already have. If you can feel the tool, it's in the way.",
      },
      { type: "h2", text: "Try it with your whole practice" },
      {
        type: "p",
        text: [
          "XTK is a two-minute install: ",
          { text: "add the extension", href: "/get-started" },
          ", connect your Drive, and open your first client. Every plan starts with a ",
          { text: "30-day free trial", href: "/pricing" },
          " for your whole practice — no credit card required. We'd love to hear what your team thinks.",
        ],
      },
    ],
  },
  {
    slug: "e-signatures-inside-xpm",
    title: "E-signatures that never leave Practice Manager",
    excerpt:
      "Engagement letters shouldn't need a separate tool, a separate login and a separate audit trail. Here's how XTK handles signing from inside the client record.",
    date: "2026-04-02",
    readingTime: "4 min read",
    category: "Product",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/e-signatures-inside-xpm/og.png",
    thumbnail: {
      src: "/images/blog/e-signatures-inside-xpm/thumb.png",
      alt: "Signature and date fields being placed on an engagement letter, ready to send for signature",
    },
    relatedSlugs: [
      "introducing-xtk",
      "client-portals-clients-actually-use",
    ],
    relatedLinks: [
      { label: "Send documents for e-signature", href: "/guides/send-documents-for-signature" },
      { label: "How clients sign documents online", href: "/guides/esignatures-what-your-client-sees" },
    ],
    body: [
      {
        type: "p",
        text: [
          "Signature season in most practices looks like this: ",
          { text: "generate the engagement letter from a template", href: "/guides/document-templates" },
          ", download it, upload it to an e-signature tool, retype the client's email address, send, and then — days later — try to remember which client's letter is still sitting unsigned.",
        ],
      },
      {
        type: "p",
        text: [
          "Every one of those steps exists because the e-sign tool doesn't know about your practice. It doesn't know the client, the job, or where the signed copy should end up. XTK closes that gap by ",
          { text: "starting the signature request from the client record", href: "/guides/send-documents-for-signature" },
          " itself.",
        ],
      },
      { type: "h2", text: "From client record to signed copy" },
      {
        type: "list",
        ordered: true,
        items: [
          "Open the client in Practice Manager and pick a document — or generate one from a template, pre-filled with the client's details.",
          "Drop signature, initial and date fields onto the page. XTK already knows the signer's name and email from the client record.",
          [
            "Send. ",
            { text: "The client signs from any device", href: "/guides/esignatures-what-your-client-sees" },
            " — no account, no app, no password.",
          ],
          [
            "The signed PDF and its completion certificate ",
            { text: "land in the client's Drive folder", href: "/guides/manage-client-documents" },
            " automatically.",
          ],
        ],
      },
      { type: "h2", text: "The part you'll feel in July" },
      {
        type: "p",
        text: [
          "The real win isn't sending — it's tracking. Because every request is tied to a client, that client's Signatures tab lists every request against them and how far each one has got: who has been emailed, who has viewed, who has signed, who declined. ",
          {
            text: "The Status dialog",
            href: "/guides/send-documents-for-signature",
          },
          " goes further, down to a timestamped history of every event — the record behind the Certificate of Completion.",
        ],
      },
      {
        type: "p",
        text: "Two things it deliberately doesn't do. There is no scheduler, so chasing a slow signer is a decision you make — “Resend link”, from the same dialog — rather than one XTK makes for you. And the tracking is per client rather than one practice-wide queue: you check a client, not a dashboard. What it does buy you is never again searching an inbox for the words “signed copy attached”.",
      },
      {
        type: "callout",
        title: "Legally binding, properly logged",
        text: "Every request carries a tamper-evident audit trail — who viewed, who signed, when and from where — captured in the completion certificate stored alongside the signed document.",
      },
      {
        type: "p",
        text: "If your engagement letter run still involves a download folder and a second login, try sending one letter through XTK instead. It takes about a minute, and the signed copy files itself.",
      },
    ],
  },
  {
    slug: "organise-client-documents-google-drive",
    title: "A sane folder structure for client documents in Google Drive",
    excerpt:
      "Shared drives drift into chaos one “final_v2” at a time. A structure that survives busy season has three properties — and you can automate all of them.",
    date: "2026-04-21",
    readingTime: "6 min read",
    category: "Guides",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/organise-client-documents-google-drive/og.png",
    thumbnail: {
      src: "/images/blog/organise-client-documents-google-drive/thumb.png",
      alt: "A client's Drive folders listed in the XTK Documents tab, one folder per year and work type",
    },
    relatedSlugs: [
      "xero-practice-manager-document-management",
      "stop-retyping-client-data",
    ],
    relatedLinks: [
      { label: "Manage client documents", href: "/guides/manage-client-documents" },
      { label: "Folder templates", href: "/guides/folder-templates" },
      { label: "Connect Google Drive, OneDrive or SharePoint", href: "/guides/connect-document-storage" },
    ],
    body: [
      {
        type: "p",
        text: [
          "Nobody sets out to build a messy Drive. It happens one shortcut at a time: a file saved to the root “just for now”, a client folder named three different ways by three different people, a year folder that quietly becomes two. (If you are still deciding ",
          {
            text: "whether a drive is the right home at all",
            href: "/blog/xero-practice-manager-document-management",
          },
          ", start there instead.)",
        ],
      },
      {
        type: "p",
        text: "Having watched a lot of practices tidy up, we think a document structure survives real workloads only if it has three properties: it's predictable, it's shallow, and nobody has to remember it.",
      },
      { type: "h2", text: "1. Predictable: one folder per client, named by the system" },
      {
        type: "p",
        text: [
          "The client folder should be created by software, not by whoever touches the client first. When folder names come from your practice management system, “ACME Trading Ltd” can't also exist as “Acme” and “ACME (new)”. XTK ",
          { text: "creates each client's folder", href: "/guides/folder-templates" },
          " from the XPM record the first time anyone ",
          { text: "files a document", href: "/guides/manage-client-documents" },
          " — same name, same place, every time.",
        ],
      },
      { type: "h2", text: "2. Shallow: years and work types, nothing deeper" },
      {
        type: "p",
        text: "Every level of nesting is a decision someone has to make while busy. Two levels below the client folder is almost always enough:",
      },
      {
        type: "list",
        items: [
          "A year folder (2026) for anything tied to a period — accounts, returns, workpapers.",
          "A small set of evergreen folders (Engagement, Identity, Correspondence) for things that outlive any one year.",
          "No “Misc”. A Misc folder is where structure goes to die.",
        ],
      },
      { type: "h2", text: "3. Automatic: filing shouldn't be a skill" },
      {
        type: "p",
        text: [
          "The structure that wins is the one nobody can deviate from. When documents arrive through XTK — ",
          { text: "a signed letter", href: "/guides/send-documents-for-signature" },
          ", ",
          { text: "a portal upload", href: "/guides/set-up-client-portal" },
          ", ",
          { text: "a generated template", href: "/guides/document-templates" },
          " — they file themselves into the right client and year. The humans never choose a destination, so the destination is never wrong.",
        ],
      },
      {
        type: "quote",
        text: "A tidy Drive isn't a discipline problem. It's a tooling problem wearing a discipline costume.",
      },
      {
        type: "callout",
        title: "Migrating an existing mess?",
        text: "Don't reorganise old files — freeze them. Create the clean structure from today forward and leave history in a read-only “Archive” folder. Retro-filing five years of PDFs is a project that never finishes.",
      },
    ],
  },
  {
    slug: "client-portals-clients-actually-use",
    title: "Client portals your clients will actually use",
    excerpt:
      "Most portals fail at the login screen. The fix isn't more features — it's removing every step between “your accountant needs this” and “done”.",
    date: "2026-05-12",
    readingTime: "5 min read",
    category: "Practice tips",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/client-portals-clients-actually-use/og.png",
    thumbnail: {
      src: "/images/blog/client-portals-clients-actually-use/thumb.png",
      alt: "The client portal's folder view, where a client downloads what the practice shared and uploads their own files",
    },
    relatedSlugs: [
      "e-signatures-inside-xpm",
      "xero-practice-manager-document-management",
    ],
    relatedLinks: [
      { label: "Set up a client portal", href: "/guides/set-up-client-portal" },
      { label: "Request documents from clients", href: "/guides/document-requests" },
    ],
    body: [
      {
        type: "p",
        text: "Ask a practice why they stopped using their last client portal and you'll rarely hear about missing features. You'll hear that clients wouldn't log in. The documents went back to email within a month, and the portal became a line item on an invoice nobody wanted to look at.",
      },
      { type: "h2", text: "Portals fail at the front door" },
      {
        type: "p",
        text: "A client interacts with your portal a handful of times a year. They will not remember a password they created in February. Every recovery email, every “verify your device”, every app download is a reason to reply to your email with a photo of a bank statement instead.",
      },
      {
        type: "p",
        text: [
          "That's why ",
          { text: "XTK's portal works from a secure link", href: "/guides/set-up-client-portal" },
          ". The client clicks through from your request, ",
          { text: "proves they own their email address", href: "/guides/client-portal-guide-for-clients" },
          ", and they're in — on a phone, at a kitchen table, with no password to forget.",
        ],
      },
      { type: "h2", text: "Ask for things, not for visits" },
      {
        type: "p",
        text: [
          "The second failure mode is treating the portal as a place clients should check. They won't, and they shouldn't have to. The portal earns its keep when every visit is prompted by ",
          { text: "a specific, concrete request", href: "/guides/document-requests" },
          ":",
        ],
      },
      {
        type: "list",
        items: [
          "“Upload your November bank statements” beats “please upload your records”.",
          "One request with five named items beats five emails with one item each.",
          "A visible checklist — three of five received — lets clients feel progress and lets you stop chasing what's already arrived.",
        ],
      },
      { type: "h2", text: "Close the loop automatically" },
      {
        type: "p",
        text: [
          "When a client uploads to an XTK request, the file ",
          { text: "lands in their Drive folder", href: "/guides/manage-client-documents" },
          ", the checklist ticks itself, and ",
          { text: "the team sees it", href: "/guides/notifications" },
          " from the client record in Practice Manager. Nobody forwards attachments. Nobody saves-as. The portal isn't a destination — it's a doorway that files things.",
        ],
      },
      {
        type: "callout",
        title: "One metric to watch",
        text: "Track time-to-complete on your document requests. If the median drops below 48 hours, your clients have accepted the portal. If it doesn't, the friction is still winning — look at the request wording before you blame the clients.",
      },
    ],
  },
  {
    slug: "stop-retyping-client-data",
    title: "Stop retyping client data: templates that fill themselves",
    excerpt:
      "Your practice types each client's name, address and entity details dozens of times a year. XPM already knows all of it — templates should too.",
    date: "2026-06-08",
    readingTime: "4 min read",
    category: "Product",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/stop-retyping-client-data/og.png",
    thumbnail: {
      src: "/images/blog/stop-retyping-client-data/thumb.png",
      alt: "The File from template dialog with every client placeholder already filled in from the client record",
    },
    relatedSlugs: [
      "organise-client-documents-google-drive",
      "e-signatures-inside-xpm",
    ],
    relatedLinks: [
      { label: "Document templates", href: "/guides/document-templates" },
      { label: "Placeholder reference", href: "/guides/placeholder-reference" },
      { label: "Email templates", href: "/guides/email-templates" },
    ],
    body: [
      {
        type: "p",
        text: "Count the places a single client's legal name gets typed in a year: the engagement letter, the ethical letter, the annual questionnaire, the minutes, the cover letters. Now multiply by your client list. It's hours of work, and — worse — every keystroke is a chance for “Ltd” to become “Limited” on a legal document.",
      },
      { type: "h2", text: "The data already exists" },
      {
        type: "p",
        text: [
          "Practice Manager already holds the client's legal name, trading name, addresses, contacts, and entity details. The only reason anyone retypes them is that Word can't see XPM. ",
          { text: "XTK's templates", href: "/guides/document-templates" },
          " can.",
        ],
      },
      {
        type: "p",
        text: [
          "You write the document once, dropping ",
          { text: "placeholders", href: "/guides/placeholder-reference" },
          " where client data belongs — the client's name, a postal address, the primary contact's first name. When someone generates the document from a client record, XTK fills every placeholder from XPM and ",
          { text: "files the result in the client's folder", href: "/guides/manage-client-documents" },
          ".",
        ],
      },
      { type: "h2", text: "Where it compounds" },
      {
        type: "list",
        items: [
          "Annual runs: generate this year's engagement letter for a whole client list, each one personalised, in minutes.",
          "Consistency: the letterhead, the wording and the entity details are right on every document, because nobody edits them by hand.",
          "Onboarding: new staff produce partner-quality documents on day one — the template carries the practice's standards for them.",
        ],
      },
      {
        type: "quote",
        text: "Automation isn't about speed first. It's about the version of the document that never gets the client's name wrong.",
      },
      {
        type: "p",
        text: [
          "Pair templates with ",
          { text: "e-signatures", href: "/guides/send-documents-for-signature" },
          " and the whole chain collapses into one motion: generate from the client record, send for signing, and watch the signed copy file itself. The only typing left is the parts that genuinely need a human.",
        ],
      },
    ],
  },
  {
    slug: "xero-practice-manager-document-management",
    title: "Document management in Xero Practice Manager: four options",
    excerpt:
      "XPM stores documents, but it was never built to be a document management system. Here's what it does, where it stops, and the four ways practices fill the gap.",
    date: "2026-08-04",
    readingTime: "9 min read",
    category: "Guides",
    author: { name: "The XTK team", role: "Product" },
    featured: true,
    ogImage: "/images/blog/xero-practice-manager-document-management/og.png",
    thumbnail: {
      src: "/images/blog/xero-practice-manager-document-management/thumb.png",
      alt: "A client record open in Practice Manager with the XTK panel beside it, listing that client's folders and documents",
    },
    relatedSlugs: [
      "organise-client-documents-google-drive",
      "client-portals-clients-actually-use",
    ],
    relatedLinks: [
      { label: "Manage client documents", href: "/guides/manage-client-documents" },
      { label: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "Xero Practice Manager can store documents against a client, a job or a quote, and for a small number of small files that is genuinely enough. What it does not have is a folder structure worth the name, a generous upload limit, version history, anything client-facing, or e-signing. So practices past their first dozen clients keep documents somewhere else — and there are four somewhere-elses worth knowing about.",
      },
      {
        type: "p",
        text: "This is not a knock on XPM. It is a jobs, time and billing system, and it is a good one. Document management is simply a different product, and the useful question is not whether XPM should have built it. It is how far from the client record your documents end up living — because that distance is what decides whether your team files things properly or not at all.",
      },
      { type: "h2", text: "What XPM gives you today" },
      {
        type: "p",
        text: [
          "The Documents tab attaches files to a client, a job or a quote, and any other user in your practice can see and download them. You can group them into folders inside Practice Manager, and you can email documents and notes from a job or quote using XPM's collaboration features. Uploads are capped at ",
          {
            text: "16MB per file",
            href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
          },
          ", and documents list alphabetically.",
        ],
      },
      {
        type: "p",
        text: "That set of features has a real sweet spot: a signed form that belongs to one particular job, a note with a screenshot attached, a piece of correspondence that only ever needs to be found again from the job it relates to. If that describes your document flow, stop reading — you don't have a problem to solve.",
      },
      { type: "h2", text: "Where it stops" },
      {
        type: "p",
        text: "Five gaps show up in roughly this order as a practice grows.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "No structure that survives people. Folders inside Practice Manager have no template and no enforcement, so “2026 / Tax / Workpapers” is a convention rather than a rule, and three people will express it three ways.",
          "The 16MB ceiling. A scanned bundle of source records, a financial statement pack, a set of photographed receipts — these routinely exceed it, and the workaround is always email.",
          "No version history. When you cannot see what changed, filenames start doing that job, which is how a folder ends up holding Accounts_FINAL, Accounts_FINAL_v2 and Accounts_FINAL_JS.",
          "Nothing client-facing. There is no portal and no upload link, so collecting records means asking for email attachments — and a file that arrives in an inbox has to be filed by a human before it counts as filed at all.",
          "No signing. Engagement letters leave for a separate e-signature tool and come back by hand, which means the signed copy lands wherever the person who downloaded it put it.",
        ],
      },
      {
        type: "quote",
        text: "Every one of these gaps has the same shape: the documents end up further from the client record than the work does.",
      },
      { type: "h2", text: "The four ways practices fill the gap" },
      {
        type: "p",
        text: "Almost every firm running on XPM has landed on one of these four. They are not four levels of sophistication — they suit genuinely different practices, and two of them are free.",
      },
      { type: "h2", text: "1. Stay in the Documents tab" },
      {
        type: "p",
        text: "Free, already configured, nothing to learn. It holds up for a sole practitioner with light document flow and no client sharing to do. It stops holding up the first time a client needs to see something, or a file is too big — and because both of those arrive without warning, the practice usually discovers the limit mid-deadline.",
      },
      { type: "h2", text: "2. A cloud drive on its own" },
      {
        type: "p",
        text: [
          "One folder per client in Google Drive, OneDrive or SharePoint. You already pay for the storage, you own everything in it, there is nothing to migrate and no vendor to leave. This is where most practices actually are, and it is a perfectly respectable place to be — provided you are honest about the failure mode, which is ",
          { text: "distance", href: "/blog/organise-client-documents-google-drive" },
          ". The drive is a different tab from the client record, so naming and filing rest entirely on discipline, and discipline is the first thing busy season takes.",
        ],
      },
      {
        type: "p",
        text: "There is also no portal and no signing here. Sharing means provider link-sharing, which is a permissions decision made in a hurry by whoever is sending the file.",
      },
      { type: "h2", text: "3. A document management system built for practices" },
      {
        type: "p",
        text: "SuiteFiles, FYI, Virtual Cabinet, Nimbus, Workiro — or a practice platform such as Karbon or TaxDome that absorbs documents into a wider workflow suite. You get proper filing, retention controls, portals, signing and audit trails, designed by people who have seen a lot of accounting practices.",
      },
      {
        type: "p",
        text: "The costs are real and worth stating plainly: a migration project, a rollout somebody has to own, per-seat or banded pricing at a materially higher level than the options above, and your documents now living inside a vendor's system. That last one is a trade rather than a flaw — a purpose-built repository is exactly what you are paying for. If you are ten or more people, or you have retention and records obligations that need enforcing rather than encouraging, this is the category to shop in.",
      },
      { type: "h2", text: "4. A layer over the drive you already have" },
      {
        type: "p",
        text: "The newest option: leave the files in your own Google Drive, OneDrive or SharePoint, and add the missing pieces — the folder-per-client structure, the portal, the upload links, the signing, the templates — inside the Practice Manager tab where the client record already is. Nothing moves, so there is no migration, and the drive stops being a separate destination people have to remember.",
      },
      {
        type: "p",
        text: "What you give up is the depth of a mature DMS: no retention engine, no records-management policy enforcement, and you need a Google or Microsoft storage account for it to sit on top of. This is the category XTK is in, and the honest summary is that it suits small-to-mid Xero-centric firms who want the gaps closed without moving anything.",
      },
      {
        type: "table",
        head: ["Compared on", "XPM alone", "Drive alone", "Practice DMS", "Layer over your drive"],
        rows: [
          ["Files live in", "XPM", "Your storage", "Vendor's system", "Your storage"],
          ["Upload limit", "16MB", "Provider's", "Generous", "100MB"],
          ["Folder structure", "Flat, by hand", "Ad hoc", "Enforced", "Templated"],
          ["Version history", "None", "Provider's", "Built in", "Provider's"],
          ["Client portal", "None", "Link sharing", "Yes", "Yes"],
          ["E-signatures", "None", "None", "Usually", "Yes"],
          ["Inside XPM", "Yes", "No, separate tab", "Varies", "Yes, a panel"],
          ["Migration", "None", "None", "Yes, a project", "None"],
          ["Pricing shape", "Included", "Storage you own", "Per seat or band", "Flat, per practice"],
          ["If you stop paying", "Stays in XPM", "Nothing changes", "Export on request", "Stays in your drive"],
        ],
        caption:
          "As of August 2026. The cost row compares pricing models rather than quoting prices — check each vendor's own page.",
      },
      {
        type: "callout",
        title: "The row most people skip",
        text: "“If you stop paying” is worth more thought than it usually gets. It is not a prediction that you will leave — it is a test of how much of your filing system belongs to you. Ask it of every option, including ours.",
      },
      { type: "h2", text: "Whichever you pick, fix the client folder name first" },
      {
        type: "p",
        text: [
          "One rule matters more than the rest, and it is free: one folder per client entity, named exactly as that client is named in XPM. That name is the only key your two systems share, so the moment “ACME Trading Ltd” also exists as “Acme” and “ACME (new)”, no amount of tooling will reconcile them. The ",
          { text: "wider structure question", href: "/blog/organise-client-documents-google-drive" },
          " — how many levels, which evergreen folders, what to do with history — is worth a read on its own.",
        ],
      },
      { type: "h2", text: "How XTK fits" },
      {
        type: "p",
        text: [
          "XTK is the fourth option. Your practice ",
          { text: "connects one storage provider", href: "/guides/connect-document-storage" },
          " — Google Drive, OneDrive or SharePoint — and picks a Main Storage Folder. Each client then gets one folder inside it: if a folder of that name already exists it is adopted rather than duplicated, if none exists it is created, and if two match you choose. From then on the ",
          { text: "Documents tab in the XTK panel", href: "/guides/manage-client-documents" },
          " opens against whichever client you have open in Practice Manager, and takes the place of Xero's own Documents tab.",
        ],
      },
      {
        type: "p",
        text: [
          "Files are ordinary files in a drive you own, which is why the version-history row above says “your provider's” rather than “none”: Google's and Microsoft's own file history applies, because XTK never took your documents anywhere. Uploads are capped at 100MB, deletes go to your provider's trash rather than vanishing, and ",
          { text: "bulk actions", href: "/guides/bulk-file-actions" },
          " — move, copy, zip, merge PDFs — are fenced to the current client's folder, so one client's document cannot land in another's.",
        ],
      },
      {
        type: "p",
        text: [
          "The gaps from the list above close in the same panel: ",
          { text: "a client portal", href: "/guides/set-up-client-portal" },
          " where shares are markers pointing at your files rather than copies, ",
          { text: "document requests", href: "/guides/document-requests" },
          " that land straight in the client's folder, ",
          { text: "e-signatures", href: "/guides/send-documents-for-signature" },
          " that file the completed PDF beside the original, and ",
          { text: "templates", href: "/guides/document-templates" },
          " that fill themselves from the client's XPM details.",
        ],
      },
      {
        type: "p",
        text: [
          "Two things worth saying because they cut against the pitch. Uploads go from your browser straight to Google or Microsoft, but downloads and any job that needs a document engine — zipping a selection, merging PDFs, generating from a template, flattening a signed PDF — stream through XTK's backend in flight; nothing is written to disk or kept. And “Convert to PDF” hands that one file to CloudConvert, an external service. The ",
          { text: "full account of what moves where", href: "/guides/how-xtk-handles-your-data" },
          " is a guide of its own, and it is the one to read before you decide anything.",
        ],
      },
      {
        type: "p",
        text: [
          "Pricing is one flat ",
          { text: "$59 a month for the whole practice", href: "/pricing" },
          " — no per-seat maths, which matters more than it sounds when your headcount includes part-timers and seasonal help. Anyone you would have skipped buying a seat for is the person who keeps filing in email.",
        ],
      },
      {
        type: "p",
        text: [
          "If you want to try the fourth option against one client rather than in theory, ",
          { text: "getting set up", href: "/guides/getting-started-with-xtk" },
          " takes about ten minutes: install, connect a drive, open a client in Practice Manager.",
        ],
      },
      { type: "h2", text: "The test that actually matters" },
      {
        type: "p",
        text: "Whichever of the four you land on, judge it the same way: can somebody who joined last week find last year's engagement letter for a client they have never worked on, in under a minute, without asking anyone? A practice that can do that has a document management system. A practice that cannot has a folder of files and a set of people who remember things.",
      },
      {
        type: "callout",
        title: "XTK and Xero",
        text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited. XPM limits described here were checked against Xero Central in August 2026 — Xero changes its product, so check anything you plan to rely on.",
      },
    ],
    faq: [
      {
        q: "Does Xero Practice Manager have a client portal?",
        a: "No. XPM has no client-facing portal for document exchange. You can email documents from a job or quote, but clients cannot log in to view or upload files, so practices that need a portal add a third-party product — a document management system, or a layer over their own cloud storage.",
      },
      {
        q: "What is the file size limit for documents in Xero Practice Manager?",
        a: "16MB per file in XPM's Documents tab, as of August 2026. Larger files — scanned record bundles, financial statement packs — have to go somewhere else, which in most practices means email or a cloud drive.",
      },
      {
        q: "Can I connect Google Drive to Xero Practice Manager?",
        a: "Not natively — XPM has no built-in Google Drive integration. You can keep client folders in Drive alongside XPM and switch between tabs, or use a third-party tool that brings your Drive folders into the Practice Manager screen. XTK does the latter for Google Drive, OneDrive and SharePoint.",
      },
      {
        q: "Does XPM keep version history for documents?",
        a: "No. XPM's Documents tab does not keep document version history, which is why filenames in practice folders tend to carry version information instead. Storing files in Google Drive, OneDrive or SharePoint gives you that provider's own file history.",
      },
      {
        q: "Do I have to migrate my existing client folders?",
        a: "It depends which option you choose. Moving to a practice DMS means a migration project. Staying on your own cloud storage — with or without a layer on top of it — means no migration, because the files never move. XTK adopts an existing client folder by name rather than creating a duplicate.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Posts for the index, newest first. */
export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Other posts to suggest under an article. Curated `relatedSlugs` win; without
 * them, fall back to same category first, then newest.
 */
export function getRelatedPosts(slug: string, count = 2): Post[] {
  const current = getPost(slug);
  const others = getAllPosts().filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, count);
  if (current.relatedSlugs?.length) {
    return current.relatedSlugs
      .map((s) => getPost(s))
      .filter((p): p is Post => p !== undefined && p.slug !== slug)
      .slice(0, count);
  }
  return [
    ...others.filter((p) => p.category === current.category),
    ...others.filter((p) => p.category !== current.category),
  ].slice(0, count);
}

/**
 * The post's declared non-post related links, in declaration order. Mirrors
 * `getRelatedLinks` in lib/guides/index.ts.
 */
export function getPostRelatedLinks(slug: string): RelatedLink[] {
  return getPost(slug)?.relatedLinks ?? [];
}
