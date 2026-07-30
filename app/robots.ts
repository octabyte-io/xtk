import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/structured-data";

export const dynamic = "force-static";

/**
 * AI crawlers, listed explicitly. `User-agent: *` already permits them, but
 * several operators treat a named rule as the deliberate opt-in, and an
 * explicit allow is what makes XTK eligible to be cited in AI answers.
 *
 * The list covers both kinds: assistants that fetch a page to answer a live
 * question (OAI-SearchBot, ChatGPT-User, Claude-User, PerplexityBot) and the
 * bulk crawlers that also build training corpora (GPTBot, ClaudeBot, CCBot,
 * Google-Extended, Applebot-Extended, meta-externalagent). Allowing the second
 * group is a deliberate choice — drop a token here to opt out of it.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
