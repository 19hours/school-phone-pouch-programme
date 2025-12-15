import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy | SG School Phone Pouch Programme',
  description: 'Privacy notice for the SG School Phone Pouch Programme website.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="container">
      <h1>Privacy</h1>
      <p>We collect information submitted via the Tally form to respond to enquiries about the SG School Phone Pouch Programme.</p>
      <ul>
        <li>Data collected may include school name, role, contact details, and notes shared in the form.</li>
        <li>We use this information solely to follow up on your enquiry and arrange demos or quotations.</li>
        <li>If you wish to request deletion of your information, please email <a href="mailto:kevin.chu@ct.com.sg">kevin.chu@ct.com.sg</a>.</li>
      </ul>
    </div>
  );
}
