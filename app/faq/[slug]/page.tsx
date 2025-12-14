import { getAllFaqs, getFaqBySlug } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllFaqs().map(faq => ({ slug: faq.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const faq = getFaqBySlug(params.slug)
  return {
    title: `${faq?.question} | FAQ`,
    description: faq?.answer,
    alternates: { canonical: `https://schoolphonepouch.sg/faq/${params.slug}` },
    openGraph: { title: `${faq?.question} | FAQ`, description: faq?.answer }
  }
}

export default function FAQPage({ params }: { params: { slug: string } }) {
  const faq = getFaqBySlug(params.slug)
  if (!faq) return <p>Not found</p>
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq' }, { name: faq.question }]} />
      <h1 className="text-3xl font-bold">{faq.question}</h1>
      <p className="text-lg">{faq.answer}</p>
      <div className="flex gap-4">
        <Link href="/contact?topic=faq" className="btn btn-primary">Request a Quote</Link>
        <Link href="/programme" className="btn btn-secondary">Programme</Link>
      </div>
    </div>
  )
}
