import Link from 'next/link';
import React from 'react';
import { TrustStrip } from './TrustStrip';

type HeroProps = {
  title: string;
  lead: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string; external?: boolean };
  children?: React.ReactNode;
};

export function HeroSection({ title, lead, primaryCta, secondaryCta, children }: HeroProps) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p className="hero-lead">{lead}</p>
      <div className="cta-row" aria-label="Primary calls to action">
        {primaryCta && (
          <Link className="button" href={primaryCta.href}>
            {primaryCta.label}
          </Link>
        )}
        {secondaryCta && (
          <Link
            className="button secondary"
            href={secondaryCta.href}
            target={secondaryCta.external ? '_blank' : undefined}
            rel={secondaryCta.external ? 'noreferrer' : undefined}
          >
            {secondaryCta.label}
          </Link>
        )}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <TrustStrip />
      </div>
      {children}
    </section>
  );
}
