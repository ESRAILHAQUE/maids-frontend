"use client";

import { Mail, Phone, Search, User } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useAdminStore } from "../_lib/useAdminStore";

const BRAND = "#B84200";

type ClientRow = {
  key: string;
  name: string;
  phone: string;
  email?: string;
  area: string;
  totalBookings: number;
  lifetimeValue: number;
  lastBookingAt?: string; // yyyy-mm-dd
  lastService?: string;
  statuses: Record<string, number>;
};

export default function AdminClientsPage() {
  const { bookings } = useAdminStore();
  const [q, setQ] = useState("");
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const clients = useMemo(() => {
    const map = new Map<string, ClientRow>();
    for (const b of bookings) {
      const key = `${b.client.phone}::${b.client.name}`;
      const existing = map.get(key);
      const next: ClientRow = existing ?? {
        key,
        name: b.client.name,
        phone: b.client.phone,
        email: b.client.email,
        area: b.area,
        totalBookings: 0,
        lifetimeValue: 0,
        lastBookingAt: undefined,
        lastService: undefined,
        statuses: {},
      };
      next.totalBookings += 1;
      next.lifetimeValue += b.totalQAR;
      next.statuses[b.status] = (next.statuses[b.status] ?? 0) + 1;
      if (!next.lastBookingAt || b.date > next.lastBookingAt) {
        next.lastBookingAt = b.date;
        next.lastService = b.service;
        next.area = b.area;
      }
      if (!next.email && b.client.email) next.email = b.client.email;
      map.set(key, next);
    }
    return [...map.values()].sort((a, b) => (a.lifetimeValue > b.lifetimeValue ? -1 : 1));
  }, [bookings]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return clients;
    return clients.filter((c) => {
      const hay = [c.name, c.phone, c.email ?? "", c.area, c.lastService ?? ""].join(" ").toLowerCase();
      return hay.includes(query);
    });
  }, [clients, q]);

  const selected = useMemo(() => {
    if (!selectedKey) return null;
    return clients.find((c) => c.key === selectedKey) ?? null;
  }, [clients, selectedKey]);

  const selectedBookings = useMemo(() => {
    if (!selected) return [];
    return bookings
      .filter((b) => `${b.client.phone}::${b.client.name}` === selected.key)
      .sort((a, b) => (a.date > b.date ? -1 : 1));
  }, [bookings, selected]);

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Admin
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
            Client management
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Clients are grouped from booking data (Aethla services across Doha).
          </p>
        </div>
        <Link
          href="/admin/bookings"
          className="inline-flex items-center justify-center rounded-sm border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
        >
          Open booking list →
        </Link>
      </div>

      <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-4 sm:p-5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search clients by name, phone, email, area..."
            className="w-full rounded-sm border border-slate-200 bg-white pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B84200] focus:ring-offset-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 lg:gap-6 items-start">
        <div className="rounded-sm border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="hidden lg:grid grid-cols-[1.2fr_0.7fr_0.6fr_0.7fr] gap-0 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
            <div>Client</div>
            <div>Area</div>
            <div>Bookings</div>
            <div className="text-right">Lifetime</div>
          </div>
          <div className="divide-y divide-slate-100">
            {filtered.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setSelectedKey(c.key)}
                className={`w-full text-left px-5 py-4 hover:bg-slate-50 transition ${
                  selectedKey === c.key ? "bg-[#FFF3EB]" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.7fr_0.6fr_0.7fr] gap-2 lg:gap-0 items-start lg:items-center">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">{c.name}</p>
                    <p className="text-xs text-slate-600 mt-0.5 truncate">
                      {c.phone} {c.email ? `• ${c.email}` : ""}
                    </p>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">{c.area}</div>
                  <div className="text-sm font-semibold text-slate-800">{c.totalBookings}</div>
                  <div className="text-right text-sm font-bold text-slate-900">{c.lifetimeValue} QAR</div>
                </div>
              </button>
            ))}
            {filtered.length === 0 ? (
              <div className="px-5 py-10 text-center">
                <p className="text-sm font-semibold text-slate-900">No clients found</p>
                <p className="mt-1 text-sm text-slate-600">Try different search terms.</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
          {selected ? (
            <>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Client profile
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900 truncate">{selected.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Last booking: {selected.lastBookingAt ?? "—"} • {selected.lastService ?? "—"}
                  </p>
                </div>
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-sm border"
                  style={{
                    borderColor: "rgba(184,66,0,0.25)",
                    background: "rgba(184,66,0,0.08)",
                    color: BRAND,
                  }}
                >
                  <User className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Info label="Bookings" value={`${selected.totalBookings}`} />
                <Info label="Lifetime value" value={`${selected.lifetimeValue} QAR`} />
              </div>

              <div className="mt-4 rounded-sm border border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-sm font-semibold text-slate-900">Contact</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={`tel:${selected.phone}`}
                      className="inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                  >
                    <Phone className="h-4 w-4 text-slate-500" />
                    {selected.phone}
                  </a>
                  {selected.email ? (
                    <a
                      href={`mailto:${selected.email}`}
                      className="inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                    >
                      <Mail className="h-4 w-4 text-slate-500" />
                      {selected.email}
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-900">Status breakdown</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Object.entries(selected.statuses).map(([k, v]) => (
                    <span
                      key={k}
                      className="inline-flex items-center rounded-sm border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800"
                    >
                      {k.replaceAll("_", " ")} • {v}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-900">Recent history</p>
                <div className="mt-3 space-y-2">
                  {selectedBookings.slice(0, 6).map((b) => (
                    <div
                      key={b.id}
                      className="rounded-sm border border-slate-200 bg-white px-4 py-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 truncate">
                            {b.service} • {b.area}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-600">
                            {b.date} at {b.time} • {b.hours}h • {b.cleaners} cleaners
                          </p>
                        </div>
                        <p className="text-sm font-bold text-slate-900 shrink-0">
                          {b.totalQAR} QAR
                        </p>
                      </div>
                    </div>
                  ))}
                  {selectedBookings.length === 0 ? (
                    <p className="text-sm text-slate-600">No bookings for this client.</p>
                  ) : null}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-sm font-semibold text-slate-900">Select a client</p>
              <p className="mt-1 text-sm text-slate-600">
                Click a row to view profile and booking history.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
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


