import React from 'react';
import {
  ArrowUpRight,
  HardHat
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';

export default function SubcontractorsPage({ setActivePage = () => {} }) {
  return (
    <div className="relative text-black/90 bg-transparent min-h-screen font-sans selection:bg-[#ED1C24] selection:text-white">
      {/* ========================================================
          1. HERO — Built on Partnership. Trade Partner Onboarding.
          Authentic Architectural Banner matching About Us & Site Standard
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#181818]">
        <img
          src="/images/ground-up.jpg"
          alt="BNS Development Subcontractor & Trade Partner Network"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        {/* Dual Directional Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-5 text-white">
              {/* Architectural Eyebrow Tag matching About Us */}
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#ED1C24]" />
                <span className="text-xs sm:text-sm font-sans tracking-widest text-[#d4d4d4] font-semibold">
                  Trade Partner Network
                </span>
              </div>

              {/* Main Headline matching About Us & Universal Standard */}
              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[42px] font-display font-semibold tracking-tight text-white leading-[44px] sm:leading-[44px] md:leading-[44px]">
                <span className="block">Trade Partner Onboarding.</span>
                <span className="block text-white mt-1">Powered by Construct.ai.</span>
              </h1>

              {/* Subtext with Text Reveal */}
              <TextRevealOnScroll
                text="BNS Development partners with premier specialty trade contractors, engineers, and suppliers across Florida and Texas. We streamline prequalification, compliance, and bid distribution through Construct.ai."
                className="text-[16px] text-white/80 font-sans leading-relaxed max-w-3xl pt-1"
                primaryColor="rgba(255, 255, 255, 0.8)"
                mutedColor="rgba(255, 255, 255, 0.28)"
                offset={['start 98%', 'start 75%']}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          2. CONSTRUCT.AI REGISTRATION PORTAL (Centered Action Card)
          ======================================================== */}
      <div className="w-full relative">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <section id="onboarding-hub" className="py-10 sm:py-14 lg:py-16 relative">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.08}>
              <div className="relative overflow-hidden rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-12 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)] text-center space-y-7">
                {/* Decorative architectural top accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#AA1E23] via-[#C52126] to-[#ED1C24]" />

                {/* Top Monogram / Badge */}
                <div className="w-16 h-16 mx-auto rounded-2xl border border-[#ED1C24]/20 bg-[#ED1C24]/[0.06] shadow-sm flex items-center justify-center text-[#ED1C24] hover:bg-[#ED1C24] hover:border-[#ED1C24] hover:text-white transition-all duration-300 cursor-default">
                  <HardHat className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#ED1C24] font-semibold block">
                    Trade Partner Portal
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-black/95">
                    Join the BNS Trade Network
                  </h2>
                  <TextRevealOnScroll
                    text="Click below to start or complete your contractor onboarding on Construct.ai."
                    className="text-sm sm:text-base text-black/65 font-sans leading-relaxed max-w-md mx-auto text-center"
                    primaryColor="rgba(0, 0, 0, 0.85)"
                    mutedColor="rgba(0, 0, 0, 0.20)"
                    offset={['start 95%', 'start 70%']}
                  />
                </div>

                {/* Prominent CTA Button */}
                <div className="pt-2 max-w-md mx-auto">
                  <a
                    href="https://construct.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-outline-btn group/btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-sans font-semibold select-none transition-colors duration-400 cursor-pointer w-full text-center"
                  >
                    <span className="home-outline-btn-fill" aria-hidden="true" />
                    <span className="relative z-10 flex items-center justify-center gap-2.5 text-black/90 group-hover/btn:text-white transition-colors duration-400">
                      <span>Register as a Contractor</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </a>
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-center gap-2 text-xs text-black/55 font-sans">
                  <span>Powered by Construct.ai</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-medium">Bidding Active</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
