import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Compass, HardHat, Layers, Home, Building2,
  ShieldCheck, CheckSquare, Award
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CardBeamBorder from '../components/CardBeamBorder';
import HouseCTA from '../components/HouseCTA';

// =========================================================================
// DATA: OUR SERVICES (5 Approved Items Reused From Home Page)
// =========================================================================
const SCROLL_SERVICES = [
  {
    num: '01',
    id: 'pre-development',
    title: 'Pre-Development Services',
    description: 'Evaluate opportunities, define project requirements, coordinate planning and address key decisions before development begins.',
    ctaText: 'Start With a Stronger Plan',
    icon: Compass,
    image: '/images/services/service-01-pre-development.png',
    theme: 'light',
    targetPage: 'preconstruction',
  },
  {
    num: '02',
    id: 'development-services',
    title: 'Development Services',
    description: 'Experienced project oversight focused on coordination, communication, quality and keeping development moving.',
    ctaText: 'Explore Our Development Services',
    icon: HardHat,
    image: '/images/services/service-02-development-services.png',
    theme: 'dark',
    targetPage: 'ground-up',
  },
  {
    num: '03',
    id: 'design-build',
    title: 'Design-Build',
    description: 'Connect design and development through a coordinated approach that aligns scope, schedule and execution.',
    ctaText: 'Explore Design-Build',
    icon: Layers,
    image: '/images/services/service-03-design-build.png',
    theme: 'light',
    targetPage: 'design-build',
  },
  {
    num: '04',
    id: 'residential-development',
    title: 'Residential Development',
    description: 'Development support for single-family and multifamily projects.',
    ctaText: 'Explore Residential Development',
    icon: Home,
    image: '/images/services/service-04-residential-development.png',
    theme: 'dark',
    targetPage: 'residential',
  },
  {
    num: '05',
    id: 'commercial-development',
    title: 'Commercial Development',
    description: 'Experienced leadership for ground-up developments, commercial improvements and complex projects.',
    ctaText: 'Explore Commercial Development',
    icon: Building2,
    image: '/images/services/service-05-commercial-development.png',
    theme: 'light',
    targetPage: 'tenant-improvements',
  },
];

// =========================================================================
// DATA: EXECUTION STANDARDS (Built on Uncompromising Standards)
// =========================================================================
const EXECUTION_STANDARDS = [
  {
    title: 'Zero-Compromise Safety',
    desc: 'OSHA-30 certified superintendents on every jobsite with daily safety briefings and strict risk management protocols.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparent Guaranteed Pricing',
    desc: 'Open-book cost accounting and proactive value engineering that protects client capital from unexpected change orders.',
    icon: CheckSquare,
  },
  {
    title: 'Direct Senior Leadership',
    desc: 'Our principals stay personally involved in field coordination, resolving potential bottlenecks in hours rather than weeks.',
    icon: Award,
  },
];

