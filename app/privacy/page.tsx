import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy | SG School Phone Pouch Programme',
  description: 'Privacy notice for data collected through the SG School Phone Pouch Programme contact form.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div>
      <h1>Privacy</h1>
      <p>We keep this policy concise and clear.</p>
      <h2>What data we collect</h2>
      <p>
        When you submit the Tally form, we collect the school name, your role, email, phone/WhatsApp number, estimated number of
        students/pouches, preferred demo dates/times, and notes you provide.
      </p>
      <h2>How we use the data</h2>
      <p>We use the information solely to respond to your enquiry, arrange demos, and prepare pricing confirmations.</p>
      <h2>Retention and deletion</h2>
      <p>
        If you would like us to delete your submission, please email <a href="mailto:kevin.chu@ct.com.sg">kevin.chu@ct.com.sg</a>.
        We will remove your details from our records unless we are required to keep them for legal reasons.
      </p>
    </div>
  );
}
