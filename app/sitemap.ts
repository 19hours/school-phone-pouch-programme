import { MetadataRoute } from 'next'
import { getAllGuides, getAllResources, getAllNews, getAllComparisons, getAllFaqs } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://schoolphonepouch.sg'
  const staticRoutes = [
    '',
    '/programme',
    '/customisation',
    '/pricing',
    '/about',
    '/contact',
    '/compare',
    '/guides',
    '/resources',
    '/faq',
    '/privacy',
    '/terms',
    '/sitemap',
    '/singapore',
    '/singapore/school-phone-policy',
    '/singapore/secondary-school-phone-rules',
    '/singapore/primary-school-phone-policy',
    '/singapore/phone-ban-vs-phone-management',
    '/singapore/what-schools-need-to-prepare-2026',
    '/customisation/school-logo',
    '/customisation/colour-options',
    '/customisation/name-card',
    '/customisation/sling',
    '/resources/singapore-phone-rules'
  ]
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
