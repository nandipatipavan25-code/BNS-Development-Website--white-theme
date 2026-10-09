import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HouseCTA({
  onStartProject,
  setActivePage,
  eyebrow = "Get in Touch",
  title = "Ready to Talk About Your Project?",
  highlight = "",
  description = "Whether you're evaluating an opportunity or preparing to begin development, BNS Development is ready to understand your goals and help move your project forward.",
  buttonText = "Have a Project in Mind?",
  image = "/images/cta-building-red-black.jpg",
  className = "",
}) {
  const handleStartProject = () => {
    if (onStartProject) {
      onStartProject();
    } else if (setActivePage) {
      setActivePage('contact');
    }
  };
  return (
    <section className={`relative w-full py-10 sm:py-14 lg:py-16 bg-transparent overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#0E0F12] text-white p-8 sm:p-14 lg:p-20 border border-white/10 shadow-2xl relative overflow-hidden text-center group">
          
          {/* Red and Black Architectural Building Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={image || "/images/cta-building-red-black.jpg"}
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
            <ScrollReveal direction="up" delay={0.05}>
              <div className="space-y-5 flex flex-col items-center">
                {/* Eyebrow Pill matching Home page */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1C20]/80 backdrop-blur-md border border-white/10 text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                  <span>{eyebrow}</span>
                </div>

                {/* Headline in Playfair Display (Universal 36px CTA heading) */}
                <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[36px] font-display font-semibold text-white tracking-tight leading-[44px] sm:leading-[44px] md:leading-[44px]">
                  <span>{title}</span>
                  {highlight && (
                    <span className="text-[#ED1C24] ml-2">
                      {highlight}
                    </span>
                  )}
                </h2>

                {/* Description (Universal 16px subtext) */}
                {description && (
                  <p className="text-[16px] text-white/80 font-sans leading-relaxed max-w-2xl mx-auto">
                    {description}
                  </p>
                )}
              </div>
            </ScrollReveal>

            {/* Universal Action CTA Button matching Home page */}
            <ScrollReveal direction="up" delay={0.12}>
              <div className="pt-2 flex justify-center">
                <div
                  onClick={handleStartProject}
                  className="home-outline-btn group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-sm sm:text-base font-sans font-medium select-none cursor-pointer transition-colors duration-400"
                >
                  <span className="home-outline-btn-fill" aria-hidden="true" />
                  <span className="relative z-10 flex items-center gap-3">
                    <span>{buttonText}</span>
                    <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-400 border border-white/15">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
