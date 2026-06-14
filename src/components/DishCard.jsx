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
      className="group relative bg-neutral-900/80 border border-white/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/5 sm:hover:-translate-y-1 flex flex-row sm:flex-col p-3 sm:p-0 gap-3 sm:gap-0 items-center sm:items-stretch"
      onClick={() => onClick(dish)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(dish)}
      aria-label={`View details for ${dish.name}`}
    >
      {/* Image Container */}
      <div className="relative w-20 h-20 sm:w-full sm:h-auto sm:aspect-[4/3] flex-shrink-0 rounded-xl sm:rounded-none overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradients & badges (only visible on desktop or larger layout) */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

        {/* Desktop Category badge */}
        <div className="hidden sm:flex absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1 items-center gap-1.5">
          <span className="text-sm">{categoryIcons[dish.category] || "🍽️"}</span>
          <span className="text-white font-medium text-xs capitalize">{dish.category}</span>
        </div>

        {/* Desktop Price badge */}
        <div className="hidden sm:block absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5">
          <span className="text-amber-400 font-bold text-sm">EGP {dish.price}</span>
        </div>
      </div>

      {/* Info Block */}
      <div className="flex-1 min-w-0 sm:p-4 w-full">
        {/* Title & Price Header */}
        <div className="flex items-center justify-between gap-2 mb-1 sm:mb-2">
          <h3 className="text-white font-semibold text-sm sm:text-base group-hover:text-red-400 transition-colors truncate">
            {dish.name}
          </h3>
          <span className="text-amber-400 font-bold text-xs sm:text-sm sm:hidden whitespace-nowrap">
            EGP {dish.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed line-clamp-1 sm:line-clamp-2 mb-2 sm:mb-3">
          {dish.description}
        </p>

        {/* Tags Row */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 items-center">
          {/* Mobile Category badge */}
          <span className="sm:hidden px-1.5 py-0.5 rounded-md text-[8px] font-semibold bg-zinc-800 text-zinc-300 border border-white/5 uppercase tracking-wider flex items-center gap-1">
            <span>{categoryIcons[dish.category] || "🍽️"}</span>
            <span>{dish.category}</span>
          </span>

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
                className={`px-1.5 sm:px-2 py-0.5 rounded-md text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider ${tagStyle}`}
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

