import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const guidesDir = path.join(process.cwd(), 'content/guides')
const resourcesDir = path.join(process.cwd(), 'content/resources')
const newsDir = path.join(process.cwd(), 'content/news')
const comparePath = path.join(process.cwd(), 'content/compare.json')
const faqPath = path.join(process.cwd(), 'content/faq.json')

function readMDXDirectory(dir: string) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))
}

export function getAllGuides() {
  return readMDXDirectory(guidesDir).map(file => {
    const slug = file.replace(/\.mdx$/, '')
    const { data, content } = matter(fs.readFileSync(path.join(guidesDir, file), 'utf-8'))
    return { slug, title: data.title, description: data.description, date: data.date, content }
  })
}

export function getGuideBySlug(slug: string) {
  const fullPath = path.join(guidesDir, `${slug}.mdx`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf-8'))
  return { slug, title: data.title, description: data.description, date: data.date, content }
}

export function getAllComparisons() {
  if (!fs.existsSync(comparePath)) return []
  return JSON.parse(fs.readFileSync(comparePath, 'utf-8')) as { slug: string; title: string; description: string; details: string[] }[]
}

export function getComparisonBySlug(slug: string) {
  return getAllComparisons().find(item => item.slug === slug)
}

export function getAllFaqs() {
  if (!fs.existsSync(faqPath)) return []
  return JSON.parse(fs.readFileSync(faqPath, 'utf-8')) as { slug: string; question: string; answer: string }[]
}

export function getFaqBySlug(slug: string) {
  return getAllFaqs().find(item => item.slug === slug)
}

export function getAllResources() {
  return readMDXDirectory(resourcesDir).map(file => {
    const slug = file.replace(/\.mdx$/, '')
    const { data, content } = matter(fs.readFileSync(path.join(resourcesDir, file), 'utf-8'))
    return { slug, title: data.title, description: data.description, date: data.date, content }
  })
}

export function getResourceBySlug(slug: string) {
  const fullPath = path.join(resourcesDir, `${slug}.mdx`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf-8'))
  return { slug, title: data.title, description: data.description, date: data.date, content }
}

export function getAllNews() {
  return readMDXDirectory(newsDir).map(file => {
    const slug = file.replace(/\.mdx$/, '')
    const { data, content } = matter(fs.readFileSync(path.join(newsDir, file), 'utf-8'))
    return { slug, title: data.title, description: data.description, date: data.date, content }
  })
}

export function getNewsBySlug(slug: string) {
  const fullPath = path.join(newsDir, `${slug}.mdx`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf-8'))
  return { slug, title: data.title, description: data.description, date: data.date, content }
}
