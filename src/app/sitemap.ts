import type { MetadataRoute } from "next";
import { allPlants } from "@/utils/plants";
import { toSlug } from "@/utils/slug";
import { categoryPages } from "@/data/categoryPages";

const BASE = "https://taprava.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/rostliny`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/pruvodce`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sezonni-pruvodce`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/oblibene`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  const categoryLandings: MetadataRoute.Sitemap = categoryPages.map((cat) => ({
    url: `${BASE}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const plantPages: MetadataRoute.Sitemap = allPlants.map((plant) => ({
    url: `${BASE}/rostliny/${toSlug(plant.nazevCz, plant.id)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryLandings, ...plantPages];
}
