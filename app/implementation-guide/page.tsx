import { CTASection } from '@/components/CTASection';
import { StepsTimeline } from '@/components/StepsTimeline';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Implementation guide | SG School Phone Pouch Programme',
  description:
    'A practical rollout plan: decide phone-free spaces, confirm quantities and base locations, prepare messaging, practise routines, and refine after the first term.',
  path: '/implementation-guide',
});

const steps = [
  {
    title: '1. Decide where phones must be put away',
    body: 'Identify which spaces should be phone-free (for example, all classrooms, certain levels, assembly hall) and when phones are not to be used.',
    bullets: [
      'Align with your existing mobile phone and PLD policies.',
      'Clarify exceptions such as medical or learning-related use.',
    ],
  },
  {
    title: '2. Confirm quantities and unlocking base locations',
    body: 'Estimate student numbers and decide where unlocking bases should be installed, for example near classroom exits, the hall or the general office.',
    bullets: [
      'Plan number of pouches by level, including buffer units.',
      'Ensure students have a clear path to unlock when they are allowed to use their phones.',
    ],
  },
  {
    title: '3. Prepare staff, parent and student messages',
    body: 'Agree on simple, consistent phrases to explain the routine: when phones go into pouches, when they must stay locked, and when they can be unlocked.',
    bullets: [
      'Staff briefing for leadership, HODs and form teachers.',
      'Parent letter or email explaining the routine and rationale.',
      'Student assembly announcement or form class briefing.',
    ],
  },
  {
    title: '4. Issue pouches and practise the routine',
    body: 'Distribute pouches by class or level and practise the sequence for the first one to two weeks:',
    bullets: [
      'On entry to phone-free spaces, phones go into pouches.',
      'While students are in those spaces, pouches remain locked and phones are not used.',
      'When allowed to use phones, students step outside to an unlocking base to open their pouches.',
    ],
  },
  {
    title: '5. Review and refine after the first term',
    body: 'Gather feedback from staff and students and adjust as needed.',
    bullets: [
      'Check whether base locations and routines are practical and enforceable.',
      'Plan top-ups and replacements for pouches for future intakes.',
    ],
  },
];

export default function ImplementationGuidePage() {
  return (
    <div className="container">
      <h1>Implementation guide</h1>
      <p>Simple rollout: issue pouches, brief staff and students.</p>
      <div className="section">
        <StepsTimeline steps={steps} />
      </div>
      <CTASection text="Book a demo" />
    </div>
  );
}
