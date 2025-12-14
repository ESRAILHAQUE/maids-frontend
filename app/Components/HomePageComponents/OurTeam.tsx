"use client";

import Image from "next/image";

export default function OurTeam() {
  const metrics = [
    { label: "High value service", value: 99 },
    { label: "Filipino staff", value: 99 },
    { label: "Well trained", value: 99 },
    { label: "On time", value: 99 },
    { label: "All over Qatar", value: 80 },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(72,194,203,0.12),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(207,75,0,0.12),transparent_28%)]" />

      <div className="relative w-[95%] max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center justify-center rounded-full bg-[#48C2CB]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CF4B00] ring-1 ring-[#48C2CB]/20">
            Our team
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900">
            Meet the people behind spotless results.
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Supervisors, trainers, and client success working together so every
            maid crew shows up prepared.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">
              Our team, audited and trained.
            </h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Carefully selected housekeepers, supervisors, and client success
              leads who keep every visit on-time, on-spec, and consistently
              spotless across Qatar.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-4 md:p-5 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#CF4B00] to-[#B84200] text-white grid place-items-center font-semibold">
                QA
              </div>
              <div className="text-sm text-slate-700">
                QA + QC specialists monitor checklists, timing, and supplies so
                every crew meets the same standard.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {metrics.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
                  <span>{item.label}</span>
                  <span className="text-[#CF4B00]">{item.value}%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#CF4B00]"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
