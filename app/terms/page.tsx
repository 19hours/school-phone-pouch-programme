import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Terms | SG School Phone Pouch Programme',
  description: 'Terms of use for the SG School Phone Pouch Programme website.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="container">
      <h1>Terms</h1>
      <ul>
        <li>This site provides information about the SG School Phone Pouch Programme.</li>
        <li>Pricing is subject to confirmation based on quantities and selected options; final quotes will confirm details.</li>
        <li>No warranties are provided regarding completeness or accuracy beyond the published programme material.</li>
      </ul>
    </div>
  );
}
