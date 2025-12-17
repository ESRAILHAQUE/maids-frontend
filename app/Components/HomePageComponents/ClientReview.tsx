import { BadgeCheck, Quote, Sparkles, Star } from "lucide-react";
import Image from "next/image";

export default function ClientReview() {
  const highlights = [
    { label: "4.9/5 satisfaction", detail: "320+ recurring visits tracked" },
    { label: "Under 60 mins response", detail: "Scheduling + follow-ups" },
    { label: "Background-checked crews", detail: "Supervised and insured" },
  ];

  const reviews = [
    {
      quote:
        "Their maid team is always on time and follows the checklist to the letter. Communication is clear and they remember our preferences.",
      name: "Layla H.",
      role: "Homeowner, West Bay",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop",
    },
    {
      quote:
        "We use them weekly for our office. Supplies, timing, and handover photos are consistent—exactly what we need after hours.",
      name: "Omar S.",
      role: "Office Manager, Doha",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-16 md:py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(72,194,203,0.16),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(207,75,0,0.16),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.06),transparent_40%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="relative w-[95%]  mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CF4B00] ring-1 ring-white/10 w-fit mx-auto">
            <Sparkles className="h-3.5 w-3.5" />
            Client reviews
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold">
            Loved by homes and offices we clean every week.
          </h2>
          <p className="text-sm md:text-base text-slate-200/85 max-w-3xl mx-auto">
            Reliable maids, clear communication, and results you can see—and
            feel. Every visit is verified by checklists, photos, and a supervisor.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-white/10 p-6 md:p-7 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_24px_90px_rgba(0,0,0,0.55)]"
            >
              <div className="absolute inset-0 opacity-70 blur-2xl transition duration-300 group-hover:opacity-90 group-hover:blur-[18px] bg-[radial-gradient(circle_at_20%_20%,rgba(72,194,203,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(207,75,0,0.23),transparent_36%)]" />
              <div className="relative flex items-start gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15 ring-4 ring-white/5">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                    priority
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {review.name}
                      </p>
                      <p className="text-xs text-slate-300">{review.role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                      <BadgeCheck className="h-4 w-4 text-[#48C2CB]" />
                      Verified client
                    </span>
                  </div>

                  <div className="relative rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 shadow-inner shadow-black/30">
                    <Quote className="absolute -left-3 -top-3 h-6 w-6 text-[#CF4B00]" />
                    <p className="text-sm md:text-base leading-relaxed">
                      “{review.quote}”
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-1 text-[#CF4B00]">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                      <span className="text-xs font-semibold text-slate-200 ml-1">
                        {review.rating}.0 rating
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Weekly plan • Satisfaction guaranteed
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
