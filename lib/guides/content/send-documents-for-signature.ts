import type { Guide } from "../types";

export const guide: Guide = {
  slug: "send-documents-for-signature",
  title: "Send documents for e-signature in Xero Practice Manager",
  description:
    "Send a PDF for e-signature from Xero Practice Manager: pick documents, add your signers and a signing order, place fields, send, then track every request.",
  series: "Client-facing",
  order: 12,
  date: "2026-07-28",
  updated: "2026-07-29",
  readingTime: "10 min read",
  ogImage: "/images/guides/send-documents-for-signature/og.png",
  thumbnail: {
    src: "/images/guides/send-documents-for-signature/thumb.png",
    alt: "XTK's e-signature authoring page with a signature field placed on an engagement letter, ready to send from Xero Practice Manager",
  },
  relatedSlugs: [
    "esignatures-what-your-client-sees",
    "manage-client-documents",
    "notifications",
    "bulk-file-actions",
  ],
  faq: [
    {
      q: "Does XTK charge per signature or per envelope?",
      a: "No. XTK is one subscription for the whole practice — $59 USD per month after a 30-day free trial — and e-signatures are included. There is no per-envelope fee, no per-signer fee and no separate signature plan, so sending an engagement letter to two directors costs the same as sending nothing at all. The bill stops tracking how much you use it.",
    },
    {
      q: "Do my clients need an account or any software to sign?",
      a: "No. Each signer gets an email with their own signing link, which opens the document in an ordinary browser — nothing to install, no password, no XTK account. If that email address also belongs to an active contact on the client's Client Portal, the request appears in their portal Signatures list too, so they can sign there instead.",
    },
    {
      q: "Can I change the signers after I've created the request?",
      a: "Yes, while it is still a draft: the draft row's ⋮ menu on the Signatures tab has “Edit recipients”, where you can add, rename, re-email, reorder or remove signers. The web portal page only shows the roster and changes the order — signers are added and removed in Practice Manager, where XTK can search your clients and contacts. Once sent, the list is locked; void it and start again.",
    },
    {
      q: "Can I cancel a signature request after I've sent it?",
      a: "Yes — void it. “Void request” appears in the row ⋮ menu and the Status dialog's footer for any request that is Sent or In progress. It kills every outstanding signing link, emails the recipients that it was cancelled, and leaves a Voided audit record. It can't be undone; anything already signed is untouched. A draft is deleted rather than voided.",
    },
    {
      q: "What proof do I have that a document was really signed?",
      a: "Every completed request produces a flattened PDF with a Certificate of Completion appended as its final page: each signer's name and email, when they signed, the IP address and device they signed from, the request id, and an integrity hash of the captured values. The same events sit behind the Status dialog's History list, so you can read the trail without opening the file.",
    },
  ],
  body: [
    {
      type: "p",
      text: "XTK adds e-signatures to Xero Practice Manager (XPM): pick a PDF from a client's folder, add the people who need to sign, drag fields onto the page, and send. Signers get an emailed link and sign in an ordinary browser — no account, no app, no per-signature fee. When the last one signs, a flattened “… (signed).pdf” with a Certificate of Completion appended lands back in that client's folder.",
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: "Document storage must be connected, and the client's Documents tab opened once so the client has a storage folder holding at least one PDF — only PDFs can be sent for signature, so “Convert to PDF” a Word file first. There is no Admin-only gate: any team member can send and track requests. A connected mailbox is optional; without one, invitations go from XTK's shared address. Read-only practices (expired trial or cancelled subscription) can view requests but not start, send or void one.",
    },
    { type: "h2", text: "Two ways to start a signature request" },
    {
      type: "p",
      text: "Both open the same “New signature request” dialog; the only difference is whether a document is chosen for you.",
    },
    {
      type: "list",
      items: [
        "From the Documents tab: the ⋮ menu on a PDF row has “Send for signature”, and the dialog opens with that PDF ticked. It appears on PDFs only — not on Word files or folders.",
        "From the Signatures tab: “New signature” at the top right. Nothing is pre-selected, so you pick the documents — the route when one request covers two or three PDFs.",
      ],
    },
    {
      type: "image",
      src: "/images/guides/send-documents-for-signature/01-send-for-signature-row-action.png",
      alt: "The row actions menu on a PDF in XTK's Documents tab in Xero Practice Manager, with Send for signature highlighted to start an e-signature request",
      caption:
        "“Send for signature” sits in the row menu of any PDF in the client's folder.",
      width: 1440,
      height: 757,
    },
    { type: "h2", text: "How do I create the signature request?" },
    {
      type: "steps",
      steps: [
        {
          title: "Open the client and start a new request",
          text: "Open the client in Practice Manager, then use a PDF's “Send for signature” or the Signatures tab's “New signature”.",
        },
        {
          title: "Give the request a title",
          text: "The title names the request everywhere afterwards — the Signatures table, your notifications, and the default email subject — so use something a client would recognise: “FY25 engagement letter”. A description is optional and shows as a note under the title.",
          image: {
            src: "/images/guides/send-documents-for-signature/02-new-signature-documents.png",
            alt: "XTK's New signature request dialog in Xero Practice Manager showing the title and description fields above the client's PDFs ready to pick for e-signature",
            width: 1440,
            height: 757,
          },
        },
        {
          title: "Tick the PDFs you want signed",
          text: "The picker browses the client's own folder with a breadcrumb and filter box: folders open, PDFs get a checkbox, anything else is greyed out and marked “Not a PDF”. Choices survive folder navigation, so you can gather from several folders.",
        },
        {
          title: "Put the documents in signing order",
          text: "Selected documents form a numbered list above the picker. Drag the “⋮⋮” handle, or use “↑” and “↓”, to set their order; “×” removes one.",
        },
        {
          title: "Click “Next: recipients”",
          text: "The button stays greyed out until you have a title and at least one document.",
        },
        {
          title: "Add the people who need to sign",
          text: "Type into “Search clients and contacts by name or email” and XTK offers matches from the client you have open, tagged Client or Contact, filling in the email. Or enter a name and email by hand, or use “Add me as a signer”. Click “Add signer” for each.",
          image: {
            src: "/images/guides/send-documents-for-signature/03-new-signature-recipients.png",
            alt: "The recipients step of XTK's New signature request dialog, showing two colour-coded signers on separate signing steps with the add-a-signer search below",
            width: 1440,
            height: 757,
          },
        },
        {
          title: "Set who signs first",
          text: "Signers sit on numbered steps drawn as a flow down the left edge — step 1 reads “Signs first”, later ones “Then signs”. A card's up and down arrows move that signer between steps.",
        },
        {
          title: "Click “Start signature”",
          text: "This saves a draft and opens the authoring page in a new tab. Nothing has been emailed yet — a draft is safe to leave and come back to.",
        },
      ],
    },
    {
      type: "callout",
      title: "Check the first signer before you continue",
      text: "XTK pre-fills the first recipient from the client's record — the primary contact's name and email, read live from the client page you have open. Usually that is who you want, but glance at it: it is a real address, and the one that gets emailed. Edit it in place, or “×” to remove it.",
    },
    { type: "h2", text: "How does signing order work?" },
    {
      type: "p",
      text: "Order comes from each signer's step number: same step means together, different steps mean one after another.",
    },
    {
      type: "list",
      items: [
        "Everyone on step 1 (the default) is emailed the moment you send and can sign in any order; the group shows a “2 sign together” badge.",
        "A signer on step 2 isn't emailed at send time at all: their invitation goes out once every step-1 signer has signed — what you want when a client signs and a partner countersigns.",
        "There is no timer behind it: a step opens the moment the previous one finishes, and if a signer never signs, the next step never opens. Nudge them with “Resend link” in the Status dialog.",
      ],
    },
    { type: "h2", text: "How do I place the fields on the page?" },
    {
      type: "p",
      text: "“Start signature” opens XTK's authoring page in a new tab. It sits outside Practice Manager on purpose: signers need somewhere public to sign, and one shared page renders the document identically for both of you. Documents stack as one continuous scroll with the field rail beside them and your signers along the top as coloured avatars.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Choose who you're placing for",
          text: "“Placing for” at the top of the rail sets which signer a new field belongs to. Every field takes that person's colour, so a two-signer document reads at a glance.",
          image: {
            src: "/images/guides/send-documents-for-signature/04-authoring-fields.png",
            alt: "XTK's e-signature authoring page showing the field palette rail, the Placing for signer picker and colour-coded signature and date fields placed on a PDF",
            width: 1440,
            height: 757,
          },
        },
        {
          title: "Drag a field onto the document",
          text: "Drag a tile — “Signature”, “Date Signed”, “Text” and the rest — onto the page. It lands as a single-line box you can drag to move or pull by its handles to resize.",
        },
        {
          title: "Click a placed field to set it up",
          text: "The rail swaps to its settings: “Required” (on by default), a “Data label”, a “Tooltip” the signer sees on hover, and any formatting the type needs. “Show preview” drops a sample value in so you can check it fits.",
          image: {
            src: "/images/guides/send-documents-for-signature/05-field-settings.png",
            alt: "The per-field settings panel on XTK's e-signature authoring page with Required, Data label, Tooltip and a date format for a Date Signed field",
            width: 1440,
            height: 757,
          },
        },
        {
          title: "Repeat for every signer and every document",
          text: "Switch “Placing for” to the next person and carry on, using the “Documents” rail to jump between files and pages. Escape returns you to the palette.",
        },
      ],
    },
    {
      type: "video",
      src: "/images/guides/send-documents-for-signature/place-signature-field.mp4",
      width: 1440,
      height: 756,
      alt: "Dragging a signature field from XTK's field palette onto a PDF on the e-signature authoring page, then opening the placed field's settings",
      caption:
        "Drag, drop, adjust — placing a field takes seconds.",
    },
    {
      type: "table",
      head: ["Field", "Who fills it in", "Extra setting"],
      rows: [
        ["Signature", "The signer draws, types or reuses a saved signature", "—"],
        ["Date Signed", "Filled in automatically at the moment they sign", "Date format"],
        ["Email", "The signer types an address; the shape is checked", "—"],
        ["Text", "The signer types free text", "—"],
        ["Number", "The signer types a number; the shape is checked", "Number format"],
        ["Dropdown", "The signer picks one of your options", "Options, one per line"],
        ["Checkbox", "The signer ticks it", "—"],
      ],
      caption:
        "The field types you can place today. Every one also carries Required, a data label and a tooltip.",
    },
    {
      type: "callout",
      title: "Which day a Date Signed field lands on",
      text: "The format you pick is what everyone sees: the preview while you place the field, the signer's own read-only box, and the finished “… (signed).pdf”. Pick “DD/MM/YYYY” and an Australian client signing on the 24th gets 24/07/2026 — the date follows the signer's own timezone, not your server's. The Certificate of Completion on the last page is deliberately different: it records the exact moment in UTC (“July 23, 2026 at 11:00 PM UTC”), because that instant, not the calendar day, is what XTK attests to. For a signature just before midnight or just after dawn the two can therefore name different days. Both are right — the field follows the signer, the certificate follows the clock — and the certificate is the one to quote if a date is ever questioned.",
    },
    {
      type: "callout",
      title: "Nothing forces you to place a field",
      text: "XTK will happily send a document with no fields on it, and a signer with nothing required of them can submit immediately. Before sending, switch “Placing for” to each signer and check they have at least a signature field — that check is yours, not the product's. Fields lock on send, so a missing signature box means voiding and starting again.",
    },
    { type: "h2", text: "How do I send it?" },
    {
      type: "steps",
      steps: [
        {
          title: "Click “Send for signature” in the bottom bar",
          text: "The bar sits at the foot of the authoring page, and stays disabled until the request has at least one signer.",
        },
        {
          title: "Check the subject",
          text: "The subject is pre-filled with your request title, and it is what signers see in their inbox. Edit it if the internal title isn't what you'd say to a client.",
          image: {
            src: "/images/guides/send-documents-for-signature/06-send-panel.png",
            alt: "The send panel on XTK's e-signature authoring page with an editable subject and optional message above the Send for signature button",
            width: 1440,
            height: 757,
          },
        },
        {
          title: "Add a message (optional)",
          text: "Anything here goes into the body of the signing invitation, above the link. Leave it empty and the standard wording goes out alone.",
        },
        {
          title: "Click “Send for signature” to confirm",
          text: "The request goes live: it locks against further edits, mints one single-use signing link per signer, and emails the first step. The bar confirms with “Signature request sent” and names the addresses emailed.",
        },
      ],
    },
    {
      type: "callout",
      title: "Send is the point of no return",
      text: "Everything before that confirm button is a private draft — creating the request, placing fields, editing recipients, closing the tab. Confirming sends real email, opens live signing links, and freezes the documents, fields and recipient list: your only ways out are waiting, nudging with “Resend link”, or voiding.",
    },
    { type: "h2", text: "How do I track what's outstanding?" },
    {
      type: "p",
      text: "The client's Signatures tab holds every request from the moment it is created, with a search box matching the request title and filter buttons for All, Draft, In progress, Completed, Declined and Voided — “In progress” covers everything still out for signature.",
    },
    {
      type: "p",
      text: "Four columns say where a request stands: Name (title, description beneath), Status, Progress — “1 of 2 signed”, plus “1 viewing” when someone has opened it without signing — and Initiated, the date created.",
    },
    {
      type: "image",
      src: "/images/guides/send-documents-for-signature/07-signatures-tab.png",
      alt: "The Signatures tab in Xero Practice Manager listing a client's e-signature requests with status pills, signing progress and the status filter buttons",
      caption:
        "Every request for the client, with its status and signing progress.",
      width: 1440,
      height: 757,
    },
    {
      type: "p",
      text: "Clicking a row opens what suits its status: a draft reopens the authoring page, anything sent opens the Status dialog. The ⋮ menu carries that status's actions.",
    },
    {
      type: "table",
      head: ["Status", "What it means", "Row actions"],
      rows: [
        [
          "Draft",
          "Saved but never sent. No email has gone anywhere.",
          "Continue · Edit recipients · Delete draft",
        ],
        [
          "Sent",
          "The first step's signers have been emailed; nobody has signed.",
          "Status · Void request",
        ],
        [
          "In progress",
          "Someone has opened or signed it, and it is still going.",
          "Status · Void request",
        ],
        [
          "Completed",
          "Everyone signed; the signed PDF is in the client's folder.",
          "Status · Download · Open folder",
        ],
        [
          "Declined",
          "A signer declined, so the request stops there.",
          "Status",
        ],
        [
          "Voided",
          "You cancelled it, and every signing link is dead.",
          "Status",
        ],
      ],
      caption:
        "The six statuses a signature request can hold, and what each row lets you do.",
    },
    {
      type: "p",
      text: "The Status dialog is where you chase people. It shows a progress bar, the documents that went out, and every signer's state — “Not yet notified”, “Sent”, “Viewed, not signed”, “Signed” or “Declined” — with “Resend link” beside anyone emailed who hasn't responded; resending retires the old link, so only the newest works. Below that, History lists created, sent, link resent, viewed, signed and completed in UTC — the record behind the Certificate of Completion.",
    },
    {
      type: "image",
      src: "/images/guides/send-documents-for-signature/08-status-detail.png",
      alt: "XTK's signature request Status dialog showing per-signer states, a Resend link button and the timestamped history behind the Certificate of Completion",
      width: 1440,
      height: 757,
    },
    { type: "h2", text: "How do I cancel a request I've already sent?" },
    {
      type: "p",
      text: "Void it. “Void request” sits in the row ⋮ menu and the Status dialog's footer, and appears only while a request is Sent or In progress; a draft is deleted instead, and a completed or declined one has nowhere left to go. Confirm in the “Void signature request” dialog and three things happen: every outstanding signing link stops working, the recipients are emailed that it was cancelled, and the row flips to Voided.",
    },
    {
      type: "image",
      src: "/images/guides/send-documents-for-signature/09-void-confirm.png",
      alt: "The Void signature request confirmation dialog in XTK, explaining that voiding cancels every outstanding signing link and notifies the recipients",
      width: 1440,
      height: 757,
    },
    {
      type: "p",
      text: "Voiding can't be undone, and the row stays on purpose: a request a client has seen is an audit record. Anything already signed is untouched. A draft is different — “Delete draft” removes it with its documents, recipients and fields.",
    },
    { type: "h2", text: "What happens when everyone has signed?" },
    {
      type: "p",
      text: "XTK files it for you. For each document it produces a new PDF with every field value stamped in and a Certificate of Completion appended as the last page, names it after the original with “ (signed)” added, and saves it alongside. The original is never altered or replaced — you keep both — and the same PDFs are emailed to every signer.",
    },
    {
      type: "p",
      text: "The row flips to Completed and its ⋮ menu gains “Download” and “Open folder”, which jumps to the Documents tab with the new file highlighted. You also get a notification as each person signs and on completion.",
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: "For the other side of this — the email your client gets, the signing page, declining, and what the Certificate of Completion actually prints — read the companion guide on what your client sees. The client documents guide covers the Documents tab the flow starts from, including “Convert to PDF”.",
    },
  ],
};
