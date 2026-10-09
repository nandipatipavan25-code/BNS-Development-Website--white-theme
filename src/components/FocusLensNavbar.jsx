import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion';
import { X, ChevronDown, Compass, Layers, Home, Building2, HardHat, ArrowRight } from 'lucide-react';

const SPRING_TRANSITION = {
  type: 'spring',
  stiffness: 420,
  damping: 38,
  mass: 0.7,
};

/**
 * FocusLensViewfinder Corner Brackets Indicator
 * Glides smoothly to frame the hovered navigation item
 */
function FocusLensBrackets({ target, color = '#ED1C24' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const w = useMotionValue(0);
  const h = useMotionValue(0);
  const opacity = useMotionValue(0);
  const scale = useMotionValue(1);
  const shown = useRef(false);

  const padX = 7;
  const padY = 5;

  useEffect(() => {
    if (!target) {
      animate(opacity, 0, { duration: 0.2, ease: 'easeOut' });
      shown.current = false;
      return;
    }

    const tx = target.x - padX;
    const ty = target.y - padY;
    const tw = target.w + padX * 2;
    const th = target.h + padY * 2;

    if (!shown.current) {
      x.jump(tx);
      y.jump(ty);
      w.jump(tw);
      h.jump(th);
      animate(opacity, 1, { duration: 0.18, ease: 'easeOut' });
      scale.jump(1.15);
      animate(scale, 1, { type: 'spring', stiffness: 480, damping: 32 });
    } else {
      animate(x, tx, SPRING_TRANSITION);
      animate(y, ty, SPRING_TRANSITION);
      animate(w, tw, SPRING_TRANSITION);
      animate(h, th, SPRING_TRANSITION);
    }
    shown.current = true;
  }, [target]);

  const arm = 6;
  const stroke = 1.5;

  return (
    <motion.span
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        x,
        y,
        width: w,
        height: h,
        opacity,
        scale,
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      {/* Top-Left Bracket */}
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: arm,
          height: arm,
          borderLeft: `${stroke}px solid ${color}`,
          borderTop: `${stroke}px solid ${color}`,
          borderTopLeftRadius: 3,
        }}
      />
      {/* Top-Right Bracket */}
      <span
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: arm,
          height: arm,
          borderRight: `${stroke}px solid ${color}`,
          borderTop: `${stroke}px solid ${color}`,
          borderTopRightRadius: 3,
        }}
      />
      {/* Bottom-Left Bracket */}
      <span
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: arm,
          height: arm,
          borderLeft: `${stroke}px solid ${color}`,
          borderBottom: `${stroke}px solid ${color}`,
          borderBottomLeftRadius: 3,
        }}
      />
      {/* Bottom-Right Bracket */}
      <span
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: arm,
          height: arm,
          borderRight: `${stroke}px solid ${color}`,
          borderBottom: `${stroke}px solid ${color}`,
          borderBottomRightRadius: 3,
        }}
      />
    </motion.span>
  );
}

