'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { TrustStrip } from './TrustStrip';
import { WhatsAppFloatingButton } from './WhatsAppFloatingButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/programme', label: 'Programme' },
  { href: '/implementation-guide', label: 'Implementation guide' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/customisation', label: 'Customisation' },
  { href: '/samples-demo', label: 'Samples & demo' },
  { href: '/contact', label: 'Contact' },
];

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      <header>
        <div className="container navbar">
          <Link href="/" className="nav-brand" aria-label="SG School Phone Pouch Programme home">
            <strong>SG School Phone Pouch Programme</strong>
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
            <Link className="button secondary" href="https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school." target="_blank" rel="noreferrer">
              WhatsApp us
            </Link>
            <Link className="button" href="/contact">
              Book a demo
            </Link>
          </nav>
        </div>
      </header>
      <div className="container" style={{ paddingTop: '1rem' }}>
        <TrustStrip />
      </div>
      <main className="container">{children}</main>
      <footer className="container footer">
        <TrustStrip />
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p style={{ marginTop: '1rem' }}>
          © {new Date().getFullYear()} SG School Phone Pouch Programme. All rights reserved.
        </p>
      </footer>
      <WhatsAppFloatingButton />
    </div>
  );
}
