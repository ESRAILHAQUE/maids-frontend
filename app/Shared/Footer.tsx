
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book Now", href: "#booking" },
  { label: "Contact", href: "#contact" },
  { label: "FAQs", href: "#faqs" },
  { label: "Privacy & Policy", href: "#privacy" },
  { label: "Terms & Conditions", href: "#terms" },
];

const serviceLinks = [
  { label: "Carpet Cleaning", href: "#carpet-cleaning" },
  { label: "Move In", href: "#move-in" },
  { label: "Window Cleaning", href: "#window-cleaning" },
  { label: "Home Cleaning", href: "#home-cleaning" },
  { label: "Cloth Ironing", href: "#cloth-ironing" },
  { label: "Office Cleaning", href: "#office-cleaning" },
];

const socials = [
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Email", icon: Mail, href: "mailto:info@aethla.com" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-950 text-slate-100 border-t border-slate-900 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(207,75,0,0.14),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(0,0,0,0.12))]" />
      <div className="relative w-[95%] max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="relative h-12 w-12 flex items-center justify-center text-white font-semibold"
                style={{
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 94% 50%, 75% 94%, 25% 94%, 6% 50%)",
                  background: "linear-gradient(135deg, #cf4b00, #9a2f00)",
                  boxShadow: "0 12px 25px rgba(207, 75, 0, 0.3)",
                }}
              >
                A
              </div>
              <div>
                <p className="text-lg font-semibold text-white">Aethla</p>
                <p className="text-xs text-slate-300">أيثلا</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-200/85">
              Discover the transformative power of our professional cleaning
              services in Qatar, crafted to create a spotless, organized, and
              healthy environment for your home or workplace.
            </p>
            <div className="inline-flex items-center gap-3 rounded-sm bg-[#CF4B00] px-4 py-2 text-white font-semibold shadow-[0_12px_28px_rgba(207,75,0,0.35)]">
              <Phone className="h-4 w-4 text-white" />
              <span>+974 3333 7410</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#CF4B00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#CF4B00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
              <p>
                Location: 3rd Floor, Al Muftah Plaza, Al Reem St, Doha Qatar
              </p>
              <p>Email: info@aethla.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CF4B00] text-white shadow-[0_10px_25px_rgba(207,75,0,0.4)]">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1 text-sm">
                <p className="text-slate-400">Call Us Now</p>
                <a
                  href="tel:+97433337410"
                  className="text-base font-semibold text-white hover:text-[#CF4B00] transition-colors"
                >
                  +974 3333 7410
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-slate-400">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#CF4B00] hover:text-[#CF4B00] shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aethla. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#privacy" className="hover:text-[#CF4B00] transition">
              Privacy
            </a>
            <span className="text-slate-400">•</span>
            <a href="#terms" className="hover:text-[#CF4B00] transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
