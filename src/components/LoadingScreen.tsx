import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Full-Stack", "Artificial Intelligence", "Software Engineering"];

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const duration = 2700;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-10">
      {/* Top Left */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Abdeldjalil Bouchama • Portfolio '26
      </motion.div>

      {/* Center Words */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden h-[100px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-end w-full">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
          {String(count).padStart(3, '0')}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50 origin-left">
        <div 
          className="h-full w-full accent-gradient origin-left"
          style={{ 
            transform: `scaleX(${count / 100})`,
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
            transition: 'transform 0.1s linear'
          }}
        />
      </div>
    </div>
  );
};
