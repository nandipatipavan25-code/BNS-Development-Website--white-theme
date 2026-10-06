import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedStepCards Component
 * Exact recreation of https://animated-step-cards.framer.website/
 * 
 * Features:
 * - Fluid curved connecting path with looping animated light pulse signal (6s cycle).
 * - Synchronized Arrival Rings expanding/rippling from each step node upon signal contact.
 * - Cascading staggered card positions (matching the Framer desktop stepped curve).
 * - Signal Cards featuring:
 *   - 180px photographic window with 1.05x hover scale.
 *   - Dark reading shade gradient fading in on hover.
 *   - Hover detail text sliding up and fading in on hover.
 *   - Expanding 2px brand red signal accent line on hover.
 *   - Crisp title area beneath the image window.
 * - Fully responsive with Framer-style vertical timeline for tablet/mobile.
 */
export default function AnimatedStepCards({ steps }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Desktop vertical staggered offsets matching Framer's stepped arc
  const desktopOffsets = [
    'lg:mt-0',
    'lg:mt-12',
    'lg:mt-24',
    'lg:mt-36',
    'lg:mt-48',
  ];

  // Timing offsets for 6-second signal loop across 5 steps
  const pulseDelays = [0, 1.2, 2.4, 3.6, 4.8];

  return (
    <div className="relative w-full py-6 select-none overflow-visible">
      {/* ========================================================
          1. DESKTOP VIEW: Continuous Flowing Wave + Cascading Cards
          ======================================================== */}
      <div className="hidden lg:block relative w-full">
        {/* SVG Connecting Flow Curve & Animated Travelling Signal */}
        <div className="relative w-full h-28 mb-4 pointer-events-none">
          <svg
            viewBox="0 0 1000 120"
            className="w-full h-full overflow-visible"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Traveling Light Pulse Mask */}
              <mask id="framer-step-pulse-mask">
                <motion.path
                  d="M 100 20 C 180 20, 220 42, 300 42 C 380 42, 420 65, 500 65 C 580 65, 620 88, 700 88 C 780 88, 820 110, 900 110"
                  fill="none"
                  stroke="white"
                  strokeWidth={6}
                  strokeDasharray="140 860"
                  initial={{ strokeDashoffset: 1000 }}
                  animate={{ strokeDashoffset: -1000 }}
                  transition={{
                    duration: 6,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                />
              </mask>
            </defs>

            {/* Base Guide Path Line */}
            <path
              d="M 100 20 C 180 20, 220 42, 300 42 C 380 42, 420 65, 500 65 C 580 65, 620 88, 700 88 C 780 88, 820 110, 900 110"
              stroke="#D6D6D2"
              strokeWidth={2}
              strokeLinecap="round"
            />

            {/* Animated Red Signal Laser Beam */}
            <path
              d="M 100 20 C 180 20, 220 42, 300 42 C 380 42, 420 65, 500 65 C 580 65, 620 88, 700 88 C 780 88, 820 110, 900 110"
              stroke="#C41E1E"
              strokeWidth={2.5}
              strokeLinecap="round"
              mask="url(#framer-step-pulse-mask)"
              className="drop-shadow-[0_0_8px_rgba(196,30,30,0.8)]"
            />
          </svg>

          {/* 5 Step Nodes Positioned Exactly Above Columns */}
          <div className="absolute inset-0 grid grid-cols-5 pointer-events-auto">
            {steps.map((item, idx) => {
              const nodeYOffsets = ['top-0', 'top-5', 'top-11', 'top-17', 'top-22'];
              const delay = pulseDelays[idx];

              return (
                <div key={item.step} className="relative flex justify-center">
                  <div className={`absolute ${nodeYOffsets[idx]} z-20 flex items-center justify-center`}>
                    {/* Node Circle */}
                    <div className="relative w-11 h-11 rounded-full bg-[#D6D6D2] p-[1.5px] flex items-center justify-center shadow-sm">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-mono text-xs font-semibold text-[#181818]">
                        <span>{item.step}</span>
                      </div>

                      {/* Expanding Arrival Ripple Ring (Framer Arrival Effect) */}
                      <motion.div
                        animate={{
                          scale: [1, 1.7],
                          opacity: [0.8, 0],
                        }}
                        transition={{
                          duration: 0.9,
                          repeat: Infinity,
                          repeatDelay: 5.1,
                          delay: delay,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute inset-0 rounded-full border-2 border-[#C41E1E] pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 Cascading Signal Cards */}
        <div className="grid grid-cols-5 gap-5 items-start">
          {steps.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const offsetClass = desktopOffsets[idx] || '';

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className={`flex flex-col ${offsetClass}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Framer Signal Card */}
                <div className="group relative rounded-2xl bg-white border border-[#E6E6E3] hover:border-[#C41E1E] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col">
                  {/* Image Window (180px height matching Framer spec) */}
                  <div className="relative w-full h-[180px] overflow-hidden bg-[#ECECE9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 pointer-events-none"
                    />

                    {/* Reading Shade (Fades in on hover) */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 35%, rgba(0, 0, 0, 0.75) 65%, rgba(0, 0, 0, 0.92) 100%)',
                      }}
                    />

                    {/* Hover Detail (Sliding Description text over photo on hover) */}
                    <div
                      className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
                        isHovered
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <p className="text-xs text-white/95 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Signal Accent (Expanding bottom line on hover) */}
                    <div
                      className={`absolute bottom-0 left-0 h-[2.5px] bg-[#C41E1E] transition-all duration-300 ${
                        isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
                      }`}
                    />
                  </div>

                  {/* Card Title Area (Bottom) */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base font-display font-semibold text-black/80 group-hover:text-[#C41E1E] transition-colors leading-snug tracking-tight min-h-[44px]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          2. TABLET & MOBILE VIEW: Framer Vertical Timeline Stream
          ======================================================== */}
      <div className="lg:hidden relative w-full pl-4 sm:pl-6 space-y-6">
        {/* Continuous Left Vertical Guide Line */}
        <div className="absolute left-[29px] sm:left-[37px] top-6 bottom-6 w-[2px] bg-[#D6D6D2] overflow-hidden">
          {/* Animated Vertical Light Pulse Beam */}
          <motion.div
            animate={{
              y: ['-100%', '300%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="w-full h-24 bg-gradient-to-b from-transparent via-[#C41E1E] to-transparent"
          />
        </div>

        {steps.map((item, idx) => (
          <div key={item.step} className="relative flex items-start gap-4 sm:gap-6">
            {/* Step Node */}
            <div className="relative z-10 shrink-0 mt-2">
              <div className="w-10 h-10 rounded-full bg-[#D6D6D2] p-[1.5px] flex items-center justify-center shadow-sm">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-mono text-xs font-semibold text-black/80">
                  {item.step}
                </div>
              </div>
            </div>

            {/* Mobile Signal Card */}
            <div className="flex-1 rounded-2xl bg-white border border-[#E6E6E3] shadow-sm overflow-hidden p-3.5 space-y-3">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#ECECE9]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="text-[11px] font-mono text-white uppercase tracking-wide">
                    {item.phase || `Phase ${item.step}`}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-base font-display font-semibold text-black/80 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-black/60 font-sans leading-relaxed mt-1.5">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
