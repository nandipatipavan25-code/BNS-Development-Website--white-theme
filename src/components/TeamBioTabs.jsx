import React from 'react';
import { motion } from 'framer-motion';
import { teamData } from '../data/team';
import PolaroidFlipCard from './PolaroidFlipCard';
import { Sparkles, RotateCw } from 'lucide-react';

export default function TeamBioTabs({ onContactClick }) {
  return (
    <div className="w-full space-y-6">
      {/* Interactive Helper Hint */}
      <div className="flex items-center justify-between flex-wrap gap-3 px-2">
        <div className="flex items-center gap-2 text-xs font-mono text-black/50">
          <span className="w-2 h-2 rounded-full bg-[#C41E1E] animate-pulse" />
          <span>Interactive Leadership Cards</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-black/60">
          <RotateCw className="w-3.5 h-3.5 text-[#C41E1E]" />
          <span>Hover for 3D tilt • Click to view bio</span>
        </div>
      </div>

      {/* 4 Polaroid Flip Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {teamData.map((person, idx) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex justify-center"
          >
            <PolaroidFlipCard
              person={person}
              onContactClick={onContactClick}
              tiltStrength={14}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
