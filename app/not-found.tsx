// app/not-found.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="container section text-center" style={{ maxWidth: 640 }}>
      <div className="eyebrow">404</div>
      <h1 className="section-title">We couldn’t find that page.</h1>
      <p className="section-lead mx-auto mb-4">
        It may have moved. These are the pages schools usually look for.
      </p>
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/how-it-works" className="btn btn-outline-primary">
          How it works
        </Link>
        <Link href="/pricing" className="btn btn-outline-primary">
          Pricing
        </Link>
        <Link href="/contact" className="btn btn-outline-primary">
          Contact
        </Link>
      </div>
    </div>
  );
}
