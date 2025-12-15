"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  assignStaffToBooking,
  loadStore,
  resetStore,
  saveStore,
  type Booking,
  type BookingStatus,
  type PaymentStatus,
  type Staff,
} from "./adminStore";

export function useAdminStore() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [staff, setStaff] = useState<Staff[]>([]);

  const refresh = useCallback(() => {
    const store = loadStore();
    setBookings(store.bookings);
    setStaff(store.staff);
  }, []);

  useEffect(() => {
    refresh();
    const onStorage = (e: StorageEvent) => {
      if (!e.key) return;
      if (e.key.includes("aethla_admin_store")) refresh();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [refresh]);

  const byId = useMemo(() => {
    const map = new Map<string, Booking>();
    for (const b of bookings) map.set(b.id, b);
    return map;
  }, [bookings]);

  const setBookingStatus = useCallback(
    (id: string, status: BookingStatus) => {
      const store = loadStore();
      const next = store.bookings.map((b) => (b.id === id ? { ...b, status } : b));
      saveStore({ ...store, bookings: next });
      refresh();
    },
    [refresh]
  );

  const setPaymentStatus = useCallback(
    (id: string, status: PaymentStatus) => {
      const store = loadStore();
      const next = store.bookings.map((b) =>
        b.id === id ? { ...b, payment: { ...b.payment, status } } : b
      );
      saveStore({ ...store, bookings: next });
      refresh();
    },
    [refresh]
  );

  const setAssignedStaff = useCallback(
    (id: string, staffIds: string[]) => {
      assignStaffToBooking(id, staffIds);
      refresh();
    },
    [refresh]
  );

  const hardReset = useCallback(() => {
    resetStore();
    refresh();
  }, [refresh]);

  return {
    bookings,
    staff,
    byId,
    refresh,
    setBookingStatus,
    setPaymentStatus,
    setAssignedStaff,
    hardReset,
  };
}


