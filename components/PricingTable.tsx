import React from 'react';

interface Tier {
  tier: string;
  price: string;
}

export function PricingTable({ tiers, note }: { tiers: Tier[]; note: string[] }) {
  return (
    <div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th scope="col">Number of pouches</th>
              <th scope="col">Cost per pouch</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier) => (
              <tr key={tier.tier}>
                <th scope="row">{tier.tier}</th>
                <td>{tier.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="inset" style={{ marginTop: '1rem' }}>
        <ul>
          {note.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
