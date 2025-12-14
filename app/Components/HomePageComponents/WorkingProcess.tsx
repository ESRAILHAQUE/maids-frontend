import { Calendar, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";

export default function WorkingProcess() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Tell us what you need",
      description:
        "Share your space, preferences, and timing. We confirm within minutes.",
    },
    {
      icon: Calendar,
      title: "Schedule your visit",
      description:
        "Pick a slot; we assign vetted maids and send a checklist for approval.",
    },
    {
      icon: Sparkles,
      title: "We clean and verify",
      description:
        "Teams arrive on time with eco-safe supplies. Supervisors verify key areas.",
    },
    {
      icon: CheckCircle2,
      title: "Feedback + follow-up",
      description:
        "We close the loop on feedback and keep your preferences saved.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(72,194,203,0.12),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(207,75,0,0.12),transparent_30%)]" />

      <div className="relative w-[95%]  mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center justify-center rounded-full bg-[#48C2CB]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CF4B00] ring-1 ring-[#48C2CB]/20">
            How it works
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900">
            A simple maid booking built around your time.
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            From first message to final check, we keep scheduling and standards
            clear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(15,23,42,0.14)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#CF4B00]/8 via-transparent to-[#48C2CB]/10 rounded-2xl" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-[#48C2CB]/10 p-2.5 text-[#CF4B00] ring-1 ring-[#48C2CB]/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
