# Chu School Phone Pouch Programme

Next.js (App Router) site for Chu Technologies Pte Ltd. Includes MDX-driven guides/resources, comparison and FAQ hubs, and SEO-ready metadata.

## Getting started

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_FORM_ENDPOINT` — optional JSON endpoint for lead submissions.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp number for the floating button.
- `NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE` — preset message in the WhatsApp link.

## Content

MDX files live in `content/guides`, `content/resources`, and `content/news`. Structured JSON lives in `content/compare.json` and `content/faq.json`.

## Build and lint

```bash
npm run build
npm run lint
```
