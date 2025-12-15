import Link from 'next/link';
import { vendorDetail, trustBadge } from './constants';

export function Footer() {
  return (
    <footer className="border-t border-white/60 bg-gradient-to-b from-white/70 to-blue-50/70">
      <div className="section flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-sm text-slate-700">
          <div className="text-base font-semibold text-slate-900">{trustBadge}</div>
          <div>{vendorDetail}</div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-800">
          <Link href="/privacy" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Privacy</Link>
          <Link href="/terms" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Terms</Link>
          <Link href="/contact" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Contact</Link>
          <Link href="/sitemap.xml" className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-primary focus-ring">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
