import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Layers, ShieldCheck, Compass, FileText } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onContactClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl my-auto bg-white border border-[#E8E5E0] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-black/85"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E5E0] bg-[#FAFAF8] sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
              <span className="font-sans text-xs uppercase tracking-wider text-black/50 font-semibold">
                Capability // {service.number} // {service.title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#F5F3F0] text-black/50 hover:text-black/85 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-10 overflow-y-auto space-y-8 flex-grow">
            <div>
              <span className="text-[#C41E1E] font-sans text-xs uppercase tracking-wider font-semibold">
                {service.subtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-black/85 mt-1">
                {service.title}
              </h2>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-black/50 font-semibold font-sans">
                Overview &amp; Strategic Approach
              </h4>
              <p className="text-base sm:text-lg text-black/60 font-sans leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Subdisciplines Grid */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-black/50 font-semibold font-sans">
                Core Focus Areas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.subdisciplines.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E8E5E0] space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C41E1E]" />
                      <h5 className="font-display font-semibold text-black/85 text-base">
                        {sub.name}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-black/50 font-semibold font-sans">
                Key Deliverables &amp; Outcomes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8E5E0] text-sm text-black/85 font-sans shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-[#C41E1E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="px-6 py-4 border-t border-[#E8E5E0] bg-[#FAFAF8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-black/50 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#C41E1E]" />
              <span>Full Project Accountability • FL &amp; TX Operations</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-[#F5F3F0] hover:bg-[#EAE7E1] text-black/85 text-xs font-semibold transition-colors cursor-pointer w-full sm:w-auto"
              >
                Close
              </button>
              <button
                onClick={onContactClick}
                className="px-6 py-2.5 rounded-full bg-[#171717] hover:bg-[#C41E1E] text-white text-xs font-semibold transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
