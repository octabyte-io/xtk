import type { ReactNode } from "react";
import Reveal from "./reveal";

export default function FeatureCard({
  title,
  body,
  mock,
  className = "",
  delay = 0,
}: {
  title: string;
  body: string;
  mock: ReactNode;
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
        </div>
      </article>
    </Reveal>
  );
}
