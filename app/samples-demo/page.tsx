import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Samples & demo',
  description: 'We can bring samples and host a demo in your school. Contact us to arrange a visit.'
};

export default function SamplesDemoPage() {
  return (
    <div className="section">
      <h1>Samples / Demo</h1>
      <p>We can bring the samples and host demo in your school.</p>
      <p>Please contact us to arrange for a visit!</p>
      <div className="cta-row" style={{ marginTop: '1.5rem' }}>
        <Link className="button primary" href="/contact">
          Book a demo
        </Link>
        <a
          className="button secondary"
          href="https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp us
        </a>
      </div>
    </div>
  );
}
