import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, MapPin, Calendar, ShieldCheck, CheckCircle2,
  Building2, X, ChevronLeft, ChevronRight, ArrowUpRight, DollarSign, Layers
} from 'lucide-react';
import { workProjectsData } from '../data/workProjects';
import { allProjectsData } from '../data/projects';

const projectsData = [
  ...workProjectsData,
  ...(allProjectsData ? allProjectsData.filter((p) => !workProjectsData.some((wp) => wp.id === p.id)) : []),
];
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';
import HouseCTA from '../components/HouseCTA';

export default function WorkDetailPage({
  project,
  setActivePage,
  setSelectedProject,
}) {
  const getActiveProject = () => {
    if (project && project.highlights) return project;
    if (project && project.id) {
      const found = projectsData.find((p) => p.id === project.id);
      if (found) return found;
    }
    if (typeof window !== 'undefined') {
      const searchStr = window.location.search || (window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');
      const params = new URLSearchParams(searchStr);
      const id = params.get('id');
      if (id) {
        const found = projectsData.find((p) => p.id === id);
        if (found) return found;
      }
    }
    return projectsData[0];
  };

  const activeProj = getActiveProject();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryImages =
    activeProj.gallery && activeProj.gallery.length > 0
      ? activeProj.gallery
      : [activeProj.image];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  return (
    <div className="relative pb-12 sm:pb-16 text-black/90 bg-transparent min-h-screen font-sans selection:bg-[#ED1C24] selection:text-white">
      {/* Subtle Architectural Dot Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none select-none"
        style={{
          backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* ========================================================
          1. HERO HEADER: Pristine Light Architectural Banner
          ======================================================== */}
      <section className="relative w-full pt-28 sm:pt-36 pb-12 sm:pb-16 bg-transparent border-b border-black/[0.08] mb-8 sm:mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                setActivePage('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F6F6F6] hover:bg-white text-black/85 border border-black/[0.08] hover:border-[#ED1C24] hover:text-[#ED1C24] text-xs sm:text-sm font-sans font-medium transition-all shadow-xs cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 text-[#ED1C24] transition-transform group-hover:-translate-x-1" />
              <span>Back to Portfolio</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-black/40">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
              <span>PROJECT ID: {activeProj.id.toUpperCase()}</span>
            </div>
          </div>

          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full bg-[#F5F3F0] border border-[#E8E5E0] text-xs font-sans font-semibold text-black/75">
                  {activeProj.category}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#ED1C24] text-white text-xs font-sans font-semibold shadow-xs">
                  {activeProj.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-display font-semibold text-black/95 tracking-tight leading-[44px] sm:leading-[44px] md:leading-[44px]">
                {activeProj.title}
              </h1>

              {activeProj.subtitle && (
                <p className="text-base sm:text-lg text-black/60 font-sans leading-relaxed max-w-3xl">
                  {activeProj.subtitle}
                </p>
              )}
            </div>
          </ScrollReveal>

          {/* Featured Large Project Banner Showcase */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="relative mt-8 rounded-3xl overflow-hidden border border-[#E8E5E0] bg-[#F7F7F5] shadow-lg group aspect-[16/9] sm:aspect-[21/9] max-h-[520px]">
              <img
                src={activeProj.image}
                alt={activeProj.title}
                className="w-full h-full object-cover select-none transition-transform duration-1000 group-hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Bottom Quick Specs Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 backdrop-blur-md bg-black/40 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-white">
                <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm">
                  {activeProj.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#ED1C24]" />
                      <span>{activeProj.location}</span>
                    </div>
                  )}
                  {activeProj.year && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#ED1C24]" />
                      <span>{activeProj.year}</span>
                    </div>
                  )}
                  {activeProj.sqft && (
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#ED1C24]" />
                      <span>{activeProj.sqft}</span>
                    </div>
                  )}
                </div>

                {activeProj.value && (
                  <div className="px-4 py-1.5 rounded-full bg-[#ED1C24] font-display font-semibold text-xs sm:text-sm shadow-xs">
                    {activeProj.value} Total Volume
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          2. MAIN CONTENT BODY: SPECS & NARRATIVE OVERVIEW
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16 relative z-10">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Overview & Highlights */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Executive Overview with Text Reveal Animation */}
            <ScrollReveal direction="up" delay={0.05}>
              <div className="space-y-6">
                <SectionHeading
                  tag="Executive Overview"
                  title="Project Scope & Vision"
                  titleSize="36px"
                  showRedLine={true}
                  className="mb-4"
                />

                {/* Animated Word-by-Word Text Reveal on Scroll */}
                <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAF8] border border-[#E8E5E0] shadow-sm">
                  <TextRevealOnScroll
                    text={activeProj.overview}
                    mode="word"
                    mutedColor="rgba(0, 0, 0, 0.25)"
                    primaryColor="rgba(0, 0, 0, 0.90)"
                    className="text-base sm:text-lg lg:text-xl font-sans font-medium leading-relaxed tracking-normal"
                  />

                  {activeProj.scope && (
                    <div className="mt-6 pt-6 border-t border-[#E8E5E0] text-sm text-black/70 font-sans leading-relaxed">
                      <span className="font-semibold text-black/90 block mb-1">Contract Execution Scope:</span>
                      {activeProj.scope}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Key Milestones & Features */}
            {activeProj.highlights && activeProj.highlights.length > 0 && (
              <ScrollReveal direction="up" delay={0.1}>
                <div className="space-y-6">
                  <SectionHeading
                    tag="Key Highlights"
                    title="Milestones & Delivery"
                    titleSize="36px"
                    showRedLine={true}
                    className="mb-4"
                  />

                  <div className="grid grid-cols-1 gap-4">
                    {activeProj.highlights.map((highlightText, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -2 }}
                        className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8E5E0] shadow-xs hover:border-[#ED1C24]/40 hover:shadow-md transition-all"
                      >
                        <div className="w-9 h-9 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] text-[#ED1C24] group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs font-mono font-semibold text-[#ED1C24] uppercase tracking-wider block">
                            Milestone 0{i + 1}
                          </span>
                          <span className="text-sm sm:text-base text-black/85 font-sans leading-relaxed block">
                            {highlightText}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Right Column: Specification Card */}
          <div className="lg:col-span-4 sticky top-28">
            <ScrollReveal direction="up" delay={0.15}>
              <div className="p-8 rounded-3xl bg-white border border-[#E8E5E0] shadow-md space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E5E0]">
                  <h3 className="text-xl font-display font-semibold text-black/90">
                    Project Parameters
                  </h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ED1C24]" />
                </div>

                <div className="space-y-5 text-xs sm:text-sm font-sans">
                  {activeProj.location && (
                    <div className="space-y-1">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-black/50 block">Location</span>
                      <span className="text-black/90 font-medium text-sm block">{activeProj.location}</span>
                    </div>
                  )}

                  {activeProj.client && (
                    <div className="space-y-1 pt-3 border-t border-[#E8E5E0]">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-black/50 block">Client / Partner</span>
                      <span className="text-black/90 font-medium text-sm block">{activeProj.client}</span>
                    </div>
                  )}

                  {activeProj.sqft && (
                    <div className="space-y-1 pt-3 border-t border-[#E8E5E0]">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-black/50 block">Gross Area / Units</span>
                      <span className="text-black/90 font-medium text-sm block">{activeProj.sqft}</span>
                    </div>
                  )}

                  {activeProj.value && (
                    <div className="space-y-1 pt-3 border-t border-[#E8E5E0]">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-black/50 block">Project Value</span>
                      <span className="text-[#ED1C24] font-bold text-base block">{activeProj.value}</span>
                    </div>
                  )}

                  {activeProj.year && (
                    <div className="space-y-1 pt-3 border-t border-[#E8E5E0]">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-black/50 block">Delivery Timeline</span>
                      <span className="text-black/90 font-medium text-sm block">{activeProj.year}</span>
                    </div>
                  )}

                  {activeProj.scope && (
                    <div className="pt-3 border-t border-[#E8E5E0]">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-black/50 block">Scope Overview</span>
                      <span className="text-black/60 text-xs leading-relaxed block mt-1">{activeProj.scope}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#E8E5E0]">
                  <div
                    onClick={() => {
                      setActivePage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="home-outline-btn group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider select-none transition-colors duration-400 cursor-pointer w-full text-center"
                  >
                    <span className="home-outline-btn-fill" aria-hidden="true" />
                    <span className="relative z-10 flex items-center justify-center gap-2 text-black/90 group-hover:text-white transition-colors duration-400">
                      <span>Inquire About Similar Build</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ========================================================
            3. GALLERY SECTION: ARCHITECTURAL PHOTO SHOWCASE
            ======================================================== */}
        {galleryImages.length > 1 && (
          <ScrollReveal direction="up" delay={0.05}>
            <section className="space-y-8 pt-8 border-t border-[#E8E5E0]">
              <SectionHeading
                tag="Visual Documentation"
                title="Architectural Gallery"
                titleSize="36px"
                showRedLine={true}
                description="High-resolution visual record of structure, building shell, interior layouts, and completed handover quality."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    whileHover={{ y: -4 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E5E0] bg-[#F7F7F5] shadow-xs hover:shadow-lg cursor-pointer group"
                  >
                    <img
                      src={img}
                      alt={`${activeProj.title} view ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-white/90 text-black font-sans font-medium text-xs shadow-md">
                        Expand Image
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#ED1C24] transition-colors cursor-pointer"
                aria-label="Close image lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              {galleryImages.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                  }}
                  className="absolute left-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#ED1C24] transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {galleryImages.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
                  }}
                  className="absolute right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#ED1C24] transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Image Preview Container */}
              <div
                className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[lightboxIndex]}
                  alt={`${activeProj.title} photo ${lightboxIndex + 1}`}
                  className="w-full h-full object-contain max-h-[85vh]"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-mono">
                  {lightboxIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================
            4. SITE-WIDE CALL TO ACTION
            ======================================================== */}
        <ScrollReveal direction="up" delay={0.05}>
          <HouseCTA
            onStartProject={() => setActivePage('contact')}
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
