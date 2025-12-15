import Script from "next/script";

export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Chu Technologies Pte Ltd",
    url: "https://sg-school-phone-pouch-programme.com",
    email: "kevin.chu@ct.com.sg",
    telephone: "+65 9822 2723",
    identifier: "201926755K",
    sameAs: ["https://wa.me/6598222723"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SG School Phone Pouch Programme",
    url: "https://sg-school-phone-pouch-programme.com",
  };

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
