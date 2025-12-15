import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Customisation | SG School Phone Pouch Programme',
  'Custom pouch colours and printing options to match school identity with clear minimum order quantities and pricing.',
  '/customisation'
);

export default function CustomisationPage() {
  return (
    <div className="section-stack govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="page-hero">
        <div className="hero-grid">
          <div>
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-2">Customisation</h1>
            <p className="govuk-body-l govuk-!-margin-bottom-4">Match pouches to your school colours and add your crest for easy identification.</p>
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
              <h3 className="govuk-heading-m govuk-!-margin-bottom-2">Make it yours</h3>
              <p className="govuk-body">Choose from our palette or customise with school branding.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="supporting-grid">
        <div className="content-card">
          <h2 className="govuk-heading-l">Colour choices</h2>
          <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
            <li>Standard colours: red, black, dark blue</li>
            <li>Custom colours available (contact us)</li>
          </ul>
        </div>
        <div className="content-card">
          <h2 className="govuk-heading-l">School crest printing</h2>
          <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
            <li>$2 per pouch</li>
            <li>Minimum 300 pouches for printing</li>
          </ul>
        </div>
      </section>

      <section className="contrast-section">
        <h2 className="govuk-heading-m">Bulk minimums</h2>
        <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
          <li>Custom colours: 200 pouches minimum per colour</li>
          <li>School crest printing: 300 pouches minimum</li>
        </ul>
      </section>

      <section className="callout-banner">
        <h3 className="govuk-heading-m govuk-!-margin-bottom-0">For interested schools: Please contact us immediately to roll out in 2026!</h3>
      </section>
    </div>
  );
}
