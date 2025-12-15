import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'School logo phone pouches | Customisation',
  description: 'Add school crests to lockable phone pouches for easy identification.',
  alternates: { canonical: 'https://schoolphonepouch.sg/customisation/school-logo' },
  openGraph: {
    title: 'School logo phone pouches',
    description: 'Logo printing, colour trims, and name card windows for accountability.'
  }
}

export default function SchoolLogoPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Customisation', href: '/customisation' }, { name: 'School logo' }]} />
      <h1 className="text-3xl font-bold">School logo phone pouches</h1>
      <p className="text-lg">Print your crest and tagline on every pouch so staff can recognise cohorts instantly across campus.</p>
      <div className="space-y-2 text-lg">
        <p>Logos are heat-pressed for durability and colour accuracy.</p>
        <p>Combine with level-specific trims and name cards for quick audits.</p>
      </div>
      <div className="flex gap-4">
        <Link href="/customisation" className="btn btn-secondary">Back to customisation</Link>
        <Link href="/contact?topic=customisation" className="btn btn-primary">Request branded samples</Link>
      </div>
    </div>
  )
}
