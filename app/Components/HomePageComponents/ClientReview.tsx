"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ClientReview() {
  const cards = useMemo(
    () => [
      {
        quote:
          "Their maid team is always on time and follows the checklist to the letter. Communication is clear and they remember our preferences.",
        name: "Layla H.",
        role: "Homeowner, West Bay",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop",
      },
      {
        quote:
          "We use them weekly for our office. Supplies, timing, and handover photos are consistent—exactly what we need after hours.",
        name: "Omar S.",
        role: "Office Manager, Doha",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
      },
      {
        quote:
          "Very professional team. They follow the agreed scope, arrive on time, and the quality stays consistent each visit.",
        name: "Sara K.",
        role: "Apartment Resident",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
      },
      {
        quote:
          "Our reception and meeting rooms look spotless after every clean. Great communication and easy scheduling.",
        name: "Hassan A.",
        role: "Facilities Coordinator",
        image:
          "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80&auto=format&fit=crop",
      },
    ],
    []
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardGapPx = 24; // matches gap-6
  const [activeIndex, setActiveIndex] = useState(0);
  const isAutoScrollingRef = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-review-card]");
    const step = (firstCard?.offsetWidth ?? el.clientWidth) + cardGapPx;
    if (!Number.isFinite(step) || step <= 0) return;

    const id = window.setInterval(() => {
      const container = scrollerRef.current;
      if (!container) return;

      const nextIndex = activeIndex >= cards.length - 1 ? 0 : activeIndex + 1;
      isAutoScrollingRef.current = true;
      setActiveIndex(nextIndex);
      container.scrollTo({ left: nextIndex * step, behavior: "smooth" });
      window.setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, 350);
    }, 3000);

    return () => window.clearInterval(id);
  }, [activeIndex, cards.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (isAutoScrollingRef.current) return;
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        const firstCard = el.querySelector<HTMLElement>("[data-review-card]");
        const step = (firstCard?.offsetWidth ?? el.clientWidth) + cardGapPx;
        if (!Number.isFinite(step) || step <= 0) return;
        const idx = Math.max(0, Math.min(cards.length - 1, Math.round(el.scrollLeft / step)));
        setActiveIndex(idx);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [cards.length]);

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20 text-slate-900">
      {/* Light theme gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgb(var(--brand-primary-rgb)/0.10),transparent_42%),radial-gradient(circle_at_88%_0%,rgb(var(--brand-primary-rgb)/0.08),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.0),rgba(255,255,255,0.85))]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none" />

      <div className="relative w-[95%]  mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-10">
            <div className="space-y-2 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--brand-primary-rgb)/0.10)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-primary)] ring-1 ring-[rgb(var(--brand-primary-rgb)/0.22)]">
                Client reviews
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900">
                Trusted by clients in real homes and real workplaces.
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
                Reliable service, clear communication, and consistently high standards.
              </p>
            </div>
          </div>

          {/* Slider */}
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Client reviews carousel"
          >
            {cards.map((review) => (
              <article
                key={review.name}
                data-review-card
                className="snap-start shrink-0 w-full md:w-[calc(50%-12px)] rounded-sm bg-[rgb(var(--brand-soft-rgb)/1)] px-6 py-7 md:px-7 md:py-8 ring-1 ring-slate-200"
              >
                <div className="flex items-start gap-5">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                      priority
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm md:text-base leading-relaxed text-slate-700">
                      {review.quote}
                    </p>

                    <div className="mt-4 flex items-end justify-between gap-4">
                      <p className="text-sm font-semibold text-slate-900">
                        — {review.name}{" "}
                        <span className="font-normal text-slate-600">{review.role}</span>
                      </p>
                      <Quote className="h-8 w-8 text-[var(--brand-primary)] opacity-80" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
