import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="trust-banner">
        <span className="badge">Government registered vendor on vendors@gov, since 2019.</span>
      </div>
      <div className="footer-content">
        <div>
          <strong>SG School Phone Pouch Programme</strong>
          <p>Chu Technologies Pte Ltd (UEN: 201926755K).</p>
        </div>
        <div className="nav-links" style={{ padding: 0 }}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
