import { Metadata } from 'next';
import { baseMetadata } from '@/lib/metadata';

export const metadata: Metadata = baseMetadata(
  'Terms | SG School Phone Pouch Programme',
  'Terms of use for the SG School Phone Pouch Programme site.',
  '/terms'
);

export default function TermsPage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <h1 className="govuk-heading-xl">Terms</h1>
      <p className="govuk-body">
        This site provides information about the SG School Phone Pouch Programme to help schools plan phone-free routines.
      </p>
      <p className="govuk-body">
        Pricing shown on this site follows the published tiers and will be confirmed based on final quantities and selected options.
      </p>
      <p className="govuk-body">While we aim to keep content accurate, the site is provided without warranties.</p>
    </div>
  );
}
