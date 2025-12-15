# SPECIFICATIONS.MD

## Project
**Website:** SG School Phone Pouch Programme  
**Company:** Chu Technologies Pte Ltd (UEN: 201926755K). :contentReference[oaicite:0]{index=0}  
**Source of truth for content:** “SG School Phone Pouch Programme Infodeck.pdf” (1 December 2025). :contentReference[oaicite:1]{index=1}  
**Language:** British English (UK spelling and conventions).  
**Primary audiences:** Principals, school administrators, leadership teams (HODs), operations managers, exam centre administrators.

## Non-negotiables
1. **Content fidelity:** All programme explanations, claims, steps, comparisons, pricing, and customisation options must match the infodeck. No new programme features or unverified claims may be added.
2. **Credibility:** Clean visual design, plain-English explanations, and clear trust signals.
3. **SEO:** Pages must be structured for discoverability, including metadata, structured data, sitemap, and indexable content sections (no “all-in-one image” pages).
4. **WhatsApp CTA:** Persistent “Chat with us on WhatsApp” button site-wide using the programme contact number. :contentReference[oaicite:2]{index=2}
5. **Government vendor badge:** Display a clear statement: **“Government registered vendor on vendors@gov, since 2019.”** (Treat as a trust badge/statement, not a programme feature.)
6. **Contact form:** Contact page must use **Tally.so** (embedded form). No other form system.
7. **No admin tools / CMS:** Pure code. Editing via code changes only.

---

## Suggested implementation approach (Codex should implement)
- **Framework:** Next.js (App Router) or any equivalent modern SSR/SSG framework.
  - Prefer **static generation** for marketing pages.
  - Use server-side rendering only where needed (generally not needed).
- **Styling:** Tailwind CSS or clean CSS modules.
- **Hosting:** Any static-friendly host (e.g., Vercel/Netlify); must support custom domains, HTTPS, and redirects.
- **Performance targets:** Lighthouse ≥ 90 for Performance/SEO/Accessibility on key pages.
- **Accessibility:** WCAG 2.1 AA basics (semantic headings, contrast, keyboard nav, alt text, focus states).

---

## Information architecture (Site map)
Top navigation (desktop) and hamburger (mobile):
1. Home (`/`)
2. How it works (`/how-it-works`)
3. Programme (`/programme`)
4. Implementation guide (`/implementation-guide`)
5. Pricing (`/pricing`)
6. Customisation (`/customisation`)
7. Samples & demo (`/samples-demo`)
8. Contact (`/contact`)

Footer links:
- Privacy (`/privacy`)
- Terms (`/terms`)
- Sitemap (`/sitemap.xml`)
- Contact (repeat)

---

## Global UI requirements

### Header
- Logo/wordmark: “SG School Phone Pouch Programme”
- Primary CTA button: “Book a demo”
  - Links to `/contact` (Tally embed page).
- Secondary CTA: “WhatsApp us”
  - Opens WhatsApp chat.

### Persistent WhatsApp button (floating)
- Label: **“Chat with us on WhatsApp”**
- Phone: **+65 9822 2723** (derived from WhatsApp: 98222723). :contentReference[oaicite:3]{index=3}
- URL format: `https://wa.me/6598222723?text=<urlencoded preset message>`
- Preset message:
  - “Hello Kevin, I’m contacting you about the SG School Phone Pouch Programme for our school.”

### Trust badge (global, near header or above footer)
- Display text (as requested by user):
  - **“Government registered vendor on vendors@gov, since 2019.”**
- Display programme vendor details beneath or on About section:
  - “Chu Technologies Pte Ltd (UEN: 201926755K).” :contentReference[oaicite:4]{index=4}

### Visual style
- Minimal, school-appropriate, professional.
- Use real headings and body text (avoid embedding key info only in images).
- Use supportive images (pouch photos), but ensure all critical content is text-rendered and crawlable.

---

## SEO requirements (site-wide)

### Technical SEO
- Generate:
  - `sitemap.xml` (auto-generated).
  - `robots.txt` allowing indexing (unless staging).
