import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-top mt-5 bg-white">
      <div className="container py-4">
        <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center justify-content-between">
          <div className="text-muted small">
            © {new Date().getFullYear()} SG School Phone Pouch Programme
          </div>

          <div className="d-flex flex-wrap gap-3">
            <Link href="/privacy" className="text-decoration-none">
              Privacy
            </Link>
            <Link href="/terms" className="text-decoration-none">
              Terms
            </Link>
            <a href="/sitemap.xml" className="text-decoration-none">
              Sitemap
            </a>
            <Link href="/contact" className="text-decoration-none">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
