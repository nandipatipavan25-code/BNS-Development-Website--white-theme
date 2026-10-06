import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import ScrollReveal from './ScrollReveal';

export default function OurExpertiseSection({
  setActivePage,
  setSelectedService,
  className = "",
  tag = "Our Services",
  title = "Built Around Your",
  highlight = "Vision.",
  description = "From planning and construction to the final details, BNS Development delivers reliable solutions built around quality, precision, and lasting performance."
}) {
  const handleNavigateToService = (svc) => {
    if (setSelectedService) setSelectedService(svc);
    const target = svc.id === 'predevelopment' ? 'predevelopment' : svc.id;
    setActivePage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={`relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F8] border-t border-[#E3E3DE] overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Bildora Centered Section Header ── */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20 space-y-4">
            {/* Centered Eyebrow Pill */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white border border-[#E3E3DE] shadow-xs">
              <span className="text-xs font-sans font-semibold text-black/70 tracking-wider">
                {tag}
              </span>
            </div>

            {/* Centered Large Display Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-semibold text-black/90 tracking-tight leading-[1.08]">
              {title} <span className="text-[#C41E1E]">{highlight}</span>
            </h2>

            {/* Centered Subtitle */}
            {description && (
              <p className="text-sm sm:text-base md:text-lg text-black/60 font-sans leading-relaxed max-w-2xl mx-auto pt-1">
                {description}
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* ── Bildora 2-Column Clean Image Service Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {servicesData.map((svc, idx) => (
            <ScrollReveal key={svc.id} delay={idx * 0.08} direction="up" className="h-full">
              <div
                onClick={() => handleNavigateToService(svc)}
                className="group cursor-pointer flex flex-col justify-between h-full"
              >
                {/* Large Rectangular Image Frame with Subtle Corner Radius */}
                <div className="relative aspect-[16/10.5] sm:aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-[#ECECE9] border border-[#E3E3DE] shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={svc.heroImage || svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient & Hover Action Indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                  
                  {/* Floating Action Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-4 h-4 text-[#C41E1E]" />
                  </div>
                </div>

                {/* Text Content Directly Below Image */}
                <div className="pt-5 sm:pt-6 space-y-2">
                  <h3 className="text-2xl sm:text-[28px] font-display font-semibold text-[#C41E1E] group-hover:text-[#A31919] transition-colors leading-snug">
                    {svc.title}
                  </h3>

                  <p className="text-sm sm:text-base text-black/60 font-sans leading-relaxed">
                    {svc.shortDesc || svc.overview || svc.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

