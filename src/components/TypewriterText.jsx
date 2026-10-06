import React from 'react';
import { motion } from 'framer-motion';

/**
 * TypewriterText Component
 * Renders an elegant, natural text fade-in presentation that feels
 * human-authored, confident, and editorial, eliminating robotic typing artifacts.
 */
export default function TypewriterText({
  text,
  className = '',
  onComplete,
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={onComplete}
      className={className}
    >
      {text}
    </motion.p>
  );
}
