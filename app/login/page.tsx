"use client";

import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { useMemo, useState } from "react";
import AuthLayout from "../_components/auth/AuthLayout";
import { AuthField, AuthPasswordInput, AuthTextInput } from "../_components/auth/AuthFormControls";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
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
    <AuthLayout
      title="Sign in"
      subtitle="Welcome back — enter your details to access your account."
      bottomText={
        <p className="text-slate-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-(--teal-dark) hover:underline">
            Create one
          </Link>
        </p>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setTouched({ email: true, password: true });
          if (!canSubmit) return;
          // Hook up real auth later
        }}
      >
        <AuthField label="Email" error={emailError}>
          <AuthTextInput
            icon={<Mail className="h-4 w-4" />}
            value={email}
            onChange={setEmail}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            error={!!emailError}
            name="email"
          />
        </AuthField>

        <AuthField label="Password" error={passwordError}>
          <AuthPasswordInput
            icon={<Lock className="h-4 w-4" />}
            value={password}
            onChange={setPassword}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
            show={showPassword}
            onToggle={() => setShowPassword((s) => !s)}
            placeholder="Enter your password"
            autoComplete="current-password"
            error={!!passwordError}
            name="password"
          />
        </AuthField>

        <div className="flex items-center justify-between gap-4">
          <label className="inline-flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-(--teal-dark) focus:ring-(--teal-dark)"
            />
            Remember me
          </label>
          <Link
            href="#"
            className="text-sm font-semibold text-(--teal-dark) hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className={[
            "w-full rounded-sm px-5 py-3 text-sm font-semibold text-white transition",
            canSubmit
              ? "bg-(--teal-dark) hover:bg-[#9A2F00] shadow-[0_14px_30px_rgba(184,66,0,0.22)]"
              : "bg-slate-300 cursor-not-allowed",
          ].join(" ")}
        >
          Sign in
        </button>

        <div className="flex items-center gap-3 py-1">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-semibold text-slate-500">Or</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          className="w-full rounded-sm border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--teal-dark) focus-visible:ring-offset-2 inline-flex items-center justify-center gap-3"
        >
          <GoogleG />
          Continue with Google
        </button>

        <p className="pt-1 text-xs text-slate-500 leading-relaxed">
          By continuing, you agree to our{" "}
          <Link href="#" className="font-semibold text-slate-700 hover:underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="#" className="font-semibold text-slate-700 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </AuthLayout>
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


