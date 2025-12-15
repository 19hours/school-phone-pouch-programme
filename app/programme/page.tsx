import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Programme overview',
  description:
    'Consistent, easy-to-audit phone management solution for schools: visible compliance, student peace of mind, and flexible use across spaces.'
};

const comparisonRows = [
  {
    title: 'Control of distraction',
    programme: 'Phones locked at classroom/zone entry. Easy visual check (everyone has a pouch).',
    lockers: "Harder for teacher to verify compliance. Students can say ‘it’s in my locker’ when it is not."
  },
  {
    title: 'Student security & peace of mind',
    programme: 'Phone stays with student, just not usable.',
    lockers: 'Shared / open lockers can cause disputes.'
  },
  {
    title: 'Flexibility across spaces',
    programme: 'Works in classrooms, halls, CCAs, camps, exams. Same routine everywhere: phone → pouch → lock.',
    lockers: 'Fixed to one location (corridor/area). Harder to enforce rules in halls, special rooms, off-site. Scaling up requires more physical lockers and space.'
  },
  {
    title: 'Implementation and operations',
    programme: 'Simple rollout: issue pouches, brief staff and students. Easy to replace or top up for new cohorts.',
    lockers: 'Requires purchase, delivery and installation. Needs space planning and maintenance. Repairs, lost keys and damaged doors add admin load.'
  },
  {
    title: 'Responsible use & autonomy',
    programme: 'Supports “phones at the right time, right place”. Unlocking bases define where/when phones are allowed. Encourages discussion about digital habits, not just bans.',
    lockers: 'Feels more like an all-or-nothing rule. Less nuanced control of when phones can be used again. Often leads to punishment/confiscation when rules are broken.'
  },
  {
    title: 'Physical safety & handling',
    programme: 'Soft neoprene, rounded edges. Locking clip with no needles or sharp pins.',
    lockers: 'Metal/wood doors and hinges can pinch fingers. Doors can swing into walkways.'
  },
  {
    title: 'Policy clarity & parent communication',
    programme: 'Simple message: “In class, phone is in a locked pouch”. Parents know phones are present but not used in lessons.',
    lockers: 'Message is less visible (“Phones in lockers”). Harder to prove phones are actually stored. More questions about exceptions and special cases.'
  }
];

export default function ProgrammePage() {
  return (
    <div className="section">
      <h1>What is the School Phone Pouch Programme</h1>
      <section className="section" style={{ marginTop: '1rem' }}>
        <h2>Problem</h2>
        <ul>
          <li>Students are often distracted by smartphones.</li>
          <li>Schools and exam centres need simple, visible compliance.</li>
          <li>Bags and pockets still allow discreet phone use.</li>
          <li>Administrators need a consistent, easy-to-audit solution.</li>
        </ul>
      </section>

      <section className="section" style={{ marginTop: '1rem' }}>
        <h2>Solution</h2>
        <ul>
          <li>Each student places their phone into a personal phone pouch as they enter a phone-free space.</li>
          <li>The pouch uses a safe clip mechanism, and can be unlocked using a magnetic base when students are allowed to use their phones again.</li>
          <li>Pouch stays with the student entire day, easy to show the phone is secured.</li>
          <li>Can be unlocked by admin staff during emergencies.</li>
          <li>Enables fast, visual compliance checks for teachers and administrators.</li>
          <li>Lock that can only be unlocked using an unlocking base. Compatible with all phone models.</li>
        </ul>
      </section>

      <section className="section" style={{ marginTop: '1rem' }}>
        <h2>Already rolled out in schools around the US</h2>
        <ul>
          <li>This solution to prevent classroom phone usage is very popular in the US.</li>
          <li>The lock they use has a needle in the mechanism!</li>
          <li>Our lockable phone pouches do not use needles.</li>
          <li>We use child-safe clips with locking technology.</li>
          <li>Student safety is our PRIORITY.</li>
        </ul>
      </section>

      <section className="section">
        <h2>School Phone Pouch Programme vs Phone Lockers</h2>
        <table className="table" aria-label="Programme comparison table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Phone Pouch Programme</th>
              <th>Phone lockers</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.title}>
                <th scope="row">{row.title}</th>
                <td>{row.programme}</td>
                <td>{row.lockers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="section">
        <p>Please contact us immediately to roll out in 2026!</p>
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
    </div>
  );
}
