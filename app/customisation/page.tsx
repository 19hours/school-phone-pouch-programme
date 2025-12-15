import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Customisation | SG School Phone Pouch Programme',
  'Pouch colour options, name card holder, and school logo printing for qualifying quantities.',
  '/customisation'
);

export default function CustomisationPage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <h1 className="govuk-heading-xl">Customisation</h1>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Pouch colour</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>Useful for differentiating different student levels (P1 → Green, P2 → Yellow etc.)</li>
          <li>Choose from: Red, Orange, Yellow, Green, Blue, Indigo, Purple, Black, Grey.</li>
          <li>Free for quantities above 1000.</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Name card holder for easy identification</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>Useful for students to see who the pouch belongs to</li>
          <li>+ $0.50 per pouch</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">School logo printing</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>Add your school logo (single colour print) on every pouch for more personalisation!</li>
          <li>+ $0.50 per pouch, minimum quantity is 1000</li>
        </ul>
      </section>

      <div className="govuk-panel govuk-panel--confirmation">
        <h3 className="govuk-panel__title">Book a demo</h3>
        <div className="govuk-button-group">
          <Link className="govuk-button" href="/contact" role="button">
            Book a demo
          </Link>
          <a className="govuk-button govuk-button--secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
      </div>
    </div>
  );
}
