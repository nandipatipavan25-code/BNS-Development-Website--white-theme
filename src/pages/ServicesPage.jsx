import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass, Layers, Home, Maximize, Building2, CheckCircle2,
  ArrowRight, ArrowUpRight, ShieldCheck, Clock, FileText,
  Search, SlidersHorizontal, CheckSquare, Sparkles, HardHat,
  Phone, Mail, MapPin, Eye, Award
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import HouseCTA from '../components/HouseCTA';
import OurExpertiseSection from '../components/OurExpertiseSection';
import AnimatedStepCards from '../components/AnimatedStepCards';
import { servicesData } from '../data/services';

export default function ServicesPage({ setActivePage, setSelectedService }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories for filter tabs
  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'predevelopment', label: 'Pre Development Services' },
    { id: 'design-build', label: 'Design-Build' },
    { id: 'residential', label: 'Residential' },
    { id: 'tenant-improvements', label: 'Commercial' },
    { id: 'ground-up', label: 'Ground Up' },
  ];

  // 5-step delivery standard (exact content preserved + matched photography)
  const deliveryLifecycle = [
    {
      step: '01',
      phase: 'Feasibility & Constructability',
      title: 'Constructability & Cost Modeling',
      desc: 'Initial site evaluation, zoning constraints, early parametric budget modeling, and identifying risk factors before capital commitments.',
      image: '/images/process/step-01-vision.jpg',
    },
    {
      step: '02',
      phase: 'Pre Development & GMP',
      title: 'GMP Formulation & Buyout Strategy',
      desc: 'Comprehensive trade scope packaging, Primavera P6 baseline scheduling, value engineering, and establishing a Guaranteed Maximum Price.',
      image: '/images/process/step-02-planning.jpg',
    },
    {
      step: '03',
      phase: 'Procurement & Permitting',
      title: 'Permitting & Trade Vetting',
      desc: 'Engaging pre-qualified trade partners, long-lead equipment buyout, municipal agency coordination, and expedited permit approvals.',
      image: '/images/process/step-03-coordination.jpg',
    },
    {
      step: '04',
      phase: 'Field Execution',
      title: 'Active Development & Safety Governance',
      desc: 'Mobilization, structural shell erection, daily QA/QC inspections, and zero-compromise OSHA-certified field safety leadership.',
      image: '/images/process/step-04-details.jpg',
    },
    {
      step: '05',
      phase: 'Commissioning & Handover',
      title: 'Commissioning & Turnkey Handover',
      desc: 'System testing, life-safety certification, punch list zeroing, Certificate of Occupancy issuance, and complete closeout documentation.',
      image: '/images/process/step-05-delivery.jpg',
    },
  ];

  // 3 Pillars of BNS delivery (exact content preserved)
  const deliveryPillars = [
    {
      title: 'Zero-Compromise Safety',
      desc: 'OSHA-30 certified superintendents on every jobsite with daily safety briefings and strict risk management protocols.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Guaranteed Pricing',
      desc: 'Open-book cost accounting and proactive value engineering that protects client capital from unexpected change orders.',
      icon: CheckSquare,
    },
    {
      title: 'Direct Senior Leadership',
      desc: 'Our principals stay personally involved in field coordination, resolving potential bottlenecks in hours rather than weeks.',
      icon: Award,
    },
  ];

  // Filtered services
  const filteredServices = useMemo(() => {
    return servicesData.filter((svc) => {
      const matchesCategory =
        selectedCategory === 'all' || svc.id === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        svc.title.toLowerCase().includes(query) ||
        svc.subtitle.toLowerCase().includes(query) ||
        svc.overview.toLowerCase().includes(query) ||
        svc.subdisciplines.some(
          (sub) =>
            sub.name.toLowerCase().includes(query) ||
            sub.desc.toLowerCase().includes(query)
        ) ||
        svc.deliverables.some((d) => d.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative pb-20 overflow-hidden bg-[#FAFAF8] text-black/85">
      {/* ========================================================
          1. CATALOGUE HERO: Full-Bleed Architectural Hero Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818] mb-12 sm:mb-16">
        <img
          src="/images/ground-up.jpg"
          alt="BNS Development Services & Comprehensive Building Disciplines"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        {/* Architectural Directional Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-300 tracking-wider uppercase">
                  Comprehensive Services • Florida &amp; Texas
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
                Precision Disciplines.<br />
                <span className="text-[#C41E1E]">Built for Complexity.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-200 font-sans leading-relaxed max-w-3xl pt-1">
                From early feasibility and Pre Development cost modeling through complex ground-up superstructures and commercial tenant improvements, BNS Development brings single-source accountability and experienced builder leadership to every project.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                <span>Single-Source Accountability</span>
                <span className="text-neutral-500">•</span>
                <span>End-to-End Execution</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">
        <section className="space-y-8">

          {/* Refined Quick Metrics Ribbon */}
          <ScrollReveal direction="up" delay={0.14}>
            <div className="rounded-3xl bg-white border border-[#E8E5E0] shadow-sm p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E5E0]">
                
                {/* 1. Leadership */}
                <div className="space-y-1.5 sm:px-4 first:sm:pl-0">
                  <div className="flex items-center gap-2 text-[#C41E1E] text-xs font-mono tracking-wider font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Leadership</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-black/90">35+ Years</div>
                  <p className="text-xs text-black/50 font-sans">Combined building mastery</p>
                </div>

                {/* 2. Licensing */}
                <div className="space-y-1.5 pt-4 sm:pt-0 sm:px-6">
                  <div className="flex items-center gap-2 text-[#C41E1E] text-xs font-mono tracking-wider font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Licensing</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-black/90">FL &amp; TX</div>
                  <p className="text-xs text-black/50 font-sans">General Contractor CGC 1505391</p>
                </div>

                {/* 3. Accountability */}
                <div className="space-y-1.5 pt-4 sm:pt-0 sm:px-6">
                  <div className="flex items-center gap-2 text-[#C41E1E] text-xs font-mono tracking-wider font-semibold">
                    <Layers className="w-4 h-4" />
                    <span>Accountability</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-black/90">Single-Source</div>
                  <p className="text-xs text-black/50 font-sans">Unified design &amp; build delivery</p>
                </div>

                {/* 4. Standards */}
                <div className="space-y-1.5 pt-4 sm:pt-0 sm:px-6 last:sm:pr-0">
                  <div className="flex items-center gap-2 text-[#C41E1E] text-xs font-mono tracking-wider font-semibold">
                    <Award className="w-4 h-4" />
                    <span>Standards</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-black/90">100%</div>
                  <p className="text-xs text-black/50 font-sans">Safety &amp; QA/QC governance</p>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ========================================================
            2. OUR EXPERTISE: Interactive Roofaro-Style Accordion Split Showcase
            ======================================================== */}
        <OurExpertiseSection
          setActivePage={setActivePage}
          setSelectedService={setSelectedService}
          tag="Disciplines &amp; Scope"
          title="Our"
          highlight="Expertise."
          description="Interactive breakdown of our five core delivery disciplines. Select any practice to review detailed scope, methodology, and technical deliverables."
          className="rounded-[2.5rem] p-4 sm:p-8 lg:p-12"
        />

        {/* ========================================================
            3. METHODOLOGY: The 5-Step Delivery Lifecycle (Architectural Visual Cards)
            ======================================================== */}
        <section className="space-y-12 pt-10 pb-6">
          <ScrollReveal direction="up" delay={0.06}>
            <SectionHeading
              tag="Project Delivery Methodology"
              title="The 5-Step"
              highlight="Delivery Lifecycle."
              description="How BNS Development orchestrates complex capital projects from conception through Certificate of Occupancy with clockwork predictability."
              className="mb-8"
            />
          </ScrollReveal>

          {/* 5-Step Animated Cascading Step Cards matching https://animated-step-cards.framer.website/ */}
          <AnimatedStepCards steps={deliveryLifecycle} />
        </section>

        {/* ========================================================
            4. THE BNS COMMITMENT: Quality, Safety & Transparency
            ======================================================== */}
        <section className="space-y-12 pt-8">
          <ScrollReveal direction="up" delay={0.06}>
            <SectionHeading
              tag="Execution Standards"
              title="Built on"
              highlight="Uncompromising Standards."
              description="Three foundational principles guide every project we accept, ensuring budget certainty, field safety and transparent communication."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div className="p-8 rounded-3xl bg-white border border-[#E8E5E0] hover:border-[#C41E1E] shadow-sm hover:shadow-xl space-y-6 h-full flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-500">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#F5F3F0] border border-[#E8E5E0] flex items-center justify-center text-[#C41E1E] group-hover:bg-[#C41E1E] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold font-display text-black/85">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-black/60 font-sans leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#E8E5E0] flex items-center justify-between text-xs font-sans text-black/50">
                      <span>BNS Standard</span>
                      <span className="text-[#C41E1E] font-semibold">Excellence in Delivery</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            5. ARCHITECTURAL CTA SECTION
            ======================================================== */}
        <HouseCTA
          onStartProject={() => setActivePage('contact')}
        />

      </div>
    </div>
  );
}
