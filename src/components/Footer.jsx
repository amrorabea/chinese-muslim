import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 border-t border-white/5 pt-16 pb-8" role="contentinfo">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <span className="text-3xl">🏮</span>
              <div className="flex flex-col items-start">
                <span className="font-arabic text-xl font-bold text-white leading-tight">
                  المسلم <span className="text-red-500">الصيني</span>
                </span>
                <span className="text-[9px] md:text-[10px] text-amber-400/80 uppercase tracking-[0.15em] font-medium -mt-1">
                  مطعم صيني أصيل
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Cairo's premier destination for authentic Halal Chinese cuisine. Handmade daily by professional Chinese Muslim chefs. Dine-in only.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-zinc-500 hover:text-red-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/menu" className="text-zinc-500 hover:text-red-400 transition-colors text-sm">Menu & Prices</Link></li>
              <li><Link to="/branches" className="text-zinc-500 hover:text-red-400 transition-colors text-sm">Our Branches</Link></li>
              <li><Link to="/about" className="text-zinc-500 hover:text-red-400 transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Branches</h4>
            <ul className="space-y-3">
              <li><Link to="/branches#nasr-city" className="text-zinc-500 hover:text-red-400 transition-colors text-sm">Nasr City</Link></li>
              <li><Link to="/branches#tagamoa" className="text-zinc-500 hover:text-red-400 transition-colors text-sm">Tagamoa El Awal</Link></li>
              <li><Link to="/branches#abassia" className="text-zinc-500 hover:text-red-400 transition-colors text-sm">Abassia</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span className="text-zinc-400">Sun – Thu</span>
                <span className="text-zinc-500">11 AM – 11 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-zinc-400">Fri – Sat</span>
                <span className="text-zinc-500">11 AM – 12 AM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs text-center sm:text-left">
            © 2026 El Moslem Restaurant. All rights reserved. Dine-In Only — No Delivery.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-zinc-600 hover:text-red-400 transition-colors text-lg">📘</a>
            <a href="#" aria-label="Instagram" className="text-zinc-600 hover:text-red-400 transition-colors text-lg">📸</a>
            <a href="#" aria-label="TikTok" className="text-zinc-600 hover:text-red-400 transition-colors text-lg">🎵</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
