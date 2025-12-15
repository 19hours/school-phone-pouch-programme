import { CTAButtons } from '../../components/CTAButtons';
import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'How it works | SG School Phone Pouch Programme',
  description: 'Three simple steps: phone goes into pouch on entry, pouch stays locked during lesson, unlock at an approved base when allowed.',
  path: '/how-it-works',
});

const steps = [
  {
    title: 'Step 1 — Phone goes into pouch on entry',
    body: 'When students enter a phone-free space (for example, a classroom or assembly hall), they place their phones into their personal pouches.',
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
    body: 'When students are allowed to use their phones (for example, at dismissal or at designated times), they step outside the phone-free zone and tap their pouch on an unlocking base.',
    bullets: [
      'Unlocking bases are installed at locations chosen by the school.',
      'Students unlock only at approved times, supporting consistent expectations.',
      'The same routine applies across classes, reducing confusion and negotiation.',
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="section space-y-4">
        <h1 className="heading">How it works</h1>
        <p className="subheading">A simple routine that creates fast, visible compliance checks for teachers and administrators.</p>
      </section>

      <section className="section grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="card space-y-4">
            <div className="text-sm font-semibold uppercase tracking-wide text-primary">{step.title}</div>
            <p className="text-slate-800">{step.body}</p>
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
            <p className="text-sm text-slate-100">Explore the steps in person and plan your rollout.</p>
          </div>
          <CTAButtons className="items-center" />
        </div>
      </section>
    </div>
  );
}
