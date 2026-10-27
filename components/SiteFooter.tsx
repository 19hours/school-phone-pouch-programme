import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import { buildWhatsAppUrl, whatsappDisplay } from "@/lib/whatsapp";
import { guides } from "@/lib/guides";

const programmeLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/programme", label: "The programme" },
  { href: "/implementation-guide", label: "Getting started" },
  { href: "/pricing", label: "Pricing" },
  { href: "/customisation", label: "Customisation" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-12 col-lg-4">
            <div className="site-footer__name mb-3">{siteConfig.brandName}</div>
            <p className="mb-0">
              {siteConfig.companyName} (UEN {siteConfig.uen})
              <br />
              Registered on Vendors@Gov since 2019
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h2>Programme</h2>
            <ul>
              {programmeLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h2>Guides</h2>
            <ul>
              {guides.slice(0, 6).map((g) => (
                <li key={g.href}>
                  <Link href={g.href}>{g.short}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-3">
            <h2>Contact us</h2>
            <ul>
              <li>
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  WhatsApp {whatsappDisplay}
                </a>
                <div className="small">WhatsApp only, no calls</div>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container py-3 d-flex flex-column flex-md-row gap-2 justify-content-between">
          <div>
            © {new Date().getFullYear()} {siteConfig.companyName}
          </div>
          <div className="d-flex flex-wrap gap-4">
            <Link href="/privacy">Privacy statement</Link>
            <Link href="/terms">Terms of use</Link>
            <a href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
