import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Building2, BookOpen, ArrowUpRight } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  details: string[];
  caseStudyId?: string;
  caseStudyLabel?: string;
  liveHref?: string;
  liveLabel?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Architect & Engineer — ViteDrop",
    company: "ViteDrop (Independent SaaS Venture)",
    location: "Constantine, Algeria",
    period: "Oct. 2026 – Present",
    type: "SaaS Architecture & Next.js",
    caseStudyId: "vitedrop-saas",
    caseStudyLabel: "ViteDrop Case Study",
    liveHref: "https://vitedrop-frontend.vercel.app/",
    liveLabel: "Live Platform",
    details: [
      "Engineered an end-to-end CPA affiliate, dropshipping, and media buying platform built with Next.js Full-Stack and PostgreSQL.",
      "Implemented a robust deterministic 8-state machine for Cash-on-Delivery (COD) order lifecycles and integrated real-time logistics carrier webhooks.",
      "Designed an automated double-entry transactional ledger and billing engine for vendor payouts and affiliate commissions."
    ]
  },
  {
    role: "Applied AI & Data Mining Researcher",
    company: "Univ. Abdelhamid Mehri – Constantine 2",
    location: "Constantine, Algeria",
    period: "Sept. 2025 – June 2026",
    type: "Academic & Applied Research",
    caseStudyId: "applied-ai-biomedical-nlp",
    caseStudyLabel: "Research Case Study",
    liveHref: "/research/ovarian-cancer-data-mining.ipynb",
    liveLabel: "Notebook (.ipynb)",
    details: [
      "Biomedical Data Mining: Engineered hybrid dimensionality reduction (feature selection + extraction) on an ovarian cancer dataset (253×15,155 variables reduced to 4), achieving 100% classification accuracy with SVM.",
      "NLP & Sarcasm Detection: Trained and fine-tuned natural language processing models on Arabic and Algerian Darija, achieving 80% accuracy.",
      "IoT & Embedded Machine Learning: Prototyped a connected smart pen with inertial sensors running an on-device classifier recognizing geometric shapes in real time."
    ]
  },
  {
    role: "Freelance Full-Stack Engineer — ERP & Logistics System",
    company: "Agri-Food Enterprise (Avian Distribution)",
    location: "Constantine, Algeria",
    period: "March 2025 – Nov. 2025",
    type: "3-Portal B2B ERP Ecosystem",
    caseStudyId: "atlas-erp-ecosystem",
    caseStudyLabel: "Explore 3-Portal Flagship Case Study",
    liveHref: "https://erp-showcase.vercel.app",
    liveLabel: "1-Click Live ERP Sandbox",
    details: [
      "Architected and delivered a production 3-portal B2B distribution ecosystem (Next.js App Router, MongoDB Atlas & Mongoose) sharing a unified real-time database across ERP Back-Office, Wholesale Storefront, and Driver Mobile App.",
      "Engineered multi-company RBAC, multi-warehouse batch/lot & expiry inventory, supplier procurement, and the complete commercial pipeline (Devis → Bon de Commande → Bon de Livraison → Facture) with PDF generation.",
      "Built the wholesale B2B customer storefront (draft carts, live order tracking) and mobile-first fleet delivery app with live dispatches and digital signature/photo proof-of-delivery."
    ]
  },
  {
    role: "Co-Creator & Full-Stack AI Engineer — HealthTrust",
    company: "Univ. Abdelhamid Mehri – Constantine 2",
    location: "Constantine, Algeria",
    period: "Jan. 2025 – May 2025",
    type: "Capstone Project (PFE L3)",
    caseStudyId: "healthtrust-medical-ai",
    caseStudyLabel: "HealthTrust Case Study",
    liveHref: "https://lnkd.in/p/ewk-5HQu",
    liveLabel: "Project Showcase",
    details: [
      "Architected HealthTrust: a distributed healthcare platform for patient medical records, real-time consultation scheduling (WebSockets), and automated clinical diagnostics (React, Django, FastAPI).",
      "Isolated the Deep Learning inference microservice (pulmonary cancer detection on chest X-rays) using FastAPI to prevent main backend bottlenecks.",
      "Orchestrated asynchronous background job queues using Celery and Redis, resolving race conditions and ensuring zero-downtime real-time messaging."
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
          viewport={{ once: true, margin: "-20px" }}
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
              Engineering production SaaS platforms, applied AI & data mining research, distributed architectures, and enterprise logistics.
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
              className="group p-5 sm:p-6 md:p-8 rounded-3xl bg-surface border border-stroke shadow-sm dark:shadow-none hover:border-[#89AACC]/40 transition-all duration-300"
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
                      <span>•</span>
                      <span className="text-[#3B72AC] dark:text-[#89AACC] font-medium">{exp.period}</span>
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

                {/* Cross-Links to Case Studies & Live Deployments */}
                {(exp.caseStudyId || exp.liveHref) && (
                  <div className="flex flex-wrap items-center gap-2.5 pt-3 mt-1">
                    {exp.caseStudyId && (
                      <button
                        type="button"
                        onClick={() => {
                          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                          window.dispatchEvent(
                            new CustomEvent('open-project-modal', { detail: { id: exp.caseStudyId } })
                          );
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-bg border border-stroke text-text-primary hover:border-[#89AACC] transition-colors cursor-pointer min-h-[32px]"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#89AACC]" />
                        <span>{exp.caseStudyLabel || 'View Case Study'}</span>
                      </button>
                    )}

                    {exp.liveHref && (
                      <a
                        href={exp.liveHref}
                        download={exp.liveHref.endsWith('.ipynb') ? 'Abdeldjalil_Bouchama_Ovarian_Cancer_Data_Mining.ipynb' : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#89AACC]/10 border border-[#89AACC]/25 text-[#3B72AC] dark:text-[#89AACC] hover:bg-[#89AACC]/20 transition-colors min-h-[32px]"
                      >
                        <span>{exp.liveLabel || 'Live Link'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
