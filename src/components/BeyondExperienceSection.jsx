import React, { useRef, useState, useEffect } from 'react';

// =========================================================================
// DATA: 12 PROJECT TYPES & AUTHENTIC BNS ASSETS
// =========================================================================
const PROJECT_TYPES = [
  {
    num: '01',
    name: 'Single-Family Residential',
    image: '/images/projects/modern-luxury-residence.png',
  },
  {
    num: '02',
    name: 'Multifamily Residential',
    image: '/images/projects/district-36-cover.png',
  },
  {
    num: '03',
    name: 'Commercial',
    image: '/images/project-types/commercial-mixed-use.png',
  },
  {
    num: '04',
    name: 'Hospitality',
    image: '/images/projects/marriott-residents-cover.png',
  },
  {
    num: '05',
    name: 'Mixed-Use',
    image: '/images/projects/district-36-image-1.png',
  },
  {
    num: '06',
    name: 'Condominium',
    image: '/images/projects/luxury-penthouse-design.png',
  },
  {
    num: '07',
    name: 'Ground-Up Construction',
    image: '/images/ground-up.jpg',
  },
  {
    num: '08',
    name: 'Building Shells',
    image: '/images/project-types/ground-up-superstructure.png',
  },
  {
    num: '09',
    name: 'Renovations',
    image: '/images/project-types/land-dev-renovations.png',
  },
  {
    num: '10',
    name: 'Land Development',
    image: '/images/projects/district-36-image-2.png',
  },
  {
    num: '11',
    name: 'Retail',
    image: '/images/projects/modern-retail-showroom.png',
  },
  {
    num: '12',
    name: 'Aviation',
    image: '/images/projects/marriott-residents-image-2.png',
  },
];

const REPEAT_COUNT = 2; // 12 * 2 = 24 items around the 360-degree cylinder ring
const TOTAL_CARDS = PROJECT_TYPES.length * REPEAT_COUNT;
const STEP_ANGLE = 360 / TOTAL_CARDS; // 15 degrees per card

