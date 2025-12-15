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
            <p className="govuk-body">© {new Date().getFullYear()} {COMPANY_NAME}</p>
          </div>
          <div className="govuk-grid-column-one-half">
            <ul className="govuk-list govuk-list--inline govuk-!-margin-bottom-0 govuk-!-display-flex govuk-!-justify-content-flex-end" aria-label="Footer links">
              <li><Link className="govuk-link" href="/privacy">Privacy</Link></li>
              <li><Link className="govuk-link" href="/terms">Terms</Link></li>
              <li><Link className="govuk-link" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
