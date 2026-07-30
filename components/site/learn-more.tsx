import Link from "next/link";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { getAllGuides } from "@/lib/guides";
import { getAllPosts } from "@/lib/posts";

/**
 * The home page's hand-off into the rest of the site. Until this existed, the
 * highest-authority page linked to nothing but its own #get-xtk anchor, and
 * /about was reachable only from the footer.
 *
 * Counts come from the stores so they can't drift as guides and posts are added.
 */
const destinations = [
  {
    href: "/guides",
    title: "User guides",
    body: (n: number) =>
      `${n} step-by-step walkthroughs, from installing the extension to what your clients see when they sign.`,
    cta: "Browse the guides",
  },
  {
    href: "/blog",
    title: "Blog",
    body: (n: number) =>
      `${n} posts on product news and how practices are running documents, signatures and portals day to day.`,
    cta: "Read the blog",
  },
  {
    href: "/about",
    title: "About XTK",
    body: () =>
      "Who builds XTK, why it lives inside Practice Manager, and how we think about your practice's data.",
    cta: "About us",
  },
];

export default function LearnMore() {
  const counts: Record<string, number> = {
    "/guides": getAllGuides().length,
    "/blog": getAllPosts().length,
  };

  return (
    <section className="border-t border-line bg-surface/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Learn more"
          title="Everything else worth reading"
          lede="Set-up walkthroughs, the thinking behind the product, and the people building it."
        />
        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.href} delay={i * 120}>
              <Link
                href={d.href}
                className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-[0_24px_48px_-32px_rgba(13,34,66,0.35)]"
              >
                <h3 className="font-display text-lg font-bold text-ink">
                  {d.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {d.body(counts[d.href])}
                </p>
                <span className="mt-auto text-sm font-medium text-accent-deep">
                  {d.cta} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
