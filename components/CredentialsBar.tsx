export default function CredentialsBar() {
  return (
    <div className="bg-blue-900 text-slate-50 border-b border-blue-800">
      <div className="max-w-6xl mx-auto px-4 py-1.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-0.5">
          <p className="text-sm font-semibold sm:text-base">Registered Singapore government vendor</p>
          <p className="text-[11px] sm:text-xs tracking-tight text-blue-100">UEN 201926755K</p>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] sm:text-sm leading-tight text-blue-100">
          <span>Local supplier & in-house manufacturing</span>
          <span className="hidden sm:inline">•</span>
          <span>MOE-aligned workflows & documentation</span>
          <span className="hidden sm:inline">•</span>
          <span>schoolphonepouch.sg support team</span>
        </div>
      </div>
    </div>
  )
}
