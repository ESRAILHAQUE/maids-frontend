"use client";

import { Check, Sparkles } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const promises = [
    "Personalised cleaning solutions tailored to your needs",
    "Professional, reliable, and detail-oriented team",
    "Flexible scheduling to suit your routine and lifestyle",
    "Free, transparent quotes with no surprises",
    "Consistent, high-quality results you can rely on",
    "Friendly communication and dependable service",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20 text-slate-900">
      {/* Light theme gradient background (distinct from AboutUs) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_15%,rgb(var(--brand-primary-rgb)/0.14),transparent_40%),radial-gradient(circle_at_12%_80%,rgb(var(--brand-primary-rgb)/0.10),transparent_46%),linear-gradient(25deg,rgb(var(--brand-primary-rgb)/0.08),transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none" />

      <div className="relative w-[95%]  mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--brand-soft-rgb)/1)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-primary)] ring-1 ring-[rgb(var(--brand-primary-rgb)/0.18)]">
              <Sparkles className="h-3.5 w-3.5" />
              Why Choose Aethla
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-tight text-slate-900">
                Choosing Aethla Cleaning and Hospitality means choosing quality,
                reliability, and complete peace of mind.
              </h2>
            </div>

            <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-slate-900">
                Our 5-Star Promise
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                We are committed to delivering exceptional service at every visit. We don’t just
                clean—we care about the experience we create for our clients, from the first contact
                to the final result.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700 leading-relaxed">
                {promises.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              We understand how overwhelming life can get. Our mission is simple: to make your life
              easier by creating clean, calm, and welcoming spaces you can truly enjoy.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-full h-[420px] sm:h-[470px] md:h-[460px] rounded-sm  overflow-hidden ">
              <div className="absolute inset-0 " />
              <Image
                src="/images/real-images/8.png"
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
