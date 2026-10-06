import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, MapPin, Building2, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import HouseCTA from '../components/HouseCTA';
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
      const matchQuery =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.scope && p.scope.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchStatus && matchQuery;
    });
  }, [allProjects, statusFilter, searchQuery]);

  const handleOpenDetail = (project) => {
    if (setSelectedProject) setSelectedProject(project);
    setActivePage('work-detail', `id=${project.id}`);
  };

  return (
    <div className="relative pb-20 text-black/90 bg-[#FAFAF8] min-h-screen">
      {/* ========================================================
          HERO: Full-Bleed Architectural Portfolio Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818] mb-10 sm:mb-12">
        <img
          src="/images/projects/district-36.png"
          alt="BNS Landmark Portfolio Projects"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-300 tracking-wider uppercase">
                  Portfolio &amp; Project Archive • Florida &amp; Texas
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
                Our Work &amp; Landmark Builds.<br />
                <span className="text-[#C41E1E]">35+ Years Delivered.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-200 font-sans leading-relaxed max-w-3xl pt-1">
                Explore our curated catalogue of completed, active, and upcoming developments across Florida and Central Texas. Over $800M in delivered capital volume built with uncompromising structural discipline.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                <span>$800M+ Capital Delivered</span>
                <span className="text-neutral-500">•</span>
                <span>100% On-Time CO Handover</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <section className="mb-12">

          {/* Interactive Filter Bar */}
          <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E8E5E0] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8">
            {/* Status Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {statusOptions.map((st) => {
                const isActive = statusFilter === st;
                return (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#C41E1E] text-white font-semibold shadow-sm'
                        : 'bg-white text-black/60 hover:text-black/85 hover:bg-[#F5F3F0] border border-[#E8E5E0]'
                    }`}
                  >
                    {st === 'All' ? 'All Projects' : st}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search project, scope, city..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E5E0] text-xs font-sans text-black/85 placeholder-[#A1A1AA] focus:outline-none focus:border-[#C41E1E] transition-colors"
              />
            </div>
          </div>
        </section>

        {/* ========================================================
            PROJECTS SHOWCASE - Side-by-Side Architectural Master Grid
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-20 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => handleOpenDetail(project)}
                className="group cursor-pointer rounded-[2rem] bg-white border border-[#E8E5E0] hover:border-[#C41E1E] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Visual Top: Pure Photographic Frame + Micro-Thumbnails */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECEAE5] shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle architectural gradient shimmer at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Bottom Gallery Thumbnail Previews */}
                  {project.gallery && project.gallery.length > 1 && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 p-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                      {project.gallery.slice(0, 3).map((gImg, gIdx) => (
                        <div
                          key={gIdx}
                          className="w-10 h-7 rounded overflow-hidden border border-white/40 opacity-80 group-hover:opacity-100 transition-opacity"
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
                </div>

                {/* Editorial Content Bottom */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 space-y-5 bg-white">
                  
                  <div className="space-y-3.5">
                    {/* Category & Status Bar */}
                    <div className="flex items-center justify-between gap-3 text-xs font-sans pb-2.5 border-b border-[#F0EEEB]">
                      <span className="font-semibold uppercase tracking-wider text-[#C41E1E] text-[11px]">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#F5F3F0] text-[11px] font-medium text-black/60">
                        {project.status}
                      </span>
                    </div>

                    {/* Project Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-display font-semibold text-black/85 group-hover:text-[#C41E1E] transition-colors leading-[1.2]">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs font-mono uppercase tracking-wider text-black/50">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Location Badge */}
                    <div className="flex items-center gap-2 text-xs font-sans text-black/60">
                      <MapPin className="w-3.5 h-3.5 text-[#C41E1E] shrink-0" />
                      <span className="truncate max-w-[280px]">{project.location}</span>
                    </div>

                    {/* Overview Body */}
                    <p className="text-sm text-black/60 font-sans leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  {/* Architectural Specifications Grid */}
                  <div className="pt-4 border-t border-[#E8E5E0] grid grid-cols-2 gap-3 text-xs font-sans">
                    {project.sqft && (
                      <div className="space-y-0.5">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-black/50 block">Scale &amp; Area</span>
                        <span className="text-black/85 font-semibold text-sm">{project.sqft}</span>
                      </div>
                    )}
                    {project.value && (
                      <div className="space-y-0.5">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-black/50 block">Scope / Value</span>
                        <span className="text-[#C41E1E] font-bold text-sm">{project.value}</span>
                      </div>
                    )}
                    {project.year && (
                      <div className="space-y-0.5">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-black/50 block">Timeline</span>
                        <span className="text-black/85 font-medium text-xs">{project.year}</span>
                      </div>
                    )}
                    {project.client && (
                      <div className="space-y-0.5">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-black/50 block">Client / Partner</span>
                        <span className="text-black/85 font-medium text-xs truncate block">{project.client}</span>
                      </div>
                    )}
                  </div>

                  {/* View Specifications & Case Study Interactive Row */}
                  <div className="pt-3 border-t border-[#F0EEEB] flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-sans font-semibold text-black/85 group-hover:text-[#C41E1E] transition-colors inline-flex items-center gap-1.5">
                      Explore Case Study &amp; Technical Specs
                      <ArrowRight className="w-3.5 h-3.5 text-[#C41E1E] transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#111111] group-hover:bg-[#C41E1E] text-white flex items-center justify-center transition-all duration-300 shadow-sm shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 p-8 rounded-3xl bg-white border border-[#E8E5E0] my-8">
            <Building2 className="w-12 h-12 text-black/50 mx-auto mb-3" />
            <h3 className="text-lg font-semibold font-display text-black/85 mb-1">No Projects Found</h3>
            <p className="text-xs text-black/60 mb-4">Try clearing your search query or changing filters.</p>
            <button
              onClick={() => {
                setStatusFilter('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-[#C41E1E] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

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
