import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Samples & demo | SG School Phone Pouch Programme',
  'Request samples or book a live demo to see the School Phone Pouch Programme in action.',
  '/samples-demo'
);

export default function SamplesDemoPage() {
  return (
    <div className="section-stack govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="page-hero">
        <div className="hero-grid">
          <div>
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-2">Samples & demo</h1>
            <p className="govuk-body-l govuk-!-margin-bottom-4">Request samples or a live walkthrough of the School Phone Pouch Programme.</p>
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
              <h3 className="govuk-heading-m govuk-!-margin-bottom-2">Hands-on validation</h3>
              <p className="govuk-body">See the pouches and unlocking bases in action before rollout.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-card">
        <p className="govuk-body">We have demo units available and can demonstrate how the School Phone Pouch Programme works.</p>
        <p className="govuk-body govuk-!-margin-bottom-0">Please contact us via email, WhatsApp, or the form to book a live demo.</p>
      </section>

      <section className="callout-banner">
        <h3 className="govuk-heading-m govuk-!-margin-bottom-0">For interested schools: Please contact us immediately to roll out in 2026!</h3>
      </section>
    </div>
  );
}
