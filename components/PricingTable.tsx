import React from 'react';

export function PricingTable() {
  const rows = [
    { label: 'Standard pouch', price: '$13.00 per pouch', note: 'Includes lockable pouch with unique ID' },
    { label: 'Unlocking base', price: '$90.00 per base', note: 'For daily homeroom unlocking routine' },
    { label: 'Name tag add-on', price: '+ $0.50 per pouch', note: 'Useful for students to see who the pouch belongs to' },
    { label: 'School logo printing', price: '+ $0.50 per pouch', note: 'Minimum quantity is 1000' },
  ];
  return (
    <div>
      <div className="table-wrapper">
        <table>
          <caption className="caption">Pricing and optional add-ons</caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Pricing</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.price}</td>
                <td>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="inset" style={{ marginTop: '1rem' }}>
        Final quotes will confirm quantities, options, and delivery schedules.
      </div>
    </div>
  );
}
