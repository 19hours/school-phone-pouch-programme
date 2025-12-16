// app/samples-demo/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Samples & demo | SG School Phone Pouch Programme",
  description: "We can bring samples and host a demo in your school. Contact us to arrange a visit.",
  alternates: { canonical: "/samples-demo" },
};

export default function SamplesDemoPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Samples / Demo</h1>

      <section className="mt-4">
        <p className="mb-2">We can bring the samples and host demo in your school.</p>
        <p className="mb-0">Please contact us to arrange for a visit!</p>
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