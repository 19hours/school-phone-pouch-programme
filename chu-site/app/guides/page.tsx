import Link from 'next/link'
import { getAllGuides } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Guides | Chu School Phone Pouch Programme',
  description: 'Long-form guides on implementing school phone pouch programmes in Singapore.',
  alternates: { canonical: 'https://chu-tech.sg/guides' },
  openGraph: {
    title: 'Guides | Chu School Phone Pouch Programme',
    description: 'Implementation and operations guides for school teams.'
  }
}

export default function GuidesIndex() {
  const guides = getAllGuides()
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }]} />
      <h1 className="text-3xl font-bold">Guides</h1>
      <div className="space-y-4">
        {guides.map(guide => (
          <div key={guide.slug} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{guide.title}</h3>
            <p className="mb-3">{guide.description}</p>
            <Link href={`/guides/${guide.slug}`} className="btn btn-secondary">Read guide</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
