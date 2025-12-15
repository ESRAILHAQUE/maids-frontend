"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}


