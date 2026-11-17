import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, ExternalLink, BookOpen, ArrowUpRight, FileDown, Zap } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';
import { ProjectModal, type CaseStudy } from './ProjectModal';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface Project extends CaseStudy {
  span: string;
  img: string;
  videoSrc?: string;
}

const projects: Project[] = [
  {
    id: "atlas-erp-ecosystem",
    isFlagship: true,
    isPrivateRepo: true,
    sandboxBadge: "1-Click Demo Login — No signup required",
    title: "Atlas ERP Ecosystem — Multi-Portal B2B ERP, Client Store & Driver App",
    subtitle: "3 synchronized production web applications sharing a unified real-time MongoDB database across warehouse ERP, wholesale storefront, and fleet delivery",
    type: "Flagship • 3-Portal B2B SaaS Ecosystem",
    role: "Lead Full-Stack Systems Architect & Engineer",
    context: "Commercial Production System",
    metrics: [
      { label: "Synchronized Portals", value: "3 Web Apps" },
      { label: "Commercial Pipeline", value: "Devis → Facture" },
      { label: "Public Sandbox", value: "1-Click Login" }
    ],
    overview: "Architected and delivered a production B2B distribution, wholesale e-commerce, and fleet logistics ecosystem split into 3 synchronized web applications sharing a unified MongoDB Atlas database in real time.\n\nWholesale orders and quote requests placed on the B2B Client Storefront flow instantaneously into the multi-company ERP Back-Office for batch/lot warehouse allocation, procurement, commercial document progression, and fleet dispatch — pushing live delivery missions to the mobile-first Driver App where transit milestones, on-screen digital signatures, and photo proof-of-delivery sync directly back to the ERP.\n\nSource repositories are private as this powers a commercial production system; explore all 3 interconnected portals live via the self-healing public sandbox featuring 1-Click Demo Login (no signup required).",
    architecture: [
      {
        title: "ERP Back-Office & Commercial Pipeline",
        description: "Multi-company isolation, granular RBAC, multi-warehouse batch/lot & expiry/quarantine tracking, supplier procurement (Commandes Fournisseurs), full Devis → Bon de Commande → Bon de Livraison → Facture pipeline, partial/overdue payment tracking, and custom PDF & email generation.",
        icon: "layers"
      },
      {
        title: "B2B Wholesale Client Storefront (Atlas Store)",
        description: "Dedicated customer portal featuring persistent auto-saved draft carts, instant quote requests (Devis), real-time order progress tracking (Allocated → Shipped → Delivered → Invoiced → Paid), one-click reordering, and PDF downloads.",
        icon: "sparkles"
      },
      {
        title: "Driver Mobile Web App (Atlas Livraison)",
        description: "Mobile-first fleet app receiving live ERP dispatches, mission accept/decline workflow, step-by-step transit updates, on-screen digital signature & photo proof-of-delivery synced back to the ERP, and driver performance analytics.",
        icon: "cpu"
      },
      {
        title: "Unified MongoDB & Self-Healing Sandbox",
        description: "Compound multi-tenant Mongoose indexes, reversible lot-level stock deductions, NextAuth.js & JOSE JWT auth, 1-click role logins, cross-portal switcher widget, API guardrails protecting demo accounts, and nightly resets via Vercel Cron Jobs.",
        icon: "database"
      }
    ],
    techStack: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI / shadcn/ui",
      "Framer Motion",
      "MongoDB Atlas & Mongoose",
      "NextAuth.js & JOSE JWT",
      "PDF Generation",
      "Vercel Cron Jobs"
    ],
    description: "Production 3-portal B2B distribution & logistics platform uniting a multi-warehouse ERP back-office, wholesale customer storefront, and mobile fleet delivery app on one real-time MongoDB database.",
    portals: [
      {
        id: "erp-admin",
        name: "ERP Admin & Back-Office",
        shortLabel: "1. ERP Admin",
        domain: "erp-showcase.vercel.app",
        href: "https://erp-showcase.vercel.app",
        roleBadge: "1-Click Admin Demo",
        screenshot: "/projects/atlas-erp/erp-admin.png",
        caption: "Multi-company isolation, RBAC, multi-warehouse lot/expiry/quarantine inventory, Commandes Fournisseurs, Devis → Bon de Commande → Bon de Livraison → Facture pipeline, payment tracking & PDF/email dispatch."
      },
      {
        id: "client-store",
        name: "B2B Client Storefront (Atlas Store)",
        shortLabel: "2. B2B Storefront",
        domain: "client-web-app-showcase.vercel.app",
        href: "https://client-web-app-showcase.vercel.app",
        roleBadge: "1-Click Client Demo",
        screenshot: "/projects/atlas-erp/client-store.png",
        caption: "Wholesale storefront with auto-saved draft carts, instant Devis quote requests, real-time Allocated → Shipped → Delivered → Invoiced → Paid order tracking, 1-click reordering, and PDF downloads."
      },
      {
        id: "driver-app",
        name: "Driver Mobile App (Atlas Livraison)",
        shortLabel: "3. Driver App",
        domain: "delivery-app-showcase.vercel.app",
        href: "https://delivery-app-showcase.vercel.app",
        roleBadge: "1-Click Driver Demo",
        screenshot: "/projects/atlas-erp/driver-app.png",
        mobileScreenshot: "/projects/atlas-erp/driver-mobile.png",
        caption: "Mobile-first fleet app with live ERP mission dispatches, accept/decline workflow, step-by-step transit updates, on-screen digital signature & photo proof-of-delivery capture, and driver analytics."
      }
    ],
    span: "md:col-span-12",
    img: "/projects/atlas-erp/erp-admin.png"
  },
  {
    id: "vitedrop-saas",
    title: "ViteDrop: CPA & E-Commerce SaaS Architecture",
    subtitle: "High-concurrency dropshipping & media buying platform with state machine order lifecycles and transactional ledgers",
    type: "SaaS & Web Architecture",
    role: "Full-Stack System Architect & Engineer",
    context: "Production SaaS Venture",
    metrics: [
      { label: "Order Engine", value: "State Machine" },
      { label: "Financial Ledger", value: "Double-Entry" },
      { label: "Full-Stack", value: "Next.js + SQL" }
    ],
    overview: "Architected and built ViteDrop from the ground up: an end-to-end CPA affiliate marketing, dropshipping, and media buying SaaS platform.\n\nThe system coordinates high-frequency order flows with a deterministic Cash-on-Delivery (COD) state machine, real-time logistics carrier webhooks, and an automated double-entry financial ledger guaranteeing exact commission distributions between suppliers and affiliates.",
    architecture: [
      { title: "COD State Machine Engine", description: "Deterministic state engine governing Cash-on-Delivery orders from customer confirmation to carrier dispatch, transit, delivery, and automated return resolutions.", icon: "layers" },
      { title: "Transactional Financial Ledger", description: "Double-entry accounting subsystem executing atomic balance updates, automated supplier billing, and affiliate commission payouts with strict audit trails.", icon: "database" },
      { title: "Carrier Webhook Ingestion", description: "Resilient asynchronous webhook ingestion pipelines processing real-time parcel tracking and delivery status sync from third-party logistics APIs.", icon: "cpu" },
      { title: "High-Throughput Full-Stack", description: "Server Actions and connection pooling over PostgreSQL delivering sub-100ms response latencies during viral ad campaign traffic spikes.", icon: "sparkles" }
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS", "Prisma / Drizzle", "Webhooks", "State Machines", "REST APIs"],
    description: "Production CPA and dropshipping SaaS platform featuring Cash-on-Delivery state machines, carrier logistics integration, and an automated financial ledger.",
    actionText: "Live Platform",
    actionType: "external",
    liveHref: "https://vitedrop-frontend.vercel.app/",
    githubHref: "https://github.com/Abdeldjalil72/vitedrop-frontend",
    span: "md:col-span-7",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "healthtrust-medical-ai",
    title: "HealthTrust: Distributed Clinical Platform & Deep Learning Diagnostic",
    subtitle: "Microservices medical platform pairing real-time consultation scheduling with asynchronous deep learning pulmonary radiology inference",
    type: "Distributed Systems & Medical AI",
    role: "Co-Creator & Lead Full-Stack / AI Engineer",
    context: "Univ. Constantine 2 — Capstone (PFE L3)",
    metrics: [
      { label: "Inference Engine", value: "FastAPI / CNN" },
      { label: "Real-Time Sync", value: "WebSockets" },
      { label: "Queue Broker", value: "Celery + Redis" }
    ],
    overview: "Architected HealthTrust: a distributed healthcare platform uniting electronic medical records (EMR), real-time practitioner appointment scheduling, and automated deep learning diagnostic inference for chest radiographs.\n\nTo prevent resource starvation and maintain low UI latency, heavy neural network inference tasks were decoupled into a standalone FastAPI microservice orchestrated via Celery and Redis queues.",
    architecture: [
      { title: "Decoupled Inference Microservice", description: "Isolated CNN computer vision inference engine running on FastAPI, shielding the primary Django application from CPU/GPU latency spikes.", icon: "cpu" },
      { title: "Asynchronous Task Queues", description: "Celery and Redis message brokers handling diagnostic pipeline dispatch, notification broadcasts, and asynchronous clinical report generation.", icon: "layers" },
      { title: "Real-Time Consultation Dispatch", description: "Full-duplex WebSocket channels enabling instant appointment coordination and clinical state updates between physicians and patients.", icon: "sparkles" },
      { title: "Atomic Medical Records", description: "Relational database schema with strict transactional guarantees and role-based access control protecting confidential patient health records.", icon: "database" }
    ],
    techStack: ["React.js", "Django", "FastAPI", "Python", "Deep Learning / CNN", "Celery", "Redis", "WebSockets", "PostgreSQL"],
    description: "Distributed healthcare and diagnostic platform pairing real-time clinical workflows with decoupled CNN deep learning radiology inference.",
    actionText: "View Project Showcase",
    actionType: "external",
    actionHref: "https://lnkd.in/p/ewk-5HQu",
    span: "md:col-span-5",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "storm-tweet-stream",
    title: "Real-Time Stream Processing & Sentiment Engine (Apache Storm)",
    subtitle: "Distributed streaming topology for continuous high-throughput tweet sentiment analytics with live reactive Next.js dashboard",
    type: "Distributed Systems & Stream Processing",
    role: "Distributed Systems & Full-Stack Engineer",
    context: "Distributed Big Data Architecture",
    metrics: [
      { label: "Stream Engine", value: "Apache Storm" },
      { label: "Topology", value: "Spout + Bolts" },
      { label: "Dashboard", value: "Next.js / Polling" }
    ],
    overview: "Architected a distributed real-time stream processing system utilizing Apache Storm for continuous social media intelligence.\n\nThe streaming topology coordinates high-throughput tweet ingestion through custom spouts, parallel tokenization and sentiment classification bolts, and asynchronous CSV streaming sinks feeding a live reactive Next.js telemetry dashboard.",
    architecture: [
      { title: "Spout Ingestion Stream", description: "Fault-tolerant Apache Storm spouts continuously ingesting high-velocity unstructured social media streams.", icon: "layers" },
      { title: "Distributed Sentiment Bolt", description: "Parallelized classification bolts executing real-time sentiment scoring and linguistic classification.", icon: "cpu" },
      { title: "Continuous Persistence Sink", description: "Asynchronous stream sink buffering output predictions with low I/O contention.", icon: "database" },
      { title: "Live Telemetry Dashboard", description: "Next.js analytical dashboard rendering real-time sentiment distribution charts and throughput telemetry.", icon: "sparkles" }
    ],
    techStack: ["Apache Storm", "Java", "Python", "Stream Processing", "Distributed Systems", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "Distributed Apache Storm streaming topology for high-throughput tweet sentiment analytics paired with a live reactive Next.js telemetry dashboard.",
    actionText: "View on GitHub",
    actionType: "external",
    githubHref: "https://github.com/Abdeldjalil72/real-time-tweet-analysis-using-apache-storm",
    span: "md:col-span-6",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "applied-ai-biomedical-nlp",
    title: "Applied AI Research: Biomedical Data Mining & Dialectal NLP",
    subtitle: "Extreme dimensionality reduction (15,155 to 4 features) achieving 100% SVM accuracy alongside code-switched Algerian Darija sarcasm transformers",
    type: "AI / ML & NLP Research",
    role: "Applied AI & Machine Learning Researcher",
    context: "Univ. Constantine 2 — Master Research",
    metrics: [
      { label: "SVM Accuracy", value: "100%" },
      { label: "Feature Space", value: "15,155 → 4" },
      { label: "Darija NLP Model", value: "80% Acc." }
    ],
    overview: "Spearheaded two cutting-edge applied AI research tracks at Université Constantine 2:\n\n1. Biomedical Data Mining: Developed a hybrid dimensionality reduction pipeline (feature selection + feature extraction) on an ovarian cancer gene expression dataset (253 samples × 15,155 variables). Successfully compressed the feature space down to 4 latent dimensions while achieving a flawless 100% classification accuracy using Support Vector Machines (SVM).\n\n2. Dialectal Arabic NLP: Engineered and fine-tuned transformer models (AraBERT) on code-switched Algerian Darija, capturing nuanced sarcasm, French loanwords, and Arabizi syntax to achieve 80% accuracy.",
    architecture: [
      { title: "Hybrid Dimensionality Reduction", description: "Coupled statistical feature selection with extraction techniques to compress 15,155 high-dimensional genomic variables into 4 informative components.", icon: "database" },
      { title: "Support Vector Classification", description: "Trained and cross-validated RBF-kernel SVMs demonstrating total class separability on the reduced biomedical feature space.", icon: "sparkles" },
      { title: "Low-Resource Dialect Transformers", description: "Custom tokenization and fine-tuning of AraBERT addressing phonetic Arabizi, spelling variations, and French-Arabic code-switching.", icon: "layers" },
      { title: "IoT Embedded ML Classifier", description: "Embedded on-device classifier interpreting inertial sensor streams from a smart pen prototype for real-time geometric shape recognition.", icon: "cpu" }
    ],
    techStack: ["Python", "Scikit-Learn", "AraBERT", "Transformers", "PyTorch", "SVM", "Pandas", "NumPy", "Data Mining", "IoT / Embedded ML"],
    description: "Breakthrough applied AI research: 15,155-to-4 feature compression yielding 100% SVM accuracy on cancer genomics, plus Algerian Darija dialectal NLP.",
    actionText: "Research Notebook (.ipynb)",
    actionType: "external",
    downloadHref: "/research/ovarian-cancer-data-mining.ipynb",
    downloadFilename: "Abdeldjalil_Bouchama_Ovarian_Cancer_Data_Mining.ipynb",
    span: "md:col-span-6",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1400"
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
  const [activeCardPortalIdx, setActiveCardPortalIdx] = useState(0);

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
              A curated selection of multi-portal B2B ERP ecosystems, production SaaS platforms, distributed healthcare architectures, and applied AI research. Click any project for architecture details.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, idx) => {
            if (project.isFlagship && project.portals && project.portals.length > 0) {
              const activePortal = project.portals[activeCardPortalIdx] || project.portals[0];
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative overflow-hidden bg-[#080B12] border border-stroke rounded-3xl p-5 sm:p-7 md:p-9 cursor-pointer ${project.span}`}
                >
                  {/* Ambient Cosmic Steel-Blue Glow */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-90"
                    style={{
                      background:
                        "radial-gradient(ellipse 65% 60% at 78% 28%, rgba(78, 133, 191, 0.22), transparent 70%), radial-gradient(ellipse 50% 50% at 15% 85%, rgba(137, 170, 204, 0.10), transparent 70%)"
                    }}
                  />

                  <div className="relative z-10 flex flex-col justify-between gap-6">
                    {/* Top Row: Badges & 1-Click Sandbox Highlight */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.06] backdrop-blur-md border border-[#89AACC]/30 text-[#89AACC] shadow-sm min-h-[32px] inline-flex items-center">
                          {project.type}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 group-hover:bg-white/20 text-white/90 backdrop-blur-md border border-white/15 shadow-sm min-h-[32px] inline-flex items-center gap-1.5 transition-colors">
                          <BookOpen className="w-3 h-3 text-[#89AACC]" />
                          <span>Case Study</span>
                        </span>
                        {project.isPrivateRepo && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 text-white/75 backdrop-blur-md border border-white/10 min-h-[32px] inline-flex items-center gap-1.5">
                            <Lock className="w-3 h-3 text-[#89AACC]" />
                            <span>Private Commercial Repos</span>
                          </span>
                        )}
                      </div>

                      {project.sandboxBadge && (
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 backdrop-blur-md min-h-[32px] inline-flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{project.sandboxBadge}</span>
                        </span>
                      )}
                    </div>

                    {/* Center Split: Narrative + 3 Live Portal Launchers (Left) & Interactive Screenshot Stage (Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                      {/* Left Column */}
                      <div className="lg:col-span-6 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-medium text-white leading-tight group-hover:text-[#89AACC] transition-colors">
                            {project.title}
                          </h3>
                          <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#89AACC]/20 border border-white/15 flex items-center justify-center shrink-0 transition-colors mt-1">
                            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#89AACC] transition-colors" />
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mb-5">
                          {project.description}
                        </p>

                        {/* 3 Synchronized Live Demo Links */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#89AACC] mb-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>3 Live Portals • Real-Time Shared MongoDB</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                            {project.portals.map((portal, pIdx) => {
                              const isPreviewed = pIdx === activeCardPortalIdx;
                              return (
                                <a
                                  key={portal.id}
                                  href={portal.href}
                                  onClick={(e) => e.stopPropagation()}
                                  onMouseEnter={() => setActiveCardPortalIdx(pIdx)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group/portal relative rounded-2xl block"
                                >
                                  <span className="absolute inset-[-1px] rounded-2xl accent-gradient opacity-0 group-hover/portal:opacity-100 transition-opacity duration-300" />
                                  <div
                                    className={`relative px-3.5 py-2.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                                      isPreviewed
                                        ? 'bg-white/[0.09] border-[#89AACC]/45 text-white'
                                        : 'bg-white/[0.04] border-white/10 text-white/85 hover:bg-white/[0.08]'
                                    }`}
                                  >
                                    <div className="min-w-0">
                                      <div className="text-xs sm:text-sm font-medium text-white truncate">
                                        {portal.name}
                                      </div>
                                      <div className="text-[11px] text-white/55 font-mono truncate">
                                        {portal.domain} • {portal.roleBadge}
                                      </div>
                                    </div>
                                    <div className="inline-flex items-center gap-1 text-xs font-medium text-[#89AACC] shrink-0">
                                      <span className="hidden sm:inline lg:inline">Live Demo</span>
                                      <ArrowUpRight className="w-3.5 h-3.5" />
                                    </div>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Interactive Browser & Mobile Preview Stage */}
                      <div className="lg:col-span-6">
                        <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0D121C] shadow-2xl">
                          {/* Interactive Chrome Switcher */}
                          <div className="px-3 py-2 bg-[#121826] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5">
                              {project.portals.map((portal, pIdx) => (
                                <button
                                  key={portal.id}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveCardPortalIdx(pIdx);
                                  }}
                                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                                    pIdx === activeCardPortalIdx
                                      ? 'bg-[#89AACC] text-[#080B12]'
                                      : 'bg-white/[0.06] text-white/70 hover:text-white hover:bg-white/10'
                                  }`}
                                >
                                  {portal.shortLabel}
                                </button>
                              ))}
                            </div>
                            <span className="hidden sm:inline-block text-[11px] text-white/55 font-mono truncate">
                              {activePortal.domain}
                            </span>
                          </div>

                          {/* Screenshot Stage */}
                          <div className="relative p-2.5 sm:p-3 bg-[#0A0E16]">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={activePortal.id}
                                initial={{ opacity: 0, scale: 0.985 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.985 }}
                                transition={{ duration: 0.2 }}
                                className="relative"
                              >
                                <img
                                  src={activePortal.screenshot}
                                  alt={activePortal.name}
                                  className="w-full h-auto rounded-xl border border-white/10 shadow-lg block"
                                />
                                {activePortal.mobileScreenshot && (
                                  <div className="hidden sm:block absolute -bottom-1 right-2 w-[26%] max-w-[125px] rounded-xl overflow-hidden border-2 border-white/25 shadow-2xl bg-[#080B12]">
                                    <img
                                      src={activePortal.mobileScreenshot}
                                      alt={`${activePortal.name} Mobile`}
                                      className="w-full h-auto block"
                                    />
                                  </div>
                                )}
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Tech Stack Pills */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs bg-white/10 backdrop-blur-sm border border-white/15 text-white/90"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-[#89AACC] font-medium inline-flex items-center gap-1 shrink-0">
                        <span>Click card for full architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#89AACC]/40 rounded-3xl transition-colors duration-500 pointer-events-none" />
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={project.id}
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
                  
                  {/* Action Link Chips */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Live Platform Chip */}
                    {project.liveHref && (
                      <a
                        href={project.liveHref}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex rounded-full"
                        title="Open Live Platform"
                      >
                        <span className="absolute inset-[-1.5px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <div className="relative px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 shadow-sm min-h-[32px]">
                          <ExternalLink className="w-3.5 h-3.5 text-[#89AACC]" />
                          <span>Live Platform</span>
                          <ArrowUpRight className="w-3 h-3 text-white/60" />
                        </div>
                      </a>
                    )}

                    {/* GitHub Chip */}
                    {project.githubHref && (
                      <a
                        href={project.githubHref}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex rounded-full"
                        title="View GitHub Repository"
                      >
                        <span className="absolute inset-[-1.5px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <div className="relative px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 shadow-sm min-h-[32px]">
                          <GithubIcon className="w-3.5 h-3.5 text-white" />
                          <span>GitHub</span>
                          <ArrowUpRight className="w-3 h-3 text-white/60" />
                        </div>
                      </a>
                    )}

                    {/* Research Notebook Download Chip */}
                    {project.downloadHref && (
                      <a
                        href={project.downloadHref}
                        download={project.downloadFilename || "notebook.ipynb"}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex rounded-full"
                        title="Download Research Notebook (.ipynb)"
                      >
                        <span className="absolute inset-[-1.5px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <div className="relative px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 shadow-sm min-h-[32px]">
                          <FileDown className="w-3.5 h-3.5 text-[#89AACC]" />
                          <span>Notebook (.ipynb)</span>
                        </div>
                      </a>
                    )}

                    {/* Generic Action Chip (like HealthTrust showcase or Flow Prototype) */}
                    {project.actionHref && !project.liveHref && (
                      <a
                        href={project.actionHref}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex rounded-full"
                      >
                        <span className="absolute inset-[-1.5px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <div className="relative px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 shadow-sm min-h-[32px]">
                          {project.actionType === 'prototype' ? (
                            <Eye className="w-3.5 h-3.5 text-[#89AACC]" />
                          ) : (
                            <ExternalLink className="w-3.5 h-3.5 text-[#89AACC]" />
                          )}
                          <span>{project.actionText}</span>
                          <ArrowUpRight className="w-3 h-3 text-white/60" />
                        </div>
                      </a>
                    )}

                    {/* Request Access fallback */}
                    {project.actionType === 'request' && !project.githubHref && (
                      <a
                        href={`mailto:bouchamaabdeldjalil@gmail.com?subject=${encodeURIComponent(`Code Request: ${project.title}`)}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/15 text-white hover:border-[#89AACC] transition-colors shadow-sm min-h-[32px]"
                        title="Contact to request code repository access"
                      >
                        <Lock className="w-3 h-3 text-[#89AACC]" />
                        <span>{project.actionText}</span>
                      </a>
                    )}
                  </div>
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
            );
          })}
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
