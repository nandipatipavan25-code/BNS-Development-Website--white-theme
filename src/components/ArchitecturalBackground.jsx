import React, { useEffect, useRef } from 'react';

export default function ArchitecturalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse tracking with smooth lerp
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 200,
      isHovering: false,
    };

    // Ambient floating lights (soft diffuse warm & brand red tint)
    const orbs = [
      { x: 0.2, y: 0.25, vx: 0.0003, vy: 0.0002, r: 320, color: 'rgba(196, 30, 30, 0.022)' },
      { x: 0.8, y: 0.6, vx: -0.0002, vy: 0.0003, r: 380, color: 'rgba(235, 230, 222, 0.45)' },
      { x: 0.5, y: 0.85, vx: 0.00025, vy: -0.0002, r: 280, color: 'rgba(196, 30, 30, 0.018)' },
    ];

    let sweepProgress = 0;

    const handleResize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovering = true;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.isHovering = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.isHovering = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    handleResize();

    const gridSize = 44; // Architectural blueprint grid pitch

    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse lerp
      if (mouse.isHovering) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      }

      // Clear with transparency so CSS background (#FAFAF8) shows through
      ctx.clearRect(0, 0, width, height);

      // ── 1. Floating Diffuse Ambient Light Orbs ──
      if (!prefersReducedMotion) {
        orbs.forEach((orb) => {
          orb.x += orb.vx;
          orb.y += orb.vy;
          if (orb.x < 0.05 || orb.x > 0.95) orb.vx *= -1;
          if (orb.y < 0.05 || orb.y > 0.95) orb.vy *= -1;

          const cx = orb.x * width;
          const cy = orb.y * height;
          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
          grad.addColorStop(0, orb.color);
          grad.addColorStop(1, 'rgba(250, 250, 248, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // ── 2. Animated Diagonal Drafting Sweep Line ──
      if (!prefersReducedMotion) {
        sweepProgress = (sweepProgress + dt * 0.08) % 1;
        const sweepX = (sweepProgress * (width + height * 1.5)) - height * 0.5;
        
        ctx.save();
        ctx.strokeStyle = 'rgba(196, 30, 30, 0.035)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([8, 16]);
        ctx.beginPath();
        ctx.moveTo(sweepX, -50);
        ctx.lineTo(sweepX - height, height + 50);
        ctx.stroke();
        ctx.restore();
      }

      // ── 3. Responsive Architectural Drafting Grid & Intersection Crosshairs ──
      const cols = Math.ceil(width / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          // Proximity effect to cursor
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = mouse.radius * mouse.radius;

          const isMajorNode = (i % 4 === 0) && (j % 4 === 0);
          let proximityFactor = 0;

          if (distSq < maxDistSq) {
            proximityFactor = 1 - Math.sqrt(distSq) / mouse.radius;
          }

          if (isMajorNode) {
            // Precision Crosshair marker (+)
            const crossSize = 3 + proximityFactor * 3.5;
            const alpha = 0.12 + proximityFactor * 0.45;
            const isRedAccent = (i % 8 === 0) && (j % 8 === 0) && proximityFactor > 0.3;

            ctx.strokeStyle = isRedAccent
              ? `rgba(196, 30, 30, ${alpha * 1.2})`
              : `rgba(23, 23, 23, ${alpha})`;
            ctx.lineWidth = 1;

            ctx.beginPath();
            // Horizontal tick
            ctx.moveTo(x - crossSize, y);
            ctx.lineTo(x + crossSize, y);
            // Vertical tick
            ctx.moveTo(x, y - crossSize);
            ctx.lineTo(x, y + crossSize);
            ctx.stroke();
          } else {
            // Fine blueprint grid dot
            let radius = 0.85;
            let alpha = 0.07;

            if (proximityFactor > 0) {
              radius += proximityFactor * 1.2;
              alpha += proximityFactor * 0.28;
            }

            ctx.fillStyle = `rgba(23, 23, 23, ${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
