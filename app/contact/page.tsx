import type { Metadata } from 'next';
import React from 'react';
import { HeroSection } from '../../components/HeroSection';
import { CTASection } from '../../components/CTASection';
import { buildMetadata } from '../../lib/seo';

const tallyUrl = process.env.NEXT_PUBLIC_TALLY_URL;

export const metadata: Metadata = buildMetadata({
  title: 'Contact | SG School Phone Pouch Programme',
  description: 'Contact Kevin Chu to discuss rollout in 2026, pricing tiers, and a school demo.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div>
      <HeroSection
        title="Contact"
        lead="For interested schools: Please contact us immediately to roll out in 2026!"
        primaryCta={{ href: '#contact-form', label: 'Book a demo' }}
        secondaryCta={{
          href: 'https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school.',
          label: 'Chat on WhatsApp',
          external: true,
        }}
      />

      <section className="section">
        <h2>Direct contact</h2>
        <p><strong>Person in charge:</strong> Kevin Chu</p>
        <p><strong>Email:</strong> <a href="mailto:kevin.chu@ct.com.sg">kevin.chu@ct.com.sg</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/6598222723" target="_blank" rel="noreferrer">98222723</a></p>
      </section>

      <section className="section" id="contact-form">
        <h2>Send us your enquiry</h2>
        {!tallyUrl && (
          <div className="inset" role="alert">
            NEXT_PUBLIC_TALLY_URL is not set. Add it to your environment to embed the Tally form.
          </div>
        )}
        {tallyUrl && (
          <iframe
            src={tallyUrl}
            width="100%"
            height="720"
            style={{ border: '1px solid #b1b4b6', borderRadius: '6px' }}
            title="Tally contact form"
            allowFullScreen
          />
        )}
        <p className="notice">
          By submitting this form, you agree to be contacted about the SG School Phone Pouch Programme.
        </p>
      </section>

      <CTASection heading="Prefer WhatsApp?" />
    </div>
  );
}
