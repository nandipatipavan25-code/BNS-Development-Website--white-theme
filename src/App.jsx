import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import FocusLensNavbar from './components/FocusLensNavbar';
import Footer from './components/Footer';
import ArchitecturalBackground from './components/ArchitecturalBackground';

// Pages
import HomePage from './pages/HomePage';

export default function App() {
  // Ultra-Smooth Momentum Scrolling Engine (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  const [activePage] = useState('home');

  // Enforce Home page as the only active page
  const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.replaceState({ page: 'home' }, '', '#home');
    }
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const renderActivePage = () => {
    return <HomePage />;
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-black/85 flex flex-col font-sans selection:bg-[#C41E1E] selection:text-white">
      {/* Animated Responsive Architectural Background Elements */}
      <ArchitecturalBackground />

      {/* Focus Lens Architectural Header / Navbar */}
      <FocusLensNavbar
        activePage={activePage}
        setActivePage={handlePageChange}
      />

      {/* Main Content View with Page Transition */}
      <main className="relative z-10 flex-grow pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>


      {/* Architectural Light/Dark Contrast Footer */}
      <Footer setActivePage={handlePageChange} />
    </div>
  );
}
