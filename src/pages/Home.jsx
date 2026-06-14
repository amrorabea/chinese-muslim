import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import ScrollReveal from "../components/ScrollReveal";
import DishCard from "../components/DishCard";
import DishModal from "../components/DishModal";
import menuData from "../data/menuData";

const featuredDishIds = [4, 14, 17, 23, 27, 7];

const features = [
  { icon: "🥟", title: "Handmade Daily", desc: "Every dumpling, noodle, and dish is crafted by hand each morning using traditional Chinese techniques." },
  { icon: "☪️", title: "100% Halal", desc: "Fully certified Halal kitchen with ingredients sourced from trusted suppliers across Egypt." },
  { icon: "🔥", title: "Wok-Fired Fresh", desc: "Every dish is prepared to order in our blazing-hot woks, never pre-cooked or reheated." },
  { icon: "🏮", title: "Authentic Ambiance", desc: "Immerse yourself in a premium dining atmosphere designed to transport you to the heart of China." },
];

export default function Home() {
  const [selectedDish, setSelectedDish] = useState(null);
  const featuredDishes = menuData.filter((d) => featuredDishIds.includes(d.id));

  return (
    <>
      {/* Hero */}
      <HeroSection
        image="/images/hero-food.png"
        imageAlt="Authentic Chinese dishes including steaming noodles and golden dumplings"
        badge="Dine-In Experience Only"
        title='Authentic <span class="text-red-500">Chinese</span> Cuisine,<br/>Made <span class="text-amber-400">Halal</span>'
        subtitle="Crafted by professional Chinese Muslim chefs using traditional recipes and the freshest ingredients. Three locations across Cairo serving you daily."
        isHome={true}
        ctas={[
          { label: "🍜 Explore Menu & Prices", to: "/menu", variant: "gold", id: "cta-explore-menu" },
          { label: "📍 Find Nearest Branch", to: "/branches", variant: "outline", id: "cta-find-branch" },
        ]}
        features={[
          { icon: "☪️", text: "100% Halal" },
          { icon: "👨‍🍳", text: "Chinese Muslim Chefs" },
          { icon: "🔥", text: "Fresh Wok Daily" },
        ]}
      />

      {/* Dine-In Banner */}
      <div className="bg-gradient-to-r from-red-600/10 via-red-600/5 to-red-600/10 border-y border-red-500/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-4 flex-wrap text-center">
          <span className="text-lg">🍽️</span>
          <p className="text-zinc-400 text-sm">Exclusively Dine-In — No Delivery — No Online Ordering</p>
          <span className="text-lg hidden sm:inline">🏮</span>
          <p className="text-zinc-400 text-sm hidden sm:inline">Experience the Authentic Atmosphere at Our Branches</p>
          <span className="text-lg hidden sm:inline">🥢</span>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 md:py-28" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                A Dining Experience <span className="text-red-500">Unlike Any Other</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 md:py-28 bg-neutral-950/50" id="menu-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Our Specialties</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Popular & <span className="text-red-500">Chef's Picks</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mb-4" />
              <p className="text-zinc-400 text-base max-w-xl mx-auto">
                A handpicked selection of our guest-favorite dishes and signature culinary highlights.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDishes.map((dish, i) => (
              <ScrollReveal key={dish.id} delay={i * 80}>
                <DishCard dish={dish} onClick={setSelectedDish} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-12">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
                id="cta-view-full-menu"
              >
                🍜 View Full Menu & Prices
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Visit Us Today</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Table is <span className="text-red-500">Waiting</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Discover the perfect blend of authentic Chinese flavors and warm Egyptian hospitality at any of our three Cairo branches.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/branches"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 text-sm"
                  id="cta-find-branch-bottom"
                >
                  📍 Find Nearest Branch
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
                  id="cta-our-story"
                >
                  📖 Our Story
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dish Modal */}
      {selectedDish && (
        <DishModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      )}
    </>
  );
}
