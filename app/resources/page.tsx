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
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <span aria-hidden className="text-2xl">🔍</span>
          Suggested pages to capture more search queries
        </h2>
        <p className="text-lg text-slate-700">Publish these to cover common Singapore school search intents:</p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>“Phone pouch policy template for schools” — include ready-to-download parent letters.</li>
          <li>“How to collect phones before examinations” — step-by-step invigilation workflow.</li>
          <li>“Compare phone lockers vs lockable pouches” — reinforce safety, cost, and evacuation speed.</li>
          <li>“Magnetic clip vs pin lock safety” — highlight child-safe clip without needles (vs Yondr).</li>
          <li>“Custom school phone pouch printing in Singapore” — colours by level, logo, and name card window.</li>
          <li>“MOE-aligned mobile phone management” — map to common discipline and confiscation policies.</li>
        </ul>
      </div>
    </div>
  )
}
