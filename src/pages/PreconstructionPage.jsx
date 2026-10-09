import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList, CheckSquare, Calendar, Users, HardHat, DollarSign,
  Eye, Target, ShieldCheck, ArrowRight, Building2, Sparkles,
  CheckCircle2, Compass, Layers, FileText
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';
import HouseCTA from '../components/HouseCTA';
import ApproachEditorialList from '../components/ApproachEditorialList';

export default function PreconstructionPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Pre-Development Services";
  }, []);

  // 6 Core Pre-Development Service Offerings
  const predevelopmentServices = [
    {
      title: 'Project Feasibility & Planning',
      desc: 'We analyze site conditions, zoning rules, project goals, and constraints before capital commitment.',
      icon: ClipboardList,
      tag: 'Phase 01',
    },
    {
      title: 'Detailed Scope Development',
      desc: 'A clearly defined architectural & engineering scope establishes realistic expectations and avoids change orders.',
      icon: CheckSquare,
      tag: 'Phase 02',
    },
    {
      title: 'Linear Master Scheduling',
      desc: 'We develop practical construction schedules, mapping critical paths and lead-time items prior to site work.',
      icon: Calendar,
      tag: 'Phase 03',
    },
    {
      title: 'Stakeholder & Team Coordination',
      desc: 'We align owners, architects, engineers, municipal authorities, and trade contractors early in the process.',
      icon: Users,
      tag: 'Phase 04',
    },
    {
      title: 'Constructability & Risk Review',
      desc: 'Our construction leaders identify site challenges, material bottlenecks, and structural risks early.',
      icon: HardHat,
      tag: 'Phase 05',
    },
    {
      title: 'Budget & Cost Modeling',
      desc: 'Early conceptual estimating and value engineering provide budget certainty long before ground is broken.',
      icon: DollarSign,
      tag: 'Phase 06',
    },
  ];

  // 6 Pictorial Benefits Cards
  const pictorialBenefits = [
    {
      step: '01',
      title: 'Risk Identification',
      image: '/images/process/step-04-details.jpg',
      alt: 'Architectural blueprint specifications review',
    },
    {
      step: '02',
      title: 'Scope Clarity',
      image: '/images/process/step-01-vision.jpg',
      alt: 'Architectural planning vision',
    },
    {
      step: '03',
      title: 'Stakeholder Alignment',
      image: '/images/process/step-03-coordination.jpg',
      alt: 'Project team coordination',
    },
    {
      step: '04',
      title: 'Schedule Certainty',
      image: '/images/process/step-02-planning.jpg',
      alt: 'Construction master scheduling',
    },
    {
      step: '05',
      title: 'Cost Control',
      image: '/images/home-strategic-leadership.jpg',
      alt: 'Financial cost modeling meeting',
    },
    {
      step: '06',
      title: 'Seamless Transition',
      image: '/images/process/step-05-delivery.jpg',
      alt: 'Turnkey handover space',
    },
  ];

  // 4 Execution Methodology Steps (Pre-Development Pipeline)
  const approachSteps = [
    {
      step: '01',
      title: 'Feasibility Analysis & Site Evaluation',
      desc: 'We conduct comprehensive site due diligence, analyzing topography, zoning ordinances, utility capacity, and municipal regulations before capital commitment.',
      image: '/images/approach/precon-01-assess.jpg',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Value Engineering & Budget Modeling',
      desc: 'We evaluate structural assemblies, architectural details, and mechanical options through dynamic cost modeling to maximize value and prevent budget drift.',
      image: '/images/approach/precon-02-engineer.jpg',
      icon: ClipboardList,
    },
    {
      step: '03',
      title: 'Trade Partner Alignment & Sub-Tier Bidding',
      desc: 'We coordinate with pre-qualified specialty trade contractors to test real-time market pricing, verify long lead-time materials, and lock in scope packages.',
      image: '/images/approach/precon-03-bid.jpg',
      icon: Users,
    },
    {
      step: '04',
      title: 'Project Planning & Execution Strategy',
      desc: 'We formulate critical-path master schedules, risk mitigation protocols, and a comprehensive master pre-construction documentation package ready for site mobilization.',
      image: '/images/approach/precon-04-execute.jpg',
      icon: Target,
    },
  ];

  return (
    <div className="relative pb-24 text-black/90 bg-transparent min-h-screen font-sans selection:bg-[#ED1C24] selection:text-white">
      {/* Architectural Background Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none select-none"
        style={{
          backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* ========================================================
          1. HERO HEADER: Full-Bleed Architectural Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#181818] mb-8 sm:mb-10 lg:mb-12">
        <img
          src="/images/preconstruction-hero-magnific.jpg"
          alt="Pre-Development Architectural Planning"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        {/* Dual Directional Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-5 text-white">
              {/* Inline Hero Breadcrumb Trail */}
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-sans text-neutral-300 font-medium">
                <button
                  type="button"
                  onClick={() => setActivePage && setActivePage('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span className="text-neutral-500 font-mono">/</span>
                <button
                  type="button"
                  onClick={() => setActivePage && setActivePage('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
                <span className="text-neutral-500 font-mono">/</span>
                <span>
                  Pre-Development Services
                </span>
              </nav>

              {/* Display Headline - 38px Font Size */}
              <h1 className="text-2xl sm:text-3xl md:text-[38px] font-display font-semibold tracking-tight text-white leading-[44px] sm:leading-[44px] md:leading-[44px]">
                <span className="block">Start With a Stronger Plan</span>
                <span className="block mt-1 text-white/95">Before Development Begins.</span>
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          MAIN CONTENT CONTAINER
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* ========================================================
            2. PHILOSOPHY & STRATEGIC ADVANTAGE (2 Columns)
            ======================================================== */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* Left Column: Image Showcase */}
            <ScrollReveal direction="left" delay={0.05} className="lg:col-span-6 h-full flex flex-col">
              <div className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden border border-black/[0.08] bg-[#181818] shadow-xs group flex-1">
                <img
                  src="/images/preconstruction.jpg"
                  alt="Pre-Development Planning & Architectural Feasibility"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>

            {/* Right Column: Content & Key Pillars */}
            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-widest text-black/80 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>Strategic Leadership</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-black/90 leading-tight">
                Pre-Development Leadership
              </h2>

              <TextRevealOnScroll
                text="From site feasibility and zoning validation to comprehensive GMP budgeting, execution requires proactive schedule management, early material procurement, and close sub-tier trade collaboration to keep budgets intact and quality uncompromised."
                className="text-sm sm:text-base text-black/70 font-sans leading-relaxed"
                primaryColor="rgba(0, 0, 0, 0.9)"
                mutedColor="rgba(0, 0, 0, 0.28)"
              />

              {/* 3 Pillar Feature Cards */}
              <div className="pt-2 space-y-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFA] border border-black/[0.08] hover:border-[#ED1C24]/60 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] text-[#ED1C24] flex items-center justify-center shrink-0 group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold font-display text-black/90 group-hover:text-[#ED1C24] transition-colors duration-300">
                        Precision Project Oversight
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        Rigorous management of scope, material specs, and construction budgets across all early planning phases.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFA] border border-black/[0.08] hover:border-[#ED1C24]/60 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] text-[#ED1C24] flex items-center justify-center shrink-0 group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold font-display text-black/90 group-hover:text-[#ED1C24] transition-colors duration-300">
                        Unified Sub-Tier Alignment
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        Facilitating clear coordination between owners, architects, structural engineers, and trade contractors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFA] border border-black/[0.08] hover:border-[#ED1C24]/60 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] text-[#ED1C24] flex items-center justify-center shrink-0 group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold font-display text-black/90 group-hover:text-[#ED1C24] transition-colors duration-300">
                        Quality &amp; Finishes Assurance
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        Uncompromising quality checks during structural framing, mechanical rough-in, and final architectural details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ========================================================
            3. PICTORIAL BENEFITS OF EARLY PLANNING (6 Cards Grid)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-widest text-black/80 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>VALUE DELIVERED</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-black/95 leading-tight">
                Strategic Benefits of Pre-Development
              </h2>
              <p className="text-base text-black/65 font-sans leading-relaxed max-w-2xl">
                Proactive planning aligns every project stakeholder, mitigates financial exposure, and ensures site readiness.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pictorialBenefits.map((item, idx) => (
              <ScrollReveal key={item.step} direction="up" delay={idx * 0.08} duration={0.7}>
                <div className="group relative rounded-2xl overflow-hidden border border-black/[0.08] hover:border-[#ED1C24]/60 bg-white shadow-xs hover:shadow-lg transition-all duration-500 flex flex-col justify-end aspect-[4/3] cursor-pointer hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] select-none"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none transition-opacity duration-300" />

                  <div className="relative z-10 p-6 sm:p-7 text-white">
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-white leading-snug group-hover:text-[#ED1C24] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. WHAT OUR PRE-DEVELOPMENT SERVICES INCLUDE (6 Cards)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-widest text-black/80 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>SCOPE DISCIPLINES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-black/95 leading-tight">
                What Our Pre-Development Services Include
              </h2>
              <p className="text-base text-black/65 font-sans leading-relaxed max-w-none">
                Comprehensive scope packages covering every technical discipline long before breaking ground.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {predevelopmentServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.08} duration={0.7}>
                  <div className="p-7 sm:p-8 rounded-2xl bg-white border border-black/[0.08] hover:border-[#ED1C24]/60 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1 h-full cursor-pointer">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] flex items-center justify-center text-[#ED1C24] group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-semibold text-black/40 group-hover:text-[#ED1C24] transition-colors uppercase tracking-wider">
                          {svc.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-display font-semibold text-black/90 group-hover:text-[#ED1C24] transition-colors leading-snug">
                        {svc.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-black/65 font-sans leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            5. EXECUTION METHODOLOGY – HOW WE APPROACH PRE-DEVELOPMENT
            Reference Editorial Stacking Layout & Interaction
            ======================================================== */}
        <ApproachEditorialList
          steps={approachSteps}
          category="Execution Methodology"
          headline="How We Approach Pre-Development"
          description="A disciplined four-stage methodology to evaluate feasibility, eliminate risk, and establish cost certainty before capital commitment."
        />

        {/* ========================================================
            6. CALL TO ACTION
            ======================================================== */}
        <ScrollReveal direction="up" delay={0.05}>
          <HouseCTA
            onStartProject={() => setActivePage('contact')}
            title="Have a Project in the Planning Phase?"
            description="Whether evaluating a site, preparing a budget, or organizing project requirements, BNS Development brings the expertise to move forward with clarity."
            buttonText="Start Planning With Us"
          />
        </ScrollReveal>

      </div>
    </div>
  );
}
