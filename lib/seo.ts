import { Metadata } from 'next';

const siteName = 'SG School Phone Pouch Programme';
const defaultImage = '/';

export const whatsappLink =
  'https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school.';

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
}

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${getSiteUrl()}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Chu Technologies Pte Ltd',
  legalName: 'Chu Technologies Pte Ltd',
  url: getSiteUrl(),
  email: 'kevin.chu@ct.com.sg',
  telephone: '+6598222723',
  identifier: 'UEN: 201926755K',
};

export function websiteJsonLd(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: `${getSiteUrl()}${path}`,
    name: siteName,
  };
}
