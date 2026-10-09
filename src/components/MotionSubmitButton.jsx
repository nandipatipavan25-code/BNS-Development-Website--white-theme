import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Mail, ArrowRight, RefreshCw, Check } from 'lucide-react';

/**
 * MotionSubmitButton - Inspired by Matthias Ölschlegel's Framer Motion Submit Component
 * Folds the form into a wax-sealed envelope, sends it into the mailbox slot,
 * and seamlessly transitions into the success state.
 */
export default function MotionSubmitButton({
  isSubmitting,
  isSubmitted,
  buttonLabel = "Submit Project Inquiry",
  sendingLabel = "Sending inquiry...",
  successTitle = "Inquiry Received",
  successMessage = "Thank you. Your message has been sent directly to our executive team. We will review your project parameters and respond promptly.",
  onReset
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="button-state"
            initial={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95,
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
            }}
            className="w-full"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full py-4 px-8 rounded-full bg-[#181818] hover:bg-[#ED1C24] text-white text-sm font-sans font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer group disabled:opacity-90 overflow-hidden select-none"
            >
              {/* Background fill pulse on submit */}
              <motion.div
                className="absolute inset-0 bg-[#ED1C24]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isSubmitting ? 1 : 0 }}
                style={{ originX: 0 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              <div className="relative z-10 flex items-center gap-2.5">
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <RefreshCw className="w-4 h-4 text-white" />
                    </motion.div>
                    <span>{sendingLabel}</span>
                  </>
                ) : (
                  <>
                    <span>{buttonLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </div>
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="success-envelope-state"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="w-full"
          >
            {/* Animated Envelope & Mailbox Card Sequence */}
            <div className="relative p-8 sm:p-10 rounded-2xl bg-[#F6F6F6] border border-black/[0.08] text-center space-y-5 overflow-hidden shadow-sm">
              
              {/* Top Decorative Wax Stamp Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.1 }}
                className="relative mx-auto w-16 h-16 rounded-full bg-[#ED1C24] text-white flex items-center justify-center shadow-lg shadow-[#ED1C24]/30 border-2 border-white"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.25, type: "spring" }}
                >
                  <Check className="w-8 h-8 stroke-[3]" />
                </motion.div>
              </motion.div>

              {/* Envelope Stamp Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ED1C24]/10 border border-[#ED1C24]/20 text-[#ED1C24] text-[11px] font-mono font-semibold uppercase tracking-wider mx-auto"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Sealed &amp; Delivered to BNS Executive Team</span>
              </motion.div>

              {/* Title & Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="space-y-2 max-w-md mx-auto"
              >
                <h3 className="text-2xl font-semibold font-display text-black/95">
                  {successTitle}
                </h3>
                <p className="text-sm text-black/65 font-sans leading-relaxed">
                  {successMessage}
                </p>
              </motion.div>

              {/* Send Another Message Action */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-3"
              >
                <button
                  type="button"
                  onClick={onReset}
                  className="px-6 py-2.5 rounded-full bg-[#181818] hover:bg-[#ED1C24] text-white text-xs font-semibold tracking-wider transition-colors cursor-pointer shadow-sm inline-flex items-center gap-2"
                >
                  <span>Send Another Message</span>
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
