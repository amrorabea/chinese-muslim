import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/menu", label: "Menu" },
  { path: "/branches", label: "Branches" },
  { path: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [mobileOpen, lenis]);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-950/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="El Moslem Home">
            <span className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110">🏮</span>
            <div className="flex flex-col items-start">
              <span className="font-arabic text-xl md:text-2xl font-bold text-white leading-tight">
                المسلم <span className="text-red-500">الصيني</span>
              </span>
              <span className="text-[9px] md:text-[10px] text-amber-400/80 uppercase tracking-[0.15em] font-medium -mt-1">
                مطعم صيني أصيل
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg ${
                  location.pathname === link.path
                    ? "text-red-500"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-red-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-60"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-neutral-950 border-l border-white/5 shadow-2xl transition-transform duration-500 md:hidden flex flex-col justify-between p-6 pt-24 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Background glow overlay */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8">
          {/* Logo inside drawer */}
          <div className="flex items-center gap-3 border-b border-white/5 pb-6">
            <span className="text-3xl">🏮</span>
            <div className="flex flex-col items-start">
              <span className="font-arabic text-xl font-bold text-white leading-tight">
                المسلم <span className="text-red-500">الصيني</span>
              </span>
              <span className="text-[9px] text-amber-400/80 uppercase tracking-[0.15em] font-medium -mt-1">
                مطعم صيني أصيل
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-semibold tracking-wide uppercase transition-all duration-300 flex items-center justify-between group ${
                  location.pathname === link.path ? "text-red-500" : "text-zinc-400 hover:text-white"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <span>{link.label}</span>
                <span className={`text-sm transition-transform duration-300 group-hover:translate-x-1 ${
                  location.pathname === link.path ? "text-red-500 opacity-100" : "text-zinc-600 opacity-0 group-hover:opacity-100"
                }`}>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="relative z-10 border-t border-white/5 pt-6 flex flex-col gap-4">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">Dine-In Only</span>
            <span className="text-xs text-zinc-400">Sun – Thu: 11 AM – 11 PM</span>
            <span className="text-xs text-zinc-400 block">Fri – Sat: 11 AM – 12 AM</span>
          </div>
          <p className="text-[10px] text-zinc-600 leading-normal">
            Exclusively dine-in dining experience inside Cairo. No delivery service.
          </p>
        </div>
      </div>

      {/* Backdrop (visible only when mobile menu is open) */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
}
