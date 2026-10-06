import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import HouseCTA from '../components/HouseCTA';
import TeamBioTabs from '../components/TeamBioTabs';

export default function AboutPage({ setActivePage }) {
  // 4 Relationship Values (exact content preserved)
  const relationshipValues = [
    { name: 'Communication', desc: 'Transparent, proactive dialogue across every phase.' },
    { name: 'Responsiveness', desc: 'Rapid resolution of RFIs, submittals, and field questions.' },
    { name: 'Accountability', desc: 'Fidelity to schedule, budget, and commitments.' },
    { name: 'Mutual Respect', desc: 'Honoring trade partners, owners, and design professionals.' },
  ];

  return (
    <div className="relative pb-20 text-black/90 bg-[#F7F7F5] min-h-screen">
      {/* ========================================================
          1. HERO — Built on Experience. Built on Relationships. (Full-Bleed)
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818]">
        <img
          src="/images/about-hero.jpg"
          alt="BNS Development Mastery"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        {/* Dual Directional Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-5 text-white">
              {/* Eyebrow Tag matching HomePage */}
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs sm:text-sm font-sans uppercase tracking-widest text-neutral-300 font-semibold">
                  About BNS Development • Florida &amp; Texas
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
                Built on Experience.<br />
                <span className="text-[#C41E1E]">Built on Relationships.</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-neutral-200 font-sans leading-relaxed max-w-3xl pt-1">
                BNS Development brings decades of experience across development, project management, general contracting, construction management and business development. We combine hands-on industry knowledge with a collaborative approach to help clients move projects from opportunity to execution.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                <span>35+ Years of Leadership</span>
                <span className="text-neutral-500">•</span>
                <span>$800M+ Capital Delivered</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          2. THE EXPERIENCE BEHIND BNS DEVELOPMENT
          ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 bg-[#F2F2EF] border-y border-[#E6E6E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            tag="Practical Foundation"
            title="The Experience Behind"
            highlight="BNS Development."
            description="We combine hands-on industry knowledge with a collaborative approach to help clients move projects from opportunity to execution."
            className="mb-12"
          />

          <div className="mt-8">
            <TeamBioTabs onContactClick={() => setActivePage('contact')} />
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MORE THAN A DEVELOPER. A PROJECT PARTNER. (Architectural Editorial Layout)
          ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 bg-[#F7F7F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Narrative & Numbered Partnership Pillars */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal direction="left" delay={0.05}>
                <div className="space-y-4">
                  <SectionHeading
                    tag="Collaborative Excellence"
                    title="More Than a Developer."
                    highlight="A Project Partner."
                    className="mb-0"
                  />

                  <p className="text-base sm:text-lg text-black/70 font-sans font-medium leading-relaxed pt-1">
                    Successful development requires more than managing a timeline. It requires coordination, communication and informed decision-making.
                  </p>
                </div>

                {/* 5 Partnership Pillars — Architectural Numbered Rows */}
                <div className="pt-6 space-y-0 border-t border-[#E6E6E3]">
                  {[
                    { num: '01', title: 'Understanding the Vision' },
                    { num: '02', title: 'Planning Before Development' },
                    { num: '03', title: 'Coordinating the Team' },
                    { num: '04', title: 'Managing the Details' },
                    { num: '05', title: 'Delivering With Accountability' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="py-4 border-b border-[#E6E6E3] flex items-center justify-between group/item hover:bg-[#F2F2EF]/60 px-3 -mx-3 rounded-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono font-bold text-[#C41E1E] tracking-wider w-6 shrink-0">
                          {item.num}
                        </span>
                        <span className="text-base sm:text-lg font-sans font-medium text-black/85 group-hover/item:text-[#C41E1E] transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-black/50 group-hover/item:text-[#C41E1E] transition-colors opacity-0 group-hover/item:opacity-100 pr-2">
                        Phase {item.num} →
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-4">
                  <button
                    onClick={() => setActivePage('contact')}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#181818] hover:bg-[#C41E1E] text-white text-sm font-sans font-medium transition-all duration-300 shadow-sm cursor-pointer group"
                  >
                    <span>Have a Project in Mind?</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Full-Height Photographic Visual Window */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={0.12}>
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full rounded-3xl overflow-hidden border border-[#E6E6E3] bg-[#ECECE9] shadow-xl group">
                  <img
                    src="/images/about-project-partner.jpg"
                    alt="BNS Development Architectural Landmark Execution"
                    className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          4. BUILT ON RELATIONSHIPS (Architectural Clean Layout)
          ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 bg-[#F2F2EF] border-t border-[#E6E6E3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Narrative & Clean Values List */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <SectionHeading
                  tag="Foundational Creed"
                  title="Built on"
                  highlight="Relationships."
                  className="mb-4"
                />

                <p className="text-base sm:text-lg text-black/60 font-sans leading-relaxed">
                  Development is a relationship business. We believe in communication, responsiveness, accountability and mutual respect—building partnerships that extend beyond a single project.
                </p>
              </div>

              {/* 4 Relationship Values - Clean Editorial Grid */}
              <div className="pt-6 border-t border-[#E6E6E3] grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relationshipValues.map((val, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#FCFCFB] border border-[#E6E6E3] space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C41E1E] shrink-0" />
                      <h4 className="text-base font-semibold font-display text-black/85">
                        {val.name}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Architectural Partner Alignment Photography Window */}
            <div className="lg:col-span-5 flex flex-col">
              <ScrollReveal direction="right" delay={0.12} className="h-full w-full">
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-[#E6E6E3] bg-[#ECECE9] shadow-xl group">
                  <img
                    src="/images/process/step-03-coordination.jpg"
                    alt="BNS Development Multi-Stakeholder Relationship & Coordination"
                    className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CALL TO ACTION (HouseCTA)
          ======================================================== */}
      <HouseCTA
        onStartProject={() => setActivePage('contact')}
        title="Let’s Talk About"
        highlight="Your Project"
        description="Whether you're planning a residential project, commercial development, new development or your next opportunity, BNS Development is ready to start the conversation."
        buttonText="Let’s Build the Right Partnership"
      />
    </div>
  );
}
