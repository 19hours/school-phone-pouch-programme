// app/resources/phone-pouches-vs-yondr/page.tsx
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Phone Pouches vs Yondr: What Singapore Schools Should Compare",
  description:
    "Comparing phone-locking pouches for Singapore schools: student safety, procurement, customisation and day-to-day operations versus Yondr.",
  path: "/resources/phone-pouches-vs-yondr",
  type: "article",
});

export default function PhonePouchesVsYondrPage() {
  return (
    <div>
      <h1>
        SG School Phone Pouch Programme vs Yondr
      </h1>

      <p className="lead-text">
        If your school is evaluating phone-locking pouch approaches, this page sets out
        practical points to compare, without assuming a one-size-fits-all answer. Your
        final choice should reflect your school’s policy goals, student profile, and the
        operational realities of running phone-free spaces.
      </p>

      <section>
        <h2>What schools are trying to achieve</h2>
        <p>
          In most cases, schools want a simple way to keep phones secured in phone-free
          spaces, while making expectations easy for staff and students to follow across
          the school day.
        </p>
      </section>

      <section>
        <h2>How phone-free spaces work (at a glance)</h2>
        <p>
          Most phone-locking pouch approaches follow the same high-level flow: phones go
          into a pouch on entry to a phone-free space, remain locked during that time, and
          are unlocked again only at approved locations.
        </p>
        <p>
          Yondr describes this flow as “Arrival → Secure → Open”. Reference:{" "}
          <a
            href="https://www.overyondr.com/phone-locking-pouch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yondr – How it works
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Side-by-side: what to compare</h2>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th scope="col" style={{ width: "32%" }}>
                  Decision point
                </th>
                <th scope="col" style={{ width: "34%" }}>
                  SG School Phone Pouch Programme
                </th>
                <th scope="col" style={{ width: "34%" }}>
                  Yondr (confirm details directly)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">Student safety and handling</th>
                <td>
                  <div className="fw-semibold mb-1">Safety-first design emphasis</div>
                  <ul className="mb-0">
                    <li className="mb-1">Our lockable phone pouches do not use needles.</li>
                    <li className="mb-1">We use child-safe clips with locking technology.</li>
                    <li className="mb-0">Student safety is our PRIORITY.</li>
                  </ul>
                </td>
                <td>
                  <div className="text-muted">
                    Confirm the locking method, handling characteristics, and any maintenance
                    expectations with the supplier.
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Procurement and local confidence</th>
                <td>
                  <div className="fw-semibold mb-1">Designed for Singapore procurement</div>
                  <ul className="mb-0">
                    <li className="mb-1">
                      Government registered vendor on vendors@gov, since 2019.
                    </li>
                    <li className="mb-0">Chu Technologies Pte Ltd (UEN: 201926755K).</li>
                  </ul>
                  <div className="small text-muted mt-2">
                    Helps with procurement, settlement, and raising issues through a local supplier.
                  </div>
                </td>
                <td>
                  <div className="text-muted">
                    Confirm procurement steps, payment terms, and support arrangements applicable
                    to your school’s purchasing process.
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Customisation for school operations</th>
                <td>
                  <div className="fw-semibold mb-1">Standard customisation options</div>
                  <ul className="mb-0">
                    <li className="mb-1">
                      Pouch colour options (free for quantities above 1000): Red, Orange, Yellow,
                      Green, Blue, Indigo, Purple, Black, Grey.
                    </li>
                    <li className="mb-1">
                      Name card holder for easy identification: + $0.50 per pouch.
                    </li>
                    <li className="mb-0">
                      School logo printing (single colour): + $0.50 per pouch, minimum quantity is 1000.
                    </li>
                  </ul>
                  <div className="mt-2">
                    <Link href="/customisation" className="resource-secondary">
                      View customisation options →
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="text-muted">
                    Confirm what customisation is offered (identification, branding, colour options),
                    including any minimum order quantities.
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Day-to-day operations</th>
                <td>
                  <div className="fw-semibold mb-1">Simple operational flow</div>
                  <ul className="mb-0">
                    <li className="mb-1">
                      Each student places their phone into a personal phone pouch as they enter a phone-free space.
                    </li>
                    <li className="mb-1">
                      The pouch uses a safe clip mechanism, and can be unlocked using a magnetic base when students are allowed to use their phones again.
                    </li>
                    <li className="mb-1">
                      Pouch stays with the student entire day, easy to show the phone is secured.
                    </li>
                    <li className="mb-0">Can be unlocked by admin staff during emergencies.</li>
                  </ul>
                  <div className="mt-2">
                    <Link href="/how-it-works" className="resource-secondary">
                      See how it works in three steps →
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="text-muted">
                    Confirm your preferred operational model (where pouches are locked/unlocked,
                    how staff verify compliance, and how exceptions are handled) with the supplier.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>If you are choosing for your school</h2>
        <p>
          In practice, the best choice is the one your staff can run consistently with minimal
          friction, and that students can follow clearly across classes and spaces. If you are
          comparing options, it helps to run a small pilot and observe entry, compliance checks,
          and unlocking flow at peak times.
        </p>

        <p className="text-muted mb-0">
          Helpful next reads:{" "}
          <Link href="/programme" className="resource-secondary">
            programme overview for school leaders
          </Link>
          ,{" "}
          <Link href="/implementation-guide" className="resource-secondary">
            implementation guide for administrators
          </Link>
          ,{" "}
          <Link href="/pricing" className="resource-secondary">
            pricing tiers and unlocking bases
          </Link>
          .
        </p>
      </section>

      <CtaBand />

      <section>
        <h2>Reference</h2>
        <ul className="text-muted mb-0">
          <li>
            <a
              href="https://www.overyondr.com/phone-locking-pouch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yondr – How it works
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}