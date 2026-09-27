import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { Mail, MapPin, Check, Copy, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Social contact links
const GITHUB_URL = "https://github.com/Abdeldjalil72";
const LINKEDIN_URL = "https://www.linkedin.com/in/abdeldjalil-bouchama-287a62409/";

const socialLinks = [
  { name: "GitHub", href: GITHUB_URL },
  { name: "LinkedIn", href: LINKEDIN_URL }
];

export const Footer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("bouchamaabdeldjalil@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      window.location.href = "mailto:bouchamaabdeldjalil@gmail.com";
    }
  };

  useEffect(() => {
    // HLS Setup
    let hls: Hls | null = null;
    const src = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    
    if (videoRef.current) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = src;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('contact');
    if (footerElement) observer.observe(footerElement);

    // Marquee Animation
    let tween: gsap.core.Tween | null = null;
    if (marqueeRef.current) {
      tween = gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1
      });
    }

    return () => {
      observer.disconnect();
      hls?.destroy();
      tween?.kill();
    };
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden min-h-[60vh] flex flex-col justify-between">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-white/85 md:bg-white/75 dark:bg-black/80 dark:md:bg-black/60 transition-colors duration-300" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-bg to-transparent" />
      </div>

      {/* Marquee */}
      <div className="relative z-10 w-full overflow-hidden mb-12 py-4">
        <div ref={marqueeRef} className="whitespace-nowrap inline-flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex whitespace-nowrap">
              {[...Array(10)].map((_, j) => (
                <span key={j} className="text-4xl md:text-6xl lg:text-8xl font-display italic text-text-primary/10 mx-4">
                  BUILDING SCALABLE FULL-STACK & AI SYSTEMS •
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 mb-20">
        <h2 className="text-3xl md:text-5xl font-medium mb-4">Let's build together</h2>
        <p className="text-muted text-sm md:text-base max-w-md mb-8">
          Available for innovative web architectures, machine learning collaborations, and high-impact engineering roles.
        </p>
        {/* Interactive Copy Email Button */}
        <div className="flex flex-col items-center gap-3">
          <button 
            onClick={handleCopyEmail}
            className="group relative rounded-full inline-flex cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
            title="Click to copy email address"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-surface hover:bg-surface/80 text-text-primary text-base md:text-xl px-7 md:px-8 py-3.5 md:py-4 rounded-full border border-stroke transition-all flex items-center gap-3 shadow-sm">
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5 text-[#89AACC]" />
                  <span>bouchamaabdeldjalil@gmail.com</span>
                  <span className="p-1 rounded-full bg-stroke/50 group-hover:bg-[#89AACC]/20 transition-colors ml-1">
                    <Copy className="w-3.5 h-3.5 text-muted group-hover:text-text-primary" />
                  </span>
                </>
              )}
            </div>
          </button>

          {/* Secondary fallback link to mail client */}
          <a
            href="mailto:bouchamaabdeldjalil@gmail.com"
            className="text-xs text-muted hover:text-text-primary inline-flex items-center gap-1 transition-colors mt-1"
          >
            Or open directly in mail app <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface/95 backdrop-blur-md border border-stroke shadow-2xl text-text-primary pointer-events-auto"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-text-primary">Email address copied!</p>
              <p className="text-[11px] text-muted font-mono">bouchamaabdeldjalil@gmail.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Bar */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke/50">
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-primary">
          <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            Available for projects
          </div>
          <span className="text-stroke">•</span>
          <div className="flex items-center gap-1.5 text-muted">
            <MapPin className="w-3.5 h-3.5 text-[#89AACC]" />
            <span>Constantine, Algeria</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="text-sm text-muted">
          © 2026 Abdeldjalil Bouchama. Built with passion & AI.
        </div>
      </div>
    </footer>
  );
};
