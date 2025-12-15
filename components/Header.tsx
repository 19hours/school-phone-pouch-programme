'use client';

import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/programme', label: 'Programme' },
  { href: '/implementation-guide', label: 'Implementation guide' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/customisation', label: 'Customisation' },
  { href: '/samples-demo', label: 'Samples & demo' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="brand">
          <span className="gov-mark">GOV.UK</span>
          <div>
            <div>
              <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
                SG School Phone Pouch Programme
              </Link>
            </div>
            <small style={{ color: '#dfe0e2' }}>Official information for schools</small>
          </div>
        </div>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="button primary" href="/contact">
            Book a demo
          </Link>
          <a
            className="button secondary"
            href="https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>
        </nav>
      </div>
    </header>
  );
}
