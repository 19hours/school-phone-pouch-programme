import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Customisation',
  description: 'Customise pouches with student name labels and single-colour school logo printing.'
};

export default function CustomisationPage() {
  return (
    <div className="section">
      <h1>Customisation</h1>
      <div className="card-grid">
        <div className="card">
          <h3>Student name label</h3>
          <p>Useful for students to see who the pouch belongs to.</p>
          <p>+ $0.50 per pouch</p>
        </div>
        <div className="card">
          <h3>School logo printing</h3>
          <p>Add your school logo (single colour print) on every pouch for more personalisation!</p>
          <p>+ $0.50 per pouch, minimum quantity is 1000</p>
        </div>
      </div>
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
