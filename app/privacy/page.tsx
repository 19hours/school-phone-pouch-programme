import { Metadata } from 'next';
import { baseMetadata } from '@/lib/metadata';

export const metadata: Metadata = baseMetadata(
  'Privacy | SG School Phone Pouch Programme',
  'Privacy policy for SG School Phone Pouch Programme enquiries.',
  '/privacy'
);

export default function PrivacyPage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <h1 className="govuk-heading-xl">Privacy</h1>
      <p className="govuk-body">
        This site collects the details you submit via the embedded Tally form so that we can respond to your enquiry about the SG School Phone Pouch Programme.
      </p>
      <p className="govuk-body">We use the information only to contact you about your request and to plan your school’s rollout.</p>
      <p className="govuk-body">
        If you would like us to delete your submission, email kevin.chu@ct.com.sg with your request and we will remove your data.
      </p>
    </div>
  );
}
