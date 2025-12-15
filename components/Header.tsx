'use client';

import Link from 'next/link';
import { WHATSAPP_LINK, SITE_NAME } from '@/lib/site';

export default function Header() {
  return (
    <header className="site-header">
      <div className="govuk-width-container neutral-header">
        <div className="nav-links">
          <Link href="/" className="govuk-heading-m" aria-label="Home">
            {SITE_NAME}
          </Link>
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
          <Link href="/contact" className="govuk-button govuk-!-margin-left-3" role="button">
            Book a demo
          </Link>
          <a
            className="govuk-link secondary-link"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </header>
  );
}
