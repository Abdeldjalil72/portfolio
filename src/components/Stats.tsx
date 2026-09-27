import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "Full-Stack", label: "Core Engineering Mastery" },
  { value: "M2", label: "AI & Data Science (Univ. Constantine 2)" },
  { value: "7.5", label: "IELTS English Proficiency (C1)" }
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
