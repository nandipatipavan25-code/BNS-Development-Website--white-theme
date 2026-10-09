import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, MapPin, Building2, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';
import HouseCTA from '../components/HouseCTA';
import CardBeamBorder from '../components/CardBeamBorder';
import { workProjectsData } from '../data/workProjects';

export default function WorkPage({ setSelectedProject, setActivePage }) {
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Authentic client work projects catalogue
  const allProjects = workProjectsData;

  const statusOptions = ['All', 'Completed Projects', 'Active Projects', 'Upcoming Projects'];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchStatus = statusFilter === 'All' || p.status === statusFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        (p.category && p.category.toLowerCase().includes(query)) ||
        (p.scope && p.scope.toLowerCase().includes(query));
      return matchStatus && matchQuery;
    });
  }, [allProjects, statusFilter, searchQuery]);

  const handleOpenDetail = (project) => {
    if (setSelectedProject) setSelectedProject(project);
    setActivePage('work-detail', `id=${project.id}`);
  };

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
          1. HERO: Full-Bleed Architectural Portfolio Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#181818] mb-8 sm:mb-10">
        <img
          src="/images/projects/district-36-cover.png"
          alt="BNS Landmark Portfolio Projects"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-105 contrast-[1.02]"
          loading="eager"
        />
        {/* Soft, balanced architectural overlay for text readability while revealing full building image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-5 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#ED1C24]" />
                <span className="text-xs sm:text-sm font-sans tracking-widest text-[#d4d4d4] font-semibold">
                  Portfolio &amp; Project Archive
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-display font-semibold tracking-tight text-white leading-[44px] sm:leading-[44px] md:leading-[44px]">
                Landmark Builds &amp; Master Contracting.<br />
                <span className="text-white">35+ Years Delivered.</span>
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          2. EDITORIAL PORTFOLIO CATALOGUE (Large Editorial Cards)
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-14">
        
        {/* Section Heading matching site-wide pill badge standard */}
        <ScrollReveal direction="up" delay={0.05}>
          <SectionHeading
            tag="Portfolio Archive"
            title="Experience Across Projects"
            description="Explore our completed, active, and upcoming developments across Florida and Central Texas."
            descriptionClassName="max-w-none sm:whitespace-nowrap"
          />
        </ScrollReveal>

        {/* Filter & Search Controls Bar */}
        <ScrollReveal direction="up" delay={0.06}>
          <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E8E5E0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Status Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {statusOptions.map((st) => {
                const isActive = statusFilter === st;
                return (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setStatusFilter(st)}
                    className={`px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#181818] text-white font-medium shadow-xs'
                        : 'bg-[#F6F6F6] text-black/70 hover:text-black hover:bg-[#EFEFEF] border border-black/[0.06]'
                    }`}
                  >
                    {st === 'All' ? 'All Projects' : st}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search project title, city, or scope..."
                className="w-full pl-10 pr-4 py-2 text-xs font-sans rounded-full bg-[#F6F6F6] border border-black/[0.08] text-black/90 placeholder-black/40 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/5 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black/40 hover:text-black"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================
            PROJECTS EDITORIAL SHOWCASE (2-Column Grid matching reference)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  onClick={() => handleOpenDetail(project)}
                  className="group relative cursor-pointer rounded-[2rem] bg-white border border-[#E8E5E0] hover:border-black/20 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <CardBeamBorder borderRadius="32px" />
                  
                  {/* Top Photo Frame with Location Overlay */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECECE9]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                    {/* Location Badge over Image (Matching reference screenshot) */}
                    <div className="absolute bottom-3.5 left-4 z-10 flex items-center gap-1.5 text-white/95 text-xs font-sans max-w-[90%]">
                      <MapPin className="w-3.5 h-3.5 text-[#ED1C24] shrink-0" />
                      <span className="truncate font-medium drop-shadow-xs">{project.location}</span>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6 bg-white">
                    
                    <div className="space-y-3">
                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-black/95 group-hover:text-[#ED1C24] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-xs sm:text-sm text-black/75 font-sans leading-relaxed font-medium">
                        {project.overview}
                      </p>
                    </div>

                    {/* Key Specs Row (Area & Scope/Value matching reference screenshot) */}
                    <div className="border-t border-[#F0EEEB] pt-5 space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono text-black/45 block font-medium">Area</span>
                          <span className="text-xs font-semibold text-black/90 font-mono block truncate">{project.sqft}</span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono text-black/45 block font-medium">Scope / Value</span>
                          <span className="text-xs font-semibold text-[#ED1C24] font-mono block truncate">{project.value}</span>
                        </div>
                      </div>

                      {/* View Specifications Link */}
                      <div className="pt-3 border-t border-[#F0EEEB] flex items-center justify-between text-xs font-sans font-semibold text-black/85 group-hover:text-[#ED1C24] transition-colors">
                        <span>View Specifications</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty Search/Filter State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-white border border-[#E8E5E0] my-8 shadow-xs space-y-3">
            <div className="w-14 h-14 mx-auto rounded-2xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] flex items-center justify-center text-[#ED1C24]">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="text-base font-semibold font-display text-black/85">No Projects Found</h3>
            <p className="text-xs text-black/50 font-sans max-w-sm mx-auto">
              Try adjusting your search terms or filter criteria to explore our catalogue.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatusFilter('All');
                setSearchQuery('');
              }}
              className="mt-2 px-5 py-2 rounded-full bg-[#181818] text-white text-xs font-sans font-medium hover:bg-black transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ========================================================
            3. CALL TO ACTION (Site-Wide Closing CTA)
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
