import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Implementation guide',
  description:
    'A practical rollout plan: decide phone-free spaces, confirm quantities and base locations, prepare messaging, practise routines, and refine after the first term.'
};

export default function ImplementationGuidePage() {
  return (
    <div className="section">
      <h1>Implementation guide</h1>
      <p>Simple rollout: issue pouches, brief staff and students.</p>
      <ol style={{ paddingLeft: '1.5rem' }}>
        <li>
          <h3>Decide where phones must be put away</h3>
          <p>
            Identify which spaces should be phone-free (for example, all classrooms, certain levels, assembly hall) and when
            phones are not to be used.
          </p>
          <ul>
            <li>Align with your existing mobile phone and PLD policies.</li>
            <li>Clarify exceptions such as medical or learning-related use.</li>
          </ul>
        </li>
        <li>
          <h3>Confirm quantities and unlocking base locations</h3>
          <p>
            Estimate student numbers and decide where unlocking bases should be installed, for example near classroom exits, the
            hall or the general office.
          </p>
          <ul>
            <li>Plan number of pouches by level, including buffer units.</li>
            <li>Ensure students have a clear path to unlock when they are allowed to use their phones.</li>
          </ul>
        </li>
        <li>
          <h3>Prepare staff, parent and student messages</h3>
          <p>
            Agree on simple, consistent phrases to explain the routine: when phones go into pouches, when they must stay locked,
            and when they can be unlocked.
          </p>
          <ul>
            <li>Staff briefing for leadership, HODs and form teachers.</li>
            <li>Parent letter or email explaining the routine and rationale.</li>
            <li>Student assembly announcement or form class briefing.</li>
          </ul>
        </li>
        <li>
          <h3>Issue pouches and practise the routine</h3>
          <p>
            Distribute pouches by class or level and practise the sequence for the first one to two weeks:
          </p>
          <ul>
            <li>On entry to phone-free spaces, phones go into pouches.</li>
            <li>While students are in those spaces, pouches remain locked and phones are not used.</li>
            <li>When allowed to use phones, students step outside to an unlocking base to open their pouches.</li>
          </ul>
        </li>
        <li>
          <h3>Review and refine after the first term</h3>
          <p>Gather feedback from staff and students and adjust as needed.</p>
          <ul>
            <li>Check whether base locations and routines are practical and enforceable.</li>
            <li>Plan top-ups and replacements for pouches for future intakes.</li>
          </ul>
        </li>
      </ol>
      <div className="cta-row" style={{ marginTop: '1.5rem' }}>
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
    </div>
  );
}
