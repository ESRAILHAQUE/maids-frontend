import {
  Check,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const promisePoints = [
    "Premium, personalised service designed around your lifestyle",
    "Flexible scheduling and transparent communication",
    "Free quotes and scopes tailored to your needs",
    "Care, precision, and pride in every environment we clean",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-900">
      {/* Light theme gradient background (distinct from WhyChooseUs) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgb(var(--brand-primary-rgb)/0.18),transparent_40%),radial-gradient(circle_at_92%_35%,rgb(var(--brand-primary-rgb)/0.08),transparent_44%),linear-gradient(160deg,rgb(var(--brand-primary-rgb)/0.10),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none" />

      <div className="relative w-[95%] mx-auto px-4 sm:px-6 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--brand-soft-rgb)/1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)] ring-1 ring-[rgb(var(--brand-primary-rgb)/0.18)]">
              <Sparkles className="h-3.5 w-3.5" />
              Aethla Cleaning and Hospitality
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight text-slate-900">
                Life, made possible.
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
                Life is too valuable to spend it scrubbing, mopping, and stressing over mess. We give
                you back what matters most—your time, your peace, and your space.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
                More than just a clean, Aethla delivers a premium, personalised cleaning and hospitality
                experience designed around your lifestyle—so every day feels effortless and elevated.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
              <div className="p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgb(var(--brand-soft-rgb)/1)] text-[var(--brand-primary)] ring-1 ring-[rgb(var(--brand-primary-rgb)/0.18)]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Our 5-Star Promise
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      Exceptional results and outstanding service at every touchpoint.
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-px bg-slate-200/70" />

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-700 leading-relaxed">
                  {promisePoints.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[rgb(var(--brand-primary-rgb)/0.10)] blur-3xl" />
            <div className="absolute -right-4 bottom-6 h-32 w-32 rounded-full bg-[rgb(var(--brand-primary-rgb)/0.12)] blur-3xl" />

            <div className="relative h-[420px] sm:h-[470px] lg:h-[520px] overflow-hidden rounded-sm ">
              <div className="absolute inset-0 " />
              <Image
                src="/images/real-images/7.png"
                alt="Aethla maid team preparing together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 95vw, 50vw"
                priority
              />

              <div className="absolute bottom-4 left-4 right-4 rounded-sm bg-white/90 px-4 py-4 shadow-lg ring-1 ring-slate-200 backdrop-blur">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="font-semibold text-slate-900">Flexible scheduling</div>
                    <div className="mt-0.5 text-xs text-slate-600">Built around your routine.</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Free quotes</div>
                    <div className="mt-0.5 text-xs text-slate-600">Transparent and simple.</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Tailored service</div>
                    <div className="mt-0.5 text-xs text-slate-600">Designed for your needs.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
