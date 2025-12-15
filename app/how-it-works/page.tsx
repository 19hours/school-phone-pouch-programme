import type { Metadata } from 'next';
import { HeroSection } from '../../components/HeroSection';
import { SummaryHighlights } from '../../components/SummaryHighlights';
import { StepsTimeline } from '../../components/StepsTimeline';
import { CTASection } from '../../components/CTASection';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'How it works | SG School Phone Pouch Programme',
  description: 'See how the lockable pouch and unlocking base routine keeps lessons phone-free while staying student-friendly.',
  path: '/how-it-works',
});

export default function HowItWorksPage() {
  return (
    <div>
      <HeroSection
        title="How the lockable pouch routine works"
        lead="Three simple steps every day: place, lock, and unlock with oversight from your staff team."
        primaryCta={{ href: '/contact', label: 'Book a demo' }}
        secondaryCta={{
          href: 'https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school.',
          label: 'Chat on WhatsApp',
          external: true,
        }}
      />

      <section className="section">
        <SummaryHighlights
          items={[
            'Each pouch is assigned to a student and stays with them all day.',
            'Locking uses a dedicated base so queues move quickly.',
            'Emergency unlocking is available to authorised admin staff.',
          ]}
        />
      </section>

      <section className="section">
        <h2 id="daily-steps">Daily routine</h2>
        <StepsTimeline
          steps={[
            {
              title: 'Before class',
              detail: 'Students place phones into their pouches and close the child-safe clip.',
            },
            {
              title: 'Locking at the base',
              detail: 'Staff manage the unlocking base at homeroom or checkpoints. A quick tap seals the pouch visibly.',
            },
            {
              title: 'During the day',
              detail: 'Pouches stay with students, keeping devices visible yet unusable. Compliance is easy to check.',
            },
            {
              title: 'Unlocking at dismissal',
              detail: 'At authorised times, staff unlock the pouch using the base. Admin teams can unlock mid-day only when required.',
            },
          ]}
        />
      </section>

      <section className="section">
        <h2>Why it is safe for students</h2>
        <ul>
          <li>No needles are used in the lock mechanism.</li>
          <li>Child-safe clip keeps pouches closed until the base unlocks them.</li>
          <li>Admin override ensures emergencies are handled quickly.</li>
        </ul>
      </section>

      <CTASection heading="Plan the rollout for your timetable" />
    </div>
  );
}
