import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sg-school-phone-pouch-programme.com";
  const routes = [
    "",
    "/how-it-works",
    "/programme",
    "/implementation-guide",
    "/pricing",
    "/customisation",
    "/samples-demo",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    changefreq: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
