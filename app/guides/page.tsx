import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import CtaBand from "@/components/site/cta-band";
import Reveal from "@/components/site/reveal";
import GuideCard from "@/components/site/guide-card";
import JsonLd from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { getGuidesBySeries } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "User guides",
  description:
    "Step-by-step guides to XTK: set up documents, e-signatures, client portals and templates inside Xero Practice Manager.",
  path: "/guides",
});

export default function GuidesIndex() {
  const groups = getGuidesBySeries();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <Nav active="/guides" />
      <main className="flex-1">
        <section className="hero-wash">
          <div className="mx-auto w-full max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pt-20">
            <div className="hero-rise flex max-w-2xl flex-col gap-4">
              <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-3.5 py-1 text-sm font-medium text-accent-deep">
                Guides
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Learn XTK, step by step
              </h1>
              <p className="text-lg leading-relaxed text-ink-soft">
                Practical walkthroughs for everything XTK adds to Xero Practice
                Manager — documents, e-signatures, client portals and templates.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-24">
          {groups.length === 0 ? (
            <Reveal>
              <div className="rounded-3xl border border-line bg-surface px-7 py-14 text-center sm:py-16">
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                  Guides are on their way
                </h2>
                <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-soft">
                  We’re writing them now. In the meantime, the{" "}
                  <Link href="/blog" className="font-medium text-accent-deep">
                    blog
                  </Link>{" "}
                  covers what XTK does and why.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="flex flex-col gap-14">
              {groups.map((group) => (
                <div key={group.series}>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                    {group.series}
                  </h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {group.guides.map((guide, i) => (
                      <GuideCard
                        key={guide.slug}
                        guide={guide}
                        delay={(i % 2) * 90}
                        showSeries={false}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
