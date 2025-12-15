import Image from 'next/image';
import Link from 'next/link';
import { CTAButtons } from '../components/CTAButtons';
import { buildMetadata } from '../lib/metadata';

export const metadata = buildMetadata({
  title: 'SG School Phone Pouch Programme | Simple, visible phone compliance for schools',
  description:
    'A simple, easy-to-audit phone management routine: students place phones into a personal locked pouch in phone-free spaces and unlock at approved times using an unlocking base.',
  path: '/',
});

export default function HomePage() {
  return (
    <div className="space-y-14 pb-14 md:space-y-20 md:pb-20">
      <section className="section">
        <div className="surface-panel grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-primary shadow-inner">School-ready programme</div>
            <h1 className="heading">SG School Phone Pouch Programme</h1>
            <p className="subheading">
              A simple, visible and easy-to-audit way to manage phones in phone-free spaces.
            </p>
            <CTAButtons />
            <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2 md:text-base">
              <div className="card bg-white/90">Chu Technologies Pte Ltd (UEN: 201926755K).</div>
              <div className="card bg-white/90">Government registered vendor on vendors@gov, since 2019.</div>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 shadow-2xl shadow-blue-200 md:h-[440px]">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" aria-hidden />
            <Image
              src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80"
              alt="Student placing phone into a lockable phone pouch"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section space-y-8">
        <div className="space-y-3">
          <h2 className="heading">Problem: Difficulty in managing phones in classroom environments</h2>
          <p className="text-lg text-slate-700 md:text-xl">Key challenges schools and exam centres tell us about:</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {["Students are often distracted by smartphones.", 'Schools and exam centres need simple, visible compliance.', 'Bags and pockets still allow discreet phone use.', 'Administrators need a consistent, easy-to-audit solution.'].map((item) => (
            <div key={item} className="card text-base text-slate-800 md:text-lg">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section space-y-8">
        <div className="space-y-3">
          <h2 className="heading">Solution: School Phone Pouch Programme</h2>
          <p className="text-lg text-slate-700 md:text-xl">A compact routine with clear accountability.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card space-y-3 text-base text-slate-800 md:text-lg">
            <p>Each student places their phone into a personal phone pouch as they enter a phone-free space.</p>
            <p>
              The pouch uses a safe clip mechanism, and can be unlocked using a magnetic base when students are allowed to use their phones again.
            </p>
            <p>Pouch stays with the student entire day, easy to show the phone is secured.</p>
            <p>Can be unlocked by admin staff during emergencies.</p>
            <p>Enables fast, visual compliance checks for teachers and administrators.</p>
          </div>
          <div className="card space-y-3 bg-gradient-to-br from-slate-900 to-blue-800 text-base text-slate-100 md:text-lg">
            <p className="text-xl font-semibold text-white">Highlights</p>
            <ul className="space-y-2">
              <li>Lock that can only be unlocked using an unlocking base.</li>
              <li>Compatible with all phone models.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h2 className="heading">Student safety is our priority</h2>
          <ul className="space-y-2 text-base text-slate-800 md:text-lg">
            <li>Our lockable phone pouches do not use needles.</li>
            <li>We use child-safe clips with locking technology.</li>
            <li>Student safety is our PRIORITY.</li>
          </ul>
        </div>
        <div className="relative h-72 overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-r from-primary to-secondary shadow-2xl shadow-blue-200">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" aria-hidden />
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt="Close-up of a safe lockable phone pouch"
            fill
            className="object-cover opacity-85"
          />
        </div>
      </section>

      <section className="section space-y-6">
        <div className="card flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-lg font-semibold text-slate-900">Explore the comparison vs phone lockers</p>
            <p className="text-base text-slate-700 md:text-lg">See how the programme delivers visible compliance and flexibility.</p>
          </div>
          <Link href="/programme" className="btn-secondary focus-ring text-sm md:text-base">
            View Programme vs Phone Lockers
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="surface-panel flex flex-col gap-5 rounded-3xl bg-gradient-to-r from-primary to-secondary px-8 py-10 text-white shadow-2xl shadow-blue-200 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold md:text-3xl">For interested schools: Please contact us immediately to roll out in 2026!</h2>
          </div>
          <CTAButtons className="items-center" />
        </div>
      </section>
    </div>
  );
}
