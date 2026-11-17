import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../context/ThemeContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = ["Home", "About", "Skills", "Experience", "Projects"];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Scroll Spy: dynamically highlight active section as user scrolls
      const sectionIds = ["home", "about", "skills", "experience", "projects"];
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            const label = id.charAt(0).toUpperCase() + id.slice(1);
            setActive(label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link: string) => {
    setActive(link);
    setMobileMenuOpen(false);
    const targetId = link.toLowerCase();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-3 sm:pt-4 md:pt-6 px-4 pointer-events-none">
      {/* Main Floating Pill */}
      <div className={cn(
        "pointer-events-auto flex items-center justify-between md:justify-start rounded-full backdrop-blur-md border border-stroke dark:border-white/10 bg-surface/90 dark:bg-surface/80 px-2 py-1.5 sm:py-2 transition-all duration-300 shadow-sm max-w-full",
        scrolled && "shadow-md shadow-black/10 dark:shadow-black/30 bg-surface/95"
      )}>
        {/* Profile Avatar / Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("Home");
          }}
          className="group relative w-9 h-9 flex items-center justify-center rounded-full hover:scale-105 transition-transform duration-300 shrink-0"
          title="Abdeldjalil Bouchama"
        >
          <div className="absolute inset-0 rounded-full accent-gradient group-hover:bg-[length:200%_auto] group-hover:animate-gradient-shift" />
          <div className="absolute inset-[1.5px] rounded-full overflow-hidden bg-bg flex items-center justify-center">
            <img 
              src="/profile.jpg" 
              alt="Abdeldjalil Bouchama" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </a>

        {/* Mobile Name Label (Visible only on mobile) */}
        <div className="md:hidden flex items-center gap-2 pl-2 pr-1">
          <span className="text-xs font-medium text-text-primary">Abdeldjalil</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Desktop Divider */}
        <div className="hidden md:block w-px h-5 bg-stroke mx-2" />

        {/* Desktop Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link);
              }}
              className={cn(
                "text-xs sm:text-sm rounded-full px-3.5 py-2 transition-colors min-h-[36px] flex items-center",
                active === link 
                  ? "text-text-primary bg-stroke/60 font-medium" 
                  : "text-muted hover:text-text-primary hover:bg-stroke/40"
              )}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Divider */}
        <div className="hidden md:block w-px h-5 bg-stroke mx-1.5" />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="relative w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-text-primary hover:bg-stroke/40 transition-colors cursor-pointer shrink-0 ml-1 md:ml-0"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45 text-[#89AACC]" />
          ) : (
            <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12 text-[#3B72AC]" />
          )}
        </button>

        {/* Desktop Divider */}
        <div className="hidden md:block w-px h-5 bg-stroke mx-1.5" />

        {/* Desktop Say Hi Button */}
        <button 
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
          className="hidden md:inline-flex group relative ml-1 text-xs sm:text-sm rounded-full items-center cursor-pointer"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative px-4 py-2 bg-surface backdrop-blur-md rounded-full flex items-center gap-1.5 text-text-primary transition-colors min-h-[36px]">
            Say hi <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </button>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden relative w-9 h-9 rounded-full flex items-center justify-center text-text-primary hover:bg-stroke/50 transition-colors ml-1 cursor-pointer shrink-0"
        >
          {mobileMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto md:hidden w-full max-w-[340px] mt-2 p-3 rounded-3xl bg-surface/95 backdrop-blur-xl border border-stroke dark:border-white/10 shadow-2xl flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors min-h-[44px]",
                  active === link
                    ? "bg-stroke/60 text-text-primary"
                    : "text-muted hover:text-text-primary hover:bg-stroke/30"
                )}
              >
                <span>{link}</span>
                {active === link && (
                  <span className="w-2 h-2 rounded-full bg-[#89AACC]" />
                )}
              </button>
            ))}

            <div className="w-full h-px bg-stroke/60 my-1.5" />

            {/* Mobile "Say hi" CTA inside menu */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-contact-modal'));
              }}
              className="w-full relative rounded-2xl overflow-hidden min-h-[44px] flex items-center justify-center p-[1px] group cursor-pointer"
            >
              <div className="absolute inset-0 accent-gradient" />
              <div className="relative w-full h-full py-2.5 bg-surface rounded-[15px] flex items-center justify-center gap-2 text-sm font-medium text-text-primary">
                Say hi <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
