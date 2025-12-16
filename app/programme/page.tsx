// app/programme/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Programme overview | SG School Phone Pouch Programme",
  description:
    "A consistent, easy-to-audit phone management solution for schools: visible compliance, student peace of mind, and flexible use across spaces.",
  alternates: { canonical: "/programme" },
};

export default function ProgrammePage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">What is the School Phone Pouch Programme</h1>
      <p className="text-muted mb-4">
        The School Phone Pouch Programme is a school-wide phone management routine designed for phone-free
        spaces. Each student uses a personal lockable phone pouch, and unlocks only at approved times using
        an unlocking base.
      </p>

      {/* What it is (clear, compact) */}
      <div className="bg-light rounded p-4">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-lg-8">
            <div className="fw-semibold mb-1">Easy and seamless way to manage students phones</div>
            <div className="text-muted">
              Phone-free spaces become simple to run: students lock phones on entry, keep pouches with them,
              and unlock only at approved times at designated bases.
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded p-3">
              <div className="small text-muted mb-1">Need the 3-step routine?</div>
              <Link href="/how-it-works" className="resource-secondary">
                How it works →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How schools implement (must match infodeck bullets) */}
      <section className="mt-4">
        <h2 className="h3 fw-bold mb-3">How do schools implement the School Phone Pouch Programme?</h2>

        <div className="bg-white rounded p-4">
          <ul className="mb-0">
            <li className="mb-2">
              Each student places their phone into a personal phone pouch as they enter a phone-free space.
            </li>
            <li className="mb-2">
              The pouch uses a safe clip mechanism, and can be unlocked using a magnetic base when students
              are allowed to use their phones again.
            </li>
            <li className="mb-2">Pouch stays with the student entire day, easy to show the phone is secured.</li>
            <li className="mb-2">Can be unlocked by admin staff during emergencies.</li>
            <li className="mb-0">Enables fast, visual compliance checks for teachers and administrators.</li>
          </ul>
        </div>

        <div className="mt-3 text-muted">
          Next:{" "}
          <Link href="/implementation-guide" className="resource-secondary">
            implementation guide for rollout planning
          </Link>
          .
        </div>
      </section>

      {/* What it means for each stakeholder (no new claims; reframe benefits already stated) */}
      <section className="mt-4" aria-label="What it means for different stakeholders">
        <h2 className="h3 fw-bold mb-3">What it means for your school community</h2>
        <p className="text-muted mb-4">
          A consistent routine works best when everyone understands what “good compliance” looks like day to day.
        </p>

        <div className="row g-3 align-items-stretch">
          <div className="col-12 col-lg-6">
            <div className="bg-white rounded p-4 h-100">
              <h3 className="h4 fw-bold mb-2">Principals</h3>
              <ul className="mb-0">
                <li className="mb-2">A consistent approach for phone-free spaces that is simple to explain.</li>
                <li className="mb-2">Fast, visible compliance checks that reduce day-to-day ambiguity.</li>
                <li className="mb-0">
                  A programme that can be applied across spaces as part of a school-wide routine.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="bg-white rounded p-4 h-100">
              <h3 className="h4 fw-bold mb-2">Vice-Principals (VPs) and leadership teams</h3>
              <ul className="mb-0">
                <li className="mb-2">Clear operational expectations for staff: what to check and when.</li>
                <li className="mb-2">A routine that is consistent across classes, reducing negotiation.</li>
                <li className="mb-0">
                  Practical planning around unlocking locations to support orderly flow.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="bg-white rounded p-4 h-100">
              <h3 className="h4 fw-bold mb-2">School administrators and operations</h3>
              <ul className="mb-0">
                <li className="mb-2">Simple rollout: issue pouches, brief staff and students.</li>
                <li className="mb-2">
                  A clear plan for quantities, base locations, and top-ups for new cohorts.
                </li>
                <li className="mb-0">Admin staff can unlock pouches during emergencies.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="bg-white rounded p-4 h-100">
              <h3 className="h4 fw-bold mb-2">Teachers</h3>
              <ul className="mb-0">
                <li className="mb-2">Quick visual checks rather than handling phones.</li>
                <li className="mb-2">
                  Phones are physically present but not accessible, reducing under-the-table use.
                </li>
                <li className="mb-0">A consistent start-of-lesson routine across classes.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="bg-white rounded p-4 h-100">
              <h3 className="h4 fw-bold mb-2">Students</h3>
              <ul className="mb-0">
                <li className="mb-2">Phones stay with students, but cannot be used in phone-free spaces.</li>
                <li className="mb-2">No keys to manage – the lock is built into the pouch.</li>
                <li className="mb-0">Unlocking happens at approved times at designated locations.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="bg-white rounded p-4 h-100">
              <h3 className="h4 fw-bold mb-2">Parents</h3>
              <ul className="mb-0">
                <li className="mb-2">A simple message: in phone-free spaces, phones are secured in a locked pouch.</li>
                <li className="mb-2">Phones are present with students, but not used during lessons.</li>
                <li className="mb-0">Clear expectations about when phones can be unlocked again.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next steps links (tight, helpful) */}
      <div className="mt-4 bg-light rounded p-4">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-lg-8">
            <div className="fw-semibold mb-1">Next steps</div>
            <div className="text-muted">
              Review the routine and rollout plan, then confirm quantities and base locations.
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column gap-2">
            <Link
              href="/implementation-guide"
              className="btn btn-outline-primary d-inline-flex align-items-center justify-content-center"
              style={{ minHeight: 44 }}
            >
              Implementation guide
            </Link>
            <Link
              href="/pricing"
              className="btn btn-outline-primary d-inline-flex align-items-center justify-content-center"
              style={{ minHeight: 44 }}
            >
              Pricing
            </Link>
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
    </div>
  );
}