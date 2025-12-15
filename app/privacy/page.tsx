import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy notice for data collected via the SG School Phone Pouch Programme contact form.'
};

export default function PrivacyPage() {
  return (
    <div className="section legal">
      <h1>Privacy</h1>
      <p>
        We collect the details you submit through our embedded Tally form, including school name, role, email, phone/WhatsApp,
        estimated number of students or pouches required, preferred demo dates/times, and any notes you provide.
      </p>
      <p>We use this information solely to respond to your enquiry about the SG School Phone Pouch Programme.</p>
      <p>
        If you would like us to delete your submission or update your details, please email
        {' '}
        <a href="mailto:kevin.chu@ct.com.sg">kevin.chu@ct.com.sg</a>.
      </p>
    </div>
  );
}
