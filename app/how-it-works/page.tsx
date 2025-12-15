import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'How it works | SG School Phone Pouch Programme',
  'See the routine that keeps phones locked in pouches during phone-free periods and easily auditable across classrooms and halls.',
  '/how-it-works'
);

export default function HowItWorksPage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="hero-banner govuk-!-margin-bottom-7">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-3">How it works</h1>
            <p className="govuk-body-l govuk-!-margin-bottom-3">
              The School Phone Pouch Programme keeps phones locked during phone-free periods while staying visible and easy to audit.
            </p>
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
              <h3 className="govuk-heading-m govuk-!-margin-bottom-2">Simple, visible routine</h3>
              <p className="govuk-body">Issue pouches, brief students and staff, and keep compliance checks visible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="govuk-grid-row govuk-!-margin-bottom-6">
        <div className="govuk-grid-column-one-half">
          <div className="content-card">
            <h2 className="govuk-heading-l">Step 1: Phones in pouches at entry</h2>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>Students place their phones into personal phone pouches when entering a phone-free space.</li>
              <li>Teacher or invigilator can visually confirm that each student has their phone secured.</li>
            </ul>
          </div>
        </div>
        <div className="govuk-grid-column-one-half">
          <div className="content-card">
            <h2 className="govuk-heading-l">Step 2: Phones remain with students</h2>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>Students keep their pouches with them, reducing anxiety about loss or theft.</li>
              <li>Maintains visibility: everyone can see phones are secured, without needing lockers.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="govuk-grid-row govuk-!-margin-bottom-6">
        <div className="govuk-grid-column-one-half">
          <div className="content-card">
            <h2 className="govuk-heading-l">Step 3: Unlock when allowed</h2>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>At allowed times, staff use unlocking bases to open pouches.</li>
              <li>Unlocking bases define where and when phones can be used again.</li>
            </ul>
          </div>
        </div>
        <div className="govuk-grid-column-one-half">
          <div className="content-card">
            <h2 className="govuk-heading-l">Step 4: Consistent checks</h2>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>Easy visual compliance: pouch visible at all times.</li>
              <li>Flexible: works in classrooms, halls, CCAs, camps, exams.</li>
              <li>Can be unlocked by admin staff during emergencies.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="govuk-panel govuk-panel--confirmation">
        <h3 className="govuk-panel__title">For interested schools: Please contact us immediately to roll out in 2026!</h3>
      </section>
    </div>
  );
}
