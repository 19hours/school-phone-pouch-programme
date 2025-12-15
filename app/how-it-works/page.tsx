import { CTASection } from '@/components/CTASection';
import { StepsTimeline } from '@/components/StepsTimeline';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'How it works | SG School Phone Pouch Programme',
  description:
    'Three simple steps: phone goes into pouch on entry, pouch stays locked during lesson, unlock at an approved base when allowed.',
  path: '/how-it-works',
});

const steps = [
  {
    title: 'Step 1 — Phone goes into pouch on entry',
    body:
      'When students enter a phone-free space (for example, a classroom or assembly hall), they place their phones into their personal pouches.',
    bullets: [
      'Each student has a clearly labelled pouch.',
      'Teachers do a quick visual check rather than handling phones.',
      'This becomes part of the normal start-of-lesson or start-of-day routine.',
    ],
  },
  {
    title: 'Step 2 — Pouch stays locked during lesson',
    body: 'While students are in the phone-free space, the pouch remains locked. They keep the pouch with them, but cannot access their phones.',
    bullets: [
      'No keys to manage – the lock is built into the pouch.',
      'The clip design avoids needles or sharp points, making it more child-friendly than some pin-and-lock solutions.',
      'Phones are physically present but not available, reducing under-the-table use and distraction.',
    ],
  },
  {
    title: 'Step 3 — Unlock at a base when allowed',
    body:
      'When students are allowed to use their phones (for example, at dismissal or at designated times), they step outside the phone-free zone and tap their pouch on an unlocking base.',
    bullets: [
      'Unlocking bases are installed at locations chosen by the school.',
      'Students unlock only at approved times, supporting consistent expectations.',
      'The same routine applies across classes, reducing confusion and negotiation.',
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="container">
      <h1>How it works</h1>
      <p>
        A simple routine that creates fast, visible compliance checks for teachers and administrators.
      </p>
      <div className="section">
        <StepsTimeline steps={steps} />
      </div>
      <CTASection text="Book a demo" />
    </div>
  );
}
