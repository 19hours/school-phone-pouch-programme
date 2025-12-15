import { Metadata } from 'next';
import { getSiteUrl, SITE_NAME } from './site';

export function baseMetadata(title: string, description: string, path: string): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl.replace(/\/$/, '')}${path.startsWith('/') ? '' : '/'}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
