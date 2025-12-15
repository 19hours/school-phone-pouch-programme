import Link from 'next/link';
import React from 'react';

const whatsappLink =
  'https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school.';

export function CTASection({ heading = 'Ready to see it in action?' }: { heading?: string }) {
  return (
    <section className="section callout" aria-label="Next steps">
      <h2>{heading}</h2>
      <p>Book a demo or message us to plan your rollout.</p>
      <div className="cta-row">
        <Link className="button" href="/contact">
          Book a demo
        </Link>
        <a className="button secondary" href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp us
        </a>
      </div>
    </section>
  );
}
