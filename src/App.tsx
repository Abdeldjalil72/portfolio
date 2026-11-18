import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { SelectedWorks } from './components/SelectedWorks';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

const INTRO_SESSION_KEY = 'portfolio_intro_seen';

function shouldShowInitialIntro(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return sessionStorage.getItem(INTRO_SESSION_KEY) !== '1';
  } catch {
    return false;
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(shouldShowInitialIntro);

  const handleIntroComplete = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, '1');
    } catch {
      // ignore storage restrictions
    }
    setIsLoading(false);
  }, []);

  // Smooth scroll logic for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <main className="min-h-screen bg-bg text-text-primary overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <SelectedWorks />
        <Stats />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
