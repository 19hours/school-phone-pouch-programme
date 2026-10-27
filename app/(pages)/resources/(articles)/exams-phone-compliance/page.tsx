// app/resources/exams-phone-compliance/page.tsx
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import RelatedResources from "@/components/RelatedResources";

export const metadata: Metadata = pageMetadata({
  title: "Phone Compliance During Exams: A Visible Routine",
  description:
    "How schools and exam venues can make phone compliance visible and easy to audit, with clear phone-free zones and a consistent pouch routine.",
  path: "/resources/exams-phone-compliance",
  type: "article",
});

export default function ExamsPhoneCompliancePage() {
  return (
    <div>
      <h1>Exams: visible phone compliance routine</h1>
      <p className="lead-text">
        Exam venues are commonly treated as phone-free spaces. This resource points you to
        programme pages that help schools run consistent, visible compliance.
      </p>

      <h2>Context: schools publish device expectations</h2>
      <p>
        Many schools publish device rules in student handbooks that limit phone use during
        curriculum time and set expectations such as devices switched off and kept out of
        sight. Schools should follow their own approved exam procedures and venue rules for
        specific examination settings.
      </p>

      <h2>Linking exam venues to an easy-to-run routine</h2>
      <p>
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
      <p>
        If you are comparing approaches for exam venues, see the{" "}
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
