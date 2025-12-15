export default function CredentialsBar() {
  return (
    <div className="bg-blue-900 text-slate-50 border-b border-blue-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm sm:text-base font-semibold">Registered Singapore government vendor (UEN 201926755K)</p>
          <p className="text-sm sm:text-base">Procurement-ready with standing references and on-site demonstrations.</p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm sm:text-base">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Local supplier, in-house manufacturing</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">MOE-aligned workflows and documentation</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">schoolphonepouch.sg support team</span>
        </div>
      </div>
    </div>
  )
}
