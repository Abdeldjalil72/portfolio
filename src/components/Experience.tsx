import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Building2 } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  type: string;
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "Devly",
    location: "Constantine, Algeria",
    type: "Software Engineering",
    details: [
      "Designed and built custom full-stack web applications and client management dashboards.",
      "Engineered database schemas, RESTful API endpoints, and responsive user interfaces."
    ]
  },
  {
    role: "Sales Advisor (Conseiller de Vente)",
    company: "Kiabi — Constantine",
    location: "Constantine, Algeria",
    type: "Retail & Inventory Operations",
    details: [
      "Managed stock inventory, product organization, customer support, and retail operations."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-bg py-16 md:py-24 border-t border-stroke/50">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Work Experience</span>
            </div>
            <AnimatedTitle 
              text="Professional journey & impact" 
              italicWord="journey" 
              className="text-4xl md:text-5xl lg:text-6xl text-text-primary"
            />
            <p className="text-muted mt-4 max-w-lg text-sm md:text-base">
              Hands-on engineering in web systems, databases, client solutions, and operational management.
            </p>
          </div>
        </motion.div>

        {/* Experience List */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group p-6 md:p-8 rounded-3xl bg-surface border border-stroke shadow-sm dark:shadow-none hover:border-[#89AACC]/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-surface border border-stroke text-text-primary mt-1">
                    <Briefcase className="w-5 h-5 text-[#89AACC]" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-text-primary mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
                      <span className="text-text-primary/90 font-medium flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#89AACC]" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <span className="self-start md:self-auto px-3.5 py-1.5 rounded-full text-xs font-medium bg-bg/80 border border-stroke text-text-primary/80">
                  {exp.type}
                </span>
              </div>

              {/* Bullet Details */}
              <div className="space-y-3 pl-2 md:pl-16">
                {exp.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#89AACC] mt-1 shrink-0" />
                    <p className="text-sm md:text-base text-muted leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
