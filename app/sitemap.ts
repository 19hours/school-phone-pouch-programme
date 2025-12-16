// app/sitemap.ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
  }> = [
    // Core marketing routes (SPEC)
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/how-it-works", changeFrequency: "monthly", priority: 0.9 },
    { path: "/programme", changeFrequency: "monthly", priority: 0.9 },
    { path: "/implementation-guide", changeFrequency: "monthly", priority: 0.8 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/customisation", changeFrequency: "monthly", priority: 0.7 },
    { path: "/samples-demo", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.9 },

    // Utility/legal
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },

    // Resources hub + resources
    { path: "/resources", changeFrequency: "weekly", priority: 0.7 },
    {
      path: "/resources/singapore-school-phone-policy",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      path: "/resources/phone-free-spaces-in-schools",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      path: "/resources/phone-pouches-for-ccas-camps",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      path: "/resources/exams-phone-compliance",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      path: "/resources/phone-pouches-vs-phone-lockers",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { path: "/resources/updates", changeFrequency: "weekly", priority: 0.5 },
  ];

  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
