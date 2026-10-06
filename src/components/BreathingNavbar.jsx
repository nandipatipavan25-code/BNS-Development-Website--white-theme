import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown, Phone, Mail } from 'lucide-react';

export default function BreathingNavbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'work', label: 'Work' },
    { id: 'careers', label: 'Careers' },
    { id: 'subcontractors', label: 'Subcontractors' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const serviceSubItems = [
    { id: 'services', label: 'Overview — All Services' },
    { id: 'predevelopment', label: 'Pre-Development Services' },
    { id: 'design-build', label: 'Design-Build Delivery' },
    { id: 'residential', label: 'Residential Development' },
    { id: 'tenant-improvements', label: 'Tenant Improvements' },
    { id: 'ground-up', label: 'Ground-Up Development' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServiceActive = [
    'services',
    'design-build',
    'predevelopment',
    'preconstruction',
    'residential',
    'tenant-improvements',
    'ground-up'
  ].includes(activePage);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#F7F7F5]/90 backdrop-blur-xl border-b border-[#E6E6E3] shadow-[0_4px_20px_-4px_rgba(24,24,24,0.04)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 focus:outline-none cursor-pointer group py-1"
              aria-label="BNS Development Home"
            >
              <div className="relative flex items-center">
                <img
                  src="/logos/bns-logo-black.svg"
                  alt="BNS Development"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/logos/logo-01.svg';
                  }}
                  className={`transition-all duration-300 w-auto object-contain ${
                    isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-11'
                  }`}
                />
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <div className="flex items-center px-3 py-1.5 rounded-full bg-[#FCFCFB]/85 border border-[#E6E6E3] shadow-sm backdrop-blur-md">
                {navItems.map((item) => {
                  const isItemActive =
                    item.id === 'services'
                      ? isServiceActive
                      : item.id === 'about'
                      ? activePage.startsWith('about')
                      : activePage === item.id;

                  if (item.hasDropdown) {
                    return (
                      <div
                        key={item.id}
                        className="relative"
                        onMouseEnter={() => setServicesMenuOpen(true)}
                        onMouseLeave={() => setServicesMenuOpen(false)}
                      >
                        <button
                          onClick={() => handleNavClick('services')}
                          className={`relative px-3.5 py-1.5 text-[14px] font-sans font-medium transition-all duration-200 rounded-full flex items-center gap-1 cursor-pointer ${
                            isItemActive
                              ? 'text-[#C41E1E] font-semibold'
                              : 'text-[#3D3D3D] hover:text-[#181818] hover:bg-[#F2F2EF]'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesMenuOpen ? 'rotate-180 text-[#C41E1E]' : 'opacity-60'}`} />
                          {isItemActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C41E1E] ml-0.5" />
                          )}
                        </button>

                        <AnimatePresence>
                          {servicesMenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.18, ease: 'easeOut' }}
                              className="absolute top-full left-0 mt-2 w-64 p-2 rounded-2xl bg-[#FCFCFB] border border-[#E6E6E3] shadow-xl space-y-0.5 z-50 text-left font-sans"
                            >
                              {serviceSubItems.map((sub) => (
                                <button
                                  key={sub.id}
                                  onClick={() => handleNavClick(sub.id)}
                                  className={`w-full text-left px-3.5 py-2 rounded-xl text-[13px] font-sans transition-colors flex items-center justify-between cursor-pointer ${
                                    activePage === sub.id
                                      ? 'bg-[#F2F2EF] text-[#C41E1E] font-semibold'
                                      : 'text-[#3D3D3D] hover:text-[#181818] hover:bg-[#F7F7F5]'
                                  }`}
                                >
                                  <span>{sub.label}</span>
                                  {activePage === sub.id ? (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C41E1E]" />
                                  ) : (
                                    <ArrowUpRight className="w-3.5 h-3.5 text-[#737373] opacity-0 group-hover:opacity-100" />
                                  )}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-3.5 py-1.5 text-[14px] font-sans font-medium transition-all duration-200 rounded-full cursor-pointer flex items-center gap-1.5 ${
                        isItemActive
                          ? 'text-[#C41E1E] font-semibold bg-[#F2F2EF]'
                          : 'text-[#3D3D3D] hover:text-[#181818] hover:bg-[#F2F2EF]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isItemActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C41E1E]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#FCFCFB] border border-[#E6E6E3] text-[#181818] hover:text-[#C41E1E] transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/40 backdrop-blur-sm flex flex-col justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="bg-[#F7F7F5] rounded-t-3xl border-t border-[#E6E6E3] p-6 max-h-[85vh] overflow-y-auto shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E6E3]">
                <img
                  src="/logos/bns-logo-black.svg"
                  alt="BNS Development"
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-[#FCFCFB] border border-[#E6E6E3] text-[#3D3D3D] hover:text-[#181818]"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1 font-sans">
                {navItems.map((item) => {
                  const isItemActive =
                    item.id === 'services'
                      ? isServiceActive
                      : item.id === 'about'
                      ? activePage.startsWith('about')
                      : activePage === item.id;

                  return (
                    <div key={item.id} className="space-y-1">
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-2xl text-[16px] font-sans font-medium transition-colors flex items-center justify-between ${
                          isItemActive
                            ? 'bg-[#F2F2EF] text-[#C41E1E] font-semibold'
                            : 'text-[#181818] hover:bg-[#F2F2EF]'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isItemActive && (
                          <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                        )}
                      </button>

                      {/* Service Submenu on Mobile */}
                      {item.id === 'services' && (
                        <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-[#E6E6E3] ml-4">
                          {serviceSubItems.slice(1).map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => handleNavClick(sub.id)}
                              className={`w-full text-left px-3 py-2 rounded-xl text-[13px] font-sans transition-colors ${
                                activePage === sub.id
                                  ? 'text-[#C41E1E] font-semibold'
                                  : 'text-[#52525B] hover:text-[#181818]'
                              }`}
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quick Contact Footer in Drawer */}
              <div className="pt-4 border-t border-[#E6E6E3] space-y-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3.5 rounded-full bg-[#181818] text-white text-[14px] font-sans font-medium text-center block shadow-md hover:bg-[#C41E1E] transition-colors"
                >
                  Start a Project Inquiry
                </button>

                <div className="flex items-center justify-between text-xs text-[#737373] px-2 pt-2">
                  <a href="tel:7863683009" className="flex items-center gap-1.5 hover:text-[#C41E1E]">
                    <Phone className="w-3.5 h-3.5 text-[#C41E1E]" />
                    <span>(786) 368-3009</span>
                  </a>
                  <a href="mailto:contact@bns-development.com" className="flex items-center gap-1.5 hover:text-[#C41E1E]">
                    <Mail className="w-3.5 h-3.5 text-[#C41E1E]" />
                    <span>contact@bns-development.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
