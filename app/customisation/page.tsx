import { CTAButtons } from '../../components/CTAButtons';
import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'Customisation | SG School Phone Pouch Programme',
  description: 'Pouch colour options, name card holder, and school logo printing for qualifying quantities.',
  path: '/customisation',
});

export default function CustomisationPage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="section space-y-4">
        <h1 className="heading">Customisation</h1>
        <p className="subheading">Tailor the programme to your school’s identity.</p>
      </section>

      <section className="section space-y-4">
        <div className="card space-y-2 text-slate-800">
          <h2 className="text-xl font-semibold text-slate-900">Pouch colour</h2>
          <p>Useful for differentiating different student levels (P1 → Green, P2 → Yellow etc.)</p>
          <p>Choose from: Red, Orange, Yellow, Green, Blue, Indigo, Purple, Black, Grey.</p>
          <p>Free for quantities above 1000.</p>
        </div>
        <div className="card space-y-2 text-slate-800">
          <h2 className="text-xl font-semibold text-slate-900">Name card holder for easy identification</h2>
          <p>Useful for students to see who the pouch belongs to</p>
          <p>+ $0.50 per pouch</p>
        </div>
        <div className="card space-y-2 text-slate-800">
          <h2 className="text-xl font-semibold text-slate-900">School logo printing</h2>
          <p>Add your school logo (single colour print) on every pouch for more personalisation!</p>
          <p>+ $0.50 per pouch, minimum quantity is 1000</p>
        </div>
      </section>

      <section className="section rounded-xl bg-slate-900 px-6 py-10 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold">Book a demo</p>
            <p className="text-sm text-slate-100">See samples of colours and branding options.</p>
          </div>
          <CTAButtons className="items-center" />
        </div>
      </section>
    </div>
  );
}
