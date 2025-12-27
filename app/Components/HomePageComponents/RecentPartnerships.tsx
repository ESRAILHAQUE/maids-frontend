"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function RecentPartnerships() {
  const partners = [
    {
      id: 1,
      name: "Doha Residences",
      logo: "/images/arabic.jpg",
    },
    {
      id: 2,
      name: "Qatar Workspace Collective",
      logo: "/images/nextit.jpg",
    },
    {
      id: 3,
      name: "West Bay Clinics",
      logo: "/images/realstate.jpg",
    },
    {
      id: 4,
      name: "Pearl Retail Group",
      logo: "/images/shopfive.jpg",
    },
    { id: 5, name: "Qatar Workspace Collective", logo: "/images/nextit.jpg" },
    {id:6,  name: "West Bay Clinics", logo: "/images/realstate.jpg" },
    { id:7, name: "West Bay Clinics", logo: "/images/realstate.jpg" },
    { id:8, name: "West Bay Clinics", logo: "/images/realstate.jpg" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-14 md:py-18 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(72,194,203,0.1),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(207,75,0,0.1),transparent_28%)]" />

      <div className="relative w-[95%]  mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 text-center mb-8 sm:mb-10">
          <span className="inline-flex w-fit mx-auto items-center justify-center rounded-full bg-[#48C2CB]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CF4B00] ring-1 ring-[#48C2CB]/20">
            Recent partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Trusted by property, facility, and office teams across Qatar.
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            We partner with residences, clinics, and retailers who need reliable
            maid and cleaning crews on schedule—every week.
          </p>
        </div>

        <Marquee pauseOnHover speed={35} gradient={false} className="py-2">
          <div className="flex gap-4 md:gap-6 px-2">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="min-w-[200px] rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-[#CF4B00]/30 hover:shadow-[0_16px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="mx-auto mb-3 flex h-16 w-full max-w-[140px] items-center justify-center overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={64}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
