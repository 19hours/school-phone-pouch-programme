import Link from 'next/link';
import { vendorDetail, trustBadge } from './constants';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-sm text-slate-700">
          <div className="font-semibold text-slate-900">{trustBadge}</div>
          <div>{vendorDetail}</div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
          <Link href="/privacy" className="hover:text-primary focus-ring rounded">Privacy</Link>
          <Link href="/terms" className="hover:text-primary focus-ring rounded">Terms</Link>
          <Link href="/contact" className="hover:text-primary focus-ring rounded">Contact</Link>
          <Link href="/sitemap.xml" className="hover:text-primary focus-ring rounded">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
