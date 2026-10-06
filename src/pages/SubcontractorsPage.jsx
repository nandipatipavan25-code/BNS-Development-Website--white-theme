import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, MapPin, HardHat, ShieldCheck, CheckCircle2,
  Building2, Wrench, Layers, ArrowRight, LayoutList,
  LayoutGrid, ArrowUpRight, Sparkles, Filter
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

// Premier vetted subcontractors directory data (exact content preserved)
const SUBCONTRACTORS = [
  {
    id: 'apex-concrete',
    name: 'Apex Structural Concrete',
    shortName: 'ASC',
    trade: 'Structural Concrete & Post-Tensioned Slabs',
    category: 'Structural & Civil',
    region: 'Florida & Texas',
    specialties: ['Post-Tension Slabs', 'Cast-In-Place Walls', 'Foundation Pours'],
  },
  {
    id: 'titan-civil',
    name: 'Titan Civil & Earthworks',
    shortName: 'TCE',
    trade: 'Site Civil, Grading & Deep Excavation',
    category: 'Structural & Civil',
    region: 'Central Texas & Dallas',
    specialties: ['Mass Excavation', 'Site Utilities', 'Laser Grade Profiling'],
  },
  {
    id: 'vanguard-steel',
    name: 'Vanguard Steel Erectors',
    shortName: 'VSE',
    trade: 'Structural Steel & Miscellaneous Metals',
    category: 'Structural & Civil',
    region: 'Florida & Texas',
    specialties: ['Structural Frames', 'Architectural Trusses', 'Stair Towers'],
  },
  {
    id: 'horizon-glazing',
    name: 'Horizon Architectural Glazing',
    shortName: 'HAG',
    trade: 'Curtainwall, Storefronts & Impact Glazing',
    category: 'Envelope & Glazing',
    region: 'South Florida & Tampa',
    specialties: ['Unitized Curtainwall', 'Miami-Dade NOA Systems', 'Storefronts'],
  },
  {
    id: 'voltcore-power',
    name: 'Voltcore Power & Systems',
    shortName: 'VPS',
    trade: 'Commercial Electrical & Low-Voltage BIM',
    category: 'Mechanical & MEP',
    region: 'Florida & Texas',
    specialties: ['Switchgear Integration', '3D BIM Rough-In', 'Life Safety Gen'],
  },
  {
    id: 'patriot-mechanical',
    name: 'Patriot Mechanical & HVAC',
    shortName: 'PMH',
    trade: 'Heavy Commercial HVAC & Hydronic Piping',
    category: 'Mechanical & MEP',
    region: 'Central Florida & Austin',
    specialties: ['VRF Central Systems', 'Chilled Water Loops', 'Rooftop AHUs'],
  },
  {
    id: 'metro-plumbing',
    name: 'Metro Commercial Plumbing',
    shortName: 'MCP',
    trade: 'Civil Underground & High-Rise Domestic Plumbing',
    category: 'Mechanical & MEP',
    region: 'Florida & Texas',
    specialties: ['Underground Mains', 'Booster Stations', 'Multi-Floor Sanitary'],
  },
  {
    id: 'coastal-framing',
    name: 'Coastal Framing & Acoustics',
    shortName: 'CFA',
    trade: 'Heavy Gauge Metal Framing & Drywall Systems',
    category: 'Interior & Finishes',
    region: 'South & Central Florida',
    specialties: ['Structural Light Gauge', 'Level-5 Finish', 'Acoustic Ceilings'],
  },
  {
    id: 'summit-envelope',
    name: 'Summit Building Envelope',
    shortName: 'SBE',
    trade: 'Commercial TPO Roofing & Waterproofing',
    category: 'Envelope & Glazing',
    region: 'Texas & Florida',
    specialties: ['TPO/EPDM Membranes', 'Vapor Barriers', 'Terrace Decks'],
  },
  {
    id: 'shield-fire',
    name: 'Shield Fire Protection',
    shortName: 'SFP',
    trade: 'Commercial Sprinkler Networks & Fire Safety',
    category: 'Mechanical & MEP',
    region: 'Florida & Texas',
    specialties: ['ESFR Systems', 'Pre-Action Wet/Dry', 'Fire Pump Mains'],
  },
  {
    id: 'lonestar-masonry',
    name: 'Lone Star Architectural Masonry',
    shortName: 'LSM',
    trade: 'Structural CMU, Architectural Stone & Brickwork',
    category: 'Structural & Civil',
    region: 'Texas Operations',
    specialties: ['Engineered CMU', 'Texas Native Limestone', 'Cast Stone Accents'],
  },
  {
    id: 'precision-finishes',
    name: 'Precision Architectural Finishes',
    shortName: 'PAF',
    trade: 'Large-Format Porcelain, Terrazzo & Hard Surfaces',
    category: 'Interior & Finishes',
    region: 'Florida & Texas',
    specialties: ['Poured Terrazzo', 'Large-Format Slabs', 'Epoxy Resinous'],
  },
];

