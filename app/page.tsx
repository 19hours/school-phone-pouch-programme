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
      <section className="govuk-!-margin-bottom-6">
        <h1 className="govuk-heading-xl">SG School Phone Pouch Programme</h1>
        <p className="govuk-body-l">
          A simple, visible and easy-to-audit way to manage phones in phone-free spaces.
        </p>
        <div className="govuk-button-group">
          <Link href="/contact" className="govuk-button" role="button">
            Book a demo
          </Link>
          <a className="govuk-button govuk-button--secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Chat with us on WhatsApp
          </a>
        </div>
        <div className="trust-badge govuk-!-margin-top-4">
          <p className="govuk-body govuk-!-margin-bottom-1">Chu Technologies Pte Ltd (UEN: 201926755K).</p>
          <p className="govuk-body">Government registered vendor on vendors@gov, since 2019.</p>
        </div>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Problem: Difficulty in managing phones in classroom environments</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>Students are often distracted by smartphones.</li>
          <li>Schools and exam centres need simple, visible compliance.</li>
          <li>Bags and pockets still allow discreet phone use.</li>
          <li>Administrators need a consistent, easy-to-audit solution.</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Solution: School Phone Pouch Programme</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>Each student places their phone into a personal phone pouch as they enter a phone-free space.</li>
          <li>
            The pouch uses a safe clip mechanism, and can be unlocked using a magnetic base when students are allowed to use their
            phones again.
          </li>
          <li>Pouch stays with the student entire day, easy to show the phone is secured.</li>
          <li>Can be unlocked by admin staff during emergencies.</li>
          <li>Enables fast, visual compliance checks for teachers and administrators.</li>
        </ul>
        <div className="govuk-inset-text">
          <p className="govuk-body govuk-!-margin-bottom-1">Lock that can only be unlocked using an unlocking base.</p>
          <p className="govuk-body">Compatible with all phone models.</p>
        </div>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Student safety is our priority</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>Our lockable phone pouches do not use needles.</li>
          <li>We use child-safe clips with locking technology.</li>
          <li>Student safety is our PRIORITY.</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-m">Explore more</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>
            <Link className="govuk-link" href="/programme">
              Programme vs Phone Lockers
            </Link>
          </li>
        </ul>
      </section>

      <section className="govuk-panel govuk-panel--confirmation">
        <h3 className="govuk-panel__title">For interested schools: Please contact us immediately to roll out in 2026!</h3>
      </section>
    </div>
  );
}
