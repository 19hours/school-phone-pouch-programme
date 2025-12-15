import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for the SG School Phone Pouch Programme website and Tally form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Privacy"
        description="How we collect, use, and store information submitted for the SG School Phone Pouch Programme."
      />
      <section className="container space-y-6 pb-16">
        <div className="glass-card space-y-3 p-8 text-slate-700">
          <h2 className="text-xl font-semibold text-slate-900">Data collected</h2>
          <p>
            The Tally form collects school name, role, email, phone/WhatsApp number, estimated number of students/pouches,
            preferred demo dates/times, and notes you provide.
          </p>
          <h2 className="text-xl font-semibold text-slate-900">How we use the data</h2>
          <p>
            Details are used only to respond to your enquiry, provide pricing tiers, schedule demos, and support rollout discussions.
          </p>
          <h2 className="text-xl font-semibold text-slate-900">Retention and deletion</h2>
          <p>
            If you would like your information removed, please email kevin.chu@ct.com.sg. We will delete your submission records
            and confirm when complete.
          </p>
        </div>
      </section>
    </div>
  );
}
