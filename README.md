# SG School Phone Pouch Programme

A marketing site built with Next.js (App Router, TypeScript) for the SG School Phone Pouch Programme.

## Getting started

### Prerequisites
- Node.js 18+
- npm

### Environment variables
Create a `.env.local` file with:

```
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_TALLY_URL=https://tally.so/r/XXXXXX
```

### Install dependencies
```
npm install
```

### Run locally
```
npm run dev
```
Visit http://localhost:3000.

### Build for production
```
npm run build
```

### Start production server
```
npm run start
```

## Notes
- All styling uses local CSS (no external assets).
- The contact form embeds a Tally.so form via `NEXT_PUBLIC_TALLY_URL`. If it is not set, a developer warning appears instead of the embed.
- Sitemap and robots.txt are generated from the defined routes.
