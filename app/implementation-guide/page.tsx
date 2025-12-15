import { CTAButtons } from '../../components/CTAButtons';
import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'Implementation guide | SG School Phone Pouch Programme',
  description:
    'A practical rollout plan: decide phone-free spaces, confirm quantities and base locations, prepare messaging, practise routines, and refine after the first term.',
  path: '/implementation-guide',
});

const steps = [
  {
    title: '1. Decide where phones must be put away',
    intro:
      'Identify which spaces should be phone-free (for example, all classrooms, certain levels, assembly hall) and when phones are not to be used.',
    bullets: ['Align with your existing mobile phone and PLD policies.', 'Clarify exceptions such as medical or learning-related use.'],
  },
  {
    title: '2. Confirm quantities and unlocking base locations',
    intro:
      'Estimate student numbers and decide where unlocking bases should be installed, for example near classroom exits, the hall or the general office.',
    bullets: ['Plan number of pouches by level, including buffer units.', 'Ensure students have a clear path to unlock when they are allowed to use their phones.'],
  },
  {
    title: '3. Prepare staff, parent and student messages',
    intro:
      'Agree on simple, consistent phrases to explain the routine: when phones go into pouches, when they must stay locked, and when they can be unlocked.',
    bullets: ['Staff briefing for leadership, HODs and form teachers.', 'Parent letter or email explaining the routine and rationale.', 'Student assembly announcement or form class briefing.'],
  },
  {
    title: '4. Issue pouches and practise the routine',
    intro: 'Distribute pouches by class or level and practise the sequence for the first one to two weeks:',
    bullets: [
      'On entry to phone-free spaces, phones go into pouches.',
      'While students are in those spaces, pouches remain locked and phones are not used.',
      'When allowed to use phones, students step outside to an unlocking base to open their pouches.',
    ],
  },
  {
    title: '5. Review and refine after the first term',
    intro: 'Gather feedback from staff and students and adjust as needed.',
    bullets: ['Check whether base locations and routines are practical and enforceable.', 'Plan top-ups and replacements for pouches for future intakes.'],
  },
];

export default function ImplementationGuidePage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="section space-y-4">
        <h1 className="heading">Implementation guide</h1>
        <p className="subheading">Simple rollout: issue pouches, brief staff and students.</p>
      </section>

      <section className="section space-y-6">
        {steps.map((step) => (
          <div key={step.title} className="card space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
            <p className="text-slate-800">{step.intro}</p>
            <ul className="space-y-2 text-slate-700">
              {step.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section rounded-xl bg-slate-900 px-6 py-10 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold">Book a demo</p>
            <p className="text-sm text-slate-100">Walk through the rollout steps with your leadership team.</p>
          </div>
          <CTAButtons className="items-center" />
        </div>
      </section>
    </div>
  );
}
