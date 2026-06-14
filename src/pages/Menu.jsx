import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CategoryNav from "../components/CategoryNav";
import DishCard from "../components/DishCard";
import DishModal from "../components/DishModal";
import ScrollReveal from "../components/ScrollReveal";
import menuData, { categories } from "../data/menuData";

export default function Menu() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [activeCategory, setActiveCategory] = useState("noodles");

  // Track scroll position to update active category in navigation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -70% 0px", // triggers when section is near the top of viewport
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    const element = document.getElementById(catId);
    if (element) {
      const offset = 140; // Main navbar + Category navbar height + padding spacing
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Hero */}
      <HeroSection
        image="/images/menu-hero.png"
        imageAlt="Variety of authentic Chinese dishes"
        tag="Digital Menu"
        title='Our <span class="text-red-500">Menu</span> & Prices'
        subtitle="Freshly prepared Halal Chinese cuisine — browse, choose, enjoy"
      />

      {/* Category Navigation Bar */}
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryClick}
      />

      {/* Menu Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {categories.map((category) => {
          const categoryDishes = menuData.filter((d) => d.category === category.id);
          if (categoryDishes.length === 0) return null;

          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-36 mb-16 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-8">
                <span className="text-3xl" role="img" aria-label={category.name}>
                  {category.icon}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-wide">
                    {category.name}
                  </h2>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    {categoryDishes.length} {categoryDishes.length === 1 ? "dish" : "dishes"} available
                  </p>
                </div>
              </div>

              {/* Dishes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryDishes.map((dish, i) => (
                  <ScrollReveal key={dish.id} delay={i * 30}>
                    <DishCard dish={dish} onClick={setSelectedDish} />
                  </ScrollReveal>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Dine-In Reminder */}
      <div className="bg-gradient-to-r from-red-600/10 via-red-600/5 to-red-600/10 border-y border-red-500/10 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-4 flex-wrap text-center">
          <span className="text-lg">🍽️</span>
          <p className="text-zinc-400 text-sm">All prices include taxes — Dine-In Only — No Delivery</p>
          <span className="text-lg">☪️</span>
          <p className="text-zinc-400 text-sm">100% Halal Certified Kitchen</p>
          <span className="text-lg">🥢</span>
        </div>
      </div>

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

