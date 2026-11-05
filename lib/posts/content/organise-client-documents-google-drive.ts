import type { Post } from "../types";

export const post: Post = {
  slug: "organise-client-documents-google-drive",
  title: "A client folder structure for accountants that survives busy season",
  seoTitle: "Client folder structure for accountants, with an example",
  excerpt:
    "Client folders drift into chaos one “final_v2” at a time. A structure that survives busy season is predictable, shallow and automatic: one folder per client named as in Practice Manager, a few evergreen folders, a folder per year, and no Misc.",
  description:
    "A client folder structure for accountants that holds up: one folder per client, evergreen and year folders, an example layout, and what to leave out.",
  date: "2026-04-21",
  updated: "2026-11-05",
  readingTime: "9 min read",
  category: "Guides",
  topic: "document-management",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/organise-client-documents-google-drive/og.png",
  thumbnail: {
    src: "/images/blog/organise-client-documents-google-drive/thumb.png",
    alt: "“Two levels deep, then stop.” A folder tree drawn left to right on grid paper: the client folder Acme Trading Ltd branches to Engagement, Identity, Permanent, Correspondence and 2026, and 2026 branches to Records received, Workpapers and Final, under a dimension line marked “2 levels below the client”",
  },
  relatedSlugs: [
    "xero-practice-manager-document-management",
    "how-to-name-client-files",
    "xero-practice-manager-job-documents",
    "xero-practice-manager-google-shared-drive",
  ],
  relatedLinks: [
    { label: "Folder templates", href: "/guides/folder-templates" },
    { label: "Manage client documents", href: "/guides/manage-client-documents" },
    { label: "Connect Google Drive, OneDrive or SharePoint", href: "/guides/connect-document-storage" },
  ],
  body: [
    {
      type: "p",
      text: "A client folder structure that works for an accounting practice has four levels and no more: one top folder for the practice, one folder per client named exactly as the client is named in Xero Practice Manager (XPM), a small set of evergreen folders for records that outlive any one year, and one folder per year for everything tied to a period. Keep what the client gave you apart from what you produced, leave out Misc, and set the structure up the same way for every client, by template rather than by memory. It works the same in Google Drive, OneDrive or SharePoint.",
    },
    {
      type: "p",
      text: [
        "Nobody sets out to build a messy drive. It happens one shortcut at a time: a file saved to the root “just for now”, a client folder named three different ways by three different people, a year folder that quietly becomes two. This article is the layout, with an example and the reasons behind it. If you are still deciding what your documents should live in at all, ",
        {
          text: "document management in Xero Practice Manager",
          href: "/blog/xero-practice-manager-document-management",
        },
        " covers that question first.",
      ],
    },
    { type: "h2", text: "Three properties a structure needs" },
    {
      type: "p",
      text: "Having watched a lot of practices tidy up, we think a folder structure survives real workloads only if it has three properties.",
    },
    {
      type: "list",
      items: [
        "Predictable. Anyone can say where a file goes, and where to find it, without opening the folder first. That means the same names in the same places for every client.",
        "Shallow. Every level of nesting is a decision someone has to make while busy. Two levels below the client folder is almost always enough.",
        "Automatic. The structure is created by a template or a tool, not typed by whoever touches the client first. Filing shouldn't be a skill.",
      ],
    },
    {
      type: "p",
      text: "Everything below is one of those three properties applied to a specific level.",
    },
    { type: "h2", text: "An example client folder structure" },
    {
      type: "p",
      text: "Here is the layout for one client, a company with a June year end. Use it as a starting point and rename the folders to your own vocabulary; what matters is that the shape is the same for every client.",
    },
    {
      type: "table",
      head: ["Folder", "What goes in it"],
      rows: [
        ["Clients (one per practice)", "Every client folder, and nothing else"],
        ["Acme Trading Ltd", "One client, named exactly as in XPM"],
        ["Acme Trading Ltd / Engagement", "Engagement letters and their signed copies, fee agreements, disengagement letters"],
        ["Acme Trading Ltd / Identity", "Identity and due diligence evidence for the client and its people"],
        ["Acme Trading Ltd / Permanent", "Constitution, trust deed, incorporation papers, shareholder register, anything that is true until it changes"],
        ["Acme Trading Ltd / Correspondence", "Letters and saved emails that are not tied to one year's work"],
        ["Acme Trading Ltd / 2026 / Records received", "Bank statements, invoices, receipts and anything else the client sent for the year"],
        ["Acme Trading Ltd / 2026 / Workpapers", "What the practice produced to do the work"],
        ["Acme Trading Ltd / 2026 / Final", "Signed accounts, lodged returns, the documents the client keeps"],
      ],
      caption:
        "A worked example. Evergreen folders sit directly under the client; everything tied to a period sits under its year.",
    },
    {
      type: "p",
      text: "That is nine folders for a client with one year of history, and it grows by three folders a year. The rest of this article explains each level, and what to do when a client doesn't fit.",
    },
    { type: "h2", text: "The top level: one folder for the whole practice" },
    {
      type: "p",
      text: "Put every client folder inside a single parent folder. It gives a new starter one place to begin, it gives any tool one place to look, and it keeps client folders away from the practice's own files: the marketing material, the staff handbook, the board minutes. A client folder should never sit at the root of somebody's drive, and nothing that isn't a client should sit inside the parent.",
    },
    {
      type: "p",
      text: [
        "Which drive that parent folder lives in is a separate decision, and an important one, because files in one person's drive belong to that person. The short version is: a ",
        { text: "Google shared drive rather than anyone's My Drive", href: "/blog/xero-practice-manager-google-shared-drive" },
        ", or a ",
        { text: "SharePoint library rather than a OneDrive", href: "/blog/xero-practice-manager-sharepoint-onedrive" },
        ". Those two articles cover the reasons and the move.",
      ],
    },
    { type: "h2", text: "The client level: one folder per XPM client, named by the system" },
    {
      type: "p",
      text: "Each client folder should match one client record in XPM, with the same name, spelled the same way, with the same “Ltd” or “Pty Ltd”. That name is the only thing your practice software and your storage have in common. When “ACME Trading Ltd” also exists as “Acme” and “ACME (new)”, nobody knows which one is current, and no tool that matches folders by name can tell either.",
    },
    {
      type: "p",
      text: "A few rules keep that match intact:",
    },
    {
      type: "list",
      items: [
        "One folder per entity, not per family. A director, their company and their family trust are three XPM clients and three folders, side by side under the parent. Nesting the trust inside the director's folder hides it from anyone who looks for it by name, and breaks the one-record-one-folder match.",
        "Create the folder when the client is created, not when the first document arrives. Setting up the folder is a step of client onboarding, with a fixed place on the checklist.",
        "When a client is renamed in XPM, rename the folder the same day. Nothing renames it for you.",
        [
          "When one client turns out to have two XPM records, don't merge the records and forget the folders. ",
          { text: "Merge the folders first, then the records", href: "/blog/duplicate-client-records-and-their-documents" },
          ".",
        ],
      ],
    },
    {
      type: "p",
      text: [
        "The same idea applies one level down. Give every client in XPM a name no other client shares, because a folder can only be as distinct as the name it is given. ",
        { text: "How to name client files", href: "/blog/how-to-name-client-files" },
        " covers the rules for the files inside, which is where the rest of findability comes from.",
      ],
    },
    { type: "h2", text: "Evergreen folders: the records that outlive a year" },
    {
      type: "p",
      text: "Some documents are true across every year of a client relationship: the engagement letter, identity evidence, the trust deed, the company's constitution, the standing correspondence. If they live inside a year folder, the next person has to remember which year the deed was scanned in. Give them a small set of folders directly under the client, and keep the set small. Three or four is plenty: Engagement, Identity, Permanent and Correspondence cover most practices.",
    },
    {
      type: "p",
      text: "Engagement and Identity earn their own folders because they have their own rules. Engagement letters get superseded, and you need to be able to show which version a client agreed to and when. Identity evidence often has a retention period that runs from the end of the relationship rather than from the year the document is dated, so it shouldn't be swept away with an old year folder.",
    },
    { type: "h2", text: "Year folders: one per period, named by one rule" },
    {
      type: "p",
      text: "Everything tied to a period goes under that period's folder: the records the client sent, the workpapers, the accounts, the returns. A year folder is the simplest filing rule there is, and it is also a retention control, because an annual clear-out becomes a matter of looking at folder names.",
    },
    {
      type: "p",
      text: "The one decision to make, and write down, is what the number means. “2026” is a June year end in Australia, the year ended 31 December for a calendar-year company, and the end of the 2025–26 tax year for a UK individual. The rule most practices settle on is to name the folder for the year the period ends, so the accounts for the year to 30 June 2026 go in 2026. Whatever rule you choose, use it for every client, and put a prefix such as FY in front if your team finds the bare number ambiguous.",
    },
    {
      type: "p",
      text: [
        "Inside each year, keep the split between what the client gave you and what you produced. It costs one extra folder and pays back twice: when you review a year, and when a client leaves. The new accountant is owed the client's records, not your working papers, and ",
        { text: "handing files to the new accountant", href: "/blog/handing-client-files-to-new-accountant" },
        " is a copy-one-folder job when the two were never mixed.",
      ],
    },
    {
      type: "p",
      text: [
        "The year folder also makes ",
        { text: "how long you have to keep each file", href: "/blog/how-long-accountants-keep-client-records" },
        " legible years after everyone involved has left. A file dated by its folder can be reviewed and cleared on schedule; a file in a folder called “Old stuff” cannot.",
      ],
    },
    { type: "h2", text: "Where jobs and quotes fit" },
    {
      type: "p",
      text: [
        "Many practices file by XPM job and quote as well, so that each piece of work has a folder named after its job number. That layer sits beside the year folders, as a Jobs folder and a Quotes folder inside the client folder, rather than replacing the evergreen folders. The case for it, and the decisions it needs (what the folder is called, when it is created, what happens to folders already made by hand), are in ",
        { text: "filing by job and quote in XPM", href: "/blog/xero-practice-manager-job-documents" },
        ". If you don't file by job yet, the structure above stands on its own.",
      ],
    },
    { type: "h2", text: "What to leave out" },
    {
      type: "p",
      text: "Most of a good structure is the folders it refuses to have.",
    },
    {
      type: "list",
      items: [
        "No Misc, General or Other. A Misc folder is where structure goes to die: once it exists, every hard filing decision ends there.",
        "No folders named after people. “Sam's files” stops making sense the day Sam is on leave, and becomes a puzzle the day Sam leaves.",
        "No status folders. “To review”, “Waiting on client” and “Done” describe a job's state, which XPM already records. A file moved into “Done” has lost its place in the structure.",
        [
          "No version folders. “Old”, “Drafts” and “Superseded” are filenames doing the work of version history. Google Drive, OneDrive and SharePoint keep their own file history; a final document's name can say what it is, as ",
          { text: "the naming rules", href: "/blog/how-to-name-client-files" },
          " suggest.",
        ],
        "No depth for its own sake. If a folder holds one subfolder, remove a level. If you need a map to find the third level, there are too many.",
      ],
    },
    {
      type: "quote",
      text: "A tidy drive isn't a discipline problem. It's a tooling problem wearing a discipline costume.",
    },
    { type: "h2", text: "Make the structure automatic" },
    {
      type: "p",
      text: "A structure that depends on everyone remembering it will last until the first busy month. The fix is to create it the same way every time. In a bare drive, that means a written-down tree and one person who checks new clients against it. With a tool, it means the structure is applied rather than typed.",
    },
    {
      type: "p",
      text: [
        "In XTK, the client folder itself is handled for you: the first time anyone opens a client's Documents tab in Practice Manager, XTK adopts the existing folder with that client's XPM name inside your practice's top folder, or creates one if there isn't one. A ",
        { text: "folder template", href: "/guides/folder-templates" },
        " then lays down the rest of the tree in one go, with the year resolved for you (a folder named FY[DATE:yyyy] becomes FY2026), and applying it again only adds what is missing. The guide has the steps.",
      ],
    },
    {
      type: "p",
      text: [
        "Documents that arrive through XTK go to a chosen place inside the right client's folder, never another client's. ",
        { text: "A signed copy", href: "/guides/send-documents-for-signature" },
        " is saved beside the original by default. ",
        { text: "A document request", href: "/guides/document-requests" },
        " sends uploads, by default, to the folder you had open when you created it, renamed after the item you asked for. ",
        { text: "A generated letter", href: "/guides/document-templates" },
        " lands in the folder you are viewing. So the habit that keeps the structure intact is a small one: open the right folder before you start.",
      ],
    },
    {
      type: "callout",
      title: "Migrating an existing mess?",
      text: "Don't reorganise old files; freeze them. Rename each client's top folder to match its XPM name, so it is found and used, then create the clean structure inside it from today forward and move the old contents into one read-only Archive folder. Retro-filing five years of PDFs is a project that never finishes, and the old files are still searchable where they are.",
    },
    {
      type: "callout",
      title: "XTK and Xero",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
  ],
};
