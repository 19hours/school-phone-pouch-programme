import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Pricing | SG School Phone Pouch Programme',
  'Tiered pouch pricing and unlocking base details for schools.',
  '/pricing'
);

export default function PricingPage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <h1 className="govuk-heading-xl">Pricing</h1>
      <table className="govuk-table govuk-!-margin-bottom-6">
        <caption className="govuk-table__caption govuk-table__caption--m">Pouch pricing</caption>
        <thead className="govuk-table__head">
          <tr className="govuk-table__row">
            <th scope="col" className="govuk-table__header">Number of pouches</th>
            <th scope="col" className="govuk-table__header">Cost per pouch</th>
          </tr>
        </thead>
        <tbody className="govuk-table__body">
          <tr className="govuk-table__row">
            <td className="govuk-table__cell">Tier 1: 2000 and above</td>
            <td className="govuk-table__cell">$16</td>
          </tr>
          <tr className="govuk-table__row">
            <td className="govuk-table__cell">Tier 2: 1000–1900</td>
            <td className="govuk-table__cell">$17</td>
          </tr>
          <tr className="govuk-table__row">
            <td className="govuk-table__cell">Tier 3: 1–900</td>
            <td className="govuk-table__cell">$18</td>
          </tr>
        </tbody>
      </table>

      <div className="govuk-inset-text govuk-!-margin-bottom-6">
        <p className="govuk-body govuk-!-margin-bottom-1">We include 1 free unlocking base for every purchase of 100 pouches.</p>
        <p className="govuk-body">Any additional unlocking base can be purchased for $80.</p>
      </div>

      <div className="govuk-panel govuk-panel--confirmation">
        <h3 className="govuk-panel__title">Contact us to confirm quantities and rollout timeline.</h3>
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
