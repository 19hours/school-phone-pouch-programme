import React from 'react';

type SummaryHighlightsProps = {
  items: string[];
  title?: string;
};

export function SummaryHighlights({ items, title = 'In brief' }: SummaryHighlightsProps) {
  return (
    <div className="inset" aria-label="Summary highlights">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
