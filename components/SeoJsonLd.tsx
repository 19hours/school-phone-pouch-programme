import Script from "next/script";
import { siteConfig } from "@/lib/seo";

export function SeoJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    identifier: siteConfig.uen,
    url: siteConfig.siteUrl,
    telephone: "+65 9822 2723",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
  };

  return (
    <>
      <Script
        id="jsonld-organisation"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <Script
        id="jsonld-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
