import { Metadata } from 'next';
import { baseMetadata } from '@/lib/metadata';
import { CONTACT_EMAIL, CONTACT_WHATSAPP, WHATSAPP_LINK } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = baseMetadata(
  'Contact | SG School Phone Pouch Programme',
  'Contact Kevin Chu to discuss rolling out the School Phone Pouch Programme, book demos, or request samples.',
  '/contact'
);

export default function ContactPage() {
  const tallyUrl = process.env.NEXT_PUBLIC_TALLY_URL;
  const showWarning = !tallyUrl;

  return (
    <div className="section-stack govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="page-hero">
        <div className="hero-grid">
          <div>
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-2">Contact us</h1>
            <p className="govuk-body-l govuk-!-margin-bottom-4">
              Priority message: For interested schools, please contact us immediately to roll out in 2026!
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="govuk-button" role="button">
                Book a demo
              </Link>
              <a className="govuk-button govuk-button--secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
          <div>
            <div className="cta-panel">
              <h3 className="govuk-heading-m govuk-!-margin-bottom-2">Person in charge</h3>
              <p className="govuk-body govuk-!-margin-bottom-1">Kevin Chu</p>
              <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
                <li>Email: <a className="govuk-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
                <li>WhatsApp: <a className="govuk-link" href={`https://wa.me/65${CONTACT_WHATSAPP}`}>{CONTACT_WHATSAPP}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-card">
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
