"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, Phone, User, UserRound } from "lucide-react";
import { useMemo, useState } from "react";

const BRAND = "#B84200";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [touched, setTouched] = useState({
    fullName: false,
    phone: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const nameError = useMemo(() => {
    if (!touched.fullName) return "";
    if (!fullName.trim()) return "Full name is required.";
    if (fullName.trim().length < 2) return "Full name is too short.";
    return "";
  }, [fullName, touched.fullName]);

  const phoneError = useMemo(() => {
    if (!touched.phone) return "";
    if (!phone.trim()) return "";
    if (!/^[0-9+\s-]{7,}$/.test(phone.trim())) return "Enter a valid phone number.";
    return "";
  }, [phone, touched.phone]);

  const emailError = useMemo(() => {
    if (!touched.email) return "";
    if (!email.trim()) return "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email address.";
    return "";
  }, [email, touched.email]);

  const passwordError = useMemo(() => {
    if (!touched.password) return "";
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return "";
  }, [password, touched.password]);

  const confirmError = useMemo(() => {
    if (!touched.confirmPassword) return "";
    if (!confirmPassword) return "Please confirm your password.";
    if (confirmPassword !== password) return "Passwords do not match.";
    return "";
  }, [confirmPassword, password, touched.confirmPassword]);

  const canSubmit =
    !nameError &&
    !phoneError &&
    !emailError &&
    !passwordError &&
    !confirmError &&
    fullName.trim() &&
    email.trim() &&
    password &&
    confirmPassword &&
    confirmPassword === password;

  return (
    <main className="bg-[radial-gradient(circle_at_20%_0%,rgba(184,66,0,0.10),transparent_38%),radial-gradient(circle_at_90%_10%,rgba(72,194,203,0.10),transparent_36%),linear-gradient(to_bottom,#ffffff,#f8fafc,#ffffff)] text-slate-900">
      <section className="max-w-6xl w-[95%] mx-auto px-4 py-7 sm:py-9">
        <div className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.10)] px-6 py-6 sm:px-8 sm:py-7">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-slate-100" />
              <div
                className="absolute inset-0 m-auto h-9 w-9 rounded-xl flex items-center justify-center text-white shadow-md"
                style={{ background: `linear-gradient(135deg, ${BRAND}, #CF4B00)` }}
              >
                <UserRound className="h-5 w-5" />
              </div>
            </div>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">Create an account</h1>
            <p className="mt-2 text-sm text-slate-600">Please enter your details to sign up</p>
          </div>

          <form
            className="mt-5 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setTouched({
                fullName: true,
                phone: true,
                email: true,
                password: true,
                confirmPassword: true,
              });
              if (!canSubmit) return;
              // Hook up real signup later
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Full name" error={nameError}>
                <IconInput
                  icon={<User className="h-4 w-4" />}
                  value={fullName}
                  onChange={setFullName}
                  onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  error={!!nameError}
                />
              </Field>

              <Field label="Phone (optional)" error={phoneError}>
                <IconInput
                  icon={<Phone className="h-4 w-4" />}
                  value={phone}
                  onChange={setPhone}
                  onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                  placeholder="+974 ..."
                  autoComplete="tel"
                  error={!!phoneError}
                  inputMode="tel"
                />
              </Field>
            </div>

            <Field label="Email Address" error={emailError}>
              <IconInput
                icon={<Mail className="h-4 w-4" />}
                value={email}
                onChange={setEmail}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                placeholder="Enter your email"
                autoComplete="email"
                error={!!emailError}
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Password" error={passwordError}>
                <PasswordInput
                  value={password}
                  onChange={setPassword}
                  onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                  show={showPassword}
                  onToggle={() => setShowPassword((s) => !s)}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  error={!!passwordError}
                />
              </Field>

              <Field label="Confirm password" error={confirmError}>
                <PasswordInput
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  onBlur={() => setTouched((t) => ({ ...t, confirmPassword: true }))}
                  show={showConfirmPassword}
                  onToggle={() => setShowConfirmPassword((s) => !s)}
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  error={!!confirmError}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className={`w-full rounded-2xl px-5 py-3 text-sm font-semibold text-white transition ${
                canSubmit
                  ? "bg-[#B84200] hover:bg-[#9A2F00] shadow-[0_14px_30px_rgba(184,66,0,0.22)]"
                  : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              Create account
            </button>

            <p className="pt-1 text-sm text-slate-600 text-center">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold" style={{ color: BRAND }}>
                Log in
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-slate-800">{label}</label>
      {children}
      {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}
    </div>
  );
}

function IconInput({
  icon,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  error,
  inputMode,
}: {
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder: string;
  autoComplete?: string;
  error?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={`w-full rounded-2xl border bg-white pl-11 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          error ? "border-red-300 focus:ring-red-300" : "border-slate-200 focus:ring-[#B84200]"
        }`}
      />
    </div>
  );
}

function PasswordInput({
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  show,
  onToggle,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder: string;
  autoComplete?: string;
  show: boolean;
  onToggle: () => void;
  error?: boolean;
}) {
  return (
    <div className="relative">
      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full rounded-2xl border bg-white pl-11 pr-12 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          error ? "border-red-300 focus:ring-red-300" : "border-slate-200 focus:ring-[#B84200]"
        }`}
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B84200] focus-visible:ring-offset-2"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}


