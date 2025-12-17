"use client";

import { useMemo, useState } from "react";
import { CreditCard, Filter, Receipt, Search } from "lucide-react";
import { useAdminStore } from "../_lib/useAdminStore";
import type { PaymentStatus } from "../_lib/adminStore";

const BRAND = "#B84200";

const paymentOptions: { label: string; value: PaymentStatus | "all" }[] = [
  { label: "All payments", value: "all" },
  { label: "Unpaid", value: "unpaid" },
  { label: "Paid", value: "paid" },
  { label: "Refunded", value: "refunded" },
];

export default function AdminPaymentsPage() {
  const { bookings, setPaymentStatus } = useAdminStore();
  const [q, setQ] = useState("");
  const [payment, setPayment] = useState<(typeof paymentOptions)[number]["value"]>("all");

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase();
    return [...bookings]
      .filter((b) => (payment === "all" ? true : b.payment.status === payment))
      .filter((b) => {
        if (!query) return true;
        const hay = [
          b.client.name,
          b.client.phone,
          b.client.email ?? "",
          b.service,
          b.area,
          b.payment.invoiceId ?? "",
          b.payment.method ?? "",
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(query);
      })
      .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
  }, [bookings, payment, q]);

  const totals = useMemo(() => {
    const paid = rows.filter((b) => b.payment.status === "paid").reduce((s, b) => s + b.totalQAR, 0);
    const unpaid = rows.filter((b) => b.payment.status === "unpaid").reduce((s, b) => s + b.totalQAR, 0);
    const refunded = rows.filter((b) => b.payment.status === "refunded").reduce((s, b) => s + b.totalQAR, 0);
    return { paid, unpaid, refunded };
  }, [rows]);

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Admin</p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">Payment tracking</h1>
          <p className="mt-1 text-sm text-slate-600">
            Track invoices and payment status for Aethla bookings (QAR).
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <StatChip label="Paid" value={`${totals.paid} QAR`} />
          <StatChip label="Unpaid" value={`${totals.unpaid} QAR`} accent />
          <StatChip label="Refunded" value={`${totals.refunded} QAR`} />
        </div>
      </div>

      <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-4 sm:p-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search invoice, client, method..."
              className="w-full rounded-sm border border-slate-200 bg-white pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B84200] focus:ring-offset-2"
            />
          </div>
          <label className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Payment status
            </span>
            <select
              value={payment}
              onChange={(e) => setPayment(e.target.value as any)}
              className="w-full appearance-none rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B84200] focus:ring-offset-2"
            >
              {paymentOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="rounded-sm border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="hidden lg:grid grid-cols-[1fr_0.9fr_0.8fr_0.7fr_0.6fr] gap-0 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
          <div>Invoice / Client</div>
          <div>Service</div>
          <div>Method</div>
          <div>Status</div>
          <div className="text-right">Amount</div>
        </div>
        <div className="divide-y divide-slate-100">
          {rows.map((b) => (
            <div key={b.id} className="px-5 py-4">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr_0.8fr_0.7fr_0.6fr] gap-2 lg:gap-0 items-start lg:items-center">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {b.payment.invoiceId ?? "—"} • {b.client.name}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600 truncate">
                    {b.area} • {b.date} {b.time ? `• ${b.time}` : ""} • {b.client.phone}
                  </p>
                </div>
                <div className="text-sm font-semibold text-slate-800">{b.service}</div>
                <div className="text-sm text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-slate-400" />
                    {b.payment.method ?? "—"}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <PaymentPill value={b.payment.status} />
                  <div className="relative">
                    <select
                      value={b.payment.status}
                      onChange={(e) => setPaymentStatus(b.id, e.target.value as PaymentStatus)}
                      className="rounded-sm border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B84200] focus:ring-offset-2"
                      aria-label="Update payment status"
                    >
                      <option value="unpaid">Unpaid</option>
                      <option value="paid">Paid</option>
                      <option value="refunded">Refunded</option>
                    </select>
                  </div>
                </div>
                <div className="text-right text-sm font-bold text-slate-900">{b.totalQAR} QAR</div>
              </div>
            </div>
          ))}
          {rows.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-sm font-semibold text-slate-900">No payment rows</p>
              <p className="mt-1 text-sm text-slate-600">Try changing filters.</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-sm border"
            style={{
              borderColor: "rgba(184,66,0,0.25)",
              background: "rgba(184,66,0,0.08)",
              color: BRAND,
            }}
          >
            <Receipt className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Note</p>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              This is a clean demo UI. When you connect your backend, replace localStorage with your API and real invoice numbers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatChip({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className="rounded-sm border px-4 py-2 bg-white"
      style={{
        borderColor: accent ? "rgba(184,66,0,0.25)" : "rgba(15,23,42,0.10)",
      }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="text-sm font-bold text-slate-900">{value}</p>
    </div>
  );
}

function PaymentPill({ value }: { value: PaymentStatus }) {
  const styles =
    value === "paid"
      ? { color: "#16A34A", bg: "rgba(22,163,74,0.10)", border: "rgba(22,163,74,0.22)" }
      : value === "unpaid"
      ? { color: BRAND, bg: "rgba(184,66,0,0.10)", border: "rgba(184,66,0,0.25)" }
      : { color: "#DC2626", bg: "rgba(220,38,38,0.10)", border: "rgba(220,38,38,0.22)" };

  return (
    <span
      className="inline-flex items-center justify-center rounded-sm border px-2.5 py-0.5 text-[11px] font-bold"
      style={{ color: styles.color, borderColor: styles.border, background: styles.bg }}
    >
      {value}
    </span>
  );
}


