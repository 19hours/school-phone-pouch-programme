// app/resources/phone-pouches-for-ccas-camps/page.tsx
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import RelatedResources from "@/components/RelatedResources";

export const metadata: Metadata = pageMetadata({
  title: "Managing Phones at CCAs and Camps with Phone Pouches",
  description:
    "Planning notes for managing student phones beyond lessons, including CCAs, camps and off-site activities, with one consistent pouch routine.",
  path: "/resources/phone-pouches-for-ccas-camps",
  type: "article",
});

export default function PhonePouchesForCCAsCampsPage() {
  return (
    <div>
      <h1>CCAs and camps: managing phones with pouches</h1>
      <p className="lead-text">
        This resource focuses on non-classroom settings where schools often want consistent
        expectations: CCAs, enrichment sessions, assemblies, camps and off-site activities.
      </p>

      <h2>
        Singapore context: expectations beyond lesson time
      </h2>
      <p>
        MOE announced that, from <strong>January 2026</strong>, guidance for secondary schools
        will broaden restrictions on smartphone/smartwatch use beyond lesson time to include
        non-lesson time during school hours (including recess and CCAs). Where expectations
        extend beyond lessons, operational consistency becomes more important: students need
        to know what to do, and staff need a routine that can work across different settings.
      </p>

      <h2>Applying one routine across different settings</h2>
      <p>
        If your school defines phone-free settings beyond classrooms (for example, CCAs, camps
        or assembly venues), it helps to brief staff and students with one routine that
        applies across spaces. For the SG School Phone Pouch Programme, the routine is
        described in{" "}
        <Link href="/how-it-works" className="resource-secondary">
          how to manage phone usage in three steps
        </Link>
        , and rollout steps are covered in the{" "}
        <Link href="/implementation-guide" className="resource-secondary">
          implementation guide for administrators
        </Link>
        .
      </p>
      <p>
        If you are comparing approaches for non-classroom settings, see the{" "}
        <Link href="/resources/phone-pouches-vs-phone-lockers" className="resource-secondary">
          full phone pouches vs phone lockers comparison
        </Link>
        .
      </p>

      <div>
        <h2>References</h2>
        <ol>
          <li>
            <a
              href="https://www.moe.gov.sg/news/press-releases/20251130-moe-to-introduce-enhanced-measures-to-promote-healthier-screen-use-in-students"
              target="_blank"
              rel="noopener noreferrer"
            >
              MOE Press Release (30 November 2025): Enhanced measures to promote healthier
              screen use in students
            </a>
          </li>
          <li>
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
            href: "/resources/phone-free-spaces-in-schools",
            label: "Phone-free spaces in schools",
          },
          { href: "/resources/updates", label: "Updates" },
        ]}
      />
    </div>
  );
}
