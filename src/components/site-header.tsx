"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { whatsappUrl } from "@/lib/content";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/programme", label: "Programme" },
  { href: "/implementation-guide", label: "Implementation guide" },
  { href: "/pricing", label: "Pricing" },
  { href: "/customisation", label: "Customisation" },
  { href: "/samples-demo", label: "Samples & demo" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-bold text-brand-blue">
            SG School Phone Pouch Programme
          </Link>
          <span className="hidden rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-blue md:inline-flex">
            Government registered vendor on vendors@gov, since 2019.
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild>
            <Link href="/contact">Book a demo</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
          </Button>
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-brand-blue"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/contact">Book a demo</Link>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
