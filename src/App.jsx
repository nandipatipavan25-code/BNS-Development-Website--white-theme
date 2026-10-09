import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import FocusLensNavbar from './components/FocusLensNavbar';
import Footer from './components/Footer';
import ArchitecturalBackground from './components/ArchitecturalBackground';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import WorkDetailPage from './pages/WorkDetailPage';
import CareersPage from './pages/CareersPage';
import CareerDetailPage from './pages/CareerDetailPage';
import SubcontractorsPage from './pages/SubcontractorsPage';
import ContactPage from './pages/ContactPage';
import PreconstructionPage from './pages/PreconstructionPage';
import DesignBuildPage from './pages/DesignBuildPage';
import ResidentialPage from './pages/ResidentialPage';
import TenantImprovementsPage from './pages/TenantImprovementsPage';
import GroundUpPage from './pages/GroundUpPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

export default function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const lenisRef = useRef(null);

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

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToTopImmediate = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  };

  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const h = window.location.hash.replace('#', '').split('?')[0];
      if (['home', 'about', 'services', 'work', 'work-detail', 'careers', 'career-detail', 'subcontractors', 'contact', 'preconstruction', 'design-build', 'residential', 'tenant-improvements', 'ground-up', 'privacy-policy', 'terms-conditions'].includes(h)) {
        return h;
      }
    }
    return 'home';
  });

  const handlePageChange = (targetPage, extraParam = '') => {
    const pageId = targetPage || 'home';
    setActivePage(pageId);
    scrollToTopImmediate();
    if (typeof window !== 'undefined') {
      const hashStr = extraParam ? `#${pageId}?${extraParam}` : `#${pageId}`;
      window.history.replaceState({ page: pageId }, '', hashStr);
    }
  };

  // Ensure scroll position is reset to top whenever activePage changes or page mounts
  useEffect(() => {
    scrollToTopImmediate();
    const timers = [
      setTimeout(scrollToTopImmediate, 50),
      setTimeout(scrollToTopImmediate, 150),
      setTimeout(scrollToTopImmediate, 250),
      setTimeout(scrollToTopImmediate, 400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [activePage]);

  useEffect(() => {
    const handleHash = () => {
      const fullHash = window.location.hash.replace('#', '');
      const hash = fullHash.split('?')[0];
      if (hash && ['home', 'about', 'services', 'work', 'work-detail', 'careers', 'career-detail', 'subcontractors', 'contact', 'preconstruction', 'design-build', 'residential', 'tenant-improvements', 'ground-up', 'privacy-policy', 'terms-conditions'].includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const renderActivePage = () => {
    if (activePage === 'about') {
      return <AboutPage setActivePage={handlePageChange} />;
    }
    if (activePage === 'services') {
      return <ServicesPage setActivePage={handlePageChange} />;
    }
    if (activePage === 'preconstruction') {
      return <PreconstructionPage setActivePage={handlePageChange} />;
    }
    if (activePage === 'design-build') {
      return <DesignBuildPage setActivePage={handlePageChange} />;
    }
    if (activePage === 'residential') {
      return <ResidentialPage setActivePage={handlePageChange} />;
    }
    if (activePage === 'tenant-improvements') {
      return <TenantImprovementsPage setActivePage={handlePageChange} />;
    }
    if (activePage === 'ground-up') {
      return <GroundUpPage setActivePage={handlePageChange} />;
    }
    if (activePage === 'work') {
      return <WorkPage setActivePage={handlePageChange} setSelectedProject={setSelectedProject} />;
    }
    if (activePage === 'work-detail') {
      return <WorkDetailPage project={selectedProject} setActivePage={handlePageChange} setSelectedProject={setSelectedProject} />;
    }
    if (activePage === 'careers') {
      return <CareersPage setActivePage={handlePageChange} setSelectedJob={setSelectedJob} />;
    }
    if (activePage === 'career-detail') {
      return <CareerDetailPage job={selectedJob} setActivePage={handlePageChange} setSelectedJob={setSelectedJob} />;
    }
    if (activePage === 'subcontractors') {
      return <SubcontractorsPage setActivePage={handlePageChange} />;
    }
    if (activePage === 'contact') {
      return <ContactPage setActivePage={handlePageChange} />;
    }
    if (activePage === 'privacy-policy') {
      return <PrivacyPolicyPage />;
    }
    if (activePage === 'terms-conditions') {
      return <TermsConditionsPage />;
    }
    return <HomePage setActivePage={handlePageChange} setSelectedProject={setSelectedProject} />;
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-black/85 flex flex-col font-sans selection:bg-[#C41E1E] selection:text-white">
      {/* Attached Inner Page Background Image (Applied to all pages except Home) */}
      {activePage !== 'home' && (
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/inner-page-bg.png')",
          }}
          aria-hidden="true"
        />
      )}

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
