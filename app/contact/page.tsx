import { Metadata } from 'next';
import { baseMetadata } from '@/lib/metadata';
import { CONTACT_EMAIL, CONTACT_WHATSAPP } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Contact | SG School Phone Pouch Programme',
  'Contact Kevin Chu to discuss rolling out the School Phone Pouch Programme, book demos, or request samples.',
  '/contact'
);

export default function ContactPage() {
  const tallyUrl = process.env.NEXT_PUBLIC_TALLY_URL;
  const showWarning = !tallyUrl;

  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="hero-banner govuk-!-margin-bottom-7">
        <h1 className="govuk-heading-xl govuk-!-margin-bottom-3">Contact us</h1>
        <p className="govuk-body-l govuk-!-margin-bottom-3">
          Priority message: For interested schools, please contact us immediately to roll out in 2026!
        </p>
        <div className="content-card">
          <h2 className="govuk-heading-m">Person in charge</h2>
          <p className="govuk-body">Kevin Chu</p>
          <ul className="govuk-list govuk-list--bullet">
            <li>Email: <a className="govuk-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li>WhatsApp: <a className="govuk-link" href={`https://wa.me/65${CONTACT_WHATSAPP}`}>{CONTACT_WHATSAPP}</a></li>
          </ul>
        </div>
      </section>

      <section className="content-card govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Get in touch</h2>
        {showWarning && (
          <div className="govuk-inset-text">
            <p className="govuk-body">Set NEXT_PUBLIC_TALLY_URL to embed the contact form.</p>
          </div>
        )}
        {tallyUrl && (
          <iframe
            title="Contact form"
            src={tallyUrl}
            width="100%"
            height="600"
            allowFullScreen
            loading="lazy"
          />
        )}
      </section>
    </div>
  );
}
