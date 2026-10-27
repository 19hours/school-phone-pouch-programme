// app/(pages)/layout.tsx
// Inner pages share a centred content container; each page opens with a PageHeader band
// (or, for guides, the article layout). The homepage manages its own full-width sections.
export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return <div className="container pb-5 mb-lg-5">{children}</div>;
}
