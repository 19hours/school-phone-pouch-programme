import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing | School Phone Pouch Programme',
  description: 'Transparent, quote-based pricing with factors that impact your phone pouch programme cost.',
  alternates: { canonical: 'https://schoolphonepouch.sg/pricing' },
  openGraph: {
    title: 'Pricing | School Phone Pouch Programme',
    description: 'Request a quote based on cohort size, customisation, and replacement schedules.'
  }
}

export default function PricingPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Pricing' }]} />
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="text-xl">Quotes are tailored to cohort size, customisation level, and replacement buffer stock. We keep pricing predictable with local production.</p>
      <div className="bg-white rounded-2xl shadow p-6 space-y-3">
        <h2 className="text-2xl font-semibold">Indicative pouch pricing (per unit)</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Tier 1: 2,000 and above — $16</li>
          <li>Tier 2: 1,000 to 1,900 — $17</li>
          <li>Tier 3: 1 to 900 — $18</li>
        </ul>
        <p className="text-lg">One free unlocking base is included for every 100 pouches purchased. Additional unlocking bases are available at $80 each.</p>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
        <h3 className="text-xl font-semibold">Customisation options</h3>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Pouch colour selection by level (free for quantities above 1,000).</li>
          <li>Name card holder for easy identification: $0.50 per pouch.</li>
          <li>School logo printing (single colour): $0.50 per pouch, minimum quantity 1,000.</li>
          <li>Sling add-ons for cohorts that move frequently between venues.</li>
        </ul>
      </div>
      <div className="bg-white rounded-2xl shadow p-6 space-y-2">
        <h3 className="text-xl font-semibold">How pricing stays predictable</h3>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Local manufacturing shortens lead times and reduces freight variance.</li>
          <li>We recommend 5–10% spare pouches and seals per term for smooth operations.</li>
          <li>Quotes include UEN 201926755K and registered-vendor details for finance approvals.</li>
          <li>On-site demos and sample sets are available before committing to full rollout.</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        <Link href="/compare" className="btn btn-secondary">Compare options</Link>
      </div>
    </div>
  )
}
