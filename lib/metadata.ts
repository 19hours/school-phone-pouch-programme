import type { Metadata } from 'next';
import { siteName } from '../components/constants';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export function buildMetadata({
  title,
  description,
  path = '/',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString();
  const fullTitle = title;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Chu Technologies Pte Ltd',
  identifier: 'UEN: 201926755K',
  email: 'kevin.chu@ct.com.sg',
  telephone: '+6598222723',
  sameAs: [],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SG School Phone Pouch Programme',
  url: siteUrl,
};
