import type { Guide } from "../types";

export const guide: Guide = {
  slug: "email-templates",
  title: "Email templates: write once, reuse for invites and requests",
  description:
    "Write reusable email templates once in XTK and pick one when you send a client portal invite or document request from Xero Practice Manager — no retyping.",
  series: "Documents",
  order: 10,
  date: "2026-07-28",
  updated: "2026-07-28",
  readingTime: "8 min read",
  ogImage: "/images/guides/email-templates/og.png",
  thumbnail: {
    src: "/images/guides/email-templates/thumb.png",
    alt: "XTK's email template editor in Xero Practice Manager with a subject, markdown body and the portal_invite_url template variable autocomplete open",
  },
  relatedSlugs: [
    "document-requests",
    "set-up-client-portal",
    "connect-your-email",
    "document-templates",
  ],
  faq: [
    {
      q: "Who can create and edit email templates?",
      a: "Everyone on your team. Email templates are shared across the whole practice — any member or admin can create, edit and delete them, and everyone picks from the same list. There is no Admin-only gate. The one restriction is billing: while your practice is read-only, “Create template”, “Edit” and “Delete” are greyed out with a tooltip explaining why, though reading and previewing existing templates still works.",
    },
    {
      q: "What template variables does XTK support?",
      a: "Exactly two: {{portal_invite_url}}, which becomes the client's personal client portal invite link, and {{document_request_url}}, which becomes the secure upload link for a document request. The catalogue is defined in XTK's code and can't be extended, so there are no client-name or date variables yet — type those into the compose box before you send instead.",
    },
    {
      q: "Can I use one template for both portal invites and document requests?",
      a: "You can pick any template on either surface, but the two links are different variables, so a template written around {{portal_invite_url}} only makes sense as an invite and one written around {{document_request_url}} only as a request. Keep one template per purpose and name them so your team can tell them apart at a glance.",
    },
    {
      q: "Does the preview show exactly what my client receives?",
      a: "Yes, structurally. The preview asks XTK's server to render your unsaved subject and body through the very same branded email layout the real send uses, so wording, formatting and header cannot drift from the sent message. The only difference is the links: the preview substitutes obvious sample URLs, because there's no real invite or request to point at yet.",
    },
    {
      q: "What happens if I delete a template we've been using?",
      a: "Emails already sent are untouched — the wording was copied into each message when it went out, and nothing points back at the template afterwards, so no client's link stops working. Deleting only removes it from the picker for future sends, for the whole practice, and it can't be undone. One caution: portal invites always send from a template, so don't delete your last one.",
    },
  ],
  body: [
    {
      type: "p",
      text: "An email template in XTK is a saved draft — a name, a subject and a markdown body — that your whole practice shares. Write your portal invite or records-request wording once and it's there in a dropdown every time anyone on your team emails a client from Xero Practice Manager (XPM). Drop in a template variable like {{portal_invite_url}} and XTK fills the client's own secure link in at send time.",
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: "Nothing has to be set up first, and every team member can manage templates — this isn't Admin-only. To send with one you'll want a mailbox connected (see “Connect Gmail or Outlook so XTK can send email for you”); without one your mail still goes out, just from XTK's shared address.",
    },
    { type: "h2", text: "Where do email templates get used?" },
    {
      type: "list",
      items: [
        "Client portal invites — the email that gives a client access to their portal. These always send from a template.",
        "Document requests — the checklist link a client uses to upload records. Here a template is optional; XTK has sensible default wording.",
      ],
    },
    {
      type: "p",
      text: "That's the full list today. E-signature emails are composed on the signing page and offer no template picker, and system mail like verification or team invites uses XTK's own fixed wording.",
    },
    {
      type: "p",
      text: "Templates live in the XTK panel under the “Email Templates” tab — the same tab as the “Send my mail from” section. Every practice starts with one ready-made template called “Portal invite”, so invites work on day one.",
    },
    {
      type: "image",
      src: "/images/guides/email-templates/01-email-templates-tab.png",
      alt: "The Email Templates tab in XTK's panel inside Xero Practice Manager, listing the practice's shared email templates with a filter box and a Create template button",
      caption:
        "The shared library. Each row shows the template's name over its subject line.",
      width: 1489,
      height: 812,
    },
    { type: "h2", text: "How do I create an email template?" },
    {
      type: "steps",
      steps: [
        {
          title: "Open the Email Templates tab",
          text: "In Practice Manager, click “XTK” in the main navigation to open the panel, then choose the “Email Templates” tab.",
        },
        {
          title: "Click “Create template”",
          text: "It sits beside the “Filter templates by name” box. The list is replaced by the editor, headed “New template”.",
        },
        {
          title: "Name it for your team",
          text: "The “Name” field is the only required one, and it's what everyone sees in the dropdown later — “Portal invite”, “Records request — year end”. Clients never see it.",
          image: {
            src: "/images/guides/email-templates/02-new-template-editor.png",
            alt: "XTK's new email template editor in Xero Practice Manager with a name, an email subject and a markdown body, plus Create template, Preview and Insert placeholder buttons",
            width: 1489,
            height: 812,
          },
        },
        {
          title: "Write the subject and body",
          text: "Type the subject into the top field and your message into the larger “Body (markdown)” field underneath. Both accept template variables.",
        },
        {
          title: "Click “Create template” to save",
          text: "You're returned to the list and the template is immediately available to everyone in your practice — a line under the editor says exactly that.",
        },
      ],
    },
    {
      type: "video",
      src: "/images/guides/email-templates/write-email-template.gif",
      alt: "Creating an email template in XTK: opening the Email Templates tab, clicking Create template, typing a subject and body, completing the portal_invite_url template variable from the autocomplete list, previewing the branded email and saving",
      caption:
        "Name, subject, body, a variable and a preview — a reusable template in under a minute.",
    },
    { type: "h2", text: "Template variables: the links XTK fills in" },
    {
      type: "p",
      text: "A template variable is a {{name}} placeholder XTK swaps for a real value when the email is sent. There are exactly two, both links, and the catalogue is fixed — you can reference them, but you can't invent new ones:",
    },
    {
      type: "table",
      head: ["Template Variable", "What it becomes", "Used when you send"],
      rows: [
        [
          "{{portal_invite_url}}",
          "That contact's personal, single-use portal invite link",
          "A client portal invite",
        ],
        [
          "{{document_request_url}}",
          "The secure upload link for that particular request",
          "A document request",
        ],
      ],
      codeColumns: [0],
      caption:
        "The complete list — XTK recognises these two Template Variables and nothing else.",
    },
    {
      type: "p",
      text: "Two ways to get one into your text. Type two opening braces anywhere in the subject or body and a list of matching variables appears under the field; click one and XTK completes the token, closing braces included. Or click “Insert placeholder ▾” in the editor's footer and pick from the menu, which lists the same two under friendly names.",
    },
    {
      type: "image",
      src: "/images/guides/email-templates/03-variable-autocomplete.png",
      alt: "Typing two braces in XTK's email template body opens the template variable autocomplete listing portal_invite_url and document_request_url",
      caption:
        "Type “{{” and the known template variables appear. Click one to complete the token.",
      width: 1489,
      height: 812,
    },
    {
      type: "image",
      src: "/images/guides/email-templates/04-insert-placeholder-menu.png",
      alt: "The Insert placeholder dropdown open in XTK's email template editor showing Portal Invite Url and Document Request Url",
      caption: "The same two variables from a menu, if you'd rather not type.",
      width: 1489,
      height: 812,
    },
    {
      type: "callout",
      title: "A portal invite needs its link variable",
      text: "Email is the only way to deliver a portal invite — there's no copy-a-link fallback — and the link reaches the client only through {{portal_invite_url}}. An invite template without it sends an email with no way in, so always keep the variable in the body. Document requests are more forgiving: if your wording doesn't mention {{document_request_url}}, XTK appends the link at the end.",
    },
    {
      type: "p",
      text: "Mistype a variable and nothing breaks. XTK checks as you type and shows an amber line — “Unknown variable: {{client_name}}. You can still save — XTK won't be able to fill these.” Save anyway if you like; the text travels to the client exactly as written. It's a typo catcher, not a block.",
    },
    {
      type: "image",
      src: "/images/guides/email-templates/05-unknown-variable-warning.png",
      alt: "XTK's email template editor warning that a template variable is unknown and won't be filled, while still allowing the template to be saved",
      caption: "Unknown variables warn but never block.",
      width: 1489,
      height: 812,
    },
    { type: "h2", text: "What formatting can I use in the body?" },
    {
      type: "p",
      text: "The body is markdown, and XTK converts it to a tidy HTML email on the way out. A useful subset is supported:",
    },
    {
      type: "list",
      items: [
        "Paragraphs — a blank line starts a new one; a single line break stays a line break.",
        "Bold with two asterisks either side, italics with one.",
        "Bullet lists with “-” or “*” and numbered lists with “1.” — ideal for spelling out what you need from a client.",
        "Headings with one to three “#” characters, quotes with “>”, and a horizontal rule from three dashes.",
        "Links as square brackets around the text then the URL in round brackets, variables included: [Open your portal]({{portal_invite_url}}).",
      ],
    },
    {
      type: "p",
      text: "Anything else — images, tables, code blocks, raw HTML — appears as plain text. And a bare link pasted on its own line stays plain text rather than becoming clickable, so wrap links in the square-bracket form above.",
    },
    { type: "h2", text: "How do I preview the email?" },
    {
      type: "p",
      text: "Click “Preview” in the editor's footer at any point — you don't have to save first. XTK renders what's on screen through the same branded layout your clients receive, with the subject above it. That's not a lookalike: preview and send call the same renderer on the server, so what you see can't drift from what goes out.",
    },
    {
      type: "image",
      src: "/images/guides/email-templates/06-preview-dialog.png",
      alt: "XTK's Email preview dialog showing the subject line above the practice-branded email your client receives, rendered from the email template body",
      caption:
        "The preview renders through the real send layout — your practice name in the header, your markdown as the body.",
      width: 1489,
      height: 812,
    },
    {
      type: "p",
      text: "Links are the one exception. There's no real invite or request behind a preview, so variables are filled with obvious sample URLs and the dialog says so: links use sample values, and a real send fills them with the recipient's own links.",
    },
    { type: "h2", text: "The “Portal invite” starter template" },
    {
      type: "p",
      text: "Every practice is created with one template already in the list, named “Portal invite”, subject “You're invited to your client portal”. Its body is deliberately plain — five short lines:",
    },
    {
      type: "list",
      items: [
        "Hi,",
        "You've been invited to your secure client portal, where you can view and exchange documents with us.",
        "Click the link below to get started:",
        "{{portal_invite_url}}",
        "If you have any questions, just reply to this email.",
      ],
    },
    {
      type: "p",
      text: "It exists so nobody hits a dead end on their first invite, and it's an ordinary template otherwise — edit it to sound like your practice, rename it, or delete it once you've written your own. It is the one XTK pre-selects in the invite picker, so keeping the name is a small convenience.",
    },
    { type: "h2", text: "Picking a template when you send" },
    {
      type: "p",
      text: "For a client portal invite, open the client's “Client Portal” tab and start an invite for a contact. The compose box carries a “Template” dropdown; XTK pre-selects “Portal invite” and fills the subject and message from it. For a contact you're inviting for the first time, the message still shows the literal {{portal_invite_url}}, with a note underneath explaining that the personal invite link replaces it automatically when you send — the link only exists once the invite goes out. Re-inviting an existing contact resolves their real link into the text, so you can read the exact email before it goes. The recipient is locked to the contact's own address — subject, message and CC are yours to adjust.",
    },
    {
      type: "image",
      src: "/images/guides/email-templates/07-portal-invite-template-picker.png",
      alt: "The client portal invite compose box in XTK with the Template dropdown selecting a shared email template, and the portal_invite_url variable in the message body awaiting the personal link that is inserted on send",
      caption:
        "Portal invites always send from a template — the picker lists every one your practice has.",
      width: 1489,
      height: 812,
    },
    {
      type: "p",
      text: "For a document request, go to the client's Documents tab, choose “Create ▾ → Request documents”, and the final step has an “Email template” dropdown. This one starts on “No template (custom)” with XTK's own wording; choosing a template replaces the subject and body with yours.",
    },
    {
      type: "image",
      src: "/images/guides/email-templates/08-document-request-template-picker.png",
      alt: "The Email template dropdown on the compose step of XTK's Request documents wizard in Xero Practice Manager",
      caption:
        "Document requests default to XTK's wording; pick a template to use your own.",
      width: 1489,
      height: 812,
    },
    {
      type: "callout",
      title: "Picking a template overwrites what you've typed",
      text: "On both surfaces, selecting a template replaces whatever is in the subject and message boxes. Choose the template first, then personalise. Edits you make there affect that one email only — the template itself is unchanged.",
    },
    { type: "h2", text: "Editing and deleting templates" },
    {
      type: "p",
      text: "Click a row to reopen it in the editor — the heading becomes “Edit template” and the button “Save changes”. The three-dot menu at the right of each row does the same via “Edit”, and offers “Delete”. Newest templates sit at the top, and the box above filters by name as the list grows.",
    },
    {
      type: "image",
      src: "/images/guides/email-templates/09-template-row-menu.png",
      alt: "An email template's row menu in XTK's Email Templates tab showing the Edit and Delete actions",
      caption: "Edit or delete a template from its row menu.",
      width: 1489,
      height: 812,
    },
    {
      type: "p",
      text: "Deleting asks you to confirm — “Delete the … template? This can't be undone.” — and removes it for the whole practice. Emails already sent are unaffected: the wording was copied into each message when it left, so nothing changes retrospectively. What you lose is the entry in the picker. Because a portal invite can only be sent from a template, keep at least one invite template.",
    },
    { type: "h2", text: "Tips from practice" },
    {
      type: "list",
      items: [
        "Say the purpose in the name — “Portal invite”, “Records request — BAS”, “Records request — year end”.",
        "Use a bullet list for anything you're asking a client to do; it reads far better on a phone than a long paragraph.",
        "Agree changes with your team first: everyone sends from the same list, so your rewrite is theirs too.",
      ],
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: "Templates earn their keep on the two client-facing flows below: sending a document request to collect records, and setting up a client portal. And if you haven't connected a mailbox yet, do that first so your templates go out under your own name.",
    },
  ],
};
