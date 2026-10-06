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
import { jobsData } from '../data/jobs';

export default function CareersPage({ setActivePage, setSelectedJob: setSelectedJobProp }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleViewRole = (job) => {
    if (setSelectedJobProp) setSelectedJobProp(job);
    setActivePage('career-detail', `id=${job.id}`);
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
      icon: <Building2 className="w-5 h-5 text-[#C41E1E]" />,
      title: 'High-Impact Project Portfolio',
      desc: 'Lead landmark ground-up commercial, multifamily, hospitality, and residential developments across high-growth Florida and Texas markets.',
      accent: 'Commercial • Multifamily • Hospitality',
    },
    {
      num: '02',
      icon: <Award className="w-5 h-5 text-[#C41E1E]" />,
      title: 'Direct Executive Mentorship',
      desc: 'Work directly alongside our Founders and Senior Leadership with 35+ years of master contracting and development experience.',
      accent: 'Direct Leadership Access',
    },
    {
      num: '03',
      icon: <Users className="w-5 h-5 text-[#C41E1E]" />,
      title: 'Culture of High Ownership',
      desc: 'We empower our project managers and superintendents with genuine field autonomy, clear communication, and decisiveness.',
      accent: 'Autonomy & Accountability',
    },
    {
      num: '04',
      icon: <TrendingUp className="w-5 h-5 text-[#C41E1E]" />,
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
    <div className="relative pb-24 overflow-hidden bg-[#FAFAF8] text-black/85">
      {/* ========================================================
          1. HERO SECTION: Full-Bleed Architectural Careers Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818] mb-12 sm:mb-16">
        <img
          src="/images/careers-hero.jpg"
          alt="Build Your Career With BNS Development"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-5 text-white">
              {/* Eyebrow Tag */}
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-300 tracking-widest uppercase">
                  Careers at BNS • Florida &amp; Texas Operations
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
                Build Your Career With BNS.<br />
                <span className="text-[#C41E1E]">Be Part of What's Next.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-neutral-200 font-sans leading-relaxed max-w-3xl pt-1">
                At BNS Development, landmark projects are built by professionals who bring experience, personal accountability, and a commitment to doing things right. We invite passionate builders and development leaders to explore our active career opportunities.
              </p>

              {/* Quick Actions & Metrics Ribbon */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('open-positions');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 sm:px-8 py-3.5 rounded-full bg-[#C41E1E] hover:bg-[#A31919] text-white text-xs sm:text-sm font-sans font-medium transition-all shadow-lg shadow-[#C41E1E]/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Open Positions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleGeneralApply}
                  className="px-6 sm:px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-sans font-medium transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join Talent Network</span>
                </button>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-300">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                  Florida &amp; Texas Operations
                </span>
                <span className="text-neutral-500">•</span>
                <span>$800M+ Delivered</span>
                <span className="text-neutral-500">•</span>
                <span>Direct Executive Mentorship</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">

        {/* ========================================================
            2. WHY BNS DEVELOPMENT? (4 Architectural Cards)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.06}>
            <SectionHeading
              tag="The Builder Advantage"
              title="Why Build Your Career at"
              highlight="BNS Development?"
              description="We combine senior executive mentorship, premier development projects, and an entrepreneurial culture where your work makes a visible impact."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {whyBnsCards.map((card, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.08} className="h-full">
                <div className="p-7 rounded-2xl bg-white border border-[#E6E6E3] hover:border-[#C41E1E] shadow-sm hover:shadow-xl flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#F5F3F0] border border-[#E6E6E3] flex items-center justify-center text-[#C41E1E] group-hover:bg-[#C41E1E] group-hover:text-white transition-colors">
                        {card.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-black/40">
                        {card.num}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold font-display text-black/85 group-hover:text-[#C41E1E] transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-black/60 leading-relaxed font-sans">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#F0F0EC]">
                    <span className="text-[11px] font-mono text-black/50 font-medium block truncate">
                      {card.accent}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
              description="Our standard of excellence is built on dedication, clear communication, and collaborative problem-solving."
            />
          </ScrollReveal>

          {/* 6-Card Balanced Editorial Grid (3 columns on desktop, 2 on tablet) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {candidateTraits.map((trait, idx) => (
              <ScrollReveal key={trait.id} direction="up" delay={idx * 0.07} className="h-full">
                <div className="group relative h-full rounded-2xl overflow-hidden bg-white border border-[#E6E6E3] hover:border-[#C41E1E] shadow-sm hover:shadow-xl transition-all duration-300 p-3.5 flex flex-col justify-between hover:-translate-y-1">
                  {/* Photo Frame */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#ECECE9] select-none">
                    <img
                      src={trait.image}
                      alt={trait.alt}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/ground-up.jpg';
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Step Pill */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="w-7 h-7 rounded-full bg-white/95 backdrop-blur-md text-[#C41E1E] text-[11px] font-mono font-bold flex items-center justify-center shadow-sm">
                        {trait.id}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Narrative */}
                  <div className="pt-4 pb-1 px-1 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-display font-semibold text-black/85 group-hover:text-[#C41E1E] transition-colors leading-snug">
                        {trait.title}
                      </h4>
                      <p className="text-xs text-black/60 font-sans leading-relaxed mt-1">
                        {trait.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F0F0EC] flex items-center justify-between mt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-black/40">
                        Standard {trait.id}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E2E2DE] group-hover:bg-[#C41E1E] transition-colors" />
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
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E6E6E3]">
              <SectionHeading
                tag="Open Positions"
                title="Active Job"
                highlight="Opportunities."
                description="Explore open leadership, management, and field positions across our Texas and South Florida regional hubs."
                className="mb-0"
              />
              <div className="shrink-0 mb-1">
                <span className="px-4 py-2 rounded-full bg-white border border-[#E6E6E3] text-black/85 font-mono text-xs font-semibold shadow-sm">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Role' : 'Roles'} Available
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Search & Department Filters Bar */}
          <div className="p-4 rounded-2xl bg-white border border-[#E6E6E3] shadow-sm space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, location, or keyword..."
                className="w-full pl-10 pr-4 py-2 text-xs font-sans rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/90 placeholder-black/40 focus:outline-none focus:border-[#C41E1E] transition-colors"
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
                      ? 'bg-[#C41E1E] text-white font-medium shadow-sm'
                      : 'bg-[#FAFAF8] text-black/60 hover:text-black/90 border border-[#E6E6E3]'
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
              <div className="p-12 text-center rounded-2xl bg-white border border-[#E6E6E3] space-y-3">
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
                  className="mt-2 px-4 py-2 rounded-full bg-[#181818] text-white text-xs font-sans font-medium hover:bg-[#C41E1E] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredJobs.map((job, idx) => (
                <ScrollReveal key={job.id} direction="up" delay={idx * 0.05}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E6E6E3] hover:border-[#C41E1E] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group">
                    <div className="space-y-3 max-w-3xl">
                      {/* Meta Tags Row */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-sans">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#C41E1E]/10 text-[#C41E1E] font-semibold text-[11px]">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-black/60 bg-[#FAFAF8] px-2.5 py-0.5 rounded-md border border-[#E6E6E3] text-[11px]">
                          <MapPin className="w-3 h-3 text-[#C41E1E]" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-black/60 bg-[#FAFAF8] px-2.5 py-0.5 rounded-md border border-[#E6E6E3] text-[11px]">
                          <Clock className="w-3 h-3 text-black/40" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-black/60 bg-[#FAFAF8] px-2.5 py-0.5 rounded-md border border-[#E6E6E3] text-[11px]">
                          {job.experience}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => handleViewRole(job)}
                        className="text-xl sm:text-2xl font-display font-semibold text-black/85 group-hover:text-[#C41E1E] transition-colors cursor-pointer leading-snug"
                      >
                        {job.title}
                      </h3>

                      {/* Summary Description */}
                      <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-sans">
                        {job.description}
                      </p>

                      {/* Salary Range */}
                      <div className="pt-1 flex items-center gap-2 text-xs font-mono text-black/85 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C41E1E]" />
                        <span>Comp: {job.salary}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="shrink-0 flex sm:flex-row lg:flex-col xl:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleViewRole(job)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#FAFAF8] hover:bg-white border border-[#E6E6E3] hover:border-[#C41E1E] text-xs font-sans font-medium text-black/85 hover:text-[#C41E1E] transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
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
                        className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#181818] hover:bg-[#C41E1E] text-white text-xs font-sans font-medium transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
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

        {/* ========================================================
            5. JOIN TALENT NETWORK (High-Impact Split CTA)
            ======================================================== */}
        <section id="join-talent-network">
          <ScrollReveal direction="up" delay={0.06}>
            <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-white border border-[#E6E6E3] shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
                
                {/* Left Column: Heading & Action */}
                <div className="lg:col-span-7 space-y-5">
                  <SectionHeading
                    tag="Talent Network"
                    title="Don't See Your Exact Role?"
                    highlight="Join Our Network."
                    description="We're constantly expanding our team of project managers, superintendents, pre-development engineers, and development associates across Florida and Texas. Send us your resume to start the conversation."
                    className="mb-0"
                  />

                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <button
                      type="button"
                      onClick={handleGeneralApply}
                      className="px-7 py-3.5 rounded-full bg-[#C41E1E] hover:bg-[#A31919] text-white text-xs sm:text-sm font-sans font-semibold transition-all cursor-pointer shadow-md shadow-[#C41E1E]/20 flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit General Application</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Key Commitments */}
                <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#F7F7F5] border border-[#E6E6E3] space-y-4">
                  <span className="text-xs uppercase tracking-widest text-[#C41E1E] font-semibold block font-sans">
                    The BNS Standard
                  </span>
                  
                  <div className="space-y-3 text-xs sm:text-[13px] font-sans text-black/60">
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#C41E1E] shrink-0 mt-0.5" />
                      <span>Direct principal leadership access on every project</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Layers className="w-4 h-4 text-[#C41E1E] shrink-0 mt-0.5" />
                      <span>Robust multi-sector pipeline across Florida &amp; Texas</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Compass className="w-4 h-4 text-[#C41E1E] shrink-0 mt-0.5" />
                      <span>High-agency culture focused on autonomy and craft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>

      {/* ========================================================
          APPLICATION MODAL
          ======================================================== */}
      <AnimatePresence>
        {isApplying && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplying(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white border border-[#E6E6E3] rounded-3xl p-6 sm:p-8 z-10 shadow-2xl max-h-[90vh] overflow-y-auto text-black/85"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E6E3]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C41E1E] font-semibold font-mono">
                    Direct Application
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-black/85 mt-0.5">
                    {selectedJob.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsApplying(false)}
                  className="p-2 rounded-full hover:bg-[#F5F3F0] text-black/50 hover:text-black/85 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#C41E1E]/10 text-[#C41E1E] border border-[#C41E1E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-semibold font-display text-black/85">
                    Application Received
                  </h4>
                  <p className="text-xs sm:text-sm text-black/60 max-w-md mx-auto font-sans leading-relaxed">
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
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/85 placeholder-[#A1A1AA] text-xs sm:text-sm focus:outline-none focus:border-[#C41E1E] transition-colors"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/85 placeholder-[#A1A1AA] text-xs sm:text-sm focus:outline-none focus:border-[#C41E1E] transition-colors"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/85 placeholder-[#A1A1AA] text-xs sm:text-sm focus:outline-none focus:border-[#C41E1E] transition-colors"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/85 placeholder-[#A1A1AA] text-xs sm:text-sm focus:outline-none focus:border-[#C41E1E] transition-colors"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/85 placeholder-[#A1A1AA] text-xs sm:text-sm focus:outline-none focus:border-[#C41E1E] transition-colors"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/85 placeholder-[#A1A1AA] text-xs sm:text-sm focus:outline-none focus:border-[#C41E1E] transition-colors resize-none font-sans"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsApplying(false)}
                      className="px-5 py-2.5 rounded-full bg-[#F5F3F0] hover:bg-[#EAE7E1] text-black/85 text-xs font-sans font-medium transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-2.5 rounded-full bg-[#181818] text-white text-xs font-sans font-medium hover:bg-[#C41E1E] transition-colors shadow-md cursor-pointer"
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
