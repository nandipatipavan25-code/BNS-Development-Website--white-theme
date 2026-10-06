import React from 'react';

/**
 * ApproachAnimatedBg Component
 * Recreates the dark 3D architectural geometry with glowing animated red laser light traces,
 * paired with the architectural exterior building image on the right.
 */
export default function ApproachAnimatedBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* ── Base Dark Background Layer ── */}
      <div className="absolute inset-0 bg-[#07080A]" />

      {/* ── Right-Side Architectural Building Photo with Multi-directional Fades ── */}
      <div className="absolute top-0 right-0 w-full sm:w-[65%] lg:w-[52%] h-full z-0 overflow-hidden">
        <img
          src="/images/bns-approach-bg.jpg"
          alt="Modern Architectural Development"
          className="w-full h-full object-cover object-right opacity-40 sm:opacity-55 filter contrast-115 brightness-95"
        />
        {/* Soft edge blend gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/60 to-transparent sm:via-[#07080A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-[#07080A]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080A]/80 via-transparent to-[#07080A]" />
      </div>

      {/* ── Left-Side 3D Isometric Architectural Geometric Structure ── */}
      <div className="absolute top-0 left-0 w-full lg:w-[68%] h-full z-0 opacity-85">
        <svg
          viewBox="0 0 900 600"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            {/* Dark Metallic/Concrete Surface Gradients */}
            <linearGradient id="blockGradTop1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C1E24" />
              <stop offset="100%" stopColor="#0F1014" />
            </linearGradient>
            <linearGradient id="blockGradFront1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#14151A" />
              <stop offset="100%" stopColor="#08090C" />
            </linearGradient>
            <linearGradient id="blockGradSide1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0C0D10" />
              <stop offset="100%" stopColor="#060709" />
            </linearGradient>

            <linearGradient id="blockGradTop2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22252C" />
              <stop offset="100%" stopColor="#121318" />
            </linearGradient>
            <linearGradient id="blockGradFront2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#16181F" />
              <stop offset="100%" stopColor="#090A0D" />
            </linearGradient>

            {/* Glowing Red Neon Filters */}
            <filter id="neonRedGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="intenseLaserGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur1" />
              <feGaussianBlur stdDeviation="2" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Animated Laser Stroke Linear Gradients */}
            <linearGradient id="laserPulse1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D71920" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF3B44" stopOpacity="1" />
              <stop offset="100%" stopColor="#D71920" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* 3D Geometric Blocks — Isometric Planes */}
          <g opacity="0.85">
            {/* Background Tier Blocks */}
            <polygon points="120,80 340,80 290,140 70,140" fill="url(#blockGradTop1)" />
            <polygon points="70,140 290,140 290,260 70,260" fill="url(#blockGradFront1)" />
            <polygon points="290,140 340,80 340,200 290,260" fill="url(#blockGradSide1)" />

            {/* Middle Prominent Block */}
            <polygon points="220,130 520,130 460,210 160,210" fill="url(#blockGradTop2)" />
            <polygon points="160,210 460,210 460,350 160,350" fill="url(#blockGradFront2)" />
            <polygon points="460,210 520,130 520,270 460,350" fill="url(#blockGradSide1)" />

            {/* Left Stepped Tier */}
            <polygon points="40,220 240,220 190,290 -10,290" fill="url(#blockGradTop1)" />
            <polygon points="-10,290 190,290 190,440 -10,440" fill="url(#blockGradFront1)" />
            <polygon points="190,290 240,220 240,370 190,440" fill="url(#blockGradSide1)" />

            {/* Right Lower Block Structure */}
            <polygon points="360,240 640,240 580,330 300,330" fill="url(#blockGradTop1)" />
            <polygon points="300,330 580,330 580,480 300,480" fill="url(#blockGradFront1)" />
            <polygon points="580,330 640,240 640,390 580,480" fill="url(#blockGradSide1)" />

            {/* Subtle Isometric Structural Edge Lines */}
            <path
              d="M 120,80 L 340,80 L 290,140 L 70,140 Z M 70,140 L 70,260 L 290,260 L 290,140 M 290,260 L 340,200 L 340,80"
              fill="none"
              stroke="#D9D9D9"
              strokeOpacity="0.04"
              strokeWidth="1"
            />
            <path
              d="M 220,130 L 520,130 L 460,210 L 160,210 Z M 160,210 L 160,350 L 460,350 L 460,210 M 460,350 L 520,270 L 520,130"
              fill="none"
              stroke="#D9D9D9"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
          </g>

          {/* ── Animated Glowing Red Neon Laser Paths ── */}
          {/* Path 1: Primary Upper Isometric Light Trail */}
          <path
            d="M 50,330 L 130,220 L 290,220 L 330,170 L 490,170 L 530,120 L 610,120"
            fill="none"
            stroke="#D71920"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#neonRedGlow)"
            className="approach-laser-trace-1"
          />
          {/* Path 1 Bright Traveling Head */}
          <path
            d="M 50,330 L 130,220 L 290,220 L 330,170 L 490,170 L 530,120 L 610,120"
            fill="none"
            stroke="#FF4D55"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#intenseLaserGlow)"
            className="approach-laser-head-1"
          />

          {/* Path 2: Lower Stepping Circuit Path */}
          <path
            d="M 20,410 L 160,410 L 210,340 L 410,340 L 470,260 L 580,260"
            fill="none"
            stroke="#D71920"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#neonRedGlow)"
            className="approach-laser-trace-2"
          />
          <path
            d="M 20,410 L 160,410 L 210,340 L 410,340 L 470,260 L 580,260"
            fill="none"
            stroke="#FFA0A5"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#intenseLaserGlow)"
            className="approach-laser-head-2"
          />

          {/* Path 3: Subtle Deep Accent Path */}
          <path
            d="M 230,180 L 380,180 L 430,120 L 550,120"
            fill="none"
            stroke="#D71920"
            strokeWidth="1.5"
            strokeOpacity="0.7"
            strokeLinecap="round"
            filter="url(#neonRedGlow)"
            className="approach-laser-trace-3"
          />

          {/* Glowing Isometric Node Points */}
          <circle cx="130" cy="220" r="3" fill="#FF4D55" filter="url(#intenseLaserGlow)" className="animate-pulse" />
          <circle cx="330" cy="170" r="3.5" fill="#FF4D55" filter="url(#intenseLaserGlow)" className="animate-pulse" />
          <circle cx="490" cy="170" r="3" fill="#FF4D55" filter="url(#intenseLaserGlow)" className="animate-pulse" />
          <circle cx="210" cy="340" r="3" fill="#FF4D55" filter="url(#intenseLaserGlow)" className="animate-pulse" />
        </svg>
      </div>

      {/* ── Ambient Radial Warm Red Glows ── */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-brand-red/[0.07] rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[250px] bg-brand-red/[0.05] rounded-full blur-[100px] pointer-events-none" />

      {/* ── Top and Bottom Soft Atmospheric Dividers ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-[#07080A]/60 pointer-events-none" />
    </div>
  );
}
