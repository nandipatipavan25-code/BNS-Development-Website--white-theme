import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, MapPin, Calendar, ShieldCheck, CheckCircle2,
  Building2, X, ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react';
import { workProjectsData as projectsData } from '../data/workProjects';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
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
    <div className="relative pb-20 text-black/90 bg-[#FAFAF8] min-h-screen">
      {/* ========================================================
          1. HERO SECTION: Full-Bleed Single Large Project Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex flex-col justify-end pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818] mb-12 sm:mb-16">
        <img
          src={activeProj.image}
          alt={activeProj.title}
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <div className="flex items-center">
            <button
              onClick={() => {
                setActivePage('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-sans font-medium text-white transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span>Back to Portfolio</span>
            </button>
          </div>

          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4 text-white">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-sans font-medium">
                  {activeProj.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#C41E1E] text-xs font-sans font-medium">
                  {activeProj.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold text-white tracking-tight">
                {activeProj.title}
              </h1>

              {activeProj.subtitle && (
                <p className="text-sm sm:text-base text-neutral-200 font-sans">
                  {activeProj.subtitle}
                </p>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* ========================================================
            2. PROJECT SPECS & OVERVIEW
            ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Overview & Highlights */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#C41E1E] font-semibold font-sans block">
                Executive Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-black/85">
                Project Scope &amp; Vision
              </h2>
              <p className="text-base sm:text-lg text-black/60 font-sans leading-relaxed">
                {activeProj.overview}
              </p>
            </div>

            {/* Highlights */}
            {activeProj.highlights && activeProj.highlights.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-[#E8E5E0]">
                <span className="text-xs uppercase tracking-wider text-[#C41E1E] font-semibold font-sans block">
                  Key Milestones &amp; Features
                </span>
                <div className="space-y-3">
                  {activeProj.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E8E5E0] shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#C41E1E] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-black/85 font-sans leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Specification Card */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl bg-white border border-[#E8E5E0] shadow-md space-y-6">
              <h3 className="text-xl font-display font-semibold text-black/85 pb-4 border-b border-[#E8E5E0]">
                Project Parameters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-sans">
                {activeProj.location && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-black/50 block">Location</span>
                    <span className="text-black/85 font-semibold text-sm">{activeProj.location}</span>
                  </div>
                )}

                {activeProj.client && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-black/50 block">Client / Partner</span>
                    <span className="text-black/85 font-semibold text-sm">{activeProj.client}</span>
                  </div>
                )}

                {activeProj.sqft && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-black/50 block">Gross Area / Units</span>
                    <span className="text-black/85 font-semibold text-sm">{activeProj.sqft}</span>
                  </div>
                )}

                {activeProj.value && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-black/50 block">Project Value / Scope</span>
                    <span className="text-[#C41E1E] font-bold text-sm">{activeProj.value}</span>
                  </div>
                )}

                {activeProj.year && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-black/50 block">Delivery Year</span>
                    <span className="text-black/85 font-semibold text-sm">{activeProj.year}</span>
                  </div>
                )}

                {activeProj.scope && (
                  <div className="pt-2 border-t border-[#E8E5E0]">
                    <span className="text-[10px] uppercase tracking-wider text-black/50 block">Scope Overview</span>
                    <span className="text-black/60 text-xs leading-relaxed block mt-1">{activeProj.scope}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#E8E5E0]">
                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-full bg-[#171717] hover:bg-[#C41E1E] text-white text-xs font-sans font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  Inquire About Similar Build
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. GALLERY SECTION
            ======================================================== */}
        {galleryImages.length > 1 && (
          <section className="space-y-6 pt-6">
            <span className="text-xs uppercase tracking-wider text-[#C41E1E] font-semibold font-sans block">
              Architectural Gallery
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E5E0] bg-[#ECEAE5] shadow-sm hover:shadow-md cursor-pointer group"
                >
                  <img
                    src={img}
                    alt={`${activeProj.title} gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-[#C41E1E] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[lightboxIndex]}
                  alt="Enlarged view"
                  className="w-full h-full object-contain max-h-[85vh]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================
            CALL TO ACTION
            ======================================================== */}
        <HouseCTA
          onStartProject={() => setActivePage('contact')}
        />
      </div>
    </div>
  );
}