- Canonical URLs on all pages.
- Clean URL slugs (as per site map).
- OpenGraph + Twitter card meta tags.
- Structured data (JSON-LD):
  - `Organization` (Chu Technologies Pte Ltd, UEN, contact email, WhatsApp as telephone).
  - `WebSite` with `SearchAction` (site search optional; if not implementing search, omit SearchAction).
  - `Product` (optional) for “Lockable phone pouch + unlocking base” only if represented carefully and consistently with the infodeck (no extra claims).

### On-page SEO
- One H1 per page.
- Use H2/H3 structure mirroring the infodeck:
  - Problem
  - Solution
  - How it works (Step 1–3)
  - Rolling out (Steps 1–5)
  - Comparison vs phone lockers
  - Pricing tiers
  - Customisation options
  - Samples/Demo
  - Contact details
- Include FAQ blocks where the infodeck supports answers (do not invent).
- Internal linking between related pages (e.g., Programme → How it works → Implementation guide → Pricing).

### Target keyword themes (examples)
- “school phone pouch programme”
- “lockable phone pouch for schools”
- “phone-free classroom solution”
- “visible phone compliance for schools”
- “unlocking base phone pouch”
- “phone pouch vs phone lockers”
(Use naturally; do not keyword-stuff.)

---

## Page specifications and exact page copy

> Note: Copy below must be implemented verbatim except for British spelling (e.g., “centres”, “practise”) while preserving meaning. All programme claims must remain consistent with the infodeck.

---

### 1) Home (`/`)
**Primary intent:** Quick understanding + credibility + CTA (demo / WhatsApp).

**SEO**
- Title: “SG School Phone Pouch Programme | Simple, visible phone compliance for schools”
- Meta description: “A simple, easy-to-audit phone management routine: students place phones into a personal locked pouch in phone-free spaces and unlock at approved times using an unlocking base.”

**H1**
- “SG School Phone Pouch Programme”

**Hero subtext**
- “A simple, visible and easy-to-audit way to manage phones in phone-free spaces.”

**Primary CTA buttons**
- “Book a demo” → `/contact`
- “Chat with us on WhatsApp” → WhatsApp link

**Trust strip**
- “Chu Technologies Pte Ltd (UEN: 201926755K).” :contentReference[oaicite:5]{index=5}
- “Government registered vendor on vendors@gov, since 2019.” (requested)

**Section: The problem**
Heading: “Problem: Difficulty in managing phones in classroom environments” :contentReference[oaicite:6]{index=6}  
Bullets (as on the slide, with UK spelling where applicable):
- “Students are often distracted by smartphones.” :contentReference[oaicite:7]{index=7}
- “Schools and exam centres need simple, visible compliance.” :contentReference[oaicite:8]{index=8}
- “Bags and pockets still allow discreet phone use.” :contentReference[oaicite:9]{index=9}
- “Administrators need a consistent, easy-to-audit solution.” :contentReference[oaicite:10]{index=10}

**Section: The solution**
Heading: “Solution: School Phone Pouch Programme” :contentReference[oaicite:11]{index=11}  
Bullets:
- “Each student places their phone into a personal phone pouch as they enter a phone-free space.” :contentReference[oaicite:12]{index=12}
- “The pouch uses a safe clip mechanism, and can be unlocked using a magnetic base when students are allowed to use their phones again.” :contentReference[oaicite:13]{index=13}
- “Pouch stays with the student entire day, easy to show the phone is secured.” :contentReference[oaicite:14]{index=14}
- “Can be unlocked by admin staff during emergencies.” :contentReference[oaicite:15]{index=15}
- “Enables fast, visual compliance checks for teachers and administrators.” :contentReference[oaicite:16]{index=16}
Callouts:
- “Lock that can only be unlocked using an unlocking base.” :contentReference[oaicite:17]{index=17}
- “Compatible with all phone models.” :contentReference[oaicite:18]{index=18}

**Section: Safety and child-friendly design**
Heading: “Student safety is our priority”
Copy:
- “Our lockable phone pouches do not use needles.”
- “We use child-safe clips with locking technology.”
- “Student safety is our PRIORITY.” :contentReference[oaicite:19]{index=19}

**Section: Comparison teaser**
- Link cards to `/programme` section “Programme vs Phone Lockers”.

**Section: CTA**
- “For interested schools: Please contact us immediately to roll out in 2026!” :contentReference[oaicite:20]{index=20}

---

### 2) How it works (`/how-it-works`)
**Primary intent:** Explain the 3-step routine in clear, operational terms.

