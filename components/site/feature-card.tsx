import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./reveal";

export default function FeatureCard({
  title,
  body,
  mock,
  guide,
  className = "",
  delay = 0,
}: {
  title: string;
  body: string;
  mock: ReactNode;
  /**
   * The guide that covers this feature in full. The home page is the site's
   * highest-authority page and used to link nowhere but its own #get-xtk
   * anchor; this is how it hands readers (and crawlers) on to /guides.
   */
  guide?: { href: string; label?: string };
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal className={className} delay={delay}>
      <article className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-[0_24px_48px_-32px_rgba(13,34,66,0.35)]">
        <div className="flex-1">{mock}</div>
        <div>
          <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
            {body}
          </p>
          {guide && (
            <Link
              href={guide.href}
              className="mt-3 inline-block text-sm font-medium text-accent-deep transition-colors hover:text-accent"
            >
              {guide.label ?? "Read the guide"} →
            </Link>
          )}
        </div>
      </article>
    </Reveal>
  );
}
