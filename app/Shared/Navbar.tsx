"use client";

import { useState } from "react";
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
  const [activeLink, setActiveLink] = useState("Home");

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
    { label: "Commercial Cleaning", href: "/services#commercial-cleaning" },
    { label: "Maids Services", href: "/services#maids-services" },
    { label: "Office Cleaning", href: "/services#office-cleaning" },
    { label: "Cloth Ironing", href: "/services#cloth-ironing" },
    { label: "Window Cleaning", href: "/services#window-cleaning" },
    { label: "Move In", href: "/services#move-in" },
    { label: "Carpet Cleaning", href: "/services#carpet-cleaning" },
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
      {/* Top Utility Bar - Scrolls away */}
      <div className="w-full bg-[#CF4B00] text-white">
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
                      <stop offset="0%" stopColor="#CF4B00" />
                      <stop offset="100%" stopColor="#B84200" />
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
                        activeLink === link.name ? "text-[#0b9fb6]" : "hover:text-[#0b9fb6]"
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
                              className="block px-4 py-2.5 hover:bg-[#FFF3EB] hover:text-[#CF4B00] transition-colors"
                              onClick={() => setActiveLink("Services")}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {activeLink === link.name && (
                      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#CF4B00] rounded-full"></span>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`relative font-semibold text-gray-800 hover:text-[#CF4B00] transition-colors ${
                      activeLink === link.name ? "text-[#CF4B00]" : ""
                    }`}
                  >
                    <span className="flex items-center gap-1">{link.name}</span>
                    {activeLink === link.name && (
                      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#CF4B00] rounded-full"></span>
                    )}
                  </Link>
                )
              )}
            </div>

            {/* Right Side - Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector */}
              <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                <div className="w-6 h-6 min-w-[24px] min-h-[24px] bg-red-500 rounded-full flex items-center justify-center shrink-0 aspect-square">
                  <span className="text-white text-xs arabic-font leading-none">ع</span>
                </div>
              </button>

              {/* Phone Number */}
              <div className="flex items-center gap-2 font-bold text-gray-800">
                <Phone className="w-4 h-4 text-[#CF4B00]" />
                <span>+974 33337410</span>
              </div>

              {/* Search Icon */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              {/* Let's Talk Button */}
              <button className="flex items-center gap-2 bg-[#C54700] text-white px-5 py-2 rounded-md hover:bg-[#C54700] transition-colors font-semibold cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                <span>Let&apos;s Talk</span>
              </button>
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
                            className="block hover:text-[#CF4B00]"
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
                      className={`font-semibold text-gray-800 hover:text-[#CF4B00] transition-colors ${
                        activeLink === link.name ? "text-[#CF4B00]" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">{link.name}</span>
                    </Link>
                  )
                )}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                    <div className="w-6 h-6 min-w-[24px] min-h-[24px] bg-red-500 rounded-full flex items-center justify-center shrink-0 aspect-square">
                      <span className="text-white text-xs arabic-font leading-none">ع</span>
                    </div>
                  </button>
                  <div className="flex items-center gap-2 font-bold text-gray-800">
                    <Phone className="w-4 h-4 text-[#CF4B00]" />
                    <span>+974 33337410</span>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Search className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                <button className="flex items-center justify-center gap-2 bg-[#CF4B00] text-white px-5 py-3 rounded-md hover:bg-[#B84200] transition-colors font-semibold mt-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Let&apos;s Talk</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
