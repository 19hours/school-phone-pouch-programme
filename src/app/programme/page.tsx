import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { comparisons, faqs, howItWorksSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "Overview of the SG School Phone Pouch Programme, including pouch features, unlocking bases, and how it supports visible phone compliance.",
  alternates: { canonical: "/programme" },
  openGraph: {
    title: "Programme | SG School Phone Pouch Programme",
    description:
      "Overview of the SG School Phone Pouch Programme, including pouch features, unlocking bases, and how it supports visible phone compliance.",
    url: "https://sg-school-phone-pouch-programme.com/programme",
  },
  twitter: {
    title: "Programme | SG School Phone Pouch Programme",
    description:
      "Overview of the SG School Phone Pouch Programme, including pouch features, unlocking bases, and how it supports visible phone compliance.",
  },
};

const features = [
  {
    title: "Lockable phone pouch",
    detail:
      "Each student receives a pouch that locks around the phone and stays with them all day. It keeps devices visible yet inaccessible during lessons.",
  },
  {
    title: "Unlocking base",
    detail:
      "Staff use the unlocking base at dismissal to open pouches quickly. The same base allows authorised emergency unlocks when required.",
  },
  {
    title: "Child-safe clip",
    detail:
      "No needles are used. The clip secures to bags or belts without damaging uniforms, supporting student comfort and safety.",
  },
];

export default function ProgrammePage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Programme overview"
        title="Programme"
        description="Visible phone compliance for every student with a lockable pouch plus an unlocking base routine managed by school staff."
        cta={
          <div className="flex flex-col gap-3 md:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Book a demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
        }
      />

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Badge>Programme pillars</Badge>
          <Separator className="max-w-[200px]" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">{item.detail}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Badge>How it works</Badge>
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
        </div>
        <div className="rounded-2xl border border-brand-blue/15 bg-brand-light p-6 text-slate-800">
          <p className="text-sm font-semibold uppercase text-brand-blue">Vendor assurance</p>
          <p className="mt-2">
            Government registered vendor on vendors@gov, since 2019. Managed by Chu Technologies Pte Ltd (UEN: 201926755K).
          </p>
          <p className="mt-3 text-sm text-slate-700">
            Suitable for principals, school administrators, leadership teams, operations managers, and exam centre administrators.
          </p>
        </div>
      </section>

      <section className="container space-y-6">
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

      <section className="container space-y-6 pb-16">
        <div className="flex items-center gap-3">
          <Badge>Frequently asked</Badge>
          <Separator className="max-w-[200px]" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="glass-card p-6">
              <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-slate-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
