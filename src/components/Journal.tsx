import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';

const journalEntries = [
  { title: "The future of digital interaction", readTime: "5 min read", date: "Oct 12, 2026", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=150&h=150" },
  { title: "Building scalable design systems", readTime: "8 min read", date: "Sep 28, 2026", img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=150&h=150" },
  { title: "Typography in modern web", readTime: "4 min read", date: "Sep 15, 2026", img: "https://images.unsplash.com/photo-1629757754637-293e54bc85bd?auto=format&fit=crop&q=80&w=150&h=150" },
  { title: "Thoughts on generative UI", readTime: "6 min read", date: "Aug 30, 2026", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=150&h=150" }
];

export const Journal: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <AnimatedTitle 
              text="Recent thoughts" 
              italicWord="thoughts" 
              className="text-4xl md:text-5xl lg:text-6xl text-text-primary"
            />
            <p className="text-muted mt-4 max-w-sm text-sm md:text-base">
              Writing about design, engineering, and the creative process.
            </p>
          </div>
          
          <button className="hidden md:inline-flex group relative rounded-full mt-8 md:mt-0 items-center">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative border border-stroke bg-bg text-text-primary rounded-full text-sm px-6 py-3 flex items-center gap-2 group-hover:border-transparent transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {journalEntries.map((entry, idx) => (
            <a 
              key={idx}
              href="#"
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-colors duration-300"
            >
              <div className="flex items-center gap-6">
                <img 
                  src={entry.img} 
                  alt={entry.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-text-primary mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#89AACC] group-hover:to-[#4E85BF] transition-all">
                    {entry.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-muted">
                    <span>{entry.readTime}</span>
                    <div className="w-1 h-1 rounded-full bg-stroke" />
                    <span>{entry.date}</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex w-12 h-12 rounded-full border border-stroke items-center justify-center mr-4 group-hover:border-transparent group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
