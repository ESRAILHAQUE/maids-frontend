"use client";

import { CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Maid-first expertise",
      description:
        "Trained housekeepers who follow a documented checklist for every visit.",
      icon: Sparkles,
    },
    {
      title: "Trusted and vetted",
      description:
        "Background checks, ID verification, and on-site quality audits each month.",
      icon: ShieldCheck,
    },
    {
      title: "On-time, every time",
      description:
        "Tight scheduling windows with proactive updates so you are never guessing.",
      icon: Clock3,
    },
    {
      title: "Eco-safe supplies",
      description:
        "Skin-safe, low-scent products chosen for homes with kids and pets.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-16 md:py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(72,194,203,0.14),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(207,75,0,0.14),transparent_26%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="relative w-[95%]  mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CF4B00] ring-1 ring-white/10">
              Why choose us
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-tight text-white">
                Maid-focused cleaning teams that show up prepared and on time.
              </h2>
              <p className="text-sm md:text-base text-slate-200/90 max-w-2xl">
                Every visit is checklist-driven, supervisor-audited, and backed
                by hotel-grade standards adapted for homes and offices across
                Qatar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="group rounded-sm border border-white/10 bg-white/5 px-4 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#CF4B00]/30 hover:bg-white/10"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-[#CF4B00]/15 text-[#CF4B00] p-2 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base md:text-lg font-semibold text-white">
                        {title}
                      </h3>
                      <p className="text-sm text-slate-200/85 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="inline-flex items-center justify-center gap-2 rounded-sm cursor-pointer bg-[#CF4B00] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(207,75,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b84200]">
                Book a maid visit
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-sm cursor-pointer bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15">
                Talk to our team
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-full h-[420px] sm:h-[470px] md:h-[520px] rounded-sm  overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_90px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
              <Image
                src="https://plus.unsplash.com/premium_photo-1682097409792-354d4d544753?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBtYWlkfGVufDB8fDB8fHww"
                alt="Maid team preparing cleaning supplies"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
