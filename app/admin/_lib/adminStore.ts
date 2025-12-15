"use client";

export type BookingStatus = "pending" | "confirmed" | "in_progress" | "completed" | "cancelled";
export type PaymentStatus = "unpaid" | "paid" | "refunded";

export type Booking = {
  id: string;
  createdAt: string; // ISO
  service: "Home Cleaning" | "Office Cleaning" | "Deep Cleaning" | "Move In/Out" | "Window Cleaning" | "Carpet Cleaning";
  hours: number;
  cleaners: number;
  materials: "with" | "without";
  date: string; // yyyy-mm-dd
  time: string; // HH:mm
  area: "Doha" | "West Bay" | "The Pearl" | "Lusail";
  address: { zone?: string; building?: string; street?: string };
  client: { name: string; phone: string; email?: string };
  notes?: string;
  totalQAR: number;
  status: BookingStatus;
  payment: { status: PaymentStatus; method?: "cash" | "card" | "transfer"; invoiceId?: string };
  assignedStaffIds: string[];
};

export type Staff = {
  id: string;
  name: string;
  role: "Cleaner" | "Supervisor" | "Driver";
  phone: string;
  active: boolean;
};

const KEY = "aethla_admin_store_v1";

type Store = {
  bookings: Booking[];
  staff: Staff[];
};

function safeParse<T>(value: string | null): T | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function uid(prefix: string) {
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}

function seed(): Store {
  const now = new Date();
  const d = (daysFromNow: number) => {
    const x = new Date(now);
    x.setDate(x.getDate() + daysFromNow);
    return x.toLocaleDateString("en-CA");
  };

  const staff: Staff[] = [
    { id: "stf_amina", name: "Amina", role: "Supervisor", phone: "+974 3333 7410", active: true },
    { id: "stf_sara", name: "Sara", role: "Cleaner", phone: "+974 4444 0006", active: true },
    { id: "stf_fatima", name: "Fatima", role: "Cleaner", phone: "+974 5555 0180", active: true },
    { id: "stf_hassan", name: "Hassan", role: "Driver", phone: "+974 5555 0199", active: true },
  ];

  const bookings: Booking[] = [
    {
      id: uid("bk"),
      createdAt: new Date(now.getTime() - 1000 * 60 * 25).toISOString(),
      service: "Home Cleaning",
      hours: 4,
      cleaners: 2,
      materials: "with",
      date: d(0),
      time: "10:30",
      area: "The Pearl",
      address: { zone: "66", building: "Tower 12", street: "Porto Arabia" },
      client: { name: "Mila Loo", phone: "5xxxxxxx", email: "mila@example.com" },
      notes: "Kitchen deep focus, avoid bleach on marble.",
      totalQAR: 280,
      status: "confirmed",
      payment: { status: "unpaid", method: "cash", invoiceId: "INV-10021" },
      assignedStaffIds: ["stf_sara", "stf_fatima"],
    },
    {
      id: uid("bk"),
      createdAt: new Date(now.getTime() - 1000 * 60 * 60 * 3).toISOString(),
      service: "Office Cleaning",
      hours: 5,
      cleaners: 3,
      materials: "with",
      date: d(1),
      time: "16:00",
      area: "West Bay",
      address: { zone: "61", building: "Al Muftah Plaza", street: "Al Reem St" },
      client: { name: "Margo Perry", phone: "5xxxxxxx", email: "margo@example.com" },
      notes: "After-hours. Focus meeting rooms + pantry.",
      totalQAR: 420,
      status: "pending",
      payment: { status: "unpaid", method: "transfer", invoiceId: "INV-10022" },
      assignedStaffIds: ["stf_amina"],
    },
    {
      id: uid("bk"),
      createdAt: new Date(now.getTime() - 1000 * 60 * 60 * 22).toISOString(),
      service: "Move In/Out",
      hours: 8,
      cleaners: 4,
      materials: "with",
      date: d(-1),
      time: "08:30",
      area: "Doha",
      address: { zone: "12", building: "Villa 7", street: "Al Sadd" },
      client: { name: "Paul Larson", phone: "5xxxxxxx" },
      notes: "Move-out; include windows inside.",
      totalQAR: 620,
      status: "completed",
      payment: { status: "paid", method: "card", invoiceId: "INV-10020" },
      assignedStaffIds: ["stf_sara", "stf_fatima", "stf_hassan"],
    },
  ];

  return { bookings, staff };
}

export function loadStore(): Store {
  if (typeof window === "undefined") return seed();
  const parsed = safeParse<Store>(window.localStorage.getItem(KEY));
  if (parsed?.bookings && parsed?.staff) return parsed;
  const initial = seed();
  window.localStorage.setItem(KEY, JSON.stringify(initial));
  return initial;
}

export function saveStore(next: Store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(next));
}

export function resetStore() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export function updateBookingStatus(id: string, status: BookingStatus) {
  const store = loadStore();
  const bookings = store.bookings.map((b) => (b.id === id ? { ...b, status } : b));
  saveStore({ ...store, bookings });
}

export function updatePaymentStatus(id: string, status: PaymentStatus) {
  const store = loadStore();
  const bookings = store.bookings.map((b) =>
    b.id === id ? { ...b, payment: { ...b.payment, status } } : b
  );
  saveStore({ ...store, bookings });
}

export function assignStaffToBooking(id: string, staffIds: string[]) {
  const store = loadStore();
  const bookings = store.bookings.map((b) => (b.id === id ? { ...b, assignedStaffIds: staffIds } : b));
  saveStore({ ...store, bookings });
}


