import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllResources, getResourceBySlug } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'
import { articleSchema } from '@/lib/schema'

export async function generateStaticParams() {
  return getAllResources().map(res => ({ slug: res.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const res = getResourceBySlug(params.slug)
  return {
    title: `${res.title} | Resource`,
    description: res.description,
    alternates: { canonical: `https://schoolphonepouch.sg/resources/${params.slug}` },
    openGraph: { title: `${res.title} | Resource`, description: res.description }
  }
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const res = getResourceBySlug(params.slug)
  const jsonLd = articleSchema({ title: res.title, description: res.description, url: `https://schoolphonepouch.sg/resources/${res.slug}`, date: res.date })
  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: res.title }]} />
      <h1 className="text-3xl font-bold">{res.title}</h1>
      <div className="prose prose-lg">
        <MDXRemote source={res.content} />
      </div>
    </div>
  )
}
