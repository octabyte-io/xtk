import Link from "next/link";
import Reveal from "./reveal";

/**
 * The `<details>` accordion shared by the home-page FAQ, every guide's FAQ and
 * /get-started. `q`/`a` are plain strings because the same objects feed
 * `faqPageJsonLd`; `more` is an optional follow-on link, ignored by the
 * structured data.
 */
export type FaqItem = {
  q: string;
  a: string;
  more?: { href: string; label: string };
};

export default function FaqAccordion({
  items,
  reveal = false,
}: {
  items: FaqItem[];
  /** Stagger the items in on scroll — the home page does, articles don't. */
  reveal?: boolean;
}) {
  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const item = (
          <details className="faq-item group rounded-2xl border border-line bg-surface px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink">
              {f.q}
              <span
                className="faq-icon flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-medium text-accent-deep"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-ink-soft">{f.a}</p>
            {f.more && (
              <Link
                href={f.more.href}
                className="mt-3 inline-block text-sm font-medium text-accent-deep transition-colors hover:text-accent"
              >
                {f.more.label} →
              </Link>
            )}
          </details>
        );

        return reveal ? (
          <Reveal key={f.q} delay={i * 60}>
            {item}
          </Reveal>
        ) : (
          <div key={f.q}>{item}</div>
        );
      })}
    </div>
  );
}
