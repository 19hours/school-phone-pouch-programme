// components/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/seo";

// Short labels for each inner route. Unknown routes simply render no breadcrumb.
const labels: Record<string, string> = {
  "/how-it-works": "How it works",
  "/programme": "The programme",
  "/implementation-guide": "Getting started",
  "/pricing": "Pricing",
  "/customisation": "Customisation",
  "/contact": "Contact",
  "/privacy": "Privacy statement",
  "/terms": "Terms of use",
  "/resources": "Guides",
  "/resources/singapore-school-phone-policy": "Singapore school phone policy",
  "/resources/phone-free-spaces-in-schools": "Phone-free spaces",
  "/resources/phone-pouches-for-ccas-camps": "CCAs and camps",
  "/resources/exams-phone-compliance": "Exams",
  "/resources/phone-pouches-vs-phone-lockers": "Pouches vs lockers",
  "/resources/phone-pouches-vs-yondr": "Pouches vs Yondr",
  "/resources/parents-guide": "Parents’ guide",
  "/resources/updates": "Updates",
};

export function Breadcrumbs() {
  const pathname = usePathname() || "/";
  if (!labels[pathname]) return null;

  // Build the trail from each path prefix that has a label, e.g. /resources → /resources/updates.
  const parts = pathname.split("/").filter(Boolean);
  const trail = [{ href: "/", label: "Home" }];
  parts.forEach((_, i) => {
    const href = "/" + parts.slice(0, i + 1).join("/");
    if (labels[href]) trail.push({ href, label: labels[href] });
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.label,
      item: `${siteConfig.siteUrl}${t.href === "/" ? "" : t.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs mb-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol>
        {trail.map((t, i) =>
          i === trail.length - 1 ? (
            <li key={t.href} aria-current="page">
              {t.label}
            </li>
          ) : (
            <li key={t.href}>
              <Link href={t.href}>{t.label}</Link>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}
