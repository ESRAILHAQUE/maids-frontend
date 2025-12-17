"use client";

import { useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, Plus, Users } from "lucide-react";
import { useAdminStore } from "../_lib/useAdminStore";
import type { Booking } from "../_lib/adminStore";

const BRAND = "#B84200";

function startOfWeek(d: Date) {
  const x = new Date(d);
  const day = (x.getDay() + 6) % 7; // monday=0
  x.setDate(x.getDate() - day);
  x.setHours(0, 0, 0, 0);
  return x;
}

function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

function fmt(d: Date) {
  return d.toLocaleDateString("en-CA");
}

export default function AdminStaffPage() {
  const { staff, bookings, setAssignedStaff } = useAdminStore();
  const [weekAnchor, setWeekAnchor] = useState(() => startOfWeek(new Date()));
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);

  const weekDays = useMemo(() => Array.from({ length: 7 }, (_, i) => addDays(weekAnchor, i)), [weekAnchor]);
  const weekDayKeys = useMemo(() => weekDays.map(fmt), [weekDays]);

  const weekBookings = useMemo(() => {
    const set = new Set(weekDayKeys);
    return bookings
      .filter((b) => set.has(b.date))
      .sort((a, b) => (a.date === b.date ? (a.time > b.time ? 1 : -1) : a.date > b.date ? 1 : -1));
  }, [bookings, weekDayKeys]);

  const selectedBooking = useMemo(() => {
    if (!selectedBookingId) return null;
    return bookings.find((b) => b.id === selectedBookingId) ?? null;
  }, [bookings, selectedBookingId]);

  const activeStaff = useMemo(() => staff.filter((s) => s.active), [staff]);

  const toggleAssign = (booking: Booking, staffId: string) => {
    const exists = booking.assignedStaffIds.includes(staffId);
    const next = exists
      ? booking.assignedStaffIds.filter((id) => id !== staffId)
      : [...booking.assignedStaffIds, staffId];
    setAssignedStaff(booking.id, next);
  };

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Admin</p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">Staff scheduling</h1>
          <p className="mt-1 text-sm text-slate-600">
            Assign cleaners/supervisors to scheduled bookings (weekly view).
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setWeekAnchor(startOfWeek(new Date()))}
            className="inline-flex items-center justify-center rounded-sm border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            This week
          </button>
          <button
            type="button"
            onClick={() => setWeekAnchor((d) => addDays(d, -7))}
            className="inline-flex items-center justify-center rounded-sm border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => setWeekAnchor((d) => addDays(d, 7))}
            className="inline-flex items-center justify-center rounded-sm border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-4 lg:gap-6 items-start">
        <div className="rounded-sm border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-sm border"
                style={{
                  borderColor: "rgba(184,66,0,0.25)",
                  background: "rgba(184,66,0,0.08)",
                  color: BRAND,
                }}
              >
                <CalendarDays className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Week of</p>
                <p className="text-sm font-bold text-slate-900">{fmt(weekAnchor)}</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-700">{weekBookings.length} bookings</p>
          </div>

          <div className="divide-y divide-slate-100">
            {weekBookings.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setSelectedBookingId(b.id)}
                className={`w-full text-left px-5 py-4 hover:bg-slate-50 transition ${
                  selectedBookingId === b.id ? "bg-[#FFF3EB]" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">
                      {b.date} • {b.time} — {b.client.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      {b.service} • {b.area} • {b.hours}h • {b.cleaners} cleaners
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {b.assignedStaffIds.length ? (
                        b.assignedStaffIds.map((id) => {
                          const s = staff.find((x) => x.id === id);
                          return (
                            <span
                              key={id}
                              className="inline-flex items-center rounded-sm border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800"
                            >
                              {s ? s.name : id}
                            </span>
                          );
                        })
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-sm border border-dashed border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                          <Plus className="h-4 w-4 text-slate-500" />
                          Assign staff
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm font-bold text-slate-900 shrink-0">{b.totalQAR} QAR</p>
                </div>
              </button>
            ))}
            {weekBookings.length === 0 ? (
              <div className="px-5 py-10 text-center">
                <p className="text-sm font-semibold text-slate-900">No bookings this week</p>
                <p className="mt-1 text-sm text-slate-600">Use Prev/Next to browse weeks.</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="rounded-sm border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
          {selectedBooking ? (
            <>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Assignment</p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900 truncate">
                    {selectedBooking.client.name} • {selectedBooking.service}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {selectedBooking.date} at {selectedBooking.time} • {selectedBooking.area}
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
                  <Users className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-4 rounded-sm border border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-sm font-semibold text-slate-900">Select staff</p>
                <p className="mt-1 text-xs text-slate-600">
                  Tap names to assign/unassign. (Demo — stored in localStorage.)
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeStaff.map((s) => {
                    const active = selectedBooking.assignedStaffIds.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleAssign(selectedBooking, s.id)}
                        className={`rounded-sm border px-3 py-1.5 text-xs font-semibold transition ${
                          active
                            ? "border-[#B84200]/30 bg-[#FFF3EB] text-slate-900"
                            : "border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
                        }`}
                      >
                        {active ? (
                          <span className="inline-flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" style={{ color: BRAND }} />
                            {s.name} • {s.role}
                          </span>
                        ) : (
                          `${s.name} • ${s.role}`
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Info label="Hours" value={`${selectedBooking.hours}h`} />
                <Info label="Cleaners" value={`${selectedBooking.cleaners}`} />
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-sm font-semibold text-slate-900">Select a booking</p>
              <p className="mt-1 text-sm text-slate-600">Choose a row to assign staff.</p>
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


