'use client'

import { useSearchParams } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Contact | School Phone Pouch Programme',
  description: 'Reach the Chu Technologies team for quotes, pilots, and procurement documents.',
  alternates: { canonical: 'https://schoolphonepouch.sg/contact' },
  openGraph: {
    title: 'Contact | School Phone Pouch Programme',
    description: 'Request a quote or arrange a consultation with the Singapore supplier.'
  }
}

export default function ContactPage() {
  const params = useSearchParams()
  const topic = params.get('topic')
  const message = params.get('message')
  const preset = topic || message ? `${topic ? `Topic: ${topic}\n` : ''}${message || ''}` : undefined

  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact' }]} />
      <h1 className="text-3xl font-bold">Contact us</h1>
      <p className="text-xl">We respond within one working day with pricing and the workflow fit for your school.</p>
      <LeadForm presetMessage={preset} />
    </div>
  )
}
