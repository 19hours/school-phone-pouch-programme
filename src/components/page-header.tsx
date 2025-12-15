import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, cta }: Props) {
  return (
    <section className="container py-12 md:py-16">
      <div className="glass-card relative overflow-hidden border border-slate-200 px-6 py-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-light/70 via-white to-white" aria-hidden />
        <div className="relative space-y-5">
          {eyebrow && <Badge>{eyebrow}</Badge>}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{title}</h1>
              <p className="max-w-3xl text-lg text-slate-700">{description}</p>
            </div>
            {cta && <div className="flex flex-col gap-3 md:items-end">{cta}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
