import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/site/nav";
import OptimizedImage from "@/components/optimized-image";
import Footer from "@/components/site/footer";
import CtaBand from "@/components/site/cta-band";
import Breadcrumbs from "@/components/site/breadcrumbs";
import GuideBody from "@/components/site/guide-body";
import GuideCard, { GuideMeta, SeriesChip } from "@/components/site/guide-card";
import RelatedReading from "@/components/site/related-reading";
import JsonLd from "@/components/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { assertContentLinks } from "@/lib/routes";
import { articleJsonLd, faqPageJsonLd, howToJsonLd } from "@/lib/structured-data";
import {
  getAdjacentGuides,
  getGuide,
  getRelatedGuides,
  getRelatedLinks,
  guides,
} from "@/lib/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  // Also called from app/sitemap.ts; this call site is what surfaces a broken
  // link in `next dev`, where the sitemap is only built on demand.
  assertContentLinks();
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  // Guide titles already carry their own keyword tail, so skip the "— XTK"
  // template rather than push them past ~60 characters.
  return pageMetadata({
    title: guide.title,
    absoluteTitle: true,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    image: guide.ogImage,
    type: "article",
    publishedTime: guide.date,
    modifiedTime: guide.updated,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const related = getRelatedGuides(slug);
  const relatedLinks = getRelatedLinks(slug);
  const { prev, next } = getAdjacentGuides(slug);

  return (
    <>
      <JsonLd data={articleJsonLd(guide)} />
      <JsonLd data={howToJsonLd(guide)} />
      <JsonLd data={faqPageJsonLd(guide.faq)} />
      <Nav active="/guides" />
      <main className="flex-1">
        <article>
          <header className="hero-wash">
            <div className="mx-auto w-full max-w-3xl px-5 pb-10 pt-14 sm:px-8 sm:pt-18">
              <div className="hero-rise flex flex-col gap-5">
                <Breadcrumbs
                  items={[
                    { name: "Home", path: "/" },
                    { name: "Guides", path: "/guides" },
                    { name: guide.title, path: `/guides/${guide.slug}` },
                  ]}
                />
                <div className="flex items-center gap-3">
                  <SeriesChip series={guide.series} />
                  <GuideMeta guide={guide} />
                </div>
                <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.15]">
                  {guide.title}
                </h1>
              </div>
            </div>
          </header>

          <div className="mx-auto w-full max-w-3xl px-5 pb-16 pt-2 sm:px-8">
            {guide.thumbnail && (
              <OptimizedImage
                src={guide.thumbnail.src}
                alt={guide.thumbnail.alt}
                width={1200}
                height={675}
                preload
                fetchPriority="high"
                className="mt-4 w-full rounded-2xl border border-line"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            )}
            <GuideBody body={guide.body} />

            {guide.faq.length > 0 && (
              <section aria-label="Frequently asked questions" className="mt-12">
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                  Frequently asked questions
                </h2>
                <div className="mt-6 space-y-3">
                  {guide.faq.map((f) => (
                    <details
                      key={f.q}
                      className="faq-item group rounded-2xl border border-line bg-surface px-6 py-5"
                    >
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
                    </details>
                  ))}
                </div>
              </section>
            )}

            {(prev || next) && (
              <nav
                aria-label="Guide series"
                className="mt-12 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:justify-between"
              >
                {prev ? (
                  <Link
                    href={`/guides/${prev.slug}`}
                    className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                  >
                    ← {prev.title}
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link
                    href={`/guides/${next.slug}`}
                    className="text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:text-right"
                  >
                    {next.title} →
                  </Link>
                )}
              </nav>
            )}
          </div>
        </article>

        <RelatedReading
          heading="Related guides"
          cards={related.map((g, i) => (
            <GuideCard key={g.slug} guide={g} delay={(i % 2) * 90} />
          ))}
          links={relatedLinks}
        />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
