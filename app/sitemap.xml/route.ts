import { NextResponse } from 'next/server';

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

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const urls = routes
    .map((route) => `<url><loc>${new URL(route, siteUrl).toString()}</loc><changefreq>weekly</changefreq></url>`) 
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
