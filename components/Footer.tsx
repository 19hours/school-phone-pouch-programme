import Link from 'next/link';
import { COMPANY_NAME, COMPANY_UEN } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="govuk-width-container">
        <div className="trust-badge govuk-!-margin-bottom-4">
          <p className="govuk-body govuk-!-margin-bottom-1">Government registered vendor on vendors@gov, since 2019.</p>
          <p className="govuk-body">{COMPANY_NAME} (UEN: {COMPANY_UEN}).</p>
        </div>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <p className="govuk-heading-m govuk-!-margin-bottom-1">SG School Phone Pouch Programme</p>
            <p className="govuk-body">Secure, visible phone compliance with lockable pouches and unlocking bases.</p>
            <p className="govuk-body">© {new Date().getFullYear()} {COMPANY_NAME}</p>
          </div>
          <div className="govuk-grid-column-one-half govuk-!-text-align-right">
            <div className="footer-links" aria-label="Footer links">
              <Link className="govuk-link" href="/privacy">
                Privacy
              </Link>
              <Link className="govuk-link" href="/terms">
                Terms
              </Link>
              <Link className="govuk-link" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
