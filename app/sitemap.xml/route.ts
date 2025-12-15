import type { NextRequest } from 'next/server';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

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

export function GET(_request: NextRequest) {
  const urls = routes
    .map((path) => `<url><loc>${siteUrl}${path}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`) 
    .join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