export default function FocusLensNavbar({ activePage = 'home', setActivePage = () => {} }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  // Focus Lens Hover & Target state
  const [hoveredId, setHoveredId] = useState(null);
  const [lensTarget, setLensTarget] = useState(null);
  const navContainerRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update lens target coordinates on hover change
  useEffect(() => {
    if (!hoveredId || !itemRefs.current[hoveredId] || !navContainerRef.current) {
      setLensTarget(null);
      return;
    }
    const containerRect = navContainerRef.current.getBoundingClientRect();
    const itemEl = itemRefs.current[hoveredId];
    const itemRect = itemEl.getBoundingClientRect();

    setLensTarget({
      x: itemRect.left - containerRect.left,
      y: itemRect.top - containerRect.top,
      w: itemRect.width,
      h: itemRect.height,
    });
  }, [hoveredId]);

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
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'careers', label: 'Careers' },
    { id: 'subcontractors', label: 'Subcontractors' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const serviceDropdownItems = [
    { id: 'services', label: 'All Services Overview', icon: Compass, desc: 'Complete building disciplines' },
    { id: 'preconstruction', label: 'Pre-Development Services', icon: Compass, desc: 'Feasibility, planning & scope' },
    { id: 'design-build', label: 'Design-Build Delivery', icon: Layers, desc: 'Unified design & construction' },
    { id: 'residential', label: 'Residential Development', icon: Home, desc: 'Custom homes & multi-unit' },
    { id: 'tenant-improvements', label: 'Tenant Improvements', icon: Building2, desc: 'Commercial interior fit-outs' },
    { id: 'ground-up', label: 'Ground-Up Development', icon: HardHat, desc: 'New build superstructures' },
  ];

  const isServiceSubActive = ['preconstruction', 'design-build', 'residential', 'tenant-improvements', 'ground-up', 'services'].includes(activePage);

  const isLightPage = activePage === 'contact' || activePage === 'career-detail' || activePage === 'work-detail';
  const isLightHeader = isScrolled || isLightPage;

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setHoveredId('services');
    setServicesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
      setHoveredId(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#F7F7F5]/90 backdrop-blur-xl border-b border-[#E6E6E3] shadow-[0_8px_30px_-8px_rgba(24,24,24,0.06)]'
            : isLightPage
            ? 'py-5 bg-[#FAFAF8]/80 backdrop-blur-md border-b border-black/[0.06]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div
              className="flex items-center gap-3 py-1 cursor-pointer select-none"
              onClick={(e) => {
                e.preventDefault();
                if (setActivePage) setActivePage('home');
              }}
              aria-label="BNS Development"
            >
              <div className="relative flex items-center">
                <img
                  src={isLightHeader ? '/logos/bns-logo-black.svg' : '/logos/bns-logo-white.svg'}
                  alt="BNS Development"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/logos/BNS LOGO-01.svg';
                  }}
                  className={`transition-all duration-300 w-auto object-contain ${
                    isScrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-9'
                  }`}
                />
              </div>
            </div>

            {/* Desktop Navigation with Interactive Focus Lens Hover & Dropdown */}
            <nav className="hidden lg:flex items-center">
              <div
                ref={navContainerRef}
                onMouseLeave={() => {
                  setHoveredId(null);
                  setLensTarget(null);
                }}
                className="relative flex items-center gap-1 xl:gap-2"
              >
                {/* Focus Lens Viewfinder Brackets Glider */}
                <FocusLensBrackets
                  target={lensTarget}
                  color="#ED1C24"
                />

                {navItems.map((item) => {
                  const isItemActive = item.id === 'services' ? isServiceSubActive : item.id === (activePage || 'home');
                  const isHovered = hoveredId === item.id;
                  const isDimmed = hoveredId !== null && !isHovered;

                  const linkMotionState = {
                    opacity: isHovered ? 1 : isDimmed ? 0.35 : isItemActive ? 1 : 0.85,
                    filter: isDimmed ? 'blur(1.5px)' : 'blur(0px)',
                    scale: isDimmed ? 0.96 : 1,
                  };

                  const textColor = isItemActive
                    ? 'text-[#ED1C24] font-semibold'
                    : isLightHeader
                    ? 'text-[#2D2D2D] hover:text-[#181818]'
                    : 'text-white/90 hover:text-white';

                  // Services Dropdown Menu Item
                  if (item.id === 'services') {
                    return (
                      <div
                        key={item.id}
                        className="relative"
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <button
                          type="button"
                          ref={(el) => (itemRefs.current[item.id] = el)}
                          onClick={(e) => {
                            e.preventDefault();
                            if (setActivePage) setActivePage('services');
                            setServicesDropdownOpen(false);
                          }}
                          className="relative px-3.5 py-1.5 text-[15px] font-sans font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1 focus:outline-none border-0 bg-transparent select-none"
                        >
                          <motion.span
                            animate={linkMotionState}
                            transition={SPRING_TRANSITION}
                            className={`flex items-center gap-1.5 transition-colors duration-300 ${textColor}`}
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-250 ${
                                servicesDropdownOpen ? 'rotate-180 text-[#ED1C24]' : ''
                              }`}
                            />
                          </motion.span>
                        </button>

                        {/* Services Dropdown Menu Overlay */}
                        <AnimatePresence>
                          {servicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.96 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 6, scale: 0.96 }}
                              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white border border-black/[0.08] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] p-2 z-50 text-black/90 font-sans"
                            >
                              <div className="space-y-1">
                                {serviceDropdownItems.map((sItem) => {
                                  const SIcon = sItem.icon;
                                  const isSubActive = activePage === sItem.id;
                                  return (
                                    <button
                                      key={sItem.id}
                                      type="button"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        if (setActivePage) setActivePage(sItem.id);
                                        setServicesDropdownOpen(false);
                                      }}
                                      className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 flex items-start gap-3 group cursor-pointer ${
                                        isSubActive
                                          ? 'bg-[#FAFAF8] text-[#ED1C24]'
                                          : 'hover:bg-[#FAFAF8] text-black/85 hover:text-black'
                                      }`}
                                    >
                                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 ${
                                        isSubActive
                                          ? 'bg-[#ED1C24] border-[#ED1C24] text-white'
                                          : 'bg-[#ED1C24]/[0.06] border-[#ED1C24]/20 text-[#ED1C24] group-hover:bg-[#ED1C24] group-hover:border-[#ED1C24] group-hover:text-white'
                                      }`}>
                                        <SIcon className="w-4 h-4" />
                                      </div>
                                      <div className="space-y-0.5 min-w-0 flex-1">
                                        <div className="flex items-center justify-between">
                                          <span className={`text-xs font-semibold font-display tracking-tight transition-colors ${
                                            isSubActive ? 'text-[#ED1C24]' : 'group-hover:text-[#ED1C24]'
                                          }`}>
                                            {sItem.label}
                                          </span>
                                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#ED1C24] transition-opacity" />
                                        </div>
                                        <p className="text-[11px] text-black/50 font-sans truncate">
                                          {sItem.desc}
                                        </p>
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  // Standard Nav Button
                  return (
                    <button
                      key={item.id}
                      type="button"
                      ref={(el) => (itemRefs.current[item.id] = el)}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onClick={(e) => {
                        e.preventDefault();
                        if (setActivePage) setActivePage(item.id);
                      }}
                      className="relative px-3.5 py-1.5 text-[15px] font-sans font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5 focus:outline-none border-0 bg-transparent select-none"
                    >
                      <motion.span
                        animate={linkMotionState}
                        transition={SPRING_TRANSITION}
                        className={`flex items-center gap-1.5 transition-colors duration-300 ${textColor}`}
                      >
                        <span>{item.label}</span>
                      </motion.span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Hamburger Button with Dual-Line Animation */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-2xl border transition-all duration-300 focus:outline-none cursor-pointer flex items-center gap-2 shadow-sm ${
                isLightHeader
                  ? 'bg-[#FCFCFB] border-[#E6E6E3] text-black/85'
                  : 'bg-white/10 border-white/20 text-white backdrop-blur-md'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="text-[11px] font-mono font-medium tracking-wider uppercase pl-1">
                {mobileMenuOpen ? 'Close' : 'Menu'}
              </span>
              <div className="relative w-5 h-4 flex flex-col justify-between items-center">
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 7 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`w-4 h-[2px] rounded-full block ${isLightHeader ? 'bg-[#181818]' : 'bg-white'}`}
                />
                <motion.span
                  animate={{
                    opacity: mobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.15 }}
                  className={`w-4 h-[2px] rounded-full block ${isLightHeader ? 'bg-[#181818]' : 'bg-white'}`}
                />
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -7 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`w-4 h-[2px] rounded-full block ${isLightHeader ? 'bg-[#181818]' : 'bg-white'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Services Sub-Accordion */}
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
              className="bg-[#F7F7F5] text-black/85 rounded-t-3xl border-t border-[#E6E6E3] p-6 max-h-[85vh] overflow-y-auto shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E6E3]">
                <img
                  src="/logos/bns-logo-black.svg"
                  alt="BNS Development"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/logos/logo-01.svg';
                  }}
                  className="h-8 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-[#FCFCFB] border border-[#E6E6E3] text-black/60 hover:text-black/85 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-1 font-sans">
                {navItems.map((item) => {
                  const isItemActive = item.id === 'services' ? isServiceSubActive : item.id === (activePage || 'home');

                  if (item.id === 'services') {
                    return (
                      <div key={item.id} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`w-full text-left px-4 py-3 rounded-xl text-[15px] font-sans font-medium flex items-center justify-between cursor-pointer transition-colors ${
                            isItemActive
                              ? 'bg-[#F2F2EF] text-[#ED1C24] font-semibold'
                              : 'text-black/60 hover:text-black/90 hover:bg-[#F2F2EF]'
                          }`}
                        >
                          <span>Services</span>
                          <div className="flex items-center gap-2">
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#ED1C24]' : ''}`} />
                          </div>
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-3 space-y-1 border-l-2 border-[#ED1C24]/30 my-1"
                            >
                              {serviceDropdownItems.map((sItem) => {
                                const isSubActive = activePage === sItem.id;
                                return (
                                  <button
                                    key={sItem.id}
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (setActivePage) setActivePage(sItem.id);
                                      setMobileMenuOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-sans font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                      isSubActive
                                        ? 'bg-[#ED1C24]/10 text-[#ED1C24] font-semibold'
                                        : 'text-black/70 hover:text-black hover:bg-[#F2F2EF]'
                                    }`}
                                  >
                                    <span>{sItem.label}</span>
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (setActivePage) setActivePage(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-[15px] font-sans font-medium flex items-center justify-between cursor-pointer transition-colors ${
                        isItemActive
                          ? 'bg-[#F2F2EF] text-[#ED1C24] font-semibold'
                          : 'text-black/60 hover:text-black/90 hover:bg-[#F2F2EF]'
                      }`}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Footer Status */}
              <div className="pt-4 border-t border-[#E6E6E3] text-xs font-mono text-black/40 text-center uppercase tracking-wider">
                BNS Development · Florida &amp; Texas
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
