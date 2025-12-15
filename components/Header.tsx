'use client';

import Link from 'next/link';
import { WHATSAPP_LINK, SITE_NAME } from '@/lib/site';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <header className="site-header" role="banner">
      <div className="site-header__top" aria-label="Site identity and actions">
        <div className="govuk-width-container site-header__top-inner">
          <div className="brand-block">
            <Link href="/" className="site-name" aria-label="Home">
              <span className="govuk-caption-m">SG School Phone Pouch Programme</span>
              <span className="govuk-heading-m govuk-!-margin-bottom-0">Simple, visible phone compliance for schools</span>
            </Link>
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
      </div>
      <nav id="primary-navigation" className={`site-nav ${isOpen ? 'site-nav--open' : ''}`} aria-label="Site">
        <div className="govuk-width-container">
          <ul className="nav-links">
            <li>
              <Link href="/" className="govuk-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="govuk-link">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/programme" className="govuk-link">
                Programme
              </Link>
            </li>
            <li>
              <Link href="/implementation-guide" className="govuk-link">
                Implementation guide
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="govuk-link">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/customisation" className="govuk-link">
                Customisation
              </Link>
            </li>
            <li>
              <Link href="/samples-demo" className="govuk-link">
                Samples & demo
              </Link>
            </li>
            <li>
              <Link href="/contact" className="govuk-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