**SEO**
- Title: “How it works | SG School Phone Pouch Programme”
- Meta description: “Three simple steps: phone goes into pouch on entry, pouch stays locked during lesson, unlock at an approved base when allowed.”

**H1**
- “How it works”

**Content layout**
Three step cards with a short intro:
Intro: “A simple routine that creates fast, visible compliance checks for teachers and administrators.” :contentReference[oaicite:21]{index=21}

**Step 1 — Phone goes into pouch on entry**
Body text (from the infographic, rendered as text):
- “When students enter a phone-free space (for example, a classroom or assembly hall), they place their phones into their personal pouches.”
Bullets:
- “Each student has a clearly labelled pouch.”
- “Teachers do a quick visual check rather than handling phones.”
- “This becomes part of the normal start-of-lesson or start-of-day routine.”

**Step 2 — Pouch stays locked during lesson**
Body text:
- “While students are in the phone-free space, the pouch remains locked. They keep the pouch with them, but cannot access their phones.”
Bullets:
- “No keys to manage – the lock is built into the pouch.”
- “The clip design avoids needles or sharp points, making it more child-friendly than some pin-and-lock solutions.”
- “Phones are physically present but not available, reducing under-the-table use and distraction.”

**Step 3 — Unlock at a base when allowed**
Body text:
- “When students are allowed to use their phones (for example, at dismissal or at designated times), they step outside the phone-free zone and tap their pouch on an unlocking base.”
Bullets:
- “Unlocking bases are installed at locations chosen by the school.”
- “Students unlock only at approved times, supporting consistent expectations.”
- “The same routine applies across classes, reducing confusion and negotiation.”

CTA strip:
- “Book a demo” + “WhatsApp us”

---

### 3) Programme (`/programme`)
**Primary intent:** Provide decision-makers with the full rationale, solution description, and comparison.

**SEO**
- Title: “Programme overview | SG School Phone Pouch Programme”
- Meta description: “A consistent, easy-to-audit phone management solution for schools: visible compliance, student peace of mind, and flexible use across spaces.”

**H1**
- “What is the School Phone Pouch Programme”

**Section: Problem (repeat, brief)**
Use the four bullets from the Problem slide. :contentReference[oaicite:22]{index=22}

**Section: Solution (expanded)**
Use the Solution bullets and callouts. :contentReference[oaicite:23]{index=23}

**Section: Already rolled out in schools around the US**
Heading: “Already rolled out in schools around the US”
Bullets:
- “This solution to prevent classroom phone usage is very popular in the US.” :contentReference[oaicite:24]{index=24}
Then highlight the safety distinction:
- “The lock they use has a needle in the mechanism!”
- “Our lockable phone pouches do not use needles.”
- “We use child-safe clips with locking technology.”
- “Student safety is our PRIORITY.” :contentReference[oaicite:25]{index=25}

**Section: School Phone Pouch Programme vs Phone Lockers**
Implement as a comparison table with two columns.

Rows and copy must reflect the infodeck:

1. **Control of distraction**
- Programme: “Phones locked at classroom/zone entry” + “Easy visual check (everyone has a pouch)”
- Lockers: “Harder for teacher to verify compliance” + “Students can say ‘it’s in my locker’ when it is not” :contentReference[oaicite:26]{index=26}

2. **Student security & peace of mind**
- Programme: “Phone stays with student, just not usable”
- Lockers: “Shared / open lockers can cause disputes” :contentReference[oaicite:27]{index=27}

3. **Flexibility across spaces**
- Programme: “Works in classrooms, halls, CCAs, camps, exams” + “Same routine everywhere: phone → pouch → lock”
- Lockers: “Fixed to one location (corridor/area)” + “Harder to enforce rules in halls, special rooms, off-site” + “Scaling up requires more physical lockers and space” :contentReference[oaicite:28]{index=28}

4. **Implementation and operations**
- Programme: “Simple rollout: issue pouches, brief staff and students” + “Easy to replace or top up for new cohorts”
- Lockers: “Requires purchase, delivery and installation” + “Needs space planning and maintenance” + “Repairs, lost keys and damaged doors add admin load” :contentReference[oaicite:29]{index=29}

