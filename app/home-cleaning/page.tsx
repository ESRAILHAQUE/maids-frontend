import { CheckCircle2, DownloadCloud, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sidebarServices = [
  { label: "Commercial Cleaning", href: "/services#commercial-cleaning" },
  { label: "Cloth Ironing", href: "/services#cloth-ironing" },
  { label: "Maids Services", href: "/services#maids-services" },
  { label: "Home Cleaning", href: "/home-cleaning" },
  { label: "Window Cleaning", href: "/services#window-cleaning" },
  { label: "Office Cleaning", href: "/services#office-cleaning" },
  { label: "Carpet Cleaning", href: "/services#carpet-cleaning" },
];

export default function HomeCleaningPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/real-images/9.png"
            alt="Home cleaning hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/30 to-black/55" />
        </div>
        <div className="relative max-w-6xl w-[95%] mx-auto px-4 py-20 sm:py-24 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            <span className="text-(--brand-primary) text-white">Aethla</span>
            <span className="text-white/80">Cleaning Services</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold">Home Cleaning</h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/85">
            Professional home cleaning services in Doha, tailored to your schedule,
            preferences, and budget. Verified crews, consistent checklists, and
            spotless results every visit.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/50">/</span>
            <span className="text-white font-semibold">Home Cleaning</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl w-[95%] mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-12">
          {/* Main column */}
          <article className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Professional Home Cleaning Services in Doha, Qatar
              </h2>
              <div className="relative w-full overflow-hidden rounded-sm border border-slate-100 shadow-lg">
                <Image
                  src="/images/real-images/9.png"
                  alt="Home cleaning service"
                  width={1200}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Enjoy a spotless, organized home with Aethla’s professional cleaning
                teams. We follow structured checklists, use trusted supplies, and
                tailor every visit to your preferences—whether it’s weekly upkeep or
                a deep clean before guests arrive.
              </p>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Comprehensive Home Cleaning Solutions
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Dusting and wipe-down of surfaces, fixtures, and furniture",
                  "Vacuuming and mopping of floors, carpets, and rugs",
                  "Kitchen cleaning: appliances, countertops, sinks, and cabinets",
                  "Bathroom sanitation: toilets, showers, tiles, and mirrors",
                  "Window cleaning for a sparkling finish",
                  "Laundry and ironing services on request",
                  "Customizable plans to fit budget and schedule",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-(--brand-primary)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Why Choose Aethla for Your Home?
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Trusted, background-checked maids with supervision and QA checks",
                  "Eco-friendly supplies available upon request",
                  "Transparent pricing with no hidden fees or long-term lock-ins",
                  "Photo updates and checklists for consistent results every visit",
                  "Responsive support—reschedule or adjust tasks easily",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-(--brand-primary)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Book Your Home Cleaning Today
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Ready for a reliably clean home without the hassle? Tell us your
                preferred timing, any special instructions, and we’ll match you with
                the right crew. Weekly, bi-weekly, or one-time deep cleans available.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-(--brand-primary) px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgb(var(--brand-dark-rgb)/0.25)] transition hover:bg-(--brand-dark)"
                >
                  Book Online
                </Link>
                <Link
                  href="https://wa.me/97433337410"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[rgb(var(--brand-primary-rgb)/0.45)] hover:text-(--brand-primary)"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-sm border border-slate-100 bg-white shadow-md">
              <div className="px-5 py-4 border-b border-slate-100">
                <h4 className="text-base font-semibold text-slate-900">Choose Any Service</h4>
              </div>
              <div className="p-4 space-y-2">
                {sidebarServices.map((svc) => (
                  <Link
                    key={svc.label}
                    href={svc.href}
                    className={`block rounded-sm border px-3 py-2.5 text-sm font-semibold transition ${
                      svc.href === "/home-cleaning"
                        ? "border-[rgb(var(--brand-primary-rgb)/0.45)] text-(--brand-primary) bg-[rgb(var(--brand-primary-rgb)/0.06)]"
                        : "border-slate-200 text-slate-800 hover:border-[rgb(var(--brand-primary-rgb)/0.45)] hover:text-(--brand-primary)"
                    }`}
                  >
                    {svc.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-sm border border-slate-100 bg-white shadow-md p-5 space-y-4">
              <h4 className="text-base font-semibold text-slate-900">Download Brochures</h4>
              <p className="text-sm text-slate-600">
                Get a detailed overview of our home cleaning checklist, supplies, and options.
              </p>
              <button className="inline-flex items-center gap-2 rounded-sm bg-(--brand-primary) px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-(--brand-dark) cursor-pointer">
                <DownloadCloud className="h-4 w-4" />
                Download PDF
              </button>
            </div>

            <div className="rounded-sm border border-slate-100 bg-white shadow-md p-5 space-y-3">
              <h4 className="text-base font-semibold text-slate-900">Need help now?</h4>
              <p className="text-sm text-slate-600">
                Call or WhatsApp to customize your visit or reschedule.
              </p>
              <Link
                href="tel:+97433337410"
                className="inline-flex items-center gap-2 rounded-sm bg-(--brand-primary) px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-(--brand-dark)"
              >
                <Phone className="h-4 w-4" />
                +974 3333 7410
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
