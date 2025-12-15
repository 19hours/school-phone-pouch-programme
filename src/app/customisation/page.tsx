import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { customisationOptions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Customisation",
  description:
    "Customisation options for the SG School Phone Pouch Programme, including school logo printing and name labelling.",
  alternates: { canonical: "/customisation" },
  openGraph: {
    title: "Customisation | SG School Phone Pouch Programme",
    description:
      "Customisation options for the SG School Phone Pouch Programme, including school logo printing and name labelling.",
    url: "https://sg-school-phone-pouch-programme.com/customisation",
  },
  twitter: {
    title: "Customisation | SG School Phone Pouch Programme",
    description:
      "Customisation options for the SG School Phone Pouch Programme, including school logo printing and name labelling.",
  },
};

export default function CustomisationPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Personalise the programme"
        title="Customisation"
        description="Options that help your school personalise pouches and streamline operations, following the published programme material."
        cta={
          <Button asChild size="lg">
            <Link href="/contact">Book a demo</Link>
          </Button>
        }
      />

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Badge>Customisation options</Badge>
          <Separator className="max-w-[200px]" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {customisationOptions.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle>{item.title}</CardTitle>
                  <Badge variant="outline">{item.note}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-slate-700">{item.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-brand-blue/15 bg-brand-light p-6">
          <p className="text-sm font-semibold uppercase text-brand-blue">School logo printing</p>
          <p className="text-slate-800">
            Add your school logo (single colour print) on every pouch for more personalisation! + $0.50 per pouch, minimum quantity is 1000.
          </p>
          <Button asChild variant="outline" className="w-full md:w-auto">
            <Link href="/pricing">See pricing tiers</Link>
          </Button>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase text-slate-800">Name and class labelling</p>
          <p className="text-slate-800">
            Useful for students to see who the pouch belongs to. + $0.50 per pouch.
          </p>
          <p className="text-slate-700">
            Labels make it easy to spot misplaced pouches and speed up returns at dismissal.
          </p>
        </div>
      </section>

      <section className="container pb-16">
        <div className="glass-card flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Plan your personalised rollout</h2>
            <p className="text-slate-700">
              Combine logo printing with labelling to keep compliance visible and organised across cohorts.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/contact">Book a demo</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/samples-demo">Arrange samples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
