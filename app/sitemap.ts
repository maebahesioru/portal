import type { MetadataRoute } from "next";
import { getAllAppMetas } from "./app-descriptions";
import { getAllPosts } from "@/lib/posts";

const BASE = "https://hikamer.f5.si";

export default function sitemap(): MetadataRoute.Sitemap {
  const apps = getAllAppMetas().map((app) => ({
    url: `${BASE}/apps/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: `${BASE}`, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/disclaimer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...apps,
    ...posts,
  ];
}
