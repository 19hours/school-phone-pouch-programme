import Link from 'next/link'
import { getAllComparisons } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Compare options | School Phone Pouch Programme',
  description: 'See how the Chu pouch compares to other storage methods for school phone policies.',
  alternates: { canonical: 'https://schoolphonepouch.sg/compare' },
  openGraph: {
    title: 'Compare options | School Phone Pouch Programme',
    description: 'Comparison hub for phone pouch approaches.'
  }
}

export default function CompareIndex() {
  const comparisons = getAllComparisons()
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Compare' }]} />
      <h1 className="text-3xl font-bold">Comparison hub</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {comparisons.map(item => (
          <div key={item.slug} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mb-3">{item.description}</p>
            <Link href={`/compare/${item.slug}`} className="btn btn-secondary">Read comparison</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
