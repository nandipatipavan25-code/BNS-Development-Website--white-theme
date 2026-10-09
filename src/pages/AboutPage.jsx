import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';
import HouseCTA from '../components/HouseCTA';
import TeamBioTabs from '../components/TeamBioTabs';
import CardBeamBorder from '../components/CardBeamBorder';

export default function AboutPage({ setActivePage = () => {} }) {
  // 4 Relationship Values (exact content preserved)
  const relationshipValues = [
    {
      num: '01',
      name: 'Communication',
      desc: 'Transparent, proactive dialogue across every phase.',
    },
    {
      num: '02',
      name: 'Responsiveness',
      desc: 'Rapid resolution of RFIs, submittals, and field questions.',
    },
    {
      num: '03',
      name: 'Accountability',
      desc: 'Fidelity to schedule, budget, and commitments.',
    },
    {
      num: '04',
      name: 'Mutual Respect',
      desc: 'Honoring trade partners, owners, and design professionals.',
    },
  ];

  // 5 Partnership Pillars (exact content preserved)
  const partnershipPillars = [
    { num: '01', title: 'Understanding the Vision' },
    { num: '02', title: 'Planning Before Development' },
    { num: '03', title: 'Coordinating the Team' },
    { num: '04', title: 'Managing the Details' },
    { num: '05', title: 'Delivering With Accountability' },
  ];

  return (
    <div className="relative text-black/90 bg-transparent min-h-screen font-sans selection:bg-[#ED1C24] selection:text-white">

      {/* ========================================================
          1. HERO — Built on Experience. Built on Relationships.
          Authentic About Us Architectural Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#181818]">
        <img
          src="/images/about-hero.jpg"
          alt="BNS Development Mastery"
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
                  About BNS Development
                </span>
              </div>

              {/* About Us Distinct Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[42px] font-display font-semibold tracking-tight text-white leading-[44px] sm:leading-[44px] md:leading-[44px]">
                <span className="block">Built on Experience.</span>
                <span className="block text-white mt-1">Built on Relationships.</span>
              </h1>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          2. THE EXPERIENCE BEHIND BNS DEVELOPMENT (Leadership Team)
          Redesigned in Pristine White Theme with Flip-Card Animation
          ======================================================== */}
      <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-transparent text-black/90 overflow-hidden">
        {/* Subtle dot texture matching Home page */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading matching Home page */}
          <ScrollReveal direction="up" delay={0.05}>
            <div className="text-center max-w-5xl mx-auto space-y-4 mb-14 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-wider text-black/80 font-semibold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                <span>Practical Foundation</span>
              </div>

              <h2 className="text-xl min-[480px]:text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-display font-semibold text-black/95 tracking-tight leading-[1.15] whitespace-nowrap">
                The Experience Behind BNS Development
              </h2>

              <TextRevealOnScroll
                text="We combine hands-on industry knowledge with a collaborative approach to help clients move projects from opportunity to execution."
                className="text-[16px] font-sans leading-relaxed max-w-2xl mx-auto text-black/85"
                primaryColor="rgba(0, 0, 0, 0.85)"
                mutedColor="rgba(0, 0, 0, 0.20)"
                offset={['start 92%', 'start 68%']}
              />
            </div>
          </ScrollReveal>

          {/* Interactive Team Flip Cards Grid */}
          <div className="mt-8">
            <TeamBioTabs onContactClick={() => setActivePage('contact')} />
          </div>

        </div>
      </section>

      {/* ========================================================
          3. MORE THAN A DEVELOPER. A PROJECT PARTNER.
          Editorial White-Theme Layout with Numbered Phase Rows & Landmark Window
          ======================================================== */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white text-black/90 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Narrative & Numbered Partnership Pillars */}
            <div className="lg:col-span-7 space-y-8">
              {/* Heading Block matching Home page */}
              <ScrollReveal direction="left" delay={0.05}>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F8FA] border border-black/[0.08] text-xs font-mono uppercase tracking-wider text-black/80 font-semibold shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                    <span>Collaborative Excellence</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-display font-semibold text-black/95 tracking-tight leading-[44px] sm:leading-[44px] md:leading-[44px]">
                    <span className="block">More Than a Developer.</span>
                    <span className="block mt-1 sm:mt-1.5">A Project Partner.</span>
                  </h2>

                  <TextRevealOnScroll
                    text="Successful development requires more than managing a timeline. It requires coordination, communication and informed decision-making."
                    className="text-[16px] font-sans leading-relaxed pt-1 text-black/85"
                    primaryColor="rgba(0, 0, 0, 0.85)"
                    mutedColor="rgba(0, 0, 0, 0.20)"
                    offset={['start 92%', 'start 68%']}
                  />
                </div>
              </ScrollReveal>

              {/* 5 Partnership Pillars — Staggered ScrollReveal Architectural Cards */}
              <div className="pt-2 space-y-3">
                {partnershipPillars.map((item, idx) => (
                  <ScrollReveal key={item.num} direction="up" delay={0.08 + idx * 0.05} distance={20}>
                    <div
                      className="group relative overflow-hidden p-4 sm:p-4.5 rounded-xl bg-[#FAFAF8] hover:bg-white border border-black/[0.06] hover:border-[#ED1C24] shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-between cursor-default"
                    >
                      <CardBeamBorder borderRadius="12px" />
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono font-bold text-[#ED1C24] tracking-wider w-6 shrink-0">
                          {item.num}
                        </span>
                        <span className="text-base sm:text-lg font-sans font-medium text-black/85 group-hover:text-black transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#ED1C24] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Phase {item.num}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Action CTA Button matching Home page process button */}
              <ScrollReveal direction="up" delay={0.35} distance={16}>
                <div className="pt-2">
                  <div
                    onClick={() => setActivePage('contact')}
                    className="home-outline-btn group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs sm:text-sm font-sans font-medium select-none cursor-pointer transition-colors duration-400"
                  >
                    <span className="home-outline-btn-fill" aria-hidden="true" />
                    <span className="relative z-10 flex items-center gap-3 text-black/90 group-hover:text-white transition-colors duration-400">
                      <span>Have a Project in Mind?</span>
                      <div className="w-6 h-6 rounded-full bg-black/[0.06] group-hover:bg-white/20 text-black/85 group-hover:text-white flex items-center justify-center transition-colors duration-400 border border-black/10 group-hover:border-transparent">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Architectural Visual Window */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={0.15} scale={true}>
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full rounded-3xl overflow-hidden border border-black/[0.08] bg-[#F0F0EE] shadow-xl group">
                  <img
                    src="/images/about-project-partner.jpg"
                    alt="BNS Development Landmark Execution"
                    className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle vignette shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          4. BUILT ON RELATIONSHIPS
          Clean White-Theme Editorial 2x2 Grid & Stakeholder Visual
          ======================================================== */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-transparent text-black/90 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Coordination Photography Window */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="left" delay={0.12} scale={true}>
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full rounded-3xl overflow-hidden border border-black/[0.08] bg-[#F0F0EE] shadow-xl group">
                  <img
                    src="/images/process/step-03-coordination.jpg"
                    alt="BNS Development Partner Alignment & Coordination"
                    className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle vignette shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Narrative & 4 Relationship Value Cards */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              {/* Heading Block */}
              <ScrollReveal direction="right" delay={0.05}>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-wider text-black/80 font-semibold shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                    <span>Foundational Creed</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-display font-semibold text-black/95 tracking-tight leading-[44px] sm:leading-[44px] md:leading-[44px]">
                    Built on Relationships
                  </h2>

                  <TextRevealOnScroll
                    text="Development is a relationship business. We believe in communication, responsiveness, accountability and mutual respect—building partnerships that extend beyond a single project."
                    className="text-[16px] font-sans leading-relaxed text-black/85"
                    primaryColor="rgba(0, 0, 0, 0.85)"
                    mutedColor="rgba(0, 0, 0, 0.20)"
                    offset={['start 92%', 'start 68%']}
                  />
                </div>
              </ScrollReveal>

              {/* 4 Relationship Value Cards in Staggered 2x2 Grid */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {relationshipValues.map((val, idx) => (
                  <ScrollReveal key={val.num} direction="up" delay={0.08 + idx * 0.06} distance={20}>
                    <div
                      className="group relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.08] hover:border-[#ED1C24]/50 shadow-xs hover:shadow-md transition-all duration-300 space-y-2.5 h-full flex flex-col justify-between"
                    >
                      <CardBeamBorder borderRadius="16px" />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#ED1C24] shrink-0" />
                          <h3 className="text-base sm:text-[17px] font-semibold font-display text-black/90 group-hover:text-[#ED1C24] transition-colors">
                            {val.name}
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono font-medium text-black/40">
                          {val.num}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-black/65 font-sans leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          5. CALL TO ACTION (Universal HouseCTA matching Home Page)
          ======================================================== */}
      <HouseCTA
        onStartProject={() => {
          setActivePage('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}
