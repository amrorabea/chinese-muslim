export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group relative bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/[0.06] hover:border-red-500/20 hover:-translate-y-1">
      <span className="text-4xl block mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
      
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/0 to-red-500/0 group-hover:from-red-500/[0.02] group-hover:to-transparent transition-all duration-500 pointer-events-none" />
    </div>
  );
}
