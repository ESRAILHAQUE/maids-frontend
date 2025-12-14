"use client";

import Image from "next/image";

export default function OurTeam() {
  const team = [
    {
      name: "Aisha Rahman",
      role: "Head of Maid Operations",
      bio: "Oversees training and on-site audits to keep every visit consistent.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
    },
    {
      name: "Daniel Cruz",
      role: "Quality & Safety Lead",
      bio: "Ensures eco-safe products and checklists are followed room by room.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
    },
    {
      name: "Maryam Al-Thani",
      role: "Client Success",
      bio: "Keeps communication clear, schedules tight, and feedback closed-loop.",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=800&q=80&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(72,194,203,0.12),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(207,75,0,0.12),transparent_28%)]" />

      <div className="relative w-[95%] max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center justify-center rounded-full bg-[#48C2CB]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CF4B00] ring-1 ring-[#48C2CB]/20">
            Our team
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900">
            Meet the people behind spotless results.
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Supervisors, trainers, and client success working together so every
            maid crew shows up prepared.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {team.map((member) => (
            <article
              key={member.name}
              className="group rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
              </div>
              <div className="p-5 md:p-6 space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#CF4B00]">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
