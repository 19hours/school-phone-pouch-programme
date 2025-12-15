import React from 'react';

type Card = {
  title: string;
  copy: string;
};

type FeatureCardsProps = {
  cards: Card[];
};

export function FeatureCards({ cards }: FeatureCardsProps) {
  return (
    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      {cards.map((card) => (
        <div className="card" key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.copy}</p>
        </div>
      ))}
    </div>
  );
}
