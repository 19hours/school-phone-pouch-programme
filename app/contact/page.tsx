// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact | SG School Phone Pouch Programme",
  description: "Contact us now to discuss rollout in 2026, pricing, and a school demo.",
  alternates: { canonical: "/contact" },
};

const TALLY_EMBED_URL =
  "https://tally.so/embed/kdlMrd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1";

export default function ContactPage() {
  return (
    <div>
      <h1 className="display-6 fw-bold mb-3">Contact</h1>

      <div className="bg-light rounded p-4 mt-4">
        <p className="fw-semibold mb-3">
          For interested schools: Please contact us immediately to roll out in 2026!
        </p>

        <div className="mb-0">
          <div className="mb-1">Person in charge: Kevin Chu</div>
          <div className="mb-1">
            Email:{" "}
            <a href="mailto:kevin.chu@ct.com.sg" className="resource-secondary">
              kevin.chu@ct.com.sg
            </a>
          </div>
          <div className="mb-0">
            WhatsApp:{" "}
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-secondary"
            >
              98222723
            </a>
          </div>
        </div>
      </div>

      <section className="mt-4">
        <h2 className="h4 fw-bold mb-2">Enquiry form</h2>
        <p className="text-muted mb-3">
          Use the form below and our sales team will follow up shortly.
        </p>

        <div className="rounded overflow-hidden bg-light">
          <iframe
            data-tally-src={TALLY_EMBED_URL}
            loading="lazy"
            width="100%"
            height="313"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
            style={{ display: "block" }}
          />
        </div>

        {/* Load Tally embed script (no event handlers in Server Component) */}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />

        {/* Trigger Tally.loadEmbeds() safely via inline script */}
        <Script id="tally-load-embeds" strategy="afterInteractive">
          {`(function(){try{if(window.Tally){window.Tally.loadEmbeds();}}catch(e){}})();`}
        </Script>
      </section>

      {/* Standard CTA (required) */}
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