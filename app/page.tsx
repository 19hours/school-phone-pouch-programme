import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { TrustStrip } from '@/components/TrustStrip';
import { CTASection } from '@/components/CTASection';
import { buildMetadata, whatsappLink } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'SG School Phone Pouch Programme | Simple, visible phone compliance for schools',
  description:
    'A simple, easy-to-audit phone management routine: students place phones into a personal locked pouch in phone-free spaces and unlock at approved times using an unlocking base.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="SG School Phone Pouch Programme"
        description="A simple, visible and easy-to-audit way to manage phones in phone-free spaces."
        primaryHref="/contact"
        primaryLabel="Book a demo"
        secondaryHref={whatsappLink}
        secondaryLabel="Chat with us on WhatsApp"
      />
      <div className="container">
        <TrustStrip />
        <section className="section">
          <div className="grid-two">
            <div className="panel accented">
              <h2>Problem: Difficulty in managing phones in classroom environments</h2>
              <ul>
                <li>Students are often distracted by smartphones.</li>
                <li>Schools and exam centres need simple, visible compliance.</li>
                <li>Bags and pockets still allow discreet phone use.</li>
                <li>Administrators need a consistent, easy-to-audit solution.</li>
              </ul>
            </div>
            <div className="panel section-tint">
              <h2>Solution: School Phone Pouch Programme</h2>
              <ul>
                <li>Each student places their phone into a personal phone pouch as they enter a phone-free space.</li>
                <li>The pouch uses a safe clip mechanism, and can be unlocked using a magnetic base when students are allowed to use their phones again.</li>
                <li>Pouch stays with the student entire day, easy to show the phone is secured.</li>
                <li>Can be unlocked by admin staff during emergencies.</li>
                <li>Enables fast, visual compliance checks for teachers and administrators.</li>
              </ul>
              <div className="card" style={{ marginTop: '1rem' }}>
                <ul>
                  <li>Lock that can only be unlocked using an unlocking base.</li>
                  <li>Compatible with all phone models.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-tint">
          <div className="safety-panel">
            <h2>Student safety is our priority</h2>
            <ul>
              <li>Our lockable phone pouches do not use needles.</li>
              <li>We use child-safe clips with locking technology.</li>
              <li>Student safety is our PRIORITY.</li>
            </ul>
          </div>
        </section>
        <section className="section">
          <div className="panel">
            <h2>Compare approaches</h2>
            <p>See how the School Phone Pouch Programme stacks against phone lockers for control, safety, and ease of rollout.</p>
            <Link href="/programme#comparison" className="button-secondary">View programme vs phone lockers</Link>
          </div>
        </section>
      </div>
      <CTASection text="For interested schools: Please contact us immediately to roll out in 2026!" />
    </>
  );
}
