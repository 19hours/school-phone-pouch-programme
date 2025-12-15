import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export function buildMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'SG School Phone Pouch Programme',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export function organisationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chu Technologies Pte Ltd',
    identifier: 'UEN: 201926755K',
    url: siteUrl,
    email: 'kevin.chu@ct.com.sg',
    telephone: '+6598222723',
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SG School Phone Pouch Programme',
    url: siteUrl,
  };
}
