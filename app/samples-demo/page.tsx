import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Samples & demo | SG School Phone Pouch Programme',
  'We can bring samples and host a demo in your school. Contact us to arrange a visit.',
  '/samples-demo'
);

export default function SamplesDemoPage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <h1 className="govuk-heading-xl">Samples / Demo</h1>
      <p className="govuk-body">We can bring the samples and host demo in your school.</p>
      <p className="govuk-body">Please contact us to arrange for a visit!</p>

      <div className="govuk-button-group govuk-!-margin-top-4">
        <Link className="govuk-button" href="/contact" role="button">
          Book a demo
        </Link>
        <a className="govuk-button govuk-button--secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
          WhatsApp us
        </a>
      </div>
    </div>
  );
}
