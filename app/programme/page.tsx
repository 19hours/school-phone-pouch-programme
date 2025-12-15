import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Programme | School Phone Pouch Programme',
  description: 'Operational details, workflow, and procurement-friendly process for the school phone pouch programme.',
  alternates: { canonical: 'https://schoolphonepouch.sg/programme' },
  openGraph: {
    title: 'Programme | School Phone Pouch Programme',
    description: 'Workflow and procurement details for the Singapore-made phone pouch programme.'
  }
}

export default function ProgrammePage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Programme' }]} />
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Programme overview</h1>
          <p className="text-xl">Built for Singapore schools with predictable lead times, simple classroom routines, and procurement documentation ready.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Workflow</h3>
              <p>Students lock phones at entry, teachers verify seals, and pouches stay sealed through curriculum hours.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Local supplier</h3>
              <p>In-house manufacturing in Singapore keeps replacements and spare seals on standby.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Procurement ready</h3>
              <p>Registered government vendor (UEN 201926755K) with past deployments and documentation templates.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Teacher-friendly</h3>
              <p>Clear routines, replacements from Singapore, and lanyard options make daily use practical.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn btn-primary w-full sm:w-auto text-center">Request a Quote</Link>
            <Link href="/faq" className="btn btn-secondary w-full sm:w-auto text-center">Read FAQs</Link>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <Image
            src="/images/student-using.svg"
            alt="Teacher verifying student placing phone into pouch"
            width={900}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </div>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Problem we solve</h2>
          <p className="text-lg">Classrooms struggle with phones hidden in bags, pockets, and lockers. Teachers spend time policing devices instead of starting lessons, and administrators need an auditable system that works for exams, CCAs, and visitors.</p>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Students are distracted by smartphones even when “switched off”.</li>
            <li>Bag storage still allows discreet use and creates disputes.</li>
            <li>Schools need a visible, simple routine that relief teachers can run.</li>
          </ul>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Solution in practice</h2>
          <p className="text-lg">Each student receives a labelled pouch with a child-safe magnetic clip. Phones stay powered but inaccessible, and unlocking happens only at staffed bases.</p>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Pouches stay with the student all day—no locker bottlenecks.</li>
            <li>Unlock bases release the clip without needles or sharp pins.</li>
            <li>Serial numbers and name cards keep accountability objective.</li>
          </ul>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 space-y-3">
          <h3 className="text-xl font-semibold">Step 1: Phone goes into pouch</h3>
          <p>At entry to a phone-free space, students insert phones and seal the pouch. Teachers visually check colour-by-level and the name card window.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 space-y-3">
          <h3 className="text-xl font-semibold">Step 2: Pouch stays locked</h3>
          <p>The pouch remains with the student during lessons, CCAs, and exams. Phones are powered for emergency alerts but inaccessible without the base.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 space-y-3">
          <h3 className="text-xl font-semibold">Step 3: Unlock at a base</h3>
          <p>When phone use is allowed, students unlock at a staffed base near exits. Multiple bases prevent queues; mobile kits cover events and camps.</p>
        </div>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
        <h2 className="text-2xl font-semibold">Rolling out the programme</h2>
        <ol className="list-decimal pl-5 space-y-2 text-lg">
          <li>Identify phone-free spaces and clarify exceptions with discipline and ICT teams.</li>
          <li>Plan quantities by level and place unlock bases near exits to keep corridors clear.</li>
          <li>Train staff using provided scripts, posters, and parent letters.</li>
          <li>Issue pouches and practise the routine for two weeks with spare stock on standby.</li>
          <li>Review after the first term; relocate bases or adjust signage as needed.</li>
        </ol>
        <p className="text-lg">On-site samples and demonstrations can be arranged at schools upon request. WhatsApp us or use the lead form to schedule.</p>
      </section>
    </div>
  )
}
