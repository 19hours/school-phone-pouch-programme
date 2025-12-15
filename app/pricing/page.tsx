import { CTAButtons } from '../../components/CTAButtons';
import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'Pricing | SG School Phone Pouch Programme',
  description: 'Tiered pouch pricing and unlocking base details for schools.',
  path: '/pricing',
});

const tiers = [
  { range: 'Tier 1: 2000 and above', price: '$16' },
  { range: 'Tier 2: 1000–1900', price: '$17' },
  { range: 'Tier 3: 1–900', price: '$18' },
];

export default function PricingPage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="section space-y-4">
        <h1 className="heading">Pricing</h1>
        <p className="subheading">Tiered pouch pricing and unlocking base details for schools.</p>
      </section>

      <section className="section space-y-4">
        <table className="table">
          <thead>
            <tr>
              <th>Number of pouches</th>
              <th>Cost per pouch</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier) => (
              <tr key={tier.range}>
                <td className="font-semibold text-slate-900">{tier.range}</td>
                <td className="text-slate-800">{tier.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card space-y-2 text-slate-800">
          <p>We include 1 free unlocking base for every purchase of 100 pouches.</p>
          <p>Any additional unlocking base can be purchased for $80.</p>
        </div>
      </section>

      <section className="section rounded-xl bg-primary px-6 py-10 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold">Contact us to confirm quantities and rollout timeline.</p>
          </div>
          <CTAButtons className="items-center" />
        </div>
      </section>
    </div>
  );
}
