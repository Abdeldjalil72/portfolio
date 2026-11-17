import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ExternalLink, Cpu, Database, CheckCircle2, Layers, Sparkles, Eye, ArrowUpRight, FileDown, Zap, Smartphone, Monitor } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export interface PortalDemo {
  id: string;
  name: string;
  shortLabel: string;
  domain: string;
  href: string;
  roleBadge: string;
  screenshot: string;
  mobileScreenshot?: string;
  caption: string;
}

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
  actionType?: 'request' | 'academic' | 'prototype' | 'external';
  actionHref?: string;
  actionText?: string;
  liveHref?: string;
  githubHref?: string;
  downloadHref?: string;
  downloadFilename?: string;
  isFlagship?: boolean;
  isPrivateRepo?: boolean;
  sandboxBadge?: string;
  portals?: PortalDemo[];
}

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activePortalIndex, setActivePortalIndex] = useState(0);

  // Reset portal tab when opening a different project
  useEffect(() => {
    setActivePortalIndex(0);
  }, [project?.id]);

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
            className={`relative z-10 w-full ${
              project.portals && project.portals.length > 0 ? 'max-w-4xl' : 'max-w-3xl'
            } max-h-[88vh] overflow-y-auto rounded-3xl bg-surface border border-stroke shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between`}
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
                  {project.isPrivateRepo && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-bg border border-stroke text-muted inline-flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-[#89AACC]" />
                      <span>Private Commercial Source</span>
                    </span>
                  )}
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

              {/* Multi-Portal Interactive Sandbox & Live Screenshots */}
              {project.portals && project.portals.length > 0 && (() => {
                const activePortal = project.portals[activePortalIndex] || project.portals[0];
                return (
                  <div className="mb-8 rounded-2xl bg-bg/70 border border-stroke p-4 sm:p-5">
                    {/* Sandbox Header & 1-Click Login Highlight */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                      <div>
                        <h3 className="text-xs text-muted uppercase tracking-[0.2em]">
                          Live Interactive Demo Portals
                        </h3>
                        <p className="text-xs text-muted mt-0.5">
                          All 3 portals sync in real time to the same shared MongoDB database
                        </p>
                      </div>
                      {project.sandboxBadge && (
                        <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400">
                          <Zap className="w-3.5 h-3.5 shrink-0" />
                          <span>{project.sandboxBadge}</span>
                        </span>
                      )}
                    </div>

                    {/* Interactive Portal Selector Tabs */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                      {project.portals.map((portal, idx) => {
                        const isActive = idx === activePortalIndex;
                        return (
                          <button
                            key={portal.id}
                            type="button"
                            onClick={() => setActivePortalIndex(idx)}
                            className={`text-left px-3 py-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-1.5 ${
                              isActive
                                ? 'bg-surface border-[#89AACC]/60 shadow-sm text-text-primary'
                                : 'bg-bg/60 border-stroke/70 text-muted hover:text-text-primary hover:border-stroke'
                            }`}
                          >
                            <div className="min-w-0">
                              <div className="text-xs font-semibold truncate">{portal.shortLabel}</div>
                              <div className="text-[10.5px] text-muted truncate">{portal.domain}</div>
                            </div>
                            {portal.mobileScreenshot ? (
                              <Smartphone className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#89AACC]' : 'text-muted'}`} />
                            ) : (
                              <Monitor className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#89AACC]' : 'text-muted'}`} />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Browser Chrome + Crisp Portal Screenshot */}
                    <div className="rounded-2xl overflow-hidden border border-stroke bg-[#0C1017] shadow-lg">
                      {/* Browser Top Bar */}
                      <div className="px-3.5 py-2.5 bg-[#111621] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="hidden xs:flex items-center gap-1.5 mr-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          </div>
                          <span className="px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-[11px] text-white/80 font-mono truncate">
                            https://{activePortal.domain}
                          </span>
                          <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] bg-[#89AACC]/15 text-[#89AACC] border border-[#89AACC]/25">
                            <Zap className="w-3 h-3" />
                            <span>{activePortal.roleBadge}</span>
                          </span>
                        </div>

                        <a
                          href={activePortal.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white text-black hover:bg-[#89AACC] hover:text-black transition-colors"
                        >
                          <span>Launch Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Screenshot Display (with side-by-side Mobile View when available) */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activePortal.id}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="p-3 sm:p-4 bg-[#0A0E15]"
                        >
                          {activePortal.mobileScreenshot ? (
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                              <div className="sm:col-span-9 rounded-xl overflow-hidden border border-white/10 shadow-md">
                                <img
                                  src={activePortal.screenshot}
                                  alt={activePortal.name}
                                  className="w-full h-auto block"
                                />
                              </div>
                              <div className="hidden sm:block sm:col-span-3 rounded-2xl overflow-hidden border-2 border-white/15 shadow-xl max-w-[180px] mx-auto">
                                <img
                                  src={activePortal.mobileScreenshot}
                                  alt={`${activePortal.name} Mobile View`}
                                  className="w-full h-auto block"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="rounded-xl overflow-hidden border border-white/10 shadow-md">
                              <img
                                src={activePortal.screenshot}
                                alt={activePortal.name}
                                className="w-full h-auto block"
                              />
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Portal Role Caption + Direct Quick Links */}
                    <p className="text-xs text-muted leading-relaxed mt-3">
                      <strong className="text-text-primary">{activePortal.name}:</strong> {activePortal.caption}
                    </p>
                  </div>
                );
              })()}

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
            <div className="pt-6 mt-6 border-t border-stroke/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="text-xs text-muted flex items-center gap-2">
                {project.isPrivateRepo ? (
                  <>
                    <Lock className="w-4 h-4 text-[#89AACC] shrink-0" />
                    <span>Private Commercial Repos • 1-Click Live Sandbox (No Signup)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Verified Architecture & Code Standards</span>
                  </>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end shrink-0">
                {/* Multi-Portal Direct Demo Links */}
                {project.portals && project.portals.map((portal, idx) => (
                  <a
                    key={portal.id}
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative rounded-full inline-flex w-full sm:w-auto"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`relative w-full rounded-full text-xs px-3.5 py-2 transition-all flex items-center justify-center gap-1.5 min-h-[38px] whitespace-nowrap ${
                        idx === 0
                          ? 'bg-text-primary text-bg group-hover/btn:bg-bg group-hover/btn:text-text-primary font-medium'
                          : 'bg-surface hover:bg-stroke/40 border border-stroke text-text-primary'
                      }`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#89AACC] shrink-0" />
                      <span>{portal.shortLabel.replace(/^\d+\.\s*/, '')}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70 shrink-0" />
                    </div>
                  </a>
                ))}

                {/* Live Platform Link */}
                {project.liveHref && (
                  <a
                    href={project.liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative rounded-full inline-flex w-full sm:w-auto"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full bg-text-primary text-bg group-hover/btn:bg-bg group-hover/btn:text-text-primary rounded-full text-xs sm:text-sm px-5 py-2.5 transition-all flex items-center justify-center gap-2 min-h-[42px]">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Platform</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                )}

                {/* GitHub Repository Link */}
                {project.githubHref && (
                  <a
                    href={project.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative rounded-full inline-flex w-full sm:w-auto"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full bg-surface hover:bg-stroke/40 border border-stroke text-text-primary rounded-full text-xs sm:text-sm px-5 py-2.5 transition-all flex items-center justify-center gap-2 min-h-[42px]">
                      <GithubIcon className="w-4 h-4 text-text-primary" />
                      <span>View on GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
                    </div>
                  </a>
                )}

                {/* Research Notebook Download Link */}
                {project.downloadHref && (
                  <a
                    href={project.downloadHref}
                    download={project.downloadFilename || "notebook.ipynb"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative rounded-full inline-flex w-full sm:w-auto"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full bg-text-primary text-bg group-hover/btn:bg-bg group-hover/btn:text-text-primary rounded-full text-xs sm:text-sm px-5 py-2.5 transition-all flex items-center justify-center gap-2 min-h-[42px]">
                      <FileDown className="w-4 h-4" />
                      <span>Download Notebook (.ipynb)</span>
                    </div>
                  </a>
                )}

                {/* Generic Action Link (e.g. LinkedIn Showcase or Prototype) */}
                {project.actionHref && !project.liveHref && (
                  <a
                    href={project.actionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative rounded-full inline-flex w-full sm:w-auto"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full bg-text-primary text-bg group-hover/btn:bg-bg group-hover/btn:text-text-primary rounded-full text-xs sm:text-sm px-5 py-2.5 transition-all flex items-center justify-center gap-2 min-h-[42px]">
                      {project.actionType === 'prototype' ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                      <span>{project.actionText || "View Showcase"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                )}

                {/* Request Access */}
                {project.actionType === 'request' && !project.githubHref && (
                  <a
                    href={`mailto:bouchamaabdeldjalil@gmail.com?subject=${encodeURIComponent(`Code Request: ${project.title}`)}`}
                    className="group/btn relative rounded-full inline-flex w-full sm:w-auto"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full bg-text-primary text-bg group-hover/btn:bg-bg group-hover/btn:text-text-primary rounded-full text-xs sm:text-sm px-6 py-3 transition-all flex items-center justify-center gap-2 min-h-[44px]">
                      <Lock className="w-4 h-4" />
                      <span>{project.actionText}</span>
                    </div>
                  </a>
                )}

                {/* Academic Inquiry fallback */}
                {project.actionType === 'academic' && !project.downloadHref && !project.actionHref && (
                  <a
                    href={`mailto:bouchamaabdeldjalil@gmail.com?subject=${encodeURIComponent(`Inquiry: ${project.title}`)}`}
                    className="group/btn relative rounded-full inline-flex w-full sm:w-auto"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full bg-surface hover:bg-stroke/40 border border-stroke text-text-primary rounded-full text-xs sm:text-sm px-6 py-3 transition-all flex items-center justify-center gap-2 min-h-[44px]">
                      <span>Contact for Research & Code</span>
                      <ArrowUpRight className="w-4 h-4" />
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
