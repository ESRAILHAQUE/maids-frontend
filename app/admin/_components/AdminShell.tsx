"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  CalendarClock,
  CreditCard,
  LayoutDashboard,
  Menu,
  Users,
  X,
} from "lucide-react";

const BRAND = "#B84200";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
};

const nav: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Booking list", href: "/admin/bookings", icon: CalendarClock, badge: "Live" },
  { label: "Client management", href: "/admin/clients", icon: Users },
  { label: "Staff scheduling", href: "/admin/staff", icon: CalendarClock },
  { label: "Payment tracking", href: "/admin/payments", icon: CreditCard },
  { label: "Basic analytics", href: "/admin/analytics", icon: BarChart3 },
];

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close drawer on route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const activeLabel = useMemo(() => {
    const found = nav.find((n) => n.href === pathname);
    return found?.label ?? "Admin";
  }, [pathname]);

  return (
    <div className="min-h-[calc(100vh-0px)] bg-slate-50 text-slate-900">
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto w-[95%] px-4 py-3 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-slate-200 bg-white hover:bg-slate-50 transition"
            aria-label="Open admin menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Admin
            </p>
            <p className="text-sm font-bold text-slate-900 truncate">{activeLabel}</p>
          </div>
          <div className="h-10 w-10" />
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <aside className="h-full w-[86%] max-w-[360px] bg-white shadow-2xl border-r border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <BrandMark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-slate-200 bg-white hover:bg-slate-50 transition"
                aria-label="Close admin menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4">
              <Nav pathname={pathname} />
            </div>
          </aside>
        </div>
      )}

      <div className="w-full grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0 items-start">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block sticky top-0 h-screen border-r border-slate-200 bg-white">
          <div className="h-full p-5">
            <BrandMark />
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Admin dashboard for Aethla — bookings, clients, staff, payments & analytics.
            </p>
            <div className="mt-5">
              <Nav pathname={pathname} />
            </div>
            <div className="mt-6 rounded-sm border border-dashed border-slate-200 bg-slate-50 px-4 py-4">
              <p className="text-sm font-semibold text-slate-900">Booking data storage</p>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Demo data is stored locally in your browser (localStorage) for now.
              </p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative h-11 w-11 flex items-center justify-center text-white font-semibold"
        style={{
          clipPath: "polygon(25% 6%, 75% 6%, 94% 50%, 75% 94%, 25% 94%, 6% 50%)",
          background: `linear-gradient(135deg, ${BRAND}, #CF4B00)`,
          boxShadow: "0 12px 25px rgba(184, 66, 0, 0.25)",
        }}
      >
        A
      </div>
      <div className="min-w-0">
        <p className="text-base font-bold text-slate-900 truncate">Aethla Admin</p>
        <p className="text-xs text-slate-600 truncate">Operations dashboard</p>
      </div>
    </div>
  );
}

function Nav({ pathname }: { pathname: string }) {
  return (
    <nav className="flex flex-col gap-1">
      {nav.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-center justify-between gap-3 rounded-sm px-3 py-2.5 border transition ${
              active
                ? "border-[#B84200]/30 bg-[#FFF3EB] text-slate-900"
                : "border-transparent hover:border-slate-200 hover:bg-slate-50 text-slate-700"
            }`}
          >
            <span className="flex items-center gap-3 min-w-0">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-sm border ${
                  active ? "border-[#B84200]/25 bg-white" : "border-slate-200 bg-white"
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? "text-[#B84200]" : "text-slate-600"}`} />
              </span>
              <span className="text-sm font-semibold truncate">{item.label}</span>
            </span>
            {item.badge ? (
              <span
                className="text-[11px] font-bold rounded-sm px-2 py-0.5 border"
                style={{
                  color: BRAND,
                  borderColor: "rgba(184,66,0,0.25)",
                  background: "rgba(184,66,0,0.08)",
                }}
              >
                {item.badge}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}


