import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { teamData } from '../data/team';
import ScrollReveal from './ScrollReveal';
import { Mail, Phone } from 'lucide-react';
import CardBeamBorder from './CardBeamBorder';

export default function TeamBioTabs({ onContactClick }) {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full">
      {/* 4 Flip Cards Grid (Hover-to-flip & Click-to-flip) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {teamData.map((person, idx) => {
          const isFlipped = !!flippedCards[person.id];

          return (
            <ScrollReveal key={person.id} delay={idx * 0.08} direction="up" className="h-full flex justify-center">
              {/* 3D Flip Card Container */}
              <div
                tabIndex={0}
                role="button"
                aria-label={`Flip card for ${person.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip(person.id);
                  }
                }}
                onClick={() => toggleFlip(person.id)}
                className={`flip-card relative w-full max-w-[310px] h-[500px] sm:h-[520px] cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1C24] rounded-3xl select-none ${
                  isFlipped ? 'is-flipped' : ''
                }`}
              >
                {/* 3D Flipping Body (Smooth 180° rotation on hover or click) */}
                <div
                  className={`flip-card-inner relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* ──────────────── FRONT FACE ──────────────── */}
                  <div
                    className="flip-card-front absolute inset-0 w-full h-full backface-hidden bg-white border border-black/[0.08] group-hover:border-[#ED1C24]/50 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                    }}
                  >
                    <CardBeamBorder borderRadius="24px" />
                    {/* Portrait Photo (Dominant & Tall - Whitespace Reduced) */}
                    <div className="relative h-[390px] sm:h-[410px] w-full overflow-hidden bg-[#F0F0EE]">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Information Area (Compact & Proportional - No Dead Whitespace) */}
                    <div className="p-4 sm:p-4.5 flex flex-col justify-center flex-1">
                      <div>
                        <h3 className="text-base sm:text-lg font-display font-semibold text-black/90 group-hover:text-[#ED1C24] transition-colors leading-tight">
                          {person.name}
                        </h3>
                        <p className="text-xs text-black/55 font-sans truncate mt-1" title={person.title}>
                          {person.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ──────────────── BACK FACE ──────────────── */}
                  <div
                    className="flip-card-back absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white border border-black/[0.08] group-hover:border-[#ED1C24]/50 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col justify-between overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <CardBeamBorder borderRadius="24px" />
                    <div className="space-y-3.5">
                      {/* Back Header */}
                      <div className="flex items-start justify-between border-b border-black/[0.06] pb-3">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#ED1C24] font-bold block">
                            {person.role || 'Leadership'}
                          </span>
                          <h4 className="text-lg sm:text-xl font-display font-semibold text-black/95">
                            {person.name}
                          </h4>
                        </div>
                        {/* LinkedIn Icon (placeholder, no link) */}
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="w-7 h-7 rounded-full bg-[#F2F2EF] hover:bg-[#ED1C24] text-black/60 hover:text-white flex items-center justify-center transition-colors cursor-default"
                          aria-label="LinkedIn"
                          title="LinkedIn Profile"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Biography */}
                      <p className="text-xs sm:text-[13px] text-black/75 font-sans leading-relaxed">
                        {person.bio}
                      </p>

                      {/* Credentials & Focus */}
                      {person.credentials && person.credentials.length > 0 && (
                        <div className="space-y-1.5 pt-2 border-t border-black/[0.06]">
                          <span className="text-[10px] uppercase tracking-wider text-[#ED1C24] font-mono font-semibold block">
                            Credentials &amp; Focus
                          </span>
                          {person.credentials.map((cred, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2 text-xs text-black/70 font-sans">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] mt-1 shrink-0" />
                              <span className="leading-snug text-[11px]">{cred}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Direct Contact Footer */}
                    <div className="pt-3 border-t border-black/[0.06] space-y-1 text-xs font-sans text-black/65 mt-2">
                      {person.email && (
                        <a
                          href={`mailto:${person.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 hover:text-[#ED1C24] transition-colors truncate"
                        >
                          <Mail className="w-3 h-3 text-[#ED1C24] shrink-0" />
                          <span className="truncate text-[11px] font-mono">{person.email}</span>
                        </a>
                      )}
                      {person.phone && (
                        <a
                          href={`tel:${person.phone.replace(/[^0-9]/g, '')}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 hover:text-[#ED1C24] transition-colors"
                        >
                          <Phone className="w-3 h-3 text-[#ED1C24] shrink-0" />
                          <span className="text-[11px] font-mono">{person.phone}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
