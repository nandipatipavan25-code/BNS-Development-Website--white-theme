import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion';

function toSpringOptions(transition) {
  const hasSpringValues =
    typeof transition?.stiffness === 'number' ||
    typeof transition?.damping === 'number' ||
    typeof transition?.mass === 'number';

  if (!hasSpringValues && typeof transition?.duration === 'number') {
    const duration = Math.max(transition.duration, 0.05);
    return {
      stiffness: 170 / (duration * duration),
      damping: 26 / duration,
      mass: 1,
      restDelta: 0.001,
    };
  }

  return {
    stiffness: typeof transition?.stiffness === 'number' ? transition.stiffness : 100,
    damping: typeof transition?.damping === 'number' ? transition.damping : 30,
    mass: typeof transition?.mass === 'number' ? transition.mass : 1,
    restDelta: 0.001,
  };
}

const RevealItem = ({ children, progress, range, mutedColor, primaryColor }) => {
  const color = useTransform(progress, range, [mutedColor, primaryColor]);
  const opacity = useTransform(progress, range, [0.35, 1]);

  return (
    <motion.span style={{ color, opacity }} className="inline-block transition-colors">
      {children}
    </motion.span>
  );
};

export default function TextRevealOnScroll({
  text = "Building the future of commercial and residential development with precision, clarity, and accountability.",
  mutedColor = "rgba(24, 24, 24, 0.22)",
  primaryColor = "#181818",
  mode = "word", // "word" | "character" | "sentence"
  replay = true,
  balance = true,
  className = "",
  style = {},
  transition = { duration: 0.4 },
  offset = ["start 85%", "end 45%"],
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
    layoutEffect: false,
  });

  const maxProgress = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > maxProgress.get()) {
      maxProgress.set(latest);
    }
  });

  const sourceProgress = replay ? scrollYProgress : maxProgress;
  const progressToUse = useSpring(sourceProgress, toSpringOptions(transition));

  const renderText = () => {
    if (!text) return null;

    let items = [];
    if (mode === "character") {
      items = text.split("");
    } else if (mode === "word") {
      items = text.match(/([\S]+|\s+)/g) || [];
    } else if (mode === "sentence") {
      items = text.match(/[^.!?\n]+(?:[.!?]+)?|\n|\s+/g) || [];
    }

    let totalValids = 0;
    items.forEach((item) => {
      if (item.trim().length > 0) totalValids++;
    });

    let currentIdx = 0;

    return items.map((itemStr, idx) => {
      if (itemStr.trim().length === 0 && itemStr !== "\n") {
        return <React.Fragment key={`${mode}-space-${idx}`}>{itemStr}</React.Fragment>;
      }
      if (itemStr === "\n") {
        return <br key={`${mode}-br-${idx}`} />;
      }

      const start = currentIdx / Math.max(totalValids, 1);
      const end = (currentIdx + 1) / Math.max(totalValids, 1);
      currentIdx++;

      return (
        <RevealItem
          key={`${mode}-${idx}`}
          progress={progressToUse}
          range={[start, end]}
          mutedColor={mutedColor}
          primaryColor={primaryColor}
        >
          {itemStr}
        </RevealItem>
      );
    });
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={text}
      style={{
        textWrap: balance ? "balance" : "wrap",
        whiteSpace: "pre-wrap",
        ...style,
      }}
      className={`${className}`}
    >
      <span aria-hidden="true">{renderText()}</span>
    </div>
  );
}
