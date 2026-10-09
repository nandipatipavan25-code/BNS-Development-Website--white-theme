import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

function StackingApproachCard({ item, index, total }) {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="sticky mb-8 sm:mb-12 transition-all duration-300"
      style={{
        top: `calc(5.5rem + ${index * 1.25}rem)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="group relative w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-white text-black/90 border border-black/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:border-[#ED1C24]/40 hover:shadow-2xl transition-all duration-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Number and Step Title */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <span className="text-xs sm:text-sm font-sans text-black/40 font-normal tracking-wider mb-3 sm:mb-4 block">
              {item.step}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-[28px] font-display font-medium text-black/95 group-hover:text-[#ED1C24] transition-colors duration-300 tracking-tight leading-snug">
              {item.title}
            </h3>
          </div>

          {/* Middle Column: Narrative Description */}
          <div className="md:col-span-4 flex items-center pt-1 md:pt-4">
            <p className="text-sm sm:text-base text-black/60 font-sans leading-relaxed max-w-md">
              {item.desc}
            </p>
          </div>

          {/* Right Column: Architectural Photographic Asset */}
          <div className="md:col-span-4 flex justify-end">
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#F2F2F0] border border-black/[0.08] relative shadow-xs">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ApproachEditorialList({
  steps,
  category = "How We Approach Design-Build",
  headline = "Disciplined development solutions from concept to turnover.",
  description,
}) {
  return (
    <section className="w-full py-2 sm:py-4">
      {/* 1. Header Matching Reference Image */}
      <ScrollReveal direction="up" delay={0.05}>
        <div className="space-y-3 pb-10 sm:pb-14 text-left">
          {/* Eyebrow Pill Badge with Red Accent Dot */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-widest text-black/80 font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
            <span>{category}</span>
          </div>

          {/* Section Display Headline */}
          <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-black/95 leading-tight">
            {headline}
          </h2>

          {description && (
            <p className="text-base text-black/65 font-sans leading-relaxed max-w-none">
              {description}
            </p>
          )}
        </div>
      </ScrollReveal>

      {/* 2. Stacking Cards Scroll Reveal */}
      <div className="relative">
        {steps.map((step, idx) => (
          <StackingApproachCard
            key={step.step || idx}
            item={step}
            index={idx}
            total={steps.length}
          />
        ))}
      </div>
    </section>
  );
}
