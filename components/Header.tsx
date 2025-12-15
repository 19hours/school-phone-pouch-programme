'use client';

import Link from 'next/link';
import { WHATSAPP_LINK, SITE_NAME } from '@/lib/site';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <header className="site-header" role="banner">
      <div className="govuk-width-container neutral-header">
        <div className="nav-row">
          <div className="brand-block">
            <Link href="/" className="govuk-heading-m site-name" aria-label="Home">
              {SITE_NAME}
            </Link>
            <p className="govuk-body-s govuk-!-margin-bottom-0">Secure, visible phone compliance for schools</p>
          </div>
          <div className="nav-actions" role="navigation" aria-label="Primary">
            <div className="inline-links">
              <a className="govuk-link secondary-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
              <Link href="/contact" className="govuk-button" role="button">
                Book a demo
              </Link>
            </div>
            <button
              type="button"
              className="nav-toggle govuk-button govuk-button--secondary"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="primary-navigation"
            >
              {isOpen ? 'Close menu' : 'Menu'}
            </button>
          </div>
        </div>
        <nav id="primary-navigation" className={`nav-links ${isOpen ? 'nav-links--open' : ''}`} aria-label="Site">
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
