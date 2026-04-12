import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://portal.hikamer.f5.si", lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: "https://portal.hikamer.f5.si/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://portal.hikamer.f5.si/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://portal.hikamer.f5.si/privacy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: "https://portal.hikamer.f5.si/disclaimer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
}
