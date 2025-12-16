// app/resources/phone-pouches-vs-phone-lockers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/components/RelatedResources";

export const metadata: Metadata = {
  title: "Phone pouches vs phone lockers | SG School Phone Pouch Programme",
  description:
    "A full side-by-side comparison for school leaders: phone pouches vs phone lockers across compliance, operations, and policy clarity.",
  alternates: { canonical: "/resources/phone-pouches-vs-phone-lockers" },
};

export default function PhonePouchesVsPhoneLockersResourcePage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Phone pouches vs phone lockers</h1>
      <p className="text-muted mb-4">
        A full side-by-side comparison for school leaders considering options to manage student
        phones in phone-free spaces.
      </p>

      <h2 className="h4 fw-bold mt-4 mb-3">Full comparison</h2>
      <p className="mb-3">
        This table mirrors the “Programme vs Phone Lockers” comparison used on the programme
        page, presented here as a standalone resource for quick review.
      </p>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col" style={{ width: "26%" }}>
                Comparison area
              </th>
              <th scope="col" style={{ width: "37%" }}>
                SG School Phone Pouch Programme
              </th>
              <th scope="col" style={{ width: "37%" }}>
                Phone lockers
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="fw-semibold">
                Control of distraction
              </th>
              <td>
                <ul className="mb-0">
                  <li>Phones locked at classroom/zone entry</li>
                  <li>Easy visual check (everyone has a pouch)</li>
                </ul>
              </td>
              <td>
                <ul className="mb-0">
                  <li>Harder for teacher to verify compliance</li>
                  <li>Students can say ‘it’s in my locker’ when it is not</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row" className="fw-semibold">
                Student security &amp; peace of mind
              </th>
              <td>
                <ul className="mb-0">
                  <li>Phone stays with student, just not usable</li>
                </ul>
              </td>
              <td>
                <ul className="mb-0">
                  <li>Shared / open lockers can cause disputes</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row" className="fw-semibold">
                Flexibility across spaces
              </th>
              <td>
                <ul className="mb-0">
                  <li>Works in classrooms, halls, CCAs, camps, exams</li>
                  <li>Same routine everywhere: phone → pouch → lock</li>
                </ul>
              </td>
              <td>
                <ul className="mb-0">
                  <li>Fixed to one location (corridor/area)</li>
                  <li>Harder to enforce rules in halls, special rooms, off-site</li>
                  <li>Scaling up requires more physical lockers and space</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row" className="fw-semibold">
                Implementation and operations
              </th>
              <td>
                <ul className="mb-0">
                  <li>Simple rollout: issue pouches, brief staff and students</li>
                  <li>Easy to replace or top up for new cohorts</li>
                </ul>
              </td>
              <td>
                <ul className="mb-0">
                  <li>Requires purchase, delivery and installation</li>
                  <li>Needs space planning and maintenance</li>
                  <li>Repairs, lost keys and damaged doors add admin load</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row" className="fw-semibold">
                Responsible use &amp; autonomy
              </th>
              <td>
                <ul className="mb-0">
                  <li>Supports ‘phones at the right time, right place’</li>
                  <li>Unlocking bases define where/when phones are allowed</li>
                  <li>Encourages discussion about digital habits, not just bans</li>
                </ul>
              </td>
              <td>
                <ul className="mb-0">
                  <li>Feels more like an all-or-nothing rule</li>
                  <li>Less nuanced control of when phones can be used again</li>
                  <li>Often leads to punishment/confiscation when rules are broken</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row" className="fw-semibold">
                Physical safety &amp; handling
              </th>
              <td>
                <ul className="mb-0">
                  <li>Soft neoprene, rounded edges</li>
                  <li>Locking clip with no needles or sharp pins</li>
                </ul>
              </td>
              <td>
                <ul className="mb-0">
                  <li>Metal/wood doors and hinges can pinch fingers</li>
                  <li>Doors can swing into walkways</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row" className="fw-semibold">
                Policy clarity &amp; parent communication
              </th>
              <td>
                <ul className="mb-0">
                  <li>Simple message: ‘In class, phone is in a locked pouch’</li>
                  <li>Parents know phones are present but not used in lessons</li>
                </ul>
              </td>
              <td>
                <ul className="mb-0">
                  <li>Message is less visible (‘Phones in lockers’)</li>
                  <li>Harder to prove phones are actually stored</li>
                  <li>More questions about exceptions and special cases</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="h4 fw-bold mt-4 mb-3">Next steps</h2>
      <p className="mb-0">
        If you want the operational routine in plain steps, see{" "}
        <Link href="/how-it-works" className="resource-secondary">
          how to manage phone usage in three steps
        </Link>
        . For rollout planning across levels and spaces, use the{" "}
        <Link href="/implementation-guide" className="resource-secondary">
          implementation guide for administrators
        </Link>
        .
      </p>

      <RelatedResources
        items={[
          {
            href: "/resources/phone-free-spaces-in-schools",
            label: "Phone-free spaces in schools",
          },
          {
            href: "/resources/exams-phone-compliance",
            label: "Exams and exam centres",
          },
          { href: "/resources/updates", label: "Updates" },
        ]}
      />
    </div>
  );
}
