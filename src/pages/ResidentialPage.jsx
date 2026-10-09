import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home, Building2, Layers, Wrench, CheckCircle2,
  ClipboardList, Users, HardHat, Target, ShieldCheck, Eye, Compass
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';
import HouseCTA from '../components/HouseCTA';
import ApproachEditorialList from '../components/ApproachEditorialList';

export default function ResidentialPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Residential Development Services";
  }, []);

  // 4 Execution Framework Steps (Residential Delivery Pipeline)
  const approachSteps = [
    {
      step: '01',
      title: 'Vision & Feasibility',
      desc: 'We analyze site conditions, zoning regulations, budget parameters, and architectural vision to establish project viability.',
      icon: Eye,
      image: '/images/approach/residential-01-vision.jpg',
      phase: 'Phase 01',
    },
    {
      step: '02',
      title: 'Integrated Pre-Development',
      desc: 'We synchronize architectural drafting, structural engineering, specialty trade procurement, and municipal permitting before ground-breaking.',
      icon: ClipboardList,
      image: '/images/approach/residential-02-predev.jpg',
      phase: 'Phase 02',
    },
    {
      step: '03',
      title: 'Active Field Construction',
      desc: 'Our construction management team directs on-site framing, mechanical systems, and structural execution with rigorous QA/QC oversight.',
      icon: HardHat,
      image: '/images/approach/residential-03-construction.jpg',
      phase: 'Phase 03',
    },
    {
      step: '04',
      title: 'Commissioning & Handover',
      desc: 'We execute comprehensive punch-lists, artisan finish inspections, and white-glove owner walkthroughs for a seamless turnkey transition.',
      icon: Target,
      image: '/images/approach/residential-04-handover.jpg',
      phase: 'Phase 04',
    },
  ];

  // 6 Pictorial Benefits Cards
  const pictorialBenefits = [
    {
      step: '01',
      title: 'Custom Single-Family Precision',
      image: '/images/process/step-01-vision.jpg',
      alt: 'Custom residential architectural design vision',
    },
    {
      step: '02',
      title: 'Multi-Unit Project Coordination',
      image: '/images/process/step-02-planning.jpg',
      alt: 'Multifamily residential project planning',
    },
    {
      step: '03',
      title: 'Proactive Sub-Tier Management',
      image: '/images/process/step-03-coordination.jpg',
      alt: 'Residential trade contractor coordination',
    },
    {
      step: '04',
      title: 'Schedule & Procurement Control',
      image: '/images/process/step-04-details.jpg',
      alt: 'Luxury residential materials and detail specifications',
    },
    {
      step: '05',
      title: 'Budget & Cost Predictability',
      image: '/images/home-strategic-leadership.jpg',
      alt: 'Residential development financial control and estimating',
    },
    {
      step: '06',
      title: 'Turnkey Occupancy Handover',
      image: '/images/process/step-05-delivery.jpg',
      alt: 'Completed luxury residential property delivery',
    },
  ];

  // 4 Core Capabilities
  const residentialServices = [
    {
      title: 'Single-Family Estates',
      desc: 'Luxury custom home builds managed from foundation to high-end architectural finishes.',
      icon: Home,
    },
    {
      title: 'Multifamily Developments',
      desc: 'Multi-unit residential properties requiring synchronized trade schedules and unified quality standards.',
      icon: Building2,
    },
    {
      title: 'Residential Communities',
      desc: 'Master-planned developments and multi-home communities executed with strategic phase management.',
      icon: Layers,
    },
    {
      title: 'Luxury Renovations & Additions',
      desc: 'High-end residential transformations and structural expansions executed with precision oversight.',
      icon: Wrench,
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
          src="/images/residential-hero-magnific.jpg"
          alt="Luxury Residential Development"
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
                  Residential Development
                </span>
              </nav>

              {/* Main Headline - White 38px */}
              <h1 className="text-2xl sm:text-3xl md:text-[38px] font-display font-semibold tracking-tight text-white leading-[44px] sm:leading-[44px] md:leading-[44px]">
                <span className="block">Building Homes.</span>
                <span className="block mt-1 text-white">Developing Communities.</span>
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Page Body Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* ========================================================
            2. SECTION 2: PHILOSOPHY & STRATEGIC ADVANTAGE (2 Columns)
            ======================================================== */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* Left Column: Image Showcase */}
            <ScrollReveal direction="left" delay={0.05} className="lg:col-span-6 h-full flex flex-col">
              <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-black/[0.08] bg-[#181818] shadow-xs group flex-1">
                <img
                  src="/images/residential.jpg"
                  alt="Residential Craftsmanship Showcase"
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
                  Residential Development Leadership
                </h2>

                <TextRevealOnScroll
                  text="From custom luxury homes to multi-unit residential developments, execution requires proactive schedule management, early material procurement, and close sub-tier trade collaboration to keep budgets intact and quality uncompromised."
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
                          Rigorous management of scope, material specs, and construction budgets across all phases.
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
            3. SECTION 3: PICTORIAL BENEFITS GRID (6 Cards)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-widest text-black/80 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>Value Delivery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-black/90">
                Key Benefits of Professional Management
              </h2>
              <p className="text-sm sm:text-base text-black/60 font-sans max-w-none">
                Structured leadership that protects your capital investment and delivers high-end residential spaces.
              </p>
            </div>
          </ScrollReveal>

          {/* 6 Pictorial Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pictorialBenefits.map((item, idx) => (
              <ScrollReveal key={item.step} direction="up" delay={0.05 * (idx + 1)}>
                <div className="group relative rounded-2xl overflow-hidden border border-black/[0.08] bg-[#181818] aspect-[4/3] min-h-[260px] shadow-xs hover:shadow-lg transition-all duration-300 hover:border-[#ED1C24]/60 flex flex-col justify-end">
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.82] group-hover:brightness-95"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Content Container (Clean Title Only) */}
                  <div className="relative z-10 p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-white group-hover:text-[#ED1C24] transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. SECTION 4: CAPABILITIES / OFFERINGS (4 Cards)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-widest text-black/80 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>Residential Expertise</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-black/90">
                Residential Development Capabilities
              </h2>
              <p className="text-sm sm:text-base text-black/60 font-sans max-w-none">
                Experienced leadership tailored across single-family, multi-unit, and community residential developments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentialServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.05 * (idx + 1)}>
                  <div className="p-8 rounded-3xl bg-white border border-black/[0.08] hover:border-[#ED1C24]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 h-full">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] text-[#ED1C24] flex items-center justify-center group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold font-display text-black/90 group-hover:text-[#ED1C24] transition-colors duration-300">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-black/60 font-sans leading-relaxed">
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
            5. METHODOLOGY – RESIDENTIAL DELIVERY PIPELINE
            Reference Editorial Stacking Layout & Interaction
            ======================================================== */}
        <ApproachEditorialList
          steps={approachSteps}
          category="Methodology"
          headline="Residential Delivery Pipeline"
          description="Four structured phases ensuring your project progresses seamlessly from conceptual planning to final key handover."
        />

        {/* ========================================================
            6. CALL TO ACTION SECTION
            ======================================================== */}
        <ScrollReveal direction="up" delay={0.05}>
          <HouseCTA setActivePage={setActivePage} />
        </ScrollReveal>

      </div>
    </div>
  );
}
