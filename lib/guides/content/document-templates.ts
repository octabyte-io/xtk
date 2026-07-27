import type { Guide } from "../types";

export const guide: Guide = {
  slug: "document-templates",
  title: "Document templates in Xero Practice Manager",
  description:
    "Upload a Word template with [CLIENT:NAME]-style placeholders and XTK generates client letters inside Xero Practice Manager, filled from live client details.",
  series: "Documents",
  order: 7,
  date: "2026-07-28",
  updated: "2026-07-28",
  readingTime: "6 min read",
  ogImage: "/images/guides/document-templates/og.png",
  thumbnail: {
    src: "/images/guides/document-templates/thumb.png",
    alt: "XTK's File from template dialog in Xero Practice Manager with every placeholder auto-filled from the client's details",
  },
  relatedSlugs: [
    "placeholder-reference",
    "folder-templates",
    "manage-client-documents",
    "bulk-file-actions",
  ],
  faq: [
    {
      q: "What happens to placeholders XTK can't fill in?",
      a: "Nothing breaks. Fields XTK can't resolve from the client's record are left blank in the fill dialog for you to type; anything still empty when you generate is stamped into the document as its literal token, like [CLIENT:MOBILE], so you can spot and fix it in Word. Generation is never blocked by missing data.",
    },
    {
      q: "Who can manage document templates?",
      a: "Everyone. The template library is shared across your practice and any team member can add, edit, replace or delete templates — none of it is Admin-only. That also means a deleted template is gone for the whole practice, so agree changes with your team first.",
    },
    {
      q: "What file types can I upload as templates?",
      a: "Word .docx files only, up to 25 MB each. Legacy .doc files aren't accepted — open them in Word and save as .docx first. PDFs can't be templates because generated text can't be stamped into them.",
    },
    {
      q: "Where are my templates actually stored?",
      a: "In an “XTK – Templates” folder that XTK creates inside your practice's main storage folder in Google Drive, OneDrive or SharePoint the first time anyone adds a template. Like everything XTK touches, the files stay in your practice's own storage.",
    },
    {
      q: "If I update a template, do previously generated letters change?",
      a: "No. Generating a letter creates a stand-alone .docx in the client's folder with the values stamped in — it keeps no link back to the template. Use “Replace” in the template's row menu to swap in a new version for future letters; everything already generated is untouched.",
    },
    {
      q: "Does generating a document change my client's details in XPM?",
      a: "No. XTK only reads the client's details from the page you have open, and only to pre-fill the dialog. Nothing is written back to Xero Practice Manager, and the values you confirm are used once to stamp the document.",
    },
  ],
  body: [
    {
      type: "p",
      text: "A document template is an ordinary Word file with placeholders like [CLIENT:NAME] where the client-specific details go. Upload it to XTK once, and any team member can generate a finished letter for any client from inside Xero Practice Manager (XPM) — XTK fills the placeholders from the client's own details, you review the values, and the completed .docx lands straight in the client's folder. Engagement letters, fee reviews, ethical letters: write them once, reuse them forever.",
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: "Your practice's document storage must be connected (see “Connect Google Drive, OneDrive or SharePoint to XTK”). Everything in this guide works for every team member — managing templates and generating documents are not Admin-only.",
    },
    { type: "h2", text: "How document templates work" },
    {
      type: "p",
      text: "The template library is shared by your whole practice and lives in the XTK panel, under the “Document Templates” tab. Behind the scenes the files sit in an “XTK – Templates” folder inside your practice's main storage folder — XTK creates it automatically the first time anyone adds a template, and like every file XTK handles, templates never leave your practice's own storage.",
    },
    {
      type: "p",
      text: "Generating is the other half: in a client's Documents tab, “Create ▾ → File from template” picks a template, fills its placeholders from the client's live details, and files the finished document wherever you choose in that client's folder.",
    },
    { type: "h2", text: "Write the template in Word" },
    {
      type: "p",
      text: "Author the template like any normal document, typing a placeholder wherever a client-specific value belongs. A placeholder is square brackets around a NAMESPACE:FIELD name — some of the most used:",
    },
    {
      type: "list",
      items: [
        "[CLIENT:NAME] — the client's name as it appears in Practice Manager",
        "[CLIENT:EMAIL] — the client's primary email address",
        "[CONTACT:PRIMARY:NAME] — the primary contact person's name",
        "[CLIENT:STREET:ADDRESS], [CLIENT:STREET:CITY], [CLIENT:STREET:POSTCODE] — the street address, piece by piece",
        "[DATE:d MMMM yyyy] — today's date, formatted (e.g. 28 July 2026)",
        "[CLIENT:TAXNUMBER:LAST4] — just the last four digits of the tax number",
        "[CUSTOM:GST_PERIOD] — any custom field your practice has defined in XPM",
      ],
    },
    {
      type: "p",
      text: "The full grammar goes further — conditional [IF …]…[ENDIF] blocks that keep or drop whole passages, date formats, contact and phone variants. The complete list lives in the placeholder reference guide (linked below), and inside XTK itself: the “Available placeholders” button at the top of the Document Templates tab opens a searchable catalogue of every token.",
    },
    { type: "h3", text: "Example: a paragraph that only appears for some clients" },
    {
      type: "p",
      text: "Wrap any passage between [IF …] and [ENDIF] and it's kept or dropped per client when the document is generated. Say your engagement letter has a GST paragraph that only applies to Australian clients:",
    },
    {
      type: "quote",
      text: "[IF CLIENT:STREET:COUNTRYCODE = \"AU\"]As an Australian entity, your activity statements will be prepared and lodged each quarter for the [CUSTOM:GST_PERIOD] period.[ENDIF]",
    },
    {
      type: "p",
      text: "Generate the letter for a client whose street-address country code is AU and the sentence appears (with the GST period filled in); for anyone else the whole passage — markers included — vanishes. The comparison ignores case and surrounding spaces, and the value being tested shows up as an ordinary field in the fill dialog, so you can see and correct what the condition will act on before creating the document.",
    },
    {
      type: "p",
      text: "Conditions come in three shapes, and that's the whole grammar — there is no AND/OR and no [ELSE] (for either/or text, use two blocks back to back, one with = and one with !=). Blocks can nest inside each other:",
    },
    {
      type: "list",
      items: [
        "[IF CLIENT:MOBILE] … [ENDIF] — keeps the passage when the field has any value at all",
        "[IF CLIENT:STREET:COUNTRYCODE = \"AU\"] … [ENDIF] — keeps it when the value matches",
        "[IF CLIENT:STREET:COUNTRYCODE != \"AU\"] … [ENDIF] — keeps it when the value differs (including when it's empty)",
      ],
    },
    {
      type: "callout",
      title: "You can't get a placeholder “wrong”",
      text: "Anything XTK doesn't recognise — a typo, or plain square-bracketed prose — is simply left as literal text in the generated document. Templates never fail to generate because of an unknown token.",
    },
    { type: "h2", text: "Add the template to XTK" },
    {
      type: "steps",
      steps: [
        {
          title: "Open the Document Templates tab",
          text: "In XPM, click “XTK” in the main navigation to open the panel, then choose the “Document Templates” tab.",
        },
        {
          title: "Click “Create template”",
          text: "Give the template a name your team will recognise, add an optional one-line description, and click “Attach files” to pick your .docx (up to 25 MB — Word .docx only, not legacy .doc).",
          image: {
            src: "/images/guides/document-templates/02-create-template-dialog.png",
            alt: "XTK's Create template dialog with a template name, short description and an attached Word .docx ready to upload",
            width: 1440,
            height: 757,
          },
        },
        {
          title: "Click “Create template” to save",
          text: "The template appears in the practice-shared list, ready for anyone on your team to use.",
          image: {
            src: "/images/guides/document-templates/01-document-templates-tab.png",
            alt: "The Document Templates tab in the XTK panel for Xero Practice Manager listing two shared document templates with a filter box and Create template button",
            width: 1440,
            height: 757,
          },
        },
      ],
    },
    {
      type: "p",
      text: "Each row's ⋮ menu manages the template: “Edit details” renames it or changes the description (clicking the row does the same), “Replace” swaps in a new .docx while keeping the name, and “Delete” removes it for the whole practice after a confirmation.",
    },
    {
      type: "image",
      src: "/images/guides/document-templates/03-template-row-menu.png",
      alt: "A document template's row menu in XTK showing Edit details, Replace and Delete actions",
      caption: "Rename, swap the file, or remove a template from its row menu.",
      width: 1440,
      height: 757,
    },
    { type: "h2", text: "How do I generate a letter for a client?" },
    {
      type: "steps",
      steps: [
        {
          title: "Open the client's Documents tab",
          text: "Find the client in XPM and open the Documents tab. If you want the letter in a particular subfolder, browse there first — the destination defaults to the folder you're viewing.",
        },
        {
          title: "Click “Create ▾ → File from template”",
          text: "The template picker opens with your practice's shared library.",
          image: {
            src: "/images/guides/document-templates/04-create-file-from-template.png",
            alt: "The Create menu in XTK's Documents tab in Xero Practice Manager with File from template highlighted",
            width: 1440,
            height: 757,
          },
        },
        {
          title: "Pick the template",
          text: "Filter by name if the list is long, then click “Use template” on the one you want.",
          image: {
            src: "/images/guides/document-templates/05-pick-template.png",
            alt: "XTK's File from template dialog listing the practice's shared document templates with Use template buttons",
            width: 1440,
            height: 757,
          },
        },
        {
          title: "Review the placeholder values",
          text: "XTK lists every placeholder the template uses, pre-filled from the client's details wherever it can — name, email, address, dates. Every value stays editable, and anything XTK couldn't resolve is left blank for you to type. A line under the fields tells you how many are still empty.",
          image: {
            src: "/images/guides/document-templates/06-fill-placeholders.png",
            alt: "The placeholder fill step in XTK for Xero Practice Manager with client name, address, contact and date fields auto-filled and All fields filled shown underneath",
            width: 1440,
            height: 757,
          },
        },
        {
          title: "Name the output and choose its folder",
          text: "Click “Next”, name the document (the .docx extension is added for you), and check the destination — “Change” opens a folder picker limited to this client's own folder.",
          image: {
            src: "/images/guides/document-templates/07-name-and-destination.png",
            alt: "The naming step in XTK's File from template dialog with an output name and a destination folder inside the client's storage",
            width: 1440,
            height: 757,
          },
        },
        {
          title: "Click “Create”",
          text: "XTK stamps your confirmed values into the template and files the finished .docx in the destination folder — the original template is untouched.",
          image: {
            src: "/images/guides/document-templates/08-generated-letter.png",
            alt: "A freshly generated engagement letter .docx sitting in the client's folder in XTK's Documents tab, modified just now",
            width: 1440,
            height: 757,
          },
        },
      ],
    },
    {
      type: "video",
      src: "/images/guides/document-templates/generate-letter.gif",
      alt: "Generating an engagement letter in XTK: choosing File from template in the Documents tab, picking the template, reviewing auto-filled placeholder values, naming the output and the finished letter appearing in the client's folder",
      caption:
        "Template to finished engagement letter in under a minute, without leaving Practice Manager.",
    },
    {
      type: "callout",
      title: "Where do the values come from?",
      text: "XTK reads the client's details live from the Practice Manager page you have open — nothing is fetched from Xero's servers behind your back, and nothing is written to XPM. The pre-fill is a starting point: what you see in the dialog is exactly what gets stamped into the document.",
    },
    { type: "h2", text: "Tips from practice" },
    {
      type: "list",
      items: [
        "Give templates names your team will scan for — “Engagement letter”, “Fee increase letter” — and use the description for when to use it.",
        "Put [DATE:d MMMM yyyy] in the letterhead instead of typing dates; every generated letter is automatically dated the day it's created.",
        "Wrap jurisdiction- or entity-specific paragraphs in [IF …]…[ENDIF] blocks so one template serves your whole client base.",
        "Generated files are ordinary Word documents — need a PDF or a signature? Use “Convert to PDF” on the generated file's row menu, then “Send for signature”.",
      ],
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: "The placeholder reference lists every token the templates understand, with sample output for each. And if you find yourself creating the same folders for every client before filing letters into them, folder templates lay down a standard structure the same way — from the same Create menu.",
    },
  ],
};
