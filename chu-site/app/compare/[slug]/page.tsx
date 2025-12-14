import { getAllComparisons, getComparisonBySlug } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllComparisons().map(item => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getComparisonBySlug(params.slug)
  return {
    title: `${item?.title} | Comparison`,
    description: item?.description,
    alternates: { canonical: `https://chu-tech.sg/compare/${params.slug}` },
    openGraph: {
      title: `${item?.title} | Comparison`,
      description: item?.description
    }
  }
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const item = getComparisonBySlug(params.slug)
  if (!item) return <p>Not found</p>

  const related = [
    { href: '/programme', label: 'Programme' },
    { href: '/customisation', label: 'Customisation' },
    { href: '/faq/locking-mechanism', label: 'FAQ: locking mechanism' },
    { href: '/guides/implementation-guide', label: 'Implementation guide' }
  ]

  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Compare', href: '/compare' }, { name: item.title }]} />
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <p className="text-xl">{item.description}</p>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        {item.details.map(detail => <li key={detail}>{detail}</li>)}
      </ul>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold mb-3">Related links</h3>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          {related.map(link => (
            <li key={link.href}><Link href={link.href} className="text-brand-primary hover:underline">{link.label}</Link></li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <Link href="/contact?topic=comparison" className="btn btn-primary">Request a Quote</Link>
        <Link href="/faq" className="btn btn-secondary">See FAQs</Link>
      </div>
    </div>
  )
}
