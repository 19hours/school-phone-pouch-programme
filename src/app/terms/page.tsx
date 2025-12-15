import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the SG School Phone Pouch Programme website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Terms" description="Terms for accessing this informational site and requesting demos." />
      <section className="container space-y-6 pb-16">
        <div className="glass-card space-y-3 p-8 text-slate-700">
          <h2 className="text-xl font-semibold text-slate-900">Informational use</h2>
          <p>This site summarises the SG School Phone Pouch Programme for schools in Singapore.</p>
          <h2 className="text-xl font-semibold text-slate-900">Pricing confirmation</h2>
          <p>
            Pricing is presented as tiers and add-ons. Final quotes will confirm quantities, unlocking bases, and customisation in line with the programme material.
          </p>
          <h2 className="text-xl font-semibold text-slate-900">No warranties</h2>
          <p>
            Content is provided based on the published programme material. While we aim for accuracy, please confirm details with us before making decisions.
          </p>
        </div>
      </section>
    </div>
  );
}
