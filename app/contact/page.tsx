import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const info = [
  {
    title: "Office Address",
    body: "3rd Floor, Al Muftah Plaza,\nAl Reem St, Doha, Qatar",
    icon: MapPin,
  },
  {
    title: "Phone Number",
    body: "+974 3333 7410\n+974 4444 0006",
    icon: Phone,
  },
  {
    title: "Mail Address",
    body: "info@aethla.com",
    icon: Mail,
  },
  {
    title: "Working Hours",
    body: "Saturday – Thursday: 7:00 – 23:00\nFriday: Closed",
    icon: Clock,
  },
];

const socials = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Twitter, href: "https://twitter.com" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&q=80"
            alt="Aethla contact hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-white/10" />
        </div>
        <div className="relative max-w-6xl w-[95%] mx-auto px-4 py-20 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CF4B00] ring-1 ring-white/30 backdrop-blur">
            Contact Aethla
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            The best cleaning service partners in Doha
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed">
            Talk to us about home or office cleaning, tailored plans, and fast scheduling.
            We respond quickly and keep every visit transparent.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/85">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-200">/</span>
            <span className="text-white font-semibold">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-6xl w-[95%] mx-auto px-4 py-10 sm:py-12">
        <div className="text-center space-y-2 mb-8">
          <p className="text-sm font-semibold text-[#CF4B00] uppercase tracking-[0.18em]">
            Contact Information
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Reach the Aethla team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {info.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF3EB] border border-[#F7D7C3] text-[#CF4B00]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{card.title}</p>
                </div>
                <p className="mt-3 text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + socials */}
      <section className="bg-slate-50">
        <div className="max-w-6xl w-[95%] mx-auto px-4 py-12 sm:py-14 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[#CF4B00] uppercase tracking-[0.18em]">
              Contact us
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold">Aethla Cleaning Company in Doha</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Share your needs—home, office, weekly, or one-time deep clean. We’ll respond
              with a tailored plan and schedule that fits.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#CF4B00] hover:text-[#CF4B00]"
                    aria-label={s.href}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <form className="rounded-2xl bg-white shadow-md border border-slate-200 p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">First Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CF4B00]"
                  placeholder="First Name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Last Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CF4B00]"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Contact Number</label>
              <input
                type="tel"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CF4B00]"
                placeholder="+974 ..."
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CF4B00]"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CF4B00]"
                placeholder="Tell us about your space, timing, and preferences."
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#CF4B00] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#b84300]"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-white">
        <div className="max-w-6xl w-[95%] mx-auto px-4 pb-12">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <iframe
              title="Aethla location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.627225606525!2d51.527!3d25.285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dfece0!2sDoha!5e0!3m2!1sen!2sqa!4v1700000000000"
              width="100%"
              height="380"
              loading="lazy"
              className="border-0 w-full"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
