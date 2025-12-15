'use client';

import Link from 'next/link';
import { WHATSAPP_LINK, SITE_NAME } from '@/lib/site';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <header className="site-header">
      <div className="govuk-width-container neutral-header">
        <div className="nav-row">
          <Link href="/" className="govuk-heading-m" aria-label="Home">
            {SITE_NAME}
          </Link>
          <div className="nav-actions">
            <Link href="/contact" className="govuk-button" role="button">
              Book a demo
            </Link>
            <a className="govuk-link secondary-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
            <button type="button" className="nav-toggle govuk-button govuk-button--secondary" onClick={toggleMenu}>
              {isOpen ? 'Close menu' : 'Menu'}
            </button>
          </div>
        </div>
        <nav className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}>
          <Link href="/how-it-works" className="govuk-link">
            How it works
          </Link>
          <Link href="/programme" className="govuk-link">
            Programme
          </Link>
          <Link href="/implementation-guide" className="govuk-link">
            Implementation guide
          </Link>
          <Link href="/pricing" className="govuk-link">
            Pricing
          </Link>
          <Link href="/customisation" className="govuk-link">
            Customisation
          </Link>
          <Link href="/samples-demo" className="govuk-link">
            Samples & demo
          </Link>
          <Link href="/contact" className="govuk-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
