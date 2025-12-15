import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'Three simple steps: phone goes into pouch on entry, pouch stays locked during the lesson, unlock at an approved base when allowed.'
};

export default function HowItWorksPage() {
  return (
    <div className="section">
      <h1>How it works</h1>
      <p>
        A simple routine that creates fast, visible compliance checks for teachers and administrators.
      </p>
      <div className="step-list" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <h3>Step 1 — Phone goes into pouch on entry</h3>
          <p>
            When students enter a phone-free space (for example, a classroom or assembly hall), they place their phones into
            their personal pouches.
          </p>
          <ul>
            <li>Each student has a clearly labelled pouch.</li>
            <li>Teachers do a quick visual check rather than handling phones.</li>
            <li>This becomes part of the normal start-of-lesson or start-of-day routine.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Step 2 — Pouch stays locked during lesson</h3>
          <p>
            While students are in the phone-free space, the pouch remains locked. They keep the pouch with them, but cannot
            access their phones.
          </p>
          <ul>
            <li>No keys to manage – the lock is built into the pouch.</li>
            <li>The clip design avoids needles or sharp points, making it more child-friendly than some pin-and-lock solutions.</li>
            <li>Phones are physically present but not available, reducing under-the-table use and distraction.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Step 3 — Unlock at a base when allowed</h3>
          <p>
            When students are allowed to use their phones (for example, at dismissal or at designated times), they step outside
            the phone-free zone and tap their pouch on an unlocking base.
          </p>
          <ul>
            <li>Unlocking bases are installed at locations chosen by the school.</li>
            <li>Students unlock only at approved times, supporting consistent expectations.</li>
            <li>The same routine applies across classes, reducing confusion and negotiation.</li>
          </ul>
        </div>
      </div>
      <div className="cta-row" style={{ marginTop: '1.5rem' }}>
        <Link className="button primary" href="/contact">
          Book a demo
        </Link>
        <a
          className="button secondary"
          href="https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp us
        </a>
      </div>
    </div>
  );
}
