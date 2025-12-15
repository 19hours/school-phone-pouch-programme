import React from 'react';

interface FeatureItem {
  title: string;
  bullets: string[];
}

export function FeatureGrid({ items }: { items: FeatureItem[] }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <div key={item.title} className="card">
          <h3>{item.title}</h3>
          <ul>
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
