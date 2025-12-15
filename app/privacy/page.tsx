import { Metadata } from 'next';
import { baseMetadata } from '@/lib/metadata';

export const metadata: Metadata = baseMetadata(
  'Privacy policy | SG School Phone Pouch Programme',
  'Privacy policy for the SG School Phone Pouch Programme.',
  '/privacy'
);

export default function PrivacyPage() {
  return (
    <div className="section-stack govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="page-hero">
        <h1 className="govuk-heading-xl govuk-!-margin-bottom-2">Privacy policy</h1>
        <p className="govuk-body">We respect your privacy. Contact us for any questions.</p>
      </section>
      <section className="content-card">
        <p className="govuk-body">We only use your contact details to respond to your enquiry about the School Phone Pouch Programme.</p>
        <p className="govuk-body govuk-!-margin-bottom-0">No data is sold or shared with third parties.</p>
      </section>
    </div>
  );
}
