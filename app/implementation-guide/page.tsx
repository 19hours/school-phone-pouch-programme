import type { Metadata } from 'next';
import { HeroSection } from '../../components/HeroSection';
import { SummaryHighlights } from '../../components/SummaryHighlights';
import { StepsTimeline } from '../../components/StepsTimeline';
import { CTASection } from '../../components/CTASection';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Implementation guide | SG School Phone Pouch Programme',
  description: 'Step-by-step implementation guidance for rolling out the phone pouch programme in your school.',
  path: '/implementation-guide',
});

export default function ImplementationGuidePage() {
  return (
    <div>
      <HeroSection
        title="Implementation guide"
        lead="A clear roll-out plan so staff, students, and parents know what to expect from day one."
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
            'Designed for quick deployment with minimal classroom disruption.',
            'Clear role for admin staff to manage unlocking bases.',
            'Emphasises communication with parents and students.',
          ]}
        />
      </section>

      <section className="section">
        <h2>Roll-out steps</h2>
        <StepsTimeline
          steps={[
            {
              title: 'Confirm quantities and add-ons',
              detail: 'Finalise pouch counts, name tags (+ $0.50 per pouch), and optional school logo printing.',
            },
            {
              title: 'Set up unlocking bases',
              detail: 'Place bases at homeroom or controlled entry points. Brief staff on operating routines and admin overrides.',
            },
            {
              title: 'Communicate the routine',
              detail: 'Inform parents, students, and staff about the daily pouch use, including emergency unlock process.',
            },
            {
              title: 'Issue pouches to students',
              detail: 'Assign pouches so each student keeps their own throughout the day. Labels or logo print help identification.',
            },
            {
              title: 'Run the first week with support',
              detail: 'Monitor queues, adjust base placement, and keep admin staff ready for any mid-day unlocks.',
            },
          ]}
        />
      </section>

      <CTASection heading="Need help planning the rollout?" />
    </div>
  );
}
