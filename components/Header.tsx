import Link from 'next/link';
import { CTAButtons } from './CTAButtons';
import { siteName } from './constants';

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold text-slate-900" aria-label={siteName}>
          {siteName}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/" className="hover:text-primary focus-ring rounded">Home</Link>
          <Link href="/how-it-works" className="hover:text-primary focus-ring rounded">How it works</Link>
          <Link href="/programme" className="hover:text-primary focus-ring rounded">Programme</Link>
          <Link href="/implementation-guide" className="hover:text-primary focus-ring rounded">Implementation guide</Link>
          <Link href="/pricing" className="hover:text-primary focus-ring rounded">Pricing</Link>
          <Link href="/customisation" className="hover:text-primary focus-ring rounded">Customisation</Link>
          <Link href="/samples-demo" className="hover:text-primary focus-ring rounded">Samples & demo</Link>
          <Link href="/contact" className="hover:text-primary focus-ring rounded">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <CTAButtons className="items-center" />
        </div>
        <div className="md:hidden">
          <Link href="/contact" className="btn-primary focus-ring">
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
