import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { customisationOptions, pricingTiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing tiers for the SG School Phone Pouch Programme, including pilot cohorts, whole-school deployments, and top-ups.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | SG School Phone Pouch Programme",
    description:
      "Pricing tiers for the SG School Phone Pouch Programme, including pilot cohorts, whole-school deployments, and top-ups.",
    url: "https://sg-school-phone-pouch-programme.com/pricing",
  },
  twitter: {
    title: "Pricing | SG School Phone Pouch Programme",
    description:
      "Pricing tiers for the SG School Phone Pouch Programme, including pilot cohorts, whole-school deployments, and top-ups.",
  },
};

export default function PricingPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Transparent tiers"
        title="Pricing"
        description="Volume-based tiers aligned to the programme infodeck. Final quotes confirm quantities, unlocking bases, and any customisation."
        cta={
          <Button asChild size="lg">
            <Link href="/contact">Book a demo</Link>
          </Button>
        }
      />

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Badge>Pricing tiers</Badge>
          <Separator className="max-w-[200px]" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card key={tier.name}>
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">{tier.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-brand-blue/15 bg-brand-light p-6">
          <p className="text-sm font-semibold uppercase text-brand-blue">Ordering notes</p>
          <ul className="list-disc space-y-2 pl-5 text-slate-800">
            <li>All pricing follows the published programme tiers and is confirmed with your quantities.</li>
            <li>Unlocking bases are included according to dismissal flow and emergency unlocking needs.</li>
            <li>Customisation options are available as add-ons.</li>
          </ul>
          <Button asChild variant="outline" className="w-full md:w-auto">
            <Link href="/customisation">View customisation options</Link>
          </Button>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase text-slate-800">Popular add-ons</p>
          <div className="space-y-3">
            {customisationOptions.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <Badge variant="outline">{item.note}</Badge>
                </div>
                <p className="mt-2 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="glass-card flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Need a formal quote?</h2>
            <p className="text-slate-700">
              Share your student numbers, demo dates, and customisation needs to confirm the right tier.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/contact">Book a demo</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/samples-demo">Request samples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
