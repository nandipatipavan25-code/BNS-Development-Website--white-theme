import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, CheckCircle2, ArrowRight, X, Building2,
  Users, TrendingUp, Award, Briefcase, Send, ShieldCheck,
  Layers, Compass, ChevronRight, Filter, Search, Check,
  Clock, DollarSign, ArrowUpRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';
import { jobsData } from '../data/jobs';
import CardBeamBorder from '../components/CardBeamBorder';

export default function CareersPage({ setActivePage, setSelectedJob: setSelectedJobProp }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleViewRole = (job) => {
    if (setSelectedJobProp) setSelectedJobProp(job);
    if (setActivePage) setActivePage('career-detail', `id=${job.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGeneralApply = () => {
    setSelectedJob({
      id: 'general-inquiry',
      title: 'General Career Application',
      department: 'Development & Construction Operations',
      location: 'Florida & Texas Hubs',
    });
    setIsApplying(true);
  };

  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    yearsExp: '',
    coverNote: '',
  });

  const departments = useMemo(() => {
    return ['All', ...new Set(jobsData.map((j) => j.department))];
  }, []);

  const filteredJobs = useMemo(() => {
    return jobsData.filter((j) => {
      const matchDept = selectedDepartment === 'All' || j.department === selectedDepartment;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        j.title.toLowerCase().includes(query) ||
        j.location.toLowerCase().includes(query) ||
        j.department.toLowerCase().includes(query) ||
        j.description.toLowerCase().includes(query);
      return matchDept && matchQuery;
    });
  }, [selectedDepartment, searchQuery]);

  const whyBnsCards = [
    {
      num: '01',
      icon: Building2,
      title: 'High-Impact Project Portfolio',
      desc: 'Lead landmark ground-up commercial, multifamily, hospitality, and residential developments across high-growth markets.',
      accent: 'Commercial • Multifamily • Hospitality',
    },
    {
      num: '02',
      icon: Award,
      title: 'Direct Executive Mentorship',
      desc: 'Work directly alongside our Founders and Senior Leadership with 35+ years of master contracting and development experience.',
      accent: 'Direct Leadership Access',
    },
    {
      num: '03',
      icon: Users,
      title: 'Culture of High Ownership',
      desc: 'We empower our project managers and superintendents with genuine field autonomy, clear communication, and decisiveness.',
      accent: 'Autonomy & Accountability',
    },
    {
      num: '04',
      icon: TrendingUp,
      title: 'Clear Career Acceleration',
      desc: 'We reward dedication with competitive compensation packages, project performance bonuses, and transparent pathways for promotion.',
      accent: 'Bonus & Advancement Pathways',
    },
  ];

  const candidateTraits = [
    {
      id: '01',
      title: 'Take Direct Ownership',
      desc: 'Accountability and pride of craftsmanship on every phase from pre-development through closeout.',
      image: '/images/careers/01-ownership.jpg',
      alt: 'Field construction superintendent taking direct ownership on site',
    },
    {
      id: '02',
      title: 'Communicate Transparently',
      desc: 'Open, proactive communication that builds confidence with owners, architects, and trade partners.',
      image: '/images/careers/02-communication.jpg',
      alt: 'Project managers and architects communicating blueprint specifications clearly',
    },
    {
      id: '03',
      title: 'Collaborative Problem-Solving',
      desc: 'Cross-functional teamwork between field crews and executive leadership to resolve bottlenecks quickly.',
      image: '/images/careers/03-teamwork.jpg',
      alt: 'Collaborative teamwork between field crews and project managers',
    },
    {
      id: '04',
      title: 'Uncompromising Precision',
      desc: 'Meticulous attention to constructability review, P6 schedules, trade specifications, and safety.',
      image: '/images/careers/04-detail.jpg',
      alt: 'Architectural blueprint drafting and precision construction detail inspection',
    },
    {
      id: '05',
      title: 'Solution-Oriented Mindset',
      desc: 'Anticipating project friction early with proactive value engineering and disciplined field sequencing.',
      image: '/images/careers/05-problem-solving.jpg',
      alt: 'Development team resolving technical challenges with digital BIM models',
    },
    {
      id: '06',
      title: 'Commitment to Growth',
      desc: 'Continuous professional mastery, staying ahead of building codes, digital technologies, and safety leadership.',
      image: '/images/careers/07-growth.jpg',
      alt: 'Professional development, executive mentoring, and career growth',
    },
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsApplying(false);
      setSelectedJob(null);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        portfolio: '',
        yearsExp: '',
        coverNote: '',
      });
    }, 2800);
  };

  return (
    <div className="relative pb-24 overflow-hidden bg-transparent text-black/90 min-h-screen font-sans selection:bg-[#ED1C24] selection:text-white">
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
          1. HERO SECTION: Pristine Architectural Light Banner
          ======================================================== */}
      {/* ========================================================
          1. HERO SECTION: Full-Bleed Dark Architectural Banner (About Us Style)
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#181818] mb-8 sm:mb-10">
        <img
          src="/images/careers-hero.jpg"
          alt="Build Your Career With BNS Development"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        {/* Dual Directional Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-5 text-white">
              {/* Eyebrow Tag */}
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#ED1C24]" />
                <span className="text-xs sm:text-sm font-sans tracking-widest text-[#d4d4d4] font-semibold">
                  Careers at BNS Development
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[42px] font-display font-semibold tracking-tight text-white leading-[44px] sm:leading-[44px] md:leading-[44px]">
                <span className="block">Build Your Career With BNS.</span>
                <span className="block text-white mt-1">Be Part of What's Next.</span>
              </h1>

              {/* Quick Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <div
                  onClick={() => {
                    const el = document.getElementById('open-positions');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="home-outline-btn group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs sm:text-sm font-sans font-medium select-none transition-colors duration-400 cursor-pointer text-white"
                >
                  <span className="home-outline-btn-fill" aria-hidden="true" />
                  <span className="relative z-10 flex items-center gap-3">
                    <span>Explore Open Positions</span>
                    <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-400 border border-white/20">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16 lg:space-y-20 pt-2 sm:pt-4">

        {/* ========================================================
            2. WHY BNS DEVELOPMENT? (4 Architectural Cards)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.06}>
            <SectionHeading
              tag="The Builder Advantage"
              title="Why Build Your Career at"
              highlight="BNS Development?"
              titleSize="36px"
              description="We combine senior executive mentorship, premier development projects, and an entrepreneurial culture where your work makes a visible impact."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {whyBnsCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.08} className="h-full">
                  <div className="group relative overflow-hidden p-7 rounded-2xl bg-[#FAFAF8] hover:bg-white border border-black/[0.08] hover:border-black/20 shadow-xs hover:shadow-xl flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1">
                    <CardBeamBorder borderRadius="16px" />
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] flex items-center justify-center text-[#ED1C24] group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                          {typeof IconComp === 'function' || (typeof IconComp === 'object' && IconComp !== null) ? (
                            <IconComp className="w-5 h-5 transition-colors duration-300" />
                          ) : (
                            card.icon
                          )}
                        </div>
                        <span className="text-xs font-mono font-bold text-black/40">
                          {card.num}
                        </span>
                      </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold font-display text-black/90 group-hover:text-black transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-black/65 leading-relaxed font-sans">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-black/[0.06]">
                    <span className="text-[11px] font-mono text-black/50 font-medium block truncate">
                      {card.accent}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
          </div>
        </section>

        {/* ========================================================
            3. WHO WE LOOK FOR (Clean 6-Card Editorial Grid)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.06}>
            <SectionHeading
              tag="Core Standards"
              title="We Look for"
              highlight="People Who"
              titleSize="36px"
              description="Our standard of excellence is built on dedication, clear communication, and collaborative problem-solving."
            />
          </ScrollReveal>

          {/* 6-Card Editorial Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {candidateTraits.map((trait, idx) => (
              <ScrollReveal key={trait.id} direction="up" delay={idx * 0.07} className="h-full">
                <div className="group relative overflow-hidden h-full rounded-2xl bg-[#FAFAF8] hover:bg-white border border-black/[0.08] hover:border-black/20 shadow-xs hover:shadow-xl transition-all duration-300 p-3.5 flex flex-col justify-between hover:-translate-y-1">
                  <CardBeamBorder borderRadius="16px" />
                  {/* Photo Frame */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#F2F2F2] select-none">
                    <img
                      src={trait.image}
                      alt={trait.alt}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/ground-up.jpg';
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                    {/* Step Pill */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="w-7 h-7 rounded-full bg-white/95 backdrop-blur-md text-black/85 text-[11px] font-mono font-bold flex items-center justify-center shadow-xs border border-black/[0.06]">
                        {trait.id}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Narrative */}
                  <div className="pt-4 pb-1 px-1 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-display font-semibold text-black/90 group-hover:text-black transition-colors leading-snug">
                        {trait.title}
                      </h4>
                      <p className="text-xs text-black/65 font-sans leading-relaxed mt-1">
                        {trait.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between mt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-black/40">
                        Standard {trait.id}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-[#ED1C24] transition-colors" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. OPEN POSITIONS (Interactive Opportunity Board)
            ======================================================== */}
        <section id="open-positions" className="space-y-8 scroll-mt-28">
          <ScrollReveal direction="up" delay={0.06}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/[0.08]">
              <SectionHeading
                tag="Open Positions"
                title="Active Job"
                highlight="Opportunities."
                titleSize="36px"
                description="Explore open leadership, management, and field positions across our regional hubs."
                className="mb-0"
              />
              <div className="shrink-0 mb-1">
                <span className="px-4 py-2 rounded-full bg-[#F6F6F6] border border-black/[0.08] text-black/85 font-mono text-xs font-semibold shadow-xs">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Role' : 'Roles'} Available
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Search & Department Filters Bar */}
          <div className="p-4 rounded-2xl bg-[#F6F6F6] border border-black/[0.08] shadow-xs space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, location, or keyword..."
                className="w-full pl-10 pr-4 py-2 text-xs font-sans rounded-xl bg-white border border-black/[0.08] text-black/90 placeholder-black/40 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/5 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-black/45 hover:text-black/90"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all cursor-pointer ${
                    selectedDepartment === dept
                      ? 'bg-[#181818] text-white font-medium shadow-xs'
                      : 'bg-white text-black/65 hover:text-black/90 border border-black/[0.08] hover:border-black/20'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings Cards */}
          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-white border border-black/[0.08] space-y-3">
                <Briefcase className="w-8 h-8 text-black/40 mx-auto" />
                <h4 className="text-base font-display font-semibold text-black/85">
                  No matching positions found
                </h4>
                <p className="text-xs text-black/50 font-sans max-w-sm mx-auto">
                  Try adjusting your search terms or filter criteria, or submit a general application.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDepartment('All');
                  }}
                  className="mt-2 px-4 py-2 rounded-full bg-[#181818] text-white text-xs font-sans font-medium hover:bg-black transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredJobs.map((job, idx) => (
                <ScrollReveal key={job.id} direction="up" delay={idx * 0.05}>
                  <div className="group relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.08] hover:border-black/20 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <CardBeamBorder borderRadius="16px" />
                    <div className="space-y-3 max-w-3xl">
                      {/* Meta Tags Row */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-sans">
                        <span className="px-2.5 py-0.5 rounded-md bg-black/[0.05] text-black/80 font-medium border border-black/[0.06] text-[11px]">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-black/70 bg-[#F6F6F6] px-2.5 py-0.5 rounded-md border border-black/[0.06] text-[11px]">
                          <MapPin className="w-3 h-3 text-black/45" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-black/70 bg-[#F6F6F6] px-2.5 py-0.5 rounded-md border border-black/[0.06] text-[11px]">
                          <Clock className="w-3 h-3 text-black/40" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-black/70 bg-[#F6F6F6] px-2.5 py-0.5 rounded-md border border-black/[0.06] text-[11px]">
                          {job.experience}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => handleViewRole(job)}
                        className="text-xl sm:text-2xl font-display font-semibold text-black/90 group-hover:text-black transition-colors cursor-pointer leading-snug"
                      >
                        {job.title}
                      </h3>

                      {/* Summary Description */}
                      <p className="text-xs sm:text-sm text-black/65 leading-relaxed font-sans">
                        {job.description}
                      </p>

                      {/* Salary Range */}
                      <div className="pt-1 flex items-center gap-2 text-xs font-mono text-black/85 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                        <span>Comp: {job.salary}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="shrink-0 flex sm:flex-row lg:flex-col xl:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleViewRole(job)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#F6F6F6] hover:bg-white border border-black/[0.08] hover:border-black/20 text-xs font-sans font-medium text-black/85 hover:text-black transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                      >
                        <span>Role Specs</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedJob(job);
                          setIsApplying(true);
                        }}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#181818] hover:bg-black text-white text-xs font-sans font-medium transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
        </section>



      </div>

      {/* ========================================================
          APPLICATION MODAL (Pristine Light Design)
          ======================================================== */}
      <AnimatePresence>
        {isApplying && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplying(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white border border-black/[0.08] rounded-3xl p-6 sm:p-8 z-10 shadow-2xl max-h-[90vh] overflow-y-auto text-black/90"
            >
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-black/60 font-semibold font-mono inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                    Direct Application
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-black/90 mt-0.5">
                    {selectedJob.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsApplying(false)}
                  className="p-2 rounded-full hover:bg-[#F6F6F6] text-black/50 hover:text-black/90 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] flex items-center justify-center mx-auto text-[#ED1C24]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-semibold font-display text-black/90">
                    Application Received
                  </h4>
                  <p className="text-xs sm:text-sm text-black/65 max-w-md mx-auto font-sans leading-relaxed">
                    Thank you for your submission for {selectedJob.title}. Our executive team will review your qualifications and reach out directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4 pt-4">
                  <div>
                    <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Bradford Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F6F6F6] border border-transparent text-black/90 placeholder-black/40 text-xs sm:text-sm focus:outline-none focus:border-black/30 focus:bg-white focus:ring-1 focus:ring-black/5 transition-colors font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F6F6F6] border border-transparent text-black/90 placeholder-black/40 text-xs sm:text-sm focus:outline-none focus:border-black/30 focus:bg-white focus:ring-1 focus:ring-black/5 transition-colors font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(512) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F6F6F6] border border-transparent text-black/90 placeholder-black/40 text-xs sm:text-sm focus:outline-none focus:border-black/30 focus:bg-white focus:ring-1 focus:ring-black/5 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                        Years of Industry Experience *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.yearsExp}
                        onChange={(e) => setFormData({ ...formData, yearsExp: e.target.value })}
                        placeholder="e.g. 7+ Years"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F6F6F6] border border-transparent text-black/90 placeholder-black/40 text-xs sm:text-sm focus:outline-none focus:border-black/30 focus:bg-white focus:ring-1 focus:ring-black/5 transition-colors font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                        LinkedIn / Portfolio URL
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F6F6F6] border border-transparent text-black/90 placeholder-black/40 text-xs sm:text-sm focus:outline-none focus:border-black/30 focus:bg-white focus:ring-1 focus:ring-black/5 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                      Brief Note / Career Summary
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Share a brief overview of your background, recent projects, or career objectives..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F6F6F6] border border-transparent text-black/90 placeholder-black/40 text-xs sm:text-sm focus:outline-none focus:border-black/30 focus:bg-white focus:ring-1 focus:ring-black/5 transition-colors resize-none font-sans"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsApplying(false)}
                      className="px-5 py-2.5 rounded-full bg-[#F6F6F6] hover:bg-[#EAEAE8] text-black/85 text-xs font-sans font-medium transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-2.5 rounded-full bg-[#181818] text-white text-xs font-sans font-medium hover:bg-black transition-colors shadow-sm cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
