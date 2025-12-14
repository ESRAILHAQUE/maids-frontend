export default function Statistics() {
  const stats = [
    {
      number: "16,786+",
      label: "Homes and offices cleaned",
      note: "Recurring upkeep, deep cleans, and move-in care",
    },
    {
      number: "67",
      label: "Trusted maids",
      note: "Background-checked, trained, and QA-audited teams",
    },
    {
      number: "17,065",
      label: "Happy clients",
      note: "Clear communication and consistent results",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(72,194,203,0.08),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(207,75,0,0.08),transparent_30%)]" />

      <div className="relative w-[95%] max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:gap-2 mb-8 sm:mb-10 text-center">
          <span className="mx-auto inline-flex items-center justify-center rounded-full bg-[#48C2CB]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CF4B00] ring-1 ring-[#48C2CB]/20">
            Service impact
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900">
            Results our maid teams deliver every week.
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Metrics that reflect reliable schedules, vetted crews, and consistent finish quality.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-[#CF4B00] via-[#CF4B00] to-[#CF4B00] px-5 py-6 sm:px-8 sm:py-8 shadow-[0_24px_90px_rgba(15,23,42,0.16)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/30">
            {stats.map(({ number, label, note }, idx) => (
              <div
                key={label}
                className="flex flex-col gap-2 px-3 py-4 sm:px-6 sm:py-3 text-white"
              >
                <div className="text-4xl md:text-[42px] font-semibold tracking-tight leading-none">
                  {number}
                </div>
                <div className="text-base md:text-lg font-semibold">
                  {label}
                </div>
                <p className="text-sm text-white/85 leading-relaxed">
                  {note}
                </p>
                {idx < stats.length - 1 && (
                  <span className="sm:hidden h-px w-full bg-white/30 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
