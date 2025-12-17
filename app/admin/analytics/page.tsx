"use client";

import { useMemo } from "react";
import { BarChart3, Calendar, CreditCard, TrendingUp, Users } from "lucide-react";
import { useAdminStore } from "../_lib/useAdminStore";
import type { Booking } from "../_lib/adminStore";

const BRAND = "#B84200";

export default function AdminAnalyticsPage() {
  const { bookings } = useAdminStore();

  const kpis = useMemo(() => {
    const total = bookings.length;
    const paidRevenue = bookings
      .filter((b) => b.payment.status === "paid")
      .reduce((s, b) => s + b.totalQAR, 0);
    const avg = total ? Math.round(bookings.reduce((s, b) => s + b.totalQAR, 0) / total) : 0;
    const completionRate = total
      ? Math.round((bookings.filter((b) => b.status === "completed").length / total) * 100)
      : 0;
    return { total, paidRevenue, avg, completionRate };
  }, [bookings]);

  const byService = useMemo(() => groupBy(bookings, (b) => b.service), [bookings]);
  const byArea = useMemo(() => groupBy(bookings, (b) => b.area), [bookings]);

  const serviceSeries = useMemo(() => {
    const entries = Object.entries(byService).map(([k, v]) => ({
      label: k,
      count: v.length,
      revenue: v.reduce((s, b) => s + b.totalQAR, 0),
    }));
    return entries.sort((a, b) => b.count - a.count);
  }, [byService]);

  const areaSeries = useMemo(() => {
    const entries = Object.entries(byArea).map(([k, v]) => ({
      label: k,
      count: v.length,
      revenue: v.reduce((s, b) => s + b.totalQAR, 0),
    }));
    return entries.sort((a, b) => b.count - a.count);
  }, [byArea]);

  const topClients = useMemo(() => {
    const map = new Map<string, { name: string; phone: string; total: number; count: number }>();
    for (const b of bookings) {
      const key = `${b.client.phone}::${b.client.name}`;
      const existing = map.get(key) ?? { name: b.client.name, phone: b.client.phone, total: 0, count: 0 };
      existing.total += b.totalQAR;
      existing.count += 1;
      map.set(key, existing);
    }
    return [...map.values()].sort((a, b) => b.total - a.total).slice(0, 5);
  }, [bookings]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Admin</p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">Basic analytics</h1>
          <p className="mt-1 text-sm text-slate-600">Quick KPIs and breakdowns (demo data).</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Kpi icon={Calendar} label="Bookings" value={`${kpis.total}`} />
        <Kpi icon={CreditCard} label="Paid revenue" value={`${kpis.paidRevenue} QAR`} accent />
        <Kpi icon={TrendingUp} label="Avg order value" value={`${kpis.avg} QAR`} />
        <Kpi icon={Users} label="Completion rate" value={`${kpis.completionRate}%`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
        <ChartCard
          title="Bookings by service"
          subtitle="Home, office, move-in/out, etc."
          rows={serviceSeries}
        />
        <ChartCard
          title="Bookings by area"
          subtitle="Doha, West Bay, The Pearl, Lusail."
          rows={areaSeries}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 lg:gap-6 items-start">
        <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Top clients</h2>
              <p className="mt-1 text-sm text-slate-600">By lifetime value (QAR).</p>
            </div>
            <div
              className="flex h-11 w-11 items-center justify-center rounded-sm border"
              style={{
                borderColor: "rgba(184,66,0,0.25)",
                background: "rgba(184,66,0,0.08)",
                color: BRAND,
              }}
            >
              <BarChart3 className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-4 divide-y divide-slate-100">
            {topClients.map((c) => (
              <div key={`${c.phone}-${c.name}`} className="py-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{c.name}</p>
                  <p className="mt-0.5 text-xs text-slate-600">{c.phone} • {c.count} bookings</p>
                </div>
                <p className="text-sm font-bold text-slate-900 shrink-0">{c.total} QAR</p>
              </div>
            ))}
            {topClients.length === 0 ? (
              <p className="py-6 text-sm text-slate-600">No data yet.</p>
            ) : null}
          </div>
        </div>

        <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
          <h2 className="text-lg font-bold text-slate-900">Operational notes</h2>
          <div className="mt-3 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              Use this page to monitor booking volume and revenue trends. Once you connect a backend,
              you can replace these demo charts with real metrics.
            </p>
            <div className="rounded-sm border border-dashed border-slate-200 bg-slate-50 px-4 py-4">
              <p className="text-sm font-semibold text-slate-900">Recommendation</p>
              <p className="mt-1 text-sm text-slate-600">
                Track staff utilization per day and average response time for pending bookings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function groupBy<T>(arr: T[], key: (t: T) => string) {
  return arr.reduce<Record<string, T[]>>((acc, item) => {
    const k = key(item);
    (acc[k] ??= []).push(item);
    return acc;
  }, {});
}

function Kpi({
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
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

function ChartCard({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle: string;
  rows: { label: string; count: number; revenue: number }[];
}) {
  const max = Math.max(1, ...rows.map((r) => r.count));
  return (
    <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
        </div>
        <div
          className="flex h-11 w-11 items-center justify-center rounded-sm border"
          style={{
            borderColor: "rgba(184,66,0,0.25)",
            background: "rgba(184,66,0,0.08)",
            color: BRAND,
          }}
        >
          <BarChart3 className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[1fr_80px] gap-3 items-center">
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900 truncate">{r.label}</p>
                <p className="text-xs font-semibold text-slate-600 shrink-0">{r.count} bookings</p>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.round((r.count / max) * 100)}%`,
                    background: `linear-gradient(90deg, ${BRAND}, #CF4B00)`,
                  }}
                />
              </div>
            </div>
            <p className="text-right text-sm font-bold text-slate-900">{r.revenue} QAR</p>
          </div>
        ))}
        {rows.length === 0 ? <p className="text-sm text-slate-600">No data yet.</p> : null}
      </div>
    </div>
  );
}


