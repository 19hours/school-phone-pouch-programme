// app/resources/phone-free-spaces-in-schools/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/components/RelatedResources";

export const metadata: Metadata = {
  title:
    "Phone-free spaces in schools: classrooms, halls and assemblies | SG School Phone Pouch Programme",
  description:
    "A planning guide for schools defining phone-free spaces and setting a consistent routine across classrooms, halls and assemblies.",
  alternates: { canonical: "/resources/phone-free-spaces-in-schools" },
};

export default function PhoneFreeSpacesInSchoolsPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">
        Phone-free spaces in schools: classrooms, halls and assemblies
      </h1>
      <p className="text-muted mb-4">
        This resource helps schools translate “no phone use” expectations into operational
        clarity: where phones are not used, what students do on entry, and how staff verify
        compliance quickly.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">Start with a clear definition</h2>
      <p className="mb-3">
        MOE has described an approach where schools develop mobile device rules based on
        student profiles and needs, rather than a single blanket rule across all schools. In
        practice, schools typically define phone-free spaces (for example, classrooms during
        lessons, assembly venues, selected common areas, and exam settings) and communicate
        when phones are allowed again.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">
        Make compliance visible and simple to check
      </h2>
      <p className="mb-3">
        Many school handbooks describe expectations such as devices switched off and kept out
        of sight during curriculum time. The operational challenge is making compliance easy
        to verify in the moment. Clear routines reduce negotiation, reduce exceptions, and
        make expectations predictable for students.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">
        How the SG School Phone Pouch Programme supports phone-free spaces
      </h2>
      <p className="mb-3">
        Once phone-free spaces are defined, schools often benefit from a repeatable routine
        that can be applied consistently across different settings. The SG School Phone Pouch
        Programme is designed around a simple routine: phones go into a personal locked pouch
        on entry to phone-free spaces, and unlock only at approved times using an unlocking
        base.
      </p>
      <p className="mb-0">
        For implementation detail, use{" "}
        <Link href="/how-it-works" className="resource-secondary">
          how to manage phone usage in three steps
        </Link>{" "}
        and the{" "}
        <Link href="/implementation-guide" className="resource-secondary">
          implementation guide for planning spaces, quantities and base locations
        </Link>
        . For leadership teams comparing options, see the{" "}
        <Link href="/resources/phone-pouches-vs-phone-lockers" className="resource-secondary">
          full phone pouches vs phone lockers comparison
        </Link>
        .
      </p>

      <div className="mt-5">
        <h2 className="h5 fw-bold mb-2">References</h2>
        <ol className="mb-0">
          <li className="mb-2">
            <a
              href="https://www.moe.gov.sg/news/parliamentary-replies/20180710-use-of-smartphones-in-schools"
              target="_blank"
              rel="noopener noreferrer"
            >
              MOE Parliamentary Reply (10 July 2018): “Use of Smartphones in Schools”
            </a>
          </li>
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
            href: "/resources/singapore-school-phone-policy",
            label: "Singapore schools: phone policies and phone-free spaces",
          },
          { href: "/resources/exams-phone-compliance", label: "Exams and exam centres" },
          { href: "/resources/updates", label: "Updates" },
        ]}
      />
    </div>
  );
}
