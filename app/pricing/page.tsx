import { CTASection } from '@/components/CTASection';
import { PricingTable } from '@/components/PricingTable';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Pricing | SG School Phone Pouch Programme',
  description: 'Tiered pouch pricing and unlocking base details for schools.',
  path: '/pricing',
});

const tiers = [
  { tier: 'Tier 1: 2000 and above', price: '$16' },
  { tier: 'Tier 2: 1000–1900', price: '$17' },
  { tier: 'Tier 3: 1–900', price: '$18' },
];

const note = [
  'We include 1 free unlocking base for every purchase of 100 pouches.',
  'Any additional unlocking base can be purchased for $80.',
];

export default function PricingPage() {
  return (
    <div className="container">
      <h1>Pricing</h1>
      <PricingTable tiers={tiers} note={note} />
      <CTASection text="Contact us to confirm quantities and rollout timeline." />
    </div>
  );
}
