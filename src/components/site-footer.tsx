import Link from "next/link";

import { whatsappUrl } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/90">
      <div className="container grid gap-10 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            SG School Phone Pouch Programme
          </h3>
          <p className="text-sm text-slate-600">
            Government registered vendor on vendors@gov, since 2019.
          </p>
          <p className="text-sm text-slate-600">
            Chu Technologies Pte Ltd (UEN: 201926755K).
          </p>
          <div className="flex gap-2 pt-2">
            <Button asChild size="sm">
              <Link href="/contact">Book a demo</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-900">Site links</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
            <Link href="/how-it-works">How it works</Link>
            <Link href="/programme">Programme</Link>
            <Link href="/implementation-guide">Implementation guide</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/customisation">Customisation</Link>
            <Link href="/samples-demo">Samples & demo</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
          <p className="text-sm text-slate-700">Person in charge: Kevin Chu</p>
          <p className="text-sm text-slate-700">Email: kevin.chu@ct.com.sg</p>
          <p className="text-sm text-slate-700">WhatsApp: 98222723</p>
          <p className="text-sm text-slate-600">
            For interested schools: Please contact us immediately to roll out in 2026!
          </p>
        </div>
      </div>
    </footer>
  );
}
