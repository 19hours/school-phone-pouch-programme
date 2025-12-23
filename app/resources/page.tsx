// app/resources/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | SG School Phone Pouch Programme",
  description:
    "Practical resources for Singapore schools planning phone-free spaces, consistent routines, and implementation details.",
  alternates: { canonical: "/resources" },
};

type ResourceLink = {
  href: string;
  title: string;
  description: string;
};

const resources: ResourceLink[] = [
  {
    href: "/resources/singapore-school-phone-policy",
    title: "Singapore schools: phone policies and phone-free spaces",
    description:
      "A concise overview of public guidance and examples, and how schools translate policy into routines.",
  },
  {
    href: "/resources/phone-free-spaces-in-schools",
    title: "Phone-free spaces in schools: classrooms, halls and assemblies",
    description:
      "How to define phone-free spaces and make compliance simple to run across locations.",
  },
  {
    href: "/resources/phone-pouches-for-ccas-camps",
    title: "CCAs and camps: managing phones with pouches",
    description:
      "Applying one consistent routine beyond classrooms, including CCAs, camps and off-site activities.",
  },
  {
    href: "/resources/exams-phone-compliance",
    title: "Exams: visible phone compliance routine",
    description:
      "Planning notes for exam venues and exam centres where expectations must be clear and easy to audit.",
  },
  {
    href: "/resources/phone-pouches-vs-phone-lockers",
    title: "Phone pouches vs phone lockers",
    description:
      "A full side-by-side comparison table for school leaders deciding between approaches.",
  },
  {
    href: "/resources/updates",
    title: "Updates",
    description:
      "Dated Singapore context and references related to school phone/device-use guidance.",
  },
  {
    href: "/resources/phone-pouches-vs-yondr",
    title: "Phone pouches vs Yondr",
    description:
      "A comparison guide for schools evaluating phone-locking pouch approaches: safety, procurement, customisation, and operations.",
  },
];

export default function ResourcesIndexPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Resources</h1>
      <p className="text-muted mb-4">
        Practical reading for principals and administrators planning phone-free spaces,
        routines, and rollout steps in Singapore schools.
      </p>

      <div className="d-grid gap-3">
        {resources.map((r) => (
          <article key={r.href} className="bg-white rounded p-4">
            <h2 className="h4 fw-bold mb-2">
              <Link href={r.href} className="text-decoration-none">
                {r.title}
              </Link>
            </h2>
            <p className="text-muted mb-3">{r.description}</p>
            <Link href={r.href} className="resource-secondary">
              Read this resource →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-5">
        <h2 className="h4 fw-bold mb-3">Want the programme detail and rollout steps?</h2>
        <p className="mb-0">
          Start with the{" "}
          <Link href="/programme" className="resource-secondary">
            programme overview for school leaders
          </Link>
          ,{" "}
          <Link href="/how-it-works" className="resource-secondary">
            how to manage phone usage in three steps
          </Link>
          , and the{" "}
          <Link href="/implementation-guide" className="resource-secondary">
            implementation guide for administrators
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
