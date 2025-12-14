import {
  ArrowUpRight,
  Check,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    title: "Vetted & insured crews",
    description: "Background-checked professionals trained for premium spaces.",
    icon: ShieldCheck,
  },
  {
    title: "Eco-forward standards",
    description: "Hypoallergenic products that keep people and places safer.",
    icon: Leaf,
  },
  {
    title: "Detail-first execution",
    description: "40-point checklist so nothing is missed on site.",
    icon: Check,
  },
  {
    title: "Responsive support",
    description: "Same-day responses with clear updates you can trust.",
    icon: Sparkles,
  },
];

const stats = [
  { value: "4.9/5", label: "Google rating" },
  { value: "1,000+", label: "5-star reviews" },
  { value: "10 yrs", label: "Premium care in Qatar" },
];

export default function AboutUs() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white ">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(207,75,0,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(72,194,203,0.16),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="relative w-[95%] mx-auto px-4 sm:px-6  py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#CF4B00] ring-1 ring-white/10">
              <Sparkles className="h-3.5 w-3.5" />
              About Aethla
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold leading-tight text-white">
                Professional home and commercial cleaning trusted across Qatar.
              </h2>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl">
                Aethla combines meticulous maid service with clear communication.
                From routine upkeep to deep moves and office refreshes, every crew
                follows a documented standard so each visit feels consistent,
                thorough, and spotless.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 px-4 py-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#CF4B00]/40 hover:bg-white/10"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#CF4B00]/10 via-transparent to-[#48C2CB]/10" />
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#CF4B00] to-[#B84200] text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm md:text-base font-semibold text-white">
                        {title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 pt-1">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#CF4B00] to-[#B84200] ring-2 ring-slate-950" />
                <div className="h-8 w-8 rounded-full bg-white text-slate-900 text-xs font-semibold grid place-items-center ring-2 ring-slate-950">
                  QA
                </div>
                <div className="h-8 w-8 rounded-full bg-[#48C2CB] text-white text-xs font-semibold grid place-items-center ring-2 ring-slate-950">
                  QC
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                Dedicated QA + QC specialists audit every service so you can
                expect the same elevated finish, every time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#CF4B00] to-[#B84200] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#CF4B00]/25 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-[#CF4B00]/30">
                Book a walkthrough
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10">
                Meet the team
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#48C2CB]/15 blur-3xl" />
            <div className="absolute -right-4 bottom-6 h-32 w-32 rounded-full bg-[#CF4B00]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              <Image
                src="https://plus.unsplash.com/premium_photo-1682097409792-354d4d544753?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBtYWlkfGVufDB8fDB8fHww"
                alt="Aethla maid team preparing together"
                width={800}
                height={960}
                className="h-full w-full object-cover"
                priority
              />

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-slate-950/70 px-3 py-3 text-center shadow-lg ring-1 ring-white/5 backdrop-blur"
                  >
                    <div className="text-lg font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-wide text-slate-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
