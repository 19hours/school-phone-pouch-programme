import { siteConfig } from "@/lib/seo";

export function TrustBadge() {
  return (
    <div className="bg-light">
      <div className="container py-2">
        <div className="d-flex flex-column flex-md-row gap-1 gap-md-3 align-items-md-center justify-content-md-between">
          <div className="small fw-semibold">
            Made for Singapore Schools. Government Registered Company on Vendors@Gov since 2019.
          </div>
          <div className="small text-muted">
            {siteConfig.companyName} (UEN: {siteConfig.uen})
          </div>
        </div>
      </div>
    </div>
  );
}
