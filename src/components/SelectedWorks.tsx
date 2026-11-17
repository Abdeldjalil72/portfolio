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
    actionText: "Code Available on Request",
    actionType: "request",
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
    actionText: "Capstone Project — Univ. Constantine 2",
    actionType: "academic",
    span: "md:col-span-5",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
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
    actionText: "Academic Research — Univ. Constantine 2",
    actionType: "academic",
    span: "md:col-span-12",
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
              A curated selection of production SaaS platforms, distributed healthcare architectures, and applied AI & data mining research. Click any project for architecture details.
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
                      href={`mailto:bouchamaabdeldjalil@gmail.com?subject=${encodeURIComponent(`Code Request: ${project.title}`)}`}
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
