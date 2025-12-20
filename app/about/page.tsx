import { CheckCircle2, HelpCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    q: "Can I ask for special requests or focus on certain areas?",
    a: "Yes. Share your priorities before each visit—our team follows your checklist and confirms completed tasks.",
  },
  {
    q: "How often should I schedule a deep cleaning?",
    a: "Most homes benefit from a deep clean every 1-3 months, with maintenance visits weekly or bi-weekly.",
  },
  {
    q: "Are your cleaners insured and background-checked?",
    a: "Every Aethla team member is vetted, trained, and covered so you have peace of mind.",
  },
  {
    q: "Are your cleaning products safe for pets and children?",
    a: "We use trusted supplies and can switch to eco-friendly options on request for pet- and kid-safe routines.",
  },
];

const highlights = [
  "Licensed, insured, and background-checked teams",
  "Consistent QA checklists with photo updates",
  "Transparent pricing—no hidden fees",
  "Flexible scheduling: weekdays, evenings, weekends",
  "Eco-friendly product options on request",
  "24-hour satisfaction follow-up: we’ll make it right",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
            alt="Aethla cleaning hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-white/5" />
        </div>
        <div className="relative max-w-6xl w-[95%] mx-auto px-4 py-24 sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full text-white bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ring-1 ring-white/30 backdrop-blur">
            <Sparkles className="h-4 w-4 text-white" />
            About Aethla
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Aethla Cleaning and Hospitality{" "}
            <span className="block">Life, made possible.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed">
            Life is too valuable to spend it scrubbing, mopping, and stressing over mess. At Aethla Cleaning
            and Hospitality, we give you back what matters most—your time, your peace, and your space.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/85">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-white font-semibold">About</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgb(var(--brand-primary-rgb)/0.10),transparent_42%),radial-gradient(circle_at_86%_32%,rgb(var(--brand-primary-rgb)/0.06),transparent_48%),linear-gradient(180deg,transparent,rgb(var(--brand-primary-rgb)/0.03),transparent)]" />
        <div className="relative max-w-6xl w-[95%] mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--brand-primary)">
                  About Aethla
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  Life, made possible.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Life is too valuable to spend it scrubbing, mopping, and stressing over mess. At Aethla Cleaning
                  and Hospitality, we give you back what matters most—your time, your peace, and your space.
                </p>
                <p>
                  Whether you’re balancing work, family, or simply craving moments to breathe and enjoy life, we’re
                  here to lighten the load.
                </p>
                <p>
                  More than just a clean, Aethla delivers a premium, personalised cleaning and hospitality
                  experience designed around your lifestyle. With flexible scheduling, transparent communication,
                  free quotes, and services tailored to your unique needs, we make everyday life feel effortless and
                  elevated.
                </p>
                <p>
                  From homes to hospitality spaces, we treat every environment with care, precision, and pride—so
                  you can walk into a space that feels calm, refreshed, and truly yours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-sm border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-(--brand-primary)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--brand-primary-rgb)/0.10)] text-(--brand-primary)">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--brand-primary)">
                      Our 5-Star Promise
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      Exceptional results. Outstanding service.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  We are committed to exceptional results and outstanding service at every touchpoint. We don’t just
                  meet expectations—we anticipate them. Our growing community of loyal, satisfied clients reflects
                  our dedication to consistency, quality, and trust.
                </p>

                <div className="mt-5 h-px bg-slate-200" />

                <p className="mt-5 text-sm sm:text-base font-semibold text-slate-900">
                  Stop sacrificing your nights and weekends to cleaning.
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                  Let Aethla Cleaning and Hospitality take care of the details—so you can enjoy your home, your time,
                  and your life.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="rounded-sm border border-slate-200 bg-white p-4 shadow-sm flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-(--brand-primary) mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Trusted teams</p>
                    <p className="text-sm text-slate-700">Vetted, trained, and supported by supervisors.</p>
                  </div>
                </div>
                <div className="rounded-sm border border-slate-200 bg-white p-4 shadow-sm flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-(--brand-primary) mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Premium standards</p>
                    <p className="text-sm text-slate-700">Checklists-led cleaning with consistent quality.</p>
                  </div>
                </div>
                <div className="rounded-sm border border-slate-200 bg-white p-4 shadow-sm flex items-start gap-3">
                  <Phone className="h-5 w-5 text-(--brand-primary) mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Clear communication</p>
                    <p className="text-sm text-slate-700">Fast responses, flexible scheduling, free quotes.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-(--brand-primary) px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgb(var(--brand-dark-rgb)/0.25)] transition hover:bg-(--brand-dark)"
                >
                  Book a clean
                </Link>
                <Link
                  href="https://wa.me/97433337410"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[rgb(var(--brand-primary-rgb)/0.45)] hover:text-(--brand-primary)"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="max-w-6xl w-[95%] mx-auto px-4 py-12 sm:py-16 space-y-8">
          <h3 className="text-2xl font-semibold text-slate-900">Here to help</h3>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-8">
            <div className="space-y-2">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-sm border border-slate-200 bg-white px-5 py-4 text-slate-900 shadow-sm transition hover:shadow-md"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-sm sm:text-base font-semibold">
                    <span className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgb(var(--brand-primary-rgb)/0.08)] border border-[rgb(var(--brand-primary-rgb)/0.18)] text-(--brand-primary)">
                        <HelpCircle className="h-4 w-4" />
                      </div>
                      {item.q}
                    </span>
                    <span className="text-slate-400 group-open:hidden">+</span>
                    <span className="text-slate-400 hidden group-open:inline">−</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
            <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--brand-primary)">
                Support
              </p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">
                Need help choosing the right service?
              </h4>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Tell us your space type and timing. We’ll recommend the best plan and confirm quickly.
              </p>
              <div className="mt-5 space-y-3">
                <a
                  href="tel:+97433337410"
                  className="flex items-center justify-between gap-3 rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-[rgb(var(--brand-primary-rgb)/0.45)]"
                >
                  <span className="flex items-center gap-2 text-slate-700">
                    <Phone className="h-4 w-4 text-(--brand-primary)" />
                    Call
                  </span>
                  <span className="text-(--brand-primary)">+974 3333 7410</span>
                </a>
                <a
                  href="https://wa.me/97433337410"
                  className="flex items-center justify-between gap-3 rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-[rgb(var(--brand-primary-rgb)/0.45)]"
                >
                  <span className="flex items-center gap-2 text-slate-700">
                    <Sparkles className="h-4 w-4 text-(--brand-primary)" />
                    WhatsApp
                  </span>
                  <span className="text-(--brand-primary)">Message us</span>
                </a>
              </div>
              <div className="mt-5 h-px bg-slate-200" />
              <Link
                href="/booking"
                className="mt-5 inline-flex w-full items-center justify-center rounded-sm bg-(--brand-primary) px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-(--brand-dark)"
              >
                Book in minutes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-6xl w-[95%] mx-auto px-4 py-12 sm:py-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-(--brand-primary)">
              Ready for spotless spaces?
            </p>
            <h4 className="text-2xl font-bold text-slate-900">
              Get a tailored quote and schedule your next clean.
            </h4>
            <p className="text-sm text-slate-700">
              Share your priorities—we’ll match the right crew, timing, and supplies.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-(--brand-primary) px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgb(var(--brand-dark-rgb)/0.25)] transition hover:bg-(--brand-dark)"
            >
              Book a clean
            </Link>
            <Link
              href="tel:+97433337410"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[rgb(var(--brand-primary-rgb)/0.45)] hover:text-(--brand-primary)"
            >
              <Phone className="h-4 w-4" />
              +974 3333 7410
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
