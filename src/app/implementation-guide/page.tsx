import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { rolloutSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Implementation guide",
  description:
    "Step-by-step implementation guide for the SG School Phone Pouch Programme, covering planning, training, and launch.",
  alternates: { canonical: "/implementation-guide" },
  openGraph: {
    title: "Implementation guide | SG School Phone Pouch Programme",
    description:
      "Step-by-step implementation guide for the SG School Phone Pouch Programme, covering planning, training, and launch.",
    url: "https://sg-school-phone-pouch-programme.com/implementation-guide",
  },
  twitter: {
    title: "Implementation guide | SG School Phone Pouch Programme",
    description:
      "Step-by-step implementation guide for the SG School Phone Pouch Programme, covering planning, training, and launch.",
  },
};

const roles = [
  {
    title: "School leadership",
    detail:
      "Sets the phone-free policy and provides the mandate for consistent use across cohorts, including exam centre administrators.",
  },
  {
    title: "Operations team",
    detail:
      "Coordinates pouch distribution, unlocking base placement, and dismissal flow with clear signage and staff assignments.",
  },
  {
    title: "Teaching staff",
    detail:
      "Reinforces expectations in class and performs spot checks to ensure pouches remain locked during lessons.",
  },
];

export default function ImplementationGuidePage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Rollout checklist"
        title="Implementation guide"
        description="A structured guide to introduce the phone pouch programme, train staff, and prepare for school-wide rollout."
        cta={
          <Button asChild size="lg">
            <Link href="/pricing">Review pricing tiers</Link>
          </Button>
        }
      />

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Badge>Implementation steps</Badge>
          <Separator className="max-w-[200px]" />
        </div>
        <div className="glass-card p-8">
          <ol className="space-y-4 text-slate-700">
            {rolloutSteps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-light text-sm font-semibold text-brand-blue">
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-brand-blue/15 bg-brand-light p-6">
          <p className="text-sm font-semibold uppercase text-brand-blue">Support</p>
          <p className="text-slate-800">
            We help schools plan unlocking base placement, staff briefings, and communications to parents. Emergency unlocking protocols are included so admin staff can respond quickly.
          </p>
          <Button asChild variant="outline" className="w-full md:w-auto">
            <Link href="/contact">Book a demo</Link>
          </Button>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase text-slate-800">Teams involved</p>
          <div className="grid gap-4 md:grid-cols-3">
            {roles.map((role) => (
              <Card key={role.title} className="shadow-none">
                <CardHeader>
                  <CardTitle>{role.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700">{role.detail}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="glass-card flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Rollout with confidence</h2>
            <p className="text-slate-700">
              Align leadership, train staff, and schedule your dismissal routines for 2026.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/programme">Back to programme</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/pricing">Pricing tiers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
