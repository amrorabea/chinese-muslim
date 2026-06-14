const categoryIcons = {
  noodles: "🍜",
  rice: "🍚",
  dumplings: "🥟",
  chicken: "🍗",
  beef: "🥩",
  seafood: "🦐",
};

export default function DishCard({ dish, onClick }) {
  return (
    <div
      className="group relative bg-neutral-900/80 border border-white/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1"
      onClick={() => onClick(dish)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(dish)}
      aria-label={`View details for ${dish.name}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1 flex items-center gap-1.5">
          <span className="text-sm">{categoryIcons[dish.category] || "🍽️"}</span>
          <span className="text-white font-medium text-xs capitalize">{dish.category}</span>
        </div>

        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5">
          <span className="text-amber-400 font-bold text-sm">EGP {dish.price}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-base mb-1 group-hover:text-red-400 transition-colors">
          {dish.name}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-3">
          {dish.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {dish.tags.map((tag, i) => {
            const normalizedTag = tag.toLowerCase();
            let tagStyle = "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20";
            if (normalizedTag === "spicy") {
              tagStyle = "bg-red-500/10 text-red-400 border border-red-500/20";
            } else if (normalizedTag === "chef's pick") {
              tagStyle = "bg-amber-500/10 text-amber-400 border border-amber-500/20";
            } else if (normalizedTag === "sweet") {
              tagStyle = "bg-pink-500/10 text-pink-400 border border-pink-500/20";
            } else if (normalizedTag === "popular") {
              tagStyle = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
            }

            return (
              <span
                key={i}
                className={`px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider ${tagStyle}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-inset ring-red-500/10" />
    </div>
  );
}

