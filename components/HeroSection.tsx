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
    <section className="hero-band">
      <div className="hero container">
        <div className="hero-grid">
          <div>
            <div className="pill">Trusted by schools and exam centres</div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link href={primaryHref} className="button">{primaryLabel}</Link>
              <Link href={secondaryHref} className="button-secondary">{secondaryLabel}</Link>
            </div>
          </div>
          <div className="panel accented">
            <h3 style={{ marginTop: 0 }}>Fast visual compliance</h3>
            <ul>
              <li>Clear, visible phone-free routine from day one.</li>
              <li>Easy checks for teachers and administrators.</li>
              <li>Safe clips and unlocking bases for permitted use.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
