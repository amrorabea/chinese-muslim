import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import ScrollReveal from "../components/ScrollReveal";

const values = [
  { icon: "☪️", title: "100% Halal", desc: "Our entire kitchen, supply chain, and preparation process adheres strictly to Halal standards. Every dish is prepared with integrity and trust." },
  { icon: "🥢", title: "True Authenticity", desc: "No shortcuts. No fusion. Our recipes come directly from China's Hui Muslim culinary tradition, perfected over generations." },
  { icon: "👨‍🍳", title: "Expert Chefs", desc: "Our Chinese Muslim chefs bring decades of professional experience, ensuring every dish meets the highest standards of taste and presentation." },
  { icon: "🔥", title: "Fresh Daily", desc: "Nothing is pre-made or frozen. From dumplings to noodles, everything is handcrafted fresh each morning and cooked to order." },
  { icon: "🏮", title: "The Full Experience", desc: "We're dine-in only because we believe the atmosphere, aroma, and presentation are essential parts of the meal — not just the food." },
  { icon: "❤️", title: "Community First", desc: "We're proud to serve Cairo's community with food that brings people together — families, friends, and food lovers alike." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        image="/images/chef-cooking.png"
        imageAlt="Chinese Muslim chef cooking with wok"
        tag="Our Story"
        title='About <span class="font-arabic text-red-500 font-bold">المسلم الصيني</span>'
        subtitle="Where authentic Chinese tradition meets Halal excellence"
      />

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]">
                <img
                  src="/images/restaurant-interior.png"
                  alt="El Moslem restaurant premium interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 to-transparent" />
              </div>

              {/* Text */}
              <div>
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Est. in Cairo</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  A Bridge Between <span className="text-red-500">China</span> & <span className="text-amber-400">Egypt</span>
                </h2>

                <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
                  <p>
                    El Moslem was born from a simple yet powerful idea: to bring the rich, diverse flavors of authentic Chinese cuisine to Cairo — prepared entirely Halal, without compromising a single ingredient or technique.
                  </p>
                  <p>
                    Our founders, who traveled extensively through China's Hui Muslim communities, were captivated by the incredible depth of Chinese Muslim culinary traditions. From the hand-pulled noodles of Lanzhou to the aromatic lamb skewers of Xi'an, they discovered a world of flavors that Cairo had never experienced.
                  </p>
                  <p>
                    Today, every dish at El Moslem is prepared by <strong className="text-zinc-200">professional Chinese Muslim chefs</strong> who bring decades of expertise and a deep respect for both Chinese culinary arts and Islamic dietary principles. Our kitchen is <strong className="text-zinc-200">100% Halal certified</strong>, and every ingredient is sourced with the highest standards of quality and purity.
                  </p>
                  <p>
                    We chose to be <strong className="text-zinc-200">dine-in only</strong> because we believe the full experience — the aroma of a sizzling wok, the sound of hand-pulled noodles, the warmth of our Chinese-inspired ambiance — is just as important as the food itself. This isn't takeaway. This is a <strong className="text-zinc-200">journey</strong>.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">What We Stand For</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-red-500">Values</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <FeatureCard icon={v.icon} title={v.title} desc={v.desc} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text */}
              <div>
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Our Kitchen</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Professional <span className="text-red-500">Chinese Muslim</span> Chefs
                </h2>

                <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
                  <p>
                    At the heart of El Moslem is our team of professional Chinese Muslim chefs — each handpicked for their mastery of traditional Chinese cooking techniques and their deep understanding of Halal food preparation.
                  </p>
                  <p>
                    Our head chefs hail from China's renowned Hui Muslim communities, where Chinese culinary arts and Islamic principles have been intertwined for centuries. They bring with them techniques like hand-pulling noodles, delicate dumpling folding, and the art of wok hei — the "breath of the wok" that gives our stir-fries their signature smoky depth.
                  </p>
                  <p>
                    Every chef in our kitchen undergoes rigorous training and shares a commitment to serving food that is not only delicious but prepared with the utmost respect for our diners' faith and values.
                  </p>
                </div>

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 text-sm mt-8"
                  id="cta-see-creations"
                >
                  🍜 See Their Creations
                </Link>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/chef-cooking.png"
                  alt="Chinese Muslim chef cooking in El Moslem kitchen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 to-transparent" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Experience It Yourself</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Table is <span className="text-red-500">Waiting</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Come taste the difference that authenticity, quality, and passion make. Visit any of our three Cairo branches today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/branches"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 text-sm"
                  id="cta-visit-us"
                >
                  📍 Find Nearest Branch
                </Link>
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
                  id="cta-explore-menu-about"
                >
                  🍜 Explore Menu
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
