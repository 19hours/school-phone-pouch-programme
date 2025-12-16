// app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Privacy | SG School Phone Pouch Programme",
  description: "How enquiry data is collected and used when you contact us about the programme.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Privacy</h1>

      <section className="mt-4">
        <h2 className="h4 fw-bold mb-2">What we collect</h2>
        <p className="mb-0">
          If you submit an enquiry via the embedded Tally form on the Contact page, we collect the
          information you provide (for example: school name, role, email, phone/WhatsApp, estimated
          number of students/pouches, preferred demo times, and any notes).
        </p>
      </section>

      <section className="mt-4">
        <h2 className="h4 fw-bold mb-2">How we use your information</h2>
        <p className="mb-0">
          We use the information to respond to your enquiry, arrange a demo, and discuss quantities,
          pricing, and rollout planning for the SG School Phone Pouch Programme.
        </p>
      </section>

      <div className="mt-4 bg-light rounded p-4 d-flex flex-column flex-sm-row gap-2 justify-content-between align-items-sm-center">
        <div className="fw-semibold">Want to see it in your school setting?</div>
        <div className="d-flex flex-column flex-sm-row gap-2">
          <Link
            href="/contact"
            className="btn btn-primary px-4 d-inline-flex align-items-center justify-content-center"
            style={{ minHeight: 44, minWidth: 180 }}
          >
            Book a demo
          </Link>
          <a
            href={buildWhatsAppUrl()}
            className="btn btn-outline-primary px-4 d-inline-flex align-items-center justify-content-center"
            style={{ minHeight: 44, minWidth: 180 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </div>
  );
}