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
          " and the whole chain collapses into one motion: generate from the client record, send for signing, and watch the signed copy file itself. The only typing left is the parts that genuinely need a human — which, in ",
          { text: "a letter to a client's lender", href: "/blog/accountants-letter-for-a-home-loan" },
          ", is exactly the numbers somebody ought to be checking.",
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
          [
            "No structure that survives people. Folders inside Practice Manager have no template and no enforcement, so “2026 / Tax / Workpapers” is a convention rather than a rule, and three people will express it three ways. The layer most practices reach for first is ",
            {
              text: "a folder per job and per quote",
              href: "/blog/xero-practice-manager-job-documents",
            },
            ", which XPM cannot give you in storage you own.",
          ],
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
      "making-tax-digital-quarterly-document-collection",
      "busy-season-triage-for-accounting-practices",
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
    readingTime: "16 min read",
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
  {
    slug: "xero-practice-manager-job-documents",
    title: "Filing by client isn't enough: job and quote documents in XPM",
    excerpt:
      "One folder per client stops working around year three. Filing by job and quote is the fix — but only if you settle four things first: what the folder is called, when it comes into existence, what happens to the folders you already made by hand, and whose storage it sits in.",
    date: "2026-08-14",
    readingTime: "13 min read",
    category: "Guides",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/xero-practice-manager-job-documents/og.png",
    thumbnail: {
      src: "/images/blog/xero-practice-manager-job-documents/thumb.png",
      alt: "Two Practice Manager web addresses for the same job — one reached from Job Manager carrying a uuid, one reached from the client's Jobs tab carrying a numeric id — converging on a single folder, Acme Trading Ltd / Jobs / J000042 - FY25 Tax Return, composed from the job's own number and name, above a note that keying the folder on the address instead splits one job across two folders",
    },
    relatedSlugs: [
      "xero-practice-manager-document-management",
      "organise-client-documents-google-drive",
      "how-long-accountants-keep-client-records",
    ],
    relatedLinks: [
      { label: "Job documents in Xero Practice Manager", href: "/guides/job-documents" },
      { label: "Quote documents in Xero Practice Manager", href: "/guides/quote-documents" },
      { label: "Folder templates", href: "/guides/folder-templates" },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "Under the client, in a Jobs layer, in a folder named from the job's own number and name — Acme Trading Ltd / Jobs / J000042 - FY25 Tax Return — with a sibling Quotes layer beside it. That is the short answer, and Xero Practice Manager will not quite give it to you. XPM has attached documents to jobs and quotes for years. What it has never had is a folder for the job in storage you own.",
      },
      {
        type: "p",
        text: [
          "This article is about the layer between those two facts: the case for filing at job and quote level at all, and the four decisions that make it work or make it worse. It is deliberately not a tool review — ",
          { text: "which system to keep documents in", href: "/blog/xero-practice-manager-document-management" },
          " is a different question, already answered on this blog, and every convention below can be run by hand in a bare Google Drive by a practice that installs nothing.",
        ],
      },
      { type: "h2", text: "What can Practice Manager attach a document to?" },
      {
        type: "p",
        text: [
          "A client, a job or a quote — estimates included, since XPM treats those as quotes. Files go into Practice Manager itself, where any other user in your practice can see and download them, and you can group them into folders inside XPM. Uploads are capped at ",
          {
            text: "16MB per file",
            href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
          },
          ", as of August 2026.",
        ],
      },
      {
        type: "p",
        text: "That set of features has a real sweet spot, and it is worth naming before arguing past it: a signed form belonging to one particular job, a photograph attached to a note, a piece of correspondence that will only ever be looked for from the job it relates to. If that describes your document flow, the rest of this article is solving a problem you do not have.",
      },
      { type: "h2", text: "Why isn't one folder per client enough?" },
      {
        type: "p",
        text: [
          "Because a folder per client is sized for the client and the work is sized by the job. Do the arithmetic on a single compliance client: four to six jobs a year, eight to fifteen documents each. By year three that folder holds two hundred files. By year six it holds four hundred, and its only organising principle is ",
          { text: "whatever each person typed into the filename box", href: "/blog/how-to-name-client-files" },
          " in the moment.",
        ],
      },
      {
        type: "p",
        text: "Three specific things break, and none of them is tidiness.",
      },
      {
        type: "list",
        items: [
          "Search stops disambiguating. Nine files called Working papers.xlsx, six called Signed accounts.pdf, and the only way to tell them apart is the modified date — which is the date someone last opened the file, not the year the work belongs to.",
          "Nobody can tell one year from the next without opening files. FY24's bank statement and FY25's are two rows apart and identically named, and the person deciding which is which is usually the newest member of staff.",
          [
            "The retention purge becomes an excavation. If nothing in the structure says which year a document belongs to, then ",
            { text: "destroying records at the end of their period", href: "/blog/how-long-accountants-keep-client-records" },
            " means opening them one at a time, six years later, to find out. Most practices quietly decide not to, and keep everything forever instead.",
          ],
        ],
      },
      {
        type: "p",
        text: "The fix is not a tidy-up. A tidy-up loses to the next busy season. The fix is a layer, so that filing correctly is the path of least resistance rather than an act of discipline.",
      },
      { type: "h2", text: "Should a job's documents live under the job or the client?" },
      {
        type: "p",
        text: "File against the record the work belongs to. A job owns the paperwork produced in doing it. A quote owns the paperwork produced in winning it. The client keeps only what outlives every job — and that last part is what stops a client folder turning into a folder of nothing but folders.",
      },
      {
        type: "list",
        items: [
          "The job owns working papers, checklists, the year's source records, the queries and their answers, the final signed accounts for that year.",
          "The quote owns the proposal, the fee schedule, the scope of work, and the version the client actually said yes to.",
          [
            "The client keeps what is true across all of them: identity and due diligence evidence, the engagement letter, standing correspondence, permanent records such as the trust deed or the incorporation documents. This is the layer ",
            { text: "a sane client folder structure", href: "/blog/organise-client-documents-google-drive" },
            " already describes, and it does not go away — the Jobs and Quotes layers sit beside it.",
          ],
        ],
      },
      {
        type: "p",
        text: "The reason to state the rule as a rule is that every alternative key looks reasonable and fails. Filing by the person who did the work loses the file when they leave. Filing by date loses it when the work spans a year end. Filing by the route you happened to browse is the worst of the three, and it is also the most common — which is the subject of the next two sections.",
      },
      { type: "h2", text: "How should a job folder be named?" },
      {
        type: "p",
        text: "Number first, then the name. XPM gives every job a number, and that number is the only part of a job's identity that is unique across the practice and stable over time.",
      },
      {
        type: "quote",
        text: "Acme Trading Ltd / Jobs / J000042 - FY25 Tax Return",
      },
      {
        type: "p",
        text: "A name-only convention hits three collisions, and they arrive in this order:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "The same job name across many clients. Two hundred clients have a job called FY25 Tax Return. Inside one client's folder that is survivable; the moment anything lists folders across clients, or anyone moves a folder by accident, it is not.",
          "The same name across years for one client. FY24 Tax Return and FY25 Tax Return are fine until someone renames one of them to Tax Return, which happens because the person renaming it is looking at one folder and not at the pair.",
          "A job renamed mid-engagement. The scope changes in March, somebody updates the job in XPM, and now the folder name and the job name disagree for the rest of the file's life. With the number in front, they still match on the part that matters.",
        ],
      },
      {
        type: "p",
        text: "The number also sorts. XPM numbers ascend, so a folder listing sorted by name is a folder listing in the order the work was taken on, which is very close to chronological and free.",
      },
      { type: "h2", text: "Why does one job end up with two folders?" },
      {
        type: "p",
        text: "Because Practice Manager serves the same job at more than one web address. Arrive at a job from Job Manager and the address carries one identifier; arrive at the same job from the client's own Jobs tab and it carries another. Two addresses, one job — and both are pages a member of staff will genuinely be standing on when they file something.",
      },
      {
        type: "p",
        text: "This is the trap under any filing scheme that keys on the page rather than on the job, including a browser extension and including a person following a convention by hand. If the address is what decides the folder, the same job collects two folders, each holding half the engagement, and neither one obviously wrong. The fix is to key on the job's identity — number and name — and treat the address as nothing more than how you got here.",
      },
      {
        type: "callout",
        title: "Worth checking in your own practice today",
        text: "Open a job from Job Manager, note the address bar, then open the same job from that client's Jobs tab and compare. If your filing convention would have produced two different folders from those two pages, you have this problem already, and the cheapest time to find out is before six years of documents are filed against it.",
      },
      { type: "h2", text: "Where does a quote's paperwork go — under the quote, or under the job?" },
      {
        type: "p",
        text: "Under the client, in a Quotes layer that sits beside Jobs. Never inside the job, even though XPM will happily walk you between the two: a quote's page links back to a job, and a job's Financial tab lists the quotes raised against it. That link is navigation, not ownership.",
      },
      {
        type: "p",
        text: "The failure it prevents is specific. File a quote by the route the person took and the same quote's proposal lands in two different places depending on whether they reached it from Quote Manager or from the job — so the answer to “where is the signed proposal?” becomes “it depends who filed it”. One quote, one folder, under the client whose work it is.",
      },
      {
        type: "p",
        text: "One XPM quirk is worth knowing while you are here: quotes and estimates are the same record on the same screen, which XPM heads “Quotes and estimates”, and both get a Q number. If your practice says estimate where this article says quote, it is the same page and the same filing rule.",
      },
      { type: "h2", text: "Should the folder exist before anyone puts a file in it?" },
      {
        type: "p",
        text: "This is the one genuine judgement call of the four, and both answers are defensible.",
      },
      {
        type: "p",
        text: [
          "Create the folder when the job is saved and it is waiting for whoever files first, which matters if your team's instinct is to drag a file into Drive rather than to open a documents tab. This is the older convention and it is what a practice document management system typically does — SuiteFiles, for one, ",
          {
            text: "prompts you to create the folder as you save a new job",
            href: "https://help.suitefiles.com/using-the-xero-practice-manager-and-suitefiles-integration",
          },
          " (checked 13 August 2026).",
        ],
      },
      {
        type: "p",
        text: "The cost is empty folders, and the arithmetic is not small. Every quote you did not win gets one. Every job cancelled before it started gets one. Every job a recurring template generated gets one, whether or not anyone ever touched it — so a 300-client practice running quarterly jobs manufactures something over a thousand folders a year, most of them empty, all of them indistinguishable from the folders that matter. Six years of that is what makes a Drive unsearchable.",
      },
      {
        type: "p",
        text: "Create the folder the first time somebody opens the job's documents and the sprawl disappears, because a job nobody ever opened gets nothing. The cost is that the folder is not there in advance for anyone working outside the tab. Pick according to where your team actually files: if they live in XPM, create late; if they live in Drive, create early and accept the sprawl.",
      },
      { type: "h2", text: "Four ways to file at job level" },
      {
        type: "p",
        text: "The convention above is independent of what you use to run it. Four approaches, honestly:",
      },
      {
        type: "table",
        head: ["Approach", "Where files live", "Folder per job", "Cost shape"],
        rows: [
          ["XPM Documents tab", "In Practice Manager", "Folders inside XPM", "Included"],
          ["Your Drive, by hand", "Your own storage", "If someone makes it", "Storage only"],
          ["Practice DMS", "The vendor's system", "Usually on save", "Per user, banded"],
          ["XTK", "Your own storage", "On first open", "Flat, per practice"],
        ],
        caption:
          "A practice DMS wins things this table cannot show: version history, records management, email filing into the client, and workflow around the documents. A firm that needs those should buy one, and job folders will come as part of it.",
      },
      {
        type: "p",
        text: [
          "By hand is a real option and it is underrated — a folder template, a naming rule written down, and a partner who enforces it will beat most software. It fails on the two-address problem and on nothing else, because a human being reads the job header rather than the URL. What it costs is attention, permanently. The full ",
          { text: "comparison of the systems themselves", href: "/blog/document-management-for-xero-practices-compared" },
          " covers the vendor question in more detail than a four-column table can.",
        ],
      },
      { type: "h2", text: "How XTK files a job and a quote" },
      {
        type: "p",
        text: [
          "XTK puts its own Documents tab on every job and quote page in Practice Manager, in the position Xero's own Documents tab occupied, and files into your practice's own Google Drive, OneDrive or SharePoint. The two guides — ",
          { text: "job documents", href: "/guides/job-documents" },
          " and ",
          { text: "quote documents", href: "/guides/quote-documents" },
          " — are the step-by-step versions. What is worth stating here is how it answers the four decisions above, because they were real decisions and it could have answered them differently.",
        ],
      },
      {
        type: "list",
        items: [
          "The folder is <client>/Jobs/<number> - <name>, with Quotes as a sibling of Jobs, so the name is composed from the job's number and name rather than scraped from whichever page you are on.",
          "Both of XPM's addresses for a job resolve to the same folder. That is the two-address problem handled once, centrally, rather than by asking staff to notice.",
          "A correctly named folder you already made by hand is adopted, contents and all, rather than migrated or duplicated. If two folders match the name, XTK stops and asks you to choose, and creates nothing while it waits.",
          "Nothing is created until somebody opens the tab. Jobs nobody opens get no folders — the late-creation side of the decision above.",
          "Rename the folder in Drive afterwards and XTK keeps pointing at it. It follows the folder, not the name.",
          "Moving, copying, merging and searching are all fenced inside the folder, so there is no path through a job's tab that files a document into a different client. Re-pointing is the single exception and it cannot leave the client's own folder.",
          "Uploads are 100MB per file, and go from your browser straight to Google or Microsoft.",
        ],
      },
      {
        type: "callout",
        title: "A job's tab is files-only, and that is a real limitation",
        text: [
          "Four things on a client's Documents tab are absent on a job or a quote: generating a file from a template, requesting documents, sending for signature, and sharing to the client portal. All four need the client's own details — someone to email, an address to merge — and XPM's older job and quote pages do not carry them. Do those from the client's tab; the files land in the same storage either way. If sending an engagement letter for signature from the job page is the thing you wanted, ",
          { text: "it works from the client", href: "/blog/accounting-client-onboarding-checklist" },
          " and not from here.",
        ],
      },
      { type: "h2", text: "A convention you can adopt this week" },
      {
        type: "p",
        text: "No software required. Inside each client's folder, three evergreen folders and two layers:",
      },
      {
        type: "quote",
        text: "Acme Trading Ltd / — Engagement, Identity, Correspondence — Jobs/, Quotes/",
      },
      {
        type: "list",
        items: [
          "Name every job folder <job number> - <job name>, copied from the job header in XPM rather than typed from memory.",
          "Name every quote folder <quote number> - <quote name>, in Quotes, under the client — never inside the job it relates to.",
          "Put the year in the job name if your job names do not already carry it, because the year is what a retention purge reads.",
          [
            "Write the rule down in one paragraph, and turn the inside of a job folder into ",
            { text: "a folder template", href: "/guides/folder-templates" },
            " so the structure arrives without anyone deciding it.",
          ],
          "Do not backfill six years of history. Start from the current year's jobs and let the old pile be the old pile — a convention that only applies going forward still fixes the problem within one busy season.",
        ],
      },
      {
        type: "p",
        text: "That is the whole thing, and the reason to write it down rather than buy it is that the convention is what makes any tool work. A practice that has never agreed where a job's paperwork goes will not have that decided for it by software; it will simply make the same disagreement faster.",
      },
      {
        type: "callout",
        title: "XTK and Xero",
        text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited. XPM's 16MB upload limit and native document behaviour were checked against Xero Central on 14 August 2026, and SuiteFiles' folder-creation prompt against its own help documentation on 13 August 2026. Product limits change — verify anything you intend to rely on.",
      },
    ],
    faq: [
      {
        q: "Can Xero Practice Manager store documents against a job?",
        a: "Yes. XPM's Documents tab attaches files to a client, a job or a quote, stores them in Practice Manager itself, lets you group them into folders inside XPM, and makes them visible to other users in your practice. As of August 2026 the upload limit is 16MB per file. What it does not do is create a folder for the job in storage your practice owns, which is what a document management system or a layer over your own Drive adds.",
      },
      {
        q: "How should we name job folders for a Xero practice?",
        a: "Put the job number first, then the job name: J000042 - FY25 Tax Return. The number is the only part of a job's identity that is unique across the practice and stable when the job is renamed, and because XPM's job numbers ascend, sorting folders by name also sorts them roughly chronologically. A name-only convention collides three ways: the same job name across many clients, the same name across years for one client, and a job renamed mid-engagement.",
      },
      {
        q: "Should a quote's documents be filed under the quote or under the job?",
        a: "Under the client, in a Quotes layer beside Jobs — not inside the job. XPM links quotes and jobs together in both directions, but that link is navigation rather than ownership. If you file by the route the person took, the same quote's proposal ends up in two places depending on whether they arrived from Quote Manager or from the job's Financial tab, so the answer to where the signed proposal lives becomes a question about who filed it.",
      },
      {
        q: "Do estimates get their own folder?",
        a: "Yes, and in the same place as quotes. Practice Manager keeps quotes and estimates as one record on one screen, headed “Quotes and estimates”, and gives both a Q number, so an estimate files into the Quotes layer exactly as a quote does. If your practice uses the word estimate where this article says quote, it is the same page and the same rule.",
      },
      {
        q: "Why does the same job sometimes get two document folders?",
        a: "Because Practice Manager serves the same job at more than one web address, depending on whether you reached it from Job Manager or from the client's Jobs tab. Any filing scheme that keys on the page rather than on the job — software or human convention — can produce one folder per address, each holding half the engagement. Keying on the job's number and name instead makes both routes resolve to the same folder.",
      },
      {
        q: "What happens to job folders if we stop paying for the tool that made them?",
        a: "That depends entirely on whose storage they were in, which is why it belongs in the decision rather than after it. Folders created in your own Google Drive, OneDrive or SharePoint stay exactly where they are as ordinary folders, readable without the tool that created them. Folders created inside a vendor's own system leave with the subscription, and exporting them is a migration project rather than a setting — a distinction that matters most for the documents still inside a statutory retention period.",
      },
    ],
  },
  {
    slug: "xero-partner-hub-what-happens-to-your-documents",
    title: "Partner Hub is absorbing Practice Manager. What about your documents?",
    excerpt:
      "Xero is folding Practice Manager, Xero HQ, Workpapers and Xero Tax into one product, and most regions have already moved. Across every page Xero has published about it, the word “document” does not appear once — which is the most useful thing to notice.",
    date: "2026-08-14",
    readingTime: "12 min read",
    category: "Practice tips",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/xero-partner-hub-what-happens-to-your-documents/og.png",
    thumbnail: {
      src: "/images/blog/xero-partner-hub-what-happens-to-your-documents/thumb.png",
      alt: "Four Xero products — Xero HQ, Practice Manager, Workpapers and Xero Tax — merging into a single Partner Hub navigation listing Clients, Insights, Tax, Payroll, Report templates, Ask, Jobs, Time and Billing, beside a separate column for client documents that is not named anywhere in the announcement",
    },
    relatedSlugs: [
      "xero-practice-manager-job-documents",
      "xero-practice-manager-document-management",
      "how-long-accountants-keep-client-records",
    ],
    relatedLinks: [
      { label: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
      { label: "Job documents in Xero Practice Manager", href: "/guides/job-documents" },
      { label: "Get started", href: "/get-started" },
    ],
    body: [
      {
        type: "p",
        text: "Nothing, as far as Xero has said — and that is the thing worth noticing rather than a reassurance. Xero Partner Hub brings Xero HQ, Xero Practice Manager, Xero Workpapers and Xero Tax together into one product, with one navigation and one client and staff list. Xero says every feature you use today comes with you, your data is switched over for you, and pricing does not change. Across the six pages Xero has published about Partner Hub, the word “document” does not appear once.",
      },
      {
        type: "p",
        text: "That is not a criticism of the release, which looks like a carefully run consolidation. It is an observation about scope. Practice management is being unified; document management was never part of what was being unified, because Practice Manager's document handling was never the part of it Xero was building on. So the migration is a good moment to ask a question that outlives it: when your practice software is reorganised by its vendor, what happens to the client files?",
      },
      { type: "h2", text: "What is Xero Partner Hub, and what does it absorb?" },
      {
        type: "p",
        text: [
          "One workspace replacing four products. Xero describes it as bringing ",
          {
            text: "everything you use today across Xero HQ, Xero Practice Manager, Xero Workpapers and Xero Tax",
            href: "https://www.xero.com/nz/campaign/partner-hub/",
          },
          " into a single centralised experience, connecting your existing data as one source of truth. It was announced at Xerocon Brisbane and shaped, Xero says, by feedback from more than 9,000 practices.",
        ],
      },
      {
        type: "p",
        text: [
          "The navigation is the clearest statement of scope. In the UK it reads Clients, Insights, Tax, Payroll, Report templates and Ask — and, ",
          {
            text: "if you use Xero Practice Management tools",
            href: "https://blog.xero.com/product-updates/xero-partner-hub-now-live/",
          },
          ", Jobs, Time and Billing alongside them. The homepage is the other half of the pitch: widgets for bank feed status, unreconciled items, an organisation watchlist, a job pipeline showing overdue and due-soon work, and productivity against target. There is also a new workpapers solution built with BGL, and JAX, Xero's AI assistant, sitting across it.",
        ],
      },
      {
        type: "p",
        text: "Read that list again as a document manager would. Client records, compliance, workflow, time, billing, tax, insights. It is a thorough list, and there is nowhere in it that a signed engagement letter lives.",
      },
      { type: "h2", text: "When does my practice move?" },
      {
        type: "p",
        text: "Most regions have already moved. The transition is automatic and staged by region, and two of the biggest Practice Manager markets are the last two on the list.",
      },
      {
        type: "table",
        head: ["Region", "Status", "How you move"],
        rows: [
          ["United Kingdom", "Live for all partners", "Already done"],
          ["US, Canada, Ireland", "Live for all partners", "Already done"],
          [
            "Singapore, Hong Kong",
            "Live for all partners",
            "Already done",
          ],
          [
            "Indonesia, Malaysia, Philippines, South Africa",
            "Live for all partners",
            "Already done",
          ],
          ["New Zealand", "Automatic from mid-June", "Opt in, or wait"],
          ["Australia", "Automatic from September", "Opt in, or wait"],
        ],
        caption:
          "Read from Xero's own announcement posts and its regional Partner Hub pages on 14 August 2026. The regional pages state the month without a year; the Australian page was still advising partners to opt in before the automatic move at the time of reading. Check your own region's page for the current position.",
      },
      {
        type: "p",
        text: [
          "Australia is the one with a date still ahead of it, and it is a large one — Xero says ",
          {
            text: "over 4,000 Australian practices",
            href: "https://www.xero.com/au/campaign/partner-hub/",
          },
          " are already using Partner Hub voluntarily. If your practice is in Australia and has not opted in, the move is coming automatically and the useful thing to do with the remaining weeks is in the checklist further down.",
        ],
      },
      { type: "h2", text: "What has Xero actually promised?" },
      {
        type: "p",
        text: "More than most vendors do during a consolidation, and it is worth quoting rather than paraphrasing. Three commitments run through every page.",
      },
      {
        type: "list",
        items: [
          [
            "Features survive. ",
            {
              text: "All the features you use today will still be there",
              href: "https://blog.xero.com/product-updates/xero-partner-hub/",
            },
            ", and the regional pages repeat it in the specific form that matters here — all of the core features and functionality you use today in Practice Manager, Xero Tax and Xero HQ will be available in Partner Hub.",
          ],
          "Data moves for you. Xero switches you over with your existing data, with no heavy lifting required from the practice, and says there is no change to access.",
          "Pricing does not change. Moving to Partner Hub does not affect how you use or pay for your practice tools. Australia's page states it flatly: no associated pricing or partner program changes. Practice Management itself remains free for Silver partners and above, or a paid upgrade otherwise.",
        ],
      },
      {
        type: "p",
        text: "Take those at face value. There is no reason on the public record to expect a practice to lose anything in this move, and an article that implied otherwise would be scaremongering about a migration that thousands of firms have already been through without incident.",
      },
      { type: "h2", text: "So why does this matter for documents?" },
      {
        type: "p",
        text: "Because “all your existing features are preserved” is a promise about continuity, not about investment. It tells you nothing will be taken away in the move. It does not tell you which parts of the product are being built on afterwards — and the navigation, the homepage widgets, the workpapers partnership and the AI assistant together make a fairly clear statement about where the next few years of effort are going.",
      },
      {
        type: "p",
        text: [
          "Practice Manager's own document handling was already the thin part of the product before any of this: files attached to a client, job or quote, stored inside Practice Manager, capped at 16MB each, with folders but no template, no version history and nothing client-facing. That was ",
          { text: "the honest state of it", href: "/blog/xero-practice-manager-document-management" },
          " a year ago and the consolidation does not change it either way. What the consolidation does is make the question urgent for a few thousand practices at once: if the platform your documents sit inside is being reorganised by someone else, whose decision is it where your documents live?",
        ],
      },
      {
        type: "callout",
        title: "The question a migration always asks and rarely states",
        text: [
          "Not “will I lose my files”, which is almost never what happens. The real one is whether your documents are inside a product whose roadmap belongs to a vendor, or in storage that belongs to your practice. That question is the same one a ",
          { text: "seven-year retention period", href: "/blog/how-long-accountants-keep-client-records" },
          " asks, and a platform consolidation is simply the version of it that arrives with a date attached.",
        ],
      },
      { type: "h2", text: "The part you can check yourself in twenty seconds" },
      {
        type: "p",
        text: "Partner Hub is a new shell over pages of very different ages, and your address bar will tell you which is which. Open a client and you are on the new application, at practicemanager.xero.com. Now open one of that client's jobs, or a quote, and look again: you land on app.practicemanager.xero.com, on a page whose filename ends in .aspx — the older Practice Manager, still doing the work, wearing the new navigation.",
      },
      {
        type: "p",
        text: [
          "This is genuinely useful information rather than a gotcha. It shows you where the modernisation has reached and where it has not, and it tells you that the job and quote pages — the ones where ",
          { text: "documents attach to a specific piece of work", href: "/blog/xero-practice-manager-job-documents" },
          " — are the older surface rather than the new one. If you are deciding how much to invest in filing inside those pages, that is a relevant fact, and it is one you can verify without taking anybody's word for it.",
        ],
      },
      { type: "h2", text: "What to do before your region's date" },
      {
        type: "p",
        text: "Five things, none of which need any product you do not already have. The first two are the ones that actually matter.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Find out where your client documents live today, honestly. Not the policy — the reality. If the answer is “some in the XPM Documents tab, some in a shared Drive, some in the partner's email”, write that down, because it is the thing a platform change tests.",
          "Get anything that lives only inside Practice Manager out of it, or accept that it is a copy of record you do not control. Files in XPM's Documents tab are the ones with no existence outside the product, and they are also the ones nobody has a list of.",
          "Check the staff merge. Xero combines the staff records from Xero HQ and Practice Manager or Xero Tax into a single list, with one record per person. Merged records mean merged permissions, so review who can see what afterwards rather than assuming it carried across as it was.",
          "Ask your add-ons where they stand. Anything integrating with Practice Manager has had to follow this migration too, and a vendor who cannot tell you their status is telling you something.",
          "Diarise the date and read the email. The transition is automatic; the only thing worse than being moved is being moved on a Monday in the middle of a filing deadline without having read the notice.",
        ],
      },
      { type: "h2", text: "The other Xero change your add-ons are dealing with" },
      {
        type: "p",
        text: [
          "Worth knowing while you are asking vendors where they stand, because it lands on the same practices from the other direction. On 2 March 2026 Xero retired its App Store revenue-share model and began ",
          { text: "pricing API access", href: "https://developer.xero.com/pricing" },
          " on two things instead: how many Xero customers connect to an app, and how much data that app pulls out. Five tiers, from a free Starter capped at five connections to Advanced at A$1,445 a month for 10,000 connections and 250GB of egress, with overage at A$2.40 per GB and Enterprise priced on application.",
        ],
      },
      {
        type: "p",
        text: "The detail that matters for a Practice Manager firm is buried in the benefits table. The Practice Manager API is a premium feature: not included at Starter, Core or Plus, available only from the Advanced tier upwards, and gated behind a security assessment and use-case approval. So an add-on that integrates with XPM the official, supported way now starts at a four-figure monthly platform bill and an approval process before it has served a single practice.",
      },
      {
        type: "p",
        text: "It is Xero's platform and metering heavy data use is a defensible thing to do. The ecosystem's objection has been about who ends up paying: Dext's chief product and technology officer described the costs as something end customers will ultimately pay as another tax, and a former Xero ecosystem strategist called charging a developer for access to a customer's data double-dipping, since the customer already pays for Xero. Whatever you make of that argument, the arithmetic reaches your practice through the price of your app stack rather than through your Xero bill, which is why it is worth asking about now rather than discovering at renewal.",
      },
      { type: "h2", text: "The durable version of the question" },
      {
        type: "p",
        text: "Partner Hub will not be the last reorganisation of the software your practice runs on. There was a Practice Manager before this one, there is a workpapers product changing hands to BGL inside this very release, and there will be another consolidation in five years that nobody has announced yet. Each one arrives with the same reassurances, and most of them are kept.",
      },
      {
        type: "p",
        text: "What decides whether any of it touches your client documents is not the quality of the vendor's migration. It is whether the documents were in the vendor's product to begin with. Files in your practice's own Google Drive, OneDrive or SharePoint are unaffected by a navigation change, a product merger, a rebrand or a cancellation, because nothing about them was ever the vendor's to move. That is a boring property, and boring is the entire point.",
      },
      { type: "h2", text: "Where XTK sits in this" },
      {
        type: "p",
        text: [
          "XTK runs inside Partner Hub today, because Partner Hub is served from practicemanager.xero.com and that is where XTK has always worked. It adds its document panel to the client pages there and to the older job and quote pages on app.practicemanager.xero.com, and it files everything into your practice's own Drive, OneDrive or SharePoint. Nothing about the transition required a change, and nothing about it moved a file: the files were never in Practice Manager. It is also outside the API pricing change above, because it is not a Xero OAuth app, holds no Xero credentials, has no App Store listing and makes no Practice Manager API calls — it reads what your own signed-in tab has already loaded, so there are no connections to meter and no egress to bill. One flat price for the practice, unchanged by any of this. That is the whole of the claim — ",
          { text: "how it reads your Xero data", href: "/guides/how-xtk-handles-your-data" },
          " is written out in full, hedges included.",
        ],
      },
      {
        type: "p",
        text: "The fair caveat: XTK is a browser extension that renders inside Xero's pages, so it depends on those pages continuing to look roughly as they do. A large enough change on Xero's side is a problem for XTK in a way it is not for the documents themselves — which is exactly the distinction this article is about, and it cuts towards XTK's own architecture rather than away from it. Your files stay ordinary files in your own storage whatever happens to the panel.",
      },
      {
        type: "callout",
        title: "Sources and date · last checked 14 August 2026",
        text: "Every quotation and date here was read on 14 August 2026 from Xero's own announcement posts and its regional Partner Hub pages, linked throughout. Rollout dates are stated by Xero as months rather than exact days and differ by region, so check your own region's page rather than relying on the table above. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
      },
    ],
    faq: [
      {
        q: "What is Xero Partner Hub?",
        a: "A single workspace that replaces four separate Xero products: Xero HQ, Xero Practice Manager, Xero Workpapers and Xero Tax. It puts client management, compliance work, jobs, time and billing under one navigation, adds a homepage of widgets covering bank feed status, unreconciled items, job pipeline and productivity against target, and includes a new workpapers solution built with BGL and Xero's AI assistant, JAX. Xero announced it at Xerocon Brisbane and says it was shaped by feedback from more than 9,000 practices.",
      },
      {
        q: "When will my practice be moved to Partner Hub?",
        a: "Most regions have already moved. As of 14 August 2026, Partner Hub is live for all partners in the United Kingdom, the United States, Canada, Ireland, Singapore, Hong Kong, Indonesia, Malaysia, the Philippines and South Africa. New Zealand practices have been transitioned automatically from mid-June, and Australian practices are transitioned automatically from September unless they opt in earlier. The move is automatic and Xero notifies practices by email, so check your own region's Partner Hub page for the current position.",
      },
      {
        q: "Will we lose any Practice Manager features in the move?",
        a: "Xero says no. Its announcement states that all the features you use today will still be there, and the regional pages repeat that all of the core features and functionality currently used in Xero Practice Manager, Xero Tax and Xero HQ will be available in Partner Hub, with no change to access. Xero switches practices over with their existing data and says no heavy lifting is required. Thousands of practices across ten markets have already been through the transition.",
      },
      {
        q: "Does Xero Partner Hub cost more?",
        a: "No. Xero states that moving to Partner Hub does not affect how you use or pay for your practice tools, and the Australian page says there are no associated pricing or partner program changes. Practice Management itself remains free for Silver partners and above, or available as a paid upgrade for practices below that tier, exactly as before the move.",
      },
      {
        q: "What happens to documents stored in Practice Manager's Documents tab?",
        a: "Xero has not addressed documents specifically — the word does not appear in any of its Partner Hub announcements or regional pages — but its general commitment is that existing data moves with the practice. The practical point for a firm is different: files held in the Documents tab exist only inside Practice Manager, capped at 16MB each, so they are the files whose fate is decided by someone else's product roadmap. Documents kept in the practice's own Google Drive, OneDrive or SharePoint are unaffected by any of it.",
      },
      {
        q: "Do Practice Manager add-ons still work in Partner Hub?",
        a: "That depends on the add-on and how it integrates, so ask the vendor directly. Partner Hub is served from the same web address as before, practicemanager.xero.com, and the older job and quote pages are still served from app.practicemanager.xero.com, so tools working inside those pages generally continue to. Tools integrating through Xero's Practice Manager API have a separate change to absorb: since 2 March 2026 Xero prices API access by connections and data egress across five tiers, and the Practice Manager API is a premium feature available only from the Advanced tier — A$1,445 a month — and subject to a security assessment and use-case approval.",
      },
    ],
  },
  {
    slug: "busy-season-triage-for-accounting-practices",
    title: "Busy-season triage: how to order the work when it all arrives at once",
    excerpt:
      "The crush isn't a client behaviour problem, it's a calendar design problem — and two of the three revenue authorities have already solved it. Both solved it the same way, and both put your least reliable clients first.",
    date: "2026-08-17",
    readingTime: "15 min read",
    category: "Practice tips",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/busy-season-triage-for-accounting-practices/og.png",
    thumbnail: {
      src: "/images/blog/busy-season-triage-for-accounting-practices/thumb.png",
      alt: "Two calendars compared: one with a single January deadline and 475,722 returns stacked on the final day, beside a tiered calendar spreading the same work across 31 October, 31 January, 28 February, 31 March and 15 May, with the first tier labelled clients who were late last year",
    },
    relatedSlugs: [
      "stop-chasing-clients-for-documents",
      "making-tax-digital-quarterly-document-collection",
      "xero-practice-manager-job-documents",
      "accounting-client-onboarding-checklist",
    ],
    relatedLinks: [
      { label: "Document requests", href: "/guides/document-requests" },
      { label: "Notifications", href: "/guides/notifications" },
      { label: "Folder templates", href: "/guides/folder-templates" },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "Sort by readiness, not by arrival order. Three buckets — ready, blocked on the client, blocked on us — re-sorted weekly, and inside “ready” you work the earliest statutory deadline first. If your revenue authority already tiers its deadlines, copy the tiering rather than inventing one: it has done the prioritising for you, and it puts your least reliable clients at the front.",
      },
      {
        type: "p",
        text: "That last part is the one most practices get backwards, and it is the argument of this article. Everything below runs with no software you do not already have.",
      },
      { type: "h2", text: "What does triage actually mean in a practice?" },
      {
        type: "p",
        text: "Sorting by state rather than by sequence. The word comes from medicine, where the sort has three properties worth stealing: it happens before treatment rather than during it, it ignores who arrived first, and it is redone as states change. A practice that sorts once in September and then works the list is not triaging, it is queueing.",
      },
      {
        type: "p",
        text: [
          "The thing being sorted is the ",
          { text: "job", href: "/blog/xero-practice-manager-job-documents" },
          ", not the client. This matters more than it sounds. A client with a company return ready to start and a trust return waiting on a bank statement sits in two buckets at once, and any system that sorts whole clients has to pick one of those two truths and lose the other. Sorting jobs keeps both.",
        ],
      },
      { type: "h2", text: "When is your busy season, actually?" },
      {
        type: "p",
        text: "That depends on which deadline binds each client, and in two of the three markets XTK sells into the answer is not one date but five. Here is the individual and trust calendar a practice with UK, Australian and New Zealand clients is actually working against, in chronological order.",
      },
      {
        type: "table",
        head: ["Deadline", "Who it binds", "Authority"],
        rows: [
          ["31 Oct 2026", "AU: any prior-year return outstanding at 30 June 2026", "ATO agent program"],
          ["31 Oct 2026", "AU: self-lodgers, and the cut-off to engage a new agent", "ATO"],
          ["31 Oct 2026", "UK: paper returns for 2025/26", "HMRC"],
          ["31 Jan 2027", "AU: large and medium trusts, taxable last year lodged", "ATO agent program"],
          ["31 Jan 2027", "UK: online returns and payment for 2025/26", "HMRC"],
          ["28 Feb 2027", "AU: large and medium trusts, non-taxable or newly registered", "ATO agent program"],
          ["31 Mar 2027", "AU: clients whose last return produced a liability of $20,000 or more", "ATO agent program"],
          ["31 Mar 2027", "NZ: agent clients with an extension of time, year to 31 March 2026", "Inland Revenue"],
          ["15 May 2027", "AU: all remaining individuals and trusts", "ATO agent program"],
          ["5 Jun 2027", "AU: concession on returns due 15 May, if payment is made too", "ATO agent program"],
          ["7 Jul 2027", "NZ: returns with no extension of time, year to 31 March 2027", "Inland Revenue"],
        ],
        caption:
          "As of 17 August 2026, from each authority's own pages. Due dates vary by client circumstance — check the source for yours, and note the ATO refreshes its program each July.",
      },
      {
        type: "p",
        text: [
          "Read down the “who it binds” column and the shape of the problem appears. The ",
          {
            text: "Australian agent program",
            href: "https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/registered-agent-lodgment-program/due-dates-for-tax-returns-by-client-type/individuals-and-trusts",
          },
          " sorts a practice's clients into five tiers across seven months. ",
          {
            text: "New Zealand",
            href: "https://www.ird.govt.nz/topics/intermediaries/extension-of-time-arrangements",
          },
          " runs two dates. The ",
          {
            text: "United Kingdom",
            href: "https://www.gov.uk/self-assessment-tax-returns/deadlines",
          },
          " has one, for everybody: 31 January, 11:59pm.",
        ],
      },
      { type: "h2", text: "Why does one deadline for everybody produce a crush?" },
      {
        type: "p",
        text: [
          "Because a shared deadline synchronises every client in the country, and the numbers are stark once someone counts them. For the 2024 to 2025 tax year, ",
          {
            text: "HMRC reported",
            href: "https://www.gov.uk/government/news/1148-million-beat-the-self-assessment-deadline",
          },
          " that 11.48 million people filed by 31 January — and that 475,722 of them waited until the final day. An estimated one million missed it entirely.",
        ],
      },
      {
        type: "p",
        text: "One figure in that release deserves more attention than the headline. The busiest hour of deadline day was not the last one: 32,982 returns were filed between 17:00 and 17:59, against 27,456 in the final hour. The peak lands inside office hours, which means most of deadline day is not panicking taxpayers at kitchen tables. It is practices clearing a queue, at the one moment in the year when clearing a queue is most expensive.",
      },
      {
        type: "p",
        text: "A synchronised deadline does not create more work. It compresses the same work into the window where every review is rushed, every query has no time to come back, and every staff absence is unrecoverable. The work was always there; the calendar decided when you would do it.",
      },
      { type: "h2", text: "How does a tiered calendar prevent it?" },
      {
        type: "p",
        text: "By deciding in advance that different clients are due at different times, so no practice ever has its whole book due at once. Australia's agent program is the clearest published example, and it is worth reading as scheduling rather than as compliance. The tiers are in the table above: five dates from 31 October 2026 to 15 May 2027, sorted by trust size, by tax liability — clients whose latest return produced a bill of $20,000 or more come earlier — and by one other thing.",
      },
      {
        type: "p",
        text: "Look at what the first tier is made of. It is not the biggest clients, the oldest clients, or the most profitable ones. Tier one is individuals and trusts with a prior-year return still outstanding at 30 June. Tier one is the clients who were late last year.",
      },
      { type: "h2", text: "Why do the late clients go first?" },
      {
        type: "p",
        text: "Because being late is not a fact about a client's motivation, it is a fact about how long their work takes to finish in calendar days rather than desk hours. A client with two returns outstanding cannot be started and completed in one sitting no matter how much capacity you point at them. Their records need reconstructing, their queries need answering by someone who has forgotten the year in question, and every round trip costs a week.",
      },
      {
        type: "p",
        text: "Elapsed time is the only resource a busy season cannot manufacture. You can buy desk hours in December — contractors, overtime, a temp on data entry. You cannot buy back the three weeks a client will take to find a 2024 bank statement. So the work that consumes elapsed time has to start when elapsed time is cheap, which is now.",
      },
      {
        type: "p",
        text: "That is why the instinct most practices have — leave the difficult, disorganised, chronically late clients until last, because chasing them is unpleasant — is precisely wrong. It puts the elapsed-time-heavy work into the part of the year with none left. Both revenue authorities that stagger deadlines reached the opposite conclusion independently: Australia moves the previously-late client to the earliest tier, and New Zealand withholds the extension of time from a newly linked client with more than one return outstanding. Neither is punishing anyone; both are scheduling. Adopt the tiering you are already subject to and you get a work order that is defensible to a partner and one no client can argue with, because it is the authority's own.",
      },
      { type: "h2", text: "The three-bucket sort" },
      {
        type: "p",
        text: "Every open job goes in exactly one of three buckets, and the definitions have to be tight enough that two different people sorting the same job agree.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Ready. Everything needed to do the work is in your possession, and the next action is somebody in the practice doing the work. If you would have to ask anyone for anything before starting, it is not ready.",
          "Blocked on the client. The next action belongs to the client, and you have asked for it specifically enough that they know what it is. A job where you have been meaning to ask is not blocked on the client. It is blocked on you.",
          "Blocked on us. The next action belongs to the practice but is not the work itself — a review sitting with a partner, a query drafted but not sent, a job waiting on a colleague's file, an unanswered internal question, a job nobody has been assigned to.",
        ],
      },
      {
        type: "p",
        text: "The third bucket is the one practices refuse to create, and it is the one that shortens the season. Its contents are almost always invisible, because every item in it is somebody's intention rather than an event, and intentions do not appear in any system. It is also the only bucket a partner can clear in an afternoon without anyone outside the building doing anything.",
      },
      {
        type: "p",
        text: "Expect it to be embarrassing the first time. A practice that has never separated “waiting on the client” from “waiting on us” usually finds that a good share of what it called client delay was its own, sitting for weeks with nobody knowing whose it was.",
      },
      { type: "h2", text: "How do you order the work inside “ready”?" },
      {
        type: "p",
        text: "Three keys, applied in this order, and the order is the whole point:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Deadline tier. The statutory date the client is actually bound by, not the date you associate with their type of work. In Australia this is handed to you; in the UK, where one date binds everyone, you build the tiers yourself and the next two keys do the work.",
          "Elapsed-time risk. Within a tier, start the jobs most likely to need a round trip to somebody outside the practice — first-year clients, clients who were late last year, anything with a missing record, anything needing a third party such as a bank, a lawyer or an auditor.",
          "Size, last. A job's hours matter for resourcing the week; they should not decide which week it falls in.",
        ],
      },
      {
        type: "p",
        text: "Alphabetical and arrival order need no argument. Smallest-first is more tempting, because it clears rows and feels like progress, and it fails because the rows it clears are the ones that would still have been clearable in January. The one honest exception: if a job genuinely takes five minutes and it is in front of you, finishing it costs less than scheduling it. Keep that narrow — the moment it becomes a category rather than a moment, you are doing smallest-first with a better name.",
      },
      { type: "h2", text: "Is it always better to lodge early?" },
      {
        type: "p",
        text: "No, and this is where generic busy-season advice quietly harms a client. In Australia, the payment date for a return due 15 May is staggered by when the return is lodged and processed. Lodge up to and including 12 February 2027 and the payment is due 21 March 2027. Lodge between 13 February and 12 March and it is due 21 April 2027. Lodge from 13 March and it is due 5 June 2027.",
      },
      {
        type: "p",
        text: "So for a client with a bill to pay and a tight cash position, doing their return in early February rather than late March moves their payment date forward by roughly ten weeks. The work was done better and earlier, and the client is worse off — and nothing in the practice's own throughput metrics would ever show it.",
      },
      {
        type: "p",
        text: "The rule that survives is narrower than “lodge early” and more useful: get the work ready early, then sequence lodgment for the client's circumstances rather than the firm's queue. A refund position goes as soon as it is right. A payment position with a cash-flow problem is finished early and lodged deliberately. Either way, tell the client which you did, because the thing that reliably damages the relationship is a payment date they did not see coming.",
      },
      { type: "h2", text: "What do you do with the blocked-on-client bucket?" },
      {
        type: "p",
        text: [
          "Work it as a batch, not as a set of individual clients. The bucket exists so that chasing becomes one task done well on a Tuesday rather than forty interruptions across six weeks, and so that a job nobody can progress stops occupying anybody's attention until it can. The mechanics of the asking — what to itemise, where the files should land, how to make the outstanding items visible to the client rather than only to you — are a subject in their own right, and this blog has ",
          { text: "a five-step system for it", href: "/blog/stop-chasing-clients-for-documents" },
          ".",
        ],
      },
      {
        type: "p",
        text: [
          "One deadline belongs in this section rather than that one, because it is about sequencing rather than chasing. In Australia, a client engaging you for the first time, or moving from another agent, ",
          {
            text: "should contact you before 31 October",
            href: "https://www.ato.gov.au/individuals-and-families/your-tax-return/how-to-lodge-your-tax-return/lodge-your-tax-return-with-a-registered-tax-agent",
          },
          " to be part of your lodgment program. That makes September and October an ",
          { text: "onboarding", href: "/blog/accounting-client-onboarding-checklist" },
          " deadline as well as a filing one: a prospect who signs in November has already lost the extended dates for that year.",
        ],
      },
      { type: "h2", text: "Where does Practice Manager already do this?" },
      {
        type: "p",
        text: "More than most practices use it for. The three buckets do not need a new tool, a spreadsheet or a project board — they need three job states and three saved filters in software you are already paying for.",
      },
      {
        type: "p",
        text: "A job in Xero Practice Manager carries a job number, an owning client, a start date and a due date, a priority, an assigned manager, partner and staff, an estimated time against the time actually recorded, a percentage complete, and a job state that your practice defines itself. The Job Manager filters on those fields and lets you save the filters you use repeatedly.",
      },
      {
        type: "p",
        text: "Which gives you a working implementation in an afternoon:",
      },
      {
        type: "list",
        items: [
          "Add three job states — Ready, Waiting on client, Waiting on us — alongside whatever states you already run, and make one of them the default for new jobs so nothing lands unsorted.",
          "Set the due date on every job to the client's actual statutory deadline rather than an internal target, so that sorting by due date sorts by tier.",
          "Save one filter per bucket, and a fourth for the only view that matters on a Monday: state is Ready, ordered by due date.",
          "Put the practice's estimated time against the ready bucket for the coming fortnight. If it exceeds the hours you have, the sort has just told you something no amount of working harder will change.",
        ],
      },
      {
        type: "p",
        text: "Two habits make the difference between a system and three unused dropdowns. Changing state has to be part of doing the work rather than an administrative step afterwards — the person who sends a query sets the state to Waiting on client in the same minute. And somebody has to own the Waiting on us filter, by name, with a standing slot in the week to empty it.",
      },
      { type: "h2", text: "Where does XTK help, and where does it stop?" },
      {
        type: "p",
        text: [
          "XTK's honest contribution to triage is narrow, and it is worth being exact about, because triage is a cross-client problem and XTK is not a cross-client tool. What it does help with is the evidence a sort depends on. A ",
          { text: "document request", href: "/guides/document-requests" },
          " turns “have we got everything for this job?” into something answerable at a glance, because each requested item is badged Provided or Outstanding as files arrive in the client's folder. That is the difference between a job you have classified as blocked and a job you assume is blocked.",
        ],
      },
      {
        type: "p",
        text: [
          "The ",
          { text: "notification tray", href: "/guides/notifications" },
          " is practice-wide too: XTK records one row per event for the whole practice, so you learn that a client has uploaded or signed without opening every client's tabs.",
        ],
      },
      {
        type: "p",
        text: "Now the limits, because they bear on this article specifically. The tray is a feed, not a work queue — XTK's own guide calls it a launcher rather than a workspace. It shows the twenty most recent events, pages back through ninety days, then deletes them, and the unread badge stops counting at “9+”. More to the point, a feed reports arrivals. Triage needs absences. Outstanding-versus-provided state lives inside one client's Documents tab, and nothing in XTK aggregates what is still missing across every client.",
      },
      {
        type: "p",
        text: "Nor is there a scheduler anywhere in the product: no automatic reminders, no chasing on a cadence, no capacity planning, no workload dashboard. Following up is a manual action, and on a document request it rotates the link, so the previously emailed one stops working. The cross-client view lives in the Job Manager, which is where it belongs, and the sorting is done by a person.",
      },
      { type: "h2", text: "A pre-season checklist" },
      {
        type: "p",
        text: "Six weeks before your ramp — early September for an Australian practice, mid-November for a UK one — in this order:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Pull every client's actual statutory deadline from the authority's own tiering, not from memory or last year's spreadsheet.",
          "Find the clients in the earliest tier. In Australia that means anyone with a prior-year return outstanding at 30 June; in the UK and New Zealand, build the tier yourself from who was late last year.",
          "Create the three job states and set every open job's due date to the client's real deadline.",
          "Sort every open job into a bucket once, by hand. This is a two-hour job for a small practice and it is the only step with no shortcut.",
          "Count the Waiting on us bucket and clear it before the season starts. This is the cheapest week of the year in which to do it.",
          "Send the earliest-tier document requests now, itemised, with a single destination for the files.",
          "Compare the estimated hours in the ready bucket against the hours you actually have, and take whatever decision that arithmetic forces while there is still time to take it.",
        ],
      },
      { type: "h2", text: "What to measure across one season" },
      {
        type: "p",
        text: "Two numbers, and they answer different questions. First, what share of jobs entered the Waiting on us bucket at all. Second, the median number of days a job spent there once it did.",
      },
      {
        type: "p",
        text: "The first is a design number: it tells you how often the practice itself is the constraint, and it is reduced by changing how work is handed over, reviewed and assigned. The second is an execution number: it tells you how long the practice takes to notice, and it is reduced by somebody owning the filter. A practice that measures only total turnaround time cannot tell those two failures apart, and will spend a year fixing the wrong one.",
      },
      {
        type: "p",
        text: [
          "Neither number needs new software. Both need the buckets to exist, which is the whole of the argument: the sort is free, the states are already in Practice Manager, and the only thing a ",
          { text: "flat-priced layer over your own storage", href: "/pricing" },
          " changes is how quickly you can tell which bucket a job belongs in.",
        ],
      },
      {
        type: "callout",
        title: "Dates, and what this article is not",
        text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited. The deadlines above were taken from the ATO, HMRC and Inland Revenue's own pages on 17 August 2026 and apply to specific years and client circumstances — this is general information, not tax advice, and your clients' due dates should be confirmed against the authority or your professional body. Product limits described here were correct as of August 2026.",
      },
    ],
    faq: [
      {
        q: "When does busy season start in the UK, Australia and New Zealand?",
        a: "It depends on which deadline binds each client, and only the UK has a single one. UK online self assessment returns for 2025/26 are due 31 January 2027, so the ramp runs from about November. Australia's registered agent lodgment program spreads individuals and trusts across 31 October 2026, 31 January, 28 February, 31 March and 15 May 2027, with a 5 June concession — several smaller ramps rather than one. In New Zealand, returns without an extension of time are due 7 July, and agents' clients can get an extension to 31 March the following year.",
      },
      {
        q: "Should I start with my easiest clients or my hardest?",
        a: "Start with the ones most likely to need something from outside the practice — first-year clients, clients who were late last year, anything with a missing record or a third party involved. Elapsed time is the only resource a busy season cannot buy more of, so the work that consumes it has to start when it is cheap. Both revenue authorities that stagger deadlines agree: Australia puts clients with a prior-year return outstanding in the earliest tier, and New Zealand withholds the extension of time from a newly linked client with more than one return outstanding.",
      },
      {
        q: "Is it always better to lodge a tax return early?",
        a: "No. In Australia, the payment date for a return due 15 May depends on when it is lodged and processed: lodged by 12 February 2027, payment is due 21 March 2027; lodged from 13 March 2027, it is due 5 June 2027. For a client with a bill to pay and tight cash flow, lodging in February instead of late March brings their payment date forward by about ten weeks. Get the work ready early, sequence lodgment for the client's circumstances, and tell them which you did.",
      },
      {
        q: "Can Xero Practice Manager show me which jobs are waiting on a client?",
        a: "Yes, if you set it up. Job states in Practice Manager are defined by your own practice, so you can add Ready, Waiting on client and Waiting on us, set a default state for new jobs, and save a Job Manager filter per state. With each job's due date, priority and estimated time alongside, that gives a cross-client view of what is ready and what is blocked, with no additional software.",
      },
    ],
  },
  {
    slug: "making-tax-digital-quarterly-document-collection",
    title: "Four collections a year, not one: client documents under MTD for Income Tax",
    excerpt:
      "Making Tax Digital digitised the summary, not the evidence. A quarterly update carries category totals and nothing else — but the obligation to hold the bank statements and invoices behind them is unchanged, and because updates are cumulative, a gap you don't close in the first quarter follows you into the other three.",
    date: "2026-08-19",
    readingTime: "15 min read",
    category: "Practice tips",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/making-tax-digital-quarterly-document-collection/og.png",
    thumbnail: {
      src: "/images/blog/making-tax-digital-quarterly-document-collection/thumb.png",
      alt: "Four quarterly update deadlines — 7 August, 7 November, 7 February and 7 May — with a cumulative bar running underneath showing each update restating the whole year to date, and one unresolved document carried through all four",
    },
    relatedSlugs: [
      "stop-chasing-clients-for-documents",
      "busy-season-triage-for-accounting-practices",
      "how-long-accountants-keep-client-records",
    ],
    relatedLinks: [
      { label: "Document requests", href: "/guides/document-requests" },
      { label: "Folder templates", href: "/guides/folder-templates" },
      { label: "Document templates", href: "/guides/document-templates" },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "Making Tax Digital did not change which documents you need from a client. It changed how often you need them, and it made an unclosed gap follow you through the year. A quarterly update carries category totals and nothing else — no attachments, no uploads — but the obligation to hold the bank statements and invoices behind those totals is untouched, and each update restates the whole year to date.",
      },
      {
        type: "p",
        text: "So the same evidence now underpins five filings instead of one. This article is about what that does to a collection process built for January, and what to put in its place before the next deadline on 7 November 2026. Almost all of it works with no software you do not already have.",
      },
      { type: "h2", text: "What actually changed on 6 April 2026?" },
      {
        type: "p",
        text: [
          "Sole traders and landlords above a threshold now send four quarterly updates and a tax return, in place of one return. It became mandatory on 6 April 2026 for anyone with qualifying income over £50,000, and ",
          {
            text: "HMRC's guidance",
            href: "https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/before-you-use-this-guide",
          },
          " defines qualifying income more widely than most first readings assume: “your total turnover from self-employment and property income”, being “the total amount before expenses, based on the tax return you submitted in the previous tax year”.",
        ],
      },
      {
        type: "p",
        text: "Two things follow from that definition, and both are useful. It is turnover, not profit, so a landlord with £55,000 of rent and £40,000 of costs is in scope on a £15,000 profit. And it comes from the return you have already filed, which means the in-scope list is not a forecast — it is a query you can run against work you finished last season.",
      },
      {
        type: "p",
        text: "The threshold then steps down. Qualifying income over £30,000 in the 2025 to 2026 tax year brings a client in from 6 April 2027, and over £20,000 in 2026 to 2027 brings them in from 6 April 2028. Each step is a larger cohort than the one before it.",
      },
      {
        type: "p",
        text: "The four deadlines are fixed dates rather than a rolling window.",
      },
      {
        type: "table",
        head: ["Update period", "Deadline", "What it covers"],
        rows: [
          ["6 Apr – 5 Jul 2026", "7 Aug 2026", "First quarter"],
          ["6 Apr – 5 Oct 2026", "7 Nov 2026", "Two quarters, restated"],
          ["6 Apr – 5 Jan 2027", "7 Feb 2027", "Three quarters, restated"],
          ["6 Apr – 5 Apr 2027", "7 May 2027", "The full year, restated"],
        ],
        caption:
          "Standard update periods for the 2026 to 2027 tax year, from HMRC's guidance as at 19 August 2026. Electing calendar update periods in your software moves the period boundaries to 30 June, 30 September, 31 December and 31 March — the four deadlines are unchanged.",
      },
      { type: "h2", text: "Does a quarterly update need documents, or just numbers?" },
      {
        type: "p",
        text: [
          "Just numbers. A quarterly update contains “totals for each income and expense category you've used for your self-employment and property income”, and that is the whole of it. Nothing is attached and nothing is uploaded to HMRC. If you were braced to start sending receipts four times a year, ",
          {
            text: "the guidance on quarterly updates",
            href: "https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates",
          },
          " sets out what an update carries, and receipts are not in it.",
        ],
      },
      {
        type: "p",
        text: [
          "The counterweight is in the same guidance, and it is the sentence this article is built on. On ",
          {
            text: "creating digital records",
            href: "https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records",
          },
          ", HMRC is explicit: “You still need to keep original records or supporting documents (or copies of them) that you have used to prepare your tax return, such as bank statements and invoices.” The digital record itself is three fields — the amount, the date, and the category. The evidence behind it stays exactly where it was, which is your problem rather than HMRC's.",
        ],
      },
      {
        type: "quote",
        text: "Making Tax Digital digitised the summary, not the evidence. The shoebox is still a shoebox — it just has four deadlines now.",
      },
      {
        type: "p",
        text: [
          "And it has to survive. HMRC's requirement is to “keep your digital records for at least 5 years after the 31 January submission deadline for a tax year”, so a bank statement collected in July 2026 for the first quarter of 2026 to 2027 is still a record you may be asked to produce in early 2033. That is a long time for something that arrived as an email attachment, and it is the ",
          { text: "retention question", href: "/blog/how-long-accountants-keep-client-records" },
          " rather than a filing preference.",
        ],
      },
      { type: "h2", text: "Why does the cumulative rule change how you chase?" },
      {
        type: "p",
        text: "Because a gap does not stay in the quarter it arrived in. HMRC's wording is that “each time you send a quarterly update it will cover from the start of the tax year to the end of the update period, not just the previous three months”. Every update restates everything before it.",
      },
      {
        type: "p",
        text: "Work that through with one missing bank statement. Under annual Self Assessment, a statement you cannot get in July delays one filing, and the January clean-up absorbs it along with everything else. That was not laziness — it was efficient batching. One pass at the client, one set of queries, one review, once a year.",
      },
      {
        type: "p",
        text: "Under cumulative quarterly updates, the same missing statement is missing again in November, again in February, and again in May. You either carry a figure you know to be wrong through three more submissions, or you correct it three more times. Either way you touch that client's paperwork four times instead of once, and the correction has to be explained on each occasion.",
      },
      {
        type: "p",
        text: [
          "That is the real change, and it is not the filing. Deferring collection used to be the cheapest available option. It is now the most expensive one, which inverts an instinct ",
          { text: "every busy season is built around", href: "/blog/busy-season-triage-for-accounting-practices" },
          ".",
        ],
      },
      { type: "h2", text: "How many clients actually filed on time?" },
      {
        type: "p",
        text: [
          "Fewer than half. ",
          {
            text: "HMRC published the outcome",
            href: "https://www.gov.uk/government/news/436000-sole-traders-and-landlords-make-their-tax-digital",
          },
          " on 12 August 2026: more than 436,000 sole traders and landlords sent their first quarterly update, and over 570,000 had signed up to the service. Three weeks earlier it had put the number of people in scope at ",
          {
            text: "more than 864,000",
            href: "https://www.gov.uk/government/news/deadline-approaches-for-first-making-tax-digital-quarterly-update",
          },
          ".",
        ],
      },
      {
        type: "p",
        text: "The arithmetic on those figures is uncomfortable. Roughly 428,000 people who should have filed by 7 August did not, and roughly 294,000 have not signed up at all. HMRC states each figure as a floor rather than a count, so treat all three as approximate — but the shape does not depend on the rounding, and a good share of those people are somebody's clients.",
      },
      { type: "h2", text: "Why is 2026 to 2027 the year to fix this?" },
      {
        type: "p",
        text: "Two reasons, both HMRC's own. The first is that this year's mistakes are cheap: “no penalty points will be issued for late quarterly updates during the 2026 to 2027 tax year”, though penalties still apply for late tax returns and late payments. A collection process that fails this year costs you time. The same failure next year costs your client penalty points.",
      },
      {
        type: "p",
        text: "The second is that the population is about to grow without anyone opting in. From September 2026, HMRC begins signing up customers who should be using Making Tax Digital for the 2026 to 2027 tax year but have not yet done so. If you have been treating the un-signed-up as a problem for later, later starts next month.",
      },
      {
        type: "p",
        text: "There is a third reason that belongs to you rather than to HMRC. The £30,000 cohort starts on 6 April 2027, and it is identifiable from the 2025 to 2026 returns you will file between now and 31 January 2027. You are about to handle every document you need to build next year's in-scope list. Building it while the return is open costs minutes; rebuilding it in March costs a week.",
      },
      { type: "h2", text: "What does a quarterly collection cycle look like?" },
      {
        type: "p",
        text: "Four dated windows, one standing request list per client type, one internal cut-off per window, and one destination decided in advance. Set up once, run four times a year, changed as little as possible.",
      },
      {
        type: "p",
        text: "The thing that makes a quarterly cycle survivable is that it is identical every quarter. Annual collection could afford to be bespoke — you had eleven months of slack and one deadline. A quarterly cycle has about four and a half weeks between the period closing and the update falling due, four times a year, and anything bespoke inside that window will not be done the same way twice.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "The window opens when the period closes, not when the quarter opens. For the second quarter of 2026 to 2027 that is 6 October, not 6 July.",
          "The internal cut-off is your date, and it is not the statutory one. If the update is due 7 November, the cut-off you tell the client is late October, and the days between are review time rather than slack you have already spent.",
          "The request is the same list every quarter, so a client learns the shape of it by the second one and stops asking what you want.",
          "The destination is decided before the first request, so nobody is inventing a folder at the point of filing.",
        ],
      },
      { type: "h2", text: "What goes on the standing quarterly request list?" },
      {
        type: "p",
        text: [
          "Two lists, because a sole trader and a landlord collect different things. The mechanics of asking well — one link, a checklist rather than a paragraph, a stated deadline — are ",
          { text: "a separate subject", href: "/blog/stop-chasing-clients-for-documents" },
          ", and they do not change because the ask repeats.",
        ],
      },
      {
        type: "p",
        text: "For a sole trader, covering the period and nothing else:",
      },
      {
        type: "list",
        items: [
          "Business bank statements for the period, every account, including the one they forget",
          "Card, PayPal or Stripe statements for anything not already feeding the bookkeeping software",
          "Sales invoices raised in the period, and a note of which were still unpaid at period end",
          "Purchase invoices and receipts above whatever de minimis you have agreed with them",
          "The cash book, till summary or takings record, if any part of the business runs on cash",
          "Anything bought for the business through a personal account",
        ],
      },
      {
        type: "p",
        text: "For a landlord, per property rather than per client, which is the distinction that saves the most rework:",
      },
      {
        type: "list",
        items: [
          "Rent received for the period, per property",
          "Letting or managing agent statements, per property",
          "Mortgage interest certificates or the lender's annual statement",
          "Service charge, ground rent and insurance demands",
          "Repairs and maintenance invoices, each with a plain-English note of what the work was",
          "Costs of any new tenancy started in the period",
        ],
      },
      {
        type: "p",
        text: "The note on the repairs invoices is the item that repays the most effort, and it is a direct consequence of the cumulative rule. A £4,000 invoice reading “building works” is a capital-versus-revenue query, and a query you leave open in the first quarter is a query you have again in the second, third and fourth. Asking the client what the work was while they still remember costs one line in a request. Asking them in May costs a phone call and a guess.",
      },
      { type: "h2", text: "When in the quarter should you ask?" },
      {
        type: "p",
        text: "After the period has closed, and when you are ready to work it — not when the quarter opens. Two reasons, pointing the same way.",
      },
      {
        type: "p",
        text: "The first is that an early ask invites part of a quarter. A client who receives a request in July for a period that ends in October will send you what they have in July, in good faith, and you will have to ask again for the rest. The second request is the one that gets ignored, because it looks like the first one.",
      },
      {
        type: "p",
        text: [
          "The second is mechanical. Upload links expire, and if you are using ",
          { text: "document requests in XTK", href: "/guides/document-requests" },
          " the link closes 30 days after it is sent — a resend mints a fresh link rather than extending the old one, and it does not move the deadline. A request sent on the first day of a quarter is closed weeks before the update it was meant to serve. Sent at period end, the 30 days happen to match the real window almost exactly: 5 October to 7 November is 33 days.",
        ],
      },
      { type: "h2", text: "Where do the documents go once they arrive?" },
      {
        type: "p",
        text: [
          "One folder per client, in storage the practice owns, with a year-then-quarter structure agreed before the first request rather than after the third. The ",
          { text: "folder structure itself", href: "/blog/organise-client-documents-google-drive" },
          " matters less than that it is decided and identical across clients, because a quarterly cycle multiplies any inconsistency by four.",
        ],
      },
      {
        type: "p",
        text: "A tax year folder holding four quarter folders and one folder for the return is enough. What it buys you is a question you can answer in seconds rather than minutes: at any point in the year, which quarter is short of what. That question gets asked four times as often as it used to, and any structure that requires searching to answer it will be abandoned by February.",
      },
      {
        type: "p",
        text: "Choose with the retention clock in view — five years past a 31 January that is itself nine months after the period closed. These documents outlive the engagement, the software and probably the folder convention.",
      },
      { type: "h2", text: "What Making Tax Digital does not digitise" },
      {
        type: "p",
        text: "The client. If someone keeps their records in a carrier bag and hands it over in December, quarterly filing makes that four times worse and no tooling on either side fixes it. The Association of Taxation Technicians puts it as moving clients away from “the shoebox of receipts” method, which is the right instinct, but the move happens in a conversation and not in a rollout.",
      },
      {
        type: "p",
        text: "It is also a fee conversation, and this is the year to have it. Four collection cycles, four reviews and four rounds of queries is not the engagement that was priced for one annual clean-up, and a practice that absorbs the difference quietly will discover the cost in about eleven months. Decide per client who is keeping the records, who is sending the updates, and who is paying for which of those — before the quarter opens rather than inside the window.",
      },
      { type: "h2", text: "What does Xero Practice Manager already give you?" },
      {
        type: "p",
        text: "More than most practices use, and the quarterly shape happens to be exactly what its job model is for. A recurring job template plus four dates gives you four job instances per client per year, each carrying its own due date, its own assigned staff, and a job state you define yourself. None of that costs anything beyond the subscription you already hold.",
      },
      {
        type: "p",
        text: "The states are where the value is. Rather than one “MTD” job that is either open or closed for nine months, define the states the work actually passes through — requested, part provided, ready to prepare, submitted — so the answer to “where is this client” is a filter rather than a conversation. The Job Manager supports saved filter groups, so each quarter's view is configured once and reused.",
      },
      {
        type: "p",
        text: [
          "This is also the cross-client view, and it is the right place for it. A quarterly cycle is a scheduling problem before it is a document problem: you need to know which of two hundred clients are waiting on you, and that is a ",
          { text: "job-level question", href: "/blog/xero-practice-manager-job-documents" },
          " that Practice Manager answers natively.",
        ],
      },
      { type: "h2", text: "Where does XTK help, and where does it stop?" },
      {
        type: "p",
        text: "The stop first, because it is the more important half. XTK does no bookkeeping, keeps no digital records in the sense Making Tax Digital means, and submits nothing to HMRC. The amount-date-category records the rules require live in your compatible software. What XTK handles is the paperwork behind them: getting it out of the client, and putting it somewhere it will still be in 2033.",
      },
      {
        type: "callout",
        title: "XTK is not Making Tax Digital software",
        text: [
          "It holds no Making Tax Digital authorisation, does no bookkeeping, and cannot send a quarterly update. For the filing itself you need software that is compatible with Making Tax Digital for Income Tax, which XTK is not and does not compete with. HMRC withdrew its published listings table in July 2025 and now points you at its own ",
          {
            text: "software finder",
            href: "https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax",
          },
          " — the place to check any product, including the one you already use. Nothing in this article should be read as a compliance claim.",
        ],
      },
      {
        type: "p",
        text: [
          "What it does do, inside the Practice Manager tab you are already in: one folder per client in your practice's own Google Drive, OneDrive or SharePoint; a ",
          { text: "document request", href: "/guides/document-requests" },
          " that sends a checklist on one link with no client account, and flips each item from Outstanding to Provided as files land; ",
          { text: "folder templates", href: "/guides/folder-templates" },
          " so every quarter's structure is created identically without anyone building it by hand; and ",
          { text: "document templates", href: "/guides/document-templates" },
          " for the covering letter, filled from the client's live Practice Manager details. Files stay in your storage throughout — ",
          { text: "what XTK reads and holds", href: "/guides/how-xtk-handles-your-data" },
          " is written out in full, hedges included.",
        ],
      },
      {
        type: "p",
        text: "And the limits, stated as limits, because a quarterly article invites the assumption hardest of all: there are no automatic reminders and no scheduler of any kind. Nudging a client is a manual Resend on the row, which mints a new link, closes the previously emailed one, sends XTK's own wording rather than the message you composed, and does not extend the 30 days. Nothing aggregates what is outstanding across every client either; the cross-client view is Practice Manager's own Job Manager.",
      },
      { type: "h2", text: "The cost question quarterly filing exposes" },
      {
        type: "p",
        text: [
          "Four collection events per client per year instead of one is a volume change, and volume is what most practice tooling is priced on. A tool billed per client, per seat or per envelope scales with the new cadence; a flat price for the practice does not. Run the arithmetic on your own stack against four times the touchpoints before renewal rather than after, where the ",
          { text: "shape of each pricing model", href: "/blog/document-management-for-xero-practices-compared" },
          " matters more than its headline number.",
        ],
      },
      {
        type: "p",
        text: [
          "For what it is worth, XTK is ",
          { text: "$59 a month for the whole practice", href: "/pricing" },
          " — every feature, every team member, one connected Drive, with a 30-day trial and no card required. Four quarters or one, it is the same bill.",
        ],
      },
      { type: "h2", text: "A checklist before 7 November" },
      {
        type: "p",
        text: "Eight things, none of which need a purchase, and each of which can be finished in an afternoon.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Build the in-scope list from the 2024 to 2025 returns you have already filed. Qualifying income is turnover before expenses, so it is a figure you hold rather than one you estimate.",
          "Check who has signed up, and remember HMRC starts signing up the rest from September 2026. Confirm your own agent services account authorisations cover them.",
          "Decide, per client, who keeps the records and who sends the updates. Write the answer down where the person doing the work will see it.",
          "Write the standing request list once, per client type, and then stop rewriting it.",
          "Put the four windows in the practice calendar with your internal cut-off in each one, not the statutory date.",
          "Set up a recurring job per in-scope client with states that describe the collection, not just open and closed.",
          "Agree the folder structure before the first request, and create it for every in-scope client on the same day.",
          "Identify the £30,000 cohort from the 2025 to 2026 returns you file this season. They start on 6 April 2027 and you will never have their numbers in front of you more conveniently.",
        ],
      },
      {
        type: "p",
        text: "None of that is a Making Tax Digital project. It is a collection routine with four dates in it, which is the only part of this the rules left to you.",
      },
      {
        type: "callout",
        title: "Sources and date · last checked 19 August 2026",
        text: "Every quotation and figure above was read from HMRC's own guidance and news releases on 19 August 2026, linked throughout. Thresholds, deadlines and retention periods apply to specific tax years and client circumstances — this is general information and not tax advice, and your clients' obligations should be confirmed against HMRC or your professional body. XTK is an independent product, is not Making Tax Digital software, and is not affiliated with or endorsed by Xero Limited.",
      },
    ],
    faq: [
      {
        q: "Do I need to send receipts or invoices to HMRC with a quarterly update?",
        a: "No. A quarterly update contains only totals for each income and expense category used for your self-employment and property income — nothing is attached and nothing is uploaded. You must still keep the original records or supporting documents, or copies of them, such as bank statements and invoices, because they are what the totals were prepared from.",
      },
      {
        q: "How long do Making Tax Digital for Income Tax records have to be kept?",
        a: "At least 5 years after the 31 January submission deadline for the tax year, according to HMRC's guidance as at August 2026. For the 2026 to 2027 tax year, whose return is due 31 January 2028, that means records stay live until early 2033 — including the quarterly evidence collected in July 2026.",
      },
      {
        q: "What happens if a client misses a quarterly update deadline in 2026 to 2027?",
        a: "HMRC has said no penalty points will be issued for late quarterly updates during the 2026 to 2027 tax year. Penalties still apply for late tax returns and late payments, so the concession covers the quarterly updates only, and only for this first year.",
      },
      {
        q: "Can an agent send quarterly updates on a client's behalf?",
        a: "Yes. Agents need an agent services account and the relevant client authorisations for Making Tax Digital for Income Tax before they can file on a client's behalf. Existing authorisations transfer as main agent, and a supporting agent role with narrower permissions also exists.",
      },
    ],
  },
  {
    slug: "xero-workpapers-and-your-client-documents",
    title: "A pack is not a filing system: the new Xero Workpapers and your documents",
    excerpt:
      "The new Xero Workpapers holds the evidence behind one period's numbers, and it is built to be locked when that period is signed off. Your client documents are permanent, cross-year and cross-service. Both statements are true at once, and the practices that get caught out are the ones that only notice the first.",
    date: "2026-08-24",
    readingTime: "14 min read",
    category: "Practice tips",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/xero-workpapers-and-your-client-documents/og.png",
    thumbnail: {
      src: "/images/blog/xero-workpapers-and-your-client-documents/thumb.png",
      alt: "A locked FY26 workpaper pack on one side and an open client file spanning several years on the other, with engagement letters, identity records, constitutions and correspondence placed on the client-file side and bank statements and reconciliations on the pack side",
    },
    relatedSlugs: [
      "xero-partner-hub-what-happens-to-your-documents",
      "how-long-accountants-keep-client-records",
      "document-management-for-xero-practices-compared",
    ],
    relatedLinks: [
      { label: "Connect document storage", href: "/guides/connect-document-storage" },
      { label: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
      { label: "Job documents", href: "/guides/job-documents" },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "The new Xero Workpapers is a compliance tool. It holds the evidence behind one period's numbers, in a pack you can mark complete and lock, and Xero has never claimed it is anything else. It is not a document management system, and installing it does not give your client documents a home. Both things are true at once, and the distinction is worth more this year than last, because Australian practices now get the new Workpapers at no extra cost and a paid tier above it is priced per user.",
      },
      {
        type: "p",
        text: "This article covers what is live in which country and at what price, what a workpaper pack actually does with a document you attach to it, which client documents should never be filed in one, who else gets access to the data, and what per-user pricing does to a practice's stack. Nearly all of it is worth doing whether or not you ever open the product.",
      },
      { type: "h2", text: "What is the new Xero Workpapers, and what does it cost?" },
      {
        type: "p",
        text: [
          "It is a rebuilt workpapers product, developed with BGL, that replaces the one now renamed classic Workpapers. In Australia it is live and free: ",
          {
            text: "Xero's own words",
            href: "https://blog.xero.com/product-updates/new-xero-workpapers-seamless-compliance/",
          },
          " are that it is delivered “at no extra cost for all Australian practices at Bronze status and above”, reachable through Xero Practice Manager, Xero Tax, or Xero Partner Hub. In the United Kingdom and New Zealand the product pages still read “Coming soon” with a form to register interest.",
        ],
      },
      {
        type: "p",
        text: "Xero says it was built from 31 highly requested features with 166 beta practices, covering more than half of all workpapers feedback in its Product Ideas forum. The pitch is a connected chain — ledger data out of Xero, into a working trial balance, out to tax — and in Australia that chain includes the tax return. The UK and NZ feature copy stops at reporting, so the same product is a slightly different proposition depending on where you practise.",
      },
      {
        type: "p",
        text: [
          "Above the free tier sits Workpapers Plus, a paid add-on whose early access ",
          {
            text: "opened this month",
            href: "https://blog.xero.com/product-updates/xero-workpapers-updates-2026/",
          },
          " to a selected group of Australian practices. It adds Division 7A, capital gains, hire purchase and inter-entity loan worksheets, ATO pre-population, and AI data extraction from bank and loan statements. Standard pricing is $45 AUD excluding GST per user, per month, after three months at no cost and six at half price for early-access practices — an offer that Xero's own terms run from 3 August to 30 September 2026.",
        ],
      },
      {
        type: "table",
        head: ["Product", "Where", "Cost", "Status"],
        rows: [
          ["New Workpapers", "AU", "Included, Bronze+", "Live"],
          ["Workpapers Plus", "AU", "$45 AUD per user", "Early access"],
          ["New Workpapers", "UK, NZ", "Not stated", "Coming soon"],
          ["classic Workpapers", "AU, UK, NZ", "As today", "No changes yet"],
        ],
        caption:
          "Read from Xero's AU, UK and NZ product pages and two Xero blog posts on 24 August 2026. Prices exclude GST.",
      },
      {
        type: "p",
        text: "One line in that table matters more than the prices. Classic Workpapers is not being switched off, and Xero says nothing else is changing about it right now — but it has also said plainly that future investment goes to the new product. That is a transition to plan at your own pace, not a deadline, and the practices that fare worst with a change like this are the ones that treat “nothing is changing right now” as the end of the sentence.",
      },
      { type: "h2", text: "Does Xero Workpapers store your client documents?" },
      {
        type: "p",
        text: "No. It stores the evidence for a workpaper, which is a narrower thing. Xero's feature list is precise about it: you can “make calculations and attach documents, links, and notes to support your work”, keep “notes, queries and review points”, “quickly export workpapers, calculations, and supporting documents for easier client audits”, and “mark packs as complete and lock them to prevent further changes”. Every one of those verbs is about supporting a conclusion for a period.",
      },
      {
        type: "p",
        text: "The difference is easiest to hold as two questions. A workpaper pack answers “how did we arrive at this number for the year ended 30 June 2026?” A client file answers “what does this practice hold for this client?” The first is bounded by a period and signed off. The second outlives the engagement, the software and usually the staff member who opened it.",
      },
      {
        type: "p",
        text: "Both answers need somewhere to live, and a pack is a poor container for the second because everything good about it is period-shaped. Locking a pack is a feature when it is the evidence for a signed-off set of accounts. It is a problem when the only copy of a client's trust deed is inside it.",
      },
      { type: "h2", text: "Which documents never belong in a workpaper pack?" },
      {
        type: "p",
        text: "Five categories, and the test in each case is the same: does this document belong to a period, or to the relationship?",
      },
      {
        type: "list",
        items: [
          [
            "Engagement letters and signed authorities. They govern more than one year's work, they are the first thing anyone asks for in a fee dispute, and an e-signed one carries an ",
            { text: "audit trail worth keeping intact", href: "/blog/esignature-legality-for-accountants" },
            ". A pack per year would give you several copies and no canonical one.",
          ],
          [
            "Identity and customer due diligence records. These run on their own clock, and it is the one clock that starts when you ",
            { text: "stop acting for the client", href: "/blog/how-long-accountants-keep-client-records" },
            " rather than at a year end — which is exactly when a period-based filing system is least likely to be looked at.",
          ],
          "Permanent records: constitutions, trust deeds, shareholder registers, company registrations, prior filings. They change once a decade and are needed in years when there is no pack at all.",
          "Correspondence and advice. Not evidence for a number, but the record of what you told a client and when. It is the part of the file that matters most when something goes wrong, and the part most often left in an inbox.",
          "Client-supplied documents that arrive before any pack exists. Half a busy season's paperwork lands before anyone has opened a job, let alone a workpaper, and it has to be somewhere sensible in the meantime.",
        ],
      },
      {
        type: "p",
        text: [
          "Bank statements, reconciliations, asset schedules, calculations and the evidence behind an adjustment go the other way — they are period documents and a pack is the right place for them. The clean split is by job and period, which is also the split ",
          { text: "Practice Manager's own job model", href: "/blog/xero-practice-manager-job-documents" },
          " already describes. If your filing structure already separates a year's job papers from a client's permanent file, you have done most of this work; the new Workpapers just gives the first half a better home.",
        ],
      },
      { type: "h2", text: "What happens to a document when the pack is locked?" },
      {
        type: "p",
        text: "Xero has published that packs can be marked complete and locked to prevent further changes, and that key information and documents roll over from previous years. What it has not published — anywhere we could find on 24 August 2026 — is what becomes of the documents inside a pack when a practice leaves the product, drops below Bronze status, or stops paying for a tier. So this is a question to ask, not one to answer from a product page.",
      },
      {
        type: "callout",
        title: "The test that outlasts a subscription",
        text: [
          "Could you produce this document in seven years, for a regulator or a client, without a working login to the product it is filed in? It is the same test the ",
          { text: "retention article", href: "/blog/how-long-accountants-keep-client-records" },
          " applies to every storage decision, and it has nothing to do with whether a vendor is trustworthy — it is about whether your obligation to hold a record depends on a commercial relationship continuing. Where the answer is no, the document needs a copy somewhere the answer is yes.",
        ],
      },
      {
        type: "p",
        text: "The practical rule that follows is short: copy documents into a pack, never move them into one. Attach the bank statement to the workpaper because that is where a reviewer needs it, and keep the client's copy where it was. The duplication is deliberate, it costs nothing in a storage account you already pay for, and it means a locked FY26 pack is a convenience rather than a dependency.",
      },
      { type: "h2", text: "Who else gets access to the client data?" },
      {
        type: "p",
        text: [
          "BGL does, and Xero says so plainly on both the ",
          { text: "Australian", href: "https://www.xero.com/au/xero-workpapers/" },
          " and ",
          { text: "UK", href: "https://www.xero.com/uk/xero-workpapers/" },
          " product pages: “To provide you with a seamless experience, you'll need to give BGL access to your clients' Xero organisations. BGL will use the data to deliver services, for support and reliability purposes and for product improvement.”",
        ],
      },
      {
        type: "p",
        text: "Read fairly, that is an ordinary arrangement stated unusually clearly. A product built with a partner needs the partner to reach the data, BGL has supplied compliance software to Australian practices for decades, and disclosing the purposes on a public marketing page is better practice than most integrations manage. It is not a reason to avoid the product. It is a reason to write it down, because your clients' data is being processed by a company they have never heard of, on your authority.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          [
            "Read the terms before you tick the box. BGL publishes its ",
            {
              text: "Xero Embedded Workpapers subscription agreement",
              href: "https://www.bglcorp.com/wp-content/uploads/2026/02/BGL-Xero-Embedded-Workpapers-Cloud-Software-Subscription-Agreement-18-February-2026.pdf",
            },
            " as a dated PDF — the version current when this article was written is 18 February 2026. It is where the terms that matter live — data handling, and what happens if you leave — and it is the document nobody reads.",
          ],
          "Add BGL to your own list of processors. Most practice privacy notices and some engagement letters name the third parties that handle client data, and a list that is missing the newest one is the kind of small inaccuracy that is awkward to explain later.",
          "Decide what “product improvement” means to you. For most practices the answer will be that it is fine and disclosed. For a firm with clients who ask hard questions about their data — and every practice has a few — the answer needs to be one you have reached deliberately rather than by clicking Allow access.",
        ],
      },
      {
        type: "p",
        text: [
          "The same three questions should be asked of every add-on in your stack, including ours. XTK's answers are written out in the ",
          { text: "how we handle your data guide", href: "/guides/how-xtk-handles-your-data" },
          ", hedges included: files live in your practice's own Google Drive, OneDrive or SharePoint rather than on our servers; uploads go direct from the browser to your storage, while downloads and server-side jobs such as zipping, PDF merging and signature flattening stream through XTK without being kept; Convert to PDF hands the file to CloudConvert; and client and file names do reach our database as workflow metadata. An add-on that tells you only the flattering half of that is the one to be careful with.",
        ],
      },
      { type: "h2", text: "What does per-user pricing do to a practice's stack?" },
      {
        type: "p",
        text: "It ties the bill to headcount, which is fine until headcount changes. At $45 AUD per user per month, the same product costs a sole practitioner $540 a year and a ten-person firm $5,400 — and the day you hire a graduate, every per-user line in the stack re-prices at once.",
      },
      {
        type: "table",
        head: ["Staff", "Per month", "Per year"],
        rows: [
          ["1", "$45", "$540"],
          ["3", "$135", "$1,620"],
          ["5", "$225", "$2,700"],
          ["10", "$450", "$5,400"],
        ],
        caption:
          "Workpapers Plus at Xero's stated standard price of $45 AUD per user per month, excluding GST, before any early-access discount. Australia only.",
      },
      {
        type: "callout",
        title: "This is not a like-for-like comparison",
        text: [
          "Workpapers Plus does compliance work XTK does not do at any price — trial balances, adjustments, Division 7A, ATO pre-population. The point of the arithmetic is the shape of the model rather than the size of the number, and ",
          { text: "the shape of each pricing model", href: "/blog/document-management-for-xero-practices-compared" },
          " in a practice stack is worth understanding before renewal rather than after.",
        ],
      },
      {
        type: "p",
        text: "Practically, price the tier at the headcount you expect in eighteen months rather than today's, put the end of any introductory discount in the practice calendar the week you sign up, and check which other tools in the stack are billed the same way. A stack where every line scales with staff is a stack that makes hiring feel expensive.",
      },
      { type: "h2", text: "So what still needs a home?" },
      {
        type: "p",
        text: "Everything in the five categories above, plus everything a client sends you before there is a pack to put it in. That is the half of the problem the new Workpapers does not touch, and it is the half that generates the chasing, the duplicate copies and the “can you resend that” emails.",
      },
      {
        type: "callout",
        title: "XTK is not a workpapers tool",
        text: "It does no bookkeeping, builds no trial balance, posts no adjustments, calculates no Division 7A and lodges nothing with any revenue authority. If what you need is workpapers, use workpapers — in Australia the new one is included at Bronze status and above, and nothing here is an argument against it.",
      },
      {
        type: "p",
        text: [
          "What XTK does is the document half, inside the same Practice Manager tab: a folder per client in your practice's own ",
          { text: "Google Drive, OneDrive or SharePoint", href: "/guides/connect-document-storage" },
          "; ",
          { text: "folder templates", href: "/guides/folder-templates" },
          " so the permanent-versus-period split is created identically for every client instead of being a convention people remember; ",
          { text: "job and quote level filing", href: "/guides/job-documents" },
          " so a year's papers sit against the job they belong to; ",
          { text: "document requests", href: "/guides/document-requests" },
          " that send a client a checklist on one link with no account to create; ",
          { text: "e-signatures", href: "/guides/send-documents-for-signature" },
          " that file the signed PDF beside the original with the certificate of completion appended as its final page; and ",
          { text: "document templates", href: "/guides/document-templates" },
          " filled from the client's live Practice Manager details.",
        ],
      },
      {
        type: "p",
        text: "And the limits, because an article about someone else's product is a bad place to get vague about your own. XTK has no reminders and no scheduler of any kind: nudging a client is a manual Resend, which mints a new link, kills the previously emailed one, sends XTK's own wording rather than your message, and does not extend the request's 30-day life. There is no cross-client dashboard of what is outstanding — that is Practice Manager's Job Manager. And it is a browser extension, so it works where Practice Manager works.",
      },
      {
        type: "p",
        text: [
          "It is ",
          { text: "$59 a month for the whole practice", href: "/pricing" },
          " — every feature, every staff member, one connected storage account, 30-day trial, no card. Hiring does not change the bill, which is the one thing worth saying next to a per-user line.",
        ],
      },
      { type: "h2", text: "Six things to do before Partner Hub moves you" },
      {
        type: "p",
        text: [
          "Xero's position as at July 2026 is that you can opt in to Partner Hub now “or be moved automatically when it rolls out to all practices later this year”, and ",
          { text: "Practice Manager is being absorbed into it", href: "/blog/xero-partner-hub-what-happens-to-your-documents" },
          " either way. None of the following needs a purchase, and all of it is easier before the move than after.",
        ],
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Write down, on one page, which of the two systems each category of document lives in. Permanent to the client file, period to the pack. A rule nobody has written down is a rule that lasts until the next new starter.",
          "Make copy-in-never-move-in the standing instruction, and say it in the same sentence as “attach the evidence to the workpaper” so the two arrive together.",
          "Run the seven-year test on anything whose only copy would end up inside a locked pack. Fix those before you have fifty of them.",
          "Add BGL to your processor list and read the subscription agreement. Fifteen minutes, once.",
          "Price the per-user tier at the headcount you expect in eighteen months, and diarise the end of any introductory discount.",
          "Decide when you are moving off classic Workpapers rather than waiting to be told. Nothing is changing yet, but the investment has already moved.",
        ],
      },
      {
        type: "p",
        text: "The new Workpapers looks like a genuine improvement to a job most practices spend an unreasonable share of their year on. It is still a compliance tool, and a compliance tool's memory ends at the period. Your client's file does not, which is the part left to you.",
      },
      {
        type: "callout",
        title: "Sources and date · last checked 24 August 2026",
        text: "Every quotation, price and date above was read on 24 August 2026 from Xero's own product pages for Australia, the United Kingdom and New Zealand and from two Xero blog posts dated 25 November 2025 and 15 July 2026, linked throughout. Availability, pricing and rollout dates differ by country and partner status and change often — confirm yours in Xero Practice Manager or Xero Partner Hub before making a decision. Statutory retention periods depend on jurisdiction and client circumstances; this is general information, not legal, tax or compliance advice. XTK is an independent product and is not affiliated with or endorsed by Xero Limited or BGL Corporate Solutions.",
      },
    ],
    faq: [
      {
        q: "Is the new Xero Workpapers a document management system?",
        a: "No. It holds the evidence supporting a period's numbers — attached documents, links, notes, queries and review points — in a pack that can be marked complete and locked to prevent further changes. Permanent client records such as engagement letters, identity verification records, constitutions and trust deeds span multiple years and belong in a client file that stays open, not in a pack that is designed to be closed.",
      },
      {
        q: "Is the new Xero Workpapers free?",
        a: "In Australia, yes, for practices at Bronze partner status and above, accessed through Xero Practice Manager, Xero Tax or Xero Partner Hub. Workpapers Plus is a separate paid add-on at a stated standard price of $45 AUD excluding GST per user, per month. In the United Kingdom and New Zealand the new Workpapers was still listed as coming soon as at 24 August 2026, with no price published.",
      },
      {
        q: "Does BGL get access to my clients' Xero data?",
        a: "Yes, and Xero states it on the product page: to use the new Workpapers you give BGL access to your clients' Xero organisations, and BGL uses that data to deliver services, for support and reliability purposes, and for product improvement. BGL publishes its subscription agreement as a dated PDF. Practices that name their data processors in a privacy notice or engagement letter should add BGL to that list.",
      },
      {
        q: "What is happening to the classic Xero Workpapers?",
        a: "The previous product has been renamed classic Workpapers and Xero says current users can keep using it as they always have, with nothing else changing for now. Xero has also said its future investment goes to the new solution, so treat classic Workpapers as a transition to plan at your own pace rather than a product with a published end date.",
      },
      {
        q: "Can I attach client documents to a workpaper pack instead of filing them?",
        a: "You can attach them, but copy rather than move. A pack can be locked when the period is signed off, and no public Xero documentation as at 24 August 2026 states what happens to documents inside a pack if a practice leaves the product or changes partner status. Any document you may need to produce in seven years should also exist somewhere you control, such as your practice's own Google Drive, OneDrive or SharePoint.",
      },
    ],
  },
  {
    slug: "what-leaving-a-document-system-costs",
    title: "The documents are the easy part: what leaving a document system costs",
    excerpt:
      "Every vendor will tell you that you can export your data. Almost none of them are asked the more useful question: on the day you cancel, which of the things you rely on stop working, and which do they keep? Here is what two vendors publish, and the six questions to put to any of them before you sign.",
    date: "2026-08-27",
    readingTime: "14 min read",
    category: "Practice tips",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/what-leaving-a-document-system-costs/og.png",
    thumbnail: {
      src: "/images/blog/what-leaving-a-document-system-costs/thumb.png",
      alt: "A signed PDF with a Certificate of Completion page standing on a plinth labelled “Your own Drive”, while three chips — client portal, share links and audit history — lift away from it and dissolve",
    },
    relatedSlugs: [
      "document-management-for-xero-practices-compared",
      "how-long-accountants-keep-client-records",
      "xero-workpapers-and-your-client-documents",
    ],
    relatedLinks: [
      { label: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
      { label: "Connect document storage", href: "/guides/connect-document-storage" },
      { label: "Your data rights & deletion", href: "/legal/data-deletion" },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "When a practice leaves a document system, the documents are usually fine. What goes is the layer wrapped around them: the audit trail behind every signature, the links your team has already pasted into job notes and emails, the client portals your clients are logged into, the templates, and anything still in flight. Vendors answer “can we export our data?” with a yes, because the answer is a yes. It is the wrong question.",
      },
      {
        type: "p",
        text: "The better question has a date on it: on the day we cancel, which of the things we rely on stop working, and which do you keep? This article covers what actually happens to the files, what two vendors publish about their own exits, where a signature's audit trail really lives, and six questions worth putting to any vendor in writing — including to us. Nearly all of it is worth doing whether or not you ever install anything of ours.",
      },
      { type: "h2", text: "What actually happens to your files when you cancel?" },
      {
        type: "p",
        text: "It depends on one thing above all others: whose storage tenant the bytes are sitting in. There are three shapes, and most practices could not say for certain which one they are on without going and looking, because the answer was set during onboarding and has not been thought about since.",
      },
      {
        type: "table",
        head: ["Shape", "Where files sit", "On cancellation"],
        rows: [
          ["Vendor-held", "The vendor's storage", "You export, or lose them"],
          ["Your-storage-backed", "Your own tenant", "They stay put"],
          ["Either, by setup", "Depends how you set it up", "Depends how you set it up"],
        ],
        caption:
          "The three storage shapes. Only the second one makes “can we export?” an uninteresting question.",
      },
      {
        type: "p",
        text: "A vendor-held system needs a real export, and an export is a project: it has to run before your access ends, it produces a folder tree that may or may not resemble the one you had, and the metadata that made the system useful — who approved what, when, against which job — is usually not in it. A system backed by your own Microsoft 365 or Google Workspace tenant needs nothing, because the files were never anywhere else. That single architectural choice is worth more at exit than any feature on a comparison page.",
      },
      { type: "h2", text: "What does SuiteFiles say happens when you cancel?" },
      {
        type: "p",
        text: [
          "SuiteFiles is the clearest published example, and it is a good result on the part that matters most. Because SuiteFiles is built on your practice's own SharePoint, its ",
          {
            text: "cancellation page",
            href: "https://help.suitefiles.com/cancelling-your-suitefiles-subscription",
          },
          " says the site is decommissioned and “will revert to a SharePoint Online site”. The documents do not go anywhere. There is no export project, because there is nothing to export — the same reason we build the way we do, and it is worth saying plainly rather than grudgingly.",
        ],
      },
      {
        type: "p",
        text: "The same page then lists what the site loses access to, and this is the part worth reading twice:",
      },
      {
        type: "list",
        items: [
          "Your audit history on documents signed using SuiteFiles document signing",
          "The Xero integration, and file, email and folder templates",
          "Secure file sharing with SMS verification, and SuiteBackups",
          "The SuiteFiles Outlook add-in",
          "Links created with the Copy Links feature, which “will no longer direct you to the file or folder”",
        ],
      },
      {
        type: "p",
        text: "None of that is a criticism of SuiteFiles. It is a vendor documenting its own exit in public, in specific terms, which is more than most do — and every item on it is a thing that lives in the vendor's system by necessity rather than by choice. The point is that the list exists at all, and that a practice reading it before signing would ask different questions than one reading it during the notice period.",
      },
      {
        type: "p",
        text: "There is a clock, too. SuiteFiles requires 30 days' notice under its terms; the cancellation date is the day you tell them plus 30, and sites are usually decommissioned at the end of the month after the next billing cycle. Documents out for signing and client portal connections stop working once the site is decommissioned, so their own advice is to set signing due dates before the cancellation date, or withdraw what is out.",
      },
      { type: "h2", text: "What does Karbon say?" },
      {
        type: "p",
        text: [
          "Karbon's answer is “it depends”, and the dependency is a setup choice most practices made once and forgot. Karbon supports two arrangements: Karbon Storage, where files are uploaded into Karbon itself, and a Connected Folder pointed at OneDrive or Dropbox. Its ",
          {
            text: "document storage FAQ",
            href: "https://help.karbonhq.com/en/s/articles/10644315-frequently-asked-questions-document-storage-in-karbon",
          },
          " is unambiguous about the second: “Your files remain in your external storage, but you will no longer see or access them through Karbon until you reconnect.”",
        ],
      },
      {
        type: "p",
        text: "So the same product gives two different exits. A practice on Connected Folders is in the second shape above and has very little to do. A practice that has been dragging files into Karbon Storage for three years is in the first, and has an export project it has not scoped. Both are reasonable ways to run the product. Only one of them is a decision anybody made deliberately.",
      },
      {
        type: "p",
        text: "Two details from the same page are worth knowing while you are checking which one you are on: Karbon connects one external provider at a time, OneDrive or Dropbox, and deleting a file in Karbon does not delete it in the connected storage — deletions have to be managed in the storage provider itself.",
      },
      { type: "h2", text: "Where does a signature's audit trail actually live?" },
      {
        type: "p",
        text: "This is the exit question with the longest tail, and almost nobody asks it. A completed e-signature is two things: a signed document, and the evidence of how it was signed — who, when, from which address, in what order. If the second one lives in the vendor's database rather than in the document, then it is a feature of your subscription, and it ends when the subscription does.",
      },
      {
        type: "p",
        text: [
          "That matters because the retention clock outlives almost every software decision a practice makes. Set against ",
          {
            text: "the periods records actually have to be kept for",
            href: "/blog/how-long-accountants-keep-client-records",
          },
          ", an engagement letter signed this year may need to be produced long after the tool that captured the signature has been cancelled, the vendor has been acquired, or the partner who chose it has retired. An audit trail you cannot produce in year six is not an audit trail. It is a screenshot you meant to take.",
        ],
      },
      {
        type: "p",
        text: "Almost every tool does the first, and XTK is no exception. It keeps an append-only log of a signature request — created, sent, link resent, viewed, signed, declined, completed, voided — each with its timestamp and, where a recipient drove it, the address and device it came from. That log is what the status screen shows you while a request is in flight, and it is a feature of the subscription. It ends with the subscription, here as anywhere else. Any vendor telling you otherwise is describing something else.",
      },
      {
        type: "p",
        text: [
          "The question that decides what you keep is whether any of it is also written into the document. XTK does that as well: when the last signer finishes, ",
          {
            text: "each document comes back",
            href: "/guides/send-documents-for-signature",
          },
          " as a flattened PDF with a Certificate of Completion appended as its final page — the request id, an integrity hash of the captured values, and for each signer their name and email, the time they signed in UTC, the IP address and the device. It is named after the original with “ (signed)” added and filed beside it in that client's folder. The original is never altered, so you keep both.",
        ],
      },
      {
        type: "p",
        text: "So the honest version is a split rather than a clean win. The narrative — who opened it on Tuesday and did nothing, when you resent the link — lives in the vendor's system and goes when you go. The subset you would actually have to produce years later, which is who signed, when, from where, and a hash that shows the values have not been altered since, is a page of a PDF in your own Drive. Those are different things, and only one of them survives a cancellation.",
      },
      {
        type: "p",
        text: "There is a limit worth stating plainly, because it is the case where this offers nothing. A request that was declined, voided or simply abandoned never produces a signed PDF, so there is no page for the evidence to ride on. The whole record of that request lives in the vendor's system, and it is as mortal as the subscription. If a declined signature is something your practice would ever need to show, it needs exporting while you are still a customer — from any vendor, including this one.",
      },
      { type: "h2", text: "What happens to links you have already pasted?" },
      {
        type: "p",
        text: "Links are the quiet one. Over a few years a practice sprays document links into places it does not control and cannot audit: job notes in Practice Manager, emails already sent to clients, engagement letters, workpapers, internal checklists, a spreadsheet somebody maintains. Every one of those is a small bet that the link will still resolve later.",
      },
      {
        type: "p",
        text: "SuiteFiles says plainly that its Copy Links stop directing to the file or folder after decommission. That is honest, and it is also the general case: any link whose host is the vendor's application dies with the subscription, while a link whose host is your own Drive or SharePoint does not. Before you sign, it is worth knowing which kind of link the “copy link” button produces — and worth telling your team, because the answer changes what they should be pasting into a client email.",
      },
      { type: "h2", text: "What about signatures and portals still in flight?" },
      {
        type: "p",
        text: "A notice period and a busy practice collide badly. Thirty days is a normal notice requirement, and thirty days is also roughly how long an engagement letter can sit unsigned in a client's inbox. Anything out for signature when the lights go out is not merely delayed; the signing link stops working, and the client sees a broken page rather than a document. The same applies to client portals — from the client's side, a portal that stops resolving looks like your practice's failure, not your vendor's.",
      },
      {
        type: "p",
        text: "This has an unglamorous fix, which is why it is worth writing down: before you give notice anywhere, pull the list of open signature requests and open portal shares, finish or withdraw them, and tell any client who is mid-flow. Do it before the notice starts rather than during it, because during it you will be doing everything else as well.",
      },
      { type: "h2", text: "Six questions to ask before you sign" },
      {
        type: "p",
        text: "These are answerable in writing by any vendor, in a few sentences, without a call. A vendor that answers all six crisply is telling you something good about itself regardless of what the answers are; a vendor that routes you to a salesperson is telling you something too.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "On the day we cancel, whose storage tenant are the document bytes in? Name it.",
          "Which features stop working while the documents stay? Ask for the list, in the vendor's own words — SuiteFiles publishes one, which is the standard to hold others to.",
          "Is any of a completed signature's audit trail written into the PDF itself, or does all of it live only in your database?",
          "Do links we have already pasted elsewhere keep resolving after we leave?",
          "How much notice do we owe, and what happens to signatures and portals in flight during it?",
          "What do you keep after we go, for how long, and how do we ask for it to be deleted?",
        ],
      },
      {
        type: "callout",
        title: "Ask the same six of the tool you are already on",
        text: [
          "These are not only for a purchase. Most practices reading this are already three years into something, and the answers are the same length either way. The other place the same questions belong is anywhere a third party has been given access to client data — ",
          {
            text: "the new Xero Workpapers is a live example",
            href: "/blog/xero-workpapers-and-your-client-documents",
          },
          ", where using the product means granting BGL access to your clients' Xero organisations.",
        ],
      },
      { type: "h2", text: "How XTK answers the same six questions" },
      {
        type: "p",
        text: [
          "In order, and including the two we do not win. First: the bytes are in your practice's own Google Drive, OneDrive or SharePoint, in a folder you nominate. XTK stores pointers to your folders and files, never their contents — ",
          {
            text: "the data guide",
            href: "/guides/how-xtk-handles-your-data",
          },
          " sets out exactly what the backend does hold, and where bytes do stream through it.",
        ],
      },
      {
        type: "p",
        text: "Second: cancelling takes effect at the end of the period you have paid for, and after that the practice is read-only — everyone can still sign in, browse every client folder, search and download; nothing can be created or changed. Disconnecting storage removes XTK's access and leaves every folder and file exactly where it is, as ordinary files. Closing the account never touches anything in your storage.",
      },
      {
        type: "p",
        text: "Third: both, and only half of it survives — the event log goes, the certificate page stays, as set out above. Fourth is a loss: portal access is a marker XTK holds, so a shared portal stops when the account does, though nothing shared is deleted and the files stay in the client's folder for your team. Fifth is also a loss: in read-only your clients cannot upload or sign, so anything in flight has to be finished before the period ends. Sixth: closing your account deletes your accounts, encrypted tokens and workflow records — requests, event logs, share markers, notifications — within 30 days of a verified request, and never touches your Drive.",
      },
      {
        type: "callout",
        title: "Three of those six have a loss in them, and that is the honest answer",
        text: [
          "A tool that claimed to lose nothing would be claiming to hold nothing, which cannot be true of anything that sends a portal invitation or chases a signature. The narrow claim worth making is about the ",
          {
            text: "documents and the evidence written into them",
            href: "/guides/connect-document-storage",
          },
          ": those survive us, because they were never ours to begin with, and leaving costs a disconnect rather than a migration. Everything that is a record about the work rather than a page of it goes the same way it goes everywhere else. XTK is one flat price for the practice, and it is not a migration tool: it will not lift your files out of another vendor for you.",
        ],
      },
      { type: "h2", text: "What to do this week" },
      {
        type: "p",
        text: "None of this requires a decision about software. It requires forty minutes and a document you can find again in two years.",
      },
      {
        type: "list",
        items: [
          "Find out which storage shape you are on, by opening a client's document in your current system and checking whose domain the URL belongs to.",
          "Send your vendor the six questions in one email, and file the reply with your practice's other supplier records.",
          "Open one completed signature from last year and see whether the evidence is in the file or only on a screen.",
          "Count the places your team pastes document links, and decide whether those links belong to you or to a subscription.",
        ],
      },
      {
        type: "callout",
        title: "Sources and dates",
        text: [
          "SuiteFiles' and Karbon's own help pages, both read 27 August 2026: ",
          {
            text: "Cancelling your Subscription",
            href: "https://help.suitefiles.com/cancelling-your-suitefiles-subscription",
          },
          " and ",
          {
            text: "Document storage frequently asked questions",
            href: "https://help.karbonhq.com/en/s/articles/10644315-frequently-asked-questions-document-storage-in-karbon",
          },
          ". Vendors change help pages without notice, so re-read both before relying on them. XTK's own behaviour is described in its guides and on its ",
          {
            text: "data rights and deletion page",
            href: "/legal/data-deletion",
          },
          ". Other vendors are named here only where they publish an answer; where one has published nothing, the honest position is to ask rather than to guess. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
        ],
      },
    ],
    faq: [
      {
        q: "If I cancel my document management system, do I lose my client files?",
        a: "It depends whose storage the files were in, which is set at onboarding rather than at cancellation. If the system is backed by your own Microsoft 365 or Google Workspace tenant, the files stay where they are and there is nothing to export — SuiteFiles, for example, states that a cancelled site reverts to an ordinary SharePoint Online site. If the files were uploaded into the vendor's own storage, you need a real export completed before your access ends. Some products support both arrangements, so the answer can differ between two practices using the same software.",
      },
      {
        q: "What is usually lost when you leave a document system, if not the documents?",
        a: "The layer built around them. SuiteFiles' own cancellation page lists the audit history on documents signed through its signing feature, file, email and folder templates, the Xero integration, SMS-verified secure sharing, SuiteBackups, the Outlook add-in, and any links created with Copy Links, which will no longer direct to the file or folder. In-flight signing requests and client portal connections also stop working once the site is decommissioned. The general pattern is that anything hosted by the vendor's application ends with the subscription, while anything written into a file in your own storage does not.",
      },
      {
        q: "Where should an e-signature audit trail be stored?",
        a: "In two places, because it is really two things. Every tool keeps a server-side event log — created, sent, resent, viewed, signed, declined, completed — and that log is a feature of the subscription and ends with it. XTK keeps one too. What decides whether anything survives is if the essential facts are also written into the document. XTK appends a Certificate of Completion as the final page of the flattened signed PDF — the request id, an integrity hash of the captured values, and for each signer their name and email, the signing time in UTC, the IP address and the device — and files it beside the original in the client's folder. That page survives cancellation; the surrounding event log does not. Requests that were declined or abandoned produce no signed PDF at all, so their record is only ever in the vendor's system.",
      },
      {
        q: "Does Karbon store documents in Karbon or in my own storage?",
        a: "Either, depending on how it was set up. Karbon Storage holds files in Karbon itself; a Connected Folder points at OneDrive or Dropbox, and Karbon's own FAQ states that if you disconnect the document management system your files remain in your external storage, though you can no longer see or access them through Karbon until you reconnect. Karbon supports one external provider at a time, and deleting a file in Karbon does not delete it in the connected storage. Read as at 27 August 2026.",
      },
      {
        q: "Does anything stop working if we cancel XTK?",
        a: "Yes, and it is worth knowing which parts. Cancelling takes effect at the end of the period you have paid for, after which the practice is read-only: everyone can sign in, browse, search and download, but nothing can be created or changed, and clients cannot upload or sign. Client portal access stops, because a portal share is a marker XTK holds rather than a copy of anything. Closing the account also deletes XTK's own event logs — the viewed, resent and declined history behind each signature request — which is the same trade every vendor's audit screen carries. What does not change is the documents: they sit in your own Google Drive, OneDrive or SharePoint throughout, signed PDFs keep their Certificate of Completion page, and closing the account never touches anything in your storage.",
      },
      {
        q: "What should I ask a document management vendor before signing?",
        a: "Six things, in writing: whose storage tenant the document bytes are in on the day you cancel; which features stop working while the documents stay; whether any of a completed signature's audit trail is written into the PDF itself or all of it lives only in the vendor's database; whether links you have already pasted elsewhere keep resolving after you leave; how much notice you owe and what happens to signatures and portals in flight during it; and what the vendor keeps after you go, for how long, and how you ask for it to be deleted.",
      },
    ],
  },
  {
    slug: "companies-house-identity-verification-records",
    title: "Verified is not filed: seven years of Companies House ID evidence",
    excerpt:
      "If you verify a director's identity, you must keep the request and every piece of evidence you considered for seven years — including for the people you refused. The rules say what to keep and how long. They never say where, and the hardest file is the one with no client attached to it.",
    date: "2026-08-31",
    readingTime: "16 min read",
    category: "Practice tips",
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
        text: "In practice the evidence ends up in one of three places, rarely by deliberate choice: the verification vendor's platform, where the check was performed; a practice management or document management system; or a Google Workspace or Microsoft 365 tenant the practice controls directly.",
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
  },
  {
    slug: "icaew-engagement-letter-update-2026",
    title: "Issued is not agreed: the 2026 engagement letter refresh",
    excerpt:
      "ICAEW revised its engagement letter templates in March 2026 — new schedules for MTD and for acting as an ACSP, and Terms of Business that now refer to AI. Updating your letter is the easy half. Proving which version each client agreed to is a filing decision you make at the moment you send.",
    date: "2026-09-02",
    readingTime: "14 min read",
    category: "Practice tips",
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
        text: "This is UK-scoped, because ICAEW's templates are. Nothing below requires you to install anything.",
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
          "Send for signature and track what comes back, per client, until every one is closed or explicitly written off.",
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
  },
  {
    slug: "xero-practice-manager-sharepoint-onedrive",
    title: "SharePoint or OneDrive for Xero Practice Manager client files",
    excerpt:
      "Xero Practice Manager has no SharePoint or OneDrive integration, so a Microsoft 365 practice pays for storage it cannot use from XPM. Here is where client files should live — a SharePoint library, not someone's OneDrive — how to set it up, and why Microsoft now asks an admin to approve any app that opens it.",
    date: "2026-09-10",
    readingTime: "11 min read",
    category: "Guides",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/xero-practice-manager-sharepoint-onedrive/og.png",
    thumbnail: {
      src: "/images/blog/xero-practice-manager-sharepoint-onedrive/thumb.png",
      alt: "Client files belong to the practice: on the left, a stack of dashed client folders labelled OneDrive fades out above a single person, tagged 30 days after their account is deleted, by default; on the right, the same stack in solid white, labelled SharePoint library, stands on a building and a plinth, marked stays when anyone leaves",
    },
    relatedSlugs: [
      "document-management-for-xero-practices-compared",
      "organise-client-documents-google-drive",
    ],
    relatedLinks: [
      { label: "Connect Google Drive, OneDrive or SharePoint to XTK", href: "/guides/connect-document-storage" },
      { label: "Invite your team", href: "/guides/invite-your-team" },
      { label: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: [
          "Xero Practice Manager (XPM) does not integrate with SharePoint or OneDrive. Files you upload in XPM are stored in Practice Manager itself, 16MB at most, unless you connect one of the document management systems it supports — and Microsoft 365 is not one of them. A request to add SharePoint has sat on ",
          {
            text: "Xero's product ideas board",
            href: "https://productideas.xero.com/forums/967127-practice-tools/suggestions/47042146-practice-manager-add-office-365-sharepoint-as",
          },
          " since August 2023, still marked “submitted”, with its most recent comment posted on 18 August 2026: “Please allow us to use Sharepoint for our document storage.”",
        ],
      },
      {
        type: "p",
        text: "That leaves a practice running on Microsoft 365 paying for storage it cannot use from the screen it works in all day. This article is about closing that gap, and most of it is worth doing whether or not you ever install anything. It starts with the decision that matters more than any tool: which of Microsoft's two places your client files live in. For a practice with staff, the answer is a SharePoint document library, not anybody's OneDrive — and the reason is what Microsoft does to a OneDrive when its owner leaves.",
      },
      { type: "h2", text: "Does Xero Practice Manager integrate with SharePoint or OneDrive?" },
      {
        type: "p",
        text: [
          "No. Xero Central's article on ",
          {
            text: "uploading and managing documents in Practice Manager",
            href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
          },
          " describes two places a file can go: into Practice Manager, with a 16MB maximum upload, or into a document management system you have integrated. The SharePoint request on Xero's ideas board, posted in August 2023, opens by noting that XPM lists four other cloud document systems and asks for SharePoint to be added alongside them. It has 26 votes, and one comment from February 2024 puts the case in two sentences: “We already pay for Microsoft 365 for our organization. We do not want to pay more to duplicate functionality we already have.”",
        ],
      },
      {
        type: "p",
        text: [
          "So there are three honest ways to use Microsoft 365 with XPM today. Keep client files in SharePoint and XPM in separate browser tabs, and live with filing everything twice in your head. Move to a document management system with its own storage, which is ",
          {
            text: "a real option with a real price",
            href: "/blog/document-management-for-xero-practices-compared",
          },
          ". Or leave the files in SharePoint and use a tool that shows each client's folder inside Practice Manager. All three start from the same place: a library set up properly.",
        ],
      },
      { type: "h2", text: "Should client files live in OneDrive or SharePoint?" },
      {
        type: "p",
        text: "In SharePoint. The two look almost identical in a browser, sync to a desktop the same way and open files in the same Word, which is why practices mix them up. The difference is who they belong to. A OneDrive belongs to one person's Microsoft 365 account. A SharePoint document library belongs to a site, and the site belongs to the practice.",
      },
      {
        type: "table",
        head: ["", "OneDrive", "SharePoint library"],
        rows: [
          ["Belongs to", "One person's account", "A practice site"],
          ["When that person leaves", "Deleted after retention", "Unaffected"],
          ["Default grace period", "30 days", "Not applicable"],
          ["Storage", "Counted per user", "1 TB + 10 GB per licence"],
          ["Suits", "Your own working files", "Client files"],
        ],
        caption: "Storage and retention from Microsoft Learn, read 10 September 2026. The pooled SharePoint figure applies to Microsoft 365 Business Basic, Standard and Premium and excludes each user's own OneDrive.",
      },
      {
        type: "p",
        text: "Every Microsoft 365 Business plan includes SharePoint, so for most practices this costs nothing extra. It is also the thing XPM users have been asking Xero for by name.",
      },
      { type: "h2", text: "What happens to a OneDrive when someone leaves?" },
      {
        type: "p",
        text: [
          "It is deleted, on a timer that starts when their account is. Microsoft's page on ",
          {
            text: "OneDrive retention and deletion",
            href: "https://learn.microsoft.com/en-us/sharepoint/retention-and-deletion",
          },
          " sets out the sequence. When a user is deleted from Microsoft 365, their manager is given access to the OneDrive by default and emailed that it will be deleted at the end of the retention period — 30 days unless your administrator has changed it. A reminder goes out seven days before the end. Then the OneDrive moves to a recycle bin for 93 days, during which nobody can reach anything that was shared from it, and restoring it takes PowerShell.",
        ],
      },
      {
        type: "p",
        text: "Two details make this worse than it sounds for a practice. The manager hand-off only works if a manager is set on the user, or a secondary owner has been named in the SharePoint admin centre; if neither is, Microsoft says nobody gets automatic access and nobody is warned. And the clock starts on deletion, not on departure: blocking someone's sign-in or removing their licence does not start it, but Microsoft archives any OneDrive that has been unlicensed for 93 days. Either way, the practice's client files are sitting on a timer attached to one employee.",
      },
      {
        type: "p",
        text: "A sole practitioner using their own OneDrive is not in that position, and there is nothing wrong with it. The day you hire, move client files into a library before anybody's working life starts filling their OneDrive with things only they can find.",
      },
      { type: "h2", text: "How should you set up SharePoint for client documents?" },
      {
        type: "p",
        text: "Keep it flat and boring. Everything below works in plain SharePoint, and all of it makes a client folder easier to find from anywhere — including from Practice Manager, if you later connect a tool to it.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Create one site for client work — a team site called “Clients” is enough — and use its default Documents library. One library per practice, not one per client or per partner.",
          "Inside the library, make one top-level folder that holds every client folder. It gives any tool, and any new starter, a single place to begin.",
          [
            "Name each client folder exactly as the client is named in XPM — same spelling, same “Ltd”. Matching names is what lets a tool find the right folder without asking, and it is what ",
            { text: "a folder structure that survives busy season", href: "/blog/organise-client-documents-google-drive" },
            " starts from.",
          ],
          "Put years inside clients, not clients inside years, and keep the tree shallow. Microsoft caps the full path of a file — every folder name plus the file name — at 400 characters, and a deep tree of long names reaches it sooner than you would think.",
          "Give staff access at the library, and resist breaking permissions per client folder. Microsoft recommends staying under 5,000 unique permissions in a library, and every exception is one more thing to audit when someone leaves.",
          "Do not sync the whole library to everyone's laptop. Microsoft recommends syncing no more than 300,000 files across the libraries a person syncs, and a practice's client library passes that faster than any one person's work needs.",
        ],
      },
      { type: "h2", text: "Why does Microsoft 365 say an app needs admin approval?" },
      {
        type: "p",
        text: [
          "Because Microsoft changed the default. Any tool that shows your client folders inside Practice Manager — or anywhere else — has to ask Microsoft for access to files and sites, and those are exactly the permissions Microsoft no longer lets ordinary users approve. Its page on ",
          {
            text: "app consent policies",
            href: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/manage-app-consent-policies",
          },
          " describes the setting “Let Microsoft manage your consent settings” as the default for a new tenant, and lists what users cannot consent to under it: among others, Files.Read.All, Files.ReadWrite.All, Sites.Read.All and Sites.ReadWrite.All. Microsoft announced the change in June 2025 and began applying it to existing tenants still on the default setting from mid-July 2025.",
        ],
      },
      {
        type: "p",
        text: [
          "So if you see a screen that says an app needs admin approval, nothing is broken. Either sign in as a Global Administrator and approve it for your organisation, or ask whoever manages your Microsoft 365 to do so — and if that is an outside IT provider, it is worth asking them to ",
          {
            text: "turn on the admin consent workflow",
            href: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/configure-admin-consent-workflow",
          },
          ", which lets a user send the request to an administrator from the same screen instead of hitting a dead end.",
        ],
      },
      {
        type: "p",
        text: "Before anyone approves, read what the app is asking for and ask why. The broad “All” permissions are normal for this kind of tool, because the narrower ones only let an app see files it created itself — which would hide every client folder you already have. A vendor should be able to tell you which permissions it requests and what each is for. XTK's answer is in the next section.",
      },
      { type: "h2", text: "What does XTK add to a SharePoint library?" },
      {
        type: "p",
        text: [
          "XTK is a browser extension that puts a Documents tab on each client in Practice Manager, showing that client's folder in your own storage. For a Microsoft practice, the Admin chooses SharePoint when ",
          { text: "connecting storage", href: "/guides/connect-document-storage" },
          ", signs in with a work account, picks the site — sites they follow are listed, and any other can be searched for — and then the library, which is chosen automatically when the site has only one. XTK then adopts your existing client folders by name the first time each client is opened. Nothing is copied or migrated, and the files remain ordinary SharePoint files you can still open, sync and share exactly as before.",
        ],
      },
      {
        type: "list",
        items: [
          "It asks Microsoft for Files.ReadWrite.All, User.Read and offline_access, plus Sites.Read.All for SharePoint. The last is read-only and is used to list your sites and libraries while you choose one; file work runs through the first.",
          [
            "Only the Admin connects. ",
            { text: "Everyone you invite", href: "/guides/invite-your-team" },
            " works through that one connection, so staff can browse, upload and download a client's files from XPM without signing in to Microsoft for it. Opening a file by its name hands off to SharePoint's own viewer, which checks that person's own access — so anyone who edits in Word for the web still needs access to the library.",
          ],
          "Clients never need a Microsoft account. A client portal share is a marker XTK keeps, not a SharePoint sharing link, and an upload through a request link goes from the client's browser straight to Microsoft. No guest accounts are added to your tenant and no “Anyone” links are created.",
          "Uploads through XTK are capped at 100MB per file, against XPM's own 16MB.",
          "Signed documents, generated letters and requested files land in the same client folder, in the same library.",
        ],
      },
      {
        type: "p",
        text: [
          "XTK is $59 USD a month for the whole practice after a 30-day trial, with no per-user charge — the ",
          { text: "pricing page", href: "/pricing" },
          " has the detail.",
        ],
      },
      {
        type: "callout",
        title: "What XTK does not do here",
        text: [
          "It connects one library for the whole practice; you cannot split clients across two sites. Changing the library later means disconnecting and reconnecting, after which client folders are found again by name. Changes made through XTK are made as the connected account, so that is the name SharePoint records against them, not the staff member who clicked. If the connected account loses access to the library, XTK asks for a reconnection the next time it fails to reach it, and your files are untouched — which is another reason to connect as someone whose account the practice will keep. Downloads and a few server-side jobs stream through XTK's servers without being stored; ",
          { text: "how XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
          " lists them.",
        ],
      },
      { type: "h2", text: "The checklist" },
      {
        type: "list",
        items: [
          "Find out where client files live today. If the honest answer is “in three people's OneDrives”, that is the job.",
          "Check that every user has a manager set, or that a secondary owner is named, so a departure never deletes a OneDrive nobody is watching.",
          "Create one client site and one library, with one top-level folder.",
          "Rename client folders to match XPM exactly.",
          "Move client files out of personal OneDrives and into the library.",
          "Ask your Microsoft 365 administrator to turn on the admin consent workflow before you try any app.",
          "Then decide whether separate tabs are enough, or whether each client's folder should open inside Practice Manager.",
        ],
      },
      {
        type: "callout",
        title: "Sources and dates",
        text: [
          "Microsoft's behaviour is taken from Microsoft Learn — ",
          { text: "OneDrive retention and deletion", href: "https://learn.microsoft.com/en-us/sharepoint/retention-and-deletion" },
          ", ",
          { text: "SharePoint limits", href: "https://learn.microsoft.com/en-us/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits" },
          " and ",
          { text: "app consent policies", href: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/manage-app-consent-policies" },
          " — and the timing of the consent change from ",
          { text: "Office 365 for IT Pros' report of message MC1097272", href: "https://office365itpros.com/2025/06/19/app-consent-policy-user-app-consent/" },
          ". Xero's position is from Xero Central and its public ideas board. All were read on 10 September 2026; Microsoft changes its defaults, so check the retention period and consent setting in your own tenant. XTK is an independent product and is not affiliated with or endorsed by Xero Limited or Microsoft.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Xero Practice Manager integrate with SharePoint?",
        a: "No. XPM stores uploaded files in Practice Manager itself, up to 16MB each, unless you integrate one of the document management systems it supports, and Microsoft 365 is not among them. A request to add SharePoint has been on Xero's product ideas board since August 2023 and was still marked submitted in September 2026. Practices on Microsoft 365 either keep SharePoint open in a separate tab, move to a document management system with its own storage, or use a tool that shows each client's SharePoint folder inside Practice Manager.",
      },
      {
        q: "Should an accounting practice store client files in OneDrive or SharePoint?",
        a: "SharePoint, once the practice has staff. A OneDrive belongs to one person's Microsoft 365 account and is deleted after a retention period — 30 days by default — once that account is deleted. A SharePoint document library belongs to a site the practice owns, so it is unaffected when anybody leaves. Every Microsoft 365 Business plan includes SharePoint, with a shared pool of 1 TB plus 10 GB per licence. A sole practitioner can reasonably use their own OneDrive.",
      },
      {
        q: "What happens to OneDrive files when an employee leaves?",
        a: "When the user is deleted from Microsoft 365, their manager is given access by default and warned that the OneDrive will be deleted at the end of the retention period, which is 30 days unless an administrator changes it. A reminder is sent seven days before. The OneDrive then sits in a recycle bin for 93 days and can only be restored with PowerShell. If no manager or secondary owner is set, nobody gets access or a warning. Blocking sign-in or removing the licence does not start the deletion, but Microsoft archives a OneDrive after 93 unlicensed days.",
      },
      {
        q: "Why does Microsoft 365 say an app needs admin approval?",
        a: "Because Microsoft's default consent setting, described as “Let Microsoft manage your consent settings”, stops ordinary users approving apps that ask for broad access to files and sites, including Files.ReadWrite.All and Sites.Read.All. It is the default for new tenants and was applied to existing tenants on the default setting from mid-July 2025. A Global Administrator can approve the app for the organisation, and turning on the admin consent workflow lets users send the request to an administrator instead of stopping.",
      },
      {
        q: "Do clients need a Microsoft account to upload documents to our SharePoint through XTK?",
        a: "No. Clients use a request link or XTK's client portal, neither of which involves a Microsoft account, a guest account in your tenant or a SharePoint sharing link. A file uploaded through a request link goes from the client's browser directly to Microsoft and lands in that client's folder in your library. Portal shares are records XTK keeps, not SharePoint permissions, so removing a share changes nothing in SharePoint itself.",
      },
    ],
  },
  {
    slug: "how-to-name-client-files",
    title: "How to name client files so anyone can find them",
    excerpt:
      "A file's name is the only part of it that goes with it into an email, a zip or somebody's Downloads folder, and in Xero Practice Manager it is also the sort order. Here is a naming convention for client files that sorts, searches and survives leaving its folder — and why it has to be applied the moment a file arrives.",
    date: "2026-09-11",
    readingTime: "12 min read",
    category: "Guides",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/how-to-name-client-files/og.png",
    thumbnail: {
      src: "/images/blog/how-to-name-client-files/thumb.png",
      alt: "Nobody searches for Scan_0034.pdf: a scanner's file name in grey monospace, struck through in amber, above the same file renamed in a search result card — Bank statement - 4521 - 2025-03.pdf, with the words Bank statement highlighted as the match — and the line Name it the moment it arrives",
    },
    relatedSlugs: [
      "organise-client-documents-google-drive",
      "xero-practice-manager-job-documents",
    ],
    relatedLinks: [
      { label: "Request documents from clients in Xero Practice Manager", href: "/guides/document-requests" },
      { label: "Folder templates: one standard client folder structure", href: "/guides/folder-templates" },
      { label: "Bulk file actions: merge PDFs in Xero Practice Manager", href: "/guides/bulk-file-actions" },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "Name every client file in the same three parts, in the same order: what the document is, what tells it apart from others of its kind, and the period it covers — Bank statement - 4521 - 2025-03.pdf. Use one agreed word for each kind of document, write dates year first, and leave out “final”, initials and anything else the storage already records. Then rename each file the moment it arrives, because a convention that depends on tidying up later is a convention nobody follows.",
      },
      {
        type: "p",
        text: [
          "The rest of this article is the reasoning behind each part, so you can adapt it rather than copy it. It is about what files are called, not where they go: ",
          {
            text: "a folder structure that survives busy season",
            href: "/blog/organise-client-documents-google-drive",
          },
          " covers the folders, and ",
          { text: "job-level filing", href: "/blog/xero-practice-manager-job-documents" },
          " covers naming a folder for each job. Everything here works in Xero Practice Manager (XPM), Google Drive, OneDrive and SharePoint, with or without any other tool.",
        ],
      },
      { type: "h2", text: "Why does a file's name matter more than its folder?" },
      {
        type: "p",
        text: "Because the name is the only part of a file that goes everywhere the file goes. A folder is context, and context gets stripped the moment a file moves: attached to an email, downloaded to someone's laptop, bundled into a zip for a lender, forwarded by a client to their solicitor. Bank statement.pdf means something inside Clients / Acme Trading Ltd / 2025. In a Downloads folder beside forty other files, it means nothing.",
      },
      {
        type: "p",
        text: "A name has to work in three places, and a good convention is simply one that works in all of them.",
      },
      {
        type: "list",
        items: [
          "In a list, sorted by name. The order the parts come in decides what sits next to what.",
          "In a search box. Search finds the words people actually type, so the name has to use them.",
          "Outside its folder. The name alone has to say what the file is and which period it belongs to.",
        ],
      },
      {
        type: "p",
        text: [
          "Practice Manager raises the stakes on the first of these. ",
          {
            text: "Xero Central's page on uploading documents",
            href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
          },
          " — now filed under Xero Partner Hub — says documents in a client, job or quote's Documents tab are “listed in alphabetical order”. There is no other order to fall back on, so in XPM the name is the filing system. XPM's own upload form also asks for a Title alongside the file; give the Title the same name.",
        ],
      },
      { type: "h2", text: "What order should the parts of a file name go in?" },
      {
        type: "p",
        text: "Put first whatever you want grouped together, because a list sorted by name clusters files by their first word. For most client documents, that is the type of document. All the bank statements then sit together; the account number, second, separates one account from another; and the period, last, puts each account's statements in date order. Separate the parts with a spaced hyphen so the eye can find the boundaries. Correspondence is the one exception, because it is read as a timeline: put the date first there, and a folder of letters sorts itself into the order things happened.",
      },
      {
        type: "table",
        head: ["Arrives as", "Filed as"],
        rows: [
          ["Statement_20250331_094512.pdf", "Bank statement - 4521 - 2025-03.pdf"],
          ["IMG_4471.HEIC", "Motor vehicle logbook - FY2025.HEIC"],
          ["Scan 12 Mar.pdf", "Payslip - 2025-03.pdf"],
          ["Accounts FINAL v2 (JS).xlsx", "Accounts - FY2025.xlsx"],
          ["letter.pdf", "2026-08-14 - HMRC - Penalty notice.pdf"],
        ],
        caption: "The same five files before and after renaming. Type first, then what tells it apart, then the period — except correspondence, which leads with the date.",
      },
      { type: "h2", text: "How should dates be written in a file name?" },
      {
        type: "p",
        text: [
          "Year first, in numbers: 2025-03-31 for a day, 2025-03 for a month. It is the international standard, ISO 8601, and the form the ",
          {
            text: "US National Archives recommends for file names",
            href: "https://records-express.blogs.archives.gov/2017/08/22/best-practices-for-file-naming/",
          },
          ", because it is the only way of writing a date in which alphabetical order is also date order. Written as words, April sorts before March. Written day first, 31-03-2025 sorts beside 31-01-2026, and every file from the 31st of any month clusters together. Written month first, every March of every year sits in one block.",
        ],
      },
      {
        type: "p",
        text: "Periods need one more decision, because “FY25” means different things to different clients. In Australia it is the year to 30 June 2025; for a UK company with a December year-end it is calendar 2025; for a UK sole trader it may mean the 2024-25 tax year, which ended on 5 April 2025. Pick one form for the practice — the year the period ends, in four digits, is the easiest to sort — and write down what it means.",
      },
      { type: "h2", text: "Which words should go in a file name?" },
      {
        type: "p",
        text: "The same word for the same thing, every time. Search cannot guess that Bank stmt, BS and Statements are one kind of document, so three spellings split a client's bank statements into three searches, and the person who types the fourth spelling concludes they are missing. Agree a short list of document names, put it where everyone can see it, and add to it when something new turns up.",
      },
      {
        type: "list",
        items: [
          "Bank statement, not Bank stmt, BS or Statements.",
          "Payslip, not Pay slip or Wage slip.",
          "Engagement letter, not EL or LoE.",
          "Trial balance, not TB.",
          "Abbreviations only where everyone already uses them: VAT, PAYE, GST, BAS, P60.",
        ],
      },
      {
        type: "p",
        text: "Just as important is what to leave out. Staff initials tie a file to whoever touched it last, and the storage already records who changed what. Words like “new”, “latest” and “copy” are true for about a week. And the client's name is usually redundant inside the client's own folder, where it lengthens every name without distinguishing any of them — with one exception. Anything that leaves the practice, a letter or a pack of accounts, should carry the client's name, because the person receiving it has no folder to tell them.",
      },
      {
        type: "p",
        text: "The same logic applies one level up. Give every client in XPM a name no other client shares, because a Documents tab, a folder and any tool that finds folders by name can only be as distinct as the names they are given. Two clients called J Smith are one mistake waiting to happen; J Smith (Leeds) and J Smith (Harrogate) are not.",
      },
      { type: "h2", text: "Should a file name say “final”?" },
      {
        type: "p",
        text: "No. “Final” is a prediction, and the file after Accounts FINAL.xlsx is so often Accounts FINAL v2.xlsx that the word has stopped meaning anything. The useful question is which versions need to exist as records, and the answer is fewer than most folders suggest.",
      },
      {
        type: "p",
        text: [
          "Working drafts belong in version history, not in the folder. But version history is a safety net with holes in it, not an archive. Google says an older version of an uploaded file ",
          {
            text: "“might be permanently deleted after 30 days or if there are 100 newer versions”",
            href: "https://support.google.com/drive/answer/2409045",
          },
          ", unless someone marks it “Keep forever”. SharePoint keeps however many versions your administrator's ",
          {
            text: "version history limits",
            href: "https://learn.microsoft.com/en-us/sharepoint/document-library-version-history-limits",
          },
          " allow, and Microsoft says versions past the limit are deleted permanently, without passing through the recycle bin.",
        ],
      },
      {
        type: "p",
        text: "So when a particular version matters — the draft the client approved, the accounts as they were signed — save it as its own file and name the state, not the sequence: Accounts - FY2025 - approved by client.pdf. Everything else stays one file, overwritten, with its history behind it. If you must number drafts, use v01, v02 and so on, with the leading zero so v10 does not sort before v02.",
      },
      { type: "h2", text: "Which characters should you keep out of file names?" },
      {
        type: "p",
        text: [
          "Everything except letters, numbers, spaces and hyphens, plus the full stop before the extension. Each system has its own list, and the only name that is safe everywhere is one that uses none of them. Practice Manager warns that some characters “can't be used and others are converted to underscore”, without listing them. Microsoft's page on ",
          {
            text: "restrictions in OneDrive and SharePoint",
            href: "https://support.microsoft.com/en-us/office/restrictions-and-limitations-in-onedrive-and-sharepoint-64883a5d-228e-48f5-b3d2-eb39e07630fa",
          },
          " lists the characters it refuses outright, and adds more rules besides.",
        ],
      },
      {
        type: "table",
        head: ["Where", "What goes wrong"],
        rows: [
          ["Practice Manager", "Some characters refused, others become _"],
          ["OneDrive and SharePoint", "\" * : < > ? / \\ | refused"],
          ["OneDrive and SharePoint", "No leading or trailing spaces"],
          ["OneDrive and SharePoint", "# and % blocked in some organisations"],
          ["OneDrive and SharePoint", "400 characters for the whole path"],
          ["Google Drive", "Accepts almost anything"],
        ],
        caption: "From Xero Central and Microsoft Support, read 11 September 2026. Microsoft also reserves names such as CON, PRN and desktop.ini, and any name starting ~$.",
      },
      {
        type: "p",
        text: [
          "Google Drive's permissiveness is the trap. A slash or a colon typed into a Drive file name works perfectly until the day the files move to SharePoint, or someone downloads them to Windows, which refuses the same characters. The 400-character path limit counts every folder name above the file as well as the file's own, so long folder names spend a budget that ",
          { text: "a deep SharePoint tree", href: "/blog/xero-practice-manager-sharepoint-onedrive" },
          " runs out of sooner than you would think. Spaces, on the other hand, are fine: archivists advise against them because some systems handle them badly, but none of the ones here do, and people read spaces more easily than underscores.",
        ],
      },
      { type: "h2", text: "When should a file be renamed?" },
      {
        type: "p",
        text: "When it arrives, before it is filed, because that is the only moment anyone looks at it closely enough to name it. Most client files are named by whatever made them. A phone calls a photo IMG_4471.HEIC. A bank exports Statement_20250331_094512.pdf. A scanner produces Scan 12 Mar.pdf, and a client helpfully sends docs for accountant.pdf. None of those names will ever be searched for.",
      },
      {
        type: "p",
        text: "A rename queued for later waits for a quiet week, and busy season does not have one. So make it a rule that an unrenamed file is not filed: whoever moves a file into a client's folder names it on the way in, using the list of document names, and nobody files into a client folder straight from an inbox.",
      },
      {
        type: "p",
        text: [
          "Better still, name a file before it exists. When you ask a client for documents, you already know what each one will be called, because you are the one asking. Write each line of the request the way you want the file named — Bank statement - 4521 - 2025-03 rather than “your bank statements” — and the request becomes the naming convention. A request that names items rather than categories is also ",
          { text: "the first step in stopping the chasing", href: "/blog/stop-chasing-clients-for-documents" },
          ".",
        ],
      },
      { type: "h2", text: "How does XTK name the files it handles?" },
      {
        type: "p",
        text: "XTK is a browser extension that adds a Documents tab to each client, job and quote in Practice Manager, showing that client's folder in your practice's own Google Drive, OneDrive or SharePoint. Some files it handles are named by rule rather than by a person, and the rules are worth knowing before you write your convention.",
      },
      {
        type: "list",
        items: [
          [
            "Files a client uploads against a ",
            { text: "document request", href: "/guides/document-requests" },
            " are renamed to the requested item's name, keeping their extension: IMG_4471.HEIC uploaded against “Motor vehicle logbook - FY2025” becomes Motor vehicle logbook - FY2025.HEIC. So the request line really is the file name, and because an item has nothing but a name, it is also the instruction the client reads — keep it file-shaped and put the detail (“PDFs from the bank, not screenshots”) in the email that goes with it. A second file against the same item gets “(2)”, a third “(3)”, so where the month matters, ask for each month on its own line. The rename happens just after the upload lands and keeps the client's own name if it fails, and extras uploaded without an item keep whatever name the client gave them.",
          ],
          "A signed document keeps the name it had when you sent it, with “(signed)” added before .pdf, and the certificate of completion is its last page rather than a second file. Name the document properly before you send it.",
          [
            "A zip download is named after the client's folder and the date — Acme Trading Ltd - 2026-09-11.zip — and ",
            { text: "inside, it is flat", href: "/guides/bulk-file-actions" },
            ": every file carries its own name and nothing else. Two files called Bank statement.pdf from two year folders arrive as two entries with the same name, which is the case for putting the period in the name in one sentence.",
          ],
          "Merging PDFs suggests Merged.pdf, and a file made from a document template starts with the template's name. Change both in the dialog; placeholders like [CLIENT:NAME] do not fill in a file name.",
          [
            "Folder names in a ",
            { text: "folder template", href: "/guides/folder-templates" },
            " can carry a date: [DATE:yyyy] becomes 2026 and [DATE:yyyy-MM] becomes 2026-09. Keep words outside the brackets, as in FY[DATE:yyyy], because letters inside them are read as parts of the date.",
          ],
          "On Google Drive, search in XTK's Documents tab matches file names, within the folder you are in and everything below it. That is one more reason the words in a name matter.",
        ],
      },
      {
        type: "p",
        text: [
          "XTK is $59 USD a month for the whole practice after a 30-day trial, with no per-user charge — the ",
          { text: "pricing page", href: "/pricing" },
          " has the detail.",
        ],
      },
      {
        type: "callout",
        title: "What XTK does not do here",
        text: "It does not enforce a naming convention or rename the files you upload yourself, and files a client adds through the portal outside a request keep their own names. It lists folders first and files newest first, not alphabetically, so in XTK's tab a name is for searching and recognising rather than sorting. It does not check a name against Microsoft's forbidden characters before trying it; the provider refuses, and XTK reports that the rename failed. It does not keep the name a file arrived with once it has been renamed. And when a client is renamed in Practice Manager, their folder keeps its old name.",
      },
      { type: "h2", text: "The convention, on one page" },
      {
        type: "list",
        items: [
          "Document type, then what tells it apart, then the period, separated by spaced hyphens: Bank statement - 4521 - 2025-03.pdf.",
          "Correspondence leads with the date: 2026-08-14 - HMRC - Penalty notice.pdf.",
          "Dates year first, in numbers. Periods as the year they end, defined in writing.",
          "One agreed word per document type, from a list everyone can see.",
          "No initials, no “final”, no “new”, no “copy”. The client's name only on what leaves the practice.",
          "Letters, numbers, spaces and hyphens only. Short enough to read in a list.",
          "Versions that matter become their own file, named by state. The rest live in version history.",
          "Rename on arrival. An unrenamed file is not filed.",
          "Name requests the way you want the files named.",
        ],
      },
      {
        type: "callout",
        title: "Sources and dates",
        text: [
          "Practice Manager's behaviour is from Xero Central's ",
          {
            text: "Upload and manage documents",
            href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
          },
          " page; Microsoft's from ",
          {
            text: "Restrictions and limitations in OneDrive and SharePoint",
            href: "https://support.microsoft.com/en-us/office/restrictions-and-limitations-in-onedrive-and-sharepoint-64883a5d-228e-48f5-b3d2-eb39e07630fa",
          },
          ", ",
          {
            text: "SharePoint limits",
            href: "https://learn.microsoft.com/en-us/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits",
          },
          " and the version history page above; Google's from ",
          { text: "Google Drive Help", href: "https://support.google.com/drive/answer/2409045" },
          ". The date advice follows ISO 8601 and the US National Archives' file-naming guidance. All were read on 11 September 2026. XTK is an independent product and is not affiliated with or endorsed by Xero Limited, Microsoft or Google.",
        ],
      },
    ],
    faq: [
      {
        q: "What is a good file naming convention for an accounting practice?",
        a: "Name each file as the document type, then what distinguishes it, then the period, separated by spaced hyphens — for example Bank statement - 4521 - 2025-03.pdf. Use one agreed word for each type of document, write dates year first, and leave out initials and words like final or new. Correspondence leads with the date instead. Rename every file as it arrives, before it is filed.",
      },
      {
        q: "How should dates be written in file names?",
        a: "Year first, in numbers: 2025-03-31 for a day or 2025-03 for a month. This is the ISO 8601 format, recommended by the US National Archives for file names, and it is the only way of writing a date in which alphabetical order is also date order. Month names sort April before March; day-first dates sort by day of the month.",
      },
      {
        q: "Should every file name include the client's name?",
        a: "Not usually. Inside the client's own folder the client's name lengthens every file name without distinguishing any of them. The exception is anything that leaves the practice, such as a letter or a set of accounts, because the person receiving it has no folder to tell them whose it is. Keeping client names distinct in Xero Practice Manager matters more than repeating them in file names.",
      },
      {
        q: "Which characters can't be used in file names in SharePoint, OneDrive or Xero Practice Manager?",
        a: "OneDrive and SharePoint refuse \" * : < > ? / \\ and |, do not allow leading or trailing spaces, reserve names such as CON, PRN and desktop.ini, and in some organisations block # and %. The whole path, including folder names, is limited to 400 characters. Xero Practice Manager warns that some special characters cannot be used and others are converted to an underscore. Letters, numbers, spaces and hyphens are safe in all of them.",
      },
      {
        q: "Should file names include final or a version number?",
        a: "Not final, which rarely stays true. Keep working drafts in version history, but not as an archive: Google Drive may delete an older version after 30 days or 100 newer versions unless it is marked Keep forever, and SharePoint deletes versions beyond the limits an administrator sets. A version that matters, such as the draft a client approved, becomes its own file, named by its state.",
      },
    ],
  },
  {
    slug: "year-end-pack-xero-practice-manager",
    title: "How to build a year-end pack in Xero Practice Manager",
    excerpt:
      "A year-end pack is two records: the pack you send and the pack that comes back signed. Here is what goes in one, what order it goes in, when to merge and when not to, what Xero's own document packs will and won't do, and what to keep once the client has signed.",
    date: "2026-09-14",
    readingTime: "13 min read",
    category: "Guides",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/year-end-pack-xero-practice-manager/og.png",
    thumbnail: {
      src: "/images/blog/year-end-pack-xero-practice-manager/thumb.png",
      alt: "Five documents. One file to sign: five white cards labelled Letter, Accounts, Rep letter, Tax return and Summary, fanned on a mint ground with an arrow into a single PDF titled Year-end pack FY2026 that carries a pen signature on its signature line, beside the line Keep the signed copy beside it",
    },
    relatedSlugs: [
      "how-to-name-client-files",
      "xero-practice-manager-job-documents",
    ],
    relatedLinks: [
      { label: "Bulk file actions: merge PDFs in Xero Practice Manager", href: "/guides/bulk-file-actions" },
      { label: "Send documents for e-signature in Xero Practice Manager", href: "/guides/send-documents-for-signature" },
      { label: "Document templates in Xero Practice Manager", href: "/guides/document-templates" },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "Build a year-end pack as one PDF for each person who has to sign it: a covering letter first, then the documents that person signs, then anything they only need to read, named for the client, the pack and the year. Make it from source files you keep, send that one file for signature, and file the signed copy beside the sources rather than in place of them. Everything else in this article is the reasoning behind those three sentences.",
      },
      {
        type: "p",
        text: [
          "It covers what goes in a pack, what order it goes in, when to merge and when not to, what Xero Practice Manager (XPM) and Xero's own document packs will and won't do, and what to keep afterwards. It is about assembling and filing the pack, not preparing what goes in it: collecting the client's records is ",
          { text: "a different problem", href: "/blog/stop-chasing-clients-for-documents" },
          ", and so is ",
          { text: "naming the files", href: "/blog/how-to-name-client-files" },
          ", though both come up.",
        ],
      },
      { type: "h2", text: "What is a year-end pack?" },
      {
        type: "p",
        text: "It is the set of documents a practice sends a client at the end of the year's work, for the client to read, approve and sign, and which the practice then keeps as the record of what the client approved. The contents change with the client and the country. The shape does not: something that explains, something to sign, and something to keep.",
      },
      {
        type: "table",
        head: ["Part", "Typical contents", "Signed?"],
        rows: [
          ["Covering letter", "What's enclosed, what to check, by when", "No"],
          ["Accounts", "Financial statements for the year", "Yes"],
          ["Representation letter", "The client's confirmations to you", "Yes"],
          ["Tax return", "Return or computation, with declaration", "Yes"],
          ["For information", "Tax payable, dates, notes", "No"],
        ],
        caption: "A company's pack. A sole trader's is usually shorter, and an individual's may be a letter and a return.",
      },
      {
        type: "p",
        text: "Two things make assembling one a document problem rather than an accounting one. The parts come from different places: the accounts and the return out of tax software, the letter out of a template, the summary out of a spreadsheet, so they arrive as separate files with separate names. And the pack is really two records, the one you sent and the one that came back signed. Most year-end filing trouble is one of those two going missing, or one being mistaken for the other.",
      },
      { type: "h2", text: "Should a year-end pack be one PDF or several files?" },
      {
        type: "p",
        text: "One PDF for everything a single person reads and signs at one sitting, and a separate file wherever the signer or the occasion changes. A director approving a company's accounts and the same director signing their personal return are two packs, because they are two approvals by two different taxpayers, and a signed file should be the record of exactly one of them.",
      },
      {
        type: "p",
        text: "The case for merging is that a pack is read like a printed bundle. One file opens in one place, in the order you chose, on whatever device the client has to hand, and it carries one name everywhere it goes. Five attachments arrive in whatever order the email app likes, and the client signs the one they found first.",
      },
      {
        type: "p",
        text: "The case against merging too much is size and status. Practice Manager accepts uploads of up to 16MB. Xero's document packs take up to 10MB per document. A tool that tracks signatures per document can tell you the accounts are signed and the representation letter is not, but only if they are different documents. So merge by signer, not by client, and check the size of the result before you plan to send it anywhere.",
      },
      { type: "h2", text: "What order should a year-end pack be in?" },
      {
        type: "list",
        ordered: true,
        items: [
          "The covering letter. What is enclosed, what the client should check, what they need to sign, and by when. For some clients it is the only page they will read closely, so it has to work on its own.",
          "The documents that need a signature, in the order the letter lists them.",
          "Documents for information: the tax payable and when, next year's dates, notes the client should keep.",
        ],
      },
      {
        type: "p",
        text: "Refer to pages, not bookmarks. Merged PDFs often lose the bookmarks their sources had, and a client reading on a phone would not see them anyway. If the letter says the signature is on page 14, the client finds page 14. That does mean the letter is the last part to finish, once the order and page count are settled.",
      },
      { type: "h2", text: "What can Practice Manager do with the pack on its own?" },
      {
        type: "p",
        text: [
          "Store it. ",
          {
            text: "Xero Central's page on documents",
            href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
          },
          ", now titled for Xero Partner Hub, describes uploading files of up to 16MB to a client, job or quote, editing a document's title and note, and deleting it; documents are stored in Practice Manager unless you connect a document management system, and listed in alphabetical order. It describes no way to merge files, reorder pages or download several documents at once. So in XPM alone, a pack is assembled somewhere else — a PDF editor, or the export options in whatever produced the accounts — and uploaded as a finished file.",
        ],
      },
      {
        type: "p",
        text: "That leaves the sending, and for sending Xero has built something specific.",
      },
      { type: "h2", text: "What do Xero's document packs do?" },
      {
        type: "p",
        text: [
          "Document packs, in Xero HQ and Xero Partner Hub, collect a client's documents into one pack, add e-signature requests through Xero Sign, powered by Adobe Acrobat Sign, and send the client a link to a secure Xero portal where they read and sign. Xero launched them for ",
          { text: "Australian partners", href: "https://blog.xero.com/product-updates/e-signing-made-easy-in-au/" },
          " first and for ",
          { text: "UK partners in October 2022", href: "https://blog.xero.com/news-events/added-value-to-uk-practice-tools/" },
          ", and they are available in New Zealand too. A pack can hold published reports from the client's Xero organisation, tax returns from Xero Tax once they are marked Approved, and PDFs uploaded from your computer.",
        ],
      },
      {
        type: "table",
        head: ["Xero Central says", "Limit"],
        rows: [
          ["Documents per pack", "Up to 15"],
          ["Size per document", "10MB"],
          ["E-signature requests", "At least one per pack"],
          ["Each signer", "Their own Xero login"],
          ["Who can see packs", "Everyone in the practice"],
          ["Unsigned after 12 months", "Expired, removed from portal"],
          ["Signatures", "Bought in Xero Sign bundles"],
        ],
        caption: "From Xero Central's document pack pages, read 14 September 2026.",
      },
      {
        type: "p",
        text: "For tax returns it is the natural tool, because the return goes into the pack with its signature request already attached and locked, and the pack's status tells you who has signed. Before relying on it as the whole year-end process, four details on those pages are worth reading twice.",
      },
      {
        type: "list",
        items: [
          "It is a way of sending, not a place to file. Packs are listed under the Practice menu, and Xero Central describes downloading the documents in a pack but not where the signed copies go afterwards. If you use packs, make saving the signed documents into the client's file a named step, with a named owner.",
          "Everyone can see them. Xero Central warns that all Xero Partner Hub users in the practice can open document packs and view what is in them, and recommends not adding restricted or confidential information.",
          "Assembly still happens first. Uploaded documents come from your computer, one PDF each, so the merging, ordering and naming happen before the pack does, inside the 15-document and 10MB limits.",
          [
            "Signatures are paid for separately. In the UK, ",
            {
              text: "Xero Sign bundles",
              href: "https://www.xero.com/uk/accountants-bookkeepers/document-packs/bundle-pricing/",
            },
            " run from 100 transactions for £60 to 2,500 for £600, excluding VAT, and expire 12 months after purchase. Xero counts a transaction as a document with at least one e-signature, and caps each at 100 pages or 10MB — so how you split a pack changes both what it costs and whether it fits.",
          ],
        ],
      },
      { type: "h2", text: "How do you assemble a year-end pack step by step?" },
      {
        type: "p",
        text: "Whatever the tools, the order of work is the same, and doing it in this order is what keeps the sources and the two records apart.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          [
            "Make a folder for the pack inside the year's folder, or inside the year-end job's folder if you ",
            { text: "file by job", href: "/blog/xero-practice-manager-job-documents" },
            ": FY2026 / Year-end pack.",
          ],
          [
            "Copy, don't move, the final version of each part into it. The accounts stay where the job keeps them, and the pack gets a copy. It is the same rule that applies to ",
            { text: "a workpaper pack", href: "/blog/xero-workpapers-and-your-client-documents" },
            ": a pack is a bundle for one purpose, not the file.",
          ],
          "Turn every part into a PDF, and name each one so it would make sense on its own: Accounts - Acme Trading Ltd - FY2026.pdf.",
          "Merge the parts for each signer, in order, into one file named for what it is: Year-end pack - Acme Trading Ltd - FY2026.pdf. The client's name belongs in it, because the person receiving it has no folder to tell them whose it is.",
          "Open the merged file and check it: the page count, that every signature page is there, and that the pages the letter refers to are the right ones.",
          "Send it for signature, then file what comes back in the same folder, beside the pack as sent.",
        ],
      },
      { type: "h2", text: "What should you keep once the client has signed?" },
      {
        type: "p",
        text: "Three things, together in the pack's folder, each as its own file.",
      },
      {
        type: "list",
        items: [
          "The sources, as they were when the pack was made.",
          "The pack as sent. If the client asks for a change, make a new pack and name its state — Year-end pack - Acme Trading Ltd - FY2026 - revised 2026-10-02.pdf — rather than overwriting the first. The version the client queried is part of the record of how the accounts were agreed.",
          "The pack as signed, with whatever record of the signing your tool produces.",
        ],
      },
      {
        type: "p",
        text: "Then leave the signed file alone. Don't merge it into a bigger bundle, don't combine it with next year's, and don't replace it with a tidier copy. The signed file, with its signing record, is the evidence of what the client approved; a merge makes a new file that contains a picture of the signature but is not the thing that was signed. If a lender wants everything in one PDF, make that as a copy and keep the original as it came back.",
      },
      { type: "h2", text: "How do you send the pack to a lender or broker?" },
      {
        type: "p",
        text: [
          "Send the signed files, not the pack as sent, and send them as they are. A lender or mortgage broker usually asks months later, for the last two years' signed accounts and returns, which is when a folder that holds the signed copies beside the packs pays for itself. If several files go at once in a zip, remember that ",
          { text: "a zip is flat", href: "/blog/how-to-name-client-files" },
          ": each file arrives with its own name and nothing else, so two files both called Accounts.pdf from two years become indistinguishable. Names that carry the client and the year survive the trip.",
        ],
      },
      { type: "h2", text: "How does this work in XTK?" },
      {
        type: "p",
        text: [
          "XTK is a browser extension that adds a Documents tab to each client, job and quote in Practice Manager, showing that client's folder in your practice's own Google Drive, OneDrive or SharePoint. The assembly steps above map onto actions in ",
          { text: "the client's Documents tab", href: "/guides/manage-client-documents" },
          ", so the pack is built, sent and filed without leaving XPM.",
        ],
      },
      {
        type: "list",
        ordered: true,
        items: [
          [
            "Select the finished parts and use “Copy” to put them in the pack folder. ",
            { text: "Bulk actions", href: "/guides/bulk-file-actions" },
            " take up to 200 items at a time, only ever within the same client's folder, and XTK checks every item before touching any of them.",
          ],
          [
            "Generate the covering letter from a ",
            { text: "document template", href: "/guides/document-templates" },
            ". Templates are Word files and produce a Word file, with placeholders such as [CLIENT:NAME] filled from XPM. There is no placeholder for the year end or the job, so type the year into the letter. Then use “Convert to PDF” on it.",
          ],
          "Select the letter and the other PDFs and choose “Merge PDFs”. Drag the files into order, replace the suggested Merged.pdf with the pack's real name, and pick the pack folder as the destination. The sources are left exactly where they were.",
          [
            "Send the merged pack ",
            { text: "for signature", href: "/guides/send-documents-for-signature" },
            ". Signers can be anyone with an email address, so a second director is simply a second signer, and they can sign at the same time or in turn. Place signature and date fields on the pages each person signs.",
          ],
          "When everyone has signed, XTK saves a new file beside the pack — Year-end pack - Acme Trading Ltd - FY2026 (signed).pdf — with a certificate of completion as its last page, and leaves the pack as sent untouched. That is the two records, filed side by side, without anyone remembering to do it.",
        ],
      },
      {
        type: "callout",
        title: "Limits worth knowing before a busy week",
        text: [
          "A merge takes up to 50 PDFs with a combined size of 100MB, and XTK tells you if you are over only after you click Merge. The merged file has no bookmarks, even if the sources did, which is another reason for page numbers in the letter. A password-protected PDF will not merge, so remove the password first. “Convert to PDF” works on one Word document at a time. Each PDF in a signature request is signed as its own file with its own certificate, so merge before you send, not after. Signing links expire after 30 days, and when a request completes every signer is emailed the signed PDFs as attachments, so a very large pack makes ",
          { text: "a very large email", href: "/blog/send-documents-to-clients-without-attachments" },
          ".",
        ],
      },
      {
        type: "p",
        text: [
          "Two hedges this site owes on every article like this. Files live in your own storage, and uploads go straight from the browser to Google or Microsoft, but merging, zipping, generating from a template and flattening signatures all stream the file through XTK's backend in flight; “Convert to PDF” hands the Word file to CloudConvert. ",
          { text: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
          " and the ",
          { text: "sub-processors page", href: "/legal/subprocessors" },
          " have the detail. XTK is $59 USD a month for the whole practice after a 30-day trial, with no per-user charge — the ",
          { text: "pricing page", href: "/pricing" },
          " has the rest.",
        ],
      },
      {
        type: "callout",
        title: "What XTK does not do here",
        text: "It does not connect to Xero or Xero Tax, so it cannot pull in published reports or returns: export them and upload the PDFs. It does not send or read Xero's document packs, or file their signed copies. It does not number pages, add bookmarks or build a contents page. It does not know which job or year a file belongs to, so the folder and the name still carry that. And it does not stop anyone moving or deleting a signed file; the folder's permissions in Google Drive, OneDrive or SharePoint do that.",
      },
      { type: "h2", text: "The year-end pack checklist" },
      {
        type: "list",
        items: [
          "One pack per signer and occasion, not per client.",
          "Covering letter first, then what to sign, then what to read.",
          "Page numbers in the letter, not bookmarks.",
          "A pack folder inside the year or the job, with copies of the parts, never the originals.",
          "Every part a PDF, named so it makes sense on its own.",
          "The pack named for the client, the pack and the year.",
          "Check the page count and the signature pages before sending.",
          "Keep the sources, the pack as sent and the pack as signed, side by side.",
          "Never merge, replace or tidy a signed file. Copy it.",
          "Send lenders the signed files, named to survive a zip.",
        ],
      },
      {
        type: "callout",
        title: "Sources and dates",
        text: [
          "Practice Manager's document behaviour is from Xero Central's ",
          {
            text: "Upload and manage documents",
            href: "https://central.xero.com/s/article/Upload-manage-documents-in-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
          },
          " page. Document pack limits are from Xero Central's pages on ",
          { text: "adding documents", href: "https://central.xero.com/s/article/Add-documents-to-a-document-pack" },
          ", ",
          { text: "sending a pack", href: "https://central.xero.com/s/article/Send-a-document-pack" },
          " and ",
          {
            text: "e-signature requests",
            href: "https://central.xero.com/s/article/Add-or-remove-e-signatures-in-a-document-pack",
          },
          ", and Xero Sign pricing from Xero's UK bundle pricing page. All were read on 14 September 2026; Xero changes these pages, so check the limits before you plan around them. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
        ],
      },
    ],
    faq: [
      {
        q: "What goes in a year-end pack for an accounting client?",
        a: "Usually a covering letter explaining what is enclosed and what needs signing, the financial statements, a representation letter, the tax return or computation with its declaration, and information-only documents such as the tax payable and upcoming deadlines. A company's pack is typically the fullest; an individual's may be just a letter and a return.",
      },
      {
        q: "Should a year-end pack be one PDF or separate files?",
        a: "One PDF for everything a single person reads and signs at one sitting, in order: letter, documents to sign, documents for information. Keep separate packs where the signer changes, such as a company's accounts and a director's personal return, so each signed file records exactly one approval. Check the merged file's size: Xero Practice Manager accepts uploads of up to 16MB and Xero's document packs take up to 10MB per document.",
      },
      {
        q: "Can Xero Practice Manager merge PDFs?",
        a: "Xero Central's page on Practice Manager documents, read on 14 September 2026, describes uploading, editing and deleting documents but no way to merge them or download several at once. Xero's document packs group documents for e-signature but hold them as separate documents. Merging needs a PDF editor or an add-on that works inside Practice Manager.",
      },
      {
        q: "How many documents can a Xero document pack hold?",
        a: "Up to 15 documents, with a maximum file size of 10MB each, according to Xero Central as read on 14 September 2026. Each pack needs at least one e-signature request, each signer needs their own Xero login, and Xero's UK pricing page caps a signed document at 100 pages. Signatures are bought in Xero Sign bundles that expire 12 months after purchase.",
      },
      {
        q: "Should signed documents be merged into one file?",
        a: "No. Keep each signed document exactly as it came back, with its signing record, because that file is the evidence of what the client approved. A merge creates a new file that shows the signature but is not the signed document. If someone needs a single PDF, make it as a copy and keep the originals.",
      },
    ],
  },
  {
    slug: "send-documents-to-clients-without-attachments",
    title: "How to send documents to clients without email attachments",
    excerpt:
      "An email attachment is a copy you can't take back, sent to whoever the address turns out to be. Here is when a link is better, how to share one safely from Google Drive or Microsoft 365, what the email should still say, and where attachments are still the right call.",
    date: "2026-09-15",
    readingTime: "13 min read",
    category: "Guides",
    author: { name: "The XTK team", role: "Product" },
    ogImage: "/images/blog/send-documents-to-clients-without-attachments/og.png",
    thumbnail: {
      src: "/images/blog/send-documents-to-clients-without-attachments/thumb.png",
      alt: "Send the link, not the file: on a lavender ground, an open envelope with a PDF called Tax return.pdf sticking out, captioned A copy. Out of your hands, beside a sealed envelope with a blue Open your documents link across it, captioned A link. Still yours",
    },
    relatedSlugs: [
      "client-portals-clients-actually-use",
      "year-end-pack-xero-practice-manager",
    ],
    relatedLinks: [
      { label: "Client portal for accountants: set up and share files", href: "/guides/set-up-client-portal" },
      { label: "Connect Gmail or Outlook so XTK can send email for you", href: "/guides/connect-your-email" },
      { label: "Send documents for e-signature in Xero Practice Manager", href: "/guides/send-documents-for-signature" },
      { label: "Pricing", href: "/pricing" },
    ],
    body: [
      {
        type: "p",
        text: "To send a client a document without attaching it, keep the file where you filed it and send them a way in: a client portal they sign in to, or a share from Google Drive, OneDrive or SharePoint that names them. The email becomes the notice that something is ready, not the thing itself. Attachments still have a place, for small files that nobody would mind reaching the wrong inbox and that the client should keep a copy of.",
      },
      {
        type: "p",
        text: [
          "This article covers what goes wrong with attachments, the ways to send without them and what each one costs the client, how to share a link safely, what the email should still say, and what Xero Practice Manager (XPM) does and doesn't do. It is about sending documents out. Getting documents in is ",
          { text: "a different problem", href: "/blog/stop-chasing-clients-for-documents" },
          ", and so is ",
          { text: "building the pack", href: "/blog/year-end-pack-xero-practice-manager" },
          " you are about to send.",
        ],
      },
      { type: "h2", text: "What is wrong with emailing documents as attachments?" },
      {
        type: "p",
        text: "Nothing, for a meeting agenda. For a tax return, a set of accounts or a bank letter, four things, and none of them is about encryption.",
      },
      {
        type: "list",
        items: [
          [
            "It is a copy, and you can't take it back. Microsoft's own ",
            {
              text: "recall instructions",
              href: "https://support.microsoft.com/en-us/office/recall-or-replace-an-email-message-that-you-sent-35027f88-d655-4554-b4f8-6c0729a723a0",
            },
            " say recall only works when you and the recipient have Microsoft 365 work or school accounts in the same organisation, and only for people who haven't opened the message. A client's Gmail or Outlook.com address is outside that, so once the email has gone, so has the file.",
          ],
          [
            "It goes to whoever the address turns out to be. Australia's privacy regulator counted 71 breaches caused by personal information emailed to the wrong recipient in the second half of 2024: 71 of the 170 breaches it put down to human error, or 42%, in its ",
            {
              text: "Notifiable Data Breaches report",
              href: "https://www.oaic.gov.au/privacy/notifiable-data-breaches/notifiable-data-breaches-publications/notifiable-data-breaches-report-july-to-december-2024",
            },
            " for July to December 2024. It was the largest human-error cause. An autocompleted address with an attachment is the whole document in the wrong hands; the same slip with a link that only works for the client is a link that doesn't work.",
          ],
          [
            "It has a size limit you can't see. ",
            { text: "Gmail", href: "https://support.google.com/mail/answer/6584" },
            " caps attachments on a personal account at 25MB and, above that, swaps the file for a Google Drive link. Microsoft 365 mailboxes default to ",
            {
              text: "35MB to send and 36MB to receive",
              href: "https://learn.microsoft.com/en-us/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits",
            },
            ", and an administrator can set anything from 1MB to 150MB. What matters is the client's receiving limit, which you don't know until the email bounces.",
          ],
          "It files nowhere. The document now exists in your Sent folder, the client's inbox, and wherever they saved it, and when they ask for it again next year the reply is another copy. None of those copies is the one in the client's file.",
        ],
      },
      { type: "h2", text: "What are the ways to send a document without attaching it?" },
      {
        type: "p",
        text: "Every alternative does the same basic thing: the file stays in one place and the client is given access to it. They differ in who can open it, what the client has to do first, and whether you can change your mind.",
      },
      {
        type: "table",
        head: ["Way to send", "Who can open it", "Can you take it back?"],
        rows: [
          ["Email attachment", "Anyone it reaches", "No"],
          ["“Anyone” link", "Anyone with the link", "Yes, remove the link"],
          ["Share with named people", "Only those people", "Yes, remove them"],
          ["Client portal", "The signed-in client", "Yes, unshare it"],
          ["Xero document pack", "Recipients, via Xero", "Cancel the pack"],
        ],
        caption: "“Take it back” means stopping further access. Nothing on this list can unsend a file somebody has already downloaded.",
      },
      {
        type: "p",
        text: "That caption is the honest limit of the whole idea. A link does not stop a client downloading the file and forwarding it; nothing does. What it changes is the moment of sending. The mistake that sends an attachment to the wrong person is made before anyone has downloaded anything, and a link that only opens for the right person turns that mistake into a harmless one.",
      },
      { type: "h2", text: "When is a link better than an attachment?" },
      {
        type: "list",
        items: [
          "When the document identifies the client or their money: tax returns, accounts, payslips, bank details, anything with a tax file number, National Insurance number or date of birth on it.",
          "When you might need to take it back: a draft that turned out to be wrong, a pack sent before the partner reviewed it.",
          "When it is large. A year-end pack or a scanned set of statements can pass 20MB without anyone noticing, and the bounce arrives after you have moved on.",
          "When it should be found again. A file the client can open from the same place next year saves you sending it a second time.",
          "When more than one person at the client needs it. Each person gets their own access, instead of one person forwarding an attachment to the others.",
        ],
      },
      { type: "h2", text: "When is an attachment still the right choice?" },
      {
        type: "p",
        text: "When the file is small, would do no harm in the wrong inbox, and is meant to be kept by the person receiving it. A meeting agenda, a blank form, a published fact sheet or a newsletter are all fine as attachments, and making a client sign in to read an agenda is friction for nothing.",
      },
      {
        type: "p",
        text: "The harder case is the signed copy. After a client signs, they are entitled to their own copy of what they signed, and most e-signature tools email it to them, attached, when signing completes. That is a reasonable design: the client ends up holding the record rather than depending on your system to show it to them. But it means a sensitive document does leave by attachment at the end, even in a workflow that sent it for signature by link. If that matters for a particular document, check what your signing tool does before you send it.",
      },
      { type: "h2", text: "What does Practice Manager do when you email a client?" },
      {
        type: "p",
        text: [
          "It hands the email to your own mail program. Xero Central's page on ",
          {
            text: "sending emails",
            href: "https://central.xero.com/s/article/Send-emails-from-Practice-Manager-US-CA-SG-SA-HK-MY-ROW",
          },
          ", now titled for Xero Partner Hub, says that with a default email client set up on your computer, clicking New email on a job opens your default email program. Whatever you attach, you attach there. Invoices are the exception: Xero sends them from no-reply@post.xero.com, with replies going to the login email of the user who sent them.",
        ],
      },
      {
        type: "p",
        text: [
          "Practice Manager's Documents tab stores files of up to 16MB against a client, job or quote for your own staff, and Xero Central describes uploading, editing and deleting them, not sharing them with a client. The client-facing route Xero has built is ",
          { text: "document packs", href: "/blog/year-end-pack-xero-practice-manager" },
          ", in Xero HQ and Xero Partner Hub for Australia, New Zealand and the UK: up to 15 documents of 10MB each, sent as a link to a secure Xero portal, with at least one e-signature request in every pack and a Xero login for every signer. Xero Central also warns that everyone in the practice using Xero Partner Hub can see what is in them. As of 14 September 2026, when we last read those pages, packs are a way to send documents for signature, not a general way to send a client a file.",
        ],
      },
      { type: "h2", text: "How do you share a file from Google Drive or OneDrive safely?" },
      {
        type: "p",
        text: "Most practices already have a way to send a link: the storage their client files live in. The difference between a safe link and an attachment by another name is a handful of settings.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          [
            "Share with the client by name, not with anyone who has the link. Microsoft describes an “Anyone” link as one that ",
            {
              text: "works for whoever receives it",
              href: "https://support.microsoft.com/en-us/onedrive/share-files-and-folders-in-microsoft-onedrive",
            },
            ", whether you sent it to them or it was forwarded, and notes that administrators may switch the option off for exactly that reason. Google Drive's “Anyone with the link” works the same way.",
          ],
          [
            "Give access an end date. On a Google Workspace account you can ",
            {
              text: "add an expiry date",
              href: "https://support.google.com/drive/answer/2494893?hl=en&co=GENIE.Platform%3DDesktop",
            },
            " to a person's access, up to a year ahead. In OneDrive and SharePoint, Microsoft 365 subscribers can set an expiry date and a password on an “Anyone” link; send the password separately, by text or phone, never in the same email.",
          ],
          "Share the file where it is filed, from the client's folder, not a copy dragged into a “Shared with clients” folder. A copy is a second record that someone has to remember to delete.",
          [
            "Watch what Gmail does for you. When you insert a Drive file that the recipient can't open, ",
            { text: "Gmail asks", href: "https://support.google.com/mail/answer/2487407" },
            " whether to change its sharing, and offers “Anyone with the link” alongside an option that limits it to the people on the email. Choose the second.",
          ],
          "Take access away when the job is done. A share that nobody removes is still open in three years, to an address that may no longer belong to the client.",
        ],
      },
      {
        type: "callout",
        title: "Personal accounts are the catch",
        text: "Expiry dates and link passwords are paid-plan features: Google lists expiry for work and school accounts, and Microsoft for Microsoft 365 subscribers. A practice keeping client files in a free personal Drive or OneDrive has fewer of these controls, and a bigger problem than attachments.",
      },
      { type: "h2", text: "What should the email say, if the file isn't in it?" },
      {
        type: "p",
        text: "The email still does most of the work. It is what the client reads, and a link with no explanation looks exactly like the phishing email they have been told never to click. A good one says four things.",
      },
      {
        type: "list",
        items: [
          "What is ready, named the way it is filed: your FY2026 tax return, not your documents.",
          "Where it is and how to get in: sign in to the portal, or open the link from this address.",
          "What you need them to do, and by when.",
          "Nothing sensitive. Keep amounts, tax file numbers and dates of birth out of the subject line and the body, since the email itself can still reach the wrong person.",
        ],
      },
      {
        type: "p",
        text: [
          "Send it from an address the client recognises, and tell new clients once, at onboarding, how you will send them documents. A client who knows their documents always come through the portal has a reason to distrust an email that says otherwise. And the name in the email only helps if it matches the file, which is the case for ",
          { text: "naming files consistently", href: "/blog/how-to-name-client-files" },
          " in the first place.",
        ],
      },
      { type: "h2", text: "How does this work in XTK?" },
      {
        type: "p",
        text: [
          "XTK is a browser extension that adds a Documents tab to each client, job and quote in Practice Manager, showing that client's folder in your practice's own Google Drive, OneDrive or SharePoint, and a ",
          { text: "client portal", href: "/guides/set-up-client-portal" },
          " your clients sign in to. It gives you three ways to send without attaching, and one place where it does attach.",
        ],
      },
      {
        type: "list",
        items: [
          "Share to the client portal. In the client's Documents tab, open a file or folder's ⋮ menu and choose “Share”. Nothing is copied or moved: the share is a marker over the file where you filed it, and XTK checks it on every request, so the client can reach only what you shared. A shared file is read-only; a shared folder also lets the client upload into it. “Unshare” ends access and leaves the file where it is.",
          "Invite the client. The portal is opened by an emailed invitation with a single-use link that lasts 30 days, where the client sets a password. After that they sign in with their email address and password, and one login covers every practice that invites them.",
          [
            "Send for signature. ",
            { text: "A signature request", href: "/guides/send-documents-for-signature" },
            " emails each signer a link, not the document. The link works once and lasts 30 days, the document is shown to them streamed from your storage, and no account is needed.",
          ],
          [
            "Emails go from your own Gmail or Outlook, or your practice's shared mailbox, once ",
            { text: "you connect one", href: "/guides/connect-your-email" },
            ", with a copy in its Sent folder. With none connected they go from XTK's shared address.",
          ],
        ],
      },
      {
        type: "callout",
        title: "Sharing a file does not tell the client",
        text: "XTK sends no email when you share something, and the portal's own notification bell covers only signature and document requests, so a shared file appears quietly. Send the client a short note yourself, from your usual mail program, saying what is there. XTK's email templates can fill in a portal invitation link or a document request link, but there is no variable for a link to a particular file.",
      },
      {
        type: "p",
        text: "And the attachment. When the last signer signs, XTK saves a signed copy of each document beside the original, with a certificate of completion as its last page, and emails those signed PDFs to every signer as attachments. There is no setting to turn that off. Signers who are also portal members can download the same signed copy from the portal's Signatures list whenever they need it.",
      },
      {
        type: "p",
        text: [
          "Two hedges this site owes on every article like this. Files live in your own storage and uploads go straight from the browser to Google or Microsoft, but a client downloading a shared file, like a signer viewing a document, is served through XTK's backend in flight, and merging, zipping, generating from a template and flattening signatures stream through it too. ",
          { text: "How XTK handles your data", href: "/guides/how-xtk-handles-your-data" },
          " has the detail. XTK is $59 USD a month for the whole practice after a 30-day trial, with no per-user charge, and portal members don't count as users — the ",
          { text: "pricing page", href: "/pricing" },
          " has the rest.",
        ],
      },
      {
        type: "callout",
        title: "What XTK does not do here",
        text: "It never creates an “Anyone with the link” share or changes a file's sharing in Google Drive, OneDrive or SharePoint; clients reach files only through the portal. A portal share has no expiry date, and lasts until you unshare it or disable the contact or the portal. XTK does not record whether a client has opened or downloaded a shared file; the viewed status exists only for signature requests. The portal offers shared files as downloads, with no preview in the browser. And XTK does not send or file Xero's document packs.",
      },
      { type: "h2", text: "The sending-without-attachments checklist" },
      {
        type: "list",
        items: [
          "Decide by the document: sensitive, large, or likely to be needed again means a link.",
          "Share with named people, never “Anyone with the link”, for client documents.",
          "Share the filed file, not a copy.",
          "Set an end date on access where your storage allows it.",
          "Send any password by a different route from the link.",
          "Say in the email what is ready, where, and what to do, with nothing sensitive in it.",
          "Tell new clients once how you send documents, so a different kind of email looks wrong.",
          "Check what your signing tool emails when signing completes.",
          "Remove access when the work is done.",
        ],
      },
      {
        type: "callout",
        title: "Sources and dates",
        text: [
          "Attachment and message limits are from ",
          { text: "Gmail Help", href: "https://support.google.com/mail/answer/6584" },
          " and Microsoft's ",
          {
            text: "Exchange Online limits",
            href: "https://learn.microsoft.com/en-us/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits",
          },
          "; recall conditions from Microsoft Support; sharing controls from Microsoft's OneDrive sharing page and Google's Drive and Gmail help. The breach figures are from the Office of the Australian Information Commissioner's July to December 2024 report, published 13 May 2025. Practice Manager's email behaviour is from Xero Central, read 15 September 2026, and document pack details from Xero Central's pages, read 14 September 2026. All other pages were read on 15 September 2026. XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
        ],
      },
    ],
    faq: [
      {
        q: "Is it safe to email a tax return to a client as an attachment?",
        a: "It works, but it is the riskiest way to send one. An attachment cannot be recalled once a client's external address has received it, and emailing personal information to the wrong recipient was the largest human-error cause of data breaches in the Australian privacy regulator's report for July to December 2024. A client portal or a share limited to the client's own address means a mistyped address receives nothing it can open.",
      },
      {
        q: "Can you unsend an email attachment?",
        a: "Rarely. Microsoft says message recall only works when both people have Microsoft 365 work or school accounts in the same organisation and the recipient has not opened the message. It does not work for Gmail, Outlook.com or other external addresses, so for most client emails an attachment cannot be taken back once sent.",
      },
      {
        q: "What is the maximum attachment size for Gmail and Outlook?",
        a: "Gmail allows 25MB of attachments on a personal account and replaces anything larger with a Google Drive link. Microsoft 365 mailboxes default to a 35MB sending and 36MB receiving message size, which an administrator can change to anything between 1MB and 150MB. The limit that decides whether a client receives your email is their receiving limit, which you usually cannot see.",
      },
      {
        q: "Is a Google Drive or OneDrive link safer than an attachment?",
        a: "Only if it is shared with the client by name. An 'Anyone with the link' share opens for whoever has the link, including anyone it is forwarded to, which makes it an attachment by another name. Sharing with a named person, adding an expiry date where your plan allows it, and removing access when the work is done is what makes a link safer.",
      },
      {
        q: "How do I tell a client a document is ready without attaching it?",
        a: "Send a short email that names the document the way it is filed, says where it is and how to get in, and says what you need them to do and by when. Leave sensitive details such as amounts, tax file numbers and dates of birth out of the subject line and body, and send from an address the client recognises.",
      },
    ],
  },
  {
    slug: "accountants-letter-for-a-home-loan",
    title: "The accountant's letter for a home loan: what you can send",
    excerpt:
      "Brokers ask for a letter saying the client can afford the loan. That is the one letter you should decline. Here is the smaller, factual letter you can send instead, and how to build it once so nobody retypes it.",
    date: "2026-09-17",
    readingTime: "15 min read",
    category: "Guides",
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
          { text: "a shorter post", href: "/blog/stop-retyping-client-data" },
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
        text: "Three things, and most requests are satisfied by the first. The toolkit publishes a template for each, as Word files you can adapt.",
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
