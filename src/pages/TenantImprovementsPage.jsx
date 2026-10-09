import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, Sparkles, Building2, Users, HardHat, CheckCircle2,
  Layers, Wrench, ShieldCheck, ClipboardList, Target, ShoppingBag, Eye
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';
import HouseCTA from '../components/HouseCTA';
import ApproachEditorialList from '../components/ApproachEditorialList';

export default function TenantImprovementsPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Tenant Improvement Services";
  }, []);

  // Methodology – Tenant Improvement Pipeline (5 Sequential Lifecycle Stages)
  const approachSteps = [
    {
      step: '01',
      title: 'Space Planning & Shell Assessment',
      desc: 'We analyze existing base-building MEP utilities, lease terms, and physical shell dimensions to validate test-fit space plans before capital commitment.',
      image: '/images/approach/tenant-01-planning.jpg',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Office Transformations & Workplace Strategy',
      desc: 'We coordinate interior architects, acoustic consultants, and technology engineers to deliver high-performance executive suites and agile collaborative workspaces.',
      image: '/images/approach/tenant-01-office.jpg',
      icon: Building2,
    },
    {
      step: '03',
      title: 'Retail Build-Outs & Brand Environments',
      desc: 'Precision trade coordination for customer-facing retail showrooms, specialty lighting arrays, luxury terrazzo floors, and bespoke architectural millwork.',
      image: '/images/approach/tenant-02-retail.jpg',
      icon: ShoppingBag,
    },
    {
      step: '04',
      title: 'Active Fit-Out & MEP Coordination',
      desc: 'Hands-on field superintendents manage light-gauge metal stud framing, complex duct routing, electrical rough-ins, and drywall finishing under tight building rules.',
      image: '/images/approach/tenant-03-renovation.jpg',
      icon: HardHat,
    },
    {
      step: '05',
      title: 'Commissioning & Turnkey Handover',
      desc: 'We complete rigorous life-safety testing, air balance certification, municipal inspections, and white-glove punch-list closeout for immediate operational occupancy.',
      image: '/images/approach/tenant-04-turnkey.jpg',
      icon: Target,
    },
  ];

  // 6 Pictorial Benefits Cards
  const pictorialBenefits = [
    {
      step: '01',
      title: 'Executive Office & Workspace Design',
      image: '/images/projects/executive-office-workspace.png',
      alt: 'Executive corporate office tenant improvement',
    },
    {
      step: '02',
      title: 'Retail & Commercial Fit-Out Planning',
      image: '/images/projects/modern-retail-showroom.png',
      alt: 'Modern commercial retail showroom fit-out',
    },
    {
      step: '03',
      title: 'Interior Architecture Coordination',
      image: '/images/process/step-04-details.jpg',
      alt: 'Interior architectural detailing and specs',
    },
    {
      step: '04',
      title: 'Schedule & Sub-Tier Management',
      image: '/images/process/step-03-coordination.jpg',
      alt: 'Trade sub-contractor timeline management',
    },
    {
      step: '05',
      title: 'Material & Fixture Procurement',
      image: '/images/process/step-02-planning.jpg',
      alt: 'Commercial fixture and material planning',
    },
    {
      step: '06',
      title: 'Turnkey Space Delivery',
      image: '/images/process/step-05-delivery.jpg',
      alt: 'Completed tenant improvement space handover',
    },
  ];

  // 4 Core Capabilities
  const tenantServices = [
    {
      title: 'Corporate Office Fit-Outs',
      desc: 'High-performance office environments designed for productivity, technology integration, and brand identity.',
      icon: Building2,
    },
    {
      title: 'Retail & Showroom Build-Outs',
      desc: 'Commercial retail spaces engineered for customer experience, durable finishes, and optimized layouts.',
      icon: ShoppingBag,
    },
    {
      title: 'Commercial Renovations',
      desc: 'Interior space reconfigurations, MEP upgrades, and architectural enhancements for commercial properties.',
      icon: Wrench,
    },
    {
      title: 'Turnkey Tenant Deliveries',
      desc: 'Comprehensive project management taking spaces from bare shell state to immediate operational readiness.',
      icon: Sparkles,
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
          src="/images/tenant-improvements-hero-magnific.jpg"
          alt="Tenant Improvement Fit-Outs"
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
                  Tenant Improvements
                </span>
              </nav>

              {/* Main Headline - White 38px */}
              <h1 className="text-2xl sm:text-3xl md:text-[38px] font-display font-semibold tracking-tight text-white leading-[44px] sm:leading-[44px] md:leading-[44px]">
                <span className="block">Tailored Spaces.</span>
                <span className="block mt-1 text-white">Seamless Execution.</span>
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
                  src="/images/tenant-improvements.jpg"
                  alt="Tenant Improvement Fit-Out Showcase"
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
                Tenant Improvement Excellence
              </h2>

              <TextRevealOnScroll
                text="Commercial interiors demand tight coordination between building owners, tenant representatives, interior architects, and MEP trade contractors. We streamline pre-construction planning and field execution to guarantee fast-track project delivery."
                className="text-sm sm:text-base text-black/70 font-sans leading-relaxed"
                primaryColor="rgba(0, 0, 0, 0.9)"
                mutedColor="rgba(0, 0, 0, 0.28)"
              />

              {/* 3 Pillar Feature Cards */}
              <div className="pt-2 space-y-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFA] border border-black/[0.08] hover:border-[#ED1C24]/60 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] text-[#ED1C24] flex items-center justify-center shrink-0 group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold font-display text-black/90 group-hover:text-[#ED1C24] transition-colors duration-300">
                        Accelerated Project Schedules
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        Optimized critical path planning to reduce downtime and accelerate operational occupancy.
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
                        Building Management &amp; Landlord Alignment
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        Clear coordination with property managers, zoning authorities, and building engineers.
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
                        Interior QA/QC &amp; Finishes Inspection
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        Meticulous oversight of mechanical, electrical, plumbing, and architectural interior finishes.
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
                Structured leadership that protects your leasehold investment and transforms commercial interior spaces.
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
                <span>Tenant Expertise</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-black/90">
                Tenant Improvement Capabilities
              </h2>
              <p className="text-sm sm:text-base text-black/60 font-sans max-w-none">
                Comprehensive interior fit-out solutions tailored for office, retail, and commercial build-outs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tenantServices.map((svc, idx) => {
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
            5. METHODOLOGY – TENANT IMPROVEMENT PIPELINE
            Reference Editorial Stacking Layout & Interaction
            ======================================================== */}
        <ApproachEditorialList
          steps={approachSteps}
          category="Methodology"
          headline="Tenant Improvement Pipeline"
          description="A structured delivery lifecycle orchestrating commercial interior fit-outs, workplace transformations, and turnkey handovers with total schedule certainty."
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
