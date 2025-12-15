import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Terms | School Phone Pouch Programme',
  description: 'Basic terms, disclaimers, and support scope for the programme.',
  alternates: { canonical: 'https://schoolphonepouch.sg/terms' },
  openGraph: {
    title: 'Terms | School Phone Pouch Programme',
    description: 'Usage terms and disclaimers for enquiries and deployments.'
  }
}

export default function TermsPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Terms' }]} />
      <h1 className="text-3xl font-bold">Terms and disclaimer</h1>
      <p className="text-lg">Use of this site and the lead form indicates consent for us to contact you about pilots, pricing, and support.</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Information is provided for planning; schools should align final policies with MOE guidance.</li>
        <li>Quotes and delivery timelines are confirmed in writing upon acceptance.</li>
        <li>Onsite training and replacements are provided according to agreed scope of work.</li>
        <li>Content links to external resources for convenience; verify official sources for compliance.</li>
      </ul>
    </div>
  )
}
