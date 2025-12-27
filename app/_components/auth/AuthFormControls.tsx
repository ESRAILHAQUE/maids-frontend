"use client";

import { Eye, EyeOff } from "lucide-react";
import { useId, type ReactNode, type HTMLAttributes } from "react";

export function AuthField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-slate-800">{label}</label>
      {children}
      {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}
    </div>
  );
}

export function AuthTextInput({
  icon,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  error,
  type = "text",
  inputMode,
  name,
}: {
  icon?: ReactNode;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder: string;
  autoComplete?: string;
  error?: boolean;
  type?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  name?: string;
}) {
  const id = useId();
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="relative">
      {icon ? (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>
      ) : null}
      <input
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={[
          "w-full rounded-2xl border bg-white py-3 text-sm text-slate-900 placeholder:text-slate-400",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          icon ? "pl-11 pr-4" : "px-4",
          error
            ? "border-red-300 focus:ring-red-300"
            : "border-slate-200 focus:ring-[color:var(--teal-dark)]",
        ].join(" ")}
      />
      {error ? (
        <span id={`${id}-error`} className="sr-only">
          Invalid input
        </span>
      ) : null}
    </div>
  );
}

export function AuthPasswordInput({
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  show,
  onToggle,
  error,
  icon,
  name,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder: string;
  autoComplete?: string;
  show: boolean;
  onToggle: () => void;
  error?: boolean;
  icon?: ReactNode;
  name?: string;
}) {
  const id = useId();
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon ?? <span className="sr-only">Password</span>}
      </div>
      <input
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={[
          "w-full rounded-2xl border bg-white pl-11 pr-12 py-3 text-sm text-slate-900 placeholder:text-slate-400",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          error
            ? "border-red-300 focus:ring-red-300"
            : "border-slate-200 focus:ring-[color:var(--teal-dark)]",
        ].join(" ")}
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--teal-dark)] focus-visible:ring-offset-2"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
      {error ? (
        <span id={`${id}-error`} className="sr-only">
          Invalid input
        </span>
      ) : null}
    </div>
  );
}


