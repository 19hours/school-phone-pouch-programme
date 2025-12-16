// components/RelatedResources.tsx
import Link from "next/link";

type Item = { href: string; label: string };

type Props = {
  title?: string;
  items: Item[];
};

export default function RelatedResources({
  title = "Related resources",
  items,
}: Props) {
  if (!items?.length) return null;

  return (
    <div className="mt-5">
      <h2 className="h5 fw-bold mb-2">{title}</h2>
      <ul className="mb-0">
        {items.map((i) => (
          <li key={i.href} className="mb-1">
            <Link href={i.href} className="resource-secondary">
              {i.label} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
