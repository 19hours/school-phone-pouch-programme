import Link from 'next/link'
import { getAllFaqs } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'
import { faqSchema } from '@/lib/schema'

export const metadata = {
  title: 'FAQ | School Phone Pouch Programme',
  description: 'Frequently asked questions about the lockable phone pouch programme.',
  alternates: { canonical: 'https://schoolphonepouch.sg/faq' },
  openGraph: { title: 'FAQ | School Phone Pouch Programme', description: 'Answers for school leaders and operations teams.' }
}

export default function FAQIndex() {
  const faqs = getAllFaqs()
  const jsonLd = faqSchema(faqs)
  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'FAQ' }]} />
      <h1 className="text-3xl font-bold">Frequently asked questions</h1>
      <div className="space-y-4">
        {faqs.map(faq => (
          <div key={faq.slug} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <p className="mb-3">{faq.answer}</p>
            <Link href={`/faq/${faq.slug}`} className="text-brand-primary font-semibold">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
