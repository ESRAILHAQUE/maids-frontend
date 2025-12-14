import Image from "next/image";

export default function OurServices() {
  const services = [
    {
      name: "Home & apartment care",
      description: "Recurring housekeeping, kitchen, bedrooms, living areas.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Deep cleaning",
      description: "Move-in/out, post-renovation, and detail-first resets.",
      image:
        "https://images.unsplash.com/photo-1581579185169-7a9132d38cf0?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Office & commercial",
      description: "Workspaces, clinics, and retail serviced after-hours.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Specialty surfaces",
      description: "Stone, glass, stainless, and delicate finishes handled right.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Laundry & ironing add-ons",
      description: "Optional wardrobe care during your booked visit.",
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Event turnover",
      description: "Pre/post event resets to keep your venue guest-ready.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(72,194,203,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(207,75,0,0.12),transparent_30%)]" />

      <div className="relative w-[95%] max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center justify-center rounded-full bg-[#48C2CB]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#CF4B00] ring-1 ring-[#48C2CB]/20">
            Our services
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900">
            Maid-led cleaning built for real life.
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Flexible schedules, eco-safe supplies, and detail-first teams for
            homes, offices, and specialty spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((service) => (
            <article
              key={service.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />
              </div>
              <div className="p-5 md:p-6 space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
