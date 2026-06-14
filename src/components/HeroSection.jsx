import { Link } from "react-router-dom";

export default function HeroSection({
  image,
  imageAlt,
  tag,
  title,
  subtitle,
  ctas,
  features,
  badge,
  isHome = false,
}) {
  return (
    <section className={`relative overflow-hidden ${isHome ? "min-h-[90vh]" : "min-h-[40vh] md:min-h-[50vh]"} flex items-center`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
        <div className={`${isHome ? "max-w-2xl" : "text-center mx-auto max-w-3xl"}`}>
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-zinc-300 text-xs font-medium tracking-wide">{badge}</span>
            </div>
          )}

          {/* Tag */}
          {tag && !badge && (
            <span className="inline-block text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] mb-4 animate-fade-in">
              {tag}
            </span>
          )}

          {/* Title */}
          <h1
            className={`font-bold text-white leading-tight mb-4 md:mb-6 animate-slide-up ${
              isHome ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl"
            }`}
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {/* Subtitle */}
          {subtitle && (
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto animate-slide-up animation-delay-100">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          {ctas && (
            <div className={`flex flex-wrap gap-4 animate-slide-up animation-delay-200 ${!isHome ? "justify-center" : ""}`}>
              {ctas.map((cta, i) => (
                <Link
                  key={i}
                  to={cta.to}
                  id={cta.id}
                  className={
                    cta.variant === "gold"
                      ? "inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 text-sm"
                      : "inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          )}

          {/* Features strip */}
          {features && (
            <div className="flex flex-wrap gap-6 mt-10 animate-slide-up animation-delay-300">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xl">{f.icon}</span>
                  <span className="text-zinc-400 text-sm font-medium">{f.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
