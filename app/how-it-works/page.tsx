// app/how-it-works/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "How it works | SG School Phone Pouch Programme",
  description:
    "Three simple steps: phone goes into pouch on entry, pouch stays locked during lesson, unlock at an approved base when allowed.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">How it works</h1>
      <p className="text-muted mb-4">
        A simple routine that creates fast, visible compliance checks for teachers and administrators.
      </p>

      {/* Flow summary */}
      <div className="bg-light rounded p-4">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-lg-8">
            <div className="fw-semibold mb-1">How to manage phone usage in three steps</div>
            <div className="text-muted">
              Phone goes into pouch on entry → pouch stays locked in the phone-free space → unlock at an approved
              base when allowed.
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded p-3">
              <div className="small text-muted mb-1">Need rollout steps?</div>
              <Link href="/implementation-guide" className="resource-secondary">
                Use the implementation guide →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Steps: force 3 columns on lg */}
      <div className="mt-4">
        <div className="row g-3 align-items-stretch">
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded p-4 h-100">
              <div className="d-flex align-items-start gap-3 mb-2">
                <div
                  className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: 44, height: 44 }}
                  aria-hidden="true"
                >
                  <span className="fw-bold">1</span>
                </div>
                <div>
                  <h2 className="h4 fw-bold mb-1">Phone goes into pouch on entry</h2>
                  <div className="text-muted">At the start of the phone-free session</div>
                </div>
              </div>

              <p className="mb-3">
                When students enter a phone-free space (for example, a classroom or assembly hall), they place
                their phones into their personal pouches.
              </p>

              <ul className="mb-0">
                <li className="mb-2">Each student has a clearly labelled pouch.</li>
                <li className="mb-2">Teachers do a quick visual check rather than handling phones.</li>
                <li className="mb-0">This becomes part of the normal start-of-lesson or start-of-day routine.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="bg-white rounded p-4 h-100">
              <div className="d-flex align-items-start gap-3 mb-2">
                <div
                  className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: 44, height: 44 }}
                  aria-hidden="true"
                >
                  <span className="fw-bold">2</span>
                </div>
                <div>
                  <h2 className="h4 fw-bold mb-1">Pouch stays locked during lesson</h2>
                  <div className="text-muted">Phones are present, but not accessible</div>
                </div>
              </div>

              <p className="mb-3">
                While students are in the phone-free space, the pouch remains locked. They keep the pouch with
                them, but cannot access their phones.
              </p>

              <ul className="mb-0">
                <li className="mb-2">No keys to manage – the lock is built into the pouch.</li>
                <li className="mb-2">
                  The clip design avoids needles or sharp points, making it more child-friendly than some
                  pin-and-lock solutions.
                </li>
                <li className="mb-0">
                  Phones are physically present but not available, reducing under-the-table use and distraction.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="bg-white rounded p-4 h-100">
              <div className="d-flex align-items-start gap-3 mb-2">
                <div
                  className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: 44, height: 44 }}
                  aria-hidden="true"
                >
                  <span className="fw-bold">3</span>
                </div>
                <div>
                  <h2 className="h4 fw-bold mb-1">Unlock at a base when allowed</h2>
                  <div className="text-muted">Only at approved times and locations</div>
                </div>
              </div>

              <p className="mb-3">
                When students are allowed to use their phones (for example, at dismissal or at designated times),
                they step outside the phone-free zone and tap their pouch on an unlocking base.
              </p>

              <ul className="mb-0">
                <li className="mb-2">Unlocking bases are installed at locations chosen by the school.</li>
                <li className="mb-2">Students unlock only at approved times, supporting consistent expectations.</li>
                <li className="mb-0">
                  The same routine applies across classes, reducing confusion and negotiation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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

      <div className="mt-4 text-muted">
        Related resources:{" "}
        <Link href="/resources/phone-free-spaces-in-schools" className="resource-secondary">
          phone-free spaces in schools
        </Link>
        ,{" "}
        <Link href="/resources/exams-phone-compliance" className="resource-secondary">
          exams: visible phone compliance routine
        </Link>
        .
      </div>
    </div>
  );
}