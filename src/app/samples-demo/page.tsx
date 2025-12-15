import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Samples & demo",
  description:
    "We can bring samples and host a demo in your school. Contact us to arrange a visit.",
  alternates: { canonical: "/samples-demo" },
  openGraph: {
    title: "Samples & demo | SG School Phone Pouch Programme",
    description:
      "We can bring samples and host a demo in your school. Contact us to arrange a visit.",
    url: "https://sg-school-phone-pouch-programme.com/samples-demo",
  },
  twitter: {
    title: "Samples & demo | SG School Phone Pouch Programme",
    description:
      "We can bring samples and host a demo in your school. Contact us to arrange a visit.",
  },
};

export default function SamplesDemoPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Hands-on experience"
        title="Samples / Demo"
        description="We can bring the samples and host demo in your school. Please contact us to arrange for a visit!"
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

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Badge>What to expect</Badge>
          <Separator className="max-w-[200px]" />
        </div>
        <div className="glass-card space-y-4 p-8 text-slate-700">
          <p>
            We demonstrate the lockable pouch, the unlocking base routine, and emergency unlocking steps. Sessions are tailored
            for principals, school administrators, and operations teams.
          </p>
          <p>
            You will see how the pouch stays with students all day, how the child-safe clip works without needles, and how staff
            manage dismissal flow.
          </p>
          <div className="flex flex-col gap-3 md:flex-row">
            <Button asChild>
              <Link href="/pricing">Review pricing tiers</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/customisation">Customisation options</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
