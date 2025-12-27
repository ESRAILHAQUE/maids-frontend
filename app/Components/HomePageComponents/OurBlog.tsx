import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function OurBlog() {
  const blogPosts = [
    {
      title: "Pre-visit checklist: how to prep your space in 10 minutes",
      category: "Home care",
      image:
        "/images/real-images/4.png",
    },
    {
      title: "Office cleaning after hours: what great handover looks like",
      category: "Office",
      image:
        "/images/real-images/5.png",
    },
    {
      title: "Eco-safe products we trust for homes with kids and pets",
      category: "Supplies",
      image:
        "/images/real-images/6.png",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--brand-primary-rgb)/0.08),transparent_32%),radial-gradient(circle_at_80%_10%,rgb(var(--brand-primary-rgb)/0.10),transparent_30%)]" />

      <div className="relative w-[95%]  mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10 sm:mb-12">
          <div className="space-y-2">
            <span className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--brand-primary-rgb)/0.10)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)] ring-1 ring-[rgb(var(--brand-primary-rgb)/0.22)]">
              Our blog
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900">
              Tips and playbooks from our maid teams.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Quick guides to keep homes and offices spotless between visits.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-sm bg-slate-900 text-white px-4 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-slate-200/60 transition-colors duration-200 hover:bg-slate-800">
            View all articles
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/45 via-transparent to-transparent" />
                <span className="absolute left-4 bottom-4 inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-900">
                  {post.category}
                </span>
              </div>
              <div className="p-5 md:p-6 space-y-3">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[var(--brand-primary)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600">
                  Actionable cleaning tips curated by our field supervisors and
                  maid leads.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]">
                  Read more
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
