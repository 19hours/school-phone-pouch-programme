'use client';

import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="header-ribbon" aria-label="Vendor credibility messaging">
        <div className="container ribbon-inner">
          <span>Government registered vendor on vendors@gov, since 2019.</span>
          <span>Chu Technologies Pte Ltd (UEN: 201926755K).</span>
        </div>
      </div>
      <header className="header">
        <div className="header-inner container">
          <div className="branding">
            <Link href="/" className="site-name">SG School Phone Pouch Programme</Link>
            <span className="tagline">Clear, safe phone compliance for schools</span>
          </div>
          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close menu' : 'Menu'}
          </button>
          <div className="nav-surface" aria-label="Primary navigation">
            <nav className={`nav ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </nav>
            <div className="header-actions">
              <Link className="button" href="/contact">Book a demo</Link>
              <Link className="button-secondary" href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp us</Link>
            </div>
          </div>
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
