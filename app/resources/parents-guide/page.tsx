import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parent guide: phone pouch routine in school | SG School Phone Pouch Programme",
  description:
    "A parent-friendly explanation of the phone pouch routine: when phones go into pouches, when they stay locked, and when unlocking is allowed.",
  alternates: { canonical: "/resources/parents-guide" },
};

export default function ParentsGuidePage() {
  return (
    <div className="py-4">
      <h1 className="display-6 fw-bold mb-2">Parent guide</h1>
      <p className="text-muted mb-4">
        A simple explanation of the routine used in phone-free spaces.
      </p>

      <div className="border rounded p-4 bg-white">
        <ul className="m-0">
          <li>When students enter a phone-free space, phones go into pouches.</li>
          <li>While students are in that space, pouches stay locked.</li>
          <li>When phones are allowed, students unlock at an approved base.</li>
        </ul>
      </div>

      <div className="mt-4 d-grid gap-2">
        <Link href="/how-it-works" className="resource-secondary">
          Read the full “How it works” page →
        </Link>
        <Link href="/contact" className="resource-secondary">
          Contact us to discuss rollout →
        </Link>
      </div>
    </div>
  );
}
