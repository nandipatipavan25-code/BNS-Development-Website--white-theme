import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Check, Mail, RefreshCw, Send, ShieldCheck } from 'lucide-react';

/**
 * FramerMotionEnvelopeButton Component
 * Recreates the Framer Motion submit interaction (by Matthias Ölschlegel):
 * 1. Form button morphs into a paper letter
 * 2. Letter folds into an envelope & gets stamped with a red BNS wax seal
 * 3. Sealed envelope slides into a 3D mailbox slot
 * 4. Mailbox closes & displays the confirmation state
 */
export default function FramerMotionEnvelopeButton({
  isSubmitting,
  isSubmitted,
  buttonLabel = "Submit Project Inquiry",
  onReset
}) {
  const [stage, setStage] = useState('idle'); // 'idle' | 'folding' | 'mailing' | 'delivered'

  useEffect(() => {
    if (isSubmitting) {
      setStage('folding');
      const timer1 = setTimeout(() => {
        setStage('mailing');
      }, 1200);

      const timer2 = setTimeout(() => {
        setStage('delivered');
      }, 2800);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else if (!isSubmitted) {
      setStage('idle');
    } else {
      setStage('delivered');
    }
  }, [isSubmitting, isSubmitted]);

  return (
    <div className="relative w-full overflow-hidden min-h-[52px]">
      <AnimatePresence mode="wait">
        
        {/* ========================================================
            STAGE 1: IDLE / SUBMIT BUTTON
            ======================================================== */}
        {stage === 'idle' && (
          <motion.div
            key="idle-btn"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            <button
              type="submit"
              className="w-full py-4 px-8 rounded-full bg-[#181818] hover:bg-[#ED1C24] text-white text-sm font-sans font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 cursor-pointer group select-none"
            >
              <span>{buttonLabel}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}

        {/* ========================================================
            STAGE 2 & 3: ENVELOPE FOLDING & MAILBOX ANIMATION
            ======================================================== */}
        {(stage === 'folding' || stage === 'mailing') && (
          <motion.div
            key="animation-stage"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="w-full py-8 px-6 rounded-2xl bg-[#F6F6F6] border border-black/[0.08] flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden shadow-inner"
          >
            {/* Status Label */}
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 text-xs font-mono font-semibold uppercase tracking-wider text-[#ED1C24] flex items-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#ED1C24]" />
              <span>{stage === 'folding' ? 'Folding & Stamping Envelope...' : 'Delivering into BNS Mailbox...'}</span>
            </motion.div>

            <div className="relative w-72 h-36 flex items-center justify-center mt-4">
              
              {/* MAILBOX ARTWORK */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: stage === 'mailing' ? 1 : 0.3, x: stage === 'mailing' ? 30 : 60 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
              >
                <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
                  {/* Mailbox Body */}
                  <rect x="20" y="25" width="80" height="55" rx="12" fill="#222528" stroke="#181818" strokeWidth="2" />
                  {/* Mailbox Slot */}
                  <rect x="30" y="38" width="60" height="8" rx="4" fill="#0D0E10" stroke="#333" strokeWidth="1" />
                  {/* Red Flag */}
                  <motion.path
                    d="M 95 30 L 95 10 L 112 15 L 95 20"
                    fill="#ED1C24"
                    animate={{ rotate: stage === 'mailing' ? [0, -25, 0] : 0 }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  />
                </svg>
              </motion.div>

              {/* FOLDING PAPER & ENVELOPE */}
              <motion.div
                animate={{
                  x: stage === 'mailing' ? [0, 20, 50] : 0,
                  y: stage === 'mailing' ? [0, 5, 0] : 0,
                  scale: stage === 'mailing' ? [1, 0.7, 0.2] : 1,
                  opacity: stage === 'mailing' ? [1, 0.9, 0] : 1,
                  rotate: stage === 'mailing' ? [0, 5, 12] : 0,
                }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="relative z-10 w-44 h-28 bg-white rounded-xl border border-black/15 shadow-md flex items-center justify-center p-3"
              >
                {/* Envelope Fold Flaps */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 176 112">
                  {/* Left & Right Flap Lines */}
                  <path d="M 0 0 L 88 56 L 0 112" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />
                  <path d="M 176 0 L 88 56 L 176 112" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />
                  
                  {/* Top Fold Flap */}
                  <motion.path
                    d="M 0 0 L 88 50 L 176 0 Z"
                    fill="#FAFAF8"
                    stroke="rgba(0,0,0,0.12)"
                    strokeWidth="1.5"
                    animate={{ rotateX: stage === 'folding' ? [0, 180] : 180 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ transformOrigin: "top" }}
                  />
                </svg>

                {/* RED BNS WAX SEAL STAMP */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: [0, 1.2, 1], rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 20 }}
                  className="relative z-20 w-10 h-10 rounded-full bg-[#ED1C24] text-white flex items-center justify-center shadow-lg border-2 border-white/80"
                >
                  <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-white select-none">
                    BNS
                  </span>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        )}

        {/* ========================================================
            STAGE 4: DELIVERED SUCCESS CONFIRMATION
            ======================================================== */}
        {stage === 'delivered' && (
          <motion.div
            key="delivered-stage"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -20 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="w-full"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-[#F6F6F6] border border-black/[0.08] text-center space-y-5 shadow-sm">
              
              {/* Wax Seal Stamp Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-16 h-16 rounded-full bg-[#ED1C24] text-white flex items-center justify-center mx-auto shadow-md shadow-[#ED1C24]/30 border-2 border-white"
              >
                <Check className="w-8 h-8 stroke-[3]" />
              </motion.div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ED1C24]/10 border border-[#ED1C24]/20 text-[#ED1C24] text-[11px] font-mono font-semibold uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Sealed &amp; Delivered to BNS Executive Team</span>
                </span>
                
                <h3 className="text-2xl font-semibold font-display text-black/95 pt-2">
                  Inquiry Received
                </h3>
                <p className="text-sm text-black/65 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you. Your message has been sent directly to our executive team. We will review your project parameters and respond promptly.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onReset}
                  className="px-6 py-2.5 rounded-full bg-[#181818] hover:bg-[#ED1C24] text-white text-xs font-semibold tracking-wider transition-colors cursor-pointer shadow-sm inline-flex items-center gap-2"
                >
                  <span>Send Another Message</span>
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
