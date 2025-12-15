import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { buildMetadata, whatsappLink } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact | SG School Phone Pouch Programme',
  description: 'Contact Kevin Chu to discuss rollout in 2026, pricing tiers, and a school demo.',
  path: '/contact',
});

const tallyUrl = process.env.NEXT_PUBLIC_TALLY_URL || '';

export default function ContactPage() {
  return (
    <div className="container">
      <h1>Contact</h1>
      <div className="safety-panel" role="note" aria-label="Priority message" style={{ marginBottom: '1rem' }}>
        For interested schools: Please contact us immediately to roll out in 2026!
      </div>
      <div className="inset" style={{ marginBottom: '1rem' }}>
        <p><strong>Person in charge: Kevin Chu</strong></p>
        <p>Email: <a href="mailto:kevin.chu@ct.com.sg">kevin.chu@ct.com.sg</a></p>
        <p>WhatsApp: 98222723</p>
      </div>
      <div className="section">
        <iframe
          title="Tally form"
          src={tallyUrl}
          width="100%"
          height="520"
          style={{ border: '1px solid #dcdcdc', borderRadius: '4px' }}
          allowFullScreen
        />
        <p style={{ marginTop: '0.5rem' }}>
          By submitting this form, you agree to be contacted about the SG School Phone Pouch Programme.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <Link className="button" href={whatsappLink} target="_blank" rel="noreferrer">Chat with us on WhatsApp</Link>
      </div>
      <CTASection text="Book a demo" />
    </div>
  );
}
