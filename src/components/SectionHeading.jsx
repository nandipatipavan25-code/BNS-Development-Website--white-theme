import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * SectionHeading Component - Site-Wide Standard
 * Matches exact Home Page section title colors, typography, and red accents.
 */
export default function SectionHeading({
  tag = "Section",
  title = "Heading Title",
  highlight = "",
  description = "",
  centered = false,
  theme = "light", // 'light' | 'dark'
  showRedLine = false,
  badgeStyle = true, // default to pill badge style with red dot + dark text as per site standard
  className = "",
  titleClassName = "",
  titleSize = "default", // 'default' (42px) | '36px' | 'sm'
  descriptionClassName = "",
  typingSpeed = 24, // ms per character
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  const [typedTitle, setTypedTitle] = useState('');
  const [typedHighlight, setTypedHighlight] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  const cleanTag = typeof tag === 'string' ? tag.replace(/^\/\/\s*/, '') : tag;
  const isDark = theme === 'dark';

  const rawTitle = typeof title === 'string' ? title : String(title || '');
  const rawHighlight = typeof highlight === 'string' ? highlight : String(highlight || '');
  // Avoid duplicating if rawTitle already ends with rawHighlight
  const cleanTitle = (rawHighlight && rawTitle.endsWith(rawHighlight))
    ? rawTitle.slice(0, -rawHighlight.length).trimEnd()
    : rawTitle;
  const formattedTitle = rawHighlight && cleanTitle && !cleanTitle.endsWith(' ') ? `${cleanTitle} ` : cleanTitle;

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
        timeoutId = setTimeout(() => {
          setCursorVisible(false);
          setIsTyping(false);
        }, 600);
      }
    };

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
      {/* Eyebrow Tag (Reference Image Pill Badge: Dark text with small red accent dot) */}
      {cleanTag && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`mb-3 ${centered ? 'flex justify-center text-center' : 'flex items-center'}`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono uppercase tracking-wider text-black/80 font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
            <span>{cleanTag}</span>
          </div>
        </motion.div>
      )}

      {/* Main Display Title (Serif Playfair Display, Solid Dark Text - Red limited to small accent dot only) */}
      <h2
        className={`relative ${
          titleSize === '36px' || titleSize === 'sm'
            ? 'text-2xl sm:text-3xl md:text-[36px] lg:text-[36px] leading-[40px] sm:leading-[40px] md:leading-[40px]'
            : 'text-2xl sm:text-3xl md:text-[42px] lg:text-[42px] leading-[44px] sm:leading-[44px] md:leading-[44px]'
        } font-display font-semibold tracking-tight ${
          isDark ? 'text-white' : 'text-black/95'
        } ${centered ? 'text-center' : ''} ${titleClassName}`}
      >
        {/* Ghost Layout to Reserve Exact Bounds */}
        <span className="invisible select-none pointer-events-none" aria-hidden="true">
          <span>{formattedTitle}</span>
          {rawHighlight && (
            <span>{rawHighlight}</span>
          )}
        </span>

        {/* Typed Animated Stream */}
        <span className="absolute inset-0 left-0 top-0">
          <span>{typedTitle}</span>
          {typedHighlight && (
            <span>{typedHighlight}</span>
          )}

          {/* Typing Cursor */}
          {cursorVisible && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
              className="inline-block w-[2.5px] h-[0.85em] bg-[#ED1C24] ml-1 align-baseline translate-y-[1px] rounded-sm"
            />
          )}
        </span>
      </h2>

      {/* Description / Subtitle (Matches Home Page Specs: 15px/16px font-sans text-black/70) */}
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="mt-3.5 sm:mt-4"
        >
          <div
            className={`text-[15px] sm:text-[16px] leading-relaxed font-sans ${
              isDark ? 'text-white/80' : 'text-black/70'
            } ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${descriptionClassName}`}
          >
            {description}
          </div>
        </motion.div>
      )}
    </div>
  );
}
