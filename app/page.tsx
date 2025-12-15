import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'School phone pouch programme for visible compliance, student safety, and easy audits. Learn how the routine works and book a demo.'
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Keep classrooms focused with the School Phone Pouch Programme</h1>
          <p>
            Each student locks their phone in a personal pouch at entry. The pouch stays with them all day and
            unlocks at approved bases. Visible compliance, safer routines, and easy audits for administrators.
          </p>
          <div className="cta-row">
            <Link className="button primary" href="/contact">
              Book a demo
            </Link>
            <a
              className="button secondary"
              href="https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us
            </a>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <span className="badge">Government registered vendor on vendors@gov, since 2019.</span>
          </div>
        </div>
        <div className="card">
          <h3>Programme snapshot</h3>
          <ul>
            <li>Lockable phone pouch + unlocking base routine</li>
            <li>Pouch stays with student entire day, easy to show phone is secured</li>
            <li>Emergency unlocking by admin staff</li>
            <li>No needles – child-safe clip approach</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Problem</h2>
        <div className="card-grid">
          {[
            'Students are often distracted by smartphones.',
            'Schools and exam centres need simple, visible compliance.',
            'Bags and pockets still allow discreet phone use.',
            'Administrators need a consistent, easy-to-audit solution.'
          ].map((item) => (
            <div className="card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Solution: School Phone Pouch Programme</h2>
        <div className="card-grid">
          <div className="card">
            Each student places their phone into a personal phone pouch as they enter a phone-free space.
          </div>
          <div className="card">
            The pouch uses a safe clip mechanism and can be unlocked using a magnetic base when students are allowed to use
            their phones again.
          </div>
          <div className="card">Pouch stays with the student entire day, easy to show the phone is secured.</div>
          <div className="card">Can be unlocked by admin staff during emergencies.</div>
          <div className="card">Enables fast, visual compliance checks for teachers and administrators.</div>
          <div className="card">Lock that can only be unlocked using an unlocking base. Compatible with all phone models.</div>
        </div>
      </section>

      <section className="section">
        <h2>Student safety is our priority</h2>
        <div className="card-grid">
          <div className="card">Our lockable phone pouches do not use needles.</div>
          <div className="card">We use child-safe clips with locking technology.</div>
          <div className="card">Student safety is our PRIORITY.</div>
        </div>
      </section>

      <section className="section">
        <h2>Explore the programme</h2>
        <div className="card-grid">
          <div className="card">
            <h3>How it works</h3>
            <p>A simple routine for phone-free spaces and quick visual checks.</p>
            <Link href="/how-it-works">View steps</Link>
          </div>
          <div className="card">
            <h3>Programme vs phone lockers</h3>
            <p>Why pouches make compliance clearer for students and teachers.</p>
            <Link href="/programme">Compare solutions</Link>
          </div>
          <div className="card">
            <h3>Implementation guide</h3>
            <p>Practical rollout steps for leaders, HODs, and operations teams.</p>
            <Link href="/implementation-guide">Read guide</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>For interested schools</h2>
        <p>For interested schools: Please contact us immediately to roll out in 2026!</p>
        <div className="cta-row">
          <Link className="button primary" href="/contact">
            Book a demo
          </Link>
          <a
            className="button secondary"
            href="https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>
        </div>
      </section>
    </>
  );
}
