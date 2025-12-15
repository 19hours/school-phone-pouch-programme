import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { buildMetadata, whatsappLink } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Samples & demo | SG School Phone Pouch Programme',
  description: 'We can bring samples and host a demo in your school. Contact us to arrange a visit.',
  path: '/samples-demo',
});

export default function SamplesDemoPage() {
  return (
    <div className="container">
      <h1>Samples / Demo</h1>
      <p>We can bring the samples and host demo in your school.</p>
      <p>Please contact us to arrange for a visit!</p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1rem 0' }}>
        <Link className="button" href="/contact">Book a demo</Link>
        <Link className="button-secondary" href={whatsappLink} target="_blank" rel="noreferrer">Chat with us on WhatsApp</Link>
      </div>
      <CTASection text="Book a demo" />
    </div>
  );
}
