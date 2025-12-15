import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Site terms for the SG School Phone Pouch Programme information site.'
};

export default function TermsPage() {
  return (
    <div className="section legal">
      <h1>Terms</h1>
      <p>This site is for informational purposes about the SG School Phone Pouch Programme.</p>
      <p>
        Pricing is subject to confirmation; final quotes will confirm quantities and selected options in line with the published
        tiers.
      </p>
      <p>
        While we aim to keep information accurate and aligned to the programme material, the site is provided without
        warranties. Please contact us to verify details for your school.
      </p>
    </div>
  );
}
