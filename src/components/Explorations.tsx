import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const explorations = [
  { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600", yOffset: 0, rotate: -2 },
  { img: "https://images.unsplash.com/photo-1629757754637-293e54bc85bd?auto=format&fit=crop&q=80&w=600", yOffset: 150, rotate: 3 },
  { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600", yOffset: 0, rotate: 1 },
  { img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=600", yOffset: 250, rotate: -4 },
  { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600", yOffset: 0, rotate: 2 },
  { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600", yOffset: 100, rotate: -1 },
];

export const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pin the center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinnedRef.current,
        pinSpacing: false,
      });

      // Parallax for columns
      gsap.to(leftColRef.current, {
        y: "-50%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(rightColRef.current, {
        y: "-80%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      
      {/* Pinned Layer */}
      <div ref={pinnedRef} className="absolute inset-0 h-screen w-full flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-4">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <div className="flex justify-center mb-6">
            <AnimatedTitle 
              text="Visual playground" 
              italicWord="playground" 
              className="text-5xl md:text-7xl lg:text-8xl text-text-primary"
            />
          </div>
          <p className="text-muted max-w-sm mx-auto mb-8 text-sm md:text-base">
            Experiments in motion, typography, and generative design.
          </p>
          <a href="#" className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 bg-surface border border-stroke rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300">
            Dribbble <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Parallax Layer */}
      <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 pt-[50vh] pointer-events-none">
        <div className="grid grid-cols-2 gap-12 md:gap-40 h-full">
          
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col gap-24 md:gap-40 items-end">
            {explorations.filter((_, i) => i % 2 === 0).map((item, i) => (
              <div 
                key={i} 
                className="w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden pointer-events-auto group cursor-pointer border border-stroke/50"
                style={{ transform: `rotate(${item.rotate}deg)`, marginTop: item.yOffset }}
              >
                <img 
                  src={item.img} 
                  alt="Exploration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col gap-32 md:gap-48 items-start">
            {explorations.filter((_, i) => i % 2 !== 0).map((item, i) => (
              <div 
                key={i} 
                className="w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden pointer-events-auto group cursor-pointer border border-stroke/50"
                style={{ transform: `rotate(${item.rotate}deg)`, marginTop: item.yOffset }}
              >
                <img 
                  src={item.img} 
                  alt="Exploration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
