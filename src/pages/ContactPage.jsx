import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budgetRange: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  return (
    <div className="relative pb-20 text-black/90 bg-[#F7F7F5] min-h-screen">
      {/* ========================================================
          HERO: Full-Bleed Architectural Contact Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818] mb-12 sm:mb-16">
        <img
          src="/images/projects/executive-office-workspace.png"
          alt="BNS Development Executive Workspace & Consultation"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-300 tracking-wider uppercase">
                  Contact BNS Development • Florida &amp; Texas
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
                Have a Project in Mind?<br />
                <span className="text-[#C41E1E]">Let's Talk.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-200 font-sans leading-relaxed max-w-3xl pt-1">
                Connect with BNS Development to explore your project, understand your needs, and identify the right path from planning to completion.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            SPLIT LAYOUT: Direct Contacts & Brief Form
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Direct Contacts, Offices & Commitments */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FCFCFB] border border-[#E6E6E3] shadow-sm space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#C41E1E] font-semibold font-sans block">
                  Direct Communications
                </span>
                <h3 className="text-2xl font-display font-semibold text-black/85">
                  Executive Project Inquiries
                </h3>
                <p className="text-sm text-black/60 font-sans leading-relaxed">
                  Our principals review every development inquiry directly, providing quick constructability and procurement insight.
                </p>
              </div>

              {/* Contact Rows */}
              <div className="space-y-4 pt-2">
                <a
                  href="tel:7863683009"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F2F2EF] hover:bg-[#ECECE9] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FCFCFB] flex items-center justify-center text-[#C41E1E] shadow-sm shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-black/50 block">Direct Phone</span>
                    <span className="text-sm font-semibold text-black/85 group-hover:text-[#C41E1E] transition-colors">
                      (786) 368-3009
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:contact@bns-development.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F2F2EF] hover:bg-[#ECECE9] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FCFCFB] flex items-center justify-center text-[#C41E1E] shadow-sm shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-black/50 block">Business Inquiries</span>
                    <span className="text-sm font-semibold text-black/85 group-hover:text-[#C41E1E] transition-colors truncate block">
                      contact@bns-development.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Office Locations */}
              <div className="space-y-4 pt-4 border-t border-[#E6E6E3]">
                <span className="text-xs uppercase tracking-wider text-black/45 font-semibold block">
                  Regional Operations
                </span>

                <div className="space-y-4 text-xs sm:text-sm font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C41E1E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-black/85 block">South Florida HQ</span>
                      <span className="text-black/60">Miami · Fort Lauderdale · Palm Beach</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C41E1E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-black/85 block">Central Texas Operations</span>
                      <span className="text-black/60">Austin · Dallas-Fort Worth Metro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Initiation Brief Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FCFCFB] border border-[#E6E6E3] shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#C41E1E]/10 border border-[#C41E1E] flex items-center justify-center mx-auto text-[#C41E1E]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold font-display text-black/85">
                    Inquiry Received
                  </h3>
                  <p className="text-sm sm:text-base text-black/60 max-w-md mx-auto font-sans leading-relaxed">
                    Thank you. Your project brief has been routed directly to Bradford Smith and Aravind Vangala. Our executive team will review your parameters and follow up within one business day.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-7 py-3 rounded-full bg-[#181818] hover:bg-[#C41E1E] text-white text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="pb-4 border-b border-[#E6E6E3]">
                    <span className="text-xs font-sans uppercase tracking-wider text-[#C41E1E] font-semibold block">
                      Project Initiation Brief
                    </span>
                    <h3 className="text-2xl font-display font-semibold text-black/85 mt-1">
                      Tell Us About Your Development
                    </h3>
                  </div>

                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-black/85 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E6E6E3] text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#C41E1E] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-black/85 block">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vance Capital Partners"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E6E6E3] text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#C41E1E] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-black/85 block">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E6E6E3] text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#C41E1E] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-black/85 block">
                        Direct Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E6E6E3] text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#C41E1E] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Project Type & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-black/85 block">
                        Development Sector / Type
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Multifamily, Commercial, Luxury Estate"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E6E6E3] text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#C41E1E] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-black/85 block">
                        Estimated Budget / Capital Range
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. $5M – $25M+"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E6E6E3] text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#C41E1E] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: Project Scope & Brief Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans font-semibold text-black/85 block">
                      Project Parameters &amp; Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please outline site location, gross square footage, zoning status, target groundbreaking date, or specific development scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E6E6E3] text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#C41E1E] transition-colors resize-none font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#181818] hover:bg-[#C41E1E] text-white text-sm font-sans font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>Submit Project Inquiry</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
