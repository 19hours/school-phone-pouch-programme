import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { comparisons, howItWorksSteps, rolloutSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Step-by-step view of the SG School Phone Pouch Programme: locking pouches, unlocking bases, and emergency unlocks for schools.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How it works | SG School Phone Pouch Programme",
    description:
      "Step-by-step view of the SG School Phone Pouch Programme: locking pouches, unlocking bases, and emergency unlocks for schools.",
    url: "https://sg-school-phone-pouch-programme.com/how-it-works",
  },
  twitter: {
    title: "How it works | SG School Phone Pouch Programme",
    description:
      "Step-by-step view of the SG School Phone Pouch Programme: locking pouches, unlocking bases, and emergency unlocks for schools.",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Programme walkthrough"
        title="How it works"
        description="Three simple steps to keep classrooms phone-free while letting students carry their devices safely on campus."
        cta={
          <Button asChild size="lg">
            <Link href="/contact">Book a demo</Link>
          </Button>
        }
      />

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Badge>Step-by-step</Badge>
          <Separator className="max-w-[200px]" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <Card key={step.title}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">{step.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Badge>Admin controls</Badge>
            <Separator className="max-w-[200px]" />
          </div>
          <div className="glass-card space-y-4 p-8 text-slate-700">
            <h2 className="text-2xl font-semibold text-slate-900">Emergency unlocking</h2>
            <p>
              Emergency unlocking is handled by authorised admin staff using the unlocking base. This ensures quick access to
              phones when urgent situations occur while keeping day-to-day use controlled.
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">Child-safe clip approach</h2>
            <p>
              The pouch uses a child-safe clip and avoids needles. It protects uniforms and allows students to keep the pouch on
              them without damage to clothing.
            </p>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-brand-blue/10 bg-brand-light p-6">
          <p className="text-sm font-semibold uppercase text-brand-blue">Trust and compliance</p>
          <p className="text-slate-800">
            Government registered vendor on vendors@gov, since 2019. Programme managed by Chu Technologies Pte Ltd (UEN:
            201926755K).
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link href="/programme">View programme details</Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Badge>Rolling out</Badge>
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

      <section className="container space-y-6 pb-16">
        <div className="flex items-center gap-3">
          <Badge>Comparison vs phone lockers</Badge>
          <Separator className="max-w-[200px]" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {comparisons.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">{item.detail}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
