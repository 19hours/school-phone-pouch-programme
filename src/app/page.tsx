import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  comparisons,
  howItWorksSteps,
  rolloutSteps,
  faqs,
} from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Phone-free school days"
        title="Lockable phone pouch programme for Singapore schools"
        description="Implement a visible, student-carried phone pouch system with unlocking bases. Keep lessons distraction-free while allowing controlled access when needed."
        cta={
          <div className="flex flex-col gap-3 md:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Book a demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/how-it-works">See how it works</Link>
            </Button>
          </div>
        }
      />

      <section className="container grid gap-6 md:grid-cols-2">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Problem</h2>
          <p className="mt-4 text-slate-700">
            Personal phones interrupt learning time and complicate exam hall compliance. Schools need a consistent way to keep
            devices off and out of use during the day without adding locker queues or extra admin work.
          </p>
        </div>
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Solution</h2>
          <p className="mt-4 text-slate-700">
            The SG School Phone Pouch Programme provides a lockable pouch for every student and unlocking bases for staff. The
            pouch stays with the student all day for visible compliance, with child-safe clips and emergency unlocks handled by
            authorised admin staff.
          </p>
        </div>
      </section>

      <section className="container space-y-6">
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

      <section className="container space-y-6">
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

      <section className="container pb-16">
        <div className="glass-card flex flex-col items-start gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Ready to see the pouch in action?</h2>
            <p className="text-slate-700">
              Book a demo with Kevin Chu and plan your 2026 rollout. We will bring samples and show the unlocking base routine.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Book a demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/samples-demo">See samples & demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
