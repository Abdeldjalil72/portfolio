import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, BrainCircuit, Wrench } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  span: string;
  skills: string[];
  featured?: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Core",
    icon: Code2,
    span: "md:col-span-6",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "Frontend & UI",
    icon: Layout,
    span: "md:col-span-6",
    skills: ["Tailwind CSS", "React / Next.js", "Responsive UI Systems", "Spatial UI Prototyping"]
  },
  {
    title: "Backend & Databases",
    icon: Database,
    span: "md:col-span-6",
    skills: ["Node.js", "PostgreSQL", "MySQL", "MongoDB Atlas", "Vercel", "Render"]
  },
  {
    title: "AI, ML & NLP",
    icon: BrainCircuit,
    span: "md:col-span-6",
    skills: [
      "Fine-Tuning Transformers",
      "AraBERT (bert-base-arabertv02)",
      "Hugging Face",
      "Gemini API",
      "ComfyUI",
      "Natural Language Processing (Algerian Darija)"
    ],
    featured: "Specialized in Dialectal Arabic NLP & LLM Orchestration"
  },
  {
    title: "Tools & Dev Workflow",
    icon: Wrench,
    span: "md:col-span-12",
    skills: [
      "Cursor",
      "Google Antigravity",
      "Git / GitHub",
      "System Architecture",
      "Database Schema Design",
      "RESTful API Design",
      "Performance Optimization"
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-bg py-16 md:py-24 border-t border-stroke/50">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Technical Capabilities</span>
            </div>
            <AnimatedTitle 
              text="Skills & core technologies" 
              italicWord="technologies" 
              className="text-4xl md:text-5xl lg:text-6xl text-text-primary"
            />
            <p className="text-muted mt-4 max-w-lg text-sm md:text-base">
              A comprehensive toolkit spanning full-stack development, modern AI workflows, and software design.
            </p>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`${cat.span} bg-surface/40 hover:bg-surface/70 border border-stroke rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-colors duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-full bg-surface border border-stroke text-text-primary">
                        <Icon className="w-5 h-5 text-[#89AACC]" />
                      </div>
                      <h3 className="text-lg font-medium text-text-primary">{cat.title}</h3>
                    </div>
                    {cat.featured && (
                      <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-medium accent-gradient text-bg font-sans">
                        Specialized Focus
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-bg/70 border border-stroke text-text-primary/90 hover:border-[#4E85BF] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cat.featured && (
                  <div className="mt-6 pt-4 border-t border-stroke/50 text-xs text-muted">
                    <span className="text-[#89AACC] font-medium">Highlight:</span> {cat.featured}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
