import Link from 'next/link'
import { getAllNews } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'News | School Phone Pouch Programme',
  description: 'Updates from Chu Technologies on local manufacturing and deployments.',
  alternates: { canonical: 'https://schoolphonepouch.sg/resources/news' }
}

export default function NewsIndex() {
  const news = getAllNews()
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'News' }]} />
      <h1 className="text-3xl font-bold">News</h1>
      <div className="space-y-4">
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
