import { Metadata } from 'next';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Contact | SG School Phone Pouch Programme',
  'Contact Kevin Chu to discuss rollout in 2026, pricing tiers, and a school demo.',
  '/contact'
);

export default function ContactPage() {
  const tallyUrl = process.env.NEXT_PUBLIC_TALLY_URL;
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <h1 className="govuk-heading-xl">Contact</h1>
      <p className="govuk-body-l">For interested schools: Please contact us immediately to roll out in 2026!</p>

      <div className="contact-block govuk-!-margin-bottom-5">
        <p className="govuk-body">Person in charge: Kevin Chu</p>
        <p className="govuk-body">Email: kevin.chu@ct.com.sg</p>
        <p className="govuk-body">WhatsApp: 98222723</p>
      </div>

      {tallyUrl ? (
        <iframe
          title="Tally contact form"
          src={tallyUrl}
          width="100%"
          height="600"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="govuk-inset-text">NEXT_PUBLIC_TALLY_URL is not set. Please configure the Tally embed URL.</div>
      )}

      <p className="govuk-body govuk-!-margin-top-4">
        By submitting this form, you agree to be contacted about the SG School Phone Pouch Programme.
      </p>

      <div className="govuk-button-group govuk-!-margin-top-4">
        <a className="govuk-button govuk-button--secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
          Chat with us on WhatsApp
        </a>
      </div>
    </div>
  );
}
