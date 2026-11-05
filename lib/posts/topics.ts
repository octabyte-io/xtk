import type { PostTopic } from "./types";

/**
 * The blog's topic clusters. One pillar per topic: a broad article that
 * answers the head term and links down to every post in the topic, while every
 * post in the topic links back up to it (rendered by app/blog/[slug]). This is
 * what tells a search engine which page owns the head term, so two posts in the
 * same topic never compete for it.
 */
export const topics: Record<
  PostTopic,
  { name: string; pillarSlug: string; blurb: string }
> = {
  "document-management": {
    name: "Document management for Xero practices",
    pillarSlug: "xero-practice-manager-document-management",
    blurb:
      "Where client files live, how they are organised and named, and what happens to them when tools, records or clients change.",
  },
  "e-signatures": {
    name: "E-signatures for accounting practices",
    pillarSlug: "e-signatures-inside-xpm",
    blurb:
      "Sending documents for signature, fixing what goes wrong after you send, and keeping a record of what was signed.",
  },
  "client-documents": {
    name: "Collecting documents from clients",
    pillarSlug: "stop-chasing-clients-for-documents",
    blurb:
      "Onboarding, requesting, receiving and sending client documents without the chasing.",
  },
};
