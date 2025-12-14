import { CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sidebarServices = [
  { label: "Commercial Cleaning", href: "/commercial-cleaning" },
  { label: "Cloth Ironing", href: "/cloth-ironing" },
  { label: "Maids Services", href: "/maids-services" },
  { label: "Home Cleaning", href: "/home-cleaning" },
  { label: "Window Cleaning", href: "/window-cleaning" },
  { label: "Office Cleaning", href: "/office-cleaning" },
  { label: "Move In", href: "/move-in" },
  { label: "Carpet Cleaning", href: "/services#carpet-cleaning" },
];

export default function MoveInCleaningPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Move-In.jpg"
            alt="Move in cleaning hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55" />
        </div>
        <div className="relative max-w-6xl w-[95%] mx-auto px-4 py-20 sm:py-24 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            <span className="text-[#CF4B00]">Aethla</span>
            <span className="text-white/80">Move-In Cleaning</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold">Move-In Cleaning</h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/85">
            Start fresh in your new home with a deep, detailed clean. We prep every room
            so you can unpack into a spotless, healthy space.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/50">/</span>
            <span className="text-white font-semibold">Move-In Cleaning</span>
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
                Move-In Cleaning Services in Qatar
              </h2>
              <div className="relative w-full overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
                <Image
                  src="/images/Move-In.jpg"
                  alt="Move in cleaning service"
                  width={1200}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Moving is stressful—let Aethla handle the clean. We deep-clean kitchens,
                baths, floors, and high-touch areas so you can settle in quickly, knowing
                every surface is fresh and ready.
              </p>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Why Choose Aethla for Move-In Cleaning?
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Thorough dusting and wipe-down of all surfaces, fixtures, and shelves",
                  "Deep kitchen and bathroom sanitation",
                  "Floor care: vacuuming carpets and mopping hard surfaces",
                  "High-touch area disinfection for peace of mind",
                  "Optional add-ons for appliances, inside cabinets, and windows",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#CF4B00]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Comprehensive Move-In Checklist
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Surface dusting and wiping of fixtures, shelves, and ledges",
                  "Degreasing kitchens and sanitizing sinks, counters, appliances exteriors",
                  "Bathroom deep clean: tiles, toilets, showers, tubs, mirrors",
                  "Vacuuming and mopping across all rooms",
                  "Light switch, handle, and railing disinfection",
                  "Window and glass spot-cleaning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#0b9fb6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Book Your Move-In Clean Today
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Share your move date and priorities—we’ll align a team and timing that
                fits your schedule. Arrive to a clean, ready-to-live-in home.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#CF4B00] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#CF4B00]/30 transition hover:bg-[#b84300]"
                >
                  Book Online
                </Link>
                <Link
                  href="https://wa.me/97433337410"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#CF4B00] hover:text-[#CF4B00]"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-white shadow-md">
              <div className="px-5 py-4 border-b border-slate-100">
                <h4 className="text-base font-semibold text-slate-900">Choose Any Service</h4>
              </div>
              <div className="p-4 space-y-2">
                {sidebarServices.map((svc) => (
                  <Link
                    key={svc.label}
                    href={svc.href}
                    className={`block rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
                      svc.href === "/move-in"
                        ? "border-[#CF4B00] text-[#CF4B00] bg-[#e7f6f9]"
                        : "border-slate-200 text-slate-800 hover:border-[#CF4B00] hover:text-[#CF4B00]"
                    }`}
                  >
                    {svc.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white shadow-md p-5 space-y-4">
              <h4 className="text-base font-semibold text-slate-900">Download Brochures</h4>
              <p className="text-sm text-slate-600">
                Get a detailed overview of our move-in cleaning scope and options.
              </p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#CF4B00] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#CF4B00] cursor-pointer">
                Download PDF
              </button>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white shadow-md p-5 space-y-3">
              <h4 className="text-base font-semibold text-slate-900">Need help now?</h4>
              <p className="text-sm text-slate-600">
                Call or WhatsApp to customize your visit or reschedule.
              </p>
              <Link
                href="tel:+97433337410"
                className="inline-flex items-center gap-2 rounded-full bg-[#CF4B00] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#CF4B00]"
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
