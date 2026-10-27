// app/programme/page.tsx
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRightIcon, CheckIcon, LockIcon, MagnetIcon, PaletteIcon } from "@/components/Icons";
import { QuoteButton } from "@/components/QuoteButton";

export const metadata: Metadata = pageMetadata({
  title: "Phone Pouch Programme for Singapore Schools",
  description:
    "A school-wide phone management routine for phone-free spaces: personal lockable pouches, a free unlocking base for every 100 pouches, and quick visual checks for teachers.",
  path: "/programme",
});

const included = [
  { icon: <LockIcon />, title: "Personal lockable pouches", text: "One per student, with a child-safe clip and no needles." },
  { icon: <MagnetIcon />, title: "Free unlocking bases", text: "One free for every 100 pouches, placed where your school chooses." },
  { icon: <PaletteIcon />, title: "Optional customisation", text: "Colours by level, school logo and name card holders." },
];

const audiences = [
  {
    who: "Principals",
    points: ["One approach for every phone-free space", "Compliance that is visible and easy to audit"],
  },
  {
    who: "Vice-principals and leadership",
    points: ["Clear expectations for staff on what to check", "The same routine across classes"],
  },
  {
    who: "Administrators and operations",
    points: ["Easy to set up: hand out pouches, brief staff and students", "Admin staff can unlock pouches in emergencies"],
  },
  {
    who: "Teachers",
    points: ["Quick visual checks, no handling phones", "A consistent start-of-lesson routine"],
  },
  {
    who: "Students",
    points: ["Phones stay with them, locked", "No keys to manage"],
  },
  {
    who: "Parents",
    points: ["Phones stay with their child, locked in class", "Clear rules on when phones can be used"],
  },
];

export default function ProgrammePage() {
  return (
    <>
      <PageHeader
        title="A school-wide routine for phone-free spaces"
        lead="Each student locks their phone in a personal pouch on entry and unlocks it only at approved times on an unlocking base."
      >
        <QuoteButton />
        <Link href="/how-it-works" className="btn btn-outline-primary btn-lg">
          See how it works
        </Link>
      </PageHeader>

      <section>
        <h2 className="block-title mb-4">What’s included</h2>
        <div className="row g-4">
          {included.map((i) => (
            <div key={i.title} className="col-12 col-md-4">
              <div className="tile">
                <span className="icon-tile">{i.icon}</span>
                <h3 className="mt-4">{i.title}</h3>
                <p>{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-block">
        <div className="section-head mb-4">
          <h2 className="block-title">What it means for your school community</h2>
          <p className="section-lead">Everyone knows what’s expected, every day.</p>
        </div>
        <div className="row g-5">
          {audiences.map((a) => (
            <div key={a.who} className="col-12 col-sm-6 col-lg-4">
              <h3 className="h5 fw-bold mb-3">{a.who}</h3>
              <ul className="checklist">
                {a.points.map((p) => (
                  <li key={p}>
                    <CheckIcon size={18} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="page-block">
        <h2 className="block-title mb-4">Next steps</h2>
        <div className="row g-4">
          {[
            { href: "/implementation-guide", title: "Getting started", text: "Five simple steps to get your school ready." },
            { href: "/pricing", title: "Check pricing", text: "How quantity affects price, and what’s free." },
            { href: "/resources/phone-pouches-vs-phone-lockers", title: "Compare options", text: "Pouches vs lockers, side by side." },
          ].map((l) => (
            <div key={l.href} className="col-12 col-md-4">
              <Link href={l.href} className="tile link-tile">
                <h3>{l.title}</h3>
                <p className="mb-3">{l.text}</p>
                <span className="link-arrow">
                  Read more <ArrowRightIcon size={16} />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CtaBand className="page-block" />
    </>
  );
}
