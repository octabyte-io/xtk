import { getAllGuides, getGuidesBySeries } from "@/lib/guides";
import { getAllPosts } from "@/lib/posts";
import { company, pricing } from "@/lib/legal";
import { absoluteUrl } from "@/lib/structured-data";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text site map for AI assistants (llmstxt.org). Built
 * from the same content stores as the site, so new guides and posts appear
 * automatically at the next build.
 */
export function GET() {
  const guides = getAllGuides();
  const lines: string[] = [
    `# ${company.product}`,
    "",
    "> XTK is a browser extension (Chrome and Firefox) that adds document",
    "> management, e-signatures, client portals, document requests and template",
    "> automation to Xero Practice Manager (XPM), in a panel that opens inside",
    "> XPM itself. Files stay in the practice's own Google Drive, OneDrive or",
    `> SharePoint. One plan at ${pricing.amount} ${pricing.currency}/${pricing.interval} per practice with a`,
    `> ${pricing.trialDays}-day free trial. XTK is an independent product and is not`,
    "> affiliated with or endorsed by Xero Limited.",
    "",
    "## Site",
    "",
    `- [Home](${absoluteUrl("/")}): what XTK adds to Xero Practice Manager`,
    `- [Pricing](${absoluteUrl("/pricing")}): one plan, whole practice, ${pricing.trialDays}-day free trial`,
    `- [User guides](${absoluteUrl("/guides")}): index of every step-by-step guide`,
    `- [Blog](${absoluteUrl("/blog")}): product news and practice tips`,
    `- [About](${absoluteUrl("/about")}): who makes XTK`,
    `- [Support](${absoluteUrl("/support")}): how to get help (${company.supportEmail})`,
    `- [Sitemap](${absoluteUrl("/sitemap")}): every page on the site, grouped by section`,
  ];

  if (guides.length > 0) {
    lines.push("", "## User guides", "");
    for (const group of getGuidesBySeries()) {
      for (const guide of group.guides) {
        lines.push(
          `- [${guide.title}](${absoluteUrl(`/guides/${guide.slug}`)}): ${guide.description}`
        );
      }
    }
  }

  lines.push("", "## Blog", "");
  for (const post of getAllPosts()) {
    lines.push(
      `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`
    );
  }

  lines.push(
    "",
    "## Legal",
    "",
    `- [Privacy Policy](${absoluteUrl("/legal/privacy")})`,
    `- [Terms of Service](${absoluteUrl("/legal/terms")})`,
    `- [Data Processing Addendum](${absoluteUrl("/legal/dpa")})`,
    `- [Sub-processors](${absoluteUrl("/legal/subprocessors")})`,
    `- [Cookies & Tracking](${absoluteUrl("/legal/cookies")})`,
    `- [Refund & Cancellation Policy](${absoluteUrl("/legal/refunds")})`,
    `- [Your Data Rights & Deletion](${absoluteUrl("/legal/data-deletion")})`,
    ""
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
