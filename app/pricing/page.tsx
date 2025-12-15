import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Tiered pouch pricing and unlocking base details for schools.'
};

const pricing = [
  { tier: 'Tier 1: 2000 and above', cost: '$16' },
  { tier: 'Tier 2: 1000–1900', cost: '$17' },
  { tier: 'Tier 3: 1–900', cost: '$18' }
];

export default function PricingPage() {
  return (
    <div className="section">
      <h1>Pricing</h1>
      <table className="table" aria-label="Pricing tiers">
        <thead>
          <tr>
            <th>Number of pouches</th>
            <th>Cost per pouch</th>
          </tr>
        </thead>
        <tbody>
          {pricing.map((row) => (
            <tr key={row.tier}>
              <td>{row.tier}</td>
              <td>{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="card" style={{ marginTop: '1rem' }}>
        <p>We include 1 free unlocking base for every purchase of 100 pouches.</p>
        <p>Any additional unlocking base can be purchased for $80.</p>
      </div>
      <div className="cta-row" style={{ marginTop: '1.5rem' }}>
        <Link className="button primary" href="/contact">
          Contact us to confirm quantities and rollout timeline.
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
