import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

const routes = [
  '/',
  '/how-it-works',
  '/programme',
  '/implementation-guide',
  '/pricing',
  '/customisation',
  '/samples-demo',
  '/contact',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl().replace(/\/$/, '');
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
  }));
}
