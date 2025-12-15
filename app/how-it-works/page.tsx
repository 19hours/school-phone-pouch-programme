import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'How it works | SG School Phone Pouch Programme',
  'Three simple steps: phone goes into pouch on entry, pouch stays locked during lesson, unlock at an approved base when allowed.',
  '/how-it-works'
);

export default function HowItWorksPage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <h1 className="govuk-heading-xl">How it works</h1>
      <p className="govuk-body-l">A simple routine that creates fast, visible compliance checks for teachers and administrators.</p>

      <section className="govuk-!-margin-top-4 govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Step 1 — Phone goes into pouch on entry</h2>
        <p className="govuk-body">
          When students enter a phone-free space (for example, a classroom or assembly hall), they place their phones into their personal pouches.
        </p>
        <ul className="govuk-list govuk-list--bullet">
          <li>Each student has a clearly labelled pouch.</li>
          <li>Teachers do a quick visual check rather than handling phones.</li>
          <li>This becomes part of the normal start-of-lesson or start-of-day routine.</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Step 2 — Pouch stays locked during lesson</h2>
        <p className="govuk-body">
          While students are in the phone-free space, the pouch remains locked. They keep the pouch with them, but cannot access their phones.
        </p>
        <ul className="govuk-list govuk-list--bullet">
          <li>No keys to manage – the lock is built into the pouch.</li>
          <li>The clip design avoids needles or sharp points, making it more child-friendly than some pin-and-lock solutions.</li>
          <li>Phones are physically present but not available, reducing under-the-table use and distraction.</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Step 3 — Unlock at a base when allowed</h2>
        <p className="govuk-body">
          When students are allowed to use their phones (for example, at dismissal or at designated times), they step outside the phone-free zone and tap their pouch on an unlocking base.
        </p>
        <ul className="govuk-list govuk-list--bullet">
          <li>Unlocking bases are installed at locations chosen by the school.</li>
          <li>Students unlock only at approved times, supporting consistent expectations.</li>
          <li>The same routine applies across classes, reducing confusion and negotiation.</li>
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
