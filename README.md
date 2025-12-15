# SG School Phone Pouch Programme

Marketing website for the SG School Phone Pouch Programme built with Next.js (App Router) and Tailwind CSS.

## Getting started

### Prerequisites
- Node.js 18+
- npm
- Environment variables:
  - `NEXT_PUBLIC_SITE_URL` (e.g. `https://example.com`)
  - `NEXT_PUBLIC_TALLY_URL` (e.g. `https://tally.so/r/XXXXXX`)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Then open http://localhost:3000.

### Production build
```bash
npm run build
npm run start
```

## SEO and sitemaps
- `robots.txt` and `sitemap.xml` are served via the App Router.
- Canonical URLs and OpenGraph/Twitter tags are configured via `NEXT_PUBLIC_SITE_URL`.

## Notes
- The contact page embeds the Tally form using `NEXT_PUBLIC_TALLY_URL`.
- Floating WhatsApp CTA is included site-wide using the provided programme number.
