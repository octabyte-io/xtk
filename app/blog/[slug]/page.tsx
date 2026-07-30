import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import OptimizedImage from "@/components/optimized-image";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import CtaBand from "@/components/site/cta-band";
import PostBody from "@/components/site/post-body";
import PostCard, { CategoryChip, PostMeta } from "@/components/site/post-card";
import JsonLd from "@/components/json-ld";
import { getPost, getRelatedPosts, posts } from "@/lib/posts";
import { pageMetadata } from "@/lib/metadata";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.title} — XTK Blog`,
    socialTitle: post.title,
    absoluteTitle: true,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.ogImage,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug);

  return (
    <>
      <JsonLd data={blogPostingJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <Nav active="/blog" />
      <main className="flex-1">
        <article>
          <header className="hero-wash">
            <div className="mx-auto w-full max-w-3xl px-5 pb-10 pt-14 sm:px-8 sm:pt-18">
              <div className="hero-rise flex flex-col gap-5">
                <Link
                  href="/blog"
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  ← All posts
                </Link>
                <div className="flex items-center gap-3">
                  <CategoryChip category={post.category} />
                  <PostMeta post={post} />
                </div>
                <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.15]">
                  {post.title}
                </h1>
                <p className="text-sm text-ink-soft">
                  By <span className="font-medium text-ink">{post.author.name}</span>
                  {" · "}
                  {post.author.role}
                </p>
                {post.thumbnail && (
                  <OptimizedImage
                    src={post.thumbnail.src}
                    alt={post.thumbnail.alt}
                    width={1200}
                    height={675}
                    preload
                    className="mt-4 w-full rounded-2xl border border-line"
                    sizes="(max-width: 768px) 100vw, 720px"
                  />
                )}
              </div>
            </div>
          </header>

          <div className="mx-auto w-full max-w-3xl px-5 pb-16 pt-2 sm:px-8">
            <PostBody body={post.body} />
          </div>
        </article>

        <section
          aria-label="More posts"
          className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8"
        >
          <div className="border-t border-line pt-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
              Keep reading
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((p, i) => (
                <PostCard key={p.slug} post={p} delay={(i % 2) * 90} />
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
