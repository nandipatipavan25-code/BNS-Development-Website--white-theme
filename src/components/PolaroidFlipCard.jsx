import React, { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, RotateCw, X } from 'lucide-react';
import CardBeamBorder from './CardBeamBorder';

const TILT_SPRING = { damping: 28, stiffness: 140, mass: 0.6 };
const FLIP_SPRING = { type: 'spring', damping: 22, stiffness: 220, mass: 0.8 };

/**
 * PolaroidFlipCard Component
 * Refined 3D interactive leadership card with balanced proportions,
 * clean typography, and zero clutter.
 */
export default function PolaroidFlipCard({
  person,
  tiltStrength = 10,
  className = '',
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  // ── 3D Tilt Values ────────────────────────────────────────────────────────
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const tiltX = useSpring(
    useTransform(my, [-0.5, 0.5], [tiltStrength, -tiltStrength]),
    TILT_SPRING
  );
  const tiltY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-tiltStrength, tiltStrength]),
    TILT_SPRING
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (isFlipped || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mx, my, isFlipped]
  );

  const handleMouseLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  const handleFlip = useCallback(() => {
    mx.set(0);
    my.set(0);
    setIsFlipped((prev) => !prev);
  }, [mx, my]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleFlip}
      className={`relative w-full max-w-[310px] h-[415px] cursor-pointer select-none group ${className}`}
      style={{ perspective: 1200 }}
      role="button"
      tabIndex={0}
      aria-label={`${person.name} profile card, click to view bio`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleFlip();
        }
      }}
    >
      {/* 3D Tilting & Flipping Master Container */}
      <motion.div
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={FLIP_SPRING}
        style={{
          rotateX: isFlipped ? 0 : tiltX,
          rotateY: isFlipped ? 180 : tiltY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        {/* ========================================================
            FRONT FACE: CLEAN ARCHITECTURAL PORTRAIT & BIO TRIGGER
            ======================================================== */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl bg-white p-3.5 border border-black/[0.08] group-hover:border-[#ED1C24]/40 shadow-sm group-hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          <CardBeamBorder borderRadius="16px" />

          {/* Top Photo Frame */}
          <div className="relative w-full h-[270px] rounded-xl overflow-hidden bg-[#F0F0EE] border border-black/[0.06]">
            <img
              src={person.image}
              alt={person.name}
              draggable={false}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
            />
            {/* Subtle Gradient Shadow at bottom of photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom Card Information */}
          <div className="pt-2.5 px-1 flex flex-col justify-center flex-1">
            {/* Name and Role Title */}
            <div>
              <h3 className="text-base sm:text-[17px] font-display font-semibold text-black/90 tracking-tight truncate">
                {person.name}
              </h3>
              <p className="text-xs text-black/55 font-sans truncate mt-0.5" title={person.title}>
                {person.title}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            BACK FACE: DETAILED EXECUTIVE BIO
            ======================================================== */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl bg-white p-5 border border-black/[0.08] shadow-md flex flex-col justify-between overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <CardBeamBorder borderRadius="16px" />
          {/* Header */}
          <div className="pb-3 border-b border-black/[0.06]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#ED1C24] font-bold">
                Leadership Profile
              </span>
              <span className="w-6 h-6 rounded-full bg-black/[0.04] flex items-center justify-center text-black/60 group-hover:bg-[#ED1C24] group-hover:text-white transition-colors">
                <RotateCw className="w-3 h-3" />
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-display font-semibold text-black/90">
              {person.name}
            </h4>
            <p className="text-xs text-black/55 font-sans truncate mt-0.5">
              {person.title}
            </p>
          </div>

          {/* Bio Content Area */}
          <div className="py-3 flex-1 flex flex-col justify-center">
            <p className="text-xs sm:text-[13px] text-black/70 font-sans leading-relaxed">
              {person.bio}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
