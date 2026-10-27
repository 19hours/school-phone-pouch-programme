// components/Customers.tsx
// Schools and institutions that have purchased. Shows each crest when a logo file is
// configured in siteConfig.customers, otherwise a monogram with the school's name.
import Image from "next/image";
import { siteConfig } from "@/lib/seo";

export function CustomerLogos({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`logo-grid${compact ? " logo-grid--compact" : ""}`}>
      {siteConfig.customers.map((c) => (
        <li key={c.name} className="logo-item">
          {c.logo ? (
            <>
              <Image
                src={c.logo.src}
                alt={c.name}
                width={c.logo.width}
                height={c.logo.height}
                title={c.name}
                // Files are already small and web-sized; serving them as-is keeps them sharp.
                unoptimized
              />
              {c.showName && <span className="logo-item__name">{c.name}</span>}
            </>
          ) : (
            <>
              <span className="logo-monogram" aria-hidden="true">
                {c.initials}
              </span>
              <span className="logo-item__name">{c.name}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

