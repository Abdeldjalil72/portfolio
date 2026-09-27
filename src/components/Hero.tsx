import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { FileDown } from 'lucide-react';

const roles = ["Full-Stack Web Developer", "SaaS Systems Architect", "AI & Data Science Student", "Full-Stack Engineer"];

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

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

    if (containerRef.current) observer.observe(containerRef.current);

    // Role cycle
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
      hls?.destroy();
    };
  }, []);

  useEffect(() => {
    // GSAP Entrance
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1, delay: 0.3 }
      );

      tl.fromTo(".name-char",
        { opacity: 0, y: 110, rotate: 15 },
        { opacity: 1, y: 0, rotate: 0, duration: 1.2, stagger: 0.04, ease: "back.out(1.4)" },
        0.1
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden pt-28 pb-8 px-4">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-white/60 dark:bg-black/20 backdrop-blur-[0.5px] transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto my-auto">
        <div className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-6 md:mb-8">
          FULL-STACK WEB DEVELOPER • AI & SOFTWARE ENGINEER
        </div>
        
        <h1 className="flex flex-col items-center font-display italic leading-[0.88] tracking-tight text-text-primary mb-6 py-2">
          <span className="flex overflow-hidden py-1 whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            {"ABDELDJALIL".split("").map((char, index) => (
              <span key={index} className="name-char inline-block transform-gpu origin-bottom">
                {char}
              </span>
            ))}
          </span>
          <span className="flex overflow-hidden py-1 whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            {"BOUCHAMA".split("").map((char, index) => (
              <span key={index} className="name-char inline-block transform-gpu origin-bottom">
                {char}
              </span>
            ))}
          </span>
        </h1>
        
        <p className="blur-in text-xl md:text-2xl font-light mb-5 flex items-center gap-2 flex-wrap justify-center">
          A <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">{roles[roleIndex]}</span> based in Constantine, Algeria.
        </p>
        
        <p className="blur-in text-base md:text-lg text-muted max-w-xl mb-8 md:mb-10">
          Specializing in robust full-stack web architectures, scalable multi-tenant SaaS systems, and intelligent data-driven applications.
        </p>

        <div className="blur-in flex flex-wrap gap-4 justify-center">
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative rounded-full inline-flex"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary rounded-full text-sm px-7 py-3.5 transition-all group-hover:scale-105">
              Explore Projects
            </div>
          </a>

          <a 
            href="/resume.pdf" 
            download="Abdeldjalil_Bouchama_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full inline-flex"
            title="Download Abdeldjalil Bouchama's CV (PDF)"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative border-2 border-stroke bg-surface/90 text-text-primary group-hover:border-transparent rounded-full text-sm px-6 py-3.5 transition-all group-hover:scale-105 flex items-center gap-2 shadow-sm">
              <FileDown className="w-4 h-4 text-[#89AACC]" />
              <span>Resume / CV</span>
            </div>
          </a>
          
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative rounded-full inline-flex"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative border-2 border-stroke bg-bg text-text-primary group-hover:border-transparent rounded-full text-sm px-7 py-3.5 transition-all group-hover:scale-105">
              Get in Touch
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Naturally positioned below buttons and perfectly centered */}
      <div className="blur-in relative z-10 flex flex-col items-center gap-2 mt-8 md:mt-12 mb-2">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-8 md:h-10 bg-stroke overflow-hidden relative">
          <div className="w-full h-1/2 bg-text-primary animate-scroll-down absolute top-0 left-0" />
        </div>
      </div>
    </section>
  );
};
