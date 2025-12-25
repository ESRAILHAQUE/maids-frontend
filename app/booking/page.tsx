"use client";

import {
  Calendar,
  CheckCircle2,
  Clock,
  Home,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { api } from "../_lib/api";
import { useToast } from "../_lib/toast";

type MaterialChoice = "with" | "without" | null;

const WHATSAPP_NUMBER = "97433337410";

const steps = ["Service", "Details", "Schedule", "Contact"];

const services = [
  {
    label: "Home Cleaning",
    description: "Apartments & villas — recurring or deep clean.",
    icon: Home,
    price: 180,
  },
  {
    label: "Office Cleaning",
    description: "Workspaces, clinics & commercial spaces.",
    icon: BuildingIcon,
    price: 240,
  },
];

const hourOptions = [4, 5, 8];
const cleanerOptions = [1, 2, 3, 4, 5, 6];
const timeSlots = [
  { label: "08:30", hint: "Morning" },
  { label: "10:30", hint: "Late morning" },
  { label: "14:30", hint: "Afternoon" },
  { label: "16:00", hint: "Late afternoon" },
] as const;

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16" />
      <path d="M9 21V9h6v12" />
      <path d="M9 13h6" />
      <path d="M13 17h2" />
      <path d="M9 17h2" />
      <path d="M6 21h12" />
    </svg>
  );
}

