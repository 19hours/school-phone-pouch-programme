import { Metadata } from 'next';
import { baseMetadata } from '@/lib/metadata';

export const metadata: Metadata = baseMetadata(
  'Terms of use | SG School Phone Pouch Programme',
  'Terms of use for the SG School Phone Pouch Programme website.',
  '/terms'
);

export default function TermsPage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="hero-banner govuk-!-margin-bottom-5">
        <h1 className="govuk-heading-xl govuk-!-margin-bottom-3">Terms of use</h1>
        <p className="govuk-body">Please review these terms when using the SG School Phone Pouch Programme website.</p>
      </section>
      <section className="content-card">
        <p className="govuk-body">Use this website to learn about the School Phone Pouch Programme and contact us for demos or pricing.</p>
        <p className="govuk-body govuk-!-margin-bottom-0">Do not misuse the site or submit unlawful content.</p>
      </section>
    </div>
  );
}
