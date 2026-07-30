import type { Inline, RelatedLink } from "./inline";

export type { RelatedLink };

/**
 * `Inline` fields may carry inline links; `string` fields deliberately may not.
 * Headings are landmarks and anchor targets, a pull-quote's display type fights
 * an underlined link, and a callout title is a label rather than a sentence.
 */
export type PostBlock =
  | { type: "p"; text: Inline }
  | { type: "h2"; text: string }
  | { type: "list"; items: Inline[]; ordered?: boolean }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: Inline };

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
    featured: true,
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
          { text: "add the extension", href: "/guides/getting-started-with-xtk" },
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
        text: "The real win isn't sending — it's tracking. Because every request is tied to a client, XTK can show you one list of everything outstanding across the practice, send polite reminders on a schedule you set, and stop you from ever again searching an inbox for the words “signed copy attached”.",
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
      "stop-retyping-client-data",
      "introducing-xtk",
    ],
    relatedLinks: [
      { label: "Manage client documents", href: "/guides/manage-client-documents" },
      { label: "Folder templates", href: "/guides/folder-templates" },
      { label: "Connect Google Drive, OneDrive or SharePoint", href: "/guides/connect-document-storage" },
    ],
    body: [
      {
        type: "p",
        text: "Nobody sets out to build a messy Drive. It happens one shortcut at a time: a file saved to the root “just for now”, a client folder named three different ways by three different people, a year folder that quietly becomes two.",
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
      "introducing-xtk",
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
