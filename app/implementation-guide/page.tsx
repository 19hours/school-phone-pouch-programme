import { Metadata } from 'next';
import Link from 'next/link';
import { baseMetadata } from '@/lib/metadata';
import { WHATSAPP_LINK } from '@/lib/site';

export const metadata: Metadata = baseMetadata(
  'Implementation guide | SG School Phone Pouch Programme',
  'A practical rollout plan: decide phone-free spaces, confirm quantities and base locations, prepare messaging, practise routines, and refine after the first term.',
  '/implementation-guide'
);

export default function ImplementationGuidePage() {
  return (
    <div className="govuk-!-margin-top-6 govuk-!-margin-bottom-6">
      <h1 className="govuk-heading-xl">Implementation guide</h1>
      <p className="govuk-body-l">Simple rollout: issue pouches, brief staff and students.</p>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">1. Decide where phones must be put away</h2>
        <p className="govuk-body">
          Identify which spaces should be phone-free (for example, all classrooms, certain levels, assembly hall) and when phones are not to be used.
        </p>
        <ul className="govuk-list govuk-list--bullet">
          <li>Align with your existing mobile phone and PLD policies.</li>
          <li>Clarify exceptions such as medical or learning-related use.</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">2. Confirm quantities and unlocking base locations</h2>
        <p className="govuk-body">
          Estimate student numbers and decide where unlocking bases should be installed, for example near classroom exits, the hall or the general office.
        </p>
        <ul className="govuk-list govuk-list--bullet">
          <li>Plan number of pouches by level, including buffer units.</li>
          <li>Ensure students have a clear path to unlock when they are allowed to use their phones.</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">3. Prepare staff, parent and student messages</h2>
        <p className="govuk-body">
          Agree on simple, consistent phrases to explain the routine: when phones go into pouches, when they must stay locked, and when they can be unlocked.
        </p>
        <ul className="govuk-list govuk-list--bullet">
          <li>Staff briefing for leadership, HODs and form teachers.</li>
          <li>Parent letter or email explaining the routine and rationale.</li>
          <li>Student assembly announcement or form class briefing.</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">4. Issue pouches and practise the routine</h2>
        <p className="govuk-body">Distribute pouches by class or level and practise the sequence for the first one to two weeks:</p>
        <ul className="govuk-list govuk-list--bullet">
          <li>On entry to phone-free spaces, phones go into pouches.</li>
          <li>While students are in those spaces, pouches remain locked and phones are not used.</li>
          <li>When allowed to use phones, students step outside to an unlocking base to open their pouches.</li>
        </ul>
      </section>

      <section className="govuk-!-margin-bottom-6">
        <h2 className="govuk-heading-l">5. Review and refine after the first term</h2>
        <p className="govuk-body">Gather feedback from staff and students and adjust as needed.</p>
        <ul className="govuk-list govuk-list--bullet">
          <li>Check whether base locations and routines are practical and enforceable.</li>
          <li>Plan top-ups and replacements for pouches for future intakes.</li>
        </ul>
      </section>

      <div className="govuk-panel govuk-panel--confirmation">
        <h3 className="govuk-panel__title">Book a demo</h3>
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
