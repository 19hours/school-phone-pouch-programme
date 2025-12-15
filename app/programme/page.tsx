import { CTAButtons } from '../../components/CTAButtons';
import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'Programme overview | SG School Phone Pouch Programme',
  description:
    'A consistent, easy-to-audit phone management solution for schools: visible compliance, student peace of mind, and flexible use across spaces.',
  path: '/programme',
});

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
    programme: [
      'Supports ‘phones at the right time, right place’',
      'Unlocking bases define where/when phones are allowed',
      'Encourages discussion about digital habits, not just bans',
    ],
    lockers: [
      'Feels more like an all-or-nothing rule',
      'Less nuanced control of when phones can be used again',
      'Often leads to punishment/confiscation when rules are broken',
    ],
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
    <div className="space-y-12 pb-16">
      <section className="section">
        <div className="surface-panel space-y-4">
          <h1 className="heading">What is the School Phone Pouch Programme</h1>
          <p className="subheading">A consistent solution for visible compliance and student reassurance.</p>
        </div>
      </section>

      <section className="section space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Problem</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {["Students are often distracted by smartphones.", 'Schools and exam centres need simple, visible compliance.', 'Bags and pockets still allow discreet phone use.', 'Administrators need a consistent, easy-to-audit solution.'].map((item) => (
            <div key={item} className="card text-slate-800 shadow-2xl shadow-blue-100">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Solution</h2>
        <div className="surface-panel space-y-4">
          <div className="space-y-3 text-slate-800">
            <p>Each student places their phone into a personal phone pouch as they enter a phone-free space.</p>
            <p>
              The pouch uses a safe clip mechanism, and can be unlocked using a magnetic base when students are allowed to use their phones again.
            </p>
            <p>Pouch stays with the student entire day, easy to show the phone is secured.</p>
            <p>Can be unlocked by admin staff during emergencies.</p>
            <p>Enables fast, visual compliance checks for teachers and administrators.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="card bg-gradient-to-br from-slate-900 to-blue-800 text-slate-100">
              Lock that can only be unlocked using an unlocking base.
            </div>
            <div className="card bg-white/90 text-slate-800">Compatible with all phone models.</div>
          </div>
        </div>
      </section>

      <section className="section space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Already rolled out in schools around the US</h2>
        <div className="surface-panel space-y-2 text-slate-800">
          <p>This solution to prevent classroom phone usage is very popular in the US.</p>
          <p>The lock they use has a needle in the mechanism!</p>
          <p>Our lockable phone pouches do not use needles.</p>
          <p>We use child-safe clips with locking technology.</p>
          <p>Student safety is our PRIORITY.</p>
        </div>
      </section>

      <section className="section space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">School Phone Pouch Programme vs Phone Lockers</h2>
        <div className="overflow-x-auto">
          <div className="surface-panel p-0">
            <table className="table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>School Phone Pouch Programme</th>
                  <th>Phone lockers</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.title}>
                    <td className="font-semibold text-slate-900">{row.title}</td>
                    <td>
                      <ul className="space-y-2 text-slate-800">
                        {row.programme.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul className="space-y-2 text-slate-800">
                        {row.lockers.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="surface-panel flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-primary to-secondary px-8 py-10 text-white shadow-2xl shadow-blue-200 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-semibold">Please contact us immediately to roll out in 2026!</p>
          </div>
          <CTAButtons className="items-center" />
        </div>
      </section>
    </div>
  );
}
