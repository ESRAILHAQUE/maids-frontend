import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  bottomText?: ReactNode;
  formWidthClassName?: string;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
  bottomText,
  formWidthClassName = "max-w-md",
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,rgb(var(--brand-primary-rgb)/0.10),transparent_40%),radial-gradient(circle_at_80%_0%,rgb(var(--brand-dark-rgb)/0.08),transparent_36%),linear-gradient(to_bottom,#ffffff,#f8fafc,#ffffff)] text-slate-900">
      <div className="mx-auto w-[95%] max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.12)] lg:grid-cols-2">
          {/* Brand / marketing panel */}
          <aside className="relative hidden lg:block">
            <div className="absolute inset-0">
              <Image
                src="/images/Helping.jpg"
                alt="Professional cleaning services"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/75 via-slate-950/35 to-slate-950/20" />
            </div>

            <div className="relative flex h-full flex-col justify-between p-10 text-white">
              <div>
                <Link href="/" className="inline-flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center font-bold text-white"
                    style={{
                      clipPath:
                        "polygon(25% 6%, 75% 6%, 94% 50%, 75% 94%, 25% 94%, 6% 50%)",
                      background: "linear-gradient(135deg, var(--brand-primary), var(--brand-dark))",
                      boxShadow: "0 18px 45px rgb(var(--brand-dark-rgb)/0.28)",
                    }}
                  >
                    A
                  </div>
                  <div className="leading-tight">
                    <div className="text-lg font-semibold">Aethla</div>
                    <div className="text-sm text-white/80 arabic-font">أيثلا</div>
                  </div>
                </Link>

                <h2 className="mt-10 text-3xl font-semibold tracking-tight">
                  Clean spaces, calmer days.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                  Manage bookings, track services, and stay in control with a simple,
                  professional account experience.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-sm font-semibold">Why sign in?</div>
                <ul className="mt-3 space-y-2 text-sm text-white/85">
                  <li className="flex gap-2 ">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-(--brand-primary)" />
                    Fast booking and rescheduling
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-(--brand-primary)" />
                    Secure profile and saved addresses
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-(--brand-primary)" />
                    Service history in one place
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Form panel */}
          <section className="p-6 sm:p-10">
            <div className={["mx-auto w-full", formWidthClassName].join(" ")}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
                  {subtitle ? (
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{subtitle}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-7">{children}</div>

              {bottomText ? <div className="mt-6 text-center text-sm">{bottomText}</div> : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}


