import React from 'react';
import { motion } from 'framer-motion';
import { Lock, GraduationCap, Eye, ExternalLink } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';

interface Project {
  title: string;
  type: string;
  techStack: string[];
  description: string;
  actionText: string;
  actionType: 'request' | 'academic' | 'prototype';
  actionHref?: string;
  span: string;
  img: string;
  videoSrc?: string;
}

const projects: Project[] = [
  {
    title: "Multi-Tenant Inventory & Stock SaaS Application",
    type: "Full-Stack Web Application",
    techStack: ["Full-Stack", "PostgreSQL / MySQL", "SaaS Architecture", "Inventory Logic"],
    description: "Scalable stock management and sales tracking web platform featuring multi-tenant architecture, subscription billing logic, and inventory monitoring tools.",
    actionText: "Code Available on Request",
    actionType: "request",
    span: "md:col-span-7",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Algerian Darija Sarcasm Detection (NLP Pipeline)",
    type: "AI / NLP Research",
    techStack: ["Python", "AraBERT (bert-base-arabertv02)", "Hugging Face", "Transformers"],
    description: "Machine learning pipeline fine-tuning transformer models on Algerian Darija dialectal datasets for sarcasm detection and sentiment analysis.",
    actionText: "Academic Project — Université Constantine 2",
    actionType: "academic",
    span: "md:col-span-5",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "AI Video & Spatial UI Campaign System",
    type: "AI Workflow & Spatial UI Prototype",
    techStack: ["Spatial UI", "Google Flow", "Prompt Engineering", "Visual Automation"],
    description: "AI-driven video ad generator and spatial UI prototype system utilizing automated visual storyboarding and video synthesis pipelines.",
    actionText: "View Prototype",
    actionType: "prototype",
    actionHref: "https://flow.google.com/shared/video/216dd3c7-538a-4f63-92b1-7600edd41baf",
    span: "md:col-span-12",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1400",
    videoSrc: "/flow-video.mp4"
  }
];

export const SelectedWorks: React.FC = () => {
  return (
    <section id="projects" className="bg-bg py-16 md:py-24 border-t border-stroke/50">
      <div id="work" className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Featured Portfolio</span>
            </div>
            <AnimatedTitle 
              text="Featured projects" 
              italicWord="projects" 
              className="text-4xl md:text-5xl lg:text-6xl text-text-primary"
            />
            <p className="text-muted mt-4 max-w-lg text-sm md:text-base">
              A curated selection of production web platforms, dialectal NLP models, and spatial AI workflows.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl min-h-[460px] flex flex-col justify-end p-6 md:p-8 ${project.span}`}
            >
              {/* Card Media (Video or Image) */}
              {project.videoSrc ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.videoSrc}
                />
              ) : (
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Cinematic rich dark gradient so media is vibrant and text is razor sharp */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/25" />

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                
                {/* Top Row: Type Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-[#89AACC] shadow-sm">
                    {project.type}
                  </span>
                  
                  {/* Action Link / Badge */}
                  {project.actionType === 'request' && (
                    <a
                      href="mailto:bouchamaabdeldjalil@gmail.com?subject=Code%20Request%3A%20Multi-Tenant%20Inventory%20SaaS"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white hover:border-[#89AACC] transition-colors shadow-sm"
                      title="Contact to request code repository access"
                    >
                      <Lock className="w-3 h-3 text-[#89AACC]" />
                      <span>{project.actionText}</span>
                    </a>
                  )}

                  {project.actionType === 'academic' && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white shadow-sm">
                      <GraduationCap className="w-3.5 h-3.5 text-[#89AACC]" />
                      <span>{project.actionText}</span>
                    </div>
                  )}

                  {project.actionType === 'prototype' && (
                    <a
                      href={project.actionHref || "#contact"}
                      target={project.actionHref ? "_blank" : undefined}
                      rel={project.actionHref ? "noopener noreferrer" : undefined}
                      className="group/btn relative inline-flex rounded-full"
                    >
                      <span className="absolute inset-[-1.5px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <div className="relative px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 shadow-sm">
                        <Eye className="w-3.5 h-3.5 text-[#89AACC]" />
                        <span>{project.actionText}</span>
                        <ExternalLink className="w-3 h-3 text-white/60" />
                      </div>
                    </a>
                  )}
                </div>

                {/* Bottom Details */}
                <div className="mt-auto">
                  <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 leading-tight group-hover:text-[#89AACC] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-white/80 mb-5 max-w-2xl leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs bg-white/10 backdrop-blur-sm border border-white/15 text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#89AACC]/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
