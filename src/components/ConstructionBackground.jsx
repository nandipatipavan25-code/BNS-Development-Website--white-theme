import React, { useRef, useEffect } from 'react';

/**
 * ConstructionBackground Component
 * Provides:
 * 1. Subtle, continuous background video playback (/videos/Home page bg video -2.mp4)
 * 2. Deep architectural dark canvas with balanced vignette
 * 3. Continuous looping across desktop, tablet, and mobile without unexpected pauses on scroll.
 */
export default function ConstructionBackground({
  showVideo = true,
  videoSrc = '/videos/home-page-background-video-2.mp4',
  videoOpacity = null,
  playbackRate = null
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    let isMounted = true;
    const targetPlaybackRate = playbackRate ?? (videoSrc.includes('home-page-background-video-2') ? 2.0 : 1.0);

    // Strict DOM properties for reliable mobile/desktop autoplay & continuous looping
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.defaultPlaybackRate = targetPlaybackRate;
    video.playbackRate = targetPlaybackRate;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('loop', '');
    video.setAttribute('autoplay', '');

    const safePlay = () => {
      if (!video || !isMounted) return;
      video.muted = true;
      video.defaultPlaybackRate = targetPlaybackRate;
      video.playbackRate = targetPlaybackRate;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Retry on first user interaction if blocked by strict browser policy
          const resumeOnInteraction = () => {
            if (video && isMounted && video.paused) {
              video.muted = true;
              video.defaultPlaybackRate = targetPlaybackRate;
              video.playbackRate = targetPlaybackRate;
              video.play().catch(() => {});
            }
          };
          window.addEventListener('click', resumeOnInteraction, { once: true, passive: true });
          window.addEventListener('touchstart', resumeOnInteraction, { once: true, passive: true });
        });
      }
    };

    if (video.readyState >= 1) {
      safePlay();
    } else {
      video.load();
      video.addEventListener('loadedmetadata', safePlay, { once: true });
      video.addEventListener('canplay', safePlay, { once: true });
    }

    // Seamless continuous loop & play recovery handlers
    const handleEnded = () => {
      if (video && isMounted) {
        safePlay();
      }
    };

    const handlePause = () => {
      if (isMounted && showVideo && video && video.paused) {
        safePlay();
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && isMounted && video) {
        safePlay();
      }
    };

    const handleRateChange = () => {
      if (video && isMounted && video.playbackRate !== targetPlaybackRate) {
        video.playbackRate = targetPlaybackRate;
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('pause', handlePause);
    video.addEventListener('playing', handleRateChange);
    video.addEventListener('ratechange', handleRateChange);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', safePlay);

    // Heartbeat check to guarantee uninterrupted playback across scrolling and interaction
    const heartbeatTimer = setInterval(() => {
      if (isMounted && showVideo && video) {
        if (video.paused) {
          safePlay();
        } else if (video.playbackRate !== targetPlaybackRate) {
          video.playbackRate = targetPlaybackRate;
        }
      }
    }, 1200);

    safePlay();

    return () => {
      isMounted = false;
      clearInterval(heartbeatTimer);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('playing', handleRateChange);
      video.removeEventListener('ratechange', handleRateChange);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', safePlay);
    };
  }, [showVideo, videoSrc, playbackRate]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#07080A]"
      aria-hidden="true"
    >
      {/* ── Background Video Layer ── */}
      {showVideo && (
        <div className="absolute inset-0 z-0 overflow-hidden transition-opacity duration-700">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            style={{
              opacity: videoOpacity ?? (videoSrc.includes('contact') ? 0.20 : 0.38),
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              willChange: 'transform'
            }}
            className="w-full h-full object-cover filter contrast-[1.05] brightness-100 scale-105 pointer-events-none transition-opacity duration-500"
            onEnded={(e) => {
              e.currentTarget.play().catch(() => {});
            }}
            onPause={(e) => {
              if (showVideo && e.currentTarget) {
                e.currentTarget.play().catch(() => {});
              }
            }}
          >
            <source src={videoSrc} type={videoSrc.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
            <source src="/videos/bg-video.webm" type="video/webm" />
            <source src="/videos/Bg video.webm" type="video/webm" />
            <source src="/videos/home-page-background-video-2.webm" type="video/webm" />
            <source src="/videos/Home page background video -2.webm" type="video/webm" />
            <source src="/videos/bg-video.mp4" type="video/mp4" />
          </video>
          {/* Natural, balanced architectural dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07080A]/35 via-[#07080A]/15 to-[#07080A]/50 pointer-events-none" />
        </div>
      )}

      {/* ── Soft Atmospheric Ambient Depth ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
}
