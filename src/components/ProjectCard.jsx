import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onClick={() => onSelect && onSelect(project)}
      className="group cursor-pointer flex flex-col rounded-3xl overflow-hidden transition-all duration-500 bg-white border border-[#E8E5E0] hover:border-[#C41E1E] shadow-sm hover:shadow-xl hover:-translate-y-1"
    >
      {/* Pure Photographic Image Frame - No Rectangles or Text Badges Over Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECEAE5]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
          loading="lazy"
        />
      </div>

      {/* Card Content & Metadata */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-sans text-black/50 pb-1 border-b border-[#F0EEEB]">
            <span className="font-semibold uppercase tracking-wider text-[#C41E1E] text-[11px]">
              {project.category}
            </span>
            <div className="flex items-center gap-1 text-black/60">
              <MapPin className="w-3 h-3 text-[#C41E1E] shrink-0" />
              <span className="truncate max-w-[140px]">{project.location.split(',')[0]}</span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold font-display tracking-tight text-black/85 group-hover:text-[#C41E1E] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-black/60 font-sans line-clamp-2 leading-relaxed">
            {project.subtitle || project.overview}
          </p>
        </div>

        {/* Technical Specs Strip */}
        <div className="pt-4 border-t border-[#E8E5E0] flex items-center justify-between text-xs font-sans">
          {project.year && (
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-black/50">Delivery / Timeline</span>
              <span className="font-semibold text-black/85">{project.year}</span>
            </div>
          )}
          {project.value && (
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-black/50">Valuation / Scope</span>
              <span className="font-semibold text-[#C41E1E]">{project.value}</span>
            </div>
          )}
          <div className="w-8 h-8 rounded-full bg-[#F5F3F0] group-hover:bg-[#C41E1E] text-black/85 group-hover:text-white flex items-center justify-center transition-colors shrink-0 ml-auto">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
