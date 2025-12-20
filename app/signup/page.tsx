"use client";

import Link from "next/link";
import { Lock, Mail, Phone, User } from "lucide-react";
import { useMemo, useState } from "react";
import AuthLayout from "../_components/auth/AuthLayout";
import { AuthField, AuthPasswordInput, AuthTextInput } from "../_components/auth/AuthFormControls";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(true);
  const [touched, setTouched] = useState({
    fullName: false,
    phone: false,
    email: false,
    password: false,
    confirmPassword: false,
    agree: false,
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

  const agreeError = useMemo(() => {
    if (!touched.agree) return "";
    if (!agree) return "You must accept the terms to continue.";
    return "";
  }, [agree, touched.agree]);

  const canSubmit =
    !nameError &&
    !phoneError &&
    !emailError &&
    !passwordError &&
    !confirmError &&
    !agreeError &&
    fullName.trim() &&
    email.trim() &&
    password &&
    confirmPassword &&
    confirmPassword === password &&
    agree;

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Create an account to manage bookings and services in one place."
      formWidthClassName="max-w-lg"
      bottomText={
        <p className="text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-(--teal-dark) hover:underline">
            Sign in
          </Link>
        </p>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setTouched({
            fullName: true,
            phone: true,
            email: true,
            password: true,
            confirmPassword: true,
            agree: true,
          });
          if (!canSubmit) return;
          // Hook up real signup later
        }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AuthField label="Full name" error={nameError}>
            <AuthTextInput
              icon={<User className="h-4 w-4" />}
              value={fullName}
              onChange={setFullName}
              onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
              placeholder="Your name"
              autoComplete="name"
              error={!!nameError}
              name="name"
            />
          </AuthField>

          <AuthField label="Phone (optional)" error={phoneError}>
            <AuthTextInput
              icon={<Phone className="h-4 w-4" />}
              value={phone}
              onChange={setPhone}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              placeholder="+974 …"
              autoComplete="tel"
              error={!!phoneError}
              inputMode="tel"
              name="phone"
            />
          </AuthField>
        </div>

        <AuthField label="Email" error={emailError}>
          <AuthTextInput
            icon={<Mail className="h-4 w-4" />}
            value={email}
            onChange={setEmail}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            placeholder="name@company.com"
            autoComplete="email"
            type="email"
            error={!!emailError}
            name="email"
          />
        </AuthField>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AuthField label="Password" error={passwordError}>
            <AuthPasswordInput
              icon={<Lock className="h-4 w-4" />}
              value={password}
              onChange={setPassword}
              onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              show={showPassword}
              onToggle={() => setShowPassword((s) => !s)}
              placeholder="Create a password"
              autoComplete="new-password"
              error={!!passwordError}
              name="password"
            />
          </AuthField>

          <AuthField label="Confirm password" error={confirmError}>
            <AuthPasswordInput
              icon={<Lock className="h-4 w-4" />}
              value={confirmPassword}
              onChange={setConfirmPassword}
              onBlur={() => setTouched((t) => ({ ...t, confirmPassword: true }))}
              show={showConfirmPassword}
              onToggle={() => setShowConfirmPassword((s) => !s)}
              placeholder="Repeat your password"
              autoComplete="new-password"
              error={!!confirmError}
              name="confirmPassword"
            />
          </AuthField>
        </div>

        <AuthField label="Terms" error={agreeError}>
          <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              onBlur={() => setTouched((t) => ({ ...t, agree: true }))}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-(--teal-dark) focus:ring-(--teal-dark)"
            />
            <span className="leading-relaxed">
              I agree to the{" "}
              <Link href="#" className="font-semibold text-slate-800 hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-semibold text-slate-800 hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </AuthField>

        <button
          type="submit"
          disabled={!canSubmit}
          className={[
            "w-full rounded-sm px-5 py-3 text-sm font-semibold text-white transition",
            canSubmit
              ? "bg-(--teal-dark) hover:bg-[#102a43e6] cursor-pointer"
              : "bg-slate-300 cursor-not-allowed",
          ].join(" ")}
        >
          Create account
        </button>

        <p className="pt-1 text-xs text-slate-500 leading-relaxed">
          Password must be at least 6 characters. We&apos;ll never share your details.
        </p>
      </form>
    </AuthLayout>
  );
}
