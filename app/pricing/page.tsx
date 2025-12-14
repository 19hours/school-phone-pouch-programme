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
      <ul className="list-disc pl-6 text-lg space-y-2">
        <li>Volume: class or level-wide deployments receive staged deliveries.</li>
        <li>Customisation: colour, logo prints, and name cards influence unit pricing.</li>
        <li>Spares & seals: recommended 5-10% buffer per term for smooth operations.</li>
      </ul>
      <div className="flex gap-4">
        <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        <Link href="/compare" className="btn btn-secondary">Compare options</Link>
      </div>
    </div>
  )
}
