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
    <div className="section-stack govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="page-hero">
        <div className="hero-grid">
          <div>
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-2">How it works</h1>
            <p className="govuk-body-l govuk-!-margin-bottom-4">
              The School Phone Pouch Programme keeps phones locked during phone-free periods while staying visible and easy to audit.
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
              <h3 className="govuk-heading-m govuk-!-margin-bottom-2">Simple, visible routine</h3>
              <p className="govuk-body">Issue pouches, brief students and staff, and keep compliance checks visible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-stack">
        <div className="section-heading">
          <h2 className="govuk-heading-l govuk-!-margin-bottom-2">A simple routine that creates fast, visible compliance checks for teachers and administrators.</h2>
        </div>
        <div className="supporting-grid">
          <div className="content-card">
            <h3 className="govuk-heading-m">Step 1: Phones in pouches at entry</h3>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>When students enter a phone-free space (for example, a classroom or assembly hall), they place their phones into their personal pouches.</li>
              <li>Each student has a clearly labelled pouch.</li>
              <li>Teacher or invigilator can visually confirm that each student has their phone secured.</li>
            </ul>
          </div>
          <div className="content-card">
            <h3 className="govuk-heading-m">Step 2: Phones remain with students</h3>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>Students keep their pouches with them throughout the day.</li>
              <li>Reduces anxiety about theft or loss because phones stay with students.</li>
              <li>Maintains visibility: everyone can see phones are secured, without needing lockers.</li>
            </ul>
          </div>
          <div className="content-card">
            <h3 className="govuk-heading-m">Step 3: Unlock when allowed</h3>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>At allowed times, staff use unlocking bases to open pouches.</li>
              <li>Unlocking bases define where and when phones can be used again.</li>
              <li>Can be unlocked by admin staff during emergencies.</li>
            </ul>
          </div>
          <div className="content-card">
            <h3 className="govuk-heading-m">Consistency for audit</h3>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>Easy visual compliance: pouch visible at all times.</li>
              <li>Flexible: works in classrooms, halls, CCAs, camps, exams.</li>
              <li>Supports simple, repeatable routines for staff and students.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="callout-banner">
        <h3 className="govuk-heading-m govuk-!-margin-bottom-0">For interested schools: Please contact us immediately to roll out in 2026!</h3>
      </section>
    </div>
  );
}
