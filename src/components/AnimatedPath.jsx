import React, { useId } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedPath Component
 * Inspired by Framer AnimatedPath (https://framer.com/m/AnimatedPath-zpq9rv.js)
 * 
 * Renders an elegant animated SVG connecting path with glowing nodes and a moving light pulse
 * to visually connect lifecycle / process steps in services.
 */
export default function AnimatedPath({
  stepsCount = 5,
  lineColor = '#C41E1E',
  trailColor = '#C41E1E',
  dotColor = '#C41E1E',
  baseOpacity = 0.25,
  speed = 4, // seconds per loop
  strokeWidth = 2,
  dashLength = 6,
  gapLength = 6,
  trailLength = 120,
  showDots = true,
  className = '',
  height = 48,
}) {
  const maskId = useId();

  // Generate responsive point coordinates across 1000px viewBox width
  // E.g. for 5 items: centers at 100, 300, 500, 700, 900
  const stepSpacing = 1000 / stepsCount;
  const points = Array.from({ length: stepsCount }, (_, i) => ({
    x: stepSpacing * i + stepSpacing / 2,
    y: height / 2,
  }));

  // Build smooth bezier connecting curve path across points
  const pathD = points.reduce((acc, pt, i, arr) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = arr[i - 1];
    const midX = (prev.x + pt.x) / 2;
    // Slight wave curve for organic architectural feel
    const waveOffset = i % 2 === 1 ? -6 : 6;
    return `${acc} C ${midX} ${prev.y + waveOffset}, ${midX} ${pt.y - waveOffset}, ${pt.x} ${pt.y}`;
  }, '');

  return (
    <div className={`relative w-full pointer-events-none select-none overflow-visible ${className}`}>
      <svg
        viewBox={`0 0 1000 ${height}`}
        className="w-full h-full overflow-visible"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Moving gradient trail mask */}
          <linearGradient id={`pulse-grad-${maskId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <mask id={`trail-mask-${maskId}`}>
            <motion.path
              d={pathD}
              fill="none"
              stroke="white"
              strokeWidth={strokeWidth * 3}
              strokeDasharray={`${trailLength} 880`}
              initial={{ strokeDashoffset: 1000 }}
              animate={{ strokeDashoffset: -1000 }}
              transition={{
                duration: speed,
                ease: 'linear',
                repeat: Infinity,
              }}
            />
          </mask>
        </defs>

        {/* 1. Base dashed guide path */}
        <path
          d={pathD}
          stroke={lineColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${dashLength} ${gapLength}`}
          strokeOpacity={baseOpacity}
          strokeLinecap="round"
        />

        {/* 2. Active illuminated pulse travelling along the path */}
        <path
          d={pathD}
          stroke={trailColor}
          strokeWidth={strokeWidth + 1}
          strokeLinecap="round"
          mask={`url(#trail-mask-${maskId})`}
          className="drop-shadow-[0_0_6px_rgba(196,30,30,0.6)]"
        />

        {/* 3. Interactive / glowing node dots at each step */}
        {showDots &&
          points.map((pt, idx) => (
            <g key={idx} transform={`translate(${pt.x}, ${pt.y})`}>
              {/* Outer pulsing ring */}
              <motion.circle
                r={6}
                fill={dotColor}
                opacity={0.2}
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  delay: idx * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Inner crisp node dot */}
              <circle r={3.5} fill={dotColor} className="drop-shadow-sm" />
              <circle r={1.5} fill="#FFFFFF" />
            </g>
          ))}
      </svg>
    </div>
  );
}
