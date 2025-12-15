import type { NextRequest } from 'next/server';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export function GET(_request: NextRequest) {
  const body = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
