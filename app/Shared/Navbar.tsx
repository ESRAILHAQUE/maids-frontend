"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Clock,
  Phone,
  ChevronDown,
  Search,
  MessageCircle,
  Menu,
  X,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState("Home");
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isSearchOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    // Focus input after render
    setTimeout(() => searchInputRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isSearchOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Booking", href: "/booking" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceDropdown = [
    { label: "Home Cleaning", href: "/home-cleaning" },
    { label: "Commercial Cleaning", href: "/commercial-cleaning" },
    { label: "Maids Services", href: "/maids-services" },
    { label: "Office Cleaning", href: "/office-cleaning" },
    { label: "Cloth Ironing", href: "/cloth-ironing" },
    { label: "Window Cleaning", href: "/window-cleaning" },
    { label: "Move In", href: "/move-in" },
    { label: "Carpet Cleaning", href: "/carpet-cleaning" },
  ];

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <header className="w-full relative z-40">
      {/* Search overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsSearchOpen(false);
          }}
        >
          <button
            type="button"
            aria-label="Close search"
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/70"
          >
            <X className="h-6 w-6" />
          </button>

          <form
            className="h-full w-full flex items-center justify-center px-4"
            onSubmit={(e) => {
              e.preventDefault();
              // UI-first: keep overlay behavior; wire up real search route later if needed.
              setIsSearchOpen(false);
            }}
          >
            <div className="w-full max-w-xl">
              <div className="flex items-center rounded-full bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10 overflow-hidden">
                <input
                  ref={searchInputRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search…"
                  className="w-full px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="m-1.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white shadow-md transition hover:bg-[var(--brand-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
                >
                  <Search className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Top Utility Bar - Scrolls away */}
      <div className="w-full bg-[var(--brand-dark)] text-white">
        <div className="container mx-auto px-4 w-[95%]">
          <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-2 md:gap-0">
            {/* Left Side - Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@aethla.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Saturday - Thursday: 7.00 - 23.30. Friday off</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+974 33337410</span>
              </div>
            </div>

            {/* Right Side - Social Media Icons */}
            <div className="flex items-center gap-2">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
  return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    aria-label={`${social.icon.name} social link`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="w-full bg-white relative z-30">
        <div className="container mx-auto px-4 w-[95%]">
          <div className="flex items-center justify-between py-4">
            {/* Left Side - Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  className="drop-shadow-sm"
                >
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--brand-primary)" />
                      <stop offset="100%" stopColor="var(--brand-dark)" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="25,5 40,12.5 40,32.5 25,40 10,32.5 10,12.5"
                    fill="url(#logoGradient)"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                  />
                  <text
                    x="25"
                    y="30"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                  >
                    A
                  </text>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Aethla</span>
                <span className="text-sm arabic-font text-gray-700">أيثلا</span>
              </div>
            </Link>

            {/* Middle - Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-6 relative">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="group relative"
                    onMouseEnter={() => setActiveLink(link.name)}
                  >
                    <button
                      className={`relative flex items-center gap-1 font-semibold text-gray-800 transition-colors ${
                        activeLink === link.name
                          ? "text-[var(--brand-primary)]"
                          : "hover:text-[var(--brand-primary)]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute left-0 top-full mt-3 hidden min-w-[220px] rounded-xl bg-white text-slate-800 shadow-xl ring-1 ring-black/5 group-hover:block z-50">
                      <ul className="py-2 text-sm">
                        {serviceDropdown.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2.5 hover:bg-[rgb(var(--brand-soft-rgb)/1)] hover:text-[var(--brand-primary)] transition-colors"
                              onClick={() => setActiveLink("Services")}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {activeLink === link.name && (
                      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--brand-primary)] rounded-full"></span>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`relative font-semibold text-gray-800 hover:text-[var(--brand-primary)] transition-colors ${
                      activeLink === link.name ? "text-[var(--brand-primary)]" : ""
                    }`}
                  >
                    <span className="flex items-center gap-1">{link.name}</span>
                    {activeLink === link.name && (
                      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--brand-primary)] rounded-full"></span>
                    )}
                  </Link>
                )
              )}
            </div>

            {/* Right Side - Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector */}
              <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                <div className="w-6 h-6 min-w-[24px] min-h-[24px] bg-[var(--brand-primary)] rounded-full flex items-center justify-center shrink-0 aspect-square">
                  <span className="text-white text-xs arabic-font leading-none">ع</span>
                </div>
              </button>

              {/* Phone Number */}
              <div className="flex items-center gap-2 font-bold text-gray-800">
                <Phone className="w-4 h-4 text-[var(--brand-primary)]" />
                <span>+974 33337410</span>
              </div>

              {/* Search Icon */}
              <button
                type="button"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                aria-label="Open search"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              {/* Let's Talk Button */}
              <Link
                href="/contact"
                onClick={() => setActiveLink("Contact")}
                className="flex items-center gap-2 bg-[var(--brand-primary)] text-white px-5 py-2 rounded-sm hover:bg-[var(--brand-dark)] transition-colors font-semibold cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Let&apos;s Talk</span>
              </Link>

              {/* Login Button */}
              <Link
                href="/login"
                onClick={() => setActiveLink("Login")}
                className="flex items-center justify-center border border-[rgb(var(--brand-primary-rgb)/0.30)] text-[var(--brand-primary)] px-5 py-2 rounded-sm hover:bg-[rgb(var(--brand-soft-rgb)/1)] transition-colors font-semibold"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.name} className="space-y-2">
                      <div className="flex items-center gap-1 font-semibold text-gray-800">
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                      </div>
                      <div className="ml-4 space-y-2 text-sm text-gray-700">
                        {serviceDropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                              className="block hover:text-[var(--brand-primary)]"
                            onClick={() => {
                              setActiveLink("Services");
                              setIsMenuOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveLink(link.name);
                        setIsMenuOpen(false);
                      }}
                      className={`font-semibold text-gray-800 hover:text-[var(--brand-primary)] transition-colors ${
                        activeLink === link.name ? "text-[var(--brand-primary)]" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">{link.name}</span>
                    </Link>
                  )
                )}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                    <div className="w-6 h-6 min-w-[24px] min-h-[24px] bg-[var(--brand-primary)] rounded-full flex items-center justify-center shrink-0 aspect-square">
                      <span className="text-white text-xs arabic-font leading-none">ع</span>
                    </div>
                  </button>
                  <div className="flex items-center gap-2 font-bold text-gray-800">
                    <Phone className="w-4 h-4 text-[var(--brand-primary)]" />
                    <span>+974 33337410</span>
                  </div>
                  <button
                    type="button"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsSearchOpen(true);
                    }}
                    aria-label="Open search"
                  >
                    <Search className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[var(--brand-primary)] text-white px-5 py-3 rounded-md hover:bg-[var(--brand-dark)] transition-colors font-semibold mt-2"
                  onClick={() => {
                    setActiveLink("Contact");
                    setIsMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Let&apos;s Talk</span>
                </Link>

                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 border border-[rgb(var(--brand-primary-rgb)/0.30)] text-[var(--brand-primary)] px-5 py-3 rounded-md hover:bg-[rgb(var(--brand-soft-rgb)/1)] transition-colors font-semibold"
                  onClick={() => {
                    setActiveLink("Login");
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
