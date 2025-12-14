Build Instructions
Phase 0 — Repository and baseline setup

Create a Next.js project (App Router)

Node.js LTS

npx create-next-app@latest chu-site --typescript --app --eslint

Confirm the app runs locally.

Install Tailwind CSS

Add Tailwind per Next.js official setup.

Configure:

Base font sizing (18–20px default)

Global line-height and spacing defaults.

Add core dependencies

@tailwindcss/typography (for MDX articles/guides)

next-sitemap (or implement manual sitemap route)

gray-matter (frontmatter parsing for MDX) if using MDX files

next-mdx-remote or @next/mdx (choose one MDX approach)

Keep dependencies minimal.

Set up environment variable template

Create .env.example with:

NEXT_PUBLIC_FORM_ENDPOINT=

NEXT_PUBLIC_WHATSAPP_NUMBER=

NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE=

Phase 1 — Layout, global UI, and brand trust

Create global layout

app/layout.tsx:

Header navigation

Footer

Global typography styles

Structured data injection hook (JSON-LD where needed)

Add header and footer

Header links (simple, minimal): Programme, Customisation, Compare, Guides, Resources, FAQ, Contact

Footer must include:

“Chu Technologies Pte Ltd”

“UEN 201926755K”

“Registered government vendor”

“Local Singapore supplier”

Implement the global WhatsApp floating button

Create components/WhatsAppFloatingButton.tsx

Render it from the root layout so it appears on every page.

Behavior:

Read env vars

If NEXT_PUBLIC_WHATSAPP_NUMBER exists: open wa.me link with encoded default message

Else: route to /contact

Add aria-label, keyboard focus styles, and responsive sizing.

Phase 2 — Content system (MDX/JSON) and routing

Decide content storage approach

Use:

MDX for long-form: guides, resources/news

JSON for structured: comparisons, FAQs (optional), or also MDX if you prefer consistency

Recommended structure:

content/guides/*.mdx

content/resources/*.mdx

content/news/*.mdx

content/compare.json

content/faq.json (or content/faq/*.mdx)

Implement content loaders

Create a small library:

lib/content.ts

Functions required:

getAllGuides(), getGuideBySlug(slug)

getAllComparisons(), getComparisonBySlug(slug)

getAllFaqs(), getFaqBySlug(slug)

getAllNews(), getNewsBySlug(slug)

Each loader must return:

slug

title

description/excerpt

publish/update date (for resources/news)

body content (for MDX)

Generate dynamic routes

app/guides/[slug]/page.tsx

app/compare/[slug]/page.tsx

app/faq/[slug]/page.tsx

app/resources/news/[slug]/page.tsx

Use generateStaticParams() so pages are statically generated for SEO.

Phase 3 — Core pages and conversion flow

Build core pages

/ Home (hero + key benefits + CTA + short “How it works”)

/programme (operational details, workflow, procurement-friendly)

/customisation (colour, name card, sling, logo; gallery placeholders)

/pricing (quote-based; what affects pricing; CTA)

/about (company credibility; UEN; gov vendor; local supplier; in-house manufacturing)

/contact (lead form)

Implement the contact / lead form

Component: components/LeadForm.tsx

Validation (client-side):

name, role, school, email required

Submit logic:

If NEXT_PUBLIC_FORM_ENDPOINT exists: POST JSON

Else: mailto fallback

Must display success/error states in large readable text.

Add query-param prefill

In /contact, parse querystring:

topic, message, etc.

If present, prefill message field.

Ensure CTAs from /customisation and /compare/[slug] append these params.

Add repeated CTAs

Ensure each major page has:

Primary CTA: “Request a Quote”

Secondary CTA: “WhatsApp Us”

Keep CTA wording consistent.

Phase 4 — SEO implementation (non-negotiable requirements)

Per-page metadata

Use Next.js generateMetadata() for every route:

Unique title

Unique description

OpenGraph tags

Canonical link

Ensure no duplicate titles across comparison pages (include comparison terms in title).

Structured data (JSON-LD)

Implement helpers in lib/schema.ts:

Organization schema (include UEN identifier)

Product schema (School Phone Pouch Programme)

BreadcrumbList schema (site-wide)

FAQPage schema (faq pages)

Article schema (resources/news)

Render JSON-LD in each page appropriately.

robots.txt

Create app/robots.ts (or static file) to allow indexing and link sitemap.

sitemap.xml

Implement app/sitemap.ts and include:

All static routes

All dynamic routes discovered from content loaders

Ensure:

correct lastModified dates (especially for resources/news)

URLs are canonical

Phase 5 — Internal linking and “no orphan pages”

Create hub index pages

/compare lists all comparisons

/guides lists all guides

/faq lists all FAQ entries

/resources lists resources and news links

Each hub must show excerpt + link.

Add “Related links” blocks

For each child page template:

show 3–6 related links from same cluster

Example:

A comparison page links to:

programme

customisation

2 relevant FAQs

1 relevant guide

Breadcrumbs

Add visible breadcrumbs (not just schema) for clarity and SEO.

Phase 6 — Singapore resources/news content requirements

Create resources pages with original summaries

/resources/singapore-phone-rules must summarize the context and link to official sources.

/resources/news/[slug] pages must:

have original writing

cite source links

include disclaimer about referring to MOE guidance

Do not copy/paste long excerpts.

Include site-specific operational interpretation

Add “What this means for schools” section:

entry workflow

storage vs carry-on locked pouch

enforcement consistency

admin effort

Phase 7 — UI polish and accessibility

Typography and spacing enforcement

Default text size 18–20px across the site

Large headings, ample whitespace

Ensure links and buttons are easy to tap (44px min target)

Performance

Use next/image

Lazy load non-critical images

Avoid heavy animation libraries

Accessibility checks

Ensure contrast meets AA

Keyboard navigation works

aria-label on WhatsApp button

Proper heading hierarchy (H1 once per page)

Phase 8 — QA, acceptance checks, and deployment

Run checks

npm run build

npm run lint

Validate sitemap output contains dynamic pages.

Basic SEO verification

Confirm:

each page has unique title/description

canonical URL present

JSON-LD renders correctly

robots.txt references sitemap

Deploy

Vercel recommended:

set env vars in Vercel project

deploy

Submit sitemap to Google Search Console (post-deploy operational step).

Deliverables

Repo code

README (setup + env vars + deployment)

.env.example

Content folder with all initial slugs populated

Codex-ready instruction prompt (copy/paste)

Build the site in phases:

Create Next.js App Router + Tailwind, global layout, header/footer.

Implement site-wide WhatsApp floating button from env vars with fallback to /contact.

Implement content-driven routing using MDX/JSON for compare/guides/faq/resources/news; generate static params for SEO.

Build core pages (/ /programme /customisation /pricing /about /contact) with large typography and clear CTAs.

Implement lead form with validation + env-configured POST endpoint + mailto fallback; support query param prefill.

Implement full SEO: per-page metadata, canonical, OpenGraph, robots.txt, sitemap including dynamic routes, JSON-LD (Organization with UEN, Product, FAQPage, Article, BreadcrumbList).

Create hub pages and enforce internal linking and breadcrumbs to avoid orphan pages.

Ensure content includes: local Singapore supplier; manufactures own pouches; customisation options (colour, name card, sling, school logo); registered government vendor; UEN 201926755K.

Add resources/news pages with original summaries and disclaimer, and avoid copying full articles.

Produce README and .env.example; ensure build passes and deployment is straightforward.