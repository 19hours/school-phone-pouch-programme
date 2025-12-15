import type { Metadata } from 'next';
import { HeroSection } from '../../components/HeroSection';
import { SummaryHighlights } from '../../components/SummaryHighlights';
import { PricingTable } from '../../components/PricingTable';
import { CTASection } from '../../components/CTASection';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Pricing | SG School Phone Pouch Programme',
  description: 'Transparent pricing for the lockable phone pouch, unlocking base, and add-ons such as name tags and logo printing.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <div>
      <HeroSection
        title="Pricing"
        lead="Clear pricing for pouches, unlocking bases, and personalisation options."
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
            'Standard pouch: $13.00 per pouch.',
            'Unlocking base: $90.00 per base.',
            'Name tag add-on: + $0.50 per pouch.',
            'School logo printing: + $0.50 per pouch, minimum quantity is 1000.',
          ]}
        />
      </section>

      <section className="section">
        <PricingTable />
      </section>

      <CTASection heading="Request a pricing confirmation" />
    </div>
  );
}
