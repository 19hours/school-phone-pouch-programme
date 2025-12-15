import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Implementation guide | SG School Phone Pouch Programme',
  'Practical rollout guidance for issuing pouches, briefing staff, and operating unlocking bases across school spaces.',
  '/implementation-guide'
);

export default function ImplementationGuidePage() {
  return (
    <div className="section-stack govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="page-hero">
        <div className="hero-grid">
          <div>
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-2">Implementation guide</h1>
            <p className="govuk-body-l govuk-!-margin-bottom-4">
              Practical steps to brief staff, issue pouches, and operate unlocking bases consistently across classrooms and halls.
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
              <h3 className="govuk-heading-m govuk-!-margin-bottom-2">Designed for schools</h3>
              <p className="govuk-body">Keep the same routine for assemblies, CCAs, camps, and exams.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="supporting-grid">
        <div className="content-card">
          <h2 className="govuk-heading-l">Preparation</h2>
          <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
            <li>Issue one pouch per student. (Label student names on pouches to reduce mix-ups.)</li>
            <li>Set up unlocking bases in the spaces where you want to allow phone usage.</li>
            <li>Brief teachers, administrators, security personnel on the routine (phone goes in pouch at entry).</li>
          </ul>
        </div>
        <div className="content-card">
          <h2 className="govuk-heading-l">Daily routine</h2>
          <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
            <li>Phones locked when students enter phone-free spaces.</li>
            <li>Students keep pouches with them at all times.</li>
            <li>Unlock when needed (end of the school day, when phone use is allowed in certain spaces).</li>
            <li>To enforce policy of specific phone-free locations, keep the unlocking bases inside approved areas.</li>
            <li>
              In emergencies, have a clear policy on where and when phones can be unlocked, and who can unlock them (eg. school security officer, principal’s office).
            </li>
          </ul>
        </div>
      </section>

      <section className="contrast-section">
        <h2 className="govuk-heading-l">Operations and tips</h2>
        <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
          <li>Train staff on using the unlocking bases and on the visual compliance check (every student has a pouch).</li>
          <li>Schedule spot-checks at entry to classrooms and halls to reinforce the habit.</li>
          <li>Use announcements and posters to remind students of the routine: phone → pouch → lock.</li>
        </ul>
      </section>

      <section className="callout-banner">
        <h3 className="govuk-heading-m govuk-!-margin-bottom-0">For interested schools: Please contact us immediately to roll out in 2026!</h3>
      </section>
    </div>
  );
}
