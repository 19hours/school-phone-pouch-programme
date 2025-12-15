import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { contactEmail, personInCharge, whatsappNumber, whatsappUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kevin Chu to discuss rollout in 2026, pricing tiers, and a school demo.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | SG School Phone Pouch Programme",
    description:
      "Contact Kevin Chu to discuss rollout in 2026, pricing tiers, and a school demo.",
    url: "https://sg-school-phone-pouch-programme.com/contact",
  },
  twitter: {
    title: "Contact | SG School Phone Pouch Programme",
    description:
      "Contact Kevin Chu to discuss rollout in 2026, pricing tiers, and a school demo.",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Talk to us"
        title="Contact"
        description="For interested schools: Please contact us immediately to roll out in 2026!"
        cta={
          <div className="flex flex-col gap-3 md:flex-row">
            <Button asChild size="lg">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Chat with us on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`mailto:${contactEmail}`}>Email us</a>
            </Button>
          </div>
        }
      />

      <section className="container grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <Badge>Direct contact</Badge>
            <Separator className="max-w-[200px]" />
          </div>
          <p className="text-slate-800">Person in charge: {personInCharge}</p>
          <p className="text-slate-800">Email: {contactEmail}</p>
          <p className="text-slate-800">WhatsApp: {whatsappNumber.replace("+65 ", "")}</p>
          <p className="text-slate-700">
            For interested schools: Please contact us immediately to roll out in 2026!
          </p>
          <div className="flex gap-3 pt-2">
            <Button asChild>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Chat with us on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/pricing">See pricing tiers</a>
            </Button>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-brand-blue/15 bg-brand-light p-6">
          <div className="flex items-center gap-3">
            <Badge>Tally form</Badge>
            <Separator className="max-w-[200px]" />
          </div>
          <p className="text-slate-800">
            Submit your school details and preferred demo dates. We will respond with the right tier and a rollout timeline.
          </p>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <iframe
              src="https://tally.so/r/3qx5Yr"
              width="100%"
              height="520"
              title="Tally contact form"
              className="min-h-[520px] w-full"
            />
          </div>
          <p className="text-sm text-slate-700">
            By submitting this form, you agree to be contacted about the SG School Phone Pouch Programme.
          </p>
        </div>
      </section>
    </div>
  );
}
