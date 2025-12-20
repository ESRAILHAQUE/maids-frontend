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

const metrics = [
  { label: "Recurring clients", value: "320+" },
  { label: "Avg. rating", value: "4.9/5" },
  { label: "On-time visits", value: "98%" },
  { label: "Supervised crews", value: "100%" },
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
          <div className="inline-flex items-center gap-2 rounded-full text-white bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-primary)] ring-1 ring-white/30 backdrop-blur">
            <Sparkles className="h-4 w-4 text-white" />
            About Aethla
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Your time matters. We give it back.
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed">
            Aethla is more than a cleaning service—we restore balance to busy lives by
            taking care of the spaces you value. With trained, trusted teams and clear
            communication, we keep homes and workplaces spotless so you can focus on
            what’s important.
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
      <section className="bg-white">
        <div className="max-w-6xl w-[95%] mx-auto px-4 py-12 sm:py-16 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Exceptional cleaning, delivered with care
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We built Aethla to bring reliable, detail-driven cleaning to homes and
                businesses across Qatar. From spotless bathrooms to polished workstations,
                our teams follow structured checklists, use vetted supplies, and share
                photo confirmations so you always know the job is done right.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every cleaner is trained, background-checked, and supported by supervisors
                who audit quality. You’ll get flexible scheduling, rapid responses, and
                transparent pricing—no surprises, just consistently clean spaces.
              </p>
            </div>
            <div className="relative h-72 sm:h-80 overflow-hidden rounded-sm border border-slate-100 shadow-xl">
              <Image
                src="/images/TeamPic.jpg"
                alt="Aethla team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                You expect a lot—so we deliver more
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                No two spaces are the same. We listen first, tailor a plan, and adapt as
                your needs change. Share your preferences, sensitive areas, or eco-friendly
                requests; we’ll align the crew, supplies, and timing to fit.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-sm border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                The team you can trust
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Training is mandatory for every cleaner before entering your home or
                office. Supervised shifts, periodic audits, and real-time checklists keep
                standards high. If anything isn’t perfect, our 24-hour satisfaction
                follow-up means we’ll return and make it right.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgb(var(--brand-dark-rgb)/0.25)] transition hover:bg-[var(--brand-dark)]"
                >
                  Book a clean
                </Link>
                <Link
                  href="https://wa.me/97433337410"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[rgb(var(--brand-primary-rgb)/0.45)] hover:text-[var(--brand-primary)]"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-slate-50">
        <div className="max-w-6xl w-[95%] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-sm bg-white border border-slate-200 shadow-sm p-5 flex items-start gap-3">
            <ShieldCheck className="h-6 w-6 text-[var(--brand-primary)]" />
            <div>
              <p className="font-semibold text-slate-900">Vetted & insured</p>
              <p className="text-sm text-slate-700">Background checks, training, and coverage for peace of mind.</p>
            </div>
          </div>
          <div className="rounded-sm bg-white border border-slate-200 shadow-sm p-5 flex items-start gap-3">
            <Sparkles className="h-6 w-6 text-[var(--brand-primary)]" />
            <div>
              <p className="font-semibold text-slate-900">QA checklists</p>
              <p className="text-sm text-slate-700">Structured tasks with photo confirmations after every visit.</p>
            </div>
          </div>
          <div className="rounded-sm bg-white border border-slate-200 shadow-sm p-5 flex items-start gap-3">
            <Phone className="h-6 w-6 text-[var(--brand-primary)]" />
            <div>
              <p className="font-semibold text-slate-900">Fast support</p>
              <p className="text-sm text-slate-700">Reschedule or adjust requests quickly—responses under an hour.</p>
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgb(var(--brand-primary-rgb)/0.08)] border border-[rgb(var(--brand-primary-rgb)/0.18)] text-[var(--brand-primary)]">
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
            <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden border border-slate-200 shadow-lg">
              <Image
                src="/images/Helping.jpg"
                alt="Cleaning team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-6xl w-[95%] mx-auto px-4 py-12 sm:py-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">
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
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgb(var(--brand-dark-rgb)/0.25)] transition hover:bg-[var(--brand-dark)]"
            >
              Book a clean
            </Link>
            <Link
              href="tel:+97433337410"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[rgb(var(--brand-primary-rgb)/0.45)] hover:text-[var(--brand-primary)]"
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
