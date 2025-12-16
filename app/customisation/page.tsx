// app/customisation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Customisation | SG School Phone Pouch Programme",
  description:
    "Pouch colour options, name card holder, and school logo printing for qualifying quantities.",
  alternates: { canonical: "/customisation" },
};

export default function CustomisationPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Customisation</h1>
      <p className="text-muted mb-4">
        Choose the options that fit your rollout. Costs and minimums are shown exactly as offered.
      </p>

      <section className="mt-4">
        <div className="row g-3 align-items-stretch">
          {/* Pouch colour */}
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded p-4 h-100">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <h2 className="h4 fw-bold mb-0">Pouch colour</h2>
                <span className="badge text-bg-light border">Recommended for levels</span>
              </div>

              <p className="mb-2">
                Useful for differentiating different student levels (P1 → Green, P2 → Yellow etc.)
              </p>
              <div className="text-muted mb-3">
                Choose from: Red, Orange, Yellow, Green, Blue, Indigo, Purple, Black, Grey.
              </div>

              <div className="mt-auto bg-light rounded p-3">
                <div className="small text-muted">Cost</div>
                <div className="fw-semibold">Free for quantities above 1000.</div>
              </div>
            </div>
          </div>

          {/* Name card holder */}
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded p-4 h-100">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <h2 className="h4 fw-bold mb-0">Name card holder</h2>
                <span className="badge text-bg-light border">Easy identification</span>
              </div>

              <p className="mb-3">Useful for students to see who the pouch belongs to</p>

              <div className="mt-auto bg-light rounded p-3">
                <div className="small text-muted">Cost</div>
                <div className="fw-semibold">+ $0.50 per pouch</div>
              </div>
            </div>
          </div>

          {/* School logo printing */}
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded p-4 h-100">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <h2 className="h4 fw-bold mb-0">School logo printing</h2>
                <span className="badge text-bg-light border">Single colour print</span>
              </div>

              <p className="mb-3">
                Add your school logo (single colour print) on every pouch for more personalisation!
              </p>

              <div className="mt-auto bg-light rounded p-3">
                <div className="small text-muted">Cost / minimum</div>
                <div className="fw-semibold">+ $0.50 per pouch, minimum quantity is 1000</div>
              </div>
            </div>
          </div>
        </div>

        {/* Helpful links */}
        <div className="mt-4 bg-light rounded p-4">
          <div className="row g-3 align-items-center">
            <div className="col-12 col-md-8">
              <div className="fw-semibold mb-1">Planning quantities?</div>
              <div className="text-muted">
                Review pricing tiers and the rollout steps, then contact us to confirm your options.
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column gap-2">
              <Link
                href="/pricing"
                className="btn btn-outline-primary px-4 d-inline-flex align-items-center justify-content-center"
                style={{ minHeight: 44 }}
              >
                View pricing
              </Link>
              <Link
                href="/implementation-guide"
                className="btn btn-outline-primary px-4 d-inline-flex align-items-center justify-content-center"
                style={{ minHeight: 44 }}
              >
                Implementation guide
              </Link>
            </div>
          </div>
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
            Book a demo
          </Link>
          <a
            href={buildWhatsAppUrl()}
            className="btn btn-outline-primary px-4 d-inline-flex align-items-center justify-content-center"
            style={{ minHeight: 44, minWidth: 180 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </div>
  );
}