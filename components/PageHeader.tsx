// components/PageHeader.tsx
// Inner page header: a full-width tinted band with breadcrumbs, H1, one-line summary and optional actions.
import { Breadcrumbs } from "@/components/Breadcrumbs";

type Props = {
  title: string;
  lead?: React.ReactNode;
  children?: React.ReactNode;
};

export function PageHeader({ title, lead, children }: Props) {
  return (
    <header className="page-header">
      <Breadcrumbs />
      <h1>{title}</h1>
      {lead && <p className="lead-text">{lead}</p>}
      {children && <div className="d-flex flex-column flex-sm-row gap-2 mt-4">{children}</div>}
    </header>
  );
}
