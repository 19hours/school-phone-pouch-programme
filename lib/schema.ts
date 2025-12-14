export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chu Technologies Pte Ltd',
    url: 'https://chu-tech.sg',
    identifier: 'UEN 201926755K',
    sameAs: ['https://www.linkedin.com'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SG'
    }
  }
}

export function productSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'School Phone Pouch Programme',
    brand: 'Chu Technologies',
    description: 'Lockable, numbered phone pouches with Singapore-based support and customisation.',
    manufacturer: organizationSchema()
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function articleSchema({ title, description, url, date, author = 'Chu Technologies Pte Ltd' }: { title: string; description: string; url: string; date: string; author?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: date,
    author,
    publisher: organizationSchema()
  }
}
