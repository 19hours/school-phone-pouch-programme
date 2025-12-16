// components/SiteHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { TrustBadge } from "@/components/TrustBadge";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/programme", label: "Programme" },
  { href: "/implementation-guide", label: "Implementation guide" },
  { href: "/pricing", label: "Pricing" },
  { href: "/customisation", label: "Customisation" },
  { href: "/samples-demo", label: "Samples & demo" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() || "/";

  return (
    <header className="bg-white border-bottom">
      {/* Full-width credibility bar */}
      <div className="bg-light border-bottom">
        <div className="container py-2">
          <TrustBadge />
        </div>
      </div>

      <div className="container py-3">
        {/* Top row: Logo (left) + CTAs (right) */}
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
          <Link
            href="/"
            className="d-inline-flex align-items-center"
            aria-label="SG School Phone Pouch Programme home"
          >
            <Image
              src="/logo.svg"
              alt="SG School Phone Pouch Programme"
              width={220}
              height={88}
              priority
              style={{ height: "auto", width: "auto", maxHeight: 88 }}
            />
          </Link>

          <div className="d-flex flex-column flex-sm-row gap-2 align-items-stretch align-items-sm-center">
            <Link
              href="/contact"
              className="btn btn-primary px-4 d-inline-flex align-items-center justify-content-center"
              style={{ minWidth: 190, minHeight: 44 }}
            >
              Book a demo
            </Link>

            <a
              href={buildWhatsAppUrl()}
              className="btn btn-outline-primary px-4 d-inline-flex align-items-center justify-content-center"
              target="_blank"
              rel="noopener noreferrer"
              style={{ minWidth: 190, minHeight: 44 }}
            >
              WhatsApp us
            </a>
          </div>
        </div>

        {/* Second row: Nav links */}
        <nav className="mt-3" aria-label="Primary">
          <ul className="nav flex-wrap gap-2 gap-lg-3 m-0 p-0">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href} className="nav-item">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "nav-link px-2 py-2 d-inline-flex align-items-center site-nav-link",
                      active ? "active" : "text-secondary",
                    ].join(" ")}
                    style={{ minHeight: 44, lineHeight: 1.2 }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}