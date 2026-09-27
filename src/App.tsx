import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll logic for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        
        {!isLoading && (
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
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
