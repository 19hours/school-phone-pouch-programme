// app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Terms | SG School Phone Pouch Programme",
  description: "Basic terms for using this informational website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Terms</h1>

      <section className="mt-4">
        <h2 className="h4 fw-bold mb-2">Informational site</h2>
        <p className="mb-0">
          This website provides information about the SG School Phone Pouch Programme.
        </p>
      </section>

      <section className="mt-4">
        <h2 className="h4 fw-bold mb-2">Pricing and quotes</h2>
        <p className="mb-0">
          Pricing tiers are shown on the Pricing page. Final quotes confirm quantities and any
          selected options (for example, customisation).
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
