import { siteConfig } from "@/lib/seo";

// Rendered server-side as plain <script> tags so crawlers see it in the initial HTML.
// The hotline is WhatsApp-only, so no `telephone` is published (search engines show it as a call number).
export function SeoJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    alternateName: siteConfig.brandName,
    identifier: siteConfig.uen,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.svg`,
    email: siteConfig.contact.email,
    areaServed: { "@type": "Country", name: "Singapore" },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    inLanguage: "en-SG",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
