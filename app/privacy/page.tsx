import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Privacy | School Phone Pouch Programme',
  description: 'Privacy notice covering the lead form, WhatsApp outreach, and analytics choices.',
  alternates: { canonical: 'https://schoolphonepouch.sg/privacy' },
  openGraph: {
    title: 'Privacy | School Phone Pouch Programme',
    description: 'How we handle enquiry data and contact preferences.'
  }
}

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Privacy' }]} />
      <h1 className="text-3xl font-bold">Privacy notice</h1>
      <p className="text-lg">We collect only the details needed to respond to school enquiries and to prepare quotes.</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Lead form submissions are used solely to respond with pricing, samples, or implementation guidance.</li>
        <li>WhatsApp outreach is optional; messages go directly to our local team.</li>
        <li>No third-party ad tracking is used; analytics are limited to site performance.</li>
        <li>Email and phone details are retained for follow-up on pilots, orders, or support requests.</li>
      </ul>
      <p className="text-lg">For data requests, contact us via the lead form or WhatsApp and we will respond promptly.</p>
    </div>
  )
}
