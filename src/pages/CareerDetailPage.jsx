import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft, MapPin, CheckCircle2, Briefcase, Clock, Award,
  Building2, Users, Check, Share2, ArrowRight, ShieldCheck,
  TrendingUp, Send, DollarSign, ArrowUpRight
} from 'lucide-react';
import { jobsData } from '../data/jobs';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

export default function CareerDetailPage({
  job,
  setActivePage,
  setSelectedJob
}) {
  const getJob = () => {
    if (job) return job;
    if (typeof window !== 'undefined') {
      const searchStr = window.location.search || (window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');
      const params = new URLSearchParams(searchStr);
      const id = params.get('id');
      if (id) {
        const found = jobsData.find((j) => j.id === id);
        if (found) return found;
      }
    }
    return jobsData[0];
  };

  const activeJob = getJob();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    yearsExp: '',
    coverNote: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        portfolio: '',
        yearsExp: '',
        coverNote: '',
      });
    }, 3500);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const relatedJobs = jobsData.filter((j) => j.id !== activeJob.id).slice(0, 3);

  return (
    <div className="relative pb-24 text-black/90 bg-[#FAFAF8] min-h-screen">
      {/* ========================================================
          1. HERO: Full-Bleed Architectural Career Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[420px] sm:min-h-[480px] flex flex-col justify-end pt-32 sm:pt-40 pb-14 sm:pb-18 border-b border-[#E6E6E3] bg-[#181818] mb-12 sm:mb-16">
        <img
          src="/images/careers-hero.jpg"
          alt={activeJob.title}
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          {/* Breadcrumb Navigation & Share Button */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                setActivePage('careers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-sans font-medium text-white transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span>Back to Open Positions</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-xs font-sans text-white transition-colors shadow-sm cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#C41E1E]" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share Role'}</span>
            </button>
          </div>

          <div className="space-y-4 max-w-4xl text-white">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
              <span className="px-3 py-1 rounded-full bg-[#C41E1E] text-white font-semibold text-xs">
                {activeJob.department}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white">
                <MapPin className="w-3.5 h-3.5 text-[#C41E1E]" />
                {activeJob.location}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white">
                <Clock className="w-3.5 h-3.5 text-neutral-300" />
                {activeJob.type}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white">
                {activeJob.experience}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-display font-semibold text-white tracking-tight leading-tight">
              {activeJob.title}
            </h1>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
              <span>Compensation: {activeJob.salary}</span>
              <span className="text-neutral-500">•</span>
              <span>Florida &amp; Texas Regional Operations</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ========================================================
            2. SPLIT SPECIFICATIONS & DIRECT APPLICATION
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Role Specifications */}
          <div className="lg:col-span-7 space-y-10">
            {/* Position Overview */}
            <div className="p-7 rounded-2xl bg-white border border-[#E6E6E3] shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs uppercase tracking-wider text-black/45 font-semibold font-mono">
                  Role Overview
                </span>
              </div>
              <p className="text-sm sm:text-base text-black/60 font-sans leading-relaxed">
                {activeJob.description}
              </p>
            </div>

            {/* Key Responsibilities */}
            {activeJob.responsibilities && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#C41E1E]" />
                  <span className="text-xs uppercase tracking-wider text-black/45 font-semibold font-mono">
                    Key Responsibilities
                  </span>
                </div>
                <div className="space-y-3">
                  {activeJob.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E6E6E3] shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#C41E1E] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-black/85 font-sans leading-relaxed">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Qualifications & Requirements */}
            {activeJob.requirements && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#C41E1E]" />
                  <span className="text-xs uppercase tracking-wider text-black/45 font-semibold font-mono">
                    Qualifications &amp; Requirements
                  </span>
                </div>
                <div className="space-y-3">
                  {activeJob.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E6E6E3] shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-[#C41E1E] shrink-0 mt-1.5" />
                      <span className="text-xs sm:text-sm text-black/85 font-sans leading-relaxed">
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Compensation, Benefits & Growth */}
            <div className="p-7 rounded-2xl bg-white border border-[#E6E6E3] shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs uppercase tracking-wider text-black/45 font-semibold font-mono">
                  What BNS Development Offers
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] space-y-1">
                  <span className="text-xs font-semibold text-black/85 font-sans block">
                    Competitive Total Compensation
                  </span>
                  <p className="text-[11px] text-black/50 font-sans">
                    Market-leading base salaries with milestone and project performance bonuses.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] space-y-1">
                  <span className="text-xs font-semibold text-black/85 font-sans block">
                    Comprehensive Health &amp; Wellness
                  </span>
                  <p className="text-[11px] text-black/50 font-sans">
                    Premium medical, dental, and vision coverage for you and your family.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] space-y-1">
                  <span className="text-xs font-semibold text-black/85 font-sans block">
                    Executive Mentorship &amp; Growth
                  </span>
                  <p className="text-[11px] text-black/50 font-sans">
                    Direct access to Founders with clear pathways to Project Executive / Principal roles.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] space-y-1">
                  <span className="text-xs font-semibold text-black/85 font-sans block">
                    Project Vehicle &amp; Technology
                  </span>
                  <p className="text-[11px] text-black/50 font-sans">
                    Modern digital tools (Procore, Bluebeam) and vehicle allowances for field teams.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Application Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E6E6E3] shadow-xl space-y-5">
              <div className="pb-3 border-b border-[#E6E6E3]">
                <span className="text-[11px] uppercase tracking-wider text-[#C41E1E] font-semibold font-mono block">
                  Direct Application
                </span>
                <h3 className="text-xl font-display font-semibold text-black/85 mt-0.5">
                  Apply for this Role
                </h3>
                <p className="text-xs text-black/50 font-sans mt-1">
                  Submit your credentials directly to our executive hiring team.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#C41E1E]/10 text-[#C41E1E] border border-[#C41E1E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-semibold font-display text-black/85">
                    Application Received
                  </h4>
                  <p className="text-xs text-black/60 max-w-sm mx-auto font-sans leading-relaxed">
                    Thank you. Our executive team will review your qualifications and reach out directly within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/90 placeholder-black/40 text-xs focus:outline-none focus:border-[#C41E1E] transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/90 placeholder-black/40 text-xs focus:outline-none focus:border-[#C41E1E] transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(512) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/90 placeholder-black/40 text-xs focus:outline-none focus:border-[#C41E1E] transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.yearsExp}
                      onChange={(e) => setFormData({ ...formData, yearsExp: e.target.value })}
                      placeholder="e.g. 8+ Years"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/90 placeholder-black/40 text-xs focus:outline-none focus:border-[#C41E1E] transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                      LinkedIn / Portfolio URL
                    </label>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/90 placeholder-black/40 text-xs focus:outline-none focus:border-[#C41E1E] transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-black/85 mb-1">
                      Brief Note
                    </label>
                    <textarea
                      rows={2}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Share a brief summary of your recent building experience..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E6E6E3] text-black/90 placeholder-black/40 text-xs focus:outline-none focus:border-[#C41E1E] transition-colors resize-none font-sans"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#181818] hover:bg-[#C41E1E] text-white text-xs font-sans font-semibold tracking-wider transition-colors shadow-md cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================
            3. OTHER ACTIVE OPPORTUNITIES
            ======================================================== */}
        <section className="pt-8 border-t border-[#E6E6E3] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C41E1E] font-semibold">
                Explore More
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-black/90">
                Other Active Opportunities
              </h3>
            </div>
            <button
              type="button"
              onClick={() => {
                setActivePage('careers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#C41E1E] hover:underline"
            >
              <span>View All ({jobsData.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedJobs.map((rJob) => (
              <div
                key={rJob.id}
                onClick={() => {
                  if (setSelectedJob) setSelectedJob(rJob);
                  setActivePage('career-detail', `id=${rJob.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-5 rounded-2xl bg-white border border-[#E6E6E3] hover:border-[#C41E1E] shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#C41E1E] font-semibold uppercase">
                    {rJob.department}
                  </span>
                  <h4 className="text-base font-display font-semibold text-black/85 group-hover:text-[#C41E1E] transition-colors leading-snug">
                    {rJob.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-black/50 font-sans">
                    <MapPin className="w-3 h-3 text-[#C41E1E]" />
                    <span>{rJob.location}</span>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-[#F0F0EC] flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-black/85">
                    {rJob.salary.split('–')[0] || rJob.salary}
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs font-mono text-[#C41E1E] group-hover:translate-x-0.5 transition-transform">
                    <span>Specs</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
