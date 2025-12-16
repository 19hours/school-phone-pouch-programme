// app/resources/exams-phone-compliance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/components/RelatedResources";

export const metadata: Metadata = {
  title: "Exams: visible phone compliance routine | SG School Phone Pouch Programme",
  description:
    "A planning resource for phone compliance in exam environments: define phone-free zones, set routines, and ensure clear expectations.",
  alternates: { canonical: "/resources/exams-phone-compliance" },
};

export default function ExamsPhoneCompliancePage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Exams: visible phone compliance routine</h1>
      <p className="text-muted mb-4">
        Exam venues are commonly treated as phone-free spaces. This resource points you to
        programme pages that help schools run consistent, visible compliance.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">Context: schools publish device expectations</h2>
      <p className="mb-3">
        Many schools publish device rules in student handbooks that limit phone use during
        curriculum time and set expectations such as devices switched off and kept out of
        sight. Schools should follow their own approved exam procedures and venue rules for
        specific examination settings.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">Linking exam venues to an easy-to-run routine</h2>
      <p className="mb-3">
        When exams are treated as phone-free spaces, the operational need is a routine that is
        predictable and easy to audit. On this site, the routine is described in{" "}
        <Link href="/how-it-works" className="resource-secondary">
          how to manage phone usage in three steps
        </Link>
        , and rollout considerations are covered in the{" "}
        <Link href="/implementation-guide" className="resource-secondary">
          implementation guide for administrators
        </Link>
        .
      </p>
      <p className="mb-0">
        If you are comparing approaches for exam venues, see the{" "}
        <Link href="/resources/phone-pouches-vs-phone-lockers" className="resource-secondary">
          full phone pouches vs phone lockers comparison
        </Link>
        .
      </p>

      <div className="mt-5">
        <h2 className="h5 fw-bold mb-2">References</h2>
        <ol className="mb-0">
          <li className="mb-0">
            <a
              href="https://temaseksec.moe.edu.sg/tms-family/student-handbook/mobile-phone-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Temasek Secondary School: Mobile Phone Policy (student handbook)
            </a>
          </li>
        </ol>
      </div>

      <RelatedResources
        items={[
          {
            href: "/resources/phone-free-spaces-in-schools",
            label: "Phone-free spaces in schools",
          },
          {
            href: "/resources/singapore-school-phone-policy",
            label: "Singapore schools: phone policies and phone-free spaces",
          },
          { href: "/resources/updates", label: "Updates" },
        ]}
      />
    </div>
  );
}
