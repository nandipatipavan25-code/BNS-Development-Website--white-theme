import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export default function ServiceBreadcrumb({ currentTitle, setActivePage }) {
  const handleNav = (page) => {
    if (setActivePage) {
      setActivePage(page);
    } else {
      window.location.hash = `#${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full mb-8 sm:mb-12">
      <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 px-6 rounded-2xl bg-white border border-[#E8E5E0] shadow-sm">
        {/* Breadcrumbs trail */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs text-black/50">
          <button
            onClick={() => handleNav('home')}
            className="hover:text-black/85 transition-colors cursor-pointer font-medium"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-black/50 shrink-0" />
          <button
            onClick={() => handleNav('services')}
            className="hover:text-black/85 transition-colors cursor-pointer font-medium"
          >
            Services
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-black/50 shrink-0" />
          <span className="text-[#C41E1E] font-semibold truncate max-w-[200px] sm:max-w-none">
            {currentTitle}
          </span>
        </nav>

        {/* Back button */}
        <button
          onClick={() => handleNav('services')}
          className="inline-flex items-center gap-2 text-xs font-sans text-black/50 hover:text-black/85 transition-colors group cursor-pointer font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#C41E1E] transition-transform group-hover:-translate-x-1" />
          <span>Back to Services</span>
        </button>
      </div>
    </div>
  );
}
