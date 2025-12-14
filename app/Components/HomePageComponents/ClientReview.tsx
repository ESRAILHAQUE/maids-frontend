import { Star } from "lucide-react";
import Image from "next/image";

export default function ClientReview() {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(72,194,203,0.14),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(207,75,0,0.14),transparent_26%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="relative w-[95%] max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center justify-center rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CF4B00] ring-1 ring-white/10">
            Client reviews
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold">
            Loved by homes and offices we clean every week.
          </h2>
          <p className="text-sm md:text-base text-slate-200/85 max-w-3xl mx-auto">
            Reliable maids, clear communication, and results you can see—and
            feel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_90px_rgba(0,0,0,0.55)]"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                    priority
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <p className="text-sm md:text-base text-slate-100 leading-relaxed">
                    “{review.quote}”
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {review.name}
                      </p>
                      <p className="text-xs text-slate-300">{review.role}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#CF4B00]">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
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
