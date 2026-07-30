import Link from "next/link";
import type { ReactNode } from "react";
import type { RelatedLink } from "@/lib/inline";

/**
 * The "Related reading" block under an article: a card grid of same-type
 * suggestions, then a row of links to anywhere else on the site.
 *
 * Shared by /guides/[slug] and /blog/[slug] — the guide page owned this markup
 * first, and the blog page grew the same needs once posts gained `relatedLinks`.
 * Renders nothing when there is nothing to show, so callers need no guard.
 */
export default function RelatedReading({
  heading,
  cards = [],
  links = [],
}: {
  heading: string;
  /** Rendered as a two-column grid. Already-keyed elements. */
  cards?: ReactNode[];
  links?: RelatedLink[];
}) {
  if (cards.length === 0 && links.length === 0) return null;
  return (
    <section
      aria-label="Related reading"
      className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8"
    >
      <div className="border-t border-line pt-10">
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
          {heading}
        </h2>
        {cards.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">{cards}</div>
        )}
        {links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-accent-deep underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
