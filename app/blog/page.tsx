import type { Metadata } from "next";
import Link from "next/link";
import OptimizedImage from "@/components/optimized-image";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import CtaBand from "@/components/site/cta-band";
import Reveal from "@/components/site/reveal";
import Breadcrumbs from "@/components/site/breadcrumbs";
import PostCard, { CategoryChip, PostMeta } from "@/components/site/post-card";
import { A } from "@/components/site/prose-link";
import { getAllPosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Product news, guides and practice tips from XTK — the toolkit that adds documents, e-signatures, client portals and templates to Xero Practice Manager.",
  path: "/blog",
});

export default function BlogIndex() {
  const all = getAllPosts();
  const featured = all.find((p) => p.featured) ?? all[0];
  const rest = all.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <Nav active="/blog" />
      <main className="flex-1">
        <section className="hero-wash">
          <div className="mx-auto w-full max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pt-20">
            <div className="hero-rise flex max-w-2xl flex-col gap-4">
              <Breadcrumbs
                items={[
                  { name: "Home", path: "/" },
                  { name: "Blog", path: "/blog" },
                ]}
              />
              <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-3.5 py-1 text-sm font-medium text-accent-deep">
                Blog
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Notes from the toolkit
              </h1>
              <p className="text-lg leading-relaxed text-ink-soft">
                Product news, guides and practice tips for teams running on
                Xero Practice Manager. For step-by-step instructions, see the{" "}
                <A href="/guides">user guides</A>.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-24">
          <Reveal>
            <article className="overflow-hidden rounded-3xl border border-line bg-surface transition-shadow hover:shadow-[0_32px_64px_-40px_rgba(13,34,66,0.4)]">
              <Link
                href={`/blog/${featured.slug}`}
                className="flex flex-col sm:flex-row sm:items-stretch"
              >
                {featured.thumbnail && (
                  // Half-width keeps the 16:9 cover almost exactly as tall as
                  // the text column, so it centres on paper — which the cover's
                  // own background blends into — rather than cropping.
                  <div className="flex items-center border-b border-line bg-paper sm:w-1/2 sm:shrink-0 sm:border-b-0 sm:border-r">
                    <OptimizedImage
                      src={featured.thumbnail.src}
                      alt={featured.thumbnail.alt}
                      width={1200}
                      height={675}
                      preload
                      className="w-full"
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-4 p-7 sm:flex-1 sm:p-10">
                  <div className="flex items-center gap-3">
                    <CategoryChip category={featured.category} />
                    <PostMeta post={featured} />
                  </div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-ink-soft">
                    {featured.excerpt}
                  </p>
                  <span className="text-sm font-medium text-accent-deep">
                    Read post →
                  </span>
                </div>
              </Link>
            </article>
          </Reveal>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.map((post, i) => (
              <PostCard key={post.slug} post={post} delay={(i % 2) * 90} />
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
