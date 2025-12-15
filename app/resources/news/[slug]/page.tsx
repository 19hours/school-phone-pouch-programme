import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllNews, getNewsBySlug } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'
import { articleSchema } from '@/lib/schema'

export async function generateStaticParams() {
  return getAllNews().map(item => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const news = getNewsBySlug(params.slug)
  return {
    title: `${news.title} | News`,
    description: news.description,
    alternates: { canonical: `https://schoolphonepouch.sg/resources/news/${params.slug}` },
    openGraph: { title: `${news.title} | News`, description: news.description }
  }
}

export default function NewsPage({ params }: { params: { slug: string } }) {
  const news = getNewsBySlug(params.slug)
  const jsonLd = articleSchema({ title: news.title, description: news.description, url: `https://schoolphonepouch.sg/resources/news/${news.slug}`, date: news.date })
  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'News', href: '/resources/news' }, { name: news.title }]} />
      <h1 className="text-3xl font-bold">{news.title}</h1>
      <div className="prose prose-lg">
        <MDXRemote source={news.content} />
      </div>
    </div>
  )
}
