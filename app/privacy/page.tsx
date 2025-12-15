import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'Privacy | SG School Phone Pouch Programme',
  description: 'Privacy notice for the SG School Phone Pouch Programme website.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="section space-y-6 pb-16">
      <div className="surface-panel space-y-4">
        <h1 className="heading">Privacy</h1>
        <div className="card space-y-4 text-slate-800 shadow-2xl shadow-blue-100">
          <p>
            We collect information submitted through the Tally form, including school name, role, contact details, estimated number of students or pouches required, preferred demo timings and notes.
          </p>
          <p>We use this information solely to respond to enquiries about the SG School Phone Pouch Programme.</p>
          <p>If you would like us to delete or update your information, please email kevin.chu@ct.com.sg.</p>
        </div>
      </div>
    </div>
  );
}
