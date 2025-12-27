import { Building2, Check, Home, Hotel, Sparkles } from "lucide-react";

export default function OurServices() {
  const serviceGroups = [
    {
      title: "Residential Cleaning",
      tagline: "Enjoy a consistently clean and comfortable home without the stress.",
      icon: Home,
      bullets: [
        "Regular weekly, fortnightly, or monthly cleans",
        "One-off and deep cleaning",
        "Move-in / move-out cleaning",
        "Kitchen, bathroom, and living area detailing",
        "Custom cleaning plans to suit your lifestyle",
      ],
    },
    {
      title: "Commercial Cleaning",
      tagline: "Create a professional, hygienic space for staff and clients.",
      icon: Building2,
      bullets: [
        "Offices and workspaces",
        "Retail and business premises",
        "After-hours and scheduled cleaning",
        "Tailored cleaning programs",
      ],
    },
    {
      title: "Hospitality Cleaning",
      tagline: "Immaculate spaces that leave a lasting impression.",
      icon: Hotel,
      bullets: [
        "Short-term rental & Airbnb cleaning",
        "Hotels, motels, and serviced apartments",
        "High-turnover and detail-focused cleans",
        "Linen coordination (optional)",
        "Live-in maids and on-site housekeeping services for private residences, hospitality venues, and long-term accommodation",
      ],
    },
    {
      title: "Specialised Services",
      tagline: "For the jobs that need extra time, detail, and care.",
      icon: Sparkles,
      bullets: [
        "Deep and detailed cleans",
        "End-of-lease cleaning",
        "Post-event and post-construction cleaning",
        "Custom requests available",
      ],
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgb(var(--brand-primary-rgb)/0.10),transparent_38%),radial-gradient(circle_at_85%_0%,rgb(var(--brand-primary-rgb)/0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.0),rgba(255,255,255,0.82))]" />

      <div className="relative w-[98%] mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--brand-primary-rgb)/0.10)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)] ring-1 ring-[rgb(var(--brand-primary-rgb)/0.22)]">
              Our Services
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 leading-tight">
              Cleaning solutions for homes, businesses, and hospitality.
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-slate-600 leading-relaxed">
              At Aethla Cleaning and Hospitality, we offer flexible, personalised cleaning
              solutions designed to suit homes, businesses, and hospitality spaces. Every
              service is delivered with care, attention to detail, and our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {serviceGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article
                  key={group.title}
                  className="group relative overflow-hidden rounded-sm bg-white shadow-sm"
                >
                  <div className="relative p-5 md:p-6">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-[rgb(var(--brand-soft-rgb)/1)] text-[var(--brand-primary)] ring-1 ring-[rgb(var(--brand-primary-rgb)/0.18)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {group.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                          {group.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 h-px bg-slate-200/70" />

                    <ul className="mt-4 space-y-2 text-sm text-slate-700 leading-relaxed">
                      {group.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
