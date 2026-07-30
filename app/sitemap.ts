import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guides";
import { getAllPosts } from "@/lib/posts";
import { LEGAL_UPDATED } from "@/lib/legal";
import { absoluteUrl } from "@/lib/structured-data";

export const dynamic = "force-static";

/** Newest ISO date in a list, or undefined if the list is empty. */
function newest(dates: string[]): string | undefined {
  return dates.length > 0 ? dates.slice().sort().at(-1) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const guides = getAllGuides();

  // Only pages with a date we actually track get a lastModified. The marketing
  // pages have no revision history to draw one from, and an invented date is
  // worse than none.
  const staticPaths: { path: string; lastModified?: string }[] = [
    { path: "/" },
    { path: "/about" },
    { path: "/pricing" },
    { path: "/support" },
    { path: "/blog", lastModified: newest(posts.map((p) => p.date)) },
    { path: "/guides", lastModified: newest(guides.map((g) => g.updated)) },
    ...Object.entries(LEGAL_UPDATED).map(([page, lastModified]) => ({
      path: `/legal/${page}`,
      lastModified,
    })),
  ];

  return [
    ...staticPaths.map(({ path, lastModified }) => ({
      url: absoluteUrl(path),
      ...(lastModified && { lastModified }),
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.date,
    })),
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: guide.updated,
    })),
  ];
}
