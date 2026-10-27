// app/how-it-works/page.tsx
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRightIcon, CheckIcon, LockIcon, PhoneIcon, ShieldIcon } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "How School Phone Pouches Work: The 3-Step Routine",
  description:
    "Phones go into a lockable pouch on entry, stay locked during lessons, and unlock on a magnetic base at approved times. The 3-step routine for Singapore schools.",
  path: "/how-it-works",
});

const steps = [
  {
    tag: "On entry",
    title: "Phone goes into the pouch",
    text: "As students enter a phone-free space, such as a classroom or the hall, they put their phone in their own labelled pouch and clip it shut.",
    points: [
      "Each student has their own clearly labelled pouch.",
      "Teachers do a quick visual check instead of handling phones.",
      "It becomes part of the normal start of the lesson or day.",
    ],
  },
  {
    tag: "During lessons",
    title: "The pouch stays locked, with the student",
    text: "Students keep the pouch with them, but can’t reach their phone until they leave the phone-free space.",
    points: [
      "No keys to manage. The lock is built into the pouch.",
      "A child-safe clip, with no needles or sharp points.",
      "Less under-the-table use and distraction.",
    ],
  },
  {
    tag: "At approved times",
    title: "Unlock on the base",
    text: "When phones are allowed, such as at dismissal, students step outside the phone-free space and tap the pouch on an unlocking base.",
    points: [
      "Bases go wherever the school chooses.",
      "Unlocking happens only at approved times.",
      "The same routine in every class means less negotiation.",
    ],
  },
];

const extras = [
  { icon: <ShieldIcon />, title: "Emergency unlock", text: "Admin staff can unlock pouches during emergencies." },
  { icon: <PhoneIcon />, title: "Fits every phone", text: "Compatible with all phone models." },
  { icon: <LockIcon />, title: "Works in any space", text: "Classrooms, halls, exams, CCAs and camps." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How school phone pouches work"
        lead="A simple three-step routine. Teachers can see at a glance that phones are put away."
      />

      <div>
        {steps.map((s, i) => (
          <section key={s.title} className="feature-row row g-4 g-lg-5 align-items-start">
            <div className="col-12 col-lg-6">
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              <div className="step-tag mt-3">{s.tag}</div>
              <h2>{s.title}</h2>
              <p className="section-lead">{s.text}</p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="tile">
                <ul className="checklist">
                  {s.points.map((p) => (
                    <li key={p}>
                      <CheckIcon size={18} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="page-block">
        <h2 className="block-title mb-4">Good to know</h2>
        <div className="row g-5">
          {extras.map((e) => (
            <div key={e.title} className="col-12 col-md-4 benefit">
              <span className="icon-tile icon-tile--safe">{e.icon}</span>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
        <div className="d-flex flex-wrap gap-4 mt-5">
          <Link href="/implementation-guide" className="link-arrow">
            Getting started <ArrowRightIcon size={16} />
          </Link>
          <Link href="/resources/phone-free-spaces-in-schools" className="link-arrow">
            Defining phone-free spaces <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>

      <CtaBand className="page-block" />
    </>
  );
}