5. **Responsible use & autonomy**
- Programme: “Supports ‘phones at the right time, right place’” + “Unlocking bases define where/when phones are allowed” + “Encourages discussion about digital habits, not just bans”
- Lockers: “Feels more like an all-or-nothing rule” + “Less nuanced control of when phones can be used again” + “Often leads to punishment/confiscation when rules are broken” :contentReference[oaicite:30]{index=30}

6. **Physical safety & handling**
- Programme: “Soft neoprene, rounded edges” + “Locking clip with no needles or sharp pins”
- Lockers: “Metal/wood doors and hinges can pinch fingers” + “Doors can swing into walkways” :contentReference[oaicite:31]{index=31}

7. **Policy clarity & parent communication**
- Programme: “Simple message: ‘In class, phone is in a locked pouch’” + “Parents know phones are present but not used in lessons”
- Lockers: “Message is less visible (‘Phones in lockers’)” + “Harder to prove phones are actually stored” + “More questions about exceptions and special cases” :contentReference[oaicite:32]{index=32}

CTA:
- “Please contact us immediately to roll out in 2026!” :contentReference[oaicite:33]{index=33}

---

### 4) Implementation guide (`/implementation-guide`)
**Primary intent:** Give administrators an actionable rollout plan.

**SEO**
- Title: “Implementation guide | SG School Phone Pouch Programme”
- Meta description: “A practical rollout plan: decide phone-free spaces, confirm quantities and base locations, prepare messaging, practise routines, and refine after the first term.”

**H1**
- “Implementation guide”

**Intro**
- “Simple rollout: issue pouches, brief staff and students.” :contentReference[oaicite:34]{index=34}

**Steps (must be displayed as numbered sections)**

**1. Decide where phones must be put away**
- “Identify which spaces should be phone-free (for example, all classrooms, certain levels, assembly hall) and when phones are not to be used.”
Bullets:
- “Align with your existing mobile phone and PLD policies.”
- “Clarify exceptions such as medical or learning-related use.”

**2. Confirm quantities and unlocking base locations**
- “Estimate student numbers and decide where unlocking bases should be installed, for example near classroom exits, the hall or the general office.”
Bullets:
- “Plan number of pouches by level, including buffer units.”
- “Ensure students have a clear path to unlock when they are allowed to use their phones.”

**3. Prepare staff, parent and student messages**
- “Agree on simple, consistent phrases to explain the routine: when phones go into pouches, when they must stay locked, and when they can be unlocked.”
Bullets:
- “Staff briefing for leadership, HODs and form teachers.”
- “Parent letter or email explaining the routine and rationale.”
- “Student assembly announcement or form class briefing.”

**4. Issue pouches and practise the routine**
- “Distribute pouches by class or level and practise the sequence for the first one to two weeks:”
Bullets:
- “On entry to phone-free spaces, phones go into pouches.”
- “While students are in those spaces, pouches remain locked and phones are not used.”
- “When allowed to use phones, students step outside to an unlocking base to open their pouches.”

**5. Review and refine after the first term**
- “Gather feedback from staff and students and adjust as needed.”
Bullets:
- “Check whether base locations and routines are practical and enforceable.”
- “Plan top-ups and replacements for pouches for future intakes.”

CTA:
- “Book a demo” / “WhatsApp us”

---

### 5) Pricing (`/pricing`)
**Primary intent:** Present the official tiers and unlocking base terms.

**SEO**
- Title: “Pricing | SG School Phone Pouch Programme”
- Meta description: “Tiered pouch pricing and unlocking base details for schools.”

**H1**
- “Pricing”

**Pricing table**
Columns: “Number of pouches” | “Cost per pouch”
Rows:
- “Tier 1: 2000 and above — $16” :contentReference[oaicite:35]{index=35}
- “Tier 2: 1000–1900 — $17” :contentReference[oaicite:36]{index=36}
- “Tier 3: 1–900 — $18” :contentReference[oaicite:37]{index=37}

Unlocking base note (below table):
- “We include 1 free unlocking base for every purchase of 100 pouches.”
- “Any additional unlocking base can be purchased for $80.” :contentReference[oaicite:38]{index=38}

CTA:
- “Contact us to confirm quantities and rollout timeline.”

---

### 6) Customisation (`/customisation`)
**Primary intent:** Provide the customisation options exactly as offered.

