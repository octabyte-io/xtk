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
      alt: "Two columns: what Practice Manager runs — jobs, time, WIP, invoicing — beside the half it is silent on, where documents sit in a Drive nobody tidies, signatures in a separate e-sign tool, client requests scattered across inboxes and templates retyped client by client",
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
        text: [
          "We made one decision early that shaped everything else: XTK doesn't store your documents. Files live in your practice's Google Drive, under your ownership, ",
          { text: "your retention rules", href: "/blog/how-long-accountants-keep-client-records" },
          " and your existing backup story. XTK organises and connects — it doesn't become another silo you'd have to migrate out of one day.",
        ],
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
      alt: "Two sequences compared: signature season as it is, in six steps across two tools, ending in trying to remember whose letter is unsigned — and the same job from the client record in four, ending with the signed PDF and its certificate filing themselves",
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
        text: [
          "Every request carries a tamper-evident audit trail — who viewed, who signed, when and from where — captured in the completion certificate stored alongside the signed document, in your own storage, for ",
          { text: "as long as you have to keep it", href: "/blog/how-long-accountants-keep-client-records" },
          ".",
        ],
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
      alt: "A folder tree two levels deep — one client folder named from the Practice Manager record, a 2026 year folder, and evergreen Engagement, Identity and Correspondence folders — with a Misc folder crossed out, beside the three properties that make a structure survive: predictable, shallow, automatic",
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
          [
            "A year folder (2026) for anything tied to a period — accounts, returns, workpapers. It doubles as a retention control, because ",
            { text: "how long you have to keep each file", href: "/blog/how-long-accountants-keep-client-records" },
            " is only legible from the folder name once everyone involved has left.",
          ],
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
      alt: "Two paths for the same client: four gates before a portal — create a password, forget it, verify your device, download the app — ending in a photo of a bank statement emailed instead, above a single-gate path where a link from the request lets them prove their email address and get in",
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
      alt: "Placeholders resolving against a client record: [CLIENT:NAME] filling as ACME Trading Ltd, a postal address, the primary contact's name, a custom GST period field and today's date — with a note that a primary-contact placeholder resolves to nothing if no contact is flagged primary in Practice Manager",
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
      alt: "The four options laid along an axis measuring distance from the client record — Practice Manager's own Documents tab and a layer over your own drive together in the client record, a cloud drive a tab away, and a practice document management system a whole system away — each labelled with what it costs you",
    },
    relatedSlugs: [
      "document-management-for-xero-practices-compared",
      "stop-chasing-clients-for-documents",
      "accounting-client-onboarding-checklist",
      "how-long-accountants-keep-client-records",
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
          [
            "Nothing client-facing. There is no portal and no upload link, so collecting records means asking for email attachments — and a file that arrives in an inbox has to be filed by a human before it counts as filed at all. That is ",
            {
              text: "a chase you can design out",
              href: "/blog/stop-chasing-clients-for-documents",
            },
            ".",
          ],
          [
            "No signing. Engagement letters leave for a separate e-signature tool and come back by hand, which means the signed copy lands wherever the person who downloaded it put it — and the ",
            {
              text: "audit trail you would need in a dispute",
              href: "/blog/esignature-legality-for-accountants",
            },
            " lands there too.",
          ],
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
        text: [
          "SuiteFiles, FYI, Virtual Cabinet, Nimbus, Workiro — or a practice platform such as Karbon or TaxDome that absorbs documents into a wider workflow suite. You get proper filing, retention controls, portals, signing and audit trails, designed by people who have seen a lot of accounting practices. What each one costs, and which firm it suits, is ",
          {
            text: "worth reading with the prices side by side",
            href: "/blog/document-management-for-xero-practices-compared",
          },
          ".",
        ],
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
        text: [
          "What you give up is the depth of a mature DMS: no retention engine, no records-management policy enforcement, and you need a Google or Microsoft storage account for it to sit on top of. The trade is that ",
          { text: "the retention period runs against storage you own", href: "/blog/how-long-accountants-keep-client-records" },
          " rather than a vendor's, enforced by policy rather than by software. This is the category XTK is in, and the honest summary is that it suits small-to-mid Xero-centric firms who want the gaps closed without moving anything.",
        ],
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
          "One rule matters more than the rest, and it is free: one folder per client entity, named exactly as that client is named in XPM. That name is the only key your two systems share, so the moment “ACME Trading Ltd” also exists as “Acme” and “ACME (new)”, no amount of tooling will reconcile them. Getting it right the once, when the client is created, is ",
          {
            text: "the first step of onboarding for a reason",
            href: "/blog/accounting-client-onboarding-checklist",
          },
          ". The ",
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
  {
    slug: "stop-chasing-clients-for-documents",
    title: "How to stop chasing clients for documents: a five-step request system",
    excerpt:
      "Clients don't stall because they're disorganised. They stall because the request names categories instead of items, leaves the destination undefined, and never shows them what's left.",
    date: "2026-08-04",
    readingTime: "11 min read",
    category: "Practice tips",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/stop-chasing-clients-for-documents/og.png",
    thumbnail: {
      src: "/images/blog/stop-chasing-clients-for-documents/thumb.png",
      alt: "The same request written two ways: a vague paragraph asking for “your 2025 records”, annotated with the five reasons requests stall, beside an itemised checklist naming periods and formats, three of seven items marked provided and the rest outstanding, with one upload link",
    },
    relatedSlugs: [
      "xero-practice-manager-document-management",
      "client-portals-clients-actually-use",
      "accounting-client-onboarding-checklist",
    ],
    relatedLinks: [
      {
        label: "Request documents from clients in Xero Practice Manager",
        href: "/guides/document-requests",
      },
      {
        label: "Email templates: write once, reuse for invites and requests",
        href: "/guides/email-templates",
      },
      {
        label: "XTK notifications: the bell, settings and desktop alerts",
        href: "/guides/notifications",
      },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "Chasing clients for documents is a design problem, not a motivation problem. Requests that stall share three traits: they name categories instead of items (“your 2025 records”), they leave the destination to the client, and they never show the client what is still missing. Fix those three and most of the follow-up disappears. What follows is the system, two request lists you can copy, and the part no system fixes.",
      },
      {
        type: "p",
        text: "None of it requires software. The five steps work in a Word document and an email, and are worth doing that way before you buy anything: a tool that automates a badly written request only sends the ambiguity faster.",
      },
      {
        type: "h2",
        text: "Why clients stall on document requests, and why it isn't laziness",
      },
      {
        type: "p",
        text: "Clients stall because the request doesn't tell them what finished looks like. Someone asked for “your 2025 records” has to do your job before they can do theirs: decide what counts, decide what's enough, decide where to put it. Given an unbounded task and no finish line, most people postpone. Five failures cause almost all of it, and each has its fix in the wording rather than the tone of the follow-up.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "The ask is a category, not a list. “Bank statements” is a research project. “2025 bank statements, 1 July to 30 June, every account” is an instruction.",
          "The ask is buried in a paragraph. Nobody reading email on a phone works through prose looking for their obligations. Put the items on separate lines so there is something to tick off.",
          "The destination is undefined. If you don't say where, the answer is a reply with attachments — and the file now sits in an inbox, where somebody has to file it before it counts as received.",
          "There is no visible progress. A client who has sent four of seven things cannot tell which three are outstanding, so they wait to be told.",
          "The chase is a personal decision. Somebody has to notice, decide to nag and find the words, so it happens late, inconsistently, and to the politest clients last.",
        ],
      },
      {
        type: "p",
        text: [
          "This is not a niche complaint. In Financial Cents' ",
          {
            text: "2024 State of Accounting Workflow Automation report",
            href: "https://financial-cents.com/resources/articles/2024-report-state-of-accounting-workflow-automation/",
          },
          " — 367 accounting and bookkeeping professionals surveyed between November 2023 and January 2024 — “getting info and documents from clients carried the crown” as the biggest workflow challenge, named by 65.2% of respondents, and 52.4% said documents arrived “after several days”. So the problem is close to universal, which means it is not your client list, and it is measured in days, which makes it a cycle time you can shorten.",
        ],
      },
      {
        type: "quote",
        text: "A client who postpones your request isn't refusing. They are waiting for the request to become small enough to finish.",
      },
      {
        type: "h2",
        text: "The five-step system for collecting client documents",
      },
      {
        type: "p",
        text: "Write the request as a list of items, standardise the list per job type, give exactly one destination, make the state visible to both sides, and make the follow-up a routine rather than a decision. Each step removes a specific reason a request stalls, and they compound: the standardised list is what makes the other four cheap enough to do every time, including on the jobs you are already late on.",
      },
      {
        type: "h2",
        text: "1. Write the request as a list of items, not a sentence",
      },
      {
        type: "p",
        text: "One line per document, each specific enough that the client cannot get it wrong. The test: could a reasonable person hand you something and then be told it was the wrong thing? If so, the item is underspecified. “Bank statements” fails. “2025 bank statements, 1 July to 30 June, all accounts, PDFs from the bank rather than screenshots” passes. Give the period as dates, name the format where format matters, and say how many you expect.",
      },
      {
        type: "h2",
        text: "2. Standardise the list per job type, not per client",
      },
      {
        type: "p",
        text: [
          "Build the list once for each recurring engagement — annual accounts, individual tax return, a BAS or VAT return, ",
          {
            text: "onboarding a new client",
            href: "/blog/accounting-client-onboarding-checklist",
          },
          " — and reuse it. This is the step that compounds, and it is why ad-hoc requests never improve: a list written from scratch under deadline pressure is always the vague version. A standard list also gets better on its own, because every “actually, we also need…” becomes a permanent line rather than a lesson one person privately learns.",
        ],
      },
      { type: "h2", text: "3. Give exactly one destination, and make it a link" },
      {
        type: "p",
        text: "One upload link per request, landing in the client's own folder. No “reply with attachments”, no “or drop it in Dropbox, whatever's easiest”. Every alternative you offer is a decision the client has to make and another place your team has to look. It also settles who does the filing: a file arriving through a link you control is already in the right folder. If you offer email as a fallback, you have chosen email.",
      },
      { type: "h2", text: "4. Make the state visible to both sides" },
      {
        type: "p",
        text: "Every item should read outstanding or provided, to you and to the client, on the same screen. This removes more email than any other single change, because most of that email is the two sides asking each other for a status — “did you get the statements?”, “sorry, which ones are you waiting on?”. A visible count changes behaviour too: three of seven provided is an unfinished task, and people finish unfinished tasks.",
      },
      { type: "h2", text: "5. Make the follow-up a routine, not a decision" },
      {
        type: "p",
        text: "Decide the cadence before you send anything — a nudge at day three, another at day seven, a phone call at day fourteen — and put it somewhere that isn't one person's memory. A recurring calendar block twice a week, in which somebody opens the list of open requests and works down it, is the entire mechanism. It is deliberately boring. Nobody has to decide to chase, so nobody has to feel rude, and the politest clients stop being chased last.",
      },
      {
        type: "p",
        text: "Be clear-eyed about which tools automate that step. Plenty of document-collection products send reminder sequences on your behalf. XTK does not: it has no scheduler and no automatic reminders of any kind, so following up is an action somebody takes. If unattended reminder sequences are what you are shopping for, buy a product that has them.",
      },
      { type: "h2", text: "A worked annual accounts request list you can copy" },
      {
        type: "p",
        text: "An annual accounts list written to the standard above. It reads Australian — swap the balance date and the tax references for your jurisdiction — and it assumes the bookkeeping is already in Xero, so it asks only for what Xero cannot tell you.",
      },
      {
        type: "list",
        items: [
          "Bank statements for the year ended 30 June 2026 — every business account, including any closed during the year, as PDFs from the bank rather than screenshots.",
          "Loan, lease and hire purchase statements as at 30 June 2026, showing each closing balance and the interest charged for the year.",
          "Credit card statements for the full year, every card used for business — including personal cards used for business purchases.",
          "The signed contract or schedule for any new loan, lease or hire purchase taken out during the year.",
          "Stocktake figure at 30 June 2026, with the count sheets behind it.",
          "Invoices for every asset bought or sold during the year over $1,000, plus the sale or trade-in figure for anything disposed of.",
          "Motor vehicle logbook for each vehicle claimed, or written confirmation that last year's logbook still holds.",
          "Home office details, if you claim it: work floor area, total floor area, and the year's rates, interest, insurance and power bills.",
          "Confirmation that every BAS period for the year has been lodged, and a copy of the most recent one.",
          "Payroll: the finalised single touch payroll declaration, and any wages paid to family members including hours worked.",
          "Anything you paid for personally on the business's behalf and haven't been reimbursed for — date, amount, purpose.",
          "Details of any dividends, trust distributions or loans between related entities during the year.",
        ],
      },
      {
        type: "p",
        text: "Twelve items, no prose, nothing to interpret, and every line survives being read on a phone. The thresholds and dates are one practice's conventions rather than tax rules, so set them to what your firm uses. Note what the list never does: explain why you need each thing. Explanations belong in the covering message, because the item names are what the client scans.",
      },
      { type: "h2", text: "A request list for an individual tax return" },
      {
        type: "p",
        text: "Same discipline, shorter list — a salaried individual with an investment property, which is a large share of most practices' individual work.",
      },
      {
        type: "list",
        items: [
          "Income statement or payment summary for the year ended 30 June 2026, from every employer.",
          "Annual interest summary from every bank account that earned interest.",
          "Dividend statements for each holding, or the annual tax statement from your broker or share registry.",
          "Annual tax statements for any managed funds or trusts you hold units in.",
          "Rental property: the annual statement from your agent, or a rent received summary if you manage it yourself.",
          "Rental property expenses: council rates, water, insurance, body corporate, repairs, and the loan interest statement.",
          "Depreciation schedule for the rental property — last year's, or the quantity surveyor's report if this is the first year.",
          "Private health insurance annual tax statement.",
          "Work-related expenses: a list with dates, amounts and what each was for, plus the receipts you have.",
          "Receipts for donations to registered charities.",
          "Anything sold during the year — shares, crypto or property: the purchase contract, the sale contract, both dates.",
          "Last year's tax return, if another firm prepared it.",
        ],
      },
      {
        type: "h2",
        text: "What to do about the clients who still don't respond",
      },
      {
        type: "p",
        text: "No request design fixes everyone. Roughly one client in ten needs escalating whatever you send, so decide the tiers in advance — the point is that the escalation isn't a mood.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Put a real deadline in the request itself, as a date rather than “as soon as possible”. The deadline clients act on is the one with a reason attached: the date you need it by to lodge on time, not the statutory date.",
          "After the second nudge, phone them. Voice beats email for the last ten per cent, and a two-minute call usually surfaces the real blocker — they can't find the bank login, they think they already sent it, or item four doesn't exist and nobody told you.",
          "State the consequence, tied to a real constraint. “We can't lodge by 15 May without item 4, and the penalty after that is the tax office's rather than ours” is information. “Please respond urgently” is noise.",
          "For the chronic ones, change the commercial arrangement rather than the wording. Price the extra work, or move them to a later slot so their lateness costs them their preferred date instead of your weekend. A client who takes six weeks to send bank statements every year isn't a communication problem — that is what they cost.",
        ],
      },
      {
        type: "p",
        text: "One thing worth removing rather than escalating: the apology. A practice that opens its third follow-up with “so sorry to chase again” has taught the client that chasing is the practice's problem to feel bad about. It isn't.",
      },
      { type: "h2", text: "Where the uploaded files should land" },
      {
        type: "p",
        text: [
          "Straight into the client's folder in your practice's own storage, named so the next person recognises it without opening it. Files that arrive in an inbox get filed twice or not at all, and twice is worse — two versions, and no way to know which one the reviewer read. What that structure should look like is ",
          {
            text: "worth settling once",
            href: "/blog/organise-client-documents-google-drive",
          },
          ", and where the folder itself should live is ",
          {
            text: "a decision with four honest answers",
            href: "/blog/xero-practice-manager-document-management",
          },
          ".",
        ],
      },
      { type: "h2", text: "How XTK handles document requests" },
      {
        type: "p",
        text: [
          "In XTK, ",
          { text: "a document request", href: "/guides/document-requests" },
          " is a checklist you send from the client you already have open in Xero Practice Manager. You list the items, XTK emails one link, and the client uploads against each line — no account, no password, nothing to install. Because the panel opens inside XPM, the recipient's email arrives prefilled from the client's record, so nothing is re-keyed.",
        ],
      },
      {
        type: "p",
        text: [
          "Files travel from the client's browser into that client's folder in ",
          {
            text: "your own Google Drive, OneDrive or SharePoint",
            href: "/guides/manage-client-documents",
          },
          ", and each item flips from outstanding to provided as they land. One detail nothing else documents: a file uploaded against a requested item is renamed in your storage to that item's name, so “IMG_4471.HEIC” against “Motor vehicle logbook” becomes “Motor vehicle logbook.HEIC”. Precise item names buy a tidy folder as well as a clear request — and a folder you can still audit years later, when ",
          { text: "the retention period on those records", href: "/blog/how-long-accountants-keep-client-records" },
          " is the only reason you are opening it. Extras keep their original names, and the link expires after 30 days.",
        ],
      },
      {
        type: "p",
        text: [
          "Filter that client's request list to Sent and In progress and you have the working set for the calendar block in step five. ",
          { text: "Notifications", href: "/guides/notifications" },
          " tell you when a client submits and when a request expires, request wording lives in ",
          { text: "email templates", href: "/guides/email-templates" },
          ", and the mail sends from ",
          {
            text: "your practice's shared Gmail or Outlook",
            href: "/guides/connect-your-email",
          },
          ".",
        ],
      },
      {
        type: "callout",
        title: "What XTK does not do here",
        text: "No scheduled reminders and no automated follow-up. Nudging is a manual “Resend email”, with two edges: it mints a fresh link, so the one you emailed earlier stops working, and it sends XTK's own wording — “Reminder: documents requested” plus whichever optional message you stored — not the email you composed. It does not extend the 30-day deadline.",
      },
      {
        type: "p",
        text: [
          "Two caveats before you decide anything. Client uploads pass from the browser to Google or Microsoft directly, but downloads, PDF merges, template generation and signature flattening stream through XTK's backend in flight — nothing written to disk or kept — and “Convert to PDF” hands that one file to CloudConvert, an external service; ",
          {
            text: "the full account of what moves where",
            href: "/guides/how-xtk-handles-your-data",
          },
          " is a guide of its own. XTK is one flat ",
          { text: "$59 a month for the whole practice", href: "/pricing" },
          " after a 30-day trial, and ",
          {
            text: "installs from the Chrome Web Store or Firefox Add-ons",
            href: "/get-started",
          },
          ".",
        ],
      },
      { type: "h2", text: "The one number worth tracking" },
      {
        type: "p",
        text: "Measure the days from request sent to request complete, take the median, and track it across one busy season. It is the only number that tells you whether any of this worked, and it doesn't care how polite the follow-ups were. Practices that measure it are surprised twice: by how long the median is, and by how much of it sits between “sent” and “first file” — precisely the part the wording controls. If it doesn't move, look at the request again before you look at the clients.",
      },
      {
        type: "callout",
        title: "XTK and Xero",
        text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited. Prices, product limits and store availability described here were correct as of August 2026.",
      },
    ],
  },
  {
    slug: "esignature-legality-for-accountants",
    title: "E-signature legality for accountants, by jurisdiction",
    excerpt:
      "An e-signed engagement letter is enforceable in every major Xero market, and has been for two decades. The harder question is evidence: what your audit trail can actually prove if a client denies signing.",
    date: "2026-08-04",
    readingTime: "13 min read",
    category: "Practice tips",
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
          { text: "The walkthrough is a post of its own", href: "/blog/e-signatures-inside-xpm" },
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
  },
  {
    slug: "accounting-client-onboarding-checklist",
    title: "The accounting client onboarding checklist: seven steps",
    excerpt:
      "A new client should be signed up, filed, invited and asked for records within a day of accepting your proposal. Here are the seven steps, the two waits that are legitimate, and the templates that make it repeatable.",
    date: "2026-08-04",
    readingTime: "14 min read",
    category: "Guides",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/accounting-client-onboarding-checklist/og.png",
    thumbnail: {
      src: "/images/blog/accounting-client-onboarding-checklist/thumb.png",
      alt: "The onboarding timeline as ten rows, each with its elapsed time and who it waits on — eight of them the practice's own work, with rows one to four bracketed as a single ninety-minute sitting, and only two rows, the client signing and the records arriving, waiting on anybody outside the practice",
    },
    relatedSlugs: [
      "xero-practice-manager-document-management",
      "stop-chasing-clients-for-documents",
      "stop-retyping-client-data",
    ],
    relatedLinks: [
      { label: "Folder templates", href: "/guides/folder-templates" },
      {
        label: "Document templates in Xero Practice Manager",
        href: "/guides/document-templates",
      },
      {
        label: "Send documents for e-signature",
        href: "/guides/send-documents-for-signature",
      },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "A new client should be fully set up — engagement letter signed, folder structure created, portal access live and the first records requested — within one working day of accepting your proposal. That assumes exactly two things: your templates are already built, and the client answers their email. What turns one day into three weeks is never the volume of work. It is four handoffs and two waits.",
      },
      {
        type: "p",
        text: "The actual labour in onboarding a company client comes to under two hours: check the entity details, create the folders, produce the engagement letter, send it, invite the client, ask for last year's records, schedule the jobs. Now count the elapsed time in your own practice. The gap between those two numbers is the subject of this article.",
      },
      {
        type: "p",
        text: "Below are the seven steps, each with the place it usually stalls and what removes the stall — then a timeline that makes the one-day claim checkable, the five templates that make it repeatable, and a checklist you can paste into your own process document.",
      },
      { type: "h2", text: "What does “onboarded” actually mean?" },
      {
        type: "p",
        text: "Onboarded means a specific list of things is true — and most practices have never written the list down, which is why onboarding drifts. Define done as a target state rather than a set of activities and the process becomes checkable by anyone, including the person who joined last week.",
      },
      {
        type: "list",
        items: [
          "Client and contacts in Practice Manager, with the correct legal entity name and one contact flagged as primary.",
          "A signed engagement letter for the current period, filed in the client's folder.",
          "Anti-money-laundering and identity checks complete where your jurisdiction requires them, with the evidence filed.",
          "A folder structure that matches every other client of the same type.",
          "Prior-year records received — accounts, tax returns, ledgers, permanent documents — not promised.",
          "Software access granted, and confirmed by somebody in your practice logging in.",
          "One named owner in the practice, and the client told who it is.",
          "Recurring jobs scheduled in Practice Manager with real dates.",
        ],
      },
      {
        type: "p",
        text: "Notice how few of those are documents and how many are states. “Sent the client a request” and “have the records” are not the same fact, and only one means you can start work.",
      },
      { type: "h2", text: "The seven steps, and where each one stalls" },
      {
        type: "p",
        text: "Each step has one characteristic failure, and in five of the seven it is a person deciding something that should already have been decided. The exceptions are the two waits — the client signing and the client uploading — which are legitimate.",
      },
      { type: "h2", text: "Step 1 — get the client record right, once" },
      {
        type: "p",
        text: "Enter the entity name exactly as it will appear on every document, because every later step copies it from here. The client record is the origin of the folder name, the engagement letter, the portal invitation and the request email, so a name typed in a hurry has to be corrected in all four.",
      },
      {
        type: "p",
        text: [
          "Where it stalls: a placeholder name — “Smith (new)”, or “ABC Trading” for A.B.C. Trading Pty Ltd — typed while somebody waits for the constitution. Remove it by treating three fields as blocking: the legal entity name, the primary-contact flag, and each contact's own email rather than a shared office address. If your letters read anything else — a balance date, a GST period — put it in a custom field now. The ",
          {
            text: "argument for never retyping any of it",
            href: "/blog/stop-retyping-client-data",
          },
          " starts here.",
        ],
      },
      { type: "h2", text: "Step 2 — create the folder structure from a template" },
      {
        type: "p",
        text: "Apply a saved skeleton rather than building folders by hand. The value is not the seconds you save; it is that the fifteenth client of the year has the same structure as the first, so anyone can find last year's workpapers without knowing who filed them.",
      },
      {
        type: "p",
        text: [
          "Where it stalls: the person onboarding invents the structure. Two people onboarding two clients in one week produce “2026 Tax” and “FY26 — Tax”, and neither is wrong, which is what makes it unfixable a year later. Remove it by keeping one named ",
          { text: "folder template", href: "/guides/folder-templates" },
          " per client type in a shared library.",
        ],
      },
      {
        type: "h2",
        text: "Step 3 — generate the engagement letter, don't rewrite it",
      },
      {
        type: "p",
        text: "Produce the letter from a template that reads the client record, not from the last client who looked similar. A generated letter cannot carry the previous client's name in paragraph two — the most common embarrassment in practice correspondence, and the hardest to catch, because the document is otherwise perfect.",
      },
      {
        type: "p",
        text: [
          "Where it stalls: somebody opens last year's letter for a comparable client and starts editing a copy. It works, it takes twenty minutes, and it fails about one time in fifteen. Remove it with one ",
          { text: "document template", href: "/guides/document-templates" },
          " per service line, with the entity name, addresses, contacts and dates as ",
          { text: "placeholders", href: "/guides/placeholder-reference" },
          ". One warning for the build: a primary-contact placeholder resolves to nothing at all if no contact is flagged as primary in Practice Manager, which is why step 1 treats that flag as blocking.",
        ],
      },
      { type: "h2", text: "Step 4 — send it for signature in the right order" },
      {
        type: "p",
        text: [
          "Send the letter for signature within the hour you generate it, with each signer's fields placed for them and the order set. Print, scan, sign and post adds two days and a scanner queue for no compliance benefit — an e-signed engagement letter is valid in every jurisdiction an accounting practice is likely to work in, on ",
          {
            text: "terms worth understanding rather than assuming",
            href: "/blog/esignature-legality-for-accountants",
          },
          ".",
        ],
      },
      {
        type: "p",
        text: "Where it stalls: the letter goes out as an attachment with “please print, sign and return”. Remove it by sending a signing link that needs no account, and by setting the order explicitly where two directors sign — one first, then the other — rather than both at once with neither knowing whether the other has done it.",
      },
      { type: "h2", text: "Step 5 — file the signed letter where the work is" },
      {
        type: "p",
        text: [
          "The completed letter belongs in the client's folder, beside everything else about that client. If it lives in a signing tool's dashboard, or the inbox of whoever downloaded it, then in eleven months nobody finds it and somebody asks the client to sign a fresh one. The wider question of ",
          {
            text: "where client documents should live",
            href: "/blog/xero-practice-manager-document-management",
          },
          " has four common answers.",
        ],
      },
      {
        type: "p",
        text: [
          "Where it stalls: the signed PDF is an email attachment, so filing it competes with the next client. Remove it with a ",
          {
            text: "signing flow that files the result itself",
            href: "/guides/send-documents-for-signature",
          },
          ". Be precise about what the result is: one file per document — the flattened PDF with every field value stamped in and the Certificate of Completion appended as its final page — saved alongside the original, which is never altered or replaced. One artefact to file, not two to keep together.",
        ],
      },
      {
        type: "h2",
        text: "Step 6 — invite them to the portal and ask for records the same day",
      },
      {
        type: "p",
        text: [
          "Send the ",
          { text: "portal invitation", href: "/guides/set-up-client-portal" },
          " and the first ",
          { text: "records request", href: "/guides/document-requests" },
          " within an hour of the signature, not after the internal kick-off meeting. This is the single biggest timing change available to you and it costs nothing: the client has just signed, they are thinking about you, and the request lands while that is still true. Ask a week later and you are competing with their actual job.",
        ],
      },
      {
        type: "p",
        text: [
          "Where it stalls: the practice waits to be internally ready before asking the client for anything. Remove it by making the ask a template — a standing first-request checklist per engagement type. Then chase on a habit rather than on hope: assume nothing sends the reminder for you, so “check what is still outstanding” belongs on a named person's Monday list. ",
          {
            text: "The mechanics of not chasing clients",
            href: "/blog/stop-chasing-clients-for-documents",
          },
          " are a read of their own.",
        ],
      },
      { type: "h2", text: "Step 7 — schedule the work and name an owner" },
      {
        type: "p",
        text: "Create the recurring jobs in Practice Manager with real dates, and write one person's name against the client. Jobs, time and deadlines already live in XPM and that is where they should stay — this is not a document problem, and no document tool should own it.",
      },
      {
        type: "p",
        text: "Where it stalls: nobody owns the client until the first deadline, at which point ownership falls to whoever notices. Remove it by making the owner a field somebody has to fill before onboarding can be closed, and by naming that person in the welcome email. A client who knows who to email does not email five people.",
      },
      { type: "h2", text: "How long should client onboarding take?" },
      {
        type: "p",
        text: "One working day from accepted proposal to records requested, and two days to a week until the records are in. Both figures assume the five templates below already exist and that the client replies — those assumptions are doing real work, so here is the sequence with the waiting made explicit.",
      },
      {
        type: "table",
        head: ["Step", "Elapsed time", "Waiting on"],
        rows: [
          ["1. Client record", "Day 1, hour 1", "You"],
          ["2. Folder structure", "Day 1, hour 1", "You"],
          ["3. Engagement letter", "Day 1, hour 1", "You"],
          ["4. Sent for signature", "Day 1, hour 2", "You"],
          ["Client signs", "Hours to 2 days", "The client"],
          ["5. Signed letter filed", "On completion", "Nobody"],
          ["6. Portal invitation", "Same hour", "You"],
          ["6. Records requested", "Same hour", "You"],
          ["7. Jobs and owner set", "Day 1, hour 3", "You"],
          ["Records arrive", "2 days to 1 week", "The client"],
        ],
        caption:
          "The two rows that name the client are the only legitimate waits. Every other row is work your practice controls, and rows 1 to 4 are one sitting rather than four days.",
      },
      {
        type: "p",
        text: "Two properties matter more than the times. Only two rows wait on anybody outside the practice, and both begin on day one — starting them early is the only lever you have. And steps 1 to 4 are a single sitting of about ninety minutes; they look like separate days only when each is a different person's job.",
      },
      {
        type: "p",
        text: "So if your elapsed time is three weeks, it is not because a row is slow. It is because rows 1 to 4 are spread across three people and two calendars.",
      },
      { type: "h2", text: "Which five templates are worth building first?" },
      {
        type: "p",
        text: "Five, and they are the same five in every practice. Build them once and onboarding becomes a sequence of choices. Skip them and every new client is a small design project, improvised under time pressure by whoever picked up the file.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "A folder skeleton per client type — company, trust, partnership, individual. Four small templates beat one that covers all four with folders most clients never use.",
          "An engagement letter per service line, with the entity name, addresses, contacts and dates as placeholders rather than typed text.",
          "A welcome email that names the client's owner in your practice, says what happens next and by when, and sets one expectation about how you will ask for things.",
          "A standard first document request per engagement type — the records you always need for a company year-end or a trust distribution — as a reusable checklist rather than a remembered list.",
          "A portal invitation message, because “you have been invited to a portal” is not a sentence that earns a login.",
        ],
      },
      {
        type: "p",
        text: [
          "The cost of not having them is measurable: time one person onboarding one client from a blank page, honestly, including the interruptions. It is most of a day. The five take an afternoon between them, and two — the welcome email and the invitation — are ",
          { text: "email templates", href: "/guides/email-templates" },
          " picked from a dropdown after that.",
        ],
      },
      {
        type: "h2",
        text: "What should you standardise, and what should you leave alone?",
      },
      {
        type: "p",
        text: "Standardise structure, wording and sequence. Leave judgement alone. The distinction is not philosophical — it is the difference between a process people follow and one they quietly abandon in the second month.",
      },
      {
        type: "list",
        items: [
          "Standardise: folder names, letter wording, the order of the steps, who is asked for what, and the point at which onboarding counts as finished.",
          "Leave to a human: the scope of the engagement, the fee, the risk assessment, whether the client's records are in a state you can work with, and whether to take the client at all.",
        ],
      },
      {
        type: "p",
        text: "A process that tries to automate the second list gets ignored, because the first time it produces a wrong answer the person holding the file has to override it — and once you have overridden a process, you are no longer using it. A template that produces a draft for a human to approve survives for years; a workflow that decides a fee does not survive its first unusual client.",
      },
      { type: "h2", text: "How does this look in XTK?" },
      {
        type: "p",
        text: "XTK runs the middle five steps inside the Practice Manager tab you already have open, against the client already on screen — an extension panel backed by your practice's own Google Drive, OneDrive or SharePoint, so nothing is re-keyed and no files move.",
      },
      {
        type: "p",
        text: "Steps 2 and 3 are templates. A folder template is a saved tree of folder names your practice shares, applied from the client's Documents tab; folders are matched by name, so re-applying fills gaps rather than duplicating anything, and “FY[DATE:yyyy] — Tax” resolves to the current year as it is created. A document template is a .docx you upload once with placeholders where client data belongs: [CLIENT:NAME], [CLIENT:POSTAL:ADDRESS], [CONTACT:PRIMARY:NAME] and [DATE] fill from the client's live XPM details as you generate, and a custom field defined in XPM is readable as [CUSTOM:GST Period]. Every value lands in a fill dialog you review first; anything left empty is stamped as its literal token.",
      },
      {
        type: "p",
        text: "Steps 4 and 5 are one motion. The generated PDF goes for signature from the same panel — fields placed per recipient, signers arranged into steps so two directors sign in sequence rather than at once, and an emailed link needing no client account. When the last signs, XTK produces one new file per document: the flattened PDF with the Certificate of Completion appended as its final page, filed beside the original, which is never replaced.",
      },
      {
        type: "p",
        text: "Step 6 goes from the same place, through your shared practice Gmail or Outlook in your branded email shell. A document request is a checklist behind a link with no account attached; items flip from Outstanding to Provided as files land in the client's folder, and a file uploaded against an item is renamed to that item's name, so the naming convention stays yours. Two honest notes: there are no scheduled reminders anywhere in the product, and resending a request mints a fresh link, killing the one you sent before.",
      },
      {
        type: "p",
        text: [
          "Two things XTK does not do, and they are the point rather than an omission. It does not create the client record in Practice Manager and it does not schedule jobs — XPM owns both, and XTK reads the client you have open rather than keeping a second client list. Nor does it do anti-money-laundering or identity verification; that stays wherever your practice does it today. Everyone you ",
          { text: "invite to your team", href: "/guides/invite-your-team" },
          " shares the same templates, folders and portals on one subscription rather than per seat — ",
          { text: "$59 a month for the practice", href: "/pricing" },
          ", after a 30-day trial.",
        ],
      },
      {
        type: "p",
        text: [
          "One hedge worth carrying: uploads travel from the browser straight to Google or Microsoft, but downloads, PDF merges, template generation and signature flattening stream through XTK's backend in flight, and “Convert to PDF” hands that one file to CloudConvert, an external service. The ",
          {
            text: "full account of what moves where",
            href: "/guides/how-xtk-handles-your-data",
          },
          " is worth reading first. And if you are choosing between products rather than fixing a process, the ",
          {
            text: "comparison of the options for a Xero practice",
            href: "/blog/document-management-for-xero-practices-compared",
          },
          " is the better starting point.",
        ],
      },
      {
        type: "callout",
        title: "The ten-minute version",
        text: [
          "If you do one thing from this article, build one ",
          { text: "folder template", href: "/guides/folder-templates" },
          " for your most common client type. Ten minutes, and step 2 is gone permanently — the letter is generated straight into a folder that already exists.",
        ],
      },
      { type: "h2", text: "The client onboarding checklist" },
      {
        type: "p",
        text: "Here is the whole process as one list, in order. It assumes the five templates exist; if they do not, build those first and this list becomes a day's work rather than a fortnight's.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Confirm the legal entity name and enter it in Practice Manager exactly as it will appear on documents.",
          "Add every contact with their own email address, and flag one as the primary contact.",
          "Fill the custom fields your templates read — balance date, GST period, industry — before generating anything.",
          "Apply the folder template for this client type.",
          [
            "Complete anti-money-laundering and identity checks where required, and file the evidence in the permanent folder — its ",
            { text: "retention clock starts when the client leaves", href: "/blog/how-long-accountants-keep-client-records" },
            ", not when you did the work.",
          ],
          "Generate the engagement letter from the template for this service line, and read it once.",
          "Send it for signature, with the signers in the order they should sign.",
          "Confirm the completed letter is filed in the client's folder — not in an inbox.",
          "Invite the client's contacts to the portal, checking the primary email on the client record first — that is the address a first invitation goes to.",
          "Send the standard first document request, addressed to whoever holds the records rather than whoever signed.",
          "Request access to the ledger, payroll and other software, and log in once to confirm it works.",
          "Schedule the recurring jobs in Practice Manager with real dates.",
          "Write the owner's name against the client, and tell the client who it is.",
          "Send the welcome email: who owns the relationship, what happens next, and by when.",
          "Put a date in one named person's calendar to check what is outstanding — nothing chases for you.",
          "Close onboarding only when the records are in and the first job has a date. Sent is not received.",
        ],
      },
      {
        type: "quote",
        text: "Sixteen lines, and only two of them wait on the client. Everything else waits on a decision somebody in the practice has already made once.",
      },
      { type: "h2", text: "The question to ask on Monday" },
      {
        type: "p",
        text: "How many days passed between your last new client saying yes and your practice having their records? Ask three people and see whether the answers agree. If nobody knows, that is the first thing to fix — more useful than any of the seven steps above, because a process nobody measures is one nobody can prove is broken.",
      },
      {
        type: "p",
        text: "The real number is usually worse than the partner's estimate and better than the junior's. Measure it for the next five clients and the bottleneck names itself. In most practices it is step 3 or step 6: nobody has a letter template, or nobody asks the client for anything until the internal meeting.",
      },
      {
        type: "callout",
        title: "XTK and Xero",
        text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited. The seven steps are a practice process rather than a product feature — the two that stay in Practice Manager, creating the client record and scheduling the jobs, are marked as such above.",
      },
    ],
  },
  {
    slug: "document-management-for-xero-practices-compared",
    title:
      "Document management for a Xero practice: five options, honestly compared",
    excerpt:
      "SuiteFiles, FYI, Karbon, Practice Manager's own tab, or the drive you already own. Five options with real prices, read from vendors' own pricing pages in August 2026, and a straight answer on which firm each one suits.",
    date: "2026-08-04",
    readingTime: "14 min read",
    category: "Practice tips",
    author: { name: "The XTK team", role: "Product" },
    ogImage:
      "/images/blog/document-management-for-xero-practices-compared/og.png",
    thumbnail: {
      src: "/images/blog/document-management-for-xero-practices-compared/thumb.png",
      alt: "Cost per person per month against practice headcount for three pricing shapes: per seat flat at about $59 a person at any size, banded per firm falling from about $70 to $29 and then stopping at price on application, and flat per practice falling from about $20 to $3 as the practice grows",
    },
    relatedSlugs: [
      "xero-practice-manager-document-management",
      "accounting-client-onboarding-checklist",
      "esignature-legality-for-accountants",
    ],
    relatedLinks: [
      { label: "Pricing", href: "/pricing" },
      {
        label: "How XTK handles your data",
        href: "/guides/how-xtk-handles-your-data",
      },
      {
        label: "Getting started with XTK",
        href: "/guides/getting-started-with-xtk",
      },
      { label: "Privacy Policy", href: "/legal/privacy" },
    ],
    body: [
      {
        type: "p",
        text: "There is no single best document management system for a Xero practice. There are five real options, and which one is right for you is decided by three things: where your client files live today, how many people need access and how part-time they are, and whether you have a compliance obligation that needs a formal system rather than a tidy one. This article prices all five, from each vendor's own pricing page, checked on 4 August 2026.",
      },
      {
        type: "p",
        text: [
          "The five, sorted by the kind of firm they suit rather than by quality: Practice Manager's own Documents tab; a cloud drive on its own; a full practice document management system such as SuiteFiles or FYI; a practice platform such as Karbon or TaxDome that absorbs documents into a wider workflow suite; and an extension layer that adds the missing pieces to the drive you already own. ",
          {
            text: "What XPM does natively and where it stops",
            href: "/blog/xero-practice-manager-document-management",
          },
          " is covered separately — this is the version with prices and vendor names in it.",
        ],
      },
      { type: "h2", text: "Who wrote this, and what we sell" },
      {
        type: "p",
        text: [
          "XTK makes one of the five options — the last one — so read this the way you would read any comparison written by a vendor. Two things make it useful anyway. Every competitor figure below was read from that vendor's own pricing page on 4 August 2026, with the page linked, and where a vendor publishes no price this article says so rather than repeating a third-party guess. Every “choose this if” is meant literally: three of the five are the better buy for some firms, and the sections below say which. If you want the ",
          {
            text: "top-funnel version without the pricing",
            href: "/blog/xero-practice-manager-document-management",
          },
          ", start there instead.",
        ],
      },
      { type: "h2", text: "Three questions that decide it for you" },
      {
        type: "p",
        text: "Answer these three before you look at a single feature list — they eliminate more options than feature lists ever will.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Where do your client files live today, and can you move them? A firm with eight years of files in SharePoint is looking at a migration project that will dominate every other consideration — and most DMS vendors quote migration separately from the subscription, so it is a second invoice as well as a second project.",
          "How many people need access, and how part-time are they? Per-seat pricing is comfortable at five full-timers and punitive at fifteen mixed-mode staff. Count the bookkeeper who works Tuesdays, the offshore preparer and the three weeks of seasonal help, because whoever you decline to buy a seat for keeps working in email.",
          [
            "Do you have a compliance obligation that needs a formal DMS? Enforced retention periods, ethical walls between engagement teams, audit-grade access logs. If you need those enforced by software rather than encouraged by policy, the lighter options are genuinely ruled out, and no price advantage changes that. Worth separating the two halves of that question first: ",
            { text: "how long you must keep client records", href: "/blog/how-long-accountants-keep-client-records" },
            " is set by law, while whether software has to enforce it is set by your regulator and your appetite.",
          ],
        ],
      },
      { type: "h2", text: "1. Practice Manager's own Documents tab" },
      {
        type: "p",
        text: [
          "Free, already switched on, and enough for a genuinely small document flow. XPM attaches files to a client, a job or a quote, with uploads capped at ",
          {
            text: "16MB per file",
            href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
          },
          " and nothing client-facing at all.",
        ],
      },
      {
        type: "p",
        text: "What it is genuinely good at is proximity: the file sits on the job it belongs to, which every other option has to work to recreate. What it costs you elsewhere is everything around that — no folder template, no version history, no portal, no upload link, no signing. Anything a client has to see or send travels by email and gets filed by hand, if at all.",
      },
      {
        type: "p",
        text: "Choose this if you are a sole practitioner or a two-person firm, your documents are small, and no client ever needs to log in or upload anything. That is a real firm and it should not be sold anything.",
      },
      { type: "h2", text: "2. A cloud drive on its own" },
      {
        type: "p",
        text: "A few dollars per user per month for storage you almost certainly already pay for inside Google Workspace or Microsoft 365 — and this is where most XPM practices actually are. One folder per client, named to match XPM, and nothing to migrate.",
      },
      {
        type: "p",
        text: [
          "Good at ownership and cost: you hold everything, there is no vendor to leave, and your provider's own version history applies. What it costs you elsewhere is distance. The drive is a separate tab from the client record, so ",
          {
            text: "structure rests entirely on discipline",
            href: "/blog/organise-client-documents-google-drive",
          },
          ", sharing means provider link-sharing decided in a hurry, and there is no portal, no upload link and no signing.",
        ],
      },
      {
        type: "p",
        text: "Choose this if you are small, genuinely disciplined about naming, and your clients are content with email. Plenty of good practices run this way for years.",
      },
      { type: "h2", text: "3. A practice DMS: SuiteFiles or FYI" },
      {
        type: "p",
        text: "Purpose-built filing for professional firms, with portals, signing, email filing and audit trails. This is the category to shop in if compliance is driving the decision. Both publish real prices, and their pricing shapes are opposites.",
      },
      {
        type: "p",
        text: [
          "SuiteFiles prices per firm, in user bands. As of 4 August 2026 its ",
          { text: "pricing page", href: "https://www.suitefiles.com/pricing/" },
          " lists Super Suite from $225 a month billed monthly or from $210 billed annually, including up to five users and adding unlimited document signing and a client portal, and Semi-Suite from $250 monthly or from $230 annually, including up to ten users. “Super Suite for Enterprise” is price on application. The figures carry a dollar sign but no currency code, and SuiteFiles runs a ",
          {
            text: "separate US pricing page",
            href: "https://www.suitefiles.com/pricing-us/",
          },
          ", so confirm the currency for your region.",
        ],
      },
      {
        type: "p",
        text: [
          "FYI prices per seat. As of 4 August 2026 its ",
          { text: "pricing page", href: "https://fyi.app/pricing/" },
          " lists Intermediate at $30, Pro at $50 and Elite at $70 per user per month, and states plainly that all prices are in AUD excluding GST, that a minimum of five users is required, and that migration, onboarding and consulting are quoted separately. FYI's ",
          { text: "XPM integration", href: "https://fyi.app/integrations/" },
          " covers client data, jobs and time.",
        ],
      },
      {
        type: "p",
        text: [
          "A third data point: Virtual Cabinet publishes from £35 per user per month, or from $67 in AUD, on its own ",
          {
            text: "pricing page",
            href: "https://www.virtualcabinet.com/document-management/pricing",
          },
          " as of 4 August 2026, with a volume discount above ten users; its cloud product Workiro is quote-only on the same page. Quote-only is not a criticism, but it is worth knowing.",
        ],
      },
      {
        type: "p",
        text: [
          "What these do better than XTK, without qualification: enforced records management and retention, deeper audit trails, email filed into the client file, access control of the kind firms with ethical-wall obligations need, several more years of maturity, and an implementation team that has migrated hundreds of practices. SuiteFiles also reaches back into Practice Manager — match the ",
          {
            text: "SuiteFiles client folder name to the XPM client name",
            href: "https://help.suitefiles.com/recommended-folder-structure-xpm",
          },
          " and XPM's own client document tab reads the files out of SuiteFiles.",
        ],
      },
      {
        type: "p",
        text: "What it costs you elsewhere: a migration project, a rollout somebody has to own, a separate invoice for that migration, and your documents now living inside a vendor's system. Choose this if you are ten or more people, or you have retention obligations that need enforcing rather than encouraging, and you have someone to own the rollout. Some readers of this article should buy SuiteFiles or FYI, and this is the paragraph that says so.",
      },
      { type: "h2", text: "4. A practice platform: Karbon or TaxDome" },
      {
        type: "p",
        text: [
          "Here you are buying workflow, jobs and client communication, with documents included rather than being the point. Karbon publishes per-user pricing: as of 4 August 2026 its ",
          { text: "pricing page", href: "https://karbonhq.com/pricing/" },
          " lists Team at US$59 per user per month billed annually (US$79 billed monthly) and Business at US$89 billed annually (US$99 monthly), with Enterprise on custom pricing. Document management and a client portal are listed on every plan.",
        ],
      },
      {
        type: "p",
        text: [
          "TaxDome belongs in this category too, but its pricing page could not be retrieved on 4 August 2026, so this article quotes no TaxDome figure at all. ",
          { text: "Check it directly", href: "https://taxdome.com/pricing" },
          " rather than trusting any number a comparison article gives you, including this one.",
        ],
      },
      {
        type: "p",
        text: [
          "What a platform is genuinely good at is being one system for the whole practice, a real prize if your work currently spans four. What it costs you elsewhere shows up only if you are staying on XPM: you end up with two systems that both believe they own the client. Karbon's ",
          {
            text: "XPM integration",
            href: "https://karbonhq.com/integrations/xpm/",
          },
          " is a two-way contact and client sync — genuine and well documented, but it syncs contacts, not jobs, so the workflow overlap stays. Choose this if you are re-platforming the whole practice anyway and are willing to move off XPM's workflow, rather than bolting a second workflow beside it.",
        ],
      },
      { type: "h2", text: "5. A layer over the drive you already own" },
      {
        type: "p",
        text: [
          "The newest shape: leave the files in your own Google Drive, OneDrive or SharePoint and add the missing pieces — folder-per-client structure, portal, document requests, signing, templates — inside the Practice Manager tab. This is the category XTK is in, so treat what follows as disclosure rather than analysis. XTK is ",
          { text: "$59 USD a month for the whole practice", href: "/pricing" },
          ", after a 30-day trial that takes no card, with no tiers and no per-seat maths.",
        ],
      },
      {
        type: "p",
        text: [
          "Good at: nothing moves, so there is no migration and no new home for your documents; the bill does not change when you hire; and the panel opens against whichever client is already open in XPM, so the drive stops being a destination people have to remember. ",
          {
            text: "Connecting storage",
            href: "/guides/connect-document-storage",
          },
          " adopts an existing client folder by name rather than duplicating it.",
        ],
      },
      {
        type: "p",
        text: "What it costs you elsewhere, stated plainly: XTK is younger and narrower than a full DMS. There is no records-retention engine and no ethical walls. It needs you to have Google Drive, OneDrive or SharePoint — SharePoint requires a work or school account — and it connects one storage provider per practice, not several. The working limits are real too: 100MB per uploaded file, document templates as .docx only up to 25MB, PDF merge up to 50 files and 100MB in total, zip download refuses folders, and bulk move or copy tops out at 200 items and is all-or-nothing.",
      },
      {
        type: "p",
        text: "Choose this if you are a small-to-mid Xero-centric firm already living in Google Drive or Microsoft 365, you want the portal, the upload links and the signing closed off without moving anything, and nobody is asking you to enforce retention in software.",
      },
      {
        type: "p",
        text: "The table compares the five as categories rather than products — the choice you make first.",
      },
      {
        type: "table",
        head: [
          "Compared on",
          "XPM tab",
          "Drive alone",
          "Practice DMS",
          "Practice platform",
          "Layer over drive",
        ],
        rows: [
          [
            "Where files live",
            "In XPM",
            "Your storage",
            "Vendor's system",
            "Vendor's system",
            "Your storage",
          ],
          [
            "Works inside XPM",
            "Native",
            "No",
            "Via XPM's tab",
            "Contact sync",
            "Yes, a panel",
          ],
          ["Client portal", "None", "Link sharing", "Yes", "Yes", "Yes"],
          ["E-signatures included", "None", "None", "Usually", "Usually", "Yes"],
          ["Document requests", "None", "None", "Usually", "Usually", "Yes"],
          [
            "Template automation",
            "None",
            "By hand",
            "Yes, mature",
            "Yes",
            "From XPM data",
          ],
          ["Retention policies", "None", "Provider's", "Enforced", "Varies", "None"],
          [
            "Migration required",
            "None",
            "None",
            "Yes, a project",
            "Yes, a project",
            "None",
          ],
          [
            "Pricing model",
            "Included",
            "Storage you own",
            "Per firm band",
            "Per user",
            "Flat per practice",
          ],
          [
            "Indicative price",
            "Free",
            "A few dollars",
            "From $210/mo",
            "From $59/user",
            "$59/mo flat",
          ],
          [
            "If you leave",
            "Stays in XPM",
            "Nothing changes",
            "Export request",
            "Export request",
            "Stays in place",
          ],
        ],
        caption:
          "Checked 4 August 2026. Prices are indicative starting figures read from vendors' own pricing pages, not quotes — check each vendor's page before you budget.",
      },
      {
        type: "p",
        text: [
          "Two rows deserve a footnote. “E-signatures included” says nothing about whether a signature stands up where you practise, which is ",
          {
            text: "a separate question with a clearer answer than most firms expect",
            href: "/blog/esignature-legality-for-accountants",
          },
          ". And “document requests” is the row that decides whether ",
          {
            text: "taking on a new client",
            href: "/blog/accounting-client-onboarding-checklist",
          },
          " is one motion or five emails, which is where the time actually goes.",
        ],
      },
      {
        type: "h2",
        text: "The number most comparisons skip: cost per person, at your headcount",
      },
      {
        type: "p",
        text: "The same firm at 3, 8 and 20 people pays wildly different amounts under the three pricing shapes, and that divergence is most of the decision. The figures below are indicative, built from the verified prices above — starting prices, not quotes.",
      },
      {
        type: "p",
        text: "Per seat, at Karbon's Team rate of US$59 per user per month billed annually: 3 people is about $177 a month, 8 is about $472, and 20 is about $1,180. On the Business rate of US$89, 20 people is about $1,780. Per seat in AUD, at FYI's Pro rate of $50 per user per month, a three-person firm still pays for five because five is the published minimum — about $250 a month, or roughly $83 per person actually using it.",
      },
      {
        type: "p",
        text: "Banded per firm, at SuiteFiles' published bands: a 3-person firm pays the five-user band, from about $210 a month billed annually, which is about $70 a person. An 8-person firm pays the ten-user band, from about $230, which is about $29 a person. At 20 people you are past both published bands and into price on application.",
      },
      {
        type: "p",
        text: [
          "Flat per practice, at ",
          { text: "XTK's $59 a month", href: "/pricing" },
          ": 3 people is about $20 a person, 8 is about $7, and 20 is about $3. The shape is the point. Per-seat cost per person is flat by definition, banded cost per person falls in steps and then stops, and flat cost per person keeps falling for as long as you keep hiring.",
        ],
      },
      {
        type: "callout",
        title: "This arithmetic is not a like-for-like comparison",
        text: "A US$1,180 monthly Karbon bill at 20 users buys workflow, jobs, time and client communication that XTK does not attempt, and a SuiteFiles bill buys records management XTK does not have. The sums above compare what you pay per person, not what you get for it. Run them against your real shortlist and your real headcount, not against these five categories.",
      },
      {
        type: "p",
        text: "The second effect matters more than the first. Per-seat pricing does not only cost more — it changes behaviour, because it turns every marginal person into a purchasing decision. The Tuesday bookkeeper, the offshore preparer and the seasonal help are precisely the people a firm declines to buy seats for, and precisely the people who then keep filing in email. That is how shadow filing starts, and no feature in the system you did buy will fix it. FYI's published five-user minimum is evidence that vendors know this pinch is real.",
      },
      { type: "h2", text: "What happens to your documents if you leave" },
      {
        type: "p",
        text: "Ask this of every option, including ours. It is not a prediction that you will leave — it is a test of how much of your filing system belongs to you.",
      },
      {
        type: "p",
        text: "With a DMS or a practice platform, your documents live in the vendor's system, so leaving means an export: in their structure, in their format, on their timetable. That is a trade rather than a flaw — a purpose-built repository is exactly what you were paying for — but it is a project, and it is worth asking a salesperson what the export contains and how long it takes to arrive before you sign anything.",
      },
      {
        type: "p",
        text: [
          "With XPM's own tab, the files stay in XPM for as long as you stay on XPM. With a drive on its own, nothing happens at all. With a layer over your drive, nothing happens either: disconnecting XTK removes its access and leaves every folder and file exactly where it was, as ordinary files in storage you already own. A lapsed trial or a cancelled subscription puts the practice into read-only rather than taking anything away, and closing the account deletes XTK's own records without touching your drive. What XTK does hold, and what streams through it, is set out in ",
          {
            text: "how XTK handles your data",
            href: "/guides/how-xtk-handles-your-data",
          },
          " and in the ",
          { text: "privacy policy", href: "/legal/privacy" },
          ".",
        ],
      },
      { type: "h2", text: "So which one should you buy?" },
      {
        type: "p",
        text: "Back to the three questions, one sentence each. If your files already live in Google Drive, OneDrive or SharePoint and you cannot face a migration, your honest shortlist is a drive on its own or a layer over it. If your headcount includes part-timers, offshore staff or seasonal help, price every option per person at your real headcount rather than your full-time equivalent, because the people you leave off the licence decide whether the system works. And if a regulator or a professional body expects retention and access to be enforced by software rather than by policy, buy a practice DMS — SuiteFiles and FYI both publish their prices, which is more than much of this market does.",
      },
      {
        type: "p",
        text: [
          "If XTK is on that shortlist, ",
          { text: "the pricing page", href: "/pricing" },
          " says what the $59 covers, and ",
          { text: "installing it", href: "/get-started" },
          " against one client takes about ten minutes — ",
          {
            text: "getting set up",
            href: "/guides/getting-started-with-xtk",
          },
          " is a short guide rather than an implementation.",
        ],
      },
      {
        type: "callout",
        title: "Last checked 4 August 2026",
        text: "Every competitor price here was read from that vendor's own pricing page on 4 August 2026 and is a starting figure rather than a quote. This market re-prices, so check the vendor's own page before you budget. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      },
    ],
    faq: [
      {
        q: "Do I need a document management system, or is Google Drive enough?",
        a: "Google Drive is enough if you are small, disciplined about folder naming, and no client needs to log in or upload anything. You need a document management system once structure has to survive staff turnover, or a regulator expects retention and access to be enforced by software rather than encouraged by policy. Between those two points, a layer over your own drive covers most of the gap.",
      },
      {
        q: "What is the cheapest client portal for a small accounting practice?",
        a: "As of 4 August 2026, the cheapest option is whichever tool prices per practice rather than per user, because portals are almost never sold alone. SuiteFiles includes a portal from about $210 a month for up to five users, Karbon includes one from US$59 per user per month billed annually, and XTK includes one at $59 USD a month for the whole practice. Check each vendor's page for current figures.",
      },
      {
        q: "Can I use XPM and a separate DMS together?",
        a: "Yes, and most firms do. SuiteFiles, FYI and Karbon all integrate with Xero Practice Manager to some degree — SuiteFiles surfaces its files in XPM's client document tab when folder names match, FYI syncs client data, jobs and time, and Karbon syncs contacts two ways. The risk is workflow overlap: a platform that also runs jobs will compete with XPM for ownership of the client.",
      },
      {
        q: "Does switching mean migrating years of client files?",
        a: "It depends entirely on which option you choose. Moving to a practice DMS or a platform means a migration project, usually quoted separately from the subscription. Staying on your own cloud storage, with or without a layer on top of it, means no migration at all, because the files never move — XTK adopts an existing client folder by name rather than creating a duplicate beside it.",
      },
      {
        q: "Is a Chrome extension secure enough for client data?",
        a: "It depends on what the extension does with your files, so ask that specifically. XTK uses no Xero OAuth app and holds no Xero credentials, and uploads go from your browser straight to Google or Microsoft. But downloads, zip downloads, PDF merges, template generation and signature flattening stream bytes through XTK's backend in flight, without being written to disk or stored, and Convert to PDF hands that one file to CloudConvert, a third party. Read the data guide before deciding.",
      },
    ],
  },
  {
    slug: "how-long-accountants-keep-client-records",
    title: "How long must accountants keep client records?",
    excerpt:
      "Five to seven years in most Xero markets — but that number hides three obligations, three clocks and a ceiling most policies forget. Then the harder half: can you still open the file when the period ends?",
    date: "2026-08-10",
    readingTime: "15 min read",
    category: "Practice tips",
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
          " run to seven years, with customer identification records kept seven years after you stop providing designated services. Whether your practice is caught depends on which services you provide, which is a question for your own advice — but if the answer is yes, your identity documents now outlast your tax workpapers, and if you are still ",
          { text: "collecting them by email", href: "/blog/stop-chasing-clients-for-documents" },
          " they are sitting in an inbox rather than in a folder with a period attached to it.",
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
          "Export and hand back before you offboard a client, not after — access to your systems ends on disengagement, and the clock on their due diligence records starts the same day.",
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
