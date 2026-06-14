import { useEffect, useRef } from "react";

const categoryIcons = {
  noodles: "🍜",
  rice: "🍚",
  dumplings: "🥟",
  chicken: "🍗",
  beef: "🥩",
  seafood: "🦐",
};

export default function DishModal({ dish, onClose }) {
  const overlayRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!dish) return null;

  const spicinessLabel = ["None", "Mild", "Medium", "Hot"];
  const sweetnessLabel = ["None", "Light", "Medium", "Rich"];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl shadow-black/50 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-950/80 backdrop-blur-md border border-white/10 text-zinc-400 hover:text-white hover:border-red-500/50 transition-all duration-200"
          aria-label="Close dish details"
          id="modal-close-btn"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-t-3xl">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

          {/* Price overlay */}
          <div className="absolute bottom-4 left-4 bg-amber-500 text-neutral-950 font-bold px-4 py-2 rounded-xl text-lg shadow-lg shadow-amber-500/25">
            EGP {dish.price}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Category badge */}
            <span className="px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider bg-zinc-800 text-zinc-300 border border-white/10 flex items-center gap-1.5">
              <span>{categoryIcons[dish.category] || "🍽️"}</span>
              <span className="capitalize">{dish.category}</span>
            </span>

            {dish.tags.map((tag, i) => {
              const normalizedTag = tag.toLowerCase();
              let tagStyle = "bg-zinc-500/15 text-zinc-400 border border-zinc-500/20";
              if (normalizedTag === "spicy") {
                tagStyle = "bg-red-500/15 text-red-400 border border-red-500/20";
              } else if (normalizedTag === "chef's pick") {
                tagStyle = "bg-amber-500/15 text-amber-400 border border-amber-500/20";
              } else if (normalizedTag === "sweet") {
                tagStyle = "bg-pink-500/15 text-pink-400 border border-pink-500/20";
              } else if (normalizedTag === "popular") {
                tagStyle = "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";
              }

              return (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider ${tagStyle}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Title */}
          <h2 id="dish-modal-title" className="text-2xl md:text-3xl font-bold text-white mb-3">
            {dish.name}
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-base leading-relaxed mb-6">
            {dish.description}
          </p>

          {/* Spiciness & Sweetness */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-neutral-950/50 border border-white/5 rounded-xl p-4">
              <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-2">Spiciness</span>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[0, 1, 2].map((level) => (
                    <span
                      key={level}
                      className={`text-lg ${level < dish.spiciness ? "" : "opacity-20"}`}
                    >
                      🌶️
                    </span>
                  ))}
                </div>
                <span className="text-zinc-400 text-sm">{spicinessLabel[dish.spiciness]}</span>
              </div>
            </div>
            <div className="bg-neutral-950/50 border border-white/5 rounded-xl p-4">
              <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-2">Sweetness</span>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[0, 1, 2].map((level) => (
                    <span
                      key={level}
                      className={`text-lg ${level < dish.sweetness ? "" : "opacity-20"}`}
                    >
                      🍯
                    </span>
                  ))}
                </div>
                <span className="text-zinc-400 text-sm">{sweetnessLabel[dish.sweetness]}</span>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-neutral-950/50 border border-white/5 rounded-xl p-4">
            <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-2">Ingredients</span>
            <p className="text-zinc-300 text-sm leading-relaxed">{dish.ingredients}</p>
          </div>

          {/* Dine-in reminder */}
          <div className="mt-6 flex items-center gap-3 bg-red-500/5 border border-red-500/10 rounded-xl px-4 py-3">
            <span className="text-lg">🍽️</span>
            <p className="text-zinc-400 text-sm">
              Dine-In Only — Enjoy this dish fresh at any of our branches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
