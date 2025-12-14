import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function OurBlog() {
  const blogPosts = [
    {
      title: "Pre-visit checklist: how to prep your space in 10 minutes",
      category: "Home care",
      image:
        "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1600&q=80&auto=format&fit=crop",
    },
    {
      title: "Office cleaning after hours: what great handover looks like",
      category: "Office",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80&auto=format&fit=crop",
    },
    {
      title: "Eco-safe products we trust for homes with kids and pets",
      category: "Supplies",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(72,194,203,0.12),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(207,75,0,0.12),transparent_30%)]" />

      <div className="relative w-[95%] max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10 sm:mb-12">
          <div className="space-y-2">
            <span className="inline-flex items-center justify-center rounded-full bg-[#48C2CB]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CF4B00] ring-1 ring-[#48C2CB]/20">
              Our blog
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900">
              Tips and playbooks from our maid teams.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Quick guides to keep homes and offices spotless between visits.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-slate-200/60 transition-colors duration-200 hover:bg-slate-800">
            View all articles
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(15,23,42,0.14)]"
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
                <span className="absolute left-4 bottom-4 inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-900">
                  {post.category}
                </span>
              </div>
              <div className="p-5 md:p-6 space-y-3">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#CF4B00] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600">
                  Actionable cleaning tips curated by our field supervisors and
                  maid leads.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#CF4B00]">
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
