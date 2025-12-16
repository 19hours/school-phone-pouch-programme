// app/resources/singapore-school-phone-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/components/RelatedResources";

export const metadata: Metadata = {
  title:
    "Singapore schools: phone policies and phone-free spaces | SG School Phone Pouch Programme",
  description:
    "An evidence-led overview of school phone/device policies in Singapore and how schools define phone-free spaces and routines.",
  alternates: { canonical: "/resources/singapore-school-phone-policy" },
};

export default function SingaporeSchoolPhonePolicyPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">
        Singapore schools: phone policies and phone-free spaces
      </h1>
      <p className="text-muted mb-4">
        This resource summarises publicly available guidance and examples to support school
        leaders planning consistent routines for phone-free spaces.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">What national guidance generally emphasises</h2>
      <p className="mb-3">
        Singapore’s Ministry of Education (MOE) has stated that it provides guidance for
        schools to develop policies and rules to regulate mobile device use based on student
        profiles and needs, rather than applying a single blanket ban across all schools. In
        practice, that usually means each school defines where phones are not used, when
        phones are allowed again, and how compliance is expected to look during the school
        day.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">Latest update to secondary school guidance</h2>
      <p className="mb-3">
        In late 2025, MOE announced enhanced measures relating to healthier screen use in
        students. A key point highlighted publicly is that existing guidance restricting
        smartphone and smartwatch use during lesson time for secondary students would be
        broadened from <strong>January 2026</strong> to include non-lesson time during school
        hours, including recess and co-curricular activities (CCAs). Schools may still define
        how this is operationalised and communicate expectations clearly to students and
        parents.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">What school policies often look like in practice</h2>
      <p className="mb-3">
        Many schools publish student handbook rules that describe expected behaviour (for
        example, devices switched off and kept out of sight during curriculum time). The
        details vary by school, but the operational challenge is consistent: staff need a
        routine that is easy to run, and students need a routine that is easy to follow
        consistently across spaces.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">
        Turning “phone-free” into an easy-to-run routine
      </h2>
      <p className="mb-3">
        Once a school defines phone-free spaces, the next step is operational clarity: what
        students do on entry, what happens during the session, and when phones can be used
        again. The SG School Phone Pouch Programme is designed around a simple routine:
        students place phones into a personal locked pouch on entry to phone-free spaces, and
        unlock only at approved times using an unlocking base.
      </p>
      <p className="mb-0">
        For operational detail and rollout steps, start with{" "}
        <Link href="/programme" className="resource-secondary">
          the programme overview for school leaders
        </Link>
        ,{" "}
        <Link href="/how-it-works" className="resource-secondary">
          how the phone pouch routine works in three steps
        </Link>
        , and{" "}
        <Link href="/implementation-guide" className="resource-secondary">
          the implementation guide for administrators
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
          <li className="mb-2">
            <a
              href="https://www.channelnewsasia.com/singapore/secondary-school-can-use-phone-in-class-smartphone-screen-time-students-5495621"
              target="_blank"
              rel="noopener noreferrer"
            >
              Channel NewsAsia (30 November 2025): Secondary schools to forbid smartphone use
              during recess, CCA hours
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://temaseksec.moe.edu.sg/tms-family/student-handbook/mobile-phone-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Temasek Secondary School: Mobile Phone Policy (student handbook)
            </a>
          </li>
          <li className="mb-0">
            <a
              href="https://file.go.gov.sg/hsshb2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Example student handbook PDF (file.go.gov.sg)
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
            href: "/resources/phone-pouches-for-ccas-camps",
            label: "CCAs and camps",
          },
          { href: "/resources/updates", label: "Updates" },
        ]}
      />
    </div>
  );
}
