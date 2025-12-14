import { MetadataRoute } from 'next'
import { getAllGuides, getAllResources, getAllNews, getAllComparisons, getAllFaqs } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://schoolphonepouch.sg'
  const staticRoutes = ['', '/programme', '/customisation', '/pricing', '/about', '/contact', '/compare', '/guides', '/resources', '/faq']
  const dynamicRoutes = [
    ...getAllGuides().map(item => `/guides/${item.slug}`),
    ...getAllResources().map(item => `/resources/${item.slug}`),
    ...getAllNews().map(item => `/resources/news/${item.slug}`),
    ...getAllComparisons().map(item => `/compare/${item.slug}`),
    ...getAllFaqs().map(item => `/faq/${item.slug}`)
  ]

  return [...staticRoutes, ...dynamicRoutes].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }))
}
