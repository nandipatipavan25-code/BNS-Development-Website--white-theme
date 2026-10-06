import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * SectionHeading Component with Smooth Typewriter Effect
 * Types out the heading title and red highlight sequentially when scrolled into view.
 */
export default function SectionHeading({
  tag = "Section",
  title = "Heading Title",
  highlight = "",
  description = "",
  centered = false,
  theme = "light", // 'light' | 'dark'
  showRedLine = true,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  typingSpeed = 24, // ms per character
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  const [typedTitle, setTypedTitle] = useState('');
  const [typedHighlight, setTypedHighlight] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  const cleanTag = typeof tag === 'string' ? tag.replace(/^\/\/\s*/, '') : tag;
  const isDark = theme === 'dark';

  // Ensure title ends with a space if highlight exists and title doesn't end with whitespace
  const rawTitle = typeof title === 'string' ? title : String(title || '');
  const rawHighlight = typeof highlight === 'string' ? highlight : String(highlight || '');
  const formattedTitle = rawHighlight && !rawTitle.endsWith(' ') ? `${rawTitle} ` : rawTitle;

  useEffect(() => {
    if (!isInView) return;

    setIsTyping(true);
    setCursorVisible(true);

    let titleIndex = 0;
    let highlightIndex = 0;
    let timeoutId;

    const typeNextChar = () => {
      if (titleIndex < formattedTitle.length) {
        titleIndex++;
        setTypedTitle(formattedTitle.slice(0, titleIndex));
        timeoutId = setTimeout(typeNextChar, typingSpeed);
      } else if (highlightIndex < rawHighlight.length) {
        highlightIndex++;
        setTypedHighlight(rawHighlight.slice(0, highlightIndex));
        timeoutId = setTimeout(typeNextChar, typingSpeed);
      } else {
        // Typing finished
        setTypingComplete(true);
        // Allow cursor to blink 2 times then fade out
        timeoutId = setTimeout(() => {
          setCursorVisible(false);
          setIsTyping(false);
        }, 600);
      }
    };

    // Short initial pause before starting to type
    timeoutId = setTimeout(typeNextChar, 100);

    return () => clearTimeout(timeoutId);
  }, [isInView, formattedTitle, rawHighlight, typingSpeed]);

  return (
    <div
      ref={containerRef}
      className={`${description ? 'mb-6 sm:mb-8' : 'mb-4'} ${
        centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'
      } ${className}`}
    >
      {/* Eyebrow Tag */}
      {cleanTag && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`flex items-center gap-2.5 mb-2.5 ${
            centered ? 'justify-center text-center' : ''
          }`}
        >
          {showRedLine && (
            <span className="w-5 h-[2px] bg-[#C41E1E] inline-block shrink-0" />
          )}
          <span
            className={`text-xs sm:text-[13px] font-sans font-semibold tracking-wider ${
              isDark ? 'text-white/60' : 'text-black/45'
            }`}
          >
            {cleanTag}
          </span>
        </motion.div>
      )}

      {/* Main Title with Smooth Typewriter Effect */}
      <h2
        className={`relative text-2xl sm:text-3xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight leading-[1.15] ${
          isDark ? 'text-white' : 'text-black/90'
        } ${centered ? 'text-center' : ''} ${titleClassName}`}
      >
        {/* Invisible Ghost Layout (Guarantees exact reserved height & prevents layout shift) */}
        <span className="invisible select-none pointer-events-none" aria-hidden="true">
          <span>{formattedTitle}</span>
          {rawHighlight && (
            <span className="text-[#C41E1E] font-semibold">{rawHighlight}</span>
          )}
        </span>

        {/* Typed Content Stream */}
        <span className="absolute inset-0 left-0 top-0">
          <span>{typedTitle}</span>
          {typedHighlight && (
            <span className="text-[#C41E1E] font-semibold">{typedHighlight}</span>
          )}

          {/* Typing Cursor */}
          {cursorVisible && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
              className="inline-block w-[2.5px] h-[0.85em] bg-[#C41E1E] ml-1 align-baseline translate-y-[1px] rounded-sm"
            />
          )}
        </span>
      </h2>

      {/* Description with Smooth Fade-in */}
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="mt-3.5 sm:mt-4"
        >
          <div
            className={`text-sm sm:text-base leading-relaxed font-sans ${
              isDark ? 'text-white/80' : 'text-black/60'
            } ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${descriptionClassName}`}
          >
            {description}
          </div>
        </motion.div>
      )}
    </div>
  );
}
