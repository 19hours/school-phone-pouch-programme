import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';

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
  const baseUrl = getSiteUrl();
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
