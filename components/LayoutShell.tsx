import Link from 'next/link';
import React, { ReactNode } from 'react';
import { whatsappLink } from '@/lib/seo';

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

export function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="header">
        <div className="header-inner container">
          <Link href="/" className="site-name">SG School Phone Pouch Programme</Link>
          <nav className="nav" aria-label="Primary navigation">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link className="button" href="/contact">Book a demo</Link>
            <Link className="button-secondary" href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp us</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="container" style={{ display: 'grid', gap: '0.5rem' }}>
          <div style={{ fontWeight: 700 }}>SG School Phone Pouch Programme</div>
          <div className="muted-text">Government registered vendor on vendors@gov, since 2019.</div>
          <div className="muted-text">Chu Technologies Pte Ltd (UEN: 201926755K).</div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </footer>
      <div className="floating-whatsapp">
        <Link className="button" href={whatsappLink} target="_blank" rel="noreferrer">
          Chat with us on WhatsApp
        </Link>
      </div>
    </div>
  );
}
