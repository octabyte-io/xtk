import type { Metadata } from "next";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import ButtonLink from "@/components/site/button-link";
import { A } from "@/components/site/prose-link";

/**
 * The 404 page (out/404.html, which GitHub Pages serves for any unknown path).
 * Without this file Next's bare default rendered: no nav, no footer, and two
 * <title> tags. Next adds `noindex` to 404 responses itself; it is set here as
 * well because a static host is what decides the status code.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="hero-wash">
          <div className="mx-auto flex w-full max-w-2xl flex-col gap-5 px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
            <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-3.5 py-1 text-sm font-medium text-accent-deep">
              404
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              That page isn&apos;t here
            </h1>
            <p className="text-lg leading-relaxed text-ink-soft">
              The link may be old, or the address mistyped. The{" "}
              <A href="/guides">user guides</A>, the <A href="/blog">blog</A>{" "}
              and the <A href="/sitemap">sitemap</A> list everything on the
              site.
            </p>
            <ButtonLink href="/" className="w-fit">
              Back to the home page
            </ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
