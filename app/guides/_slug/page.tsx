/**
 * Guide detail page — currently parked in a private `_slug` folder because
 * `output: export` refuses to build a dynamic route whose
 * generateStaticParams() returns zero params, and no guides exist yet.
 *
 * FIRST ARTICLE SESSION: rename this folder to `[slug]`
 * (git mv app/guides/_slug "app/guides/[slug]") and delete this comment.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import CtaBand from "@/components/site/cta-band";
import GuideBody from "@/components/site/guide-body";
import GuideCard, { GuideMeta, SeriesChip } from "@/components/site/guide-card";
import JsonLd from "@/components/json-ld";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  howToJsonLd,
} from "@/lib/structured-data";
import {
  getAdjacentGuides,
  getGuide,
  getRelatedGuides,
  guides,
} from "@/lib/guides";

export const dynamicParams = false;

export function generateStaticParams() {
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
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.date,
      modifiedTime: guide.updated,
      ...(guide.ogImage && {
        images: [{ url: guide.ogImage, width: 1200, height: 630 }],
      }),
    },
  };
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
  const { prev, next } = getAdjacentGuides(slug);

  return (
    <>
      <JsonLd data={articleJsonLd(guide)} />
      <JsonLd data={howToJsonLd(guide)} />
      <JsonLd data={faqPageJsonLd(guide.faq)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ])}
      />
      <Nav active="/guides" />
      <main className="flex-1">
        <article>
          <header className="hero-wash">
            <div className="mx-auto w-full max-w-3xl px-5 pb-10 pt-14 sm:px-8 sm:pt-18">
              <div className="hero-rise flex flex-col gap-5">
                <Link
                  href="/guides"
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  ← All guides
                </Link>
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

        {related.length > 0 && (
          <section
            aria-label="Related guides"
            className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8"
          >
            <div className="border-t border-line pt-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                Related guides
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {related.map((g, i) => (
                  <GuideCard key={g.slug} guide={g} delay={(i % 2) * 90} />
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