export default function BookingPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [stepIndex, setStepIndex] = useState(0);
  const [service, setService] = useState<string | null>(null);
  const [hours, setHours] = useState<number | null>(null);
  const [cleaners, setCleaners] = useState<number | null>(null);
  const [materials, setMaterials] = useState<MaterialChoice>(null);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState({ zone: "", building: "", street: "" });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedService = services.find((s) => s.label === service);

  const total = useMemo(() => {
    if (!selectedService) return 0;
    const base = selectedService.price;
    const hourAdj = hours ? Math.max(0, hours - 4) * 50 : 0;
    const cleanerAdj = cleaners ? Math.max(0, cleaners - 1) * 40 : 0;
    const materialAdj = materials === "with" ? 60 : 0;
    return base + hourAdj + cleanerAdj + materialAdj;
  }, [selectedService, hours, cleaners, materials]);

  const canContinue = () => {
    if (stepIndex === 0) return !!service;
    if (stepIndex === 1) return hours !== null && cleaners !== null && materials !== null;
    if (stepIndex === 2) return !!date && !!time;
    if (stepIndex === 3) return !!phoneNumber;
    return false;
  };

  const goNext = () => {
    if (!canContinue()) return;
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goBack = () => setStepIndex((prev) => Math.max(prev - 1, 0));

  const progressPercent = (stepIndex / (steps.length - 1)) * 100;
  const minDate = useMemo(() => new Date().toLocaleDateString("en-CA"), []);

  const whatsappText = useMemo(() => {
    const lines: string[] = [];
    lines.push("Hi Aethla, I’d like to book a cleaning:");
    lines.push("");
    lines.push(`Service: ${service ?? "—"}`);
    lines.push(`Hours: ${hours ?? "—"}`);
    lines.push(`Cleaners: ${cleaners ?? "—"}`);
    lines.push(
      `Materials: ${materials === "with" ? "With materials" : materials === "without" ? "Without materials" : "—"
      }`
    );
    lines.push(`Date: ${date || "—"}`);
    lines.push(`Time: ${time || "—"}`);
    lines.push("");
    lines.push(`Phone: ${phoneNumber || "—"}`);
    if (name) lines.push(`Name: ${name}`);
    if (email) lines.push(`Email: ${email}`);
    if (area) lines.push(`Area: ${area}`);
    const addr = [address.zone, address.building, address.street].filter(Boolean).join(", ");
    if (addr) lines.push(`Address: ${addr}`);
    if (notes) {
      lines.push("");
      lines.push(`Notes: ${notes}`);
    }
    lines.push("");
    lines.push(`Estimated total: ${total ? `${total} QAR` : "—"}`);
    return lines.join("\n");
  }, [address.building, address.street, address.zone, area, cleaners, date, email, hours, materials, name, phoneNumber, service, time, notes, total]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
  }, [whatsappText]);

  const handleBookNow = async () => {
    setPhoneTouched(true);
    if (!canContinue() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const bookingData = {
        service: service!,
        hours: hours!,
        cleaners: cleaners!,
        materials: materials!,
        date,
        time,
        area,
        address: {
          zone: address.zone || undefined,
          building: address.building || undefined,
          street: address.street || undefined,
        },
        client: {
          name: name || "Guest",
          phone: phoneNumber,
          email: email || undefined,
        },
        notes: notes || undefined,
        totalQAR: total,
      };

      const response = await api.post<{ _id: string }>("/v1/bookings", bookingData);

      if (response.data?._id) {
        showToast("Booking created successfully!", "success");
        router.push(`/booking-confirmed?id=${response.data._id}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        showToast(error.message, "error");
      } else {
        showToast("Failed to create booking. Please try again.", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/booking.jpg"
            alt="Booking a cleaning service with Aethla"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-white/10" />
        </div>

        <div className="relative max-w-6xl w-[95%] mx-auto px-4 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-primary)] ring-1 ring-white/30 backdrop-blur text-white">
            Booking
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Book a professional clean in minutes
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed">
            Choose your service, details, and schedule. We’ll confirm quickly and handle your priorities with a checklist-led team.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
            <Phone className="h-4 w-4 text-white text-[var(--brand-primary)]" />
            Need help? Call{" "}
            <a href="tel:+97433337410" className="text-white hover:text-white/90 underline underline-offset-4">
              +974 3333 7410
            </a>
          </div>
        </div>
      </section>

      {/* Wizard */}
      <section className="bg-[radial-gradient(circle_at_10%_0%,rgb(var(--brand-primary-rgb)/0.12),transparent_35%),radial-gradient(circle_at_90%_10%,rgb(var(--brand-dark-rgb)/0.12),transparent_34%),linear-gradient(to_bottom,#ffffff,#f8fafc,#ffffff)]">
        <div className="max-w-6xl w-[95%] mx-auto px-4 py-10 sm:py-12 space-y-5">
          {/* Mobile step header */}
          <div className="sm:hidden rounded-sm border border-slate-200 bg-white/90 backdrop-blur shadow-sm px-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">
                Step {stepIndex + 1} of {steps.length}
              </p>
              <p className="text-sm font-semibold text-slate-600">{steps[stepIndex]}</p>
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-[var(--brand-dark)] to-[var(--brand-primary)]"
                style={{
                  width: `${progressPercent}%`,
                }}
              />
            </div>
          </div>

          {/* Desktop stepper */}
          <div className="hidden sm:block rounded-sm bg-white/90 backdrop-blur shadow-sm border border-slate-200 px-5 py-5">
            <div className="relative pt-2">
              <div className="absolute left-[6%] right-[6%] top-5 h-px bg-slate-200" />
              <div
                className="absolute left-[6%] top-5 h-px rounded-full bg-linear-to-r from-[var(--brand-dark)] to-[var(--brand-primary)]"
                style={{
                  width: `${(progressPercent * 0.88).toFixed(4)}%`,
                }}
              />
              <div className="relative grid grid-cols-4 gap-3">
                {steps.map((label, idx) => {
                  const active = idx === stepIndex;
                  const done = idx < stepIndex;
                  const clickable = done;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={clickable ? () => setStepIndex(idx) : undefined}
                      className={`flex flex-col items-center gap-2 select-none ${clickable ? "cursor-pointer" : "cursor-default"
                      }`}
                      aria-current={active ? "step" : undefined}
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-200 ${active
                            ? "bg-white border-[var(--brand-primary)] text-[var(--brand-primary)] shadow-sm"
                            : done
                            ? "bg-white border-[rgb(var(--brand-primary-rgb)/0.40)] text-[var(--brand-primary)]"
                            : "bg-white border-slate-200 text-slate-400"
                        }`}
                      >
                        {done ? "✓" : idx + 1}
                      </div>
                      <span
                        className={`text-xs font-semibold ${active ? "text-slate-800" : done ? "text-slate-600" : "text-slate-400"
                        }`}
                      >
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-5 lg:gap-6 items-start">
            <div className="rounded-sm bg-white shadow-[0_18px_60px_rgba(15,23,42,0.10)] border border-slate-200 p-5 sm:p-6 space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {stepIndex === 0
                      ? "Select your service"
                      : stepIndex === 1
                      ? "Choose details"
                      : stepIndex === 2
                      ? "Pick a schedule"
                      : "Your contact info"}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {stepIndex === 0
                      ? "Start with the service type — you can add special requests later."
                      : stepIndex === 1
                      ? "We’ll estimate the total based on duration, team size, and materials."
                      : stepIndex === 2
                      ? "Select a date and a preferred time slot."
                      : "We’ll confirm your booking quickly on WhatsApp or by phone."}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-600 rounded-full bg-slate-50 border border-slate-200 px-3 py-1">
                  <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                  Fast confirmation
                </div>
              </div>

              <div key={stepIndex} className="space-y-5 motion-safe:transition-all motion-safe:duration-300">
                {stepIndex === 0 && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((s) => {
                        const Icon = s.icon;
                        const active = service === s.label;
                        return (
                          <button
                            key={s.label}
                            type="button"
                            onClick={() => setService(s.label)}
                            className={`group rounded-sm border px-4 py-5 text-left transition-all duration-200 ${active
                                ? "border-[var(--brand-primary)] bg-white shadow-md"
                                : "border-slate-200 bg-slate-50 hover:border-[rgb(var(--brand-primary-rgb)/0.60)] hover:bg-white"
                            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.45)] focus-visible:ring-offset-2`}
                            aria-pressed={active}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`flex h-12 w-12 items-center justify-center rounded-sm border transition-colors ${active
                                    ? "bg-[rgb(var(--brand-primary-rgb)/0.10)] border-[rgb(var(--brand-primary-rgb)/0.22)] text-[var(--brand-primary)]"
                                    : "bg-white border-slate-200 text-[var(--brand-primary)]"
                                }`}
                              >
                                <Icon className="h-7 w-7" />
                              </div>
                              <div className="min-w-0">
                                <p className="font-semibold text-slate-900">{s.label}</p>
                                <p className="text-xs text-slate-600 mt-0.5">{s.description}</p>
                                <p className="mt-2 text-xs font-semibold text-slate-700">
                                  From <span className="text-[var(--brand-primary)]">{s.price} QAR</span>
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="rounded-sm bg-slate-50 border border-dashed border-slate-200 px-4 py-3 text-xs text-slate-600">
                      Need something else? We also do move-in/out, carpets, windows, and ironing — add it in “Special requests”.
                    </div>
                    <ActionRow canContinue={canContinue()} onBack={goBack} onNext={goNext} backDisabled />
                  </>
                )}

                {stepIndex === 1 && (
                  <>
                    <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-sm px-3 py-3">
                      <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)] mt-0.5 shrink-0" />
                      <span>
                        Note: 2–3 hour bookings in The Pearl area are available only by calling{" "}
                        <a className="font-semibold text-[var(--brand-primary)]" href="tel:+97433337410">
                          +974 3333 7410
                        </a>{" "}
                        or{" "}
                        <a className="font-semibold text-[var(--brand-primary)]" href="tel:+97444440006">
                          +974 4444 0006
                        </a>
                        .
                      </span>
                    </div>

                    <DetailChooser
                      title="Number of hours"
                      options={hourOptions}
                      value={hours}
                      onSelect={(v) => setHours(v as number)}
                      suffix={(v) => (v === 1 ? "hour" : "hours")}
                    />

                    <DetailChooser
                      title="Number of cleaners"
                      options={cleanerOptions}
                      value={cleaners}
                      onSelect={(v) => setCleaners(v as number)}
                      suffix={(v) => (v === 1 ? "cleaner" : "cleaners")}
                    />

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-800">Cleaning materials</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <MaterialCard
                          active={materials === "with"}
                          title="With materials"
                          subtitle="We bring supplies"
                          onClick={() => setMaterials("with")}
                        />
                        <MaterialCard
                          active={materials === "without"}
                          title="Without materials"
                          subtitle="You provide"
                          onClick={() => setMaterials("without")}
                        />
                      </div>
                      <p className="text-xs text-slate-500">
                        Materials adds an estimated fee. Final confirmation is shared after booking.
                      </p>
                    </div>

                    <ActionRow canContinue={canContinue()} onBack={goBack} onNext={goNext} />
                  </>
                )}

                {stepIndex === 2 && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-slate-800">Select date</p>
                        <div className="flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-3 py-3 shadow-sm">
                          <Calendar className="h-5 w-5 text-[var(--brand-primary)]" />
                          <input
                            type="date"
                            value={date}
                            min={minDate}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-transparent text-sm focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-slate-800">Select time</p>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot.label}
                              type="button"
                              onClick={() => setTime(slot.label)}
                              className={`rounded-sm border px-3 py-3 text-left transition-all duration-200 ${time === slot.label
                                  ? "border-[var(--brand-primary)] bg-white shadow-sm"
                                  : "border-slate-200 bg-slate-50 hover:border-[rgb(var(--brand-primary-rgb)/0.60)] hover:bg-white"
                              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.45)] focus-visible:ring-offset-2`}
                              aria-pressed={time === slot.label}
                            >
                              <p className="text-sm font-semibold text-slate-900">{slot.label}</p>
                              <p className="text-[11px] text-slate-500">{slot.hint}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <ActionRow canContinue={canContinue()} onBack={goBack} onNext={goNext} />
                  </>
                )}

                {stepIndex === 3 && (
                  <>
                    <div className="grid grid-cols-1 gap-4">
                      <Field label="Phone number *" hint="We confirm bookings via WhatsApp or call.">
                        <div className="grid grid-cols-[90px_1fr] gap-2">
                          <input
                            type="text"
                            value="QA +974"
                            disabled
                            className="rounded-sm border border-slate-200 px-3 py-3 text-sm bg-slate-50 text-slate-500"
                          />
                          <div className="space-y-1">
                            <input
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              onBlur={() => setPhoneTouched(true)}
                              className={`w-full rounded-sm border px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-primary-rgb)/0.45)] ${phoneTouched && !phoneNumber ? "border-red-300 bg-red-50/40" : "border-slate-200 bg-white"
                              }`}
                              placeholder="5xxxx xxxx"
                              inputMode="tel"
                              autoComplete="tel"
                            />
                            {phoneTouched && !phoneNumber && (
                              <p className="text-xs font-semibold text-red-600">Phone number is required.</p>
                            )}
                          </div>
                        </div>
                      </Field>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Name">
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-sm border border-slate-200 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-primary-rgb)/0.45)]"
                            placeholder="Your name (optional)"
                            autoComplete="name"
                          />
                        </Field>
                        <Field label="Email">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-sm border border-slate-200 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-primary-rgb)/0.45)]"
                            placeholder="you@example.com (optional)"
                            autoComplete="email"
                          />
                        </Field>
                      </div>

                      <Field label="Area">
                        <select
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          className="w-full rounded-sm border border-slate-200 px-3 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-primary-rgb)/0.45)]"
                        >
                          <option value="">Select your area</option>
                          <option>Doha</option>
                          <option>West Bay</option>
                          <option>The Pearl</option>
                        </select>
                      </Field>

                      <Field label="Address (optional)">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <input
                            type="text"
                            value={address.zone}
                            onChange={(e) => setAddress({ ...address, zone: e.target.value })}
                            className="rounded-sm border border-slate-200 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-primary-rgb)/0.45)]"
                            placeholder="Zone"
                          />
                          <input
                            type="text"
                            value={address.building}
                            onChange={(e) => setAddress({ ...address, building: e.target.value })}
                            className="rounded-sm border border-slate-200 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-primary-rgb)/0.45)]"
                            placeholder="Building"
                          />
                          <input
                            type="text"
                            value={address.street}
                            onChange={(e) => setAddress({ ...address, street: e.target.value })}
                            className="rounded-sm border border-slate-200 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-primary-rgb)/0.45)]"
                            placeholder="Street"
                          />
                        </div>
                      </Field>

                      <Field label="Special requests">
                        <textarea
                          rows={4}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full rounded-sm border border-slate-200 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-primary-rgb)/0.45)]"
                          placeholder="Any special instructions (optional)"
                        />
                      </Field>
                    </div>

                    <ActionRow
                      canContinue={canContinue() && !isSubmitting}
                      onBack={goBack}
                      onNext={handleBookNow}
                      nextLabel={isSubmitting ? "Booking..." : "Book now"}
                    />
                  </>
                )}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <SummaryCard
                service={service}
                total={total}
                hours={hours}
                cleaners={cleaners}
                materials={materials}
                date={date}
                time={time}
                whatsappUrl={whatsappUrl}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ActionRow({
  canContinue,
  onBack,
  onNext,
  backDisabled = false,
  nextLabel = "Continue →",
}: {
  canContinue: boolean;
  onBack: () => void;
  onNext: () => void;
  backDisabled?: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        type="button"
        className={`flex-1 rounded-sm font-semibold py-3 transition-all duration-200 ${backDisabled
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.45)] focus-visible:ring-offset-2`}
        onClick={backDisabled ? undefined : onBack}
        disabled={backDisabled}
      >
        ← Back
      </button>
      <button
        type="button"
        className={`flex-1 rounded-sm font-semibold py-3 transition-all duration-200 ${canContinue
            ? "bg-[var(--brand-primary)] text-white shadow-[0_14px_30px_rgb(var(--brand-dark-rgb)/0.28)] hover:bg-[var(--brand-dark)]"
            : "bg-slate-100 text-slate-400 cursor-not-allowed"
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.45)] focus-visible:ring-offset-2`}
        onClick={onNext}
        disabled={!canContinue}
      >
        {nextLabel}
      </button>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      {hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
      {children}
    </div>
  );
}

function DetailChooser<T extends number>({
  title,
  options,
  value,
  onSelect,
  suffix,
}: {
  title: string;
  options: T[];
  value: T | null;
  onSelect: (v: T) => void;
  suffix: string | ((v: T) => string);
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-slate-800">{title}</p>
      <div className={`grid gap-2 ${options.length <= 3 ? 'grid-cols-3' : 'grid-cols-3 sm:grid-cols-6'}`}>
        {options.map((opt) => {
          const active = value === opt;
          const label = typeof suffix === "function" ? suffix(opt) : `${opt} ${suffix}`;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onSelect(opt)}
              className={`rounded-sm border px-3 py-4 text-center transition-all duration-200 ${active
                  ? "bg-white shadow-sm border-[var(--brand-primary)]"
                  : "border-slate-200 bg-slate-50 hover:border-[rgb(var(--brand-primary-rgb)/0.60)] hover:bg-white"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.45)] focus-visible:ring-offset-2`}
              aria-pressed={active}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-bold text-slate-900">{opt}</span>
                <span className="text-xs font-semibold text-slate-600">{label.replace(opt.toString(), '').trim()}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MaterialCard({
  active,
  title,
  subtitle,
  onClick,
}: {
  active: boolean;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-sm border px-4 py-4 text-left text-sm font-semibold transition-all duration-200 ${active
          ? "bg-white shadow-sm border-[var(--brand-primary)]"
          : "border-slate-200 bg-slate-50 hover:border-[rgb(var(--brand-primary-rgb)/0.60)] hover:bg-white"
      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.45)] focus-visible:ring-offset-2`}
      aria-pressed={active}
    >
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <span className="block text-xs font-normal text-slate-600 mt-0.5">{subtitle}</span>
    </button>
  );
}

function SummaryCard({
  service,
  total,
  hours,
  cleaners,
  materials,
  date,
  time,
  whatsappUrl,
}: {
  service: string | null;
  total: number;
  hours: number | null;
  cleaners: number | null;
  materials: MaterialChoice;
  date: string;
  time: string;
  whatsappUrl: string;
}) {
  return (
    <div className="rounded-sm bg-white shadow-[0_18px_60px_rgba(15,23,42,0.10)] border border-slate-200 p-5 sm:p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Booking summary</h3>
          <p className="text-xs text-slate-600 mt-1">Review your selections — you can edit any step.</p>
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--brand-primary-rgb)/0.18)] bg-[rgb(var(--brand-primary-rgb)/0.08)] text-[var(--brand-primary)]"
          aria-hidden="true"
        >
          <Clock className="h-5 w-5" />
        </div>
      </div>
      <div className="h-px bg-slate-200" />
      <SummaryRow label="Service" value={service ?? "None"} />
      <SummaryRow label="Duration" value={hours ? `${hours} hrs` : "—"} />
      <SummaryRow label="Cleaners" value={cleaners ? `${cleaners}` : "—"} />
      <SummaryRow label="Materials" value={materials === "with" ? "Included" : materials === "without" ? "You provide" : "—"} />
      <SummaryRow label="Date" value={date || "—"} />
      <SummaryRow label="Time" value={time || "—"} />
      <div className="h-px bg-slate-200" />
      <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
        <span>Total</span>
        <span className="text-[var(--brand-primary)]">{total ? `${total} QAR` : "0 QAR"}</span>
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgb(var(--brand-dark-rgb)/0.28)] transition hover:bg-[var(--brand-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.45)] focus-visible:ring-offset-2"
      >
        Book via WhatsApp
      </a>
      <div className="rounded-sm bg-slate-50 border border-dashed border-slate-200 px-4 py-3 text-xs text-slate-600">
        We’ll confirm the exact timing and any add-ons right after you send the booking message.
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Phone className="h-4 w-4" />
        Prefer a call?{" "}
        <a href="tel:+97433337410" className="font-semibold text-[var(--brand-primary)]">
          +974 3333 7410
        </a>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
      <span>{label}</span>
      <span className="text-slate-500">{value}</span>
    </div>
  );
}
