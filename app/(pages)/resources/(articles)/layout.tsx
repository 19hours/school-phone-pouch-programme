// app/resources/(articles)/layout.tsx
// Metadata is set per page; a title here would reset the root title template for every resource.
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { GuidesNav } from "@/components/GuidesNav";

export default function ResourceArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-4 pt-lg-5">
      <div className="row g-5 align-items-start">
        <aside className="col-12 col-lg-3 order-2 order-lg-1">
          <GuidesNav />
        </aside>
        <article className="col-12 col-lg-9 order-1 order-lg-2 prose">
          <Breadcrumbs />
          {children}
        </article>
      </div>
      <CtaBand className="page-block" />
    </div>
  );
}
