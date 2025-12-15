import type { Metadata } from 'next';
import { HeroSection } from '../../components/HeroSection';
import { CTASection } from '../../components/CTASection';
import { SummaryHighlights } from '../../components/SummaryHighlights';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Samples & demo | SG School Phone Pouch Programme',
  description: 'We can bring samples and host a demo in your school. Contact us to arrange a visit.',
  path: '/samples-demo',
});

export default function SamplesDemoPage() {
  return (
    <div>
      <HeroSection
        title="Samples / Demo"
        lead="We can bring the samples and host demo in your school. Please contact us to arrange for a visit!"
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
            'Bring samples to your campus.',
            'Live unlocking base demo with your staff present.',
            'Discuss rollout timelines and 2026 planning.',
          ]}
        />
      </section>

      <section className="section">
        <h2>What to expect during the visit</h2>
        <ul>
          <li>Hands-on demo of the lockable pouch and unlocking base routine.</li>
          <li>Time for leadership teams to test emergency unlocks and check student handling.</li>
          <li>Clarify pricing, logo printing, and name tag options on the spot.</li>
        </ul>
      </section>

      <CTASection heading="Schedule an on-campus demo" />
    </div>
  );
}
