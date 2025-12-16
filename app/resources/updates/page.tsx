// app/resources/updates/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/components/RelatedResources";

export const metadata: Metadata = {
  title: "Updates | SG School Phone Pouch Programme",
  description:
    "Dated updates and Singapore context references related to student phone/device-use guidance and school routines.",
  alternates: { canonical: "/resources/updates" },
};

export default function UpdatesPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Updates</h1>
      <p className="text-muted mb-4">
        Dated references for Singapore school phone/device-use context, with links to practical
        programme pages for school leaders.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">
        30 November 2025: MOE expands smartphone/smartwatch restrictions for secondary schools
      </h2>
      <p className="mb-3">
        MOE announced enhanced measures relating to healthier screen use in students. A key
        point highlighted publicly is that guidance restricting smartphone/smartwatch use during
        lesson time would be broadened from <strong>January 2026</strong> to include non-lesson
        time during school hours, including recess and CCAs.
      </p>
      <p className="mb-3">
        If your school is updating routines for phone-free spaces, these pages provide the
        operational detail:{" "}
        <Link href="/programme" className="resource-secondary">
          programme overview for school leaders
        </Link>
        ,{" "}
        <Link href="/how-it-works" className="resource-secondary">
          how the phone pouch routine works in three steps
        </Link>
        , and{" "}
        <Link href="/implementation-guide" className="resource-secondary">
          the implementation guide for rollout planning
        </Link>
        .
      </p>

      <div className="mt-5">
        <h2 className="h5 fw-bold mb-2">References</h2>
        <ol className="mb-0">
          <li className="mb-2">
            <a
              href="https://www.moe.gov.sg/news/press-releases/20251130-moe-to-introduce-enhanced-measures-to-promote-healthier-screen-use-in-students"
              target="_blank"
              rel="noopener noreferrer"
            >
              MOE Press Release (30 November 2025): Enhanced measures to promote healthier
              screen use in students
            </a>
          </li>
          <li className="mb-0">
            <a
              href="https://www.channelnewsasia.com/singapore/secondary-school-can-use-phone-in-class-smartphone-screen-time-students-5495621"
              target="_blank"
              rel="noopener noreferrer"
            >
              Channel NewsAsia (30 November 2025): Secondary schools to forbid smartphone use
              during recess, CCA hours
            </a>
          </li>
        </ol>
      </div>

      <RelatedResources
        items={[
          {
            href: "/resources/singapore-school-phone-policy",
            label: "Singapore schools: phone policies and phone-free spaces",
          },
          {
            href: "/resources/phone-pouches-for-ccas-camps",
            label: "CCAs and camps",
          },
          {
            href: "/resources/phone-pouches-vs-phone-lockers",
            label: "Phone pouches vs phone lockers",
          },
        ]}
      />
    </div>
  );
}
