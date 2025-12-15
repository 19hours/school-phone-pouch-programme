import { trustBadge, vendorDetail } from './constants';

export function TrustBadge() {
  return (
    <div className="bg-blue-50">
      <div className="section flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="badge" aria-label="Government vendor badge">
          {trustBadge}
        </div>
        <p className="text-sm text-slate-800">{vendorDetail}</p>
      </div>
    </div>
  );
}
