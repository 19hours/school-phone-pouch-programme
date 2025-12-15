import { CTASection } from '@/components/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Customisation | SG School Phone Pouch Programme',
  description: 'Pouch colour options, name card holder, and school logo printing for qualifying quantities.',
  path: '/customisation',
});

export default function CustomisationPage() {
  return (
    <div className="container">
      <h1>Customisation</h1>
      <section className="section">
        <h2>Pouch colour</h2>
        <ul>
          <li>Useful for differentiating different student levels (P1 → Green, P2 → Yellow etc.)</li>
          <li>Choose from: Red, Orange, Yellow, Green, Blue, Indigo, Purple, Black, Grey.</li>
          <li>Free for quantities above 1000.</li>
        </ul>
      </section>
      <section className="section">
        <h2>Name card holder for easy identification</h2>
        <ul>
          <li>Useful for students to see who the pouch belongs to</li>
          <li>+ $0.50 per pouch</li>
        </ul>
      </section>
      <section className="section">
        <h2>School logo printing</h2>
        <ul>
          <li>Add your school logo (single colour print) on every pouch for more personalisation!</li>
          <li>+ $0.50 per pouch, minimum quantity is 1000</li>
        </ul>
      </section>
      <CTASection text="Book a demo" />
    </div>
  );
}
