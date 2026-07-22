import type { ReactNode } from "react";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import CtaBand from "@/components/site/cta-band";

/**
 * Shared chrome for policy / content pages: hero header, a review banner while
 * the copy is still a draft, the prose body, and the standard CTA + footer.
 */
export default function LegalLayout({
  eyebrow,
  title,
  lede,
  updated,
  activeNav,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  /** e.g. "22 July 2026" — omit for evergreen pages like Support / About. */
  updated?: string;
  /** Highlights a nav item, matching the blog pages' `active` prop. */
  activeNav?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav active={activeNav} />
      <main className="flex-1">
        <header className="hero-wash">
          <div className="mx-auto w-full max-w-3xl px-5 pb-10 pt-14 sm:px-8 sm:pt-18">
            <div className="hero-rise flex flex-col gap-4">
              <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-3.5 py-1 text-sm font-medium text-accent-deep">
                {eyebrow}
              </span>
              <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.15]">
                {title}
              </h1>
              {lede && (
                <p className="text-lg leading-relaxed text-ink-soft">{lede}</p>
              )}
              {updated && (
                <p className="text-sm text-ink-soft">
                  Last updated: <span className="font-medium text-ink">{updated}</span>
                </p>
              )}
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-3xl px-5 pb-16 pt-2 sm:px-8">
          {children}
        </div>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
