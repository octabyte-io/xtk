import Link from "next/link";
import type { Post, PostCategory } from "@/lib/posts";
import { formatPostDate } from "@/lib/posts";
import Reveal from "./reveal";

const chipStyles: Record<PostCategory, string> = {
  Product: "bg-accent-soft text-accent-deep",
  Guides: "bg-mint-soft text-mint",
  "Practice tips": "bg-amber-soft text-amber",
  Company: "bg-pen-soft text-pen",
};

export function CategoryChip({ category }: { category: PostCategory }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-0.5 text-xs font-semibold ${chipStyles[category]}`}
    >
      {category}
    </span>
  );
}

export function PostMeta({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <p className={`text-sm text-ink-soft ${className}`}>
      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
      <span aria-hidden="true"> · </span>
      {post.readingTime}
    </p>
  );
}

export default function PostCard({ post, delay = 0 }: { post: Post; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="h-full rounded-2xl border border-line bg-surface transition-shadow hover:shadow-[0_24px_48px_-32px_rgba(13,34,66,0.35)]">
        <Link href={`/blog/${post.slug}`} className="flex h-full flex-col gap-3 p-6">
          <div className="flex items-center gap-3">
            <CategoryChip category={post.category} />
            <PostMeta post={post} />
          </div>
          <h3 className="font-display text-xl font-bold tracking-tight text-ink">
            {post.title}
          </h3>
          <p className="flex-1 text-[15px] leading-relaxed text-ink-soft">
            {post.excerpt}
          </p>
          <span className="text-sm font-medium text-accent-deep">
            Read post →
          </span>
        </Link>
      </article>
    </Reveal>
  );
}
