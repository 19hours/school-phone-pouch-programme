"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CTAButtons } from './CTAButtons';
import { siteName } from './constants';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link href="/" className="hover:text-primary focus-ring rounded px-1 py-1">Home</Link>
      <Link href="/how-it-works" className="hover:text-primary focus-ring rounded px-1 py-1">How it works</Link>
      <Link href="/programme" className="hover:text-primary focus-ring rounded px-1 py-1">Programme</Link>
      <Link href="/implementation-guide" className="hover:text-primary focus-ring rounded px-1 py-1">Implementation guide</Link>
      <Link href="/pricing" className="hover:text-primary focus-ring rounded px-1 py-1">Pricing</Link>
      <Link href="/customisation" className="hover:text-primary focus-ring rounded px-1 py-1">Customisation</Link>
      <Link href="/samples-demo" className="hover:text-primary focus-ring rounded px-1 py-1">Samples & demo</Link>
      <Link href="/contact" className="hover:text-primary focus-ring rounded px-1 py-1">Contact</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900" aria-label={siteName}>
          {siteName}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">{navLinks}</nav>
        <div className="hidden md:block">
          <CTAButtons className="items-center" />
        </div>
        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white shadow-sm md:hidden" role="dialog" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 text-sm font-medium text-slate-800">
            <div className="grid gap-2">{navLinks}</div>
            <CTAButtons className="items-stretch" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
