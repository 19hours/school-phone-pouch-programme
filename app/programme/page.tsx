import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Programme overview | SG School Phone Pouch Programme',
  'A consistent, easy-to-audit phone management solution for schools: visible compliance, student peace of mind, and flexible use across spaces.',
  '/programme'
);

const comparisonRows = [
  {
    title: 'Control of distraction',
    programme: ['Phones locked at classroom/zone entry', 'Easy visual check (everyone has a pouch)'],
    lockers: ['Harder for teacher to verify compliance', 'Students can say ‘it’s in my locker’ when it is not'],
  },
  {
    title: 'Student security & peace of mind',
    programme: ['Phone stays with student, just not usable'],
    lockers: ['Shared / open lockers can cause disputes'],
  },
  {
    title: 'Flexibility across spaces',
    programme: ['Works in classrooms, halls, CCAs, camps, exams', 'Same routine everywhere: phone → pouch → lock'],
    lockers: ['Fixed to one location (corridor/area)', 'Harder to enforce rules in halls, special rooms, off-site', 'Scaling up requires more physical lockers and space'],
  },
  {
    title: 'Implementation and operations',
    programme: ['Simple rollout: issue pouches, brief staff and students', 'Easy to replace or top up for new cohorts'],
    lockers: ['Requires purchase, delivery and installation', 'Needs space planning and maintenance', 'Repairs, lost keys and damaged doors add admin load'],
  },
  {
    title: 'Responsible use & autonomy',
    programme: ['Supports ‘phones at the right time, right place’', 'Unlocking bases define where/when phones are allowed', 'Encourages discussion about digital habits, not just bans'],
    lockers: ['Feels more like an all-or-nothing rule', 'Less nuanced control of when phones can be used again', 'Often leads to punishment/confiscation when rules are broken'],
  },
  {
    title: 'Physical safety & handling',
    programme: ['Soft neoprene, rounded edges', 'Locking clip with no needles or sharp pins'],
    lockers: ['Metal/wood doors and hinges can pinch fingers', 'Doors can swing into walkways'],
  },
  {
    title: 'Policy clarity & parent communication',
    programme: ['Simple message: ‘In class, phone is in a locked pouch’', 'Parents know phones are present but not used in lessons'],
    lockers: ['Message is less visible (‘Phones in lockers’)', 'Harder to prove phones are actually stored', 'More questions about exceptions and special cases'],
  },
];

export default function ProgrammePage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <h1 className="govuk-heading-xl">What is the School Phone Pouch Programme</h1>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Problem</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>Students are often distracted by smartphones.</li>
          <li>Schools and exam centres need simple, visible compliance.</li>
          <li>Bags and pockets still allow discreet phone use.</li>
          <li>Administrators need a consistent, easy-to-audit solution.</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Solution</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>Each student places their phone into a personal phone pouch as they enter a phone-free space.</li>
          <li>
            The pouch uses a safe clip mechanism, and can be unlocked using a magnetic base when students are allowed to use their
            phones again.
          </li>
          <li>Pouch stays with the student entire day, easy to show the phone is secured.</li>
          <li>Can be unlocked by admin staff during emergencies.</li>
          <li>Enables fast, visual compliance checks for teachers and administrators.</li>
        </ul>
        <div className="govuk-inset-text">
          <p className="govuk-body govuk-!-margin-bottom-1">Lock that can only be unlocked using an unlocking base.</p>
          <p className="govuk-body">Compatible with all phone models.</p>
        </div>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">Already rolled out in schools around the US</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>This solution to prevent classroom phone usage is very popular in the US.</li>
        </ul>
        <div className="govuk-inset-text">
          <p className="govuk-body govuk-!-margin-bottom-1">The lock they use has a needle in the mechanism!</p>
          <p className="govuk-body govuk-!-margin-bottom-1">Our lockable phone pouches do not use needles.</p>
          <p className="govuk-body govuk-!-margin-bottom-1">We use child-safe clips with locking technology.</p>
          <p className="govuk-body">Student safety is our PRIORITY.</p>
        </div>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">School Phone Pouch Programme vs Phone Lockers</h2>
        <table className="govuk-table">
          <caption className="govuk-table__caption govuk-table__caption--m">Comparison</caption>
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">
                Area
              </th>
              <th scope="col" className="govuk-table__header">
                Programme
              </th>
              <th scope="col" className="govuk-table__header">
                Phone lockers
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            {comparisonRows.map((row) => (
              <tr className="govuk-table__row" key={row.title}>
                <th scope="row" className="govuk-table__header">
                  {row.title}
                </th>
                <td className="govuk-table__cell">
                  <ul className="govuk-list govuk-list--bullet">
                    {row.programme.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </td>
                <td className="govuk-table__cell">
                  <ul className="govuk-list govuk-list--bullet">
                    {row.lockers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="govuk-panel govuk-panel--confirmation">
        <h3 className="govuk-panel__title">Please contact us immediately to roll out in 2026!</h3>
        <div className="govuk-button-group">
          <Link className="govuk-button" href="/contact" role="button">
            Book a demo
          </Link>
          <a className="govuk-button govuk-button--secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
      </div>
    </div>
  );
}
