import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Pricing | SG School Phone Pouch Programme',
  'Tiered pricing for phone pouches and unlocking bases, designed for school-wide rollouts and replenishment.',
  '/pricing'
);

export default function PricingPage() {
  return (
    <div className="section-stack govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="page-hero">
        <div className="hero-grid">
          <div>
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-2">Pricing</h1>
            <p className="govuk-body-l govuk-!-margin-bottom-4">Tiered options for pouches and unlocking bases to support phased rollouts.</p>
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
              <h3 className="govuk-heading-m govuk-!-margin-bottom-2">Transparent tiers</h3>
              <p className="govuk-body">Unlocking bases are needed to unlock pouches. Contact us for lead times.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="supporting-grid">
        <div className="content-card">
          <h2 className="govuk-heading-l">Pouches</h2>
          <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
            <li>$19.90 per pouch (minimum 400 pcs)</li>
            <li>$21.90 per pouch (minimum 300 pcs)</li>
            <li>$23.90 per pouch (minimum 200 pcs)</li>
            <li>$25.90 per pouch (minimum 100 pcs)</li>
            <li>Below 100 pcs at $27.90 per pouch</li>
          </ul>
        </div>
        <div className="content-card">
          <h2 className="govuk-heading-l">Unlocking base</h2>
          <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
            <li>$499 per base</li>
            <li>Each pouch unlocks by holding the pouch to the unlocking base</li>
            <li>Unlocking bases are needed to unlock pouches</li>
          </ul>
        </div>
      </section>

      <section className="contrast-section">
        <h2 className="govuk-heading-m">Lead time and import</h2>
        <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
          <li>Please check with us for lead time.</li>
          <li>Goods are imported.</li>
        </ul>
      </section>

      <section className="callout-banner">
        <h3 className="govuk-heading-m govuk-!-margin-bottom-0">For interested schools: Please contact us immediately to roll out in 2026!</h3>
      </section>
    </div>
  );
}
