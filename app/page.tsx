// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title:
    "SG School Phone Pouch Programme | Simple, visible phone compliance for schools",
  description:
    "A simple, easy-to-audit phone management routine: students place phones into a personal locked pouch in phone-free spaces and unlock at approved times using an unlocking base.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "SG School Phone Pouch Programme | Simple, visible phone compliance for schools",
    description:
      "A simple, easy-to-audit phone management routine: students place phones into a personal locked pouch in phone-free spaces and unlock at approved times using an unlocking base.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SG School Phone Pouch Programme | Simple, visible phone compliance for schools",
    description:
      "A simple, easy-to-audit phone management routine: students place phones into a personal locked pouch in phone-free spaces and unlock at approved times using an unlocking base.",
  },
};

export default function HomePage() {
  return (
    <div className="py-2">
      {/* Hero with compact slideshow background */}
      <section className="position-relative overflow-hidden rounded border hero-slab">
        <div
          id="heroCarousel"
          className="carousel slide hero-carousel"
          data-bs-ride="carousel"
          data-bs-interval="4500"
          aria-label="Programme images"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="hero-slide"
                style={{ backgroundImage: "url(/images/hero-1.jpg)" }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Strong overlay for contrast */}
        <div className="hero-overlay-strong" aria-hidden="true" />

        <div className="container position-relative hero-content">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-9">
              {/* More opaque translucent panel for guaranteed readability */}
              <div className="hero-panel-strong">
                <h1 className="display-5 fw-bold text-white mb-2">
                  Simple, visible phone compliance for schools.
                </h1>

                <p className="lead text-white mb-3 hero-sublead">
                  Made for Singapore Schools.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-2">
                  <Link
                    href="/contact"
                    className="btn btn-primary btn-lg px-4 d-inline-flex align-items-center justify-content-center"
                    style={{ minHeight: 48, minWidth: 220 }}
                  >
                    Book a demo
                  </Link>

                  <a
                    href={buildWhatsAppUrl()}
                    className="btn btn-outline-light btn-lg px-4 d-inline-flex align-items-center justify-content-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ minHeight: 48, minWidth: 220 }}
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>

                <div className="text-white mt-3 hero-footnote">
                  A quick and easy way to manage phones in phone-free spaces.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution (side-by-side) */}
      <section className="py-5">
        <div className="d-flex align-items-start gap-3 mb-3">
          <div className="icon-badge" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2 4 7v10l8 5 8-5V7l-8-5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 22V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M20 7 12 12 4 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h2 className="h3 fw-bold mb-1">At a glance: problem vs programme routine</h2>
            <div className="text-muted">
              See the main challenges and the programme routine in one view.
            </div>
          </div>
        </div>

        <div className="row g-3">
          {/* Problem */}
          <div className="col-12 col-lg-6">
            <div className="border rounded p-4 h-100 bg-white">
              <h3 className="h5 fw-bold mb-3">
                Problem: Difficulty in managing phones in classroom environments
              </h3>

              <ul className="list-unstyled m-0 d-grid gap-3">
                <li className="d-flex gap-2">
                  <span className="mark-x" aria-hidden="true">
                    ✕
                  </span>
                  <span>Students are often distracted by smartphones.</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="mark-x" aria-hidden="true">
                    ✕
                  </span>
                  <span>Schools and exam centres need simple, visible compliance.</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="mark-x" aria-hidden="true">
                    ✕
                  </span>
                  <span>Bags and pockets still allow discreet phone use.</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="mark-x" aria-hidden="true">
                    ✕
                  </span>
                  <span>Administrators need a consistent, easy-to-audit solution.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="col-12 col-lg-6">
            <div className="border rounded p-4 h-100 bg-light">
              <h3 className="h5 fw-bold mb-3">Solution: School Phone Pouch Programme</h3>

              <ul className="list-unstyled m-0 d-grid gap-3">
                <li className="d-flex gap-2">
                  <span className="mark-tick" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Each student places their phone into a personal phone pouch as they
                    enter a phone-free space.
                  </span>
                </li>

                <li className="d-flex gap-2">
                  <span className="mark-tick" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    The pouch uses a safe clip mechanism, and can be unlocked using a
                    magnetic base when students are allowed to use their phones again.
                  </span>
                </li>

                <li className="d-flex gap-2">
                  <span className="mark-tick" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Pouch stays with the student entire day, easy to show the phone is
                    secured.
                  </span>
                </li>

                <li className="d-flex gap-2">
                  <span className="mark-tick" aria-hidden="true">
                    ✓
                  </span>
                  <span>Can be unlocked by admin staff during emergencies.</span>
                </li>

                <li className="d-flex gap-2">
                  <span className="mark-tick" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Enables fast, visual compliance checks for teachers and administrators.
                  </span>
                </li>
              </ul>

              <div className="mt-4 d-grid gap-2">
                <div className="border rounded p-3 bg-white">
                  <span className="mark-tick me-2" aria-hidden="true">
                    ✓
                  </span>
                  <span className="fw-semibold">
                    Lock that can only be unlocked using an unlocking base.
                  </span>
                </div>
                <div className="border rounded p-3 bg-white">
                  <span className="mark-tick me-2" aria-hidden="true">
                    ✓
                  </span>
                  <span className="fw-semibold">Compatible with all phone models.</span>
                </div>
              </div>

              <div className="mt-3">
                <Link href="/programme" className="fw-semibold text-decoration-none">
                  Learn more about the programme →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety (stand out more; text remains verbatim) */}
      <section className="pb-5">
        <div className="safety-callout border rounded p-4 p-lg-5">
          <div className="d-flex align-items-start gap-3">
            <div className="safety-badge" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2 4.5 5.5V12c0 5 3.5 9 7.5 10 4-1 7.5-5 7.5-10V5.5L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12l2 2 4-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex-grow-1">
              <h2 className="h3 fw-bold mb-2">Student safety is our priority</h2>

              <div className="d-grid gap-2">
                <div className="d-flex gap-2 align-items-start">
                  <span className="mark-tick" aria-hidden="true">
                    ✓
                  </span>
                  <div>Our lockable phone pouches do not use needles.</div>
                </div>

                <div className="d-flex gap-2 align-items-start">
                  <span className="mark-tick" aria-hidden="true">
                    ✓
                  </span>
                  <div>We use child-safe clips with locking technology.</div>
                </div>

                <div className="safety-emphasis mt-2">Student safety is our PRIORITY.</div>
              </div>

              <div className="mt-3">
                <Link href="/how-it-works" className="fw-semibold text-decoration-none">
                  Learn how it works →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO links (two columns; minimal copy; two primary links) */}
      <section className="pb-5">
        <h2 className="h3 fw-bold mb-3">Resources</h2>

        <div className="row g-3">
          {/* Column 1: Primary audiences + small links */}
          <div className="col-12 col-lg-6">
            <div className="border rounded p-4 h-100 bg-white">
              <div className="d-grid gap-2">
                <Link href="/programme" className="resource-primary">
                  For principals: programme overview →
                </Link>
                <Link href="/implementation-guide" className="resource-primary">
                  For administrators: implementation guide →
                </Link>
              </div>

              <hr className="my-4" />

              <ul className="list-unstyled m-0 d-grid gap-2">
                <li>
                  <Link href="/how-it-works" className="resource-secondary">
                    For teachers: classroom routine in 3 steps
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="resource-secondary">
                    Pricing and unlocking bases
                  </Link>
                </li>
                <li>
                  <Link href="/resources/parents-guide" className="resource-secondary">
                    For parents: what students do each day
                  </Link>
                </li>
                <li>
                  <Link href="/customisation" className="resource-secondary">
                    Customisation options
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Singapore context + updates */}
          <div className="col-12 col-lg-6">
            <div className="border rounded p-4 h-100 bg-white">
              <ul className="list-unstyled m-0 d-grid gap-2">
                <li>
                  <Link
                    href="/resources/singapore-school-phone-policy"
                    className="resource-secondary"
                  >
                    Singapore schools: phone policies and phone-free spaces
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/phone-free-spaces-in-schools"
                    className="resource-secondary"
                  >
                    Phone-free spaces in schools: classrooms, halls and assemblies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/phone-pouches-for-ccas-camps"
                    className="resource-secondary"
                  >
                    CCAs and camps: managing phones with pouches
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/exams-phone-compliance"
                    className="resource-secondary"
                  >
                    Exams: visible phone compliance routine
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/phone-pouches-vs-phone-lockers"
                    className="resource-secondary"
                  >
                    Phone pouches vs phone lockers in schools
                  </Link>
                </li>
                <li>
                  <Link href="/resources/updates" className="resource-secondary">
                    Updates
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="resource-secondary">
                    View all resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison teaser */}
      <section className="pb-5">
        <h2 className="h3 fw-bold">Considering phone lockers instead?</h2>
        <p className="text-muted mt-2">
          See why our phone pouches are easier to manage in schools.
        </p>

        <div className="row g-3 mt-1">
          <div className="col-12 col-lg-6">
            <Link
              href="/programme#programme-vs-phone-lockers"
              className="text-decoration-none"
            >
              <div className="border rounded p-4 h-100 bg-white">
                <div className="fw-semibold">Programme vs Phone Lockers</div>
                <div className="text-muted mt-2">
                  Control of distraction, flexibility across spaces, operations, and more.
                </div>
                <div className="mt-3 text-primary fw-semibold">View comparison →</div>
              </div>
            </Link>
          </div>

          <div className="col-12 col-lg-6">
            <Link href="/programme" className="text-decoration-none">
              <div className="border rounded p-4 h-100 bg-white">
                <div className="fw-semibold">Programme overview</div>
                <div className="text-muted mt-2">
                  The full rationale, how it works, and what schools can expect.
                </div>
                <div className="mt-3 text-primary fw-semibold">View overview →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-5">
        <div className="cta-wrap border rounded p-4 p-lg-5 bg-light text-center">
          <div className="cta-inner mx-auto">
            <h2 className="display-6 fw-bold mb-2">
              For interested schools: Please contact us immediately to roll out in 2026!
            </h2>

            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center mt-3">
              <Link
                href="/contact"
                className="btn btn-primary btn-lg px-4 d-inline-flex align-items-center justify-content-center"
                style={{ minHeight: 52, minWidth: 240 }}
              >
                Book a demo
              </Link>
              <a
                href={buildWhatsAppUrl()}
                className="btn btn-outline-primary btn-lg px-4 d-inline-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
                style={{ minHeight: 52, minWidth: 240 }}
              >
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}