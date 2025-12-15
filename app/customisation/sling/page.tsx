import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Sling option | Customisation',
  description: 'Add an adjustable sling so students can keep pouches visible during movement.',
  alternates: { canonical: 'https://schoolphonepouch.sg/customisation/sling' },
  openGraph: {
    title: 'Sling option',
    description: 'Adjustable sling for CCAs, excursions, and fast classroom transitions.'
  }
}

export default function SlingPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Customisation', href: '/customisation' }, { name: 'Sling' }]} />
      <h1 className="text-3xl font-bold">Sling option</h1>
      <p className="text-lg">Sling keeps pouches visible and reduces drops during hall transitions, CCAs, and excursions.</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Detachable, adjustable sling available in cohort colours.</li>
        <li>Useful for students moving between venues or carrying instruments.</li>
        <li>Pairs with name card windows for quick identification.</li>
      </ul>
      <div className="flex gap-4">
        <Link href="/customisation" className="btn btn-secondary">Back to customisation</Link>
        <Link href="/contact?topic=customisation" className="btn btn-primary">Request sling samples</Link>
      </div>
    </div>
  )
}
