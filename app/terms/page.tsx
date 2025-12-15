import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'Terms | SG School Phone Pouch Programme',
  description: 'Terms of use for the SG School Phone Pouch Programme website.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="section space-y-6 pb-16">
      <div className="surface-panel space-y-4">
        <h1 className="heading">Terms</h1>
        <div className="card space-y-4 text-slate-800 shadow-2xl shadow-blue-100">
          <p>This site provides information about the SG School Phone Pouch Programme.</p>
          <p>Pricing shown follows the published tiers; final quotes will confirm quantities and options for each school.</p>
          <p>While we aim to keep the site accurate, the content is provided without warranties.</p>
        </div>
      </div>
    </div>
  );
}
