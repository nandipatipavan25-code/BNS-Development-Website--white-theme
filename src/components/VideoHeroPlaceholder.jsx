import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function VideoHeroPlaceholder({
  videoSrc = null, // Set to MP4 URL when client supplies final video
  posterImage = "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=2000&q=85",
  title = "BNS Development Project Showcase",
  subtitle = "Architecture • Structural Assembly • Turnkey Delivery",
  className = ""
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className={`relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#07080A] shadow-2xl ${className}`}>
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full pb-[56.25%] overflow-hidden">
        {/* Video Element or Poster Image */}
        {videoSrc ? (
          <video
            src={videoSrc}
            poster={posterImage}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url(${posterImage})` }}
          />
        )}

        {/* Natural Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/40 to-black/20 pointer-events-none" />

        {/* Center Architectural Overlay / Play Trigger */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 max-w-xl"
          >
            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#111215]/90 border border-white/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-brand-red hover:bg-[#18191E] hover:shadow-2xl focus:outline-none cursor-pointer"
              aria-label={isPlaying ? 'Pause showcase' : 'Play showcase'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-7 sm:h-7 text-brand-red" />
              ) : (
                <Play className="w-6 h-6 sm:w-7 sm:h-7 text-brand-red translate-x-0.5" />
              )}
            </button>

            <div className="space-y-1.5">
              <span className="inline-block px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-xs font-sans font-medium text-brand-subheading">
                {videoSrc ? 'Cinematic Presentation' : 'Project Visual Showcase'}
              </span>
              <h3 className="text-lg sm:text-2xl font-semibold font-display tracking-tight text-[#E6E6E6]">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] font-sans">
                {subtitle}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Top Control Bar */}
        <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-20 pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#07080A]/80 backdrop-blur-md border border-white/10 text-xs font-sans text-brand-steel">
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            <span>High-Definition Stream</span>
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#07080A]/80 backdrop-blur-md border border-white/10 hover:text-white text-xs font-sans text-brand-steel transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-brand-red" />}
            <span>{isMuted ? 'Unmute' : 'Muted'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
