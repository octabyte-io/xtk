import type { Guide } from "../types";

export const guide: Guide = {
  slug: "set-up-client-portal",
  title: "Client portal for accountants: set up and share files",
  description:
    "Set up a client portal for accountants in Xero Practice Manager: enable it per client, invite contacts by email, and share files that never leave your Drive.",
  series: "Client-facing",
  order: 14,
  date: "2026-07-28",
  updated: "2026-07-28",
  readingTime: "9 min read",
  ogImage: "/images/guides/set-up-client-portal/og.png",
  thumbnail: {
    src: "/images/guides/set-up-client-portal/thumb.png",
    alt: "XTK's Client Portal tab in Xero Practice Manager showing the roster of portal contacts with Invited and Active status tags and an Invite contact button",
  },
  relatedSlugs: [
    "manage-client-documents",
    "bulk-file-actions",
    "email-templates",
    "client-portal-guide-for-clients",
    "esignatures-what-your-client-sees",
    "how-xtk-handles-your-data",
  ],
  relatedLinks: [
    { label: "Client portals your clients will actually use", href: "/blog/client-portals-clients-actually-use" },
    { label: "Privacy Policy", href: "/legal/privacy" },
  ],
  faq: [
    {
      q: "Does my client need to install anything or pay for the portal?",
      a: "No. Your client signs in at XTK's web portal with an email address and a password they choose when they accept your invitation — nothing to install, and Portal Members are free: they don't count against your practice's user roster or your bill. One login can span several practices, so a client whose bookkeeper also uses XTK sees a switcher rather than two accounts.",
    },
    {
      q: "Can my client see anything other than what I've shared?",
      a: "No. The portal's top level is exactly the set of things you've shared, plus a “Shared files” list for individually shared files. Everything above or beside a share — the client's own folder, your main storage folder, every other client — is invisible and can't be reached by guessing a name or a URL, because the server re-checks each request against your shares before it touches your storage.",
    },
    {
      q: "What happens to files my client uploaded if I remove them or turn the portal off?",
      a: "The files stay. Disabling the portal, disabling a contact, removing a contact and unsharing a folder all leave every file exactly where it is in your Google Drive, OneDrive or SharePoint — a client's uploads are never auto-deleted, and you keep seeing them in the Documents tab. Only an explicit delete removes a file.",
    },
    {
      q: "Can I copy the invite link and send it myself?",
      a: "No — email is the only delivery path, and there's no copy-a-link fallback anywhere in the panel. XTK can't show you the link even if you want to see it: it stores only a fingerprint of each invite link, never the link itself, so nobody with a copy of the database can let themselves into your client's documents. That means a contact you've added but never emailed has no way to accept, and it makes your invite email template worth keeping tidy — if its body leaves out {{portal_invite_url}}, XTK adds the link at the end so the email still works, but it lands wherever XTK puts it rather than where your wording leads.",
    },
    {
      q: "Why can't my client upload anything?",
      a: "Almost always because you've only shared individual files. A file share is read-only, so it gives your client nowhere to write; uploading needs at least one shared folder, and until there is one they see a prompt asking their accountant to share one. The other cause is billing: while your practice is read-only after a trial expires or a subscription is cancelled, client uploads are blocked too.",
    },
  ],
  body: [
    {
      type: "p",
      text: [
        "A client portal gives one of your clients a logged-in place to read the documents you share and to send you theirs. In XTK you switch it on per client from the “Client Portal” tab inside Xero Practice Manager (XPM), invite the people who need access by email, then mark folders and files as shared from ",
        { text: "that client's Documents tab", href: "/guides/manage-client-documents" },
        ". Nothing is copied: a Share is a marker on a file that stays in your practice's own ",
        { text: "Google Drive, OneDrive or SharePoint", href: "/guides/connect-document-storage" },
        ".",
      ],
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: "Any team member can do this — there's no Admin-only gate. Enabling and inviting work with no storage connected, but sharing needs the client's Documents tab opened once so the client has a storage folder (see “Manage client documents inside Xero Practice Manager”). You also want one email template containing {{portal_invite_url}}, because email is the only way to deliver an invite. Read the next section before you press “Enable client portal”.",
    },
    { type: "h2", text: "Enabling the portal emails your client immediately" },
    {
      type: "p",
      text: "This is the one thing to know before you touch the feature. The button says “Enable client portal”, which sounds like it only turns something on. On a client whose primary email address XTK has read from XPM, the first enable also invites that address — no confirmation, no preview, no chance to reword. Worse, the roster you land on doesn't show it: it reads “No contacts yet” until you reload the page, at which point the invited contact appears.",
    },
    {
      type: "callout",
      title: "What clicking “Enable client portal” actually does",
      text: "In order: it creates the portal, adds the client's primary email as a contact, mints that person's invite link, fills your “Portal invite” email template — or simply the first template in your list, if that one has been renamed or deleted — and sends it. With no primary email on the client, the invite is skipped silently and the roster opens empty. So read that address in XPM first: exactly as it stands, it is who gets the mail.",
    },
    {
      type: "steps",
      title: "Turn the portal on",
      steps: [
        {
          title: "Open the client's “Client Portal” tab",
          text: "In Practice Manager, open the client, then click “Client Portal” in XTK's tab strip — beside “Documents” and “Signatures”. Before the portal exists you get an empty state headed “Enable the Client Portal”.",
          image: {
            src: "/images/guides/set-up-client-portal/01-portal-tab-not-enabled.png",
            alt: "The Client Portal tab in Xero Practice Manager before the client portal is enabled, showing the Enable client portal button",
            width: 1501,
            height: 600,
          },
        },
        {
          title: "Check the client's primary email in XPM",
          text: "Read the address flagged primary on the client's Information tab. If it isn't somewhere you're happy to email today, correct it in XPM first.",
        },
        {
          title: "Click “Enable client portal”",
          text: "The panel becomes the contact roster, headed “Client Portal” with a red “Disable client portal” button. It will say “No contacts yet” whether or not an invitation just went out.",
        },
        {
          title: "Reload the page to see who was invited",
          text: "This step is not optional, and it is the only way to find out what the enable did. After a reload the roster shows the contact XTK created from the client's primary email, at “Invited”, with “Last sent” today. Because the address came off the client record rather than from a person, the contact's name is the client's own business name.",
          image: {
            src: "/images/guides/set-up-client-portal/02-portal-roster.png",
            alt: "The XTK client portal roster after enabling, showing the contact auto-invited from the client's primary email address with an Invited status tag and today's Last sent date",
            width: 1456,
            height: 470,
          },
        },
      ],
    },
    {
      type: "callout",
      title: "An empty roster does not mean no email was sent",
      text: "Take the “No contacts yet” you see straight after enabling as no evidence at all. XTK sends the invitation and creates the contact server-side, then leaves the roster showing its empty state until something makes it re-read — so the one screen that could tell you an email just left your practice shows nothing. Always reload before you conclude anything, and if the address was wrong, act on the row you find rather than assuming you got away with it.",
    },
    { type: "h2", text: "How do I invite someone to the client portal?" },
    {
      type: "p",
      text: "Most clients need more than one person — an owner, a bookkeeper, a spouse who signs. “Invite contact” sits at the top right of the roster, and opens a two-step dialog: pick the person, then compose the email carrying their link.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Click “Invite contact”",
          text: "The dialog opens on “Step 1 of 2 — Choose who to invite”.",
        },
        {
          title: "Find the person, or type them in",
          text: "Type into “Name” and XTK searches the clients and contacts it has read from XPM, tagging each result “Client” or “Contact”; pick one and it fills the name and email. Typing both by hand works equally well — the invitation goes to whoever you name, and the portal still belongs to this client.",
          image: {
            src: "/images/guides/set-up-client-portal/03-invite-choose-who.png",
            alt: "Step 1 of XTK's client portal invite dialog, searching clients and contacts by name to choose who to invite",
            width: 640,
            height: 560,
          },
        },
        {
          title: "Click “Continue”",
          text: "Nothing is created yet. XTK only checks the address looks valid — “That does not look like a valid email.” if not.",
        },
        {
          title: "Choose a template and read the email",
          text: "“Step 2 of 2 — Send portal invite” shows the recipient in a locked chip, so a personal invite link can't reach the wrong person, and a line reading “Sending from …”. Pick a “Template” — XTK preselects “Portal invite” — then adjust “Subject”, “Message” and “CC”. The message shows the literal {{portal_invite_url}}, with a note saying their personal link replaces it on send — the same for a brand-new contact and for someone you're re-inviting, because XTK never keeps a copy of the link it can show you.",
          image: {
            src: "/images/guides/set-up-client-portal/04-invite-compose.png",
            alt: "Step 2 of XTK's client portal invite dialog with the locked recipient, template picker, subject, message containing the portal_invite_url variable and a CC field",
            width: 730,
            height: 740,
          },
        },
        {
          title: "Click “Send invite”",
          text: "This is the moment the contact is created and the email leaves; the dialog closing is what success looks like. The new row reads “Invited”, with “Last sent” today. If the send fails XTK removes the contact it just made and keeps your draft: “Could not send the invite. Your draft is kept — try again.”",
        },
      ],
    },
    {
      type: "callout",
      title: "Keep the link variable in every invite template",
      text: "The picker offers no “no template” option, so whatever is selected is what goes out. If a template has lost {{portal_invite_url}}, XTK adds the link at the end of the email rather than sending your client something they can do nothing with — but it lands wherever XTK puts it, not where your wording leads up to it. Keep the variable in every invite template, and keep at least one template in the list. See “Email templates: write once, reuse for invites and requests”.",
    },
    {
      type: "p",
      text: "The link is single-use and lasts 30 days. Clicking it asks a brand-new email to set a password, which creates the account and verifies the address in one step; someone already a Portal Member elsewhere simply accepts, with no password step. Either way the contact flips from “Invited” to “Active” — your signal that they're in.",
    },
    { type: "h2", text: "Invited, Active, Disabled: reading the roster" },
    {
      type: "table",
      head: ["Status", "What it means", "What the row's ⋮ menu offers"],
      rows: [
        [
          "Invited",
          "Emailed, or added but not yet emailed — no account yet",
          "“Send invite” or “Resend invite” · “Disable” · “Remove”",
        ],
        [
          "Active",
          "They accepted and can sign in to this client's portal",
          "“Disable” · “Remove”",
        ],
        [
          "Disabled",
          "Suspended: the row and their files stay, sign-in to this client is blocked",
          "“Enable” · “Remove”",
        ],
      ],
      caption:
        "Each row shows the email address first, then the contact's name, its status tag and when an invite was last sent.",
    },
    {
      type: "image",
      src: "/images/guides/set-up-client-portal/09-roster-statuses.png",
      alt: "A client portal roster in XTK with two contacts, one tagged Active and one tagged Invited, above a filter box and an Invite contact button",
      caption:
        "A portal part-way through being set up: one contact has accepted, one hasn't opened their invitation yet.",
      width: 1501,
      height: 560,
    },
    {
      type: "p",
      text: "Two details catch people out. The filter box matches the email address only, not the name. And “Resend invite” appears only while a contact is “Invited”: once someone is “Active” there's nothing to resend, and a forgotten password is theirs to reset from the portal's sign-in page. For an existing contact the compose box also offers “Invalidate link already sent”, which kills the link in any invite you have already emailed without sending anything new — useful if an invite went to the wrong address or was forwarded on. Sending the invite again gives that person a fresh link, and the older one stops working at that point too.",
    },
    {
      type: "image",
      src: "/images/guides/set-up-client-portal/05-contact-row-menu.png",
      alt: "The row menu on a client portal contact in XTK showing Resend invite, Disable and Remove",
      caption:
        "Every row action lives behind the three-dot menu at the right of the contact.",
      width: 1501,
      height: 640,
    },
    { type: "h2", text: "How do I share files with the client portal?" },
    {
      type: "p",
      text: "Not from the Client Portal tab — sharing lives in the client's Documents tab, beside the files. The portal tab is only the roster, and there's no list of what you've shared, so the “Shared” badge in the file browser is the record.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Open the client's Documents tab",
          text: "Browse to the folder or file the client should see. Anything you share must already live inside this client's own storage folder.",
        },
        {
          title: "Open the row's ⋮ menu and click “Share”",
          text: "It's the last item in the menu, under “Rename” and “Delete”. XTK picks the kind for you: a folder becomes a folder share, a file a file share.",
          image: {
            src: "/images/guides/set-up-client-portal/06-share-row-action.png",
            alt: "The row menu in XTK's Documents tab in Xero Practice Manager with the Share action that exposes a folder to the client portal",
            width: 1456,
            height: 560,
          },
        },
        {
          title: "Wait for the badge",
          text: "The row reads “Sharing…”, then settles on a “Shared” tag — your confirmation, visible in the browser and in search results.",
          image: {
            src: "/images/guides/set-up-client-portal/07-shared-badges.png",
            alt: "A shared folder and a shared file in XTK's Documents tab, each carrying a Shared badge showing they are exposed to the client portal",
            width: 1456,
            height: 640,
          },
        },
        {
          title: "Share several things at once",
          text: "Tick more than one row and the selection bar offers “Share” and “Unshare”. XTK works through them one at a time, and stops at the first item it can't share.",
        },
      ],
    },
    {
      type: "p",
      text: "Reversing it is the same menu: ⋮ → “Unshare”. That removes the marker and nothing else — no file is moved, renamed or deleted, and whatever your client uploaded into the folder stays in your storage and visible to you.",
    },
    { type: "h2", text: "The four sharing rules worth knowing first" },
    {
      type: "list",
      items: [
        "A folder share is read-write. Your client can download from it, upload into it and create subfolders, and anything you add to the folder later appears for them automatically. Files they create are theirs to rename, move or delete for ten minutes; after that they're fixed. Your own files there are read-only to them throughout.",
        "A file share is read-only and doesn't reveal the folder around it. Individually shared files are gathered in the portal under a “Shared files” list rather than shown in place.",
        "Uploads need at least one shared folder. Share only files and your client has nowhere to write.",
        "Shares can't overlap: not a file inside a shared folder, nor a folder containing a share — “That item overlaps something already shared with this Client.” Sharing a folder is the deliberate way to expose everything under it, and while you're browsing inside one the “Share” action disappears.",
      ],
    },
    {
      type: "callout",
      title: "Nothing is copied, and nothing moves",
      text: "A Share is a marker over a file that stays where you filed it. There's no portal folder in your Drive, no second copy to keep in step, no export. Two guards run on every portal request: a share must sit inside that one client's storage folder, and the server re-checks the caller's shares before reading or writing anything.",
    },
    {
      type: "p",
      text: "Two prompts appear if you share too early. With the portal off: “Enable the Client Portal first.” With the client never opened in Documents, or storage not connected: “Open this Client's Documents and connect Drive before sharing.”",
    },
    { type: "h2", text: "Switching access off: disable versus remove" },
    {
      type: "table",
      head: ["Action", "What happens", "What's kept"],
      rows: [
        [
          "“Disable client portal”",
          "Nobody can sign in to this client's portal; immediate, with no confirmation step",
          "Every share, contact and file — re-enabling restores the lot and invites nobody again",
        ],
        [
          "“Disable” one contact",
          "That person loses access to this client only; their other portals are untouched",
          "Their roster row, so “Enable” restores them with no new invite",
        ],
        [
          "“Remove” one contact",
          "The row is dropped, after a confirmation naming the address",
          "Their files; restoring access means inviting them afresh",
        ],
      ],
      caption:
        "All three are non-destructive in your storage: a client's uploads are never auto-deleted.",
    },
    {
      type: "image",
      src: "/images/guides/set-up-client-portal/08-remove-contact-confirm.png",
      alt: "XTK's Remove contact confirmation asking to remove a portal contact who will lose access to everything shared with the client portal",
      caption:
        "Remove asks first, and names the address. Disable doesn't — it's instantly reversible.",
      width: 640,
      height: 300,
    },
    { type: "h2", text: "What XTK tells you about portal activity" },
    {
      type: "p",
      text: [
        { text: "Two notification types", href: "/guides/notifications" },
        " feed the XTK bell, both on by default under “Portal activity”: “A client accepts an invite” and “A client uploads or creates files”. The second rolls up per person per hour, so five documents in one sitting make one line — “Sophie Baxter added 5 files”. Clicking either marks it read and, for now, does nothing else, so open the client yourself.",
      ],
    },
    { type: "h2", text: "Tips from practice" },
    {
      type: "list",
      items: [
        "Check the client's primary email in XPM before enabling. That one field decides who gets an unannounced invitation.",
        "Share one read-write folder per client and work inside it: they get somewhere to upload, and you avoid re-sharing every new document. Keep file shares for one-off, look-don't-touch documents.",
        "Name that folder for the client, not for you — its name is all they see, so “Send us these” beats “FY25 — Tax (client provided)”.",
      ],
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: [
        "Write your invite wording once as ",
        { text: "an email template", href: "/guides/email-templates" },
        ", so every invitation reads the same and always carries the link. If you'd rather ask for records than open a permanent portal, ",
        { text: "a document request", href: "/guides/document-requests" },
        " does the one-off job with no account at all. And when your client asks what to do with the email, ",
        { text: "the client-facing guide", href: "/guides/client-portal-guide-for-clients" },
        " is written for them — send it on.",
      ],
    },
  ],
};
