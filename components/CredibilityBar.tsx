import { COMPANY_NAME, COMPANY_UEN } from '@/lib/site';

export default function CredibilityBar() {
  return (
    <div className="credibility-bar" aria-label="Credibility statement">
      <div className="govuk-width-container credibility-content">
        <span className="govuk-!-margin-right-2" aria-hidden="true">
          ●
        </span>
        <p className="govuk-body-s govuk-!-margin-bottom-0">
          <strong>Government registered vendor on vendors@gov, since 2019.</strong>{' '}
          <span>
            {COMPANY_NAME} (UEN: {COMPANY_UEN}).
          </span>
        </p>
      </div>
    </div>
  );
}
