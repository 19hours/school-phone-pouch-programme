// app/pricing/page.tsx
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { CustomerLogos } from "@/components/Customers";
import { CheckIcon, LockIcon, MagnetIcon, PaletteIcon } from "@/components/Icons";
import { QuoteButton } from "@/components/QuoteButton";

export const metadata: Metadata = pageMetadata({
  title: "Phone Pouch Pricing for Schools",
  description:
    "Phone pouch pricing for Singapore schools depends on quantity, with a free unlocking base for every 100 pouches. Request a quotation for a full-school, level or pilot rollout.",
  path: "/pricing",
});

const tiers = [
  { name: "Full school or several levels", text: "Typically qualifies for the lowest unit price." },
  { name: "One level at a time", text: "Usually sits in mid-volume pricing." },
  { name: "Pilot or smaller group", text: "Uses small-batch pricing." },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Phone pouch pricing for schools"
        lead="The unit price depends on how many pouches you order. You get one free unlocking base for every 100 pouches."
      >
        <QuoteButton label="Request a quotation" />
      </PageHeader>

      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="tile">
            <span className="icon-tile">
              <LockIcon />
            </span>
            <h2 className="h5 fw-bold mt-4">Pouches</h2>
            <div className="price-tag">By quantity</div>
            <p>Larger orders get a lower unit price.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="tile">
            <span className="icon-tile icon-tile--safe">
              <MagnetIcon />
            </span>
            <h2 className="h5 fw-bold mt-4">Unlocking bases</h2>
            <div className="price-tag">
              Free <small>1 per 100 pouches</small>
            </div>
            <p>Placed wherever your school chooses.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="tile">
            <span className="icon-tile">
              <PaletteIcon />
            </span>
            <h2 className="h5 fw-bold mt-4">Customisation</h2>
            <div className="price-tag">
              +$0.50 <small>per pouch</small>
            </div>
            <p>
              Logo printing or name holders. Colours free above 1,000.{" "}
              <Link href="/customisation" className="resource-secondary">
                Options
              </Link>
            </p>
          </div>
        </div>
      </div>

      <section className="page-block">
        <div className="row g-5">
          <div className="col-12 col-lg-6">
            <h2 className="block-title">Which tier fits your school?</h2>
            <p className="section-lead mb-4">
              Start with student numbers and add a small buffer. Rolling out by level? Add up the
              cohorts in your first phase.
            </p>
            <div className="d-grid gap-3">
              {tiers.map((t) => (
                <div key={t.name} className="tile py-4">
                  <h3 className="h6 fw-bold mb-1">{t.name}</h3>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="block-title">What we need for a quotation</h2>
            <p className="section-lead mb-4">Three details and we can prepare your quote.</p>
            <ul className="checklist">
              <li>
                <CheckIcon size={18} />
                <span>Estimated number of students or pouches</span>
              </li>
              <li>
                <CheckIcon size={18} />
                <span>Whole school, or one level at a time</span>
              </li>
              <li>
                <CheckIcon size={18} />
                <span>Any customisation options you’d like</span>
              </li>
            </ul>

            <div className="mt-5">
              <div className="logos__label text-start mb-3">Already in use at</div>
              <CustomerLogos compact />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        className="page-block"
        title="Ready for a quotation?"
        text="WhatsApp us your student numbers and which levels you’re starting with. We’ll send pricing and any options."
        label="Request a quotation"
      />
    </>
  );
}
