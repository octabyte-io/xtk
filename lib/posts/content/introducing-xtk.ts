import type { Post } from "../types";

export const post: Post = {
  slug: "introducing-xtk",
  title: "Introducing XTK: the toolkit for Xero Practice Manager",
  description:
    "XTK is a browser extension that adds document management, e-signatures, client requests and templates to Xero Practice Manager, in a panel inside each client.",
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
      text: [
        "Every accounting practice we spoke to while building XTK told us a version of the same story. Xero Practice Manager runs the practice — jobs, time, WIP, invoicing — and then the actual work happens somewhere else entirely: ",
        { text: "documents in a Drive nobody tidies", href: "/blog/xero-practice-manager-document-management" },
        ", ",
        { text: "signatures in a separate e-sign tool", href: "/blog/e-signatures-inside-xpm" },
        ", ",
        { text: "client requests scattered across inboxes", href: "/blog/stop-chasing-clients-for-documents" },
        ".",
      ],
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
          { text: "your practice's own Google Drive, OneDrive or SharePoint", href: "/guides/connect-document-storage" },
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
        "We made one decision early that shaped everything else: XTK doesn't store your documents. Files live in your practice's own Google Drive, OneDrive or SharePoint, under your ownership, ",
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
        ", connect your storage, and open your first client. Every plan starts with a ",
        { text: "30-day free trial", href: "/pricing" },
        " for your whole practice — no credit card required. We'd love to hear what your team thinks.",
      ],
    },
  ],
};
