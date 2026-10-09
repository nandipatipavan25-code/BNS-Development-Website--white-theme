import React from 'react';

/**
 * CardBeamBorder Component - Site-Wide Running Beam Outline
 * On hover, a thin laser beam travels continuously around the complete
 * outer outline of the card, matching its exact shape and border radius.
 */
export default function CardBeamBorder({
  borderRadius = "24px",
  strokeWidth = 1.5,
  color = "#ED1C24",
  duration = 3.5,
  className = ""
}) {
  return (
    <div
      className={`card-beam-overlay ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full absolute inset-0"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="card-beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.1" />
            <stop offset="50%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
          <filter id="card-beam-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <rect
          x="0.75"
          y="0.75"
          width="calc(100% - 1.5px)"
          height="calc(100% - 1.5px)"
          rx={borderRadius}
          ry={borderRadius}
          fill="none"
          stroke="url(#card-beam-grad)"
          strokeWidth={strokeWidth}
          pathLength="100"
          strokeDasharray="22 78"
          filter="url(#card-beam-glow-filter)"
          style={{
            animation: `cardBeamRun ${duration}s linear infinite`,
          }}
        />
      </svg>
    </div>
  );
}
