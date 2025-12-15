# SG School Phone Pouch Programme

Marketing site for the SG School Phone Pouch Programme built with Next.js (App Router) and TypeScript.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file to set required public variables:
   ```bash
   NEXT_PUBLIC_SITE_URL=https://example.com
   NEXT_PUBLIC_TALLY_URL=https://tally.so/r/XXXXXX
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   The site will be available at http://localhost:3000.

## Scripts
- `npm run dev` – start the development server.
- `npm run build` – create a production build.
- `npm start` – start the production server after building.
- `npm run lint` – run Next.js linting.

## Notes
- All styling lives in `styles/globals.css` for a GOV.UK-inspired, asset-free experience.
- The WhatsApp call-to-action is available site-wide and configured to open the provided number.
- The contact page embeds the Tally form using the `NEXT_PUBLIC_TALLY_URL` environment variable.
- Sitemap and robots.txt are generated automatically based on the defined routes.
