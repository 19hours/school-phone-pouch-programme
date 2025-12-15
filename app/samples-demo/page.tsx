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
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="hero-banner govuk-!-margin-bottom-7">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-3">Samples & demo</h1>
            <p className="govuk-body-l govuk-!-margin-bottom-3">Request samples or a live walkthrough of the School Phone Pouch Programme.</p>
            <div className="govuk-button-group">
              <Link href="/contact" className="govuk-button" role="button">
                Book a demo
              </Link>
              <a className="govuk-button govuk-button--secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-card govuk-!-margin-bottom-6">
        <p className="govuk-body">We have demo units available and can demonstrate how the School Phone Pouch Programme works.</p>
        <p className="govuk-body govuk-!-margin-bottom-0">Please contact us via email, WhatsApp, or the form to book a live demo.</p>
      </section>

      <section className="govuk-panel govuk-panel--confirmation">
        <h3 className="govuk-panel__title">For interested schools: Please contact us immediately to roll out in 2026!</h3>
      </section>
    </div>
  );
}
