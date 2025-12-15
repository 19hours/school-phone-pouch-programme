import Link from 'next/link'

export type Crumb = { name: string; href?: string }

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-base mb-4 text-slate-600">
      <ol className="flex flex-wrap gap-2 items-center">
        {crumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {crumb.href ? (
              <Link href={crumb.href} className="hover:underline text-brand-primary">{crumb.name}</Link>
            ) : (
              <span className="font-semibold text-slate-900">{crumb.name}</span>
            )}
            {idx < crumbs.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
