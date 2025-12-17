import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Quote,
  Sparkles,
  Star,
  Twitter,
} from "lucide-react";

const testimonials = [
  {
    name: "Mike Hudson",
    role: "Homeowner, West Bay",
    quote:
      "Aethla leaves our home spotless every week. They remember preferences and keep communication clear.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    accent: "from-[#F59E0B] to-[#CF4B00]",
  },
  {
    name: "Margo Perry",
    role: "Office Manager, Lusail",
    quote:
      "Reliable after-hours office cleaning. Checklists, photos, and on-time crews every visit.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    accent: "from-[#2563EB] to-[#1D4ED8]",
  },
  {
    name: "Mila Loo",
    role: "Tenant, The Pearl",
    quote:
      "Move-in clean was thorough—kitchen, baths, and windows gleamed. Super easy to schedule.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    accent: "from-[#2563EB] to-[#1D4ED8]",
  },
  {
    name: "Paul Larson",
    role: "Clinic Director, Doha",
    quote:
      "They handle clinical areas with care. Supervisors verify every shift and respond quickly.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    accent: "from-[#F59E0B] to-[#CF4B00]",
  },
];

const socials = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
];

const stats = [
  { label: "Avg. rating", value: "4.9/5" },
  { label: "Recurring clients", value: "320+" },
  { label: "On-time visits", value: "98%" },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Testimonials.png"
            alt="Aethla testimonials hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/45 to-white/10" />
        </div>
        <div className="relative max-w-6xl w-[95%] mx-auto px-4 py-20 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/30 backdrop-blur">
            Testimonials
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What Aethla clients say about us
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed">
            Real feedback from homes, offices, and clinics across Doha. Reliable teams,
            clear communication, and spotless results every visit.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/85">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-200">/</span>
            <span className="text-white font-semibold">Testimonials</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl w-[95%] mx-auto px-4 pt-10 sm:pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-sm border border-slate-200 bg-white shadow-sm px-4 py-4 text-center"
            >
              <p className="text-xl sm:text-2xl font-bold text-slate-900">{s.value}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl w-[95%] mx-auto px-4 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
            >
              <div
                className={`absolute inset-0 opacity-10 bg-linear-to-br ${t.accent}`}
              />
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border border-slate-200 shadow-sm">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-600">{t.role}</p>
                  </div>
                </div>
                <div className="relative rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-slate-800">
                  <Quote className="absolute -left-3 -top-3 h-6 w-6 text-[#CF4B00]" />
                  <p className="text-sm leading-relaxed">{t.quote}</p>
                </div>
                <div className="flex items-center gap-1 text-[#CF4B00]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-600">
                    Verified client
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.href}
                        href={s.href}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#CF4B00] hover:text-[#CF4B00]"
                        aria-label={s.href}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl w-[95%] mx-auto px-4 py-12 sm:py-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#CF4B00]">
              Ready to experience Aethla?
            </p>
            <h4 className="text-2xl font-bold text-slate-900">
              Book a clean with crews Doha trusts every week.
            </h4>
            <p className="text-sm text-slate-700">
              Tell us your timing and priorities—we’ll handle the rest with checklists and photo updates.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#CF4B00] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#CF4B00]/30 transition hover:bg-[#b84300]"
            >
              Book now
            </Link>
            <Link
              href="https://wa.me/97433337410"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#CF4B00] hover:text-[#CF4B00]"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
