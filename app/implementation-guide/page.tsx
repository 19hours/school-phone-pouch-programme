// app/implementation-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Implementation guide | SG School Phone Pouch Programme",
  description:
    "A practical rollout plan: decide phone-free spaces, confirm quantities and base locations, prepare messaging, practise routines, and refine after the first term.",
  alternates: { canonical: "/implementation-guide" },
};

function FlowArrow() {
  return (
    <div className="d-flex justify-content-center my-3" aria-hidden="true">
      <div className="bg-light rounded-pill px-3 py-2">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="text-muted"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label=""
        >
          <path
            d="M12 5v12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 13l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function ImplementationGuidePage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Implementation guide</h1>
      <p className="text-muted mb-4">
        Simple rollout: issue pouches, brief staff and students.
      </p>

      {/* Quick orientation */}
      <div className="bg-light rounded p-4">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-lg-8">
            <div className="fw-semibold mb-1">What this guide helps you do</div>
            <div className="text-muted">
              Use these five steps to turn “phone-free spaces” into a consistent routine:
              define where phones are not used, set clear unlocking points, prepare messaging,
              practise for one to two weeks, then refine after the first term.
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded p-3">
              <div className="small text-muted mb-1">Start here if you need context</div>
              <Link href="/how-it-works" className="resource-secondary">
                How to manage phone usage in three steps →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Flow-style steps */}
      <section className="mt-4" aria-label="Implementation steps">
        {/* Step 1 */}
        <div className="bg-white rounded p-4">
          <div className="d-flex align-items-start gap-3">
            <div
              className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: 44, height: 44 }}
              aria-hidden="true"
            >
              <span className="fw-bold">1</span>
            </div>

            <div className="w-100">
              <h2 className="h4 fw-bold mb-2">Decide where phones must be put away</h2>
              <p className="mb-3">
                Identify which spaces should be phone-free (for example, all classrooms,
                certain levels, assembly hall) and when phones are not to be used.
              </p>

              <div className="row g-3">
                <div className="col-12 col-lg-7">
                  <ul className="mb-0">
                    <li className="mb-2">Align with your existing mobile phone and PLD policies.</li>
                    <li className="mb-0">Clarify exceptions such as medical or learning-related use.</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="bg-light rounded p-3">
                    <div className="fw-semibold mb-1">Practical outcome</div>
                    <div className="text-muted">
                      A short list of phone-free spaces and times that staff can apply consistently
                      across lessons and school routines.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FlowArrow />

        {/* Step 2 */}
        <div className="bg-white rounded p-4">
          <div className="d-flex align-items-start gap-3">
            <div
              className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: 44, height: 44 }}
              aria-hidden="true"
            >
              <span className="fw-bold">2</span>
            </div>

            <div className="w-100">
              <h2 className="h4 fw-bold mb-2">Confirm quantities and unlocking base locations</h2>
              <p className="mb-3">
                Estimate student numbers and decide where unlocking bases should be installed,
                for example near classroom exits, the hall or the general office.
              </p>

              <div className="row g-3">
                <div className="col-12 col-lg-7">
                  <ul className="mb-0">
                    <li className="mb-2">Plan number of pouches by level, including buffer units.</li>
                    <li className="mb-0">
                      Ensure students have a clear path to unlock when they are allowed to use their phones.
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="bg-light rounded p-3">
                    <div className="fw-semibold mb-1">Practical outcome</div>
                    <div className="text-muted">
                      A simple floor plan decision: where students unlock (approved locations), and
                      how they move in/out of phone-free spaces without congestion.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-muted">
                Related:{" "}
                <Link href="/pricing" className="resource-secondary">
                  pricing starts at $16 per pouch (quantity-dependent)
                </Link>
                .
              </div>
            </div>
          </div>
        </div>

        <FlowArrow />

        {/* Step 3 */}
        <div className="bg-white rounded p-4">
          <div className="d-flex align-items-start gap-3">
            <div
              className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: 44, height: 44 }}
              aria-hidden="true"
            >
              <span className="fw-bold">3</span>
            </div>

            <div className="w-100">
              <h2 className="h4 fw-bold mb-2">Prepare staff, parent and student messages</h2>
              <p className="mb-3">
                Agree on simple, consistent phrases to explain the routine: when phones go into
                pouches, when they must stay locked, and when they can be unlocked.
              </p>

              <div className="row g-3">
                <div className="col-12 col-lg-7">
                  <ul className="mb-0">
                    <li className="mb-2">Staff briefing for leadership, HODs and form teachers.</li>
                    <li className="mb-2">Parent letter or email explaining the routine and rationale.</li>
                    <li className="mb-0">Student assembly announcement or form class briefing.</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="bg-light rounded p-3">
                    <div className="fw-semibold mb-1">Messaging tip</div>
                    <div className="text-muted">
                      Keep it operational and visible: what students do on entry, what “locked” means during
                      phone-free time, and where/when unlocking happens.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FlowArrow />

        {/* Step 4 */}
        <div className="bg-white rounded p-4">
          <div className="d-flex align-items-start gap-3">
            <div
              className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: 44, height: 44 }}
              aria-hidden="true"
            >
              <span className="fw-bold">4</span>
            </div>

            <div className="w-100">
              <h2 className="h4 fw-bold mb-2">Issue pouches and practise the routine</h2>
              <p className="mb-3">
                Distribute pouches by class or level and practise the sequence for the first one to two weeks:
              </p>

              <div className="bg-light rounded p-4">
                <div className="fw-semibold mb-2">The routine to practise</div>
                <ul className="mb-0">
                  <li className="mb-2">On entry to phone-free spaces, phones go into pouches.</li>
                  <li className="mb-2">
                    While students are in those spaces, pouches remain locked and phones are not used.
                  </li>
                  <li className="mb-0">
                    When allowed to use phones, students step outside to an unlocking base to open their pouches.
                  </li>
                </ul>
              </div>

              <div className="mt-3 text-muted">
                If you want the simple three-step description for staff training, refer to{" "}
                <Link href="/how-it-works" className="resource-secondary">
                  How it works
                </Link>
                .
              </div>
            </div>
          </div>
        </div>

        <FlowArrow />

        {/* Step 5 */}
        <div className="bg-white rounded p-4">
          <div className="d-flex align-items-start gap-3">
            <div
              className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: 44, height: 44 }}
              aria-hidden="true"
            >
              <span className="fw-bold">5</span>
            </div>

            <div className="w-100">
              <h2 className="h4 fw-bold mb-2">Review and refine after the first term</h2>
              <p className="mb-3">Gather feedback from staff and students and adjust as needed.</p>

              <div className="row g-3">
                <div className="col-12 col-lg-7">
                  <ul className="mb-0">
                    <li className="mb-2">
                      Check whether base locations and routines are practical and enforceable.
                    </li>
                    <li className="mb-0">
                      Plan top-ups and replacements for pouches for future intakes.
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="bg-light rounded p-3">
                    <div className="fw-semibold mb-1">Practical outcome</div>
                    <div className="text-muted">
                      A refined routine that staff can sustain day-to-day, with clear expectations across spaces.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-muted">
                Considering differentiation by levels or identification? See{" "}
                <Link href="/customisation" className="resource-secondary">
                  Customisation
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful links (kept, but tighter) */}
      <div className="mt-4">
        <p className="text-muted mb-0">
          Helpful next reads:{" "}
          <Link href="/how-it-works" className="resource-secondary">
            How to manage phone usage in three steps
          </Link>
          ,{" "}
          <Link href="/pricing" className="resource-secondary">
            Pricing and unlocking bases
          </Link>
          ,{" "}
          <Link href="/customisation" className="resource-secondary">
            Customisation options
          </Link>
          .
        </p>
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