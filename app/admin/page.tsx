"use client";

import Link from "next/link";
import { CalendarClock, CreditCard, TrendingUp, Users } from "lucide-react";
import { useMemo } from "react";
import { useAdminStore } from "./_lib/useAdminStore";

const BRAND = "#B84200";

export default function AdminHomePage() {
  const { bookings, hardReset } = useAdminStore();

  const kpis = useMemo(() => {
    const totalBookings = bookings.length;
    const pending = bookings.filter((b) => b.status === "pending").length;
    const today = new Date().toLocaleDateString("en-CA");
    const todayCount = bookings.filter((b) => b.date === today).length;
    const revenue = bookings
      .filter((b) => b.payment.status === "paid")
      .reduce((sum, b) => sum + b.totalQAR, 0);
    return { totalBookings, pending, todayCount, revenue };
  }, [bookings]);

  const recent = useMemo(() => {
    return [...bookings]
      .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
      .slice(0, 5);
  }, [bookings]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Admin dashboard
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
            Overview
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Aethla operations snapshot — demo data is stored locally.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={hardReset}
            className="inline-flex items-center justify-center rounded-sm border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Reset demo data
          </button>
          <Link
            href="/admin/bookings"
            className="inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(184,66,0,0.22)] transition hover:bg-[#9A2F00]"
            style={{ background: BRAND }}
          >
            View bookings
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard icon={CalendarClock} label="Total bookings" value={`${kpis.totalBookings}`} />
        <KpiCard icon={TrendingUp} label="Pending approvals" value={`${kpis.pending}`} accent />
        <KpiCard icon={Users} label="Today scheduled" value={`${kpis.todayCount}`} />
        <KpiCard icon={CreditCard} label="Revenue (paid)" value={`${kpis.revenue} QAR`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 lg:gap-6 items-start">
        <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">Recent bookings</h2>
            <Link href="/admin/bookings" className="text-sm font-semibold" style={{ color: BRAND }}>
              Open list →
            </Link>
          </div>
          <div className="mt-4 divide-y divide-slate-100">
            {recent.map((b) => (
              <div key={b.id} className="py-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {b.client.name} • {b.service}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {b.area} • {b.date} at {b.time} • {b.hours}h • {b.cleaners} cleaners
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <StatusPill value={b.status} />
                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    {b.totalQAR} QAR
                  </p>
                </div>
              </div>
            ))}
            {recent.length === 0 ? (
              <p className="py-6 text-sm text-slate-600">No bookings yet.</p>
            ) : null}
          </div>
        </div>

        <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
          <h2 className="text-lg font-bold text-slate-900">Quick actions</h2>
          <p className="mt-1 text-sm text-slate-600">
            Jump to core admin sections.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <QuickLink href="/admin/clients" label="Client management" />
            <QuickLink href="/admin/staff" label="Staff scheduling" />
            <QuickLink href="/admin/payments" label="Payment tracking" />
            <QuickLink href="/admin/analytics" label="Basic analytics" />
          </div>
        </div>
      </div>
    </section>
  );
}

function KpiCard({
  icon: Icon,
  label,
  value,
  accent = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
        </div>
        <div
          className="flex h-11 w-11 items-center justify-center rounded-sm border"
          style={{
            borderColor: accent ? "rgba(184,66,0,0.25)" : "rgba(15,23,42,0.10)",
            background: accent ? "rgba(184,66,0,0.08)" : "rgba(15,23,42,0.03)",
            color: accent ? BRAND : "rgb(51 65 85)",
          }}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function StatusPill({ value }: { value: string }) {
  const styles =
    value === "pending"
      ? { color: "#B84200", bg: "rgba(184,66,0,0.10)", border: "rgba(184,66,0,0.25)" }
      : value === "confirmed"
      ? { color: "#0b9fb6", bg: "rgba(72,194,203,0.16)", border: "rgba(72,194,203,0.30)" }
      : value === "in_progress"
      ? { color: "#2563EB", bg: "rgba(37,99,235,0.10)", border: "rgba(37,99,235,0.22)" }
      : value === "completed"
      ? { color: "#16A34A", bg: "rgba(22,163,74,0.10)", border: "rgba(22,163,74,0.22)" }
      : { color: "#DC2626", bg: "rgba(220,38,38,0.10)", border: "rgba(220,38,38,0.22)" };

  return (
    <span
      className="inline-flex items-center justify-center rounded-sm border px-2.5 py-0.5 text-[11px] font-bold"
      style={{ color: styles.color, borderColor: styles.border, background: styles.bg }}
    >
      {value.replaceAll("_", " ")}
    </span>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition flex items-center justify-between"
    >
      <span>{label}</span>
      <span className="text-slate-400">→</span>
    </Link>
  );
}


