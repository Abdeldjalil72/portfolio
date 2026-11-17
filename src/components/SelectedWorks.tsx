import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, GraduationCap, Eye, ExternalLink, BookOpen, ArrowUpRight } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';
import { ProjectModal, type CaseStudy } from './ProjectModal';

interface Project extends CaseStudy {
  span: string;
  img: string;
  videoSrc?: string;
}

const projects: Project[] = [
  {
    id: "multi-tenant-saas",
    title: "Multi-Tenant Inventory & Stock SaaS Application",
    subtitle: "Enterprise full-stack stock tracking and sales platform with tenant-isolated data layers",
    type: "Full-Stack Web Architecture",
    role: "Lead Full-Stack Web Architect",
    context: "Commercial SaaS System",
    metrics: [
      { label: "Tenant Isolation", value: "100%" },
      { label: "Query P95", value: "<85ms" },
      { label: "Architecture", value: "Multi-Tenant" }
    ],
    overview: "Architected and engineered a comprehensive multi-tenant inventory management system for commercial retailers and warehouse distribution centers.\n\nThe system solves the challenge of segregated customer billing, partitioned catalog storage, and concurrent point-of-sale checkout operations without data crossover.",
    architecture: [
      { title: "Tenant Data Isolation", description: "Row-level security and tenant-scoped query wrappers guaranteeing zero cross-tenant data leakage.", icon: "database" },
      { title: "High-Concurrency Locks", description: "Atomic transactional stock reservations with optimistic concurrency controls preventing inventory overselling.", icon: "layers" },
      { title: "Role-Based Access Control", description: "Granular permissions hierarchy covering SuperAdmins, Store Owners, Cashiers, and Inventory Auditors.", icon: "cpu" },
      { title: "Automated Reporting", description: "High-throughput aggregation queries for stock turnover, daily profit margins, and automatic supplier reorder triggers.", icon: "sparkles" }
    ],
    techStack: ["Full-Stack", "PostgreSQL", "MySQL", "SaaS Architecture", "Node.js", "REST APIs", "JWT Auth"],
    description: "Scalable stock management and sales tracking web platform featuring multi-tenant architecture, subscription billing logic, and inventory monitoring tools.",
    actionText: "Code Available on Request",
    actionType: "request",
    span: "md:col-span-7",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "algerian-darija-nlp",
    title: "Algerian Darija Sarcasm Detection (NLP Pipeline)",
    subtitle: "Deep learning dialectal transformer pipeline fine-tuning AraBERT on code-switched Algerian Arabic",
    type: "AI / NLP Research",
    role: "Machine Learning & NLP Researcher",
    context: "Univ. Constantine 2 — M2 Research",
    metrics: [
      { label: "Base Model", value: "AraBERT v02" },
      { label: "Evaluation", value: "Macro F1" },
      { label: "Target Dialect", value: "Algerian Darija" }
    ],
    overview: "Researched and trained transformer-based classification models specifically tailored to Algerian Darija — a low-resource Arabic dialect characterized by heavy French borrowing, phonetic Romanization (Arabizi), and nuanced sarcastic syntax.\n\nDemonstrated significant performance improvements over standard Modern Standard Arabic (MSA) baselines when handling local conversational irony and sentiment polarity.",
    architecture: [
      { title: "Dialect Preprocessing", description: "Custom tokenization and phonetic mapping resolving spelling variations, repeated letters, and Arabic/French code-switching.", icon: "cpu" },
      { title: "AraBERT Fine-Tuning", description: "Trained 'bert-base-arabertv02' with tailored dropout rates, warm-up scheduling, and learning rate decay to prevent dialect overfitting.", icon: "layers" },
      { title: "Loss Weighting", description: "Addressed severe class imbalance in social datasets with class-weighted cross-entropy and focal loss adjustments.", icon: "database" },
      { title: "Hugging Face Inference", description: "Containerized PyTorch inference pipeline for real-time batch sentiment and sarcasm classification.", icon: "sparkles" }
    ],
    techStack: ["Python", "AraBERT (bert-base-arabertv02)", "Hugging Face", "Transformers", "PyTorch", "Scikit-Learn"],
    description: "Machine learning pipeline fine-tuning transformer models on Algerian Darija dialectal datasets for sarcasm detection and sentiment analysis.",
    actionText: "Academic Project — Université Constantine 2",
    actionType: "academic",
    span: "md:col-span-5",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "spatial-ui-flow",
    title: "AI Video & Spatial UI Campaign System",
    subtitle: "Visual automation pipeline and spatial user interface prototype powered by Google Flow",
    type: "AI Workflow & Spatial UI Prototype",
    role: "Spatial UI & Generative Workflow Designer",
    context: "Experimental Prototype",
    metrics: [
      { label: "Engine", value: "Google Flow" },
      { label: "Pipeline", value: "Multi-Turn" },
      { label: "Resolution", value: "Spatial 4K" }
    ],
    overview: "Engineered an automated visual storyboarding pipeline that translates campaign briefs into high-fidelity spatial video advertisements using generative video models.\n\nCombined fluid spatial interface principles with multi-turn prompt synthesis, allowing directors to manipulate camera sweeps, focal lighting, and spatial audio layers in real time.",
    architecture: [
      { title: "Prompt Decomposition", description: "Structured LLM chains that dissect natural language briefs into scene descriptions, camera paths, and lighting parameters.", icon: "sparkles" },
      { title: "Google Flow Integration", description: "Direct API orchestration with Google Flow for video-referenced generation and smooth temporal scene transitions.", icon: "cpu" },
      { title: "Spatial Glassmorphic UI", description: "Multi-depth canvas layout featuring floating contextual palettes and responsive touch feedback.", icon: "layers" },
      { title: "Batch Synthesis Workflow", description: "Automated video asset assembly cutting production turnarounds from days to minutes.", icon: "database" }
    ],
    techStack: ["Spatial UI", "Google Flow", "Prompt Engineering", "Visual Automation", "Figma", "TypeScript"],
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
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="bg-bg py-16 md:py-24 border-t border-stroke/50">
      <div id="work" className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Featured Portfolio</span>
            </div>
            <AnimatedTitle 
              text="Featured projects" 
              italicWord="projects" 
              className="text-4xl md:text-5xl lg:text-6xl text-text-primary"
            />
            <p className="text-muted mt-4 max-w-lg text-sm md:text-base">
              A curated selection of production web platforms, dialectal NLP models, and spatial AI workflows. Click any project for architecture details.
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
              onClick={() => setSelectedProject(project)}
              className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl min-h-[380px] sm:min-h-[440px] md:min-h-[460px] flex flex-col justify-end p-5 sm:p-6 md:p-8 cursor-pointer ${project.span}`}
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
                
                {/* Top Row: Type Badge, Case Study Pill & Action Link */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 sm:mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-[#89AACC] shadow-sm min-h-[32px] inline-flex items-center">
                      {project.type}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 group-hover:bg-white/20 text-white/90 backdrop-blur-md border border-white/15 shadow-sm min-h-[32px] inline-flex items-center gap-1 transition-colors">
                      <BookOpen className="w-3 h-3 text-[#89AACC]" />
                      <span>Case Study</span>
                    </span>
                  </div>
                  
                  {/* Action Link / Badge */}
                  {project.actionType === 'request' && (
                    <a
                      href="mailto:bouchamaabdeldjalil@gmail.com?subject=Code%20Request%3A%20Multi-Tenant%20Inventory%20SaaS"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white hover:border-[#89AACC] transition-colors shadow-sm min-h-[32px]"
                      title="Contact to request code repository access"
                    >
                      <Lock className="w-3 h-3 text-[#89AACC]" />
                      <span>{project.actionText}</span>
                    </a>
                  )}

                  {project.actionType === 'academic' && (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white shadow-sm min-h-[32px] hover:border-[#89AACC] transition-colors"
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-[#89AACC]" />
                      <span>{project.actionText}</span>
                    </div>
                  )}

                  {project.actionType === 'prototype' && (
                    <a
                      href={project.actionHref || "#contact"}
                      onClick={(e) => e.stopPropagation()}
                      target={project.actionHref ? "_blank" : undefined}
                      rel={project.actionHref ? "noopener noreferrer" : undefined}
                      className="group/btn relative inline-flex rounded-full"
                    >
                      <span className="absolute inset-[-1.5px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <div className="relative px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 shadow-sm min-h-[32px]">
                        <Eye className="w-3.5 h-3.5 text-[#89AACC]" />
                        <span>{project.actionText}</span>
                        <ExternalLink className="w-3 h-3 text-white/60" />
                      </div>
                    </a>
                  )}
                </div>

                {/* Bottom Details */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-tight group-hover:text-[#89AACC] transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#89AACC]/20 border border-white/15 flex items-center justify-center shrink-0 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#89AACC] transition-colors" />
                    </div>
                  </div>
                  
                  <p className="text-xs sm:text-sm md:text-base text-white/80 mb-4 sm:mb-5 max-w-2xl leading-relaxed">
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
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#89AACC]/40 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Case Study Deep-Dive Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
