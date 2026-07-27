import Link from "next/link";
import type { Guide, GuideSeries } from "@/lib/guides";
import { formatGuideDate } from "@/lib/guides";
import Reveal from "./reveal";

const chipStyles: Record<GuideSeries, string> = {
  "Getting started": "bg-accent-soft text-accent-deep",
  Documents: "bg-mint-soft text-mint",
  "Client-facing": "bg-amber-soft text-amber",
  "Account & trust": "bg-pen-soft text-pen",
};

export function SeriesChip({ series }: { series: GuideSeries }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-0.5 text-xs font-semibold ${chipStyles[series]}`}
    >
      {series}
    </span>
  );
}

export function GuideMeta({ guide, className = "" }: { guide: Guide; className?: string }) {
  return (
    <p className={`text-sm text-ink-soft ${className}`}>
      Updated <time dateTime={guide.updated}>{formatGuideDate(guide.updated)}</time>
      <span aria-hidden="true"> · </span>
      {guide.readingTime}
    </p>
  );
}

export default function GuideCard({
  guide,
  delay = 0,
  showSeries = true,
}: {
  guide: Guide;
  delay?: number;
  showSeries?: boolean;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="h-full rounded-2xl border border-line bg-surface transition-shadow hover:shadow-[0_24px_48px_-32px_rgba(13,34,66,0.35)]">
        <Link href={`/guides/${guide.slug}`} className="flex h-full flex-col gap-3 p-6">
          <div className="flex items-center gap-3">
            {showSeries && <SeriesChip series={guide.series} />}
            <GuideMeta guide={guide} />
          </div>
          <h3 className="font-display text-xl font-bold tracking-tight text-ink">
            {guide.title}
          </h3>
          <p className="flex-1 text-[15px] leading-relaxed text-ink-soft">
            {guide.description}
          </p>
          <span className="text-sm font-medium text-accent-deep">
            Read guide →
          </span>
        </Link>
      </article>
    </Reveal>
  );
}
