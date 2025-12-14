import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllGuides, getGuideBySlug } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'
import { articleSchema } from '@/lib/schema'

export async function generateStaticParams() {
  return getAllGuides().map(guide => ({ slug: guide.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug)
  return {
    title: `${guide.title} | Guide`,
    description: guide.description,
    alternates: { canonical: `https://chu-tech.sg/guides/${params.slug}` },
    openGraph: {
      title: `${guide.title} | Guide`,
      description: guide.description
    }
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug)
  const jsonLd = articleSchema({
    title: guide.title,
    description: guide.description,
    url: `https://chu-tech.sg/guides/${guide.slug}`,
    date: guide.date
  })
  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: guide.title }]} />
      <h1 className="text-3xl font-bold">{guide.title}</h1>
      <div className="prose prose-lg">
        <MDXRemote source={guide.content} />
      </div>
    </div>
  )
}
