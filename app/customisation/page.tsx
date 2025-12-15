import type { Metadata } from 'next';
import { HeroSection } from '../../components/HeroSection';
import { SummaryHighlights } from '../../components/SummaryHighlights';
import { FeatureCards } from '../../components/FeatureCards';
import { CTASection } from '../../components/CTASection';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Customisation | SG School Phone Pouch Programme',
  description: 'Personalise pouches with name tags and school logo printing to keep ownership clear for every student.',
  path: '/customisation',
});

export default function CustomisationPage() {
  return (
    <div>
      <HeroSection
        title="Customisation options"
        lead="Keep pouches clearly assigned to each student with name tags and school branding."
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
            'Useful for students to see who the pouch belongs to.',
            'Add your school logo (single colour print) on every pouch for more personalisation!',
            '+ $0.50 per pouch, minimum quantity is 1000.',
          ]}
        />
      </section>

      <section className="section">
        <h2>Available options</h2>
        <FeatureCards
          cards={[
            {
              title: 'Name tag add-on',
              copy: 'Useful for students to see who the pouch belongs to. + $0.50 per pouch.',
            },
            {
              title: 'School logo printing',
              copy: 'Add your school logo (single colour print) on every pouch for more personalisation! + $0.50 per pouch, minimum quantity is 1000.',
            },
            {
              title: 'Clear ownership',
              copy: 'Personalisation keeps pouches identifiable and reduces mix-ups during locker checks or homeroom routines.',
            },
          ]}
        />
      </section>

      <CTASection heading="Discuss personalisation details" />
    </div>
  );
}
