import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HouseCTA({
  onStartProject,
  title = "Ready to Talk About",
  highlight = "Your Project?",
  description = "Whether you're evaluating an opportunity or preparing to begin development, BNS Development is ready to understand your goals and help move your project forward.",
  buttonText = "Have a Project in Mind?",
  image = "/images/cta-building-red-black.jpg",
  className = "",
}) {
  return (
    <section className={`relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-28 ${className}`}>
      {/* Bildora-Style Dark Architectural Container */}
      <div className="relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-[#262525] shadow-2xl bg-[#141517] min-h-[440px] flex items-center justify-center p-8 sm:p-14 lg:p-20 text-center group">
        
        {/* Background Architectural Image with Cinematic Depth */}
        <div className="absolute inset-0 z-0">
          <img
            src={image || "/images/cta-building-red-black.jpg"}
            alt="BNS Development Architectural Landmark"
            className="w-full h-full object-cover select-none transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.55] contrast-110"
            loading="lazy"
          />
          {/* Subtle Directional Overlay for Natural Architectural Light & Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-[#141517]/60 to-[#141517]/80" />
        </div>

        {/* Subtle Architectural Dot Grid Accent */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        {/* Foreground Content Centered (Bildora Style) */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-white flex flex-col items-center">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="space-y-4 flex flex-col items-center">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E] animate-pulse" />
                <span className="text-xs font-sans font-semibold tracking-wider text-neutral-200 uppercase">
                  Project Initiation
                </span>
              </div>

              {/* Headline in Playfair Display */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white leading-[1.08]">
                <span>{title} </span>
                {highlight && (
                  <span className="text-[#C41E1E]">
                    {highlight}
                  </span>
                )}
              </h2>

              {/* Description */}
              {description && (
                <p className="text-[16px] text-neutral-300 font-sans leading-relaxed max-w-2xl pt-1">
                  {description}
                </p>
              )}
            </div>
          </ScrollReveal>

          {/* Action CTA Button */}
          <ScrollReveal direction="up" delay={0.12}>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#AA1E23] via-[#C52126] to-[#ED1C24] hover:brightness-110 text-white text-sm sm:text-base font-sans font-medium transition-all duration-300 shadow-xl shadow-[#ED1C24]/30 cursor-pointer group/btn hover:-translate-y-0.5 border border-white/10"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

