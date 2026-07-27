import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guides";
import { getAllPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/structured-data";

export const dynamic = "force-static";

const staticPaths = [
  "/",
  "/about",
  "/blog",
  "/guides",
  "/pricing",
  "/support",
  "/legal/privacy",
  "/legal/terms",
  "/legal/dpa",
  "/legal/subprocessors",
  "/legal/cookies",
  "/legal/refunds",
  "/legal/data-deletion",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: absoluteUrl(path) })),
    ...getAllPosts().map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.date,
    })),
    ...getAllGuides().map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: guide.updated,
    })),
  ];
}