const CATEGORIES = [
  'All Trades',
  'Structural & Civil',
  'Envelope & Glazing',
  'Mechanical & MEP',
  'Interior & Finishes',
];

export default function SubcontractorsPage({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('All Trades');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'

  const filteredSubcontractors = useMemo(() => {
    return SUBCONTRACTORS.filter((sub) => {
      const matchesCategory =
        selectedCategory === 'All Trades' || sub.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        sub.name.toLowerCase().includes(q) ||
        sub.trade.toLowerCase().includes(q) ||
        sub.region.toLowerCase().includes(q) ||
        sub.specialties.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative pb-24 overflow-hidden bg-[#FAFAF8] text-black/85 min-h-screen">
      {/* ========================================================
          1. HERO SECTION: Full-Bleed Edge-to-Edge Architectural Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818]">
        <img
          src="/images/ground-up.jpg"
          alt="BNS Project Site Structural Engineering"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-4xl text-white"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[2px] bg-[#C41E1E]" />
              <span className="text-xs sm:text-sm font-sans uppercase tracking-widest text-neutral-300 font-semibold">
                Trusted Trade Partners • Florida &amp; Texas
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
              Our <span className="text-[#C41E1E]">Subcontractors.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-200 font-sans leading-relaxed max-w-2xl">
              A trusted network of premier specialty trade contractors, structural engineers, and craft specialists powering BNS commercial, multifamily, and ground-up builds.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* ========================================================
            3. CONTROL BAR: Clean Filter Tabs, Search & View Toggle
            ======================================================== */}
        <section className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-4 border-b border-[#E6E6E3]">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#181818] text-white font-semibold shadow-sm'
                        : 'bg-white text-black/60 hover:text-black/90 hover:bg-[#F2F2EF] border border-[#E6E6E3]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input & View Mode Toggles */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search trade, partner or specialty..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-[#E6E6E3] text-xs font-sans text-black/90 placeholder-black/40 focus:outline-none focus:border-[#C41E1E] transition-colors shadow-sm"
                />
              </div>

              {/* List / Grid Layout Switcher */}
              <div className="flex items-center p-1 rounded-full bg-white border border-[#E6E6E3] shadow-sm">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-[#181818] text-white'
                      : 'text-black/45 hover:text-black/90'
                  }`}
                  aria-label="List View"
                  title="List Index View"
                >
                  <LayoutList className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#181818] text-white'
                      : 'text-black/45 hover:text-black/90'
                  }`}
                  aria-label="Grid View"
                  title="Card Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Directory Status Counter */}
          <div className="flex items-center justify-between text-xs font-sans text-black/50 px-1">
            <span>
              Showing <strong className="text-black/85 font-semibold">{filteredSubcontractors.length}</strong> Verified Trade Partners
            </span>
            <span className="hidden sm:inline">Enterprise Prequalified Network</span>
          </div>
        </section>

        {/* ========================================================
            4. SUBCONTRACTORS DIRECTORY: Elegant Interactive Row Index
            ======================================================== */}
        <section className="mb-20">
          {filteredSubcontractors.length === 0 ? (
            <div className="py-16 text-center rounded-3xl bg-white border border-[#E6E6E3] p-8 space-y-4 shadow-sm">
              <HardHat className="w-10 h-10 text-black/40 mx-auto" />
              <h3 className="text-xl font-semibold font-display text-black/85">
                No Trade Partners Found
              </h3>
              <p className="text-sm text-black/60 max-w-md mx-auto font-sans leading-relaxed">
                No subcontractors match your active filter. Clear your search or category filter to view the full directory.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Trades');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-full bg-[#181818] hover:bg-[#C41E1E] text-white text-xs font-semibold transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'list' ? (
            /* ── Layout Option A: Editorial Architectural List Index ── */
            <div className="divide-y divide-[#E6E6E3] border-y border-[#E6E6E3] bg-white rounded-3xl overflow-hidden shadow-sm">
              <AnimatePresence>
                {filteredSubcontractors.map((sub, idx) => (
                  <motion.div
                    key={sub.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.02 }}
                    className="p-5 sm:p-6 hover:bg-[#FAFAF8] transition-all duration-200 group flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                  >
                    {/* Left: Monogram + Company Name & Trade */}
                    <div className="flex items-start sm:items-center gap-4 min-w-[320px]">
                      <div className="w-12 h-12 rounded-2xl bg-[#F2F2EF] border border-[#E6E6E3] flex items-center justify-center text-black/85 font-mono font-bold text-xs group-hover:bg-[#C41E1E] group-hover:text-white group-hover:border-[#C41E1E] transition-all shrink-0 shadow-sm">
                        {sub.shortName}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-display font-semibold text-black/85 group-hover:text-[#C41E1E] transition-colors leading-snug">
                            {sub.name}
                          </h3>
                          <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-[#F2F2EF] border border-[#E6E6E3] text-black/60">
                            {sub.category}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-black/60 font-sans">
                          {sub.trade}
                        </p>
                      </div>
                    </div>

                    {/* Right: Region & Specialty Scope Badges */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-6 lg:justify-end">
                      {/* Specialties Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {sub.specialties.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-sans px-2.5 py-1 rounded-lg bg-[#FAFAF8] group-hover:bg-white border border-[#E6E6E3] text-black/65"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      {/* Region Tag */}
                      <div className="flex items-center gap-1.5 text-xs font-mono text-black/50 shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-[#C41E1E]" />
                        <span>{sub.region}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            /* ── Layout Option B: Minimalist Architectural Cards ── */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredSubcontractors.map((sub, idx) => (
                  <motion.div
                    key={sub.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    className="rounded-3xl bg-white border border-[#E6E6E3] hover:border-[#C41E1E] shadow-sm hover:shadow-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      {/* Header: Logo Badge + Region */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#F2F2EF] border border-[#E6E6E3] flex items-center justify-center text-black/85 font-mono font-bold text-sm group-hover:bg-[#C41E1E] group-hover:text-white transition-all shadow-sm">
                          {sub.shortName}
                        </div>

                        <span className="text-[11px] font-sans px-3 py-1 rounded-full bg-[#FAFAF8] border border-[#E6E6E3] text-black/50">
                          {sub.region}
                        </span>
                      </div>

                      {/* Company Name & Trade */}
                      <div>
                        <h3 className="text-xl font-semibold font-display text-black/85 group-hover:text-[#C41E1E] transition-colors leading-tight">
                          {sub.name}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                          {sub.trade}
                        </p>
                      </div>
                    </div>

                    {/* Specialty Scope Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-[#E6E6E3]">
                      {sub.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-sans px-2.5 py-1 rounded-lg bg-[#FAFAF8] border border-[#E6E6E3] text-black/60"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>

        {/* ========================================================
            5. TRADE PREQUALIFICATION & PARTNERSHIP (Clean Architectural Split Banner)
            ======================================================== */}
        <section className="py-12 border-t border-[#E6E6E3]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#C41E1E] inline-block shrink-0" />
                <span className="text-xs sm:text-sm font-sans font-semibold text-black/45 uppercase tracking-widest">
                  Trade Onboarding • Florida &amp; Texas
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-black/90 leading-tight">
                Want to Join the BNS Trade Network?
              </h3>
              <p className="text-sm sm:text-base text-black/60 font-sans leading-relaxed">
                We are actively bidding and awarding packages across Central Texas, Dallas, Tampa, and South Florida. Reliable pay applications, pristine jobsites, and collaborative superintendents guaranteed.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => {
                  if (setActivePage) setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#181818] hover:bg-[#C41E1E] text-white text-sm font-sans font-medium transition-all duration-300 shadow-md cursor-pointer group"
              >
                <span>Join Trade Network</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
