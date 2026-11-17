import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ExternalLink, Cpu, Database, CheckCircle2, Layers, Sparkles, Eye, ArrowUpRight } from 'lucide-react';

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: string;
  role: string;
  context: string;
  overview: string;
  metrics: { label: string; value: string }[];
  architecture: { title: string; description: string; icon: 'database' | 'cpu' | 'layers' | 'sparkles' }[];
  techStack: string[];
  actionType: 'request' | 'academic' | 'prototype';
  actionHref?: string;
  actionText: string;
}

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const renderIcon = (type: string) => {
    switch (type) {
      case 'database':
        return <Database className="w-4 h-4 text-[#89AACC]" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-[#89AACC]" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-[#89AACC]" />;
      case 'sparkles':
      default:
        return <Sparkles className="w-4 h-4 text-[#89AACC]" />;
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-surface border border-stroke shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between"
          >
            {/* Header / Close */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-stroke/60 text-text-primary border border-stroke">
                    {project.type}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#89AACC]/15 text-[#3B72AC] dark:text-[#89AACC]">
                    {project.context}
                  </span>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close case study modal"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-text-primary hover:bg-stroke/60 transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Role */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display italic text-text-primary mb-2 leading-tight">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#3B72AC] dark:text-[#89AACC] font-medium mb-6">
                Role: {project.role}
              </p>

              {/* Key Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-bg/80 border border-stroke mb-8">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-lg sm:text-2xl font-semibold text-text-primary">
                      {metric.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-muted uppercase tracking-wider mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xs text-muted uppercase tracking-[0.2em] mb-3">Project Overview</h3>
                <p className="text-sm sm:text-base text-text-primary/90 leading-relaxed whitespace-pre-line">
                  {project.overview}
                </p>
              </div>

              {/* Architecture & Engineering Highlights */}
              <div className="mb-8">
                <h3 className="text-xs text-muted uppercase tracking-[0.2em] mb-4">Engineering & Architecture</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.architecture.map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-bg/60 border border-stroke/70 flex flex-col justify-between">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="p-2 rounded-xl bg-surface border border-stroke">
                          {renderIcon(item.icon)}
                        </div>
                        <h4 className="text-sm font-semibold text-text-primary">{item.title}</h4>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xs text-muted uppercase tracking-[0.2em] mb-3">Technologies Deployed</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-bg border border-stroke text-text-primary/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-stroke/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-muted flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Verified Architecture & Code Standards</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                {project.actionType === 'request' && (
                  <a
                    href="mailto:bouchamaabdeldjalil@gmail.com?subject=Code%20Request%3A%20Multi-Tenant%20Inventory%20SaaS"
                    className="group/btn relative rounded-full inline-flex w-full sm:w-auto"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full bg-text-primary text-bg group-hover/btn:bg-bg group-hover/btn:text-text-primary rounded-full text-xs sm:text-sm px-6 py-3 transition-all flex items-center justify-center gap-2 min-h-[44px]">
                      <Lock className="w-4 h-4" />
                      <span>{project.actionText}</span>
                    </div>
                  </a>
                )}

                {project.actionType === 'academic' && (
                  <a
                    href="mailto:bouchamaabdeldjalil@gmail.com?subject=Inquiry%3A%20Darija%20Sarcasm%20Detection%20Research"
                    className="group/btn relative rounded-full inline-flex w-full sm:w-auto"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full bg-surface hover:bg-stroke/40 border border-stroke text-text-primary rounded-full text-xs sm:text-sm px-6 py-3 transition-all flex items-center justify-center gap-2 min-h-[44px]">
                      <span>Contact for Thesis & Datasets</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>
                )}

                {project.actionType === 'prototype' && (
                  <a
                    href={project.actionHref || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative rounded-full inline-flex w-full sm:w-auto"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full bg-text-primary text-bg group-hover/btn:bg-bg group-hover/btn:text-text-primary rounded-full text-xs sm:text-sm px-6 py-3 transition-all flex items-center justify-center gap-2 min-h-[44px]">
                      <Eye className="w-4 h-4" />
                      <span>{project.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