// =========================================================================
// SUB-COMPONENT: STACKING SERVICE CARD ITEM (Identical to Home Page)
// =========================================================================
function ScrollServiceCard({ service, index, onSelect }) {
  const cardRef = useRef(null);
  const isDark = service.theme === 'dark';
  const IconComp = service.icon;

  return (
    <div
      ref={cardRef}
      className="sticky mb-3 sm:mb-4 transition-all duration-300"
      style={{
        top: `calc(5.5rem + ${index * 1.25}rem)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border transition-all duration-300 ${
          isDark
            ? 'bg-[#111215] text-white border-white/10'
            : 'bg-white text-black/90 border-black/[0.08]'
        }`}
      >
        <CardBeamBorder borderRadius="24px" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Number, Title, Description, CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#ED1C24] uppercase">
                {service.num}
              </span>
              <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/30' : 'bg-black/20'}`} />
              <div className="flex items-center gap-2">
                <IconComp className="w-4 h-4 text-[#ED1C24]" />
                <span className={`text-xs font-mono uppercase tracking-wider font-medium ${isDark ? 'text-white/60' : 'text-black/50'}`}>
                  Service Division
                </span>
              </div>
            </div>

            <h3
              onClick={() => onSelect && onSelect(service.targetPage)}
              className={`text-2xl sm:text-3xl lg:text-[34px] font-display font-semibold tracking-tight leading-snug cursor-pointer transition-colors ${
                isDark ? 'text-white hover:text-white/85' : 'text-black/95 hover:text-[#ED1C24]'
              }`}
            >
              {service.title}
            </h3>

            <p className={`text-base sm:text-[18px] font-sans leading-relaxed ${
              isDark ? 'text-white/75' : 'text-black/70'
            }`}>
              {service.description}
            </p>

            <div className="pt-2">
              <div
                onClick={() => onSelect && onSelect(service.targetPage)}
                className="home-outline-btn group/btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-colors duration-400 cursor-pointer"
              >
                <span className="home-outline-btn-fill" aria-hidden="true" />
                <span className={`relative z-10 flex items-center gap-3 transition-colors duration-400 ${
                  isDark ? 'text-white' : 'text-black/90 group-hover/btn:text-white'
                }`}>
                  <span>{service.ctaText}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-400 border ${
                    isDark
                      ? 'bg-white/10 group-hover/btn:bg-white/20 text-white border-white/15'
                      : 'bg-black/[0.06] group-hover/btn:bg-white/20 text-black/85 group-hover/btn:text-white border-black/10 group-hover/btn:border-transparent'
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Image Window */}
          <div className="lg:col-span-7">
            <div
              onClick={() => onSelect && onSelect(service.targetPage)}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3.2] sm:aspect-[4/3] w-full bg-black/10 group/img shadow-md cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover select-none transition-transform duration-1000 ease-out group-hover/img:scale-105"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

// =========================================================================
// SUB-COMPONENT: ARCHITECTURAL 5-STEP DELIVERY LIFECYCLE
// =========================================================================
function DeliveryLifecycleSection() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 50%'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const stepIndex = Math.min(Math.floor(latest * 5), 4);
      if (stepIndex >= 0 && stepIndex !== activeStep) {
        setActiveStep(stepIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeStep]);

  const deliveryLifecycle = [
    {
      step: '01',
      title: 'Preconstruction Consultation',
      desc: 'We analyze project goals, site conditions, and budget to define the most effective path forward.',
      image: '/images/process/step-04-details.jpg',
      alt: 'Architectural blueprints and engineering draft specifications',
    },
    {
      step: '02',
      title: 'Design Development & Linear Strategy',
      desc: 'We refine designs, coordinate consultants, and align with regulatory requirements.',
      image: '/images/process/step-01-vision.jpg',
      alt: 'Modern geometric architectural design build structure',
    },
    {
      step: '03',
      title: 'Procurement & Planning',
      desc: 'We manage permitting and bid out the work with proven vendors to ensure quality and cost control.',
      image: '/images/process/step-03-coordination.jpg',
      alt: 'Architect drafting with technical pencil on construction blueprints',
    },
    {
      step: '04',
      title: 'Active Development & Safety Governance',
      desc: 'Our team oversees construction with strict QA/QC protocols and proactive safety measures.',
      image: '/images/ground-up.jpg',
      alt: 'High-rise superstructure commercial building ground up construction',
    },
    {
      step: '05',
      title: 'Commissioning & Turnkey Handover',
      desc: "We ensure a seamless closeout, delivering a space that's ready for occupancy.",
      image: '/images/process/step-05-delivery.jpg',
      alt: 'Pristine architectural interior atrium handover',
    },
  ];

  return (
    <section ref={sectionRef} className="space-y-10 py-4">
      
      {/* 1. SECTION HEADING — Controlled Architectural Scroll Reveal */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-black/[0.06]">
        <div className="space-y-3.5 max-w-3xl">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-wider text-black/80 font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
            <span>PROJECT DELIVERY METHODOLOGY</span>
          </div>

          {/* Main Heading reveals line-by-line / bottom-to-top */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-[36px] lg:text-[36px] font-display font-semibold tracking-tight text-black/95 leading-[40px] sm:leading-[40px] md:leading-[40px]"
          >
            The 5-Step Delivery Lifecycle
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="text-[16px] text-black/65 font-sans leading-relaxed max-w-none sm:whitespace-nowrap"
          >
            Our structured process ensures clarity at every stage — from concept to completion.
          </motion.p>
        </div>
      </div>

      {/* 2. 5 CARDS GRID */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {deliveryLifecycle.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setActiveStep(idx)}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#E8E5E0] hover:border-[#ED1C24]/60 shadow-xs hover:shadow-md transition-all duration-400 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              {/* Image Frame with Mask/Clip-Path & Gentle Scale Settle */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2F2F2]">
                <motion.img
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  src={item.image}
                  alt={item.alt || item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5 bg-white">
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <span className="text-xl font-mono font-bold tracking-tight block text-black/90">
                      {item.step}
                    </span>
                    <div className="h-[2px] w-0 opacity-0 bg-[#ED1C24] group-hover:w-9 group-hover:opacity-100 transition-all duration-300" />
                  </div>

                  <h3 className="text-lg font-display font-semibold text-black/95 group-hover:text-[#ED1C24] transition-colors leading-snug pt-1">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-black/65 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// MAIN SERVICES OVERVIEW PAGE COMPONENT
// =========================================================================
export default function ServicesPage({ setActivePage }) {
  const handleNavigateDetail = (targetPage) => {
    if (setActivePage) {
      setActivePage(targetPage || 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pb-24 bg-transparent text-black/90 min-h-screen font-sans selection:bg-[#ED1C24] selection:text-white">
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
          1. HERO HEADER: Matches Dark Hero Section
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#181818] mb-6 sm:mb-8">
        <img
          src="/images/preconstruction.jpg"
          alt="BNS Development Comprehensive Services"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        {/* Dual Directional Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-5 text-white">
              {/* Architectural Eyebrow Tag */}
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#ED1C24]" />
                <span className="text-xs sm:text-sm font-sans tracking-widest text-[#d4d4d4] font-semibold">
                  Comprehensive Services
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[42px] font-display font-semibold tracking-tight text-white leading-[44px] sm:leading-[44px] md:leading-[44px]">
                <span className="block">Precision Disciplines.</span>
                <span className="block mt-1">Built for Complexity.</span>
              </h1>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          2. WHAT WE DO (Exact Section Reused from Home Page)
          ======================================================== */}
      <section className="relative w-full pt-2 sm:pt-4 pb-8 sm:pb-12 lg:pb-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 5 Stacking Service Cards Reused from Home Page with Full Sticky Interaction */}
          <div className="relative">
            {SCROLL_SERVICES.map((service, idx) => (
              <ScrollServiceCard
                key={service.id}
                service={service}
                index={idx}
                onSelect={handleNavigateDetail}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          3. PROJECT DELIVERY METHODOLOGY & CALL TO ACTION
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16 lg:space-y-20 pt-6 sm:pt-8">
        {/* Project Delivery Methodology (5-Step Lifecycle) */}
        <DeliveryLifecycleSection />

        {/* ========================================================
            4. EXECUTION STANDARDS: Built on Uncompromising Standards
            White Theme matching reference image
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="space-y-3.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-wider text-black/80 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>EXECUTION STANDARDS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-display font-semibold tracking-tight text-black leading-tight sm:leading-[40px]">
                Built on Uncompromising Standards.
              </h2>

              <p className="text-base sm:text-lg text-black/65 font-sans leading-relaxed max-w-2xl">
                Three foundational principles guide every project we accept, ensuring budget certainty, field safety and transparent communication.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {EXECUTION_STANDARDS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} direction="up" delay={idx * 0.1} duration={0.7} className="h-full">
                  <div className="relative overflow-hidden p-8 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border border-black/[0.08] hover:border-[#ED1C24]/60 shadow-xs hover:shadow-xl transition-all duration-500 space-y-6 h-full flex flex-col justify-between group hover:-translate-y-1.5 cursor-pointer">
                    <CardBeamBorder borderRadius="24px" />
                    
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] flex items-center justify-center text-[#ED1C24] group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-xl sm:text-[22px] font-display font-semibold text-black/90 group-hover:text-[#ED1C24] transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-[15px] text-black/65 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono">
                      <span className="text-black/50 uppercase tracking-wider">BNS Standard</span>
                      <span className="text-[#ED1C24] font-semibold tracking-wider">Excellence in Delivery</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Site-wide Call to Action */}
        <ScrollReveal direction="up" delay={0.05}>
          <HouseCTA
            onStartProject={() => handleNavigateDetail('contact')}
          />
        </ScrollReveal>
      </div>

    </div>
  );
}
