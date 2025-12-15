"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, UserRound } from "lucide-react";
import { useMemo, useState } from "react";

const BRAND = "#B84200";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
  });

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

  const canSubmit = !emailError && !passwordError && email.trim() && password;

  return (
    <main className="bg-[radial-gradient(circle_at_20%_0%,rgba(184,66,0,0.10),transparent_38%),radial-gradient(circle_at_90%_10%,rgba(72,194,203,0.10),transparent_36%),linear-gradient(to_bottom,#ffffff,#f8fafc,#ffffff)] text-slate-900">
      <section className="max-w-6xl w-[95%] mx-auto px-4 py-8 sm:py-10">
        <div className="mx-auto w-full max-w-lg rounded-3xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.10)] px-6 py-6 sm:px-8 sm:py-7">
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
            <h1 className="mt-3 text-3xl font-bold text-slate-900">Welcome Back</h1>
            <p className="mt-2 text-sm text-slate-600">
              Please enter your details to sign in
            </p>
          </div>

          <form
            className="mt-5 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setTouched({ email: true, password: true });
              if (!canSubmit) return;
              // Hook up real auth later
            }}
          >
            <Field label="Email Address" error={emailError}>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  className={`w-full rounded-2xl border bg-white pl-11 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    emailError
                      ? "border-red-300 focus:ring-red-300"
                      : "border-slate-200 focus:ring-[#B84200]"
                  }`}
                />
              </div>
            </Field>

            <Field label="Password" error={passwordError}>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className={`w-full rounded-2xl border bg-white pl-11 pr-12 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    passwordError
                      ? "border-red-300 focus:ring-red-300"
                      : "border-slate-200 focus:ring-[#B84200]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B84200] focus-visible:ring-offset-2"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </Field>

            <div className="flex items-center justify-end">
              <button type="button" className="text-sm font-semibold" style={{ color: BRAND }}>
                Forgot password?
              </button>
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
              Sign in
            </button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-semibold text-slate-500">Or continue with</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button
              type="button"
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B84200] focus-visible:ring-offset-2 inline-flex items-center justify-center gap-3"
            >
              <GoogleG />
              Sign In with Google
            </button>

            <p className="pt-1 text-sm text-slate-600 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold" style={{ color: BRAND }}>
                Create an account
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

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303C33.653 32.658 29.223 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.273 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-1.341-.138-2.651-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.273 4 24 4c-7.682 0-14.354 4.315-17.694 10.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.121 0 9.806-1.967 13.346-5.176l-6.163-5.214C29.141 35.086 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.257-2.28 4.158-4.12 5.61l.003-.002 6.163 5.214C36.913 39.205 44 34 44 24c0-1.341-.138-2.651-.389-3.917z"
      />
    </svg>
  );
}


