import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '../../components/HeroSection';
import { SummaryHighlights } from '../../components/SummaryHighlights';
import { FeatureCards } from '../../components/FeatureCards';
import { ComparisonTable } from '../../components/ComparisonTable';
import { CTASection } from '../../components/CTASection';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Programme | SG School Phone Pouch Programme',
  description: 'Programme overview of the lockable phone pouch, unlocking bases, and how it differs from phone lockers.',
  path: '/programme',
});

export default function ProgrammePage() {
  const comparisonRows = [
    {
      label: 'Where the phone stays',
      pouch: 'With the student in their pouch; visible compliance at all times.',
      lockers: 'In a locker bay; students queue to store and retrieve.',
    },
    {
      label: 'Speed each morning',
      pouch: 'Fast tap at unlocking base; homeroom routine built-in.',
      lockers: 'Queueing and manual logging slows start of day.',
    },
    {
      label: 'Emergency access',
      pouch: 'Admin staff can unlock individual pouches immediately.',
      lockers: 'Requires accessing locker keys or combinations before retrieval.',
    },
    {
      label: 'Classroom visibility',
      pouch: 'Teacher can see locked pouches on desks or in bags.',
      lockers: 'Phones are out of sight; harder to verify compliance.',
    },
  ];

  return (
    <div>
      <HeroSection
        title="The SG School Phone Pouch Programme"
        lead="A student-held pouch with a controlled unlocking base so schools keep learning focused without installing lockers."
        primaryCta={{ href: '/contact', label: 'Book a demo' }}
        secondaryCta={{
          href: 'https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school.',
          label: 'WhatsApp us',
          external: true,
        }}
      />

      <section className="section">
        <SummaryHighlights
          items={[
            'Designed for visible compliance and quick routines.',
            'Pouches stay with students all day.',
            'Unlocking base routine replaces phone locker bottlenecks.',
          ]}
        />
      </section>

      <section className="section">
        <h2>What is included</h2>
        <FeatureCards
          cards={[
            {
              title: 'Lockable pouch',
              copy: 'A durable pouch with a unique ID that remains with each student throughout the day.',
            },
            {
              title: 'Unlocking base',
              copy: 'A base unit used by staff to lock and unlock pouches during homeroom, dismissal, and authorised cases.',
            },
            {
              title: 'Admin-ready controls',
              copy: 'Procedures for emergency unlocks by authorised staff without disrupting the rest of the cohort.',
            },
          ]}
        />
      </section>

      <section className="section" id="comparison">
        <h2>How it compares to phone lockers</h2>
        <ComparisonTable rows={comparisonRows} />
        <p style={{ marginTop: '1rem' }}>
          Looking to plan rollout steps? Visit the{' '}
          <Link href="/implementation-guide">Implementation guide</Link> or see the{' '}
          <Link href="/pricing">Pricing</Link> options.
        </p>
      </section>

      <CTASection heading="Bring the programme to your school" />
    </div>
  );
}
