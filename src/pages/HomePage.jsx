import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Compass, HardHat, Layers, Home, Building2, MapPin
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { workProjectsData } from '../data/workProjects';
import BeyondExperienceSection from '../components/BeyondExperienceSection';

// =========================================================================
// DATA: OUR SERVICES (5 Approved Items)
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
  },
];

// =========================================================================
// DATA: OUR APPROACH (4 Approved Principles)
// =========================================================================
const APPROACH_ITEMS = [
  {
    num: '01',
    title: 'Start Early',
    description: 'Address the right questions before development begins.',
    image: '/images/process/step-01-vision.jpg',
  },
  {
    num: '02',
    title: 'Stay Connected',
    description: 'Keep owners, consultants, contractors and project partners aligned.',
    image: '/images/process/step-02-planning.jpg',
  },
  {
    num: '03',
    title: 'Solve Problems',
    description: 'Identify challenges, evaluate options and keep decisions moving.',
    image: '/images/process/step-03-coordination.jpg',
  },
  {
    num: '04',
    title: 'Stay Accountable',
    description: 'Remain focused on the project from planning through completion.',
    image: '/images/process/step-05-delivery.jpg',
  },
];



// =========================================================================
// SUB-COMPONENT: OUR APPROACH ROW ITEM (Scroll-Driven Interactive Timeline)
// =========================================================================
function ApproachRowItem({ item, index, isLast }) {
  const rowRef = useRef(null);
  const isOdd = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start 85%', 'center 45%'],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dotScale = useTransform(scrollYProgress, [0, 0.25], [0.85, 1.1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);

  return (
    <div ref={rowRef} className="w-full">
      {/* Desktop Layout (md+) */}
      <div className="hidden md:flex flex-row items-stretch gap-8 lg:gap-14 min-h-[400px]">
        {/* Left Column */}
        {isOdd ? (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-[460px] flex flex-col items-end text-right justify-start pt-1 gap-3.5"
          >
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#ED1C24] uppercase">
              {item.num}
            </span>
            <h3 className="font-display text-2xl lg:text-[30px] font-semibold text-black/95 tracking-tight leading-snug">
              {item.title}
            </h3>
            <p className="font-sans text-sm lg:text-[15px] text-black/70 leading-relaxed max-w-md text-right">
              {item.description}
            </p>
            <div className="w-full h-[250px] lg:h-[270px] rounded-lg overflow-hidden relative shadow-xl bg-[#F0F0EE] mt-2 group border border-black/[0.06]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.95] contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </motion.div>
        ) : (
          <div className="flex-1 max-w-[460px]" aria-hidden="true" />
        )}

        {/* Center Spine */}
        <div className="w-8 flex flex-col items-center shrink-0 relative">
          <motion.div
            style={{ scale: dotScale, opacity: dotOpacity }}
            className="w-4 h-4 rounded-full bg-[#ED1C24] ring-4 ring-[#ED1C24]/20 shadow-[0_0_14px_rgba(237,28,36,0.6)] z-10 shrink-0 mt-2 transition-shadow"
          />
          <div className="w-[2px] bg-black/[0.08] relative overflow-hidden flex-1 my-2 min-h-[320px]">
            <motion.div
              style={{ scaleY: lineScaleY, originY: 0 }}
              className="w-full h-full bg-[#ED1C24]"
            />
          </div>
          {isLast && (
            <motion.div
              style={{ opacity: dotOpacity }}
              className="w-2.5 h-2.5 rounded-full bg-[#ED1C24]/80 shrink-0 mb-1 ring-2 ring-[#ED1C24]/30"
            />
          )}
        </div>

        {/* Right Column */}
        {!isOdd ? (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-[460px] flex flex-col items-start text-left justify-start pt-1 gap-3.5"
          >
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#ED1C24] uppercase">
              {item.num}
            </span>
            <h3 className="font-display text-2xl lg:text-[30px] font-semibold text-black/95 tracking-tight leading-snug">
              {item.title}
            </h3>
            <p className="font-sans text-sm lg:text-[15px] text-black/70 leading-relaxed max-w-md text-left">
              {item.description}
            </p>
            <div className="w-full h-[250px] lg:h-[270px] rounded-lg overflow-hidden relative shadow-xl bg-[#F0F0EE] mt-2 group border border-black/[0.06]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.95] contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </motion.div>
        ) : (
          <div className="flex-1 max-w-[460px]" aria-hidden="true" />
        )}
      </div>

      {/* Mobile Layout (< md) */}
      <div className="flex md:hidden flex-row items-stretch gap-4 sm:gap-6 pb-12 w-full">
        <div className="w-6 flex flex-col items-center shrink-0 relative">
          <motion.div
            style={{ scale: dotScale, opacity: dotOpacity }}
            className="w-3.5 h-3.5 rounded-full bg-[#ED1C24] ring-3 ring-[#ED1C24]/20 shadow-[0_0_10px_rgba(237,28,36,0.6)] z-10 shrink-0 mt-1"
          />
          <div className="w-[2px] bg-black/[0.08] relative overflow-hidden flex-1 my-2">
            <motion.div
              style={{ scaleY: lineScaleY, originY: 0 }}
              className="w-full h-full bg-[#ED1C24]"
            />
          </div>
          {isLast && (
            <div className="w-2 h-2 rounded-full bg-[#ED1C24]/80 shrink-0 mb-1" />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col items-start text-left gap-3"
        >
          <span className="font-mono text-xs font-semibold tracking-wider text-[#ED1C24] uppercase">
            {item.num}
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-black/95 tracking-tight">
            {item.title}
          </h3>
          <p className="font-sans text-sm text-black/70 leading-relaxed">
            {item.description}
          </p>
          <div className="w-full h-[220px] sm:h-[250px] rounded-lg overflow-hidden relative shadow-md bg-[#F0F0EE] mt-1 border border-black/[0.06]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover brightness-[0.95] contrast-[1.05]"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// =========================================================================
// SUB-COMPONENT: STACKING SERVICE CARD ITEM
// =========================================================================
function ScrollServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const isDark = service.theme === 'dark';
  const IconComp = service.icon;

  return (
    <div
      ref={cardRef}
      className="sticky mb-12 sm:mb-16 transition-all duration-300"
      style={{
        top: `calc(5.5rem + ${index * 1.25}rem)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border transition-all duration-300 ${
          isDark
            ? 'bg-[#111215] text-white border-white/10'
            : 'bg-white text-black/90 border-black/[0.08]'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Number, Title, Description, Dummy CTA */}
          <div className="lg:col-span-6 space-y-6">
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

            <h3 className={`text-2xl sm:text-3xl lg:text-[34px] font-display font-semibold tracking-tight leading-snug ${
              isDark ? 'text-white' : 'text-black/95'
            }`}>
              {service.title}
            </h3>

            <p className={`text-sm sm:text-base font-sans leading-relaxed ${
              isDark ? 'text-white/75' : 'text-black/70'
            }`}>
              {service.description}
            </p>

            <div className="pt-2">
              <div
                className="home-outline-btn group/btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-colors duration-400"
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
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3.2] sm:aspect-[4/3] w-full bg-black/10 group/img shadow-md">
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
// SUB-COMPONENT: TYPEWRITER HEADLINE
// =========================================================================
function TypewriterHeadline({ text, className, style }) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        index += 1;
        setDisplayedCount(index);
        if (index >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, 45);
      return () => clearInterval(interval);
    }, 200);

    return () => clearTimeout(startDelay);
  }, [text]);

  return (
    <h1
      className={className}
      style={{ lineHeight: '46px', ...style }}
      aria-label={text}
    >
      <span>{text.slice(0, displayedCount)}</span>
      <span
        className={`inline-block w-[3px] h-[0.8em] bg-[#ED1C24] ml-1 align-baseline transition-opacity duration-300 ${
          isComplete ? 'opacity-0' : 'animate-pulse opacity-90'
        }`}
        aria-hidden="true"
      />
    </h1>
  );
}

// =========================================================================
// MAIN HOME PAGE COMPONENT
// =========================================================================
export default function HomePage() {
  const bgVideoRef = useRef(null);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {});
    }
    if (heroVideoRef.current) {
      heroVideoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="w-full relative bg-[#F8F8FA] text-black/90 font-sans selection:bg-[#ED1C24] selection:text-white">

      {/* Persistent Background Video for Home page (Sitting behind sections below Hero) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <video
          ref={bgVideoRef}
          src="/videos/bg-video.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover select-none pointer-events-none opacity-45 brightness-95"
        />
        {/* Subtle BNS dark/grey overlay for high contrast & perfect text/UI readability */}
        <div className="absolute inset-0 bg-[#0C0C0C]/40 pointer-events-none" />
      </div>

      {/* ===================================================================
          1. HERO SECTION
          ## Built on Experience. Driven by Partnership.
          CTA: Let’s Develop What’s Next →
          =================================================================== */}
      <section className="relative z-20 w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[800px] flex items-center bg-[#111215] text-white pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 overflow-hidden">
        {/* Full-Bleed Hero Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <video
            ref={heroVideoRef}
            src="/videos/hero-bg-video.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover select-none pointer-events-none brightness-[0.70] contrast-[1.05]"
          />
          {/* Layered cinematic overlay to guarantee high-contrast text and CTA readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-transparent to-black/50 pointer-events-none" />
          {/* Subtle grid background texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-7">
            
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1A1C20]/80 backdrop-blur-md border border-white/10 text-xs font-mono uppercase tracking-wider text-white/80 font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
              <span>BNS Development</span>
            </motion.div>

            <TypewriterHeadline
              text="Built on Experience. Driven by Partnership."
              className="text-3xl sm:text-4xl md:text-[48px] lg:text-[48px] font-display font-semibold text-white/90 tracking-tight !leading-[46px] min-h-[96px] md:min-h-[96px]"
              style={{ lineHeight: '46px' }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3.5 text-[16px] text-white/80 font-sans leading-relaxed max-w-xl"
            >
              <p className="text-white/80">
                BNS Development provides development services with experienced leadership from planning through completion. From residential and multifamily projects to commercial and ground-up developments, we bring practical expertise, clear communication and accountability to every project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <div
                className="home-outline-btn group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white text-sm font-sans font-medium select-none transition-colors duration-400"
              >
                <span className="home-outline-btn-fill" aria-hidden="true" />
                <span className="relative z-10 flex items-center gap-3">
                  <span>Let’s Develop What’s Next</span>
                  <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-400 border border-white/15">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          REMAINING HOME PAGE SECTIONS (Layered over the background video)
          =================================================================== */}
      <div className="relative z-10 w-full">

        {/* ===================================================================
            2. A BETTER WAY TO MOVE A PROJECT FORWARD
            CTA: Meet BNS Development →
            =================================================================== */}
        <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#F8F8FA]/90 backdrop-blur-sm text-black/90 border-b border-black/[0.08] overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
            aria-hidden="true"
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-wider text-black/80 font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
              <span>Develop With Clarity</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-display font-semibold text-black/95 tracking-tight leading-[1.15]">
              A Better Way to Move a Project Forward
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg text-black/75 font-sans leading-relaxed">
              <p>
                The decisions made before development can shape the budget, timeline and outcome of a project. BNS Development gets involved early to help clients evaluate opportunities, plan effectively, coordinate requirements and move projects forward with clarity.
              </p>
            </div>

            <div className="pt-4">
              <div
                className="home-outline-btn group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs sm:text-sm font-sans font-medium select-none transition-colors duration-400"
              >
                <span className="home-outline-btn-fill" aria-hidden="true" />
                <span className="relative z-10 flex items-center gap-3 text-black/90 group-hover:text-white transition-colors duration-400">
                  <span>Discover Our Process</span>
                  <div className="w-6 h-6 rounded-full bg-black/[0.06] group-hover:bg-white/20 text-black/85 group-hover:text-white flex items-center justify-center transition-colors duration-400 border border-black/10 group-hover:border-transparent">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. OUR SERVICES
            Pre-Development Services
            Development Services
            Design-Build
            Residential Development
            Commercial Development
            =================================================================== */}
        <section className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#F8F8FA]/90 backdrop-blur-sm border-b border-black/[0.08]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono uppercase tracking-wider text-black/70 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>Services</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-display font-semibold text-black/95 tracking-tight leading-[1.15]">
                What We Do
              </h2>
            </div>

            {/* 5 Stacking Service Cards */}
            <div className="relative">
              {SCROLL_SERVICES.map((service, idx) => (
                <ScrollServiceCard
                  key={service.id}
                  service={service}
                  index={idx}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ===================================================================
            4. OUR APPROACH
            Start Early — Address the right questions before development begins.
            Stay Connected — Keep owners, consultants, contractors and project partners aligned.
            Solve Problems — Identify challenges, evaluate options and keep decisions moving.
            Stay Accountable — Remain focused on the project from planning through completion.
            =================================================================== */}
        <section className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#FAFAF8] text-black/90 overflow-hidden border-t border-b border-black/[0.06]">
          <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-wider text-black/80 font-semibold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                <span>Process &amp; Methodology</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-display font-semibold text-black/95 tracking-tight leading-[1.15]">
                Our Approach
              </h2>
            </div>

            <div className="w-full flex flex-col items-center">
              {APPROACH_ITEMS.map((item, idx) => (
                <ApproachRowItem
                  key={item.num}
                  item={item}
                  index={idx}
                  isLast={idx === APPROACH_ITEMS.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. EXPERIENCE THAT GOES BEYOND ONE TYPE OF PROJECT (References.mp4)
            =================================================================== */}
        <BeyondExperienceSection />

        {/* ===================================================================
            6. EXPERIENCE ACROSS PROJECTS
            Our experience spans residential, multifamily, commercial, hospitality,
            mixed-use, condominiums, retail, aviation, renovations, land development
            and ground-up development.
            =================================================================== */}
        <section className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#FFFFFF]/90 backdrop-blur-sm border-t border-black/[0.08] overflow-hidden">
          <div className="w-full space-y-12 sm:space-y-16 relative z-10">
            
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F4F6] border border-black/[0.06] text-xs font-mono uppercase tracking-wider text-black/70 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>Portfolio &amp; Sectors</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-display font-semibold text-black/95 tracking-tight leading-[1.15]">
                Experience Across Projects
              </h2>

              <p className="text-base sm:text-lg text-black/70 font-sans leading-relaxed max-w-3xl mx-auto">
                Our experience spans residential, multifamily, commercial, hospitality, mixed-use, condominiums, retail, aviation, renovations, land development and ground-up development.
              </p>
            </div>

            {/* Featured Projects Showcase (Previous Card Style) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                {workProjectsData.map((project, idx) => (
                  <ScrollReveal key={project.id} delay={idx * 0.1} direction="up" className="h-full">
                    <div
                      className="w-full h-full bg-white rounded-[2.25rem] border border-[#E3E3DE] hover:border-[#ED1C24] overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1.5 select-none"
                    >
                      {/* Photographic Cover Frame */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECECE9]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-108"
                          loading="lazy"
                        />
                      </div>

                      {/* Card Body */}
                      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4 bg-white">
                        <div className="space-y-2.5">
                          {/* Location Eyebrow */}
                          <div className="flex items-center gap-1.5 text-xs font-sans text-black/50 pb-1">
                            <MapPin className="w-3.5 h-3.5 text-[#ED1C24] shrink-0" />
                            <span className="truncate">{project.location}</span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl font-display font-semibold text-black/85 group-hover:text-[#ED1C24] transition-colors leading-[1.2]">
                            {project.title}
                          </h3>

                          {/* Subtitle */}
                          {project.subtitle && (
                            <p className="text-xs font-mono uppercase tracking-wider text-black/50">
                              {project.subtitle}
                            </p>
                          )}
                        </div>

                        {/* View Details Action Row (Dummy / Non-functional as requested) */}
                        <div className="pt-4 border-t border-[#E3E3DE] flex items-center">
                          <span className="text-xs sm:text-sm font-sans font-semibold text-black/85 group-hover:text-[#ED1C24] transition-colors inline-flex items-center gap-1.5">
                            Explore Case Study
                            <ArrowRight className="w-3.5 h-3.5 text-[#ED1C24] transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================================
            6. READY TO TALK ABOUT YOUR PROJECT?
            Whether you're evaluating an opportunity or preparing to begin development,
            BNS Development is ready to understand your goals and help move your project forward.
            CTA: Have a Project in Mind? →
            =================================================================== */}
        <section className="relative w-full py-16 sm:py-24 bg-[#FFFFFF]/90 backdrop-blur-sm overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] bg-[#0E0F12] text-white p-8 sm:p-14 lg:p-20 border border-white/10 shadow-2xl relative overflow-hidden text-center">
              
              {/* Red and Black Architectural Building Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src="/images/cta-building-red-black.jpg"
                  alt="BNS Modern Red and Black Architecture Building"
                  className="w-full h-full object-cover object-center select-none scale-105 brightness-[0.52] sm:brightness-[0.58] contrast-[1.12] transition-transform duration-1000 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12]/90 via-[#0E0F12]/40 to-[#0E0F12]/75" />
                <div
                  className="absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                  aria-hidden="true"
                />
              </div>

              <div className="max-w-3xl mx-auto space-y-7 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1C20]/80 backdrop-blur-md border border-white/10 text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                  <span>Get in Touch</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-display font-semibold text-white tracking-tight leading-[1.15]">
                  Ready to Talk About Your Project?
                </h2>

                <p className="text-[16px] text-white/80 font-sans leading-relaxed max-w-2xl mx-auto">
                  Whether you're evaluating an opportunity or preparing to begin development, BNS Development is ready to understand your goals and help move your project forward.
                </p>

                <div className="pt-4 flex justify-center">
                  <div
                    className="home-outline-btn group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-sm sm:text-base font-sans font-medium select-none transition-colors duration-400"
                  >
                    <span className="home-outline-btn-fill" aria-hidden="true" />
                    <span className="relative z-10 flex items-center gap-3">
                      <span>Have a Project in Mind?</span>
                      <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-400 border border-white/15">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
