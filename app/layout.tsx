import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import AppShell from "./_components/AppShell";
import { ToastProvider } from "./_lib/toast";
import { AuthProvider } from "./_lib/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aethla - Professional Cleaning Services",
  description: "Aethla provides professional cleaning and maid services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased flex flex-col min-h-screen`}
      >
        <ToastProvider>
          <AuthProvider>
            <AppShell>{children}</AppShell>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
