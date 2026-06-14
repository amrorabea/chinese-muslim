import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import BranchCard from "../components/BranchCard";
import ScrollReveal from "../components/ScrollReveal";

const branches = [
  {
    id: "nasr-city",
    name: "Nasr City",
    area: "Nasr City, Cairo",
    address: "12 Abbas El-Akkad Street, Nasr City, Cairo, Egypt",
    phone: "+20222222001",
    phoneDisplay: "+20 2 2222 2001",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27626.73!2d31.34!3d30.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e0a78b1c3c1%3A0x7c8e3b1c8e5b0d5a!2sNasr%20City%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1710000000000!5m2!1sen!2seg",
    directionsUrl: "https://maps.google.com/?q=Nasr+City+Cairo",
  },
  {
    id: "tagamoa",
    name: "Tagamoa El Awal",
    area: "Fifth Settlement, New Cairo",
    address: "45 Teseen Street, Tagamoa El Awal, New Cairo, Egypt",
    phone: "+20222222002",
    phoneDisplay: "+20 2 2222 2002",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27626.73!2d31.42!3d30.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cbc0bce55c5%3A0x9e82f3e5f6e8a4c7!2sFirst%20Settlement%2C%20New%20Cairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1710000000001!5m2!1sen!2seg",
    directionsUrl: "https://maps.google.com/?q=Tagamoa+El+Awal+New+Cairo",
  },
  {
    id: "abassia",
    name: "Abassia",
    area: "Abassia, Central Cairo",
    address: "78 Ramses Street, Abassia, Cairo, Egypt",
    phone: "+20222222003",
    phoneDisplay: "+20 2 2222 2003",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27626.73!2d31.28!3d30.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f55c9e22c43%3A0x9e8c5f6e8a4b7d2!2sAbbassia%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1710000000002!5m2!1sen!2seg",
    directionsUrl: "https://maps.google.com/?q=Abassia+Cairo",
  },
];

export default function Branches() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        image="/images/restaurant-interior.png"
        imageAlt="El Moslem restaurant interior"
        tag="3 Locations Across Cairo"
        title='Our <span class="text-red-500">Branches</span>'
        subtitle="Find the nearest El Moslem and experience authentic Chinese dining"
      />

      {/* Branches Grid */}
      <section className="py-16 md:py-24" id="branches">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Visit Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Find Your Nearest <span className="text-red-500">Branch</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mb-4" />
              <p className="text-zinc-400 text-base max-w-xl mx-auto">
                Three premium dining locations across Cairo — each offering the same exceptional quality and authentic experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {branches.map((branch, i) => (
              <ScrollReveal key={branch.id} delay={i * 150}>
                <BranchCard branch={branch} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dine-In Banner */}
      <div className="bg-gradient-to-r from-red-600/10 via-red-600/5 to-red-600/10 border-y border-red-500/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-4 flex-wrap text-center">
          <span className="text-lg">🍽️</span>
          <p className="text-zinc-400 text-sm">Walk In — Sit Down — Enjoy — No Delivery, No Online Ordering</p>
          <span className="text-lg">🏮</span>
        </div>
      </div>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Explore Our Dishes</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Check Our <span className="text-red-500">Menu</span> Before You Visit
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Browse the full menu with prices so you know exactly what to expect when you arrive.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
                id="cta-browse-menu"
              >
                🍜 Browse Full Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
