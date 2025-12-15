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
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="hero-banner govuk-!-margin-bottom-7">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-3">Customisation</h1>
            <p className="govuk-body-l govuk-!-margin-bottom-3">Match pouches to your school colours and add your crest for easy identification.</p>
            <div className="govuk-button-group">
              <Link href="/contact" className="govuk-button" role="button">
                Book a demo
              </Link>
              <a className="govuk-button govuk-button--secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
          <div className="govuk-grid-column-one-third">
            <div className="cta-panel">
              <h3 className="govuk-heading-m govuk-!-margin-bottom-2">Make it yours</h3>
              <p className="govuk-body">Choose from our palette or customise with school branding.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="govuk-grid-row govuk-!-margin-bottom-6">
        <div className="govuk-grid-column-one-half">
          <div className="content-card">
            <h2 className="govuk-heading-l">Colour choices</h2>
            <ul className="govuk-list govuk-list--bullet">
              <li>Standard colours: red, black, dark blue</li>
              <li>Custom colours available (contact us)</li>
            </ul>
          </div>
        </div>
        <div className="govuk-grid-column-one-half">
          <div className="content-card">
            <h2 className="govuk-heading-l">School crest printing</h2>
            <ul className="govuk-list govuk-list--bullet">
              <li>$2 per pouch</li>
              <li>Minimum 300 pouches for printing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contrast-section govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-m">Bulk minimums</h2>
        <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
          <li>Custom colours: 200 pouches minimum per colour</li>
          <li>School crest printing: 300 pouches minimum</li>
        </ul>
      </section>

      <section className="govuk-panel govuk-panel--confirmation">
        <h3 className="govuk-panel__title">For interested schools: Please contact us immediately to roll out in 2026!</h3>
      </section>
    </div>
  );
}
