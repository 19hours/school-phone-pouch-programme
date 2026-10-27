// app/contact/page.tsx
import type { Metadata } from "next";
import { buildWhatsAppUrl, whatsappDisplay } from "@/lib/whatsapp";
import { pageMetadata, siteConfig } from "@/lib/seo";
import { CheckIcon } from "@/components/Icons";
import { CustomerLogos } from "@/components/Customers";
import { PageHeader } from "@/components/PageHeader";
import { QuoteButton } from "@/components/QuoteButton";

export const metadata: Metadata = pageMetadata({
  title: "Get a Quotation on WhatsApp",
  description: `Get a quotation for lockable phone pouches for the ${siteConfig.rolloutYear} school year. WhatsApp ${whatsappDisplay} with your school name and student numbers.`,
  path: "/contact",
});

const include = [
  "Your school’s name",
  "About how many students or pouches you need",
  "Whole school, or which levels you’re starting with",
  "Any customisation, such as colours or your school logo",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get a quotation"
        lead={`Planning phone-free spaces for ${siteConfig.rolloutYear}? Quotations are handled on WhatsApp. Message us and we’ll reply with pricing.`}
      >
        <QuoteButton label={`WhatsApp ${whatsappDisplay}`} />
      </PageHeader>

      <div className="row g-5">
        <div className="col-12 col-lg-7">
          <h2 className="block-title">What to include in your message</h2>
          <p className="section-lead mb-4">
            These details help us send an accurate quotation the first time.
          </p>
          <ul className="checklist" style={{ fontSize: "1.1rem" }}>
            {include.map((i) => (
              <li key={i}>
                <CheckIcon size={20} />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="col-12 col-lg-5">
          <div className="side-card">
            <h2 className="h5 mb-3">Contact details</h2>
            <dl className="m-0 d-grid gap-3">
              <div>
                <dt className="small text-muted fw-semibold">WhatsApp (no calls)</dt>
                <dd className="m-0">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-secondary"
                  >
                    {whatsappDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="small text-muted fw-semibold">Other enquiries</dt>
                <dd className="m-0">
                  <a href={`mailto:${siteConfig.contact.email}`} className="resource-secondary">
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="small text-muted fw-semibold">Company</dt>
                <dd className="m-0">
                  {siteConfig.companyName} (UEN {siteConfig.uen})
                  <br />
                  <span className="text-muted">Registered on Vendors@Gov since 2019</span>
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      <section className="page-block">
        <h2 className="logos__label text-start mb-3">Already in use at</h2>
        <CustomerLogos />
      </section>
    </>
  );
}
