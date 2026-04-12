import type { MetadataRoute } from "next";

const BASE = "https://hikamer.f5.si";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}`, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/disclaimer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
}
