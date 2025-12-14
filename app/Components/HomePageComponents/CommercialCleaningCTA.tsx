import { Calendar, PhoneCall } from "lucide-react";

export default function CommercialCleaningCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-14 md:py-18 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(72,194,203,0.1),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(207,75,0,0.1),transparent_28%)]" />

      <div className="relative w-[95%] max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-tight text-slate-900">
              Need reliable commercial or office cleaning? We’re on-call across
              Qatar.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              After-hours service windows, vetted crews, and supervisor
              check-ins to keep your workspace consistently guest-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#CF4B00] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(207,75,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b84200]">
                <Calendar className="h-4 w-4" />
                Schedule a walk-through
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CF4B00]/40 hover:ring-[#CF4B00]/30">
                <PhoneCall className="h-4 w-4" />
                Talk with our team
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(15,23,42,0.12)]">
            <div className="flex flex-col gap-3 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Service windows</span>
                <span className="text-slate-600">6am – 11pm</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Coverage</span>
                <span className="text-slate-600">Doha & greater Qatar</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Team size</span>
                <span className="text-slate-600">2–12 cleaners / visit</span>
              </div>
              <div className="rounded-lg bg-slate-50 px-4 py-3 text-xs text-slate-700 ring-1 ring-slate-200">
                Custom scope for clinics, offices, showrooms, and retail. We
                bring supplies or work with your on-site standards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
