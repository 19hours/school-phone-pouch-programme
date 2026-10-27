// components/GuidesNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { guides } from "@/lib/guides";

// Side menu listing every guide, with the current one highlighted.
export function GuidesNav() {
  const pathname = usePathname();

  return (
    <nav className="sidenav" aria-label="Guides">
      <p className="sidenav__title">
        <Link href="/resources" className="text-reset">
          Guides
        </Link>
      </p>
      <ul>
        {guides.map((g) => (
          <li key={g.href}>
            <Link href={g.href} aria-current={pathname === g.href ? "page" : undefined}>
              {g.short}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
