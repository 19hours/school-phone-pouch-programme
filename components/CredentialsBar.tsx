export default function CredentialsBar() {
  return (
    <div className="bg-blue-900 text-slate-50 border-b border-blue-800">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-0.5">
          <p className="text-sm font-semibold sm:text-base">Registered Singapore government vendor (UEN 201926755K)</p>
          <p className="text-xs sm:text-sm">Procurement-ready with references, on-site demos, and local support.</p>
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs sm:text-sm">
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20">Local supplier, in-house manufacturing</span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20">MOE-aligned workflows and documentation</span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20">schoolphonepouch.sg support team</span>
        </div>
      </div>
    </div>
  )
}
