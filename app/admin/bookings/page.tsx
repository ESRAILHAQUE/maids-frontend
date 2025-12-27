"use client";

import { useMemo, useState, useEffect } from "react";
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  Filter,
  Phone,
  Search,
  Loader2,
} from "lucide-react";
import { api } from "../../_lib/api";
import { useToast } from "../../_lib/toast";
import { useAuth } from "../../_lib/auth";

type BookingStatus = "pending" | "confirmed" | "in_progress" | "completed" | "cancelled";
type PaymentStatus = "unpaid" | "paid" | "refunded";

interface Booking {
  _id: string;
  createdAt: string;
  service: string;
  hours: number;
  cleaners: number;
  materials: "with" | "without";
  date: string;
  time: string;
  area: string;
  address: { zone?: string; building?: string; street?: string };
  client: { name: string; phone: string; email?: string };
  notes?: string;
  totalQAR: number;
  status: BookingStatus;
  payment: { status: PaymentStatus; method?: string; invoiceId?: string };
  assignedStaffIds: string[];
}

const statusOptions: { label: string; value: BookingStatus | "all" }[] = [
  { label: "All statuses", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Confirmed", value: "confirmed" },
  { label: "In progress", value: "in_progress" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

const paymentOptions: { label: string; value: PaymentStatus | "all" }[] = [
  { label: "All payments", value: "all" },
  { label: "Unpaid", value: "unpaid" },
  { label: "Paid", value: "paid" },
  { label: "Refunded", value: "refunded" },
];

export default function AdminBookingsPage() {
  const { isAdmin } = useAuth();
  const { showToast } = useToast();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<(typeof statusOptions)[number]["value"]>("all");
  const [payment, setPayment] = useState<(typeof paymentOptions)[number]["value"]>("all");
  const [selected, setSelected] = useState<Booking | null>(null);

  useEffect(() => {
    if (!isAdmin) {
      showToast("Access denied. Admin only.", "error");
      return;
    }
    fetchBookings();
  }, [isAdmin, showToast]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (status !== "all") params.append("status", status);
      if (payment !== "all") params.append("payment", payment);
      if (q.trim()) params.append("search", q.trim());

      const response = await api.get<Booking[]>(`/v1/bookings?${params.toString()}`);
      if (response.data) {
        setBookings(Array.isArray(response.data) ? response.data : []);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        showToast(error.message, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      const timeoutId = setTimeout(() => {
        fetchBookings();
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [status, payment, q, isAdmin]);

  const handleStatusChange = async (bookingId: string, newStatus: BookingStatus) => {
    try {
      await api.patch(`/v1/bookings/${bookingId}/status`, { status: newStatus });
      showToast("Booking status updated successfully", "success");
      fetchBookings();
      if (selected?._id === bookingId) {
        setSelected({ ...selected, status: newStatus });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        showToast(error.message, "error");
      }
    }
  };

  const handlePaymentChange = async (
    bookingId: string,
    newStatus: PaymentStatus,
    method?: string,
    invoiceId?: string
  ) => {
    try {
      await api.patch(`/v1/bookings/${bookingId}/payment`, {
        status: newStatus,
        method,
        invoiceId,
      });
      showToast("Payment status updated successfully", "success");
      fetchBookings();
      if (selected?._id === bookingId) {
        setSelected({
          ...selected,
          payment: { ...selected.payment, status: newStatus, method, invoiceId },
        });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        showToast(error.message, "error");
      }
    }
  };

  const filtered = useMemo(() => {
    return [...bookings].sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
  }, [bookings]);

  const totals = useMemo(() => {
    const total = filtered.length;
    const paid = filtered
      .filter((b) => b.payment.status === "paid")
      .reduce((s, b) => s + b.totalQAR, 0);
    const unpaid = filtered
      .filter((b) => b.payment.status === "unpaid")
      .reduce((s, b) => s + b.totalQAR, 0);
    return { total, paid, unpaid };
  }, [filtered]);

  if (!isAdmin) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600">Access denied. Admin only.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-(--teal-dark)" />
      </div>
    );
  }

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Admin
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">Booking list</h1>
          <p className="mt-1 text-sm text-slate-600">
            Manage requests from Doha, West Bay, The Pearl, and Lusail.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <StatChip label="Bookings" value={`${totals.total}`} />
          <StatChip label="Paid" value={`${totals.paid} QAR`} />
          <StatChip label="Unpaid" value={`${totals.unpaid} QAR`} accent />
        </div>
      </div>

      <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-4 sm:p-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px_220px] gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search client, phone, invoice, service, area..."
              className="w-full rounded-sm border border-slate-200 bg-white pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-primary-rgb)/0.45)] focus:ring-offset-2"
            />
          </div>
          <Select
            label="Status"
            value={status}
            onChange={(v) => setStatus(v as any)}
            options={statusOptions}
          />
          <Select
            label="Payment"
            value={payment}
            onChange={(v) => setPayment(v as any)}
            options={paymentOptions}
          />
        </div>
      </div>

      <div className="rounded-sm border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="hidden lg:grid grid-cols-[1.2fr_0.7fr_0.8fr_0.7fr_0.9fr_0.7fr] gap-0 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
          <div>Client</div>
          <div>Service</div>
          <div>Schedule</div>
          <div>Status</div>
          <div>Payment</div>
          <div className="text-right">Total</div>
        </div>

        <div className="divide-y divide-slate-100">
          {filtered.map((b) => (
            <button
              key={b._id}
              type="button"
              onClick={() => setSelected(b)}
              className="w-full text-left px-5 py-4 hover:bg-slate-50 transition"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.7fr_0.9fr_0.7fr] gap-2 lg:gap-0 items-start lg:items-center">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {b.client.name}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5 truncate">
                    {b.area} • {b.client.phone} {b.client.email ? `• ${b.client.email}` : ""}
                  </p>
                </div>
                <div className="text-sm font-semibold text-slate-800">{b.service}</div>
                <div className="text-sm text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    {b.date} • {b.time}
                  </span>
                </div>
                <div>
                  <StatusPill value={b.status} />
                </div>
                <div className="text-sm text-slate-700">
                  <span className="font-semibold">{b.payment.status}</span>
                  {b.payment.invoiceId ? (
                    <span className="text-xs text-slate-500"> • {b.payment.invoiceId}</span>
                  ) : null}
                </div>
                <div className="text-right text-sm font-bold text-slate-900">
                  {b.totalQAR} QAR
                </div>
              </div>
            </button>
          ))}

          {filtered.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-sm font-semibold text-slate-900">No results</p>
              <p className="mt-1 text-sm text-slate-600">Try changing filters or search terms.</p>
            </div>
          ) : null}
        </div>
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <div className="absolute right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl border-l border-slate-200 overflow-y-auto">
            <div className="p-5 sm:p-6 border-b border-slate-200 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Booking
                </p>
                <h2 className="mt-1 text-lg font-bold text-slate-900 truncate">
                  {selected.client.name} • {selected.service}
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  {selected.area} • {selected.date} at {selected.time}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-slate-200 bg-white hover:bg-slate-50 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <Info label="Hours" value={`${selected.hours}h`} />
                <Info label="Cleaners" value={`${selected.cleaners}`} />
                <Info label="Materials" value={selected.materials === "with" ? "With materials" : "Without materials"} />
                <Info label="Total" value={`${selected.totalQAR} QAR`} />
              </div>

              <div className="rounded-sm border border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-sm font-semibold text-slate-900">Client</p>
                <p className="mt-2 text-sm text-slate-700">{selected.client.name}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                  <a
                    href={`tel:${selected.client.phone}`}
                    className="inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                  >
                    <Phone className="h-4 w-4 text-slate-500" />
                    {selected.client.phone}
                  </a>
                  {selected.client.email ? (
                    <span className="text-sm text-slate-600">{selected.client.email}</span>
                  ) : null}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Address</p>
                <p className="mt-1 text-sm text-slate-700">
                  {[selected.address.zone, selected.address.building, selected.address.street]
                    .filter(Boolean)
                    .join(", ") || "—"}
                </p>
              </div>

              {selected.notes ? (
                <div>
                  <p className="text-sm font-semibold text-slate-900">Notes</p>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {selected.notes}
                  </p>
                </div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-sm border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-900">Booking status</p>
                  <p className="mt-1 text-xs text-slate-600">Update the booking workflow.</p>
                  <div className="mt-3 space-y-2">
                    {statusOptions
                      .filter((s) => s.value !== "all")
                      .map((s) => (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() => handleStatusChange(selected._id, s.value as BookingStatus)}
                          className={`w-full rounded-sm border px-3 py-2 text-sm font-semibold transition ${selected.status === s.value
                            ? "border-[rgb(var(--brand-primary-rgb)/0.30)] bg-[rgb(var(--brand-primary-rgb)/0.08)] text-slate-900"
                            : "border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
                            }`}
                        >
                          {selected.status === s.value ? (
                            <span className="inline-flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-(--brand-primary)" />
                              {s.label}
                            </span>
                          ) : (
                            s.label
                          )}
                        </button>
                      ))}
                  </div>
                </div>

                <div className="rounded-sm border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-900">Payment</p>
                  <p className="mt-1 text-xs text-slate-600">Track invoice and payment state.</p>
                  <div className="mt-3 space-y-2">
                    {paymentOptions
                      .filter((p) => p.value !== "all")
                      .map((p) => (
                        <button
                          key={p.value}
                          type="button"
                          onClick={() => handlePaymentChange(selected._id, p.value as PaymentStatus, selected.payment.method, selected.payment.invoiceId)}
                          className={`w-full rounded-sm border px-3 py-2 text-sm font-semibold transition ${selected.payment.status === p.value
                            ? "border-[rgb(var(--brand-primary-rgb)/0.30)] bg-[rgb(var(--brand-primary-rgb)/0.08)] text-slate-900"
                            : "border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
                            }`}
                        >
                          {p.label}
                        </button>
                      ))}
                  </div>
                  {selected.payment.invoiceId ? (
                    <p className="mt-3 text-xs text-slate-600">
                      Invoice: <span className="font-semibold">{selected.payment.invoiceId}</span>
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="rounded-sm border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Assigned staff</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Demo view (staff management in Scheduling).
                    </p>
                  </div>
                  <span
                    className="text-[11px] font-bold rounded-sm px-2 py-0.5 border"
                    style={{
                      color: "var(--brand-primary)",
                      borderColor: "rgb(var(--brand-primary-rgb)/0.25)",
                      background: "rgb(var(--brand-primary-rgb)/0.10)",
                    }}
                  >
                    {selected.assignedStaffIds.length} assigned
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.assignedStaffIds.length ? (
                    selected.assignedStaffIds.map((id) => (
                      <span
                        key={id}
                        className="inline-flex items-center rounded-sm border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-800"
                      >
                        {id}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-slate-600">No staff assigned yet.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
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
        borderColor: accent ? "rgb(var(--brand-primary-rgb)/0.25)" : "rgba(15,23,42,0.10)",
      }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="text-sm font-bold text-slate-900">{value}</p>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <label className="space-y-1">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 flex items-center gap-2">
        <Filter className="h-4 w-4" />
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-sm border border-slate-200 bg-white px-4 py-3 pr-10 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-primary-rgb)/0.45)] focus:ring-offset-2"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
      </div>
    </label>
  );
}

function StatusPill({ value }: { value: BookingStatus }) {
  const styles =
    value === "pending"
      ? { color: "var(--brand-dark)", bg: "rgb(var(--brand-primary-rgb)/0.10)", border: "rgb(var(--brand-primary-rgb)/0.25)" }
      : value === "confirmed"
        ? { color: "var(--brand-primary)", bg: "rgb(var(--brand-primary-rgb)/0.14)", border: "rgb(var(--brand-primary-rgb)/0.30)" }
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

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm border border-slate-200 bg-white px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-bold text-slate-900">{value}</p>
    </div>
  );
}


