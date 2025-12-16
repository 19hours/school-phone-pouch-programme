// app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Pricing | SG School Phone Pouch Programme",
  description: "Pricing starts at $16 per pouch. Confirm quantities and unlocking base needs for your school rollout.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Pricing</h1>
      <p className="text-muted mb-4">
        Pricing starts at <strong>$16 per pouch</strong>, depending on order quantity. Contact us to confirm
        your school’s quantities, rollout scope, and unlocking base needs.
      </p>

      <section className="mt-4">
        <div className="row g-3 align-items-stretch">
          {/* Pricing overview */}
          <div className="col-12 col-lg-7">
            <div className="bg-white rounded p-4 h-100">
              <h2 className="h4 fw-bold mb-3">Pricing overview</h2>

              <div className="bg-light rounded p-4">
                <div className="small text-muted">Starting from</div>
                <div className="display-6 fw-bold mb-1">$16</div>
                <div className="text-muted">Per pouch. Final unit price depends on quantity ordered.</div>
              </div>

              <div className="mt-4">
                <h3 className="h5 fw-bold mb-2">What schools usually confirm first</h3>
                <ul className="mb-0">
                  <li className="mb-2">Estimated number of students / pouches required</li>
                  <li className="mb-2">Whether rollout is full-school or phased by level/cohort</li>
                  <li className="mb-0">
                    Any selected options from{" "}
                    <Link href="/customisation" className="resource-secondary">
                      customisation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-4 bg-light rounded p-4">
                <h3 className="h5 fw-bold mb-2">How schools usually choose a tier</h3>
                <p className="text-muted mb-3">
                  Start with student numbers, then add a small buffer. If you are rolling out by level, total
                  the cohorts you are including in the first phase.
                </p>
                <ul className="mb-0">
                  <li className="mb-2">
                    <span className="fw-semibold">Full school or multi-level rollout:</span> typically
                    qualifies for the lowest unit price.
                  </li>
                  <li className="mb-2">
                    <span className="fw-semibold">Single level or phased rollout:</span> commonly sits in
                    mid-volume pricing.
                  </li>
                  <li className="mb-0">
                    <span className="fw-semibold">Pilot or smaller cohorts:</span> uses small-batch pricing.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Unlocking bases (keep visible) */}
          <div className="col-12 col-lg-5">
            <div className="bg-white rounded p-4 h-100">
              <h2 className="h4 fw-bold mb-3">Unlocking bases</h2>

              <div className="bg-light rounded p-4">
                <p>We include free unlocking bases for school purchases.</p>
              </div>

              <div className="mt-4">
                <h3 className="h5 fw-bold mb-2">Plan your base locations</h3>
                <p className="text-muted mb-2">
                  Schools usually decide where unlocking bases should be installed (for example near classroom
                  exits, the hall or the general office).
                </p>
                <Link href="/implementation-guide" className="resource-secondary">
                  Use the implementation guide →
                </Link>
              </div>

              <div className="mt-4">
                <h3 className="h5 fw-bold mb-2">Clarifier</h3>
                <p className="mb-0">
                  Pricing shown here is a starting point. Final quotes confirm quantities and any selected
                  options.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Helpful internal links */}
        <div className="mt-4">
          <p className="text-muted mb-0">
            Useful next reads:{" "}
            <Link href="/how-it-works" className="resource-secondary">
              how to manage phone usage in three steps
            </Link>
            ,{" "}
            <Link href="/implementation-guide" className="resource-secondary">
              implementation guide
            </Link>
            ,{" "}
            <Link href="/customisation" className="resource-secondary">
              customisation options
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Standard CTA (required) */}
      <div className="mt-4 bg-light rounded p-4 d-flex flex-column flex-sm-row gap-2 justify-content-between align-items-sm-center">
        <div className="fw-semibold">Want to see it in your school setting?</div>
        <div className="d-flex flex-column flex-sm-row gap-2">
          <Link
            href="/contact"
            className="btn btn-primary px-4 d-inline-flex align-items-center justify-content-center"
            style={{ minHeight: 44, minWidth: 180 }}
          >
            Book a demo and confirm pricing
          </Link>
          <a
            href={buildWhatsAppUrl()}
            className="btn btn-outline-primary px-4 d-inline-flex align-items-center justify-content-center"
            style={{ minHeight: 44, minWidth: 180 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us for pricing
          </a>
        </div>
      </div>
    </div>
  );
}