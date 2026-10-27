// app/implementation-guide/page.tsx
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Implementation Guide: Rolling Out Phone Pouches in School",
  description:
    "A 5-step rollout plan for Singapore schools: define phone-free spaces, confirm quantities and unlocking base locations, brief staff and parents, practise and refine.",
  path: "/implementation-guide",
});

const steps = [
  {
    title: "Decide where phones must be put away",
    text: "Choose which spaces are phone-free, such as all classrooms, certain levels or the hall, and when.",
    points: ["Align with your existing phone and PLD policies.", "Agree exceptions, such as medical or learning use."],
    outcome: "A short list of phone-free spaces and times staff can apply consistently.",
  },
  {
    title: "Confirm quantities and unlocking base locations",
    text: "Estimate student numbers and choose where bases go, such as near classroom exits, the hall or the general office.",
    points: ["Plan pouches by level, with a few buffer units.", "Give students a clear path to unlock when allowed."],
    outcome: "Where students unlock, and how they move in and out without congestion.",
  },
  {
    title: "Prepare staff, parent and student messages",
    text: "Use the same simple phrases everywhere: when phones go in, when they stay locked, when they can be unlocked.",
    points: [
      "Staff briefing for leaders, HODs and form teachers.",
      "A parent letter or email explaining the routine.",
      "A form class briefing or assembly announcement.",
    ],
  },
  {
    title: "Issue pouches and practise the routine",
    text: "Hand out pouches by class or level and practise for the first one to two weeks.",
    points: [
      "On entry to phone-free spaces, phones go into pouches.",
      "In those spaces, pouches stay locked.",
      "When allowed, students unlock at a base outside.",
    ],
  },
  {
    title: "Review and refine after the first term",
    text: "Gather feedback from staff and students and adjust as needed.",
    points: ["Check base locations and routines are practical.", "Plan top-ups for new intakes."],
    outcome: "A routine staff can sustain day to day.",
  },
];

export default function ImplementationGuidePage() {
  return (
    <>
      <PageHeader
        title="Getting your school started"
        lead="Five simple steps to turn your phone policy into an everyday routine. Start with the whole school, or one level at a time."
      />

      <div className="row g-5">
        <div className="col-12 col-lg-8">
          <ol className="timeline">
            {steps.map((s) => (
              <li key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                <ul className="checklist">
                  {s.points.map((p) => (
                    <li key={p}>
                      <CheckIcon size={18} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {s.outcome && (
                  <p className="outcome">
                    <strong>Outcome:</strong> {s.outcome}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>

        <aside className="col-12 col-lg-4">
          <div className="side-card">
            <h2 className="h5 fw-bold mb-3">Helpful while planning</h2>
            <ul className="list-unstyled d-grid gap-3 m-0">
              <li>
                <Link href="/how-it-works" className="link-arrow">
                  The 3-step routine for staff <ArrowRightIcon size={16} />
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="link-arrow">
                  Pricing and unlocking bases <ArrowRightIcon size={16} />
                </Link>
              </li>
              <li>
                <Link href="/customisation" className="link-arrow">
                  Colours by level and logos <ArrowRightIcon size={16} />
                </Link>
              </li>
              <li>
                <Link href="/resources/parents-guide" className="link-arrow">
                  Parents’ guide <ArrowRightIcon size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <CtaBand className="page-block" />
    </>
  );
}
