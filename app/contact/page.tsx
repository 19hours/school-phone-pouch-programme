import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Kevin Chu to discuss rollout in 2026, pricing tiers, and a school demo.'
};

const whatsappUrl =
  'https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school.';

export default function ContactPage() {
  return (
    <div className="section">
      <h1>Contact</h1>
      <p>For interested schools: Please contact us immediately to roll out in 2026!</p>
      <div className="card-grid" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>Direct contact</h3>
          <p>Person in charge: Kevin Chu</p>
          <p>Email: <a href="mailto:kevin.chu@ct.com.sg">kevin.chu@ct.com.sg</a></p>
          <p>WhatsApp: <a href={whatsappUrl}>98222723</a></p>
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Chat with us on WhatsApp
          </a>
        </div>
        <div className="card">
          <h3>Enquiry form</h3>
          <iframe
            title="Tally form"
            src="https://tally.so/embed/placeholder"
            width="100%"
            height="400"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            style={{ border: '1px solid #e2e8f0', borderRadius: '10px' }}
          ></iframe>
          <p style={{ marginTop: '0.75rem' }}>
            By submitting this form, you agree to be contacted about the SG School Phone Pouch Programme.
          </p>
        </div>
      </div>
    </div>
  );
}
