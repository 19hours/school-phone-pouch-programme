import Link from 'next/link'
import { getAllResources, getAllNews } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Resources & News | School Phone Pouch Programme',
  description: 'Resources and news about Singapore phone rules and Chu Technologies updates.',
  alternates: { canonical: 'https://schoolphonepouch.sg/resources' },
  openGraph: {
    title: 'Resources & News | School Phone Pouch Programme',
    description: 'Articles on phone policies and local supplier updates.'
  }
}

export default function ResourcesIndex() {
  const resources = getAllResources()
  const news = getAllNews()
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Resources' }]} />
      <h1 className="text-3xl font-bold">Resources & News</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Resources</h2>
        {resources.map(res => (
          <div key={res.slug} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{res.title}</h3>
            <p className="mb-3">{res.description}</p>
            <Link href={`/resources/${res.slug}`} className="btn btn-secondary">Read resource</Link>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">News</h2>
        {news.map(item => (
          <div key={item.slug} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mb-3">{item.description}</p>
            <Link href={`/resources/news/${item.slug}`} className="btn btn-secondary">Read news</Link>
          </div>
          ))}
      </div>
      <div className="space-y-3 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold">Policy and localisation hubs</h2>
        <p className="text-lg text-slate-700">Use these pages to cover common search intents and give staff a starting point:</p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li><Link className="text-brand-primary font-semibold" href="/singapore">Singapore phone policy hub</Link> — links to primary, secondary, and 2026 preparation topics.</li>
          <li><Link className="text-brand-primary font-semibold" href="/resources/singapore-phone-rules">Singapore phone rules explained</Link> — operational interpretation with MOE references.</li>
          <li><Link className="text-brand-primary font-semibold" href="/compare/phone-pouch-vs-yondr">School phone pouch vs Yondr</Link> — highlight magnetic clip safety and local supply.</li>
          <li><Link className="text-brand-primary font-semibold" href="/customisation">Customisation options</Link> — colours by level, logo, name card, and sling.</li>
          <li><Link className="text-brand-primary font-semibold" href="/guides/entry-exit-workflow-phone-pouch">Entry/exit workflow guide</Link> — step-by-step class routine.</li>
        </ul>
      </div>
    </div>
  )
}
