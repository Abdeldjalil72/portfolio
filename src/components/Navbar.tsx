import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div className={cn(
        "pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-stroke dark:border-white/10 bg-surface/80 px-2 py-2 transition-shadow duration-300 shadow-sm",
        scrolled && "shadow-md shadow-black/10 dark:shadow-black/30"
      )}>
        {/* Profile Avatar / Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            setActive("Home");
            document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300"
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

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-2" />

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(link);
                const targetId = link.toLowerCase();
                const element = document.getElementById(targetId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={cn(
                "text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors",
                active === link 
                  ? "text-text-primary bg-stroke/50" 
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              )}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1.5" />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="relative w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-text-primary hover:bg-stroke/40 transition-colors cursor-pointer"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45 text-[#89AACC]" />
          ) : (
            <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12 text-[#3B72AC]" />
          )}
        </button>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1.5" />

        {/* Say Hi Button */}
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative ml-1 text-xs sm:text-sm rounded-full inline-flex items-center"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative px-3 sm:px-4 py-1.5 sm:py-2 bg-surface backdrop-blur-md rounded-full flex items-center gap-1.5 text-text-primary transition-colors">
            Say hi <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </nav>
  );
};
