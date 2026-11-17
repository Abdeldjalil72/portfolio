import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Languages, Cpu, Layers, Sparkles, MapPin, FileDown, BrainCircuit } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';

const focusAreas = [
  {
    title: "SaaS & Web Architecture",
    description: "Architecting high-concurrency web platforms, deterministic state machines, automated ledgers, and responsive UIs with Next.js & PostgreSQL.",
    icon: Layers
  },
  {
    title: "Distributed Microservices & Queues",
    description: "Designing decoupled service backends with Django, FastAPI, Celery, and Redis for asynchronous background workflows and real-time WebSockets.",
    icon: Sparkles
  },
  {
    title: "Biomedical Data Mining & ML",
    description: "Advanced feature engineering and extreme dimensionality reduction (15,155 to 4 dimensions) achieving 100% classification accuracy with SVM.",
    icon: Cpu
  },
  {
    title: "Dialectal Arabic NLP (Darija)",
    description: "Fine-tuning transformer models (AraBERT) on low-resource code-switched Algerian Arabic for sarcasm detection and sentiment classification.",
    icon: BrainCircuit
  }
];

const languages = [
  { name: "English", level: "IELTS 7.5 (C1)" },
  { name: "French", level: "TCF TP 456 (B2)" },
  { name: "Arabic", level: "Native" }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-bg py-16 md:py-24 border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-20px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">About Me</span>
            </div>
            <AnimatedTitle 
              text="Full-stack engineering with intelligent foundations" 
              italicWord="Full-stack" 
              className="text-4xl md:text-5xl lg:text-6xl text-text-primary"
            />
            <p className="text-muted mt-4 max-w-xl text-sm md:text-base leading-relaxed">
              Full-stack software architect and graduate researcher in AI & Data Science — merging deep algorithmic rigor with production systems engineering.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          
          {/* Portrait Photo Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-4 relative overflow-hidden bg-surface border border-stroke rounded-3xl group min-h-[340px] sm:min-h-[420px] md:min-h-[460px] flex flex-col justify-end p-5 sm:p-6 md:p-8 shadow-sm dark:shadow-none"
          >
            <img 
              src="/profile.jpg" 
              alt="Abdeldjalil Bouchama" 
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Smooth subtle vignette at the bottom for crystal clear photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            <div className="relative z-10">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md border border-white/20 text-white inline-flex items-center gap-2 mb-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Abdeldjalil Bouchama
              </span>
              <p className="text-xs text-white/90 font-medium drop-shadow-sm">Full-Stack Architect & AI Engineer</p>
            </div>
          </motion.div>

          {/* Bio & Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-surface border border-stroke rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm dark:shadow-none transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-full bg-surface border border-stroke text-text-primary">
                  <GraduationCap className="w-5 h-5 text-[#89AACC]" />
                </div>
                <div>
                  <span className="text-xs text-muted uppercase tracking-[0.2em]">Academic Background</span>
                  <h3 className="text-lg font-medium text-text-primary">Université Abdelhamid Mehri – Constantine 2</h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="border-l-2 border-[#89AACC] pl-4 py-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-base font-semibold text-text-primary">Master 2 in Artificial Intelligence and Data Science</h4>
                    <span className="text-xs text-[#3B72AC] dark:text-[#89AACC] font-medium">2025 – 2027</span>
                  </div>
                  <p className="text-sm text-muted">Univ. Abdelhamid Mehri – Constantine 2 (Systèmes Intelligents, Data & Logiciel)</p>
                </div>
                <div className="border-l-2 border-[#89AACC]/50 pl-4 py-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-base font-semibold text-text-primary">Licence in Information Technology</h4>
                    <span className="text-xs text-muted font-medium">2022 – 2025</span>
                  </div>
                  <p className="text-sm text-muted">Univ. Constantine 2 (Core Foundations in Software Engineering, Algorithms & Distributed Systems)</p>
                </div>
                <div className="border-l-2 border-stroke pl-4 py-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-base font-semibold text-text-primary">Baccalauréat — Série Mathématiques</h4>
                    <span className="text-xs text-muted font-medium">2021 – 2022</span>
                  </div>
                  <p className="text-sm text-muted">Lycée Touati El Mekki (Mention Assez Bien — 13.84/20)</p>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted leading-relaxed">
                Full-stack software architect and graduate researcher in AI & Data Science at Université Constantine 2. I combine solid mathematical foundations with production-grade engineering — from architecting SaaS platforms with transactional financial ledgers and deterministic state machines to training high-precision machine learning models and distributed microservices.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stroke/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted">
                  <MapPin className="w-4 h-4 text-[#89AACC]" />
                  <span>Constantine, Algeria</span>
                </div>
                <span className="text-stroke">•</span>
                <a 
                  href="/resume.pdf" 
                  download="Abdeldjalil_Bouchama_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-text-primary hover:text-[#89AACC] transition-colors min-h-[36px]"
                  title="Download Curriculum Vitae"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#89AACC]" />
                  <span>Download CV</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-[#89AACC]" />
                <div className="flex flex-wrap gap-1.5">
                  {languages.map((lang) => (
                    <span 
                      key={lang.name} 
                      className="px-2.5 py-1 rounded-full text-xs bg-surface border border-stroke text-text-primary/90"
                    >
                      {lang.name} <span className="text-muted">({lang.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Focus Areas Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-12 bg-surface border border-stroke rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm dark:shadow-none transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-full bg-surface border border-stroke text-text-primary">
                <Cpu className="w-5 h-5 text-[#89AACC]" />
              </div>
              <div>
                <span className="text-xs text-muted uppercase tracking-[0.2em]">Core Expertise</span>
                <h3 className="text-lg font-medium text-text-primary">Key Focus Areas</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-bg/70 dark:bg-bg/40 border border-stroke/70 hover:border-[#89AACC]/40 transition-colors flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-text-primary mb-2 flex items-center justify-between">
                      {area.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
