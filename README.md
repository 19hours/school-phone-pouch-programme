# SG School Phone Pouch Programme site

Marketing website for the SG School Phone Pouch Programme, built with Next.js and GOV.UK Frontend.

## Prerequisites
- Node.js 18+

## Setup
1. Install dependencies and copy GOV.UK assets:
   ```bash
   npm install
   ```
2. Create an `.env.local` based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Update `NEXT_PUBLIC_SITE_URL` with the live domain and `NEXT_PUBLIC_TALLY_URL` with your Tally form link.

## Running locally
```bash
npm run dev
```
Site will be available at http://localhost:3000.

## Building for production
```bash
npm run build
npm run start
```

## Testing
Run lint checks:
```bash
npm run lint
```

## Notes
- GOV.UK Frontend assets are copied into `public/govuk/assets` via the postinstall script.
- All routes are statically generated in the `app/` directory, with sitemap and robots.txt provided via route handlers.
