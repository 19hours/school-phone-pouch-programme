import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms | SG School Phone Pouch Programme',
  description: 'Terms of use for this informational site about the SG School Phone Pouch Programme.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div>
      <h1>Terms</h1>
      <p>This site provides information about the SG School Phone Pouch Programme.</p>
      <h2>Use of information</h2>
      <p>
        Content is for planning and decision-making. Pricing is subject to confirmation based on quantities and selected options.
      </p>
      <h2>Accuracy</h2>
      <p>
        While we keep content current, the programme details should be confirmed directly with Chu Technologies Pte Ltd before any
        procurement decisions.
      </p>
      <h2>No warranties</h2>
      <p>
        We provide the site on an as-is basis and do not provide warranties about completeness, reliability, or availability of the
        information beyond the published programme material.
      </p>
    </div>
  );
}
