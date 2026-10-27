// components/SiteHeader.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "@/components/Icons";
import { QuoteButton } from "@/components/QuoteButton";

const navItems = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/programme", label: "The programme" },
  { href: "/implementation-guide", label: "Getting started" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Guides" },
];

// Shown only in the mobile menu, where there is room for the full list.
const extraMobileItems = [
  { href: "/customisation", label: "Customisation" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() || "/";
  // Remember which page the mobile menu was opened on, so it closes itself after navigating.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);

  // Show the header's bottom border only once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (item: { href: string; label: string }) => {
    const active = isActivePath(pathname, item.href);
    return (
      <li key={item.href}>
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={`site-nav-link${active ? " active" : ""}`}
        >
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <header className={`site-header${scrolled || open ? " is-scrolled" : ""}`}>
      <div className="container">
        <div className="site-header__bar d-flex align-items-center justify-content-between gap-3">
          <Link href="/" className="d-inline-flex flex-shrink-0" aria-label="SG School Phone Pouch Programme – home">
            <Image
              src="/logo.svg"
              alt="SG School Phone Pouch Programme"
              width={774}
              height={406}
              priority
              className="site-logo"
            />
          </Link>

          <nav className="d-none d-lg-block" aria-label="Primary">
            <ul className="list-unstyled d-flex m-0">{navItems.map(navLink)}</ul>
          </nav>

          <div className="d-flex align-items-center gap-2">
            <QuoteButton size="md" className="d-none d-sm-inline-flex" />
            <button
              type="button"
              className="menu-toggle d-lg-none"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpenOn(open ? null : pathname)}
            >
              {open ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" className="mobile-menu d-lg-none" aria-label="Mobile">
            <ul className="list-unstyled m-0">
              {[...navItems, ...extraMobileItems].map(navLink)}
            </ul>
            <QuoteButton className="w-100 mt-3" />
          </nav>
        )}
      </div>
    </header>
  );
}
