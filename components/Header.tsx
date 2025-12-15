"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CTAButtons } from './CTAButtons';
import { siteName } from './constants';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link href="/" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Home</Link>
      <Link href="/how-it-works" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">How it works</Link>
      <Link href="/programme" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Programme</Link>
      <Link href="/implementation-guide" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Implementation guide</Link>
      <Link href="/pricing" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Pricing</Link>
      <Link href="/customisation" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Customisation</Link>
      <Link href="/samples-demo" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Samples & demo</Link>
      <Link href="/contact" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Contact</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-lg font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          aria-label={siteName}
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-secondary group-hover:scale-125" aria-hidden />
          {siteName}
        </Link>
        <nav className="hidden items-center gap-3 text-sm font-medium text-slate-700 md:flex">
          {navLinks}
        </nav>
        <div className="hidden md:block">
          <CTAButtons className="items-center" />
        </div>
        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/70 bg-white/90 shadow-xl md:hidden" role="dialog" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 text-sm font-medium text-slate-800">
            <div className="grid gap-2">{navLinks}</div>
            <CTAButtons className="items-stretch" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
