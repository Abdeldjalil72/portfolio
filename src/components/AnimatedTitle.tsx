import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
  italicWord?: string; // If we want to target a specific word to be italic
  className?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, italicWord, className = "" }) => {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const child: Variants = {
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      y: 60,
      opacity: 0,
      rotate: 5,
    },
  };

  return (
    <motion.h2
      className={`tracking-tight flex flex-wrap gap-x-3 gap-y-1 overflow-hidden py-2 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, index) => {
        const isItalic = italicWord && word.toLowerCase().includes(italicWord.toLowerCase());
        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block transform-gpu origin-bottom ${
              isItalic ? "font-display italic text-text-primary/90" : ""
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};
