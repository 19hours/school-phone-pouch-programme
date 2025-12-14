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
    alternates: { canonical: `https://schoolphonepouch.sg/compare/${params.slug}` },
    openGraph: {
      title: `${item?.title} | Comparison`,
      description: item?.description
    }
  }
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const item = getComparisonBySlug(params.slug)
  if (!item) return <p>Not found</p>

  const highlights: Record<string, string> = {
    'pouch-vs-yondr':
      'Our pouch uses a magnetic clip with no needle, keeping bags and hands safe while staying secure for assemblies and exams.',
    'pouch-vs-phone-lockers':
      'Because the pouch travels with the class, teachers avoid locker bottlenecks and can colour-code by level for quick checks.',
    'lockable-pouch-vs-standard-bags':
      'Serial numbers, name cards, and logo printing make accountability clear while staying lightweight for students.'
  }

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
      {highlights[item.slug] && <p className="text-lg text-slate-700">{highlights[item.slug]}</p>}
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
