import Link from 'next/link';
import React from 'react';

export function CTASection({ text }: { text: string }) {
  return (
    <div className="container section">
      <div className="cta-band">
        <div style={{ fontWeight: 700 }}>{text}</div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/contact" className="button">Book a demo</Link>
          <Link href="https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school." className="button-secondary" target="_blank" rel="noreferrer">
            Chat with us on WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
