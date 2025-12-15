import { CTAButtons } from '../../components/CTAButtons';
import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'Samples & demo | SG School Phone Pouch Programme',
  description: 'We can bring samples and host a demo in your school. Contact us to arrange a visit.',
  path: '/samples-demo',
});

export default function SamplesDemoPage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="section space-y-4">
        <h1 className="heading">Samples / Demo</h1>
        <p className="subheading">We can bring the samples and host demo in your school.</p>
        <p className="text-slate-800">Please contact us to arrange for a visit!</p>
      </section>

      <section className="section rounded-xl bg-slate-900 px-6 py-10 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold">Book a demo</p>
            <p className="text-sm text-slate-100">We will bring samples for your team.</p>
          </div>
          <CTAButtons className="items-center" />
        </div>
      </section>
    </div>
  );
}
