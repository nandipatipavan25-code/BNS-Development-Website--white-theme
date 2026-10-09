import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HardHat, ClipboardList, Users, Target, CheckSquare,
  ShieldCheck, Clock, Eye, Building2, Home, Layers, Wrench
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';
import HouseCTA from '../components/HouseCTA';
import ApproachEditorialList from '../components/ApproachEditorialList';

export default function GroundUpPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Ground-Up Construction Services";
  }, []);


  // Section 2: Chronological Ground-Up Delivery Pipeline Stages
  const deliveryPipelineSteps = [
    {
      step: '01',
      title: 'Site Preparation & Civil Earthwork',
      desc: 'Mass clearing, civil rough grading, erosion controls, perimeter fencing, and staging logistics to prepare virgin ground for heavy machinery.',
      image: '/images/approach/pipeline-01-siteprep.jpg',
      icon: HardHat,
    },
    {
      step: '02',
      title: 'Deep Excavation & Shoring Systems',
      desc: 'Engineered earth retention, sheet pile shoring, trenching, and subterranean utility infrastructure down to foundation subgrade.',
      image: '/images/approach/pipeline-02-excavation.jpg',
      icon: ClipboardList,
    },
    {
      step: '03',
      title: 'Foundation Work & Substructure Build',
      desc: 'Precision layout of grade beams, heavy rebar reinforcement grids, formwork erection, and high-strength structural concrete placement.',
      image: '/images/approach/pipeline-03-foundation.jpg',
      icon: ShieldCheck,
    },
    {
      step: '04',
      title: 'Structural Construction & Superstructure',
      desc: 'Multi-story structural steel framing, reinforced concrete cores, composite metal decking, and synchronized crane hoisting operations.',
      image: '/images/approach/pipeline-04-structural.jpg',
      icon: Building2,
    },
    {
      step: '05',
      title: 'Building Enclosure & Facade Envelopment',
      desc: 'High-performance glass curtainwall installation, architectural exterior cladding panels, weatherproofing membranes, and roof envelope sealing.',
      image: '/images/approach/pipeline-05-enclosure.jpg',
      icon: Layers,
    },
    {
      step: '06',
      title: 'Project Delivery & Turnkey Handover',
      desc: 'Comprehensive MEP system balancing, life safety municipal sign-offs, zero-defect punch list closeout, and certificate of occupancy handover.',
      image: '/images/approach/pipeline-06-delivery.jpg',
      icon: Target,
    },
  ];

  // 6 Pictorial Benefits Cards
  const pictorialBenefits = [
    {
      step: '01',
      title: 'Earthwork & Foundation Engineering',
      image: '/images/process/step-01-vision.jpg',
      alt: 'Civil earthwork and foundation engineering planning',
    },
    {
      step: '02',
      title: 'Structural Steel & Superstructure',
      image: '/images/ground-up.jpg',
      alt: 'Commercial building superstructure framing',
    },
    {
      step: '03',
      title: 'Envelope & Architectural Enclosure',
      image: '/images/process/step-04-details.jpg',
      alt: 'Building envelope architectural details',
    },
    {
      step: '04',
      title: 'Site Logistics & Trade Coordination',
      image: '/images/process/step-03-coordination.jpg',
      alt: 'On-site construction management and logistics',
    },
    {
      step: '05',
      title: 'Schedule & Critical Path Control',
      image: '/images/process/step-02-planning.jpg',
      alt: 'Ground-up construction timeline planning',
    },
    {
      step: '06',
      title: 'Commissioning & Turnkey Handover',
      image: '/images/process/step-05-delivery.jpg',
      alt: 'Completed ground-up development handover',
    },
  ];

  // 4 Core Capabilities
  const groundUpServices = [
    {
      title: 'Commercial Superstructures',
      desc: 'Multi-story commercial developments engineered for durability, modern aesthetics, and structural longevity.',
      icon: Building2,
    },
    {
      title: 'Custom Ground-Up Estates',
      desc: 'Luxury single-family residences built from virgin land through foundation, framing, and final finishes.',
      icon: Home,
    },
    {
      title: 'Mixed-Use Developments',
      desc: 'Complex multi-tiered structures integrating ground-floor retail, office spaces, and residential units.',
      icon: Layers,
    },
    {
      title: 'Industrial & Special Builds',
      desc: 'Purpose-built industrial facilities, distribution centers, and custom commercial structures.',
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
          src="/images/ground-up-hero-magnific.jpg"
          alt="Ground-Up Construction Development"
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
                  Ground-Up Development
                </span>
              </nav>

              {/* Main Headline - White 38px */}
              <h1 className="text-2xl sm:text-3xl md:text-[38px] font-display font-semibold tracking-tight text-white leading-[44px] sm:leading-[44px] md:leading-[44px]">
                <span className="block">From Foundation.</span>
                <span className="block mt-1 text-white">To Superstructure.</span>
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
                  src="/images/ground-up.jpg"
                  alt="Ground-Up Construction Superstructure Showcase"
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
                Ground-Up Construction Mastery
              </h2>

              <TextRevealOnScroll
                text="Building from the ground up requires absolute clarity across civil planning, structural foundations, heavy utility connections, and trade sequencing. Our team provides continuous field leadership to protect owner capital and keep projects moving on schedule."
                className="text-sm sm:text-base text-black/70 font-sans leading-relaxed"
                primaryColor="rgba(0, 0, 0, 0.9)"
                mutedColor="rgba(0, 0, 0, 0.28)"
              />

              {/* 3 Pillar Feature Cards */}
              <div className="pt-2 space-y-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFA] border border-black/[0.08] hover:border-[#ED1C24]/60 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] text-[#ED1C24] flex items-center justify-center shrink-0 group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                      <HardHat className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold font-display text-black/90 group-hover:text-[#ED1C24] transition-colors duration-300">
                        Civil &amp; Substructure Management
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        Rigorous supervision of excavation, soil stabilization, concrete pours, and underground utilities.
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
                        Multi-Trade Field Coordination
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        Synchronizing steel erectors, framers, MEP sub-contractors, and envelope specialists.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFA] border border-black/[0.08] hover:border-[#ED1C24]/60 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] text-[#ED1C24] flex items-center justify-center shrink-0 group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold font-display text-black/90 group-hover:text-[#ED1C24] transition-colors duration-300">
                        Safety &amp; Compliance Control
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        Strict enforcement of municipal building codes, structural inspections, and site safety protocols.
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
                Structured leadership that protects your ground-up capital investment from site prep to final handover.
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
                <span>Ground-Up Expertise</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-black/90">
                Ground-Up Capabilities
              </h2>
              <p className="text-sm sm:text-base text-black/60 font-sans max-w-none">
                Comprehensive construction leadership across commercial superstructures, custom estates, and industrial facilities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groundUpServices.map((svc, idx) => {
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
            6. SECTION 2: GROUND-UP DELIVERY PIPELINE
            Reference Editorial Stacking Layout & Interaction
            ======================================================== */}
        <ApproachEditorialList
          steps={deliveryPipelineSteps}
          category="Delivery Pipeline"
          headline="Ground-Up Delivery Pipeline"
          description="Six sequential stages orchestrating virgin site preparation through vertical construction to turnkey building handover."
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