export default function BeyondExperienceSection() {
  const containerRef = useRef(null);
  const hubRef = useRef(null);

  // Responsive 3D cylinder geometry (Calibrated for edge-to-edge full-bleed span)
  const [geom, setGeom] = useState({
    perspective: 1800,
    radius: 1080,
    cardWidth: 245,
    cardHeight: 330,
  });

  const [isDragging, setIsDragging] = useState(false);

  // Dynamic calibration across viewports
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1440) {
        setGeom({
          perspective: 1800,
          radius: 1080,
          cardWidth: 245,
          cardHeight: 330,
        });
      } else if (w >= 1024) {
        setGeom({
          perspective: 1600,
          radius: 940,
          cardWidth: 215,
          cardHeight: 290,
        });
      } else if (w >= 768) {
        setGeom({
          perspective: 1300,
          radius: 760,
          cardWidth: 180,
          cardHeight: 245,
        });
      } else {
        setGeom({
          perspective: 900,
          radius: 520,
          cardWidth: 145,
          cardHeight: 200,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous auto-rotation, gesture drag & momentum physics
  useEffect(() => {
    let animId = null;
    let momentumAnimId = null;
    let rotation = 0;
    let lastTime = performance.now();
    let isHovered = false;
    let isUserInteracting = false;
    let startX = 0;
    let lastTrackTime = 0;
    let velocity = 0;

    const dragSensitivity = 0.22;
    const friction = 0.95;
    const autoRotateSpeed = 24; // Smooth, cinematic 24 deg/sec pace

    const updateHub = (deg) => {
      if (hubRef.current) {
        const normalized = ((deg % 360) + 360) % 360;
        hubRef.current.style.transform = `rotateY(${normalized}deg)`;
        hubRef.current.style.webkitTransform = `rotateY(${normalized}deg)`;
      }
    };

    // ── 1. Auto-Rotation Frame Loop ──
    const animate = (timestamp) => {
      const dt = Math.min(50, timestamp - lastTime);
      lastTime = timestamp;

      if (!isUserInteracting && Math.abs(velocity) < 0.12) {
        // Continuous steady rotation (cards travel right-to-left across the front)
        const hoverMultiplier = isHovered ? 0.75 : 1.0;
        const delta = (autoRotateSpeed / 100) * 30 * hoverMultiplier * (dt / 1000);
        rotation = (rotation + delta) % 360;
        updateHub(rotation);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // ── 2. Drag & Swipe Interaction ──
    const container = containerRef.current;
    if (!container) return;

    const onMouseEnter = () => {
      isHovered = true;
    };
    const onMouseLeave = () => {
      isHovered = false;
    };

    const handleDragStart = (clientX) => {
      isUserInteracting = true;
      setIsDragging(true);
      startX = clientX;
      lastTrackTime = performance.now();
      velocity = 0;
      if (momentumAnimId) cancelAnimationFrame(momentumAnimId);
    };

    const handleDragMove = (clientX) => {
      if (!isUserInteracting) return;
      const now = performance.now();
      const dtMove = now - lastTrackTime;
      const dx = -(clientX - startX) * dragSensitivity;

      rotation = ((rotation + dx) % 360 + 360) % 360;
      updateHub(rotation);

      if (dtMove > 0) {
        const instantVel = (dx / dtMove) * 16.66;
        velocity = velocity * 0.7 + instantVel * 0.3;
      }

      startX = clientX;
      lastTrackTime = now;
    };

    const handleDragEnd = () => {
      if (!isUserInteracting) return;
      isUserInteracting = false;
      setIsDragging(false);

      if (Math.abs(velocity) > 0.12) {
        const decayMomentum = () => {
          if (Math.abs(velocity) < 0.12 || isUserInteracting) {
            velocity = 0;
            momentumAnimId = null;
            return;
          }
          rotation = ((rotation + velocity) % 360 + 360) % 360;
          updateHub(rotation);
          velocity *= friction;
          momentumAnimId = requestAnimationFrame(decayMomentum);
        };
        momentumAnimId = requestAnimationFrame(decayMomentum);
      }
    };

    // Desktop Mouse Events
    const onMouseDown = (e) => {
      e.preventDefault();
      handleDragStart(e.clientX);

      const onMouseMove = (moveEvent) => {
        handleDragMove(moveEvent.clientX);
      };

      const onMouseUp = () => {
        handleDragEnd();
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    };

    // Mobile / Touch Events
    let touchStartY = 0;
    let isHorizontalGesture = null;

    const onTouchStart = (e) => {
      if (e.touches.length !== 1) return;
      touchStartY = e.touches[0].clientY;
      isHorizontalGesture = null;
      handleDragStart(e.touches[0].clientX);
    };

    const onTouchMove = (e) => {
      if (!isUserInteracting || e.touches.length !== 1) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      if (isHorizontalGesture === null) {
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - touchStartY);
        if (diffX > 6 || diffY > 6) {
          isHorizontalGesture = diffX > diffY;
        }
      }

      if (isHorizontalGesture === false) {
        // Vertical page scroll detected: allow normal browser page scroll
        isUserInteracting = false;
        setIsDragging(false);
        return;
      }

      if (isHorizontalGesture === true && e.cancelable) {
        e.preventDefault();
      }

      handleDragMove(currentX);
    };

    const onTouchEnd = () => {
      handleDragEnd();
      isHorizontalGesture = null;
    };

    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (momentumAnimId) cancelAnimationFrame(momentumAnimId);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <section
      id="sector-versatility"
      className="relative w-full pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12 bg-[#FFFFFF] text-[#1A1A1A] border-t border-b border-black/[0.06] overflow-hidden select-none"
    >
      {/* ── Editorial Header Area (Centered in container) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="text-center max-w-5xl lg:max-w-6xl mx-auto space-y-2 mb-2 sm:mb-3 md:mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F3] border border-black/[0.07] text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/80 font-semibold shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
            <span>Sector Versatility</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] xl:text-[42px] font-display font-semibold text-[#1A1A1A] tracking-tight leading-[1.2] sm:leading-[1.18] md:leading-[50px] lg:whitespace-nowrap">
            Experience That Goes Beyond One Type of Project
          </h2>

          <p className="text-sm sm:text-base md:text-[16px] text-[#666666] font-sans leading-relaxed max-w-2xl mx-auto">
            Every project is different. Experience across multiple sectors gives our team a broader perspective when planning, coordinating and solving problems.
          </p>
        </div>
      </div>

      {/* ── 3D Cylindrical Curved Carousel Viewport (FULL-BLEED EDGE-TO-EDGE, MINIMAL VERTICAL SPACE) ── */}
      <div
        ref={containerRef}
        className={`relative w-full h-[220px] sm:h-[250px] md:h-[275px] lg:h-[295px] flex items-center justify-center overflow-visible ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* 3D Perspective Box */}
        <div
          className="w-full h-full relative pointer-events-none flex items-center justify-center"
          style={{
            perspective: `${geom.perspective}px`,
            WebkitPerspective: `${geom.perspective}px`,
          }}
        >
          {/* Centered Transformation Anchor */}
          <div
            className="absolute left-1/2 top-1/2 pointer-events-none"
            style={{
              transform: 'translate(-50%, -50%)',
              WebkitTransform: 'translate(-50%, -50%)',
              transformStyle: 'preserve-3d',
              WebkitTransformStyle: 'preserve-3d',
            }}
          >
            {/* Rotating Cylinder Hub */}
            <div
              ref={hubRef}
              className="absolute left-0 top-0 pointer-events-none will-change-transform"
              style={{
                transformStyle: 'preserve-3d',
                WebkitTransformStyle: 'preserve-3d',
                transform: 'rotateY(0deg)',
                WebkitTransform: 'rotateY(0deg)',
              }}
            >
              {/* 24 Cards distributed evenly around the 360° ring, extending beyond viewport edges */}
              {Array.from({ length: REPEAT_COUNT }).map((_, repIdx) =>
                PROJECT_TYPES.map((item, itemIdx) => {
                  const cardIndex = repIdx * PROJECT_TYPES.length + itemIdx;
                  // Negative angle so that positive hub rotation advances cards right-to-left
                  const cardAngle = -cardIndex * STEP_ANGLE;

                  return (
                    <div
                      key={`${repIdx}-${item.num}`}
                      className="absolute pointer-events-auto"
                      style={{
                        left: '50%',
                        top: '50%',
                        width: `${geom.cardWidth}px`,
                        height: `${geom.cardHeight}px`,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: `translate(-50%, -50%) rotateY(${cardAngle}deg) translateZ(-${geom.radius}px)`,
                        WebkitTransform: `translate(-50%, -50%) rotateY(${cardAngle}deg) translateZ(-${geom.radius}px)`,
                        transformStyle: 'preserve-3d',
                        WebkitTransformStyle: 'preserve-3d',
                      }}
                    >
                      <div className="w-full h-full rounded-[14px] sm:rounded-[16px] overflow-hidden relative border border-black/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.08)] bg-[#F5F5F3] group transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
                        {/* Real BNS Project Photograph (100% visible, no fade, no blur) */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover select-none pointer-events-none brightness-[0.98] contrast-[1.02]"
                          loading="eager"
                          draggable={false}
                        />

                        {/* Subtle Editorial Sector Tag Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-3 pt-8 bg-gradient-to-t from-black/75 via-black/35 to-transparent flex items-center justify-between pointer-events-none">
                          <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#ED1C24] drop-shadow-xs">
                            {item.num}
                          </span>
                          <span className="text-[11px] sm:text-xs font-sans font-medium text-white/95 truncate max-w-[82%] drop-shadow-xs">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Clean Editorial Project Types Content (Minimalist Sector Bar) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="w-full max-w-5xl mx-auto mt-1 sm:mt-2 pt-3 sm:pt-3.5 border-t border-black/[0.08]">
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3.5 text-xs sm:text-[13px] font-sans">
            {PROJECT_TYPES.map((pt) => (
              <div key={pt.num} className="inline-flex items-center gap-2 select-none group">
                <span className="font-mono text-[11px] font-semibold text-[#ED1C24]">
                  {pt.num}
                </span>
                <span className="text-[#1A1A1A] font-medium tracking-tight">
                  {pt.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
