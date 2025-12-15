import { HeroSection } from '../components/HeroSection';
import { SummaryHighlights } from '../components/SummaryHighlights';
import { FeatureCards } from '../components/FeatureCards';
import { StepsTimeline } from '../components/StepsTimeline';
import { CTASection } from '../components/CTASection';
import { buildMetadata } from '../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
  title: 'SG School Phone Pouch Programme | Lockable pouches for phone-free classrooms',
  description:
    'Lockable phone pouches with unlocking bases to keep lessons phone-free while students keep devices with them all day.',
  path: '/',
});

export default function HomePage() {
  return (
    <div>
      <HeroSection
        title="Phone-free classrooms made simple"
        lead="Lockable pouches with a reliable unlocking base keep devices visible but out of use during lessons, without needing bulky lockers."
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
            'Visible compliance without collecting phones centrally.',
            'Pouch stays with the student all day and is unlocked at homeroom.',
            'Unlocking base routine keeps traffic moving each morning and dismissal.',
            'Emergency unlocking by authorised admin staff when needed.',
          ]}
        />
      </section>

      <section className="section">
        <h2>Why schools choose the pouch approach</h2>
        <FeatureCards
          cards={[
            {
              title: 'Problem: phones distract and delay',
              copy: 'Uncollected devices disrupt focus and create admin overhead when kept in lockers or bags.',
            },
            {
              title: 'Solution: lockable pouch + unlocking base',
              copy: 'Students secure their phone in a personal pouch that stays with them. Unlocking bases open pouches at authorised times.',
            },
            {
              title: 'Safety: no needles, child-safe clip',
              copy: 'The locking system avoids sharp pins and uses a simple child-safe clip managed by staff at the base.',
            },
          ]}
        />
      </section>

      <section className="section">
        <h2>How it works</h2>
        <StepsTimeline
          steps={[
            {
              title: 'Place phone in pouch',
              detail: 'Each student keeps their assigned pouch and places the phone inside before lessons start.',
            },
            {
              title: 'Lock at the base',
              detail: 'A quick tap on the unlocking base secures the pouch. Visual locks show compliance at a glance.',
            },
            {
              title: 'Unlock when authorised',
              detail: 'At dismissal or for emergencies, staff use the base to unlock the pouch. Admin teams can override when required.',
            },
          ]}
        />
      </section>

      <CTASection />
    </div>
  );
}
