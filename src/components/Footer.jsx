import React from 'react';
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer({ setActivePage = () => {} }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'careers', label: 'Careers' },
    { id: 'subcontractors', label: 'Subcontractors' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const serviceLinks = [
    { id: 'preconstruction', num: '01', label: 'Pre-Development Services' },
    { id: 'design-build', num: '02', label: 'Design-Build Delivery' },
    { id: 'residential', num: '03', label: 'Residential Development' },
    { id: 'tenant-improvements', num: '04', label: 'Tenant Improvements' },
    { id: 'ground-up', num: '05', label: 'Ground-Up Construction' },
  ];

  return (
    <footer className="relative bg-[#090A0C] text-white pt-20 sm:pt-28 pb-12 border-t border-white/[0.08] overflow-hidden z-20">
      {/* Background Architectural Building Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/about-hero.jpg"
          alt="BNS Architectural Building Landmark"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/cta-building-red-black.jpg';
          }}
          className="w-full h-full object-cover object-center brightness-[0.24] contrast-[1.15] scale-105"
          loading="lazy"
        />
        {/* Deep Architectural Atmosphere Gradients for Perfect Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/85 to-[#090A0C]/90" />
        <div className="absolute inset-0 bg-[#090A0C]/40" />
      </div>

      {/* Subtle Ambient Red Glow */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#ED1C24]/[0.025] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Architectural Dot Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header: Brand Identity + Fast Contact Bar */}
        <div className="pb-14 border-b border-white/[0.08] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-block select-none cursor-pointer" onClick={scrollToTop}>
              <img
                src="/logos/bns-logo-white.svg"
                alt="BNS Development"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/logos/BNS LOGO-01.svg';
                }}
                className="h-10 sm:h-12 w-auto object-contain brightness-105"
              />
            </div>
            <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
              Experienced leadership from planning through completion. Delivering thoughtful development solutions backed by collaboration and accountability.
            </p>
          </div>

          {/* Direct Studio Channels */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="tel:7863683009"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm font-sans text-neutral-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ED1C24]" />
              <span>(786) 368-3009</span>
            </a>
            <a
              href="mailto:contact@bns-development.com"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm font-sans text-neutral-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#ED1C24]" />
              <span>contact@bns-development.com</span>
            </a>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="py-14 border-b border-white/[0.08] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ED1C24] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
              <span>Expertise &amp; Sectors</span>
            </div>
            <ul className="space-y-3 pt-1">
              {serviceLinks.map((item) => (
                <li key={item.num}>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      if (setActivePage && item.id) {
                        setActivePage(item.id);
                      }
                    }}
                    className="flex items-baseline gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer group select-none"
                  >
                    <span className="font-mono text-xs text-neutral-600 group-hover:text-[#ED1C24] transition-colors">
                      {item.num}
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ED1C24] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
              <span>Explore</span>
            </div>
            <ul className="space-y-2.5 pt-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      if (setActivePage && link.id) setActivePage(link.id);
                    }}
                    className="inline-block text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer select-none"
                  >
                    {link.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Column */}
          <div className="md:col-span-2 lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ED1C24] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
              <span>Office</span>
            </div>
            
            {/* Office Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-1">
              {[
                {
                  title: 'South Florida',
                  desc: 'Miami · Fort Lauderdale · Palm Beach',
                },
                {
                  title: 'Central Texas',
                  desc: 'Austin · Dallas–Fort Worth Metro',
                },
                {
                  title: 'BNS Development Headquarters',
                  desc: 'Miami · Brickell · Downtown',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex items-center gap-3 sm:gap-3.5 h-full min-h-[76px] sm:min-h-[80px] transition-all duration-300 hover:border-white/15"
                >
                  <MapPin className="w-5 h-5 text-[#ED1C24] shrink-0" />
                  <div className="min-w-0">
                    <h4 className="text-white font-medium text-sm sm:text-[15px] leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-neutral-400 font-sans leading-normal pt-0.5">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

              {/* Social Icons */}
              <div className="pt-2 space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium block">
                  Connect
                </span>
                <div className="flex items-center gap-2.5">
                  {[
                    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
                    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' }
                  ].map((s) => (
                    <div
                      key={s.name}
                      aria-label={s.name}
                      onClick={(e) => e.preventDefault()}
                      className="w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.04] hover:bg-[#ED1C24] border border-white/10 hover:border-[#ED1C24] text-neutral-300 hover:text-white transition-all duration-300 cursor-pointer select-none"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

        </div>

        {/* Massive Subtle Architectural Watermark */}
        <div className="pt-10 pb-6 overflow-hidden pointer-events-none select-none">
          <p className="font-display font-bold text-center text-[12vw] sm:text-[14vw] md:text-[15vw] leading-none tracking-tight text-white/[0.03] uppercase whitespace-nowrap">
            BNS
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-center sm:text-left select-none">
            <span>© {new Date().getFullYear()} BNS Development LLC. All rights reserved.</span>
            <span
              className="hover:text-neutral-300 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (setActivePage) setActivePage('privacy-policy');
              }}
            >
              Privacy Policy
            </span>
            <span>·</span>
            <span
              className="hover:text-neutral-300 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (setActivePage) setActivePage('terms-conditions');
              }}
            >
              Terms &amp; Conditions
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-[#ED1C24] border border-white/10 hover:border-[#ED1C24] text-neutral-300 hover:text-white transition-all duration-300 cursor-pointer shadow-sm focus:outline-none"
            aria-label="Back to top"
          >
            <span className="text-xs font-medium">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
