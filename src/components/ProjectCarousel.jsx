import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Building2, MapPin, Award, Layers, HardHat,
  Compass, Ruler, Zap, ChevronLeft, ChevronRight
} from 'lucide-react';
import { workProjectsData } from '../data/workProjects';
import ScrollReveal from './ScrollReveal';

/* ─── Light Marquee Ticker ─── */
function MarqueeTicker({ items, speed = 35, reverse = false }) {
  return (
    <div className="relative overflow-hidden w-full py-3 border-y border-[#E3E3DE] bg-white" aria-hidden="true">
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-6 shrink-0 text-xs font-sans tracking-wider text-black/60 uppercase font-semibold"
          >
            {item.icon && (
              <item.icon className="w-3.5 h-3.5 shrink-0 text-[#C41E1E]" />
            )}
            <span>{item.label}</span>
            <span className="text-[#C41E1E]">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TICKER_TOP = [
  { label: 'Ground-Up Development', icon: Building2 },
  { label: 'South Florida Operations', icon: MapPin },
  { label: 'Central Texas Operations', icon: MapPin },
  { label: 'Pre-Development Planning', icon: Compass },
  { label: 'Design-Build Delivery', icon: Layers },
  { label: 'Tenant Improvements', icon: Ruler },
  { label: '35+ Years of Excellence', icon: Award },
  { label: '$800M+ Capital Delivered', icon: Zap },
  { label: 'Residential Development', icon: HardHat },
];

export default function ProjectCarousel({ onSelectProject, onViewAll, bgClassName = "bg-[#F5F2F2]" }) {
  const scrollRef = useRef(null);
  const featuredProjects = workProjectsData;

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -500 : 500, behavior: 'smooth' });
  };

  return (
    <section className={`relative w-full overflow-hidden text-black/90 py-20 sm:py-28 lg:py-32 border-t border-[#E3E3DE] ${bgClassName}`}>
      {/* ── Marquee Ticker ── */}
      <div className="mb-14">
        <MarqueeTicker items={TICKER_TOP} speed={45} reverse={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#E3E3DE]">
            <div className="space-y-3.5 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E3E3DE] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                <span className="text-xs font-sans font-semibold tracking-wider text-black/70 uppercase">
                  Portfolio &amp; Track Record
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight leading-[1.12] text-black/90">
                Experience You Can See{' '}
                <span className="text-[#C41E1E]">in the Work.</span>
              </h2>

              <p className="text-sm sm:text-base text-black/60 leading-relaxed font-sans max-w-2xl">
                Multifamily, hospitality, commercial, and complex ground-up developments delivered across Florida and Texas.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => scrollBy('left')}
                className="w-11 h-11 rounded-full bg-white border border-[#E3E3DE] hover:border-[#C41E1E] hover:text-[#C41E1E] text-black/75 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Previous Projects"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollBy('right')}
                className="w-11 h-11 rounded-full bg-white border border-[#E3E3DE] hover:border-[#C41E1E] hover:text-[#C41E1E] text-black/75 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Next Projects"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={onViewAll}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#141517] hover:bg-[#C41E1E] text-white text-xs sm:text-sm font-sans font-medium transition-all duration-300 shadow-md cursor-pointer ml-2 hover:-translate-y-0.5"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Client Work Showcase Grid ── */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 pt-10"
        >
          {featuredProjects.map((project, idx) => (
            <ScrollReveal key={`${project.id}-${idx}`} delay={idx * 0.08} direction="up" className="h-full">
              <div
                onClick={() => onSelectProject && onSelectProject(project)}
                className="w-full h-full bg-white rounded-[2.25rem] border border-[#E3E3DE] hover:border-[#C41E1E] overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5"
              >
                {/* Pure Photographic Image Frame + Micro Thumbnails */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECECE9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Micro Gallery Thumbnails */}
                  {project.gallery && project.gallery.length > 1 && (
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/20">
                      {project.gallery.slice(0, 3).map((gImg, gIdx) => (
                        <div
                          key={gIdx}
                          className="w-11 h-7 rounded-lg overflow-hidden border border-white/40 opacity-80 group-hover:opacity-100 transition-opacity"
                        >
                          <img
                            src={gImg}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Top Floating Category Tag */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-mono text-[11px] uppercase tracking-wider font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Card Body - Structured Below Image */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4 bg-white">
                  <div className="space-y-2.5">
                    {/* Location Eyebrow */}
                    <div className="flex items-center gap-1.5 text-xs font-sans text-black/50 pb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C41E1E] shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-black/85 group-hover:text-[#C41E1E] transition-colors leading-[1.2]">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    {project.subtitle && (
                      <p className="text-xs font-mono uppercase tracking-wider text-black/50">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* View Details Action Row */}
                  <div className="pt-4 border-t border-[#E3E3DE] flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-sans font-semibold text-black/85 group-hover:text-[#C41E1E] transition-colors inline-flex items-center gap-1.5">
                      Explore Case Study
                      <ArrowRight className="w-3.5 h-3.5 text-[#C41E1E] transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#141517] group-hover:bg-[#C41E1E] text-white flex items-center justify-center transition-colors shadow-xs shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

