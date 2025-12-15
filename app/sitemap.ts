import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.sg-school-phone-pouch-programme.example';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/how-it-works',
    '/programme',
    '/implementation-guide',
    '/pricing',
    '/customisation',
    '/samples-demo',
    '/contact',
    '/privacy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`
  }));
}
