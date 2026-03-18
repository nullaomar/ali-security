import type { MetadataRoute } from "next";

const BASE = "https://caprasecurity.ca";

const serviceSlugs = [
  "reit-security",
  "property-management",
  "commercial-industrial-logistics",
  "mobile-security",
  "loss-prevention",
  "event-security",
  "construction-security",
  "fire-watch",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/quote`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/work-with-us`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
