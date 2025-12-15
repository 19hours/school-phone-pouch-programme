import Link from 'next/link';
import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

export function HeroSection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <section className="hero container">
      <h1>{title}</h1>
      <p>{description}</p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        <Link href={primaryHref} className="button">{primaryLabel}</Link>
        <Link href={secondaryHref} className="button-secondary">{secondaryLabel}</Link>
      </div>
    </section>
  );
}
