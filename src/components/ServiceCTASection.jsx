import React, { useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import EyeFollowButton from './EyeFollowButton';

export default function ServiceCTASection({
  titlePrefix = 'Have a Project',
  titleHighlight = "You're Planning?",
  description,
  buttonText = "Let's Talk About Your Project",
  onContact,
  className = '',
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback retry on user interaction or visibility
      });
    }

    // Ensure playback resumes when tab or page becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <ScrollReveal direction="up" distance={30} delay={0.1}>
      <div className={`relative group ${className}`}>
        {/* Luminous Red Ambient Border Glow Effect - Positioned outside the card */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-brand-red/35 via-brand-red/15 to-brand-red/35 opacity-40 group-hover:opacity-65 blur-[2px] transition-all duration-700 pointer-events-none" />
        <div className="absolute -inset-[2px] rounded-3xl bg-brand-red/20 blur-xl opacity-25 group-hover:opacity-45 transition-all duration-700 pointer-events-none" />

        {/* Outer Frame with clean rounded-3xl overflow-hidden */}
        <div className="relative rounded-3xl overflow-hidden border border-brand-red/25 group-hover:border-brand-red/50 shadow-[0_0_30px_-8px_rgba(215,25,32,0.20)] group-hover:shadow-[0_0_45px_-5px_rgba(215,25,32,0.35)] backdrop-blur-2xl transition-all duration-700 bg-[#07080A]">
          {/* Background Video Container - Exact Edge-to-Edge Fit, No Bars or Unwanted Cropping */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#07080A]">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              className="w-full h-full object-cover object-center pointer-events-none brightness-105 contrast-100"
              style={{ opacity: 1 }}
              onEnded={(e) => {
                e.currentTarget.play().catch(() => {});
              }}
            >
              <source src="/videos/CTA Background.webm" type="video/webm" />
              <source src="/videos/cta-bg.webm" type="video/webm" />
              <source src="/videos/cta-bg.mp4" type="video/mp4" />
              <source src="/videos/CTA Background.mp4" type="video/mp4" />
            </video>

            {/* 20% Black Layer Overlay */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* Soft, minimal vignette for optimal typography contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Foreground Content with generous vertical height for natural cinematic proportion */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 text-center flex flex-col items-center justify-center min-h-[440px] sm:min-h-[500px]">
            <div className="max-w-3xl mx-auto space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[40px] section-heading-title font-display font-semibold tracking-tight leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                <span className="text-[#E6E6E6]" style={{ color: '#E6E6E6' }}>{titlePrefix}</span>{' '}
                <span className="text-brand-red">{titleHighlight}</span>
              </h2>

              {description && (
                <p className="text-sm sm:text-base lg:text-lg text-[#9CA3AF] font-sans leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                  {description}
                </p>
              )}

              <div className="pt-3 flex justify-center">
                <EyeFollowButton
                  onClick={onContact}
                  size="md"
                  icon="none"
                >
                  {buttonText}
                </EyeFollowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
