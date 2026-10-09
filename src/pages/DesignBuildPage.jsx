import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, Layers, CheckCircle2, ArrowRight, ArrowUpRight,
  ShieldCheck, Eye, ClipboardList, Users, HardHat, Target,
  Sparkles, CheckSquare, Building2, Home, Maximize
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';
import HouseCTA from '../components/HouseCTA';
import ApproachEditorialList from '../components/ApproachEditorialList';

export default function DesignBuildPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Design-Build Services";
  }, []);

  // 5 Execution Methodology Steps with Photographic Media Assets
  const approachSteps = [
    {
      step: '01',
      title: 'Understand & Align',
      desc: 'We begin by establishing core project objectives, budget parameters, and design preferences.',
      icon: Eye,
      image: '/images/process/step-01-vision.jpg',
      phase: 'Phase 01',
    },
    {
      step: '02',
      title: 'Integrated Planning',
      desc: 'We map structural, mechanical, and architectural frameworks prior to final design commitment.',
      icon: ClipboardList,
      image: '/images/process/step-02-planning.jpg',
      phase: 'Phase 02',
    },
    {
      step: '03',
      title: 'Stakeholder Coordination',
      desc: 'We facilitate unified communication between owners, architects, engineers, and specialty vendors.',
      icon: Users,
      image: '/images/process/step-03-coordination.jpg',
      phase: 'Phase 03',
    },
    {
      step: '04',
      title: 'Active Construction',
      desc: 'Our construction management team oversees field execution with rigorous QA/QC oversight.',
      icon: HardHat,
      image: '/images/process/step-04-details.jpg',
      phase: 'Phase 04',
    },
    {
      step: '05',
      title: 'Turnkey Handover',
      desc: 'We ensure a seamless project commissioning and closeout ready for immediate occupancy.',
      icon: Target,
      image: '/images/process/step-05-delivery.jpg',
      phase: 'Phase 05',
    },
  ];

  // 6 Pictorial Benefits Cards
  const pictorialBenefits = [
    {
      step: '01',
      title: 'Streamlined Communication & Transparency',
      image: '/images/process/step-01-vision.jpg',
      alt: 'Design build communication vision',
    },
    {
      step: '02',
      title: 'Integrated Design & Construction',
      image: '/images/process/step-02-planning.jpg',
      alt: 'Integrated design planning',
    },
    {
      step: '03',
      title: 'Early Cost & Feasibility Verification',
      image: '/images/process/step-03-coordination.jpg',
      alt: 'Feasibility coordination',
    },
    {
      step: '04',
      title: 'Faster Delivery & Schedule Control',
      image: '/images/ground-up.jpg',
      alt: 'Faster construction ground up',
    },
    {
      step: '05',
      title: 'Single-Point Contractual Accountability',
      image: '/images/process/step-04-details.jpg',
      alt: 'Architectural details specification',
    },
    {
      step: '06',
      title: 'Budget & Execution Predictability',
      image: '/images/process/step-05-delivery.jpg',
      alt: 'Turnkey project handover',
    },
  ];

  // 4 Applicable Project Types
  const projectTypes = [
    {
      title: 'Custom Residential Projects',
      desc: 'Single-family residences and luxury estates where design and physical execution require close coordination.',
      icon: Home,
    },
    {
      title: 'Commercial Build-Outs',
      desc: 'Tenant improvements and interior spaces where schedule acceleration and execution certainty are critical.',
      icon: Maximize,
    },
    {
      title: 'Ground-Up Developments',
      desc: 'New commercial and residential structures benefiting from early planning and single-source delivery.',
      icon: HardHat,
    },
    {
      title: 'Multifamily & Mixed-Use',
      desc: 'Complex multi-unit developments requiring strict alignment between design, budgeting, and field delivery.',
      icon: Building2,
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
          src="/images/design-build-hero-magnific.jpg"
          alt="Design-Build Architectural Delivery"
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
                  Design-Build Delivery
                </span>
              </nav>

              {/* Display Headline - White 38px Font Size */}
              <h1 className="text-2xl sm:text-3xl md:text-[38px] font-display font-semibold tracking-tight text-white leading-[44px] sm:leading-[44px] md:leading-[44px]">
                <span className="block">One Coordinated Approach From</span>
                <span className="block mt-1 text-white/95">Design Through Delivery.</span>
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
                  src="/images/design-build.jpg"
                  alt="Design-Build Architectural Delivery & Integrated Construction"
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
                Design-Build Leadership
              </h2>

              <TextRevealOnScroll
                text="Traditional delivery models create friction between architectural designers and general contractors. Design-build eliminates the disconnect, offering a unified process where architectural intent, pricing, and constructability move in complete harmony."
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
                        Single-Point Responsibility
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        One unified contract covering architectural design development, engineering, and physical construction delivery.
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
                        Facilitating clear coordination between owners, architects, structural engineers, and specialty trade contractors.
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
                        Quality &amp; Cost Assurance
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        Continuous constructability reviews and dynamic cost modeling to safeguard project schedules and financial margins.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ========================================================
            3. STRATEGIC ADVANTAGES / PICTORIAL BENEFITS (6 Cards Grid)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-widest text-black/80 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>STRATEGIC ADVANTAGES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-black/95 leading-tight">
                Benefits of Design-Build Delivery
              </h2>
              <p className="text-base text-black/65 font-sans leading-relaxed max-w-none">
                A single point of responsibility eliminates design-bid-build friction and protects project outcomes.
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
            4. PROJECTS WELL-SUITED FOR DESIGN-BUILD (4 Cards Grid)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-widest text-black/80 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>APPLICABLE PROJECT TYPES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-black/95 leading-tight">
                Projects Well-Suited for Design-Build
              </h2>
              <p className="text-base text-black/65 font-sans leading-relaxed max-w-none">
                The integrated delivery method is particularly effective for project types requiring high coordination.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((p, idx) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.08} duration={0.7}>
                  <div className="p-7 sm:p-8 rounded-2xl bg-white border border-black/[0.08] hover:border-[#ED1C24]/60 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1 h-full cursor-pointer">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] flex items-center justify-center text-[#ED1C24] group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-lg font-display font-semibold text-black/90 group-hover:text-[#ED1C24] transition-colors leading-snug">
                        {p.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-black/65 font-sans leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            5. HOW WE APPROACH DESIGN-BUILD (Reference Editorial Layout)
            ======================================================== */}
        <ApproachEditorialList
          steps={approachSteps}
          category="How We Approach Design-Build"
          headline="Disciplined development solutions from concept to turnover."
        />

        {/* ========================================================
            6. CALL TO ACTION
            ======================================================== */}
        <ScrollReveal direction="up" delay={0.05}>
          <HouseCTA
            onStartProject={() => setActivePage('contact')}
            title="Ready to Discuss Your Design-Build Project?"
            description="Connect with our team to evaluate how the design-build delivery model can streamline your project's timeline and budget."
            buttonText="Start a Conversation"
          />
        </ScrollReveal>

      </div>
    </div>
  );
}
