import Link from 'next/link'
import { getAllResources, getAllNews } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Resources & News | Chu School Phone Pouch Programme',
  description: 'Resources and news about Singapore phone rules and Chu Technologies updates.',
  alternates: { canonical: 'https://chu-tech.sg/resources' },
  openGraph: {
    title: 'Resources & News | Chu School Phone Pouch Programme',
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
    </div>
  )
}
