import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Name card window | Customisation',
  description: 'Add student or class cards to keep pouches traceable and organised.',
  alternates: { canonical: 'https://schoolphonepouch.sg/customisation/name-card' },
  openGraph: {
    title: 'Name card window',
    description: 'Clear pockets for student details and circulation tracking.'
  }
}

export default function NameCardPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Customisation', href: '/customisation' }, { name: 'Name card' }]} />
      <h1 className="text-3xl font-bold">Name card window</h1>
      <p className="text-lg">Each pouch includes a clear window for student, class, or teacher cards to reduce mix-ups.</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Supports barcodes or QR labels if schools prefer scanning.</li>
        <li>Helps track circulation during CCAs or excursions.</li>
        <li>Pairs with numbered seals for audit trails.</li>
      </ul>
      <div className="flex gap-4">
        <Link href="/customisation" className="btn btn-secondary">Back to customisation</Link>
        <Link href="/contact?topic=customisation" className="btn btn-primary">Discuss card layouts</Link>
      </div>
    </div>
  )
}
