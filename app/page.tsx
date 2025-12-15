import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';
import { Metadata } from 'next';

export const metadata: Metadata = baseMetadata(
  'SG School Phone Pouch Programme | Simple, visible phone compliance for schools',
  'A simple, easy-to-audit phone management routine: students place phones into a personal locked pouch in phone-free spaces and unlock at approved times using an unlocking base.',
  '/'
);

export default function HomePage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <section className="hero-banner govuk-!-margin-bottom-7">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-3">SG School Phone Pouch Programme</h1>
            <p className="govuk-body-l govuk-!-margin-bottom-4">
              A simple, visible and easy-to-audit way to manage phones in phone-free spaces.
            </p>
            <div className="govuk-button-group govuk-!-margin-bottom-4">
              <Link href="/contact" className="govuk-button" role="button">
                Book a demo
              </Link>
              <a className="govuk-button govuk-button--secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Chat with us on WhatsApp
              </a>
            </div>
            <div className="govuk-inset-text govuk-!-margin-bottom-2">
              <p className="govuk-body govuk-!-margin-bottom-1">Lock that can only be unlocked using an unlocking base.</p>
              <p className="govuk-body">Compatible with all phone models.</p>
            </div>
          </div>
          <div className="govuk-grid-column-one-third">
            <div className="cta-panel">
              <h3 className="govuk-heading-m govuk-!-margin-bottom-2">Student safety is our priority</h3>
              <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
                <li>Our lockable phone pouches do not use needles.</li>
                <li>We use child-safe clips with locking technology.</li>
                <li>Student safety is our PRIORITY.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="govuk-grid-row govuk-!-margin-bottom-6">
        <div className="govuk-grid-column-one-half">
          <div className="content-card">
            <h2 className="govuk-heading-l">Problem: Difficulty in managing phones in classroom environments</h2>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>Students are often distracted by smartphones.</li>
              <li>Schools and exam centres need simple, visible compliance.</li>
              <li>Bags and pockets still allow discreet phone use.</li>
              <li>Administrators need a consistent, easy-to-audit solution.</li>
            </ul>
          </div>
        </div>
        <div className="govuk-grid-column-one-half">
          <div className="content-card">
            <h2 className="govuk-heading-l">Solution: School Phone Pouch Programme</h2>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>Each student places their phone into a personal phone pouch as they enter a phone-free space.</li>
              <li>
                The pouch uses a safe clip mechanism, and can be unlocked using a magnetic base when students are allowed to use their
                phones again.
              </li>
              <li>Pouch stays with the student entire day, easy to show the phone is secured.</li>
              <li>Can be unlocked by admin staff during emergencies.</li>
              <li>Enables fast, visual compliance checks for teachers and administrators.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="govuk-grid-row govuk-!-margin-bottom-6">
        <div className="govuk-grid-column-one-third">
          <div className="content-card">
            <h3 className="govuk-heading-m">How it works</h3>
            <p className="govuk-body">See the step-by-step routine that keeps phones visible and secure.</p>
            <Link href="/how-it-works" className="govuk-link">
              Learn how it works
            </Link>
          </div>
        </div>
        <div className="govuk-grid-column-one-third">
          <div className="content-card">
            <h3 className="govuk-heading-m">Programme vs phone lockers</h3>
            <p className="govuk-body">Compare our pouch approach against traditional phone lockers.</p>
            <Link href="/programme" className="govuk-link">
              Programme comparison
            </Link>
          </div>
        </div>
        <div className="govuk-grid-column-one-third">
          <div className="content-card">
            <h3 className="govuk-heading-m">Ready to roll out</h3>
            <p className="govuk-body">Implementation guide, pricing, and samples to help you plan.</p>
            <ul className="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
              <li>
                <Link href="/implementation-guide" className="govuk-link">
                  Implementation guide
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="govuk-link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/samples-demo" className="govuk-link">
                  Samples & demo
                </Link>
              </li>
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
