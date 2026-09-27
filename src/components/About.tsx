import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Languages, Cpu, Layers, Sparkles, MapPin, FileDown } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';

const focusAreas = [
  {
    title: "Full-Stack Web Architecture",
    description: "Designing end-to-end scalable web applications, responsive user interfaces, and robust RESTful API services.",
    icon: Layers
  },
  {
    title: "Multi-Tenant SaaS Systems",
    description: "Architecting isolated data layers, tenant subscription billing systems, and high-concurrency inventory backends.",
    icon: Sparkles
  },
  {
    title: "NLP & Fine-Tuning Transformers",
    description: "Specialized in fine-tuning state-of-the-art transformer models (such as AraBERT) for dialectal Arabic & Algerian Darija.",
    icon: Cpu
  },
  {
    title: "Spatial UI Prototyping",
    description: "Crafting fluid, high-fidelity spatial user interfaces and AI-assisted visual automation pipelines.",
    icon: Sparkles
  }
];

const languages = [
  { name: "English", level: "IELTS 7.5 (C1)" },
  { name: "French", level: "TCF TP (B2)" },
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
          viewport={{ once: true, margin: "-100px" }}
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
              My primary expertise and passion is full-stack web development — building robust, scalable web platforms, supplemented by advanced graduate studies in AI & Data Science.
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
            className="md:col-span-4 relative overflow-hidden bg-surface border border-stroke rounded-3xl group min-h-[460px] flex flex-col justify-end p-6 md:p-8 shadow-sm dark:shadow-none"
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
              <p className="text-xs text-white/90 font-medium drop-shadow-sm">Full-Stack Web Developer & AI Engineer</p>
            </div>
          </motion.div>

          {/* Bio & Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-surface border border-stroke rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm dark:shadow-none transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-full bg-surface border border-stroke text-text-primary">
                  <GraduationCap className="w-5 h-5 text-[#89AACC]" />
                </div>
                <div>
                  <span className="text-xs text-muted uppercase tracking-[0.2em]">Academic Background</span>
                  <h3 className="text-lg font-medium text-text-primary">Université Constantine 2</h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="border-l-2 border-[#89AACC]/40 pl-4 py-1">
                  <h4 className="text-base font-semibold text-text-primary">Master 2 in Artificial Intelligence and Data Science</h4>
                  <p className="text-sm text-muted">Université Abdelhamid Mehri - Constantine 2</p>
                </div>
                <div className="border-l-2 border-stroke pl-4 py-1">
                  <h4 className="text-base font-semibold text-text-primary">Bachelor's Degree in Information Technology</h4>
                  <p className="text-sm text-muted">Core foundations in Software Engineering, Algorithms & Databases</p>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted leading-relaxed">
                Full-stack web developer at heart and by trade. While I am actively studying AI and Data Science at the Master's level, what I do best is engineering production-grade full-stack web applications, scalable multi-tenant SaaS architectures, and seamless user experiences.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stroke/50 flex flex-wrap items-center justify-between gap-4">
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
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-text-primary hover:text-[#89AACC] transition-colors"
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
            className="md:col-span-12 bg-surface border border-stroke rounded-3xl p-6 md:p-8 shadow-sm dark:shadow-none transition-all duration-300"
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