**SEO**
- Title: “Customisation | SG School Phone Pouch Programme”
- Meta description: “Pouch colour options, name card holder, and school logo printing for qualifying quantities.”

**H1**
- “Customisation”

**Section: Pouch colour**
Copy:
- “Useful for differentiating different student levels (P1 → Green, P2 → Yellow etc.)”
- “Choose from: Red, Orange, Yellow, Green, Blue, Indigo, Purple, Black, Grey.”
- “Free for quantities above 1000.” :contentReference[oaicite:39]{index=39}

**Section: Name card holder for easy identification**
Copy:
- “Useful for students to see who the pouch belongs to”
- “+ $0.50 per pouch” :contentReference[oaicite:40]{index=40}

**Section: School logo printing**
Copy:
- “Add your school logo (single colour print) on every pouch for more personalisation!”
- “+ $0.50 per pouch, minimum quantity is 1000” :contentReference[oaicite:41]{index=41}

CTA:
- “Book a demo” + “WhatsApp us”

---

### 7) Samples & demo (`/samples-demo`)
**Primary intent:** Encourage in-school demo requests.

**SEO**
- Title: “Samples & demo | SG School Phone Pouch Programme”
- Meta description: “We can bring samples and host a demo in your school. Contact us to arrange a visit.”

**H1**
- “Samples / Demo”

Body copy:
- “We can bring the samples and host demo in your school.”
- “Please contact us to arrange for a visit!” :contentReference[oaicite:42]{index=42}

CTAs:
- “Book a demo” → `/contact`
- WhatsApp button

---

### 8) Contact (`/contact`)
**Primary intent:** Capture enquiries through Tally, plus direct contact details.

**SEO**
- Title: “Contact | SG School Phone Pouch Programme”
- Meta description: “Contact Kevin Chu to discuss rollout in 2026, pricing tiers, and a school demo.”

**H1**
- “Contact”

**Priority message**
- “For interested schools: Please contact us immediately to roll out in 2026!” :contentReference[oaicite:43]{index=43}

**Direct contact block (must match infodeck)**
- “Person in charge: Kevin Chu”
- “Email: kevin.chu@ct.com.sg”
- “WhatsApp: 98222723” :contentReference[oaicite:44]{index=44}

**Tally embed**
- Embed a Tally.so form via iframe.
- Required fields in the Tally form (configure in Tally, but this page must embed it):
  - School name
  - Role (Principal / School Administrator / HOD / Other)
  - Email
  - Phone / WhatsApp
  - Estimated number of students / pouches required
  - Preferred demo dates/times
  - Notes (free text)
- Add privacy note below embed:
  - “By submitting this form, you agree to be contacted about the SG School Phone Pouch Programme.”

**Secondary CTA**
- WhatsApp “Chat with us on WhatsApp” button.

---

## Utility/legal pages

### Privacy (`/privacy`)
- Simple policy covering:
  - What data is collected via Tally form
  - How it is used (to respond to enquiries)
  - Retention and deletion request contact (email)
- Keep short and clear.

### Terms (`/terms`)
- Basic site terms:
  - Informational site
  - Pricing subject to confirmation (do not contradict published tiers; simply state that final quotes confirm quantities/options)
  - No warranties statement for site content accuracy beyond the published programme material

---

## Components and content rules

### Content rules
- Do not add claims beyond:
  - Visual compliance
  - Pouch stays with student all day
  - Unlocking base routine
  - Emergency unlocking by admin staff
  - No needles / child-safe clip approach
  - Comparisons stated in the infodeck
  - Pricing and customisation terms exactly as listed
All of the above are stated in the infodeck. 

### Images
- Include the pouch imagery (as in the infodeck) where available.
- Every image must have descriptive alt text (e.g., “Student placing phone into a lockable phone pouch”).

---

## Tracking (optional but recommended)
- Add privacy-conscious analytics (e.g., Plausible) only if requested.
- Track:
  - Contact form page views
  - WhatsApp click events
  - Demo CTA clicks

---

## Deliverables (what Codex must output)
1. Full website source code with the above routes.
2. SEO essentials: metadata per page, sitemap, robots, canonical.
3. WhatsApp floating CTA implemented on all pages.
4. Contact page embedding Tally.so (placeholder Tally URL to be replaced at deployment).
5. Copy implemented exactly as specified, derived from the infodeck.

---
