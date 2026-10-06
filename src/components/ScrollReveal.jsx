import React from 'react';
import { motion } from 'framer-motion';

// Architectural luxury ease curve
const ARCH_EASE = [0.22, 1, 0.36, 1];

export default function ScrollReveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  duration = 0.85,
  distance = 36,
  scale = false,
  blur = true,
  className = '',
  threshold = '-40px'
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, x: 0 };
      case 'down': return { y: -distance, x: 0 };
      case 'left': return { x: distance, y: 0 };
      case 'right': return { x: -distance, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const pos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...pos,
        scale: scale ? 0.96 : 1,
        filter: blur ? 'blur(4px)' : 'none',
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: threshold }}
      transition={{
        duration,
        delay,
        ease: ARCH_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
