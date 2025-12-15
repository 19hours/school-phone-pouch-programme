import { CTAButtons } from '../../components/CTAButtons';
import { whatsappLink } from '../../components/constants';
import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'Contact | SG School Phone Pouch Programme',
  description: 'Contact Kevin Chu to discuss rollout in 2026, pricing tiers, and a school demo.',
  path: '/contact',
});

const tallyUrl = process.env.NEXT_PUBLIC_TALLY_URL || 'https://tally.so/r/XXXXXX';

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="section space-y-4">
        <h1 className="heading">Contact</h1>
        <p className="subheading">For interested schools: Please contact us immediately to roll out in 2026!</p>
        <div className="card space-y-2 text-slate-800">
          <p className="font-semibold text-slate-900">Person in charge: Kevin Chu</p>
          <p>Email: kevin.chu@ct.com.sg</p>
          <p>WhatsApp: 98222723</p>
        </div>
        <div className="card overflow-hidden">
          <iframe
            src={tallyUrl}
            title="Tally contact form"
            className="h-[700px] w-full"
            aria-label="Contact form"
          />
          <p className="pt-4 text-sm text-slate-700">
            By submitting this form, you agree to be contacted about the SG School Phone Pouch Programme.
          </p>
        </div>
        <CTAButtons />
        <a href={whatsappLink} className="btn-secondary focus-ring inline-flex" rel="noopener noreferrer">
          Chat with us on WhatsApp
        </a>
      </section>
    </div>
  );
}
