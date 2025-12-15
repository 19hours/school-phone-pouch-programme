import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Colour options for phone pouches | Customisation',
  description: 'Choose colours by level, house, or event for easy visual control.',
  alternates: { canonical: 'https://schoolphonepouch.sg/customisation/colour-options' },
  openGraph: {
    title: 'Colour options for phone pouches',
    description: 'Level-coded trims and panels to match your school identity.'
  }
}

export default function ColourOptionsPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Customisation', href: '/customisation' }, { name: 'Colour options' }]} />
      <h1 className="text-3xl font-bold">Colour options</h1>
      <p className="text-lg">Assign colours by level or house to make compliance checks visual at a glance.</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Standard palette available with quick turnaround.</li>
        <li>Custom colours on request with pre-production swatches.</li>
        <li>Mix-and-match trims with school logo printing.</li>
      </ul>
      <div className="flex gap-4">
        <Link href="/customisation" className="btn btn-secondary">Back to customisation</Link>
        <Link href="/contact?topic=customisation" className="btn btn-primary">Request colour swatches</Link>
      </div>
    </div>
  )
}
