import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home, Building2, Layers, Wrench, CheckCircle2,
  ClipboardList, Users, HardHat, Target, ShieldCheck, HeartHandshake
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ServiceBreadcrumb from '../components/ServiceBreadcrumb';
import HouseCTA from '../components/HouseCTA';
import AnimatedPath from '../components/AnimatedPath';

export default function ResidentialPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Residential Development Services";
  }, []);

  const residentialServices = [
    {
      title: 'Single-Family Development',
      desc: 'We support single-family residential projects with an approach focused on planning, coordination, development and project oversight.',
      icon: Home,
    },
    {
      title: 'Multifamily Development',
      desc: 'Multifamily developments require careful coordination across multiple units, trades, schedules and project requirements. Our experience helps bring these moving parts together.',
      icon: Building2,
    },
    {
      title: 'Residential Developments',
      desc: 'For larger residential developments and community projects, we provide project leadership focused on coordination and execution.',
      icon: Layers,
    },
    {
      title: 'Renovation & Improvements',
      desc: 'Where applicable, we can support residential renovation and improvement projects that require experienced development coordination.',
      icon: Wrench,
    },
  ];

  const pictorialApproach = [
    {
      step: '01',
      title: 'Plan',
      desc: 'Understand the project, site, scope and requirements.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '02',
      title: 'Coordinate',
      desc: 'Keep owners, designers, contractors and project partners aligned.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Maintain focus on development execution, scheduling and project oversight.',
      image: '/images/ground-up.jpg',
    },
    {
      step: '04',
      title: 'Deliver',
      desc: 'Work toward completing the project with attention to quality, communication and accountability.',
      image: '/images/projects/luxury-penthouse-design.png',
    },
  ];

  return (
    <div className="relative pb-20 text-black/90 bg-[#FAFAF8] min-h-screen">
      {/* ========================================================
          1. HERO SECTION: Full-Bleed Architectural Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818] mb-12 sm:mb-16">
        <img
          src="/images/residential.jpg"
          alt="Residential Development Craftsmanship"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <ServiceBreadcrumb currentTitle="Residential Development" setActivePage={setActivePage} />

          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-300 tracking-wider uppercase">
                  Residential Services • Florida &amp; Texas
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
                Building Homes.<br />
                <span className="text-[#C41E1E]">Developing Communities.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-200 font-sans leading-relaxed max-w-3xl pt-1">
                Residential projects require a balance of thoughtful planning, quality development, clear communication and dependable execution. BNS Development provides development leadership for single-family residences, multifamily developments and residential communities across Florida and Texas.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                <span>Single-Family &amp; Custom Residences</span>
                <span className="text-neutral-500">•</span>
                <span>Multifamily Communities</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">

        {/* ========================================================
            2. WHAT WE BRING TO RESIDENTIAL PROJECTS
            ======================================================== */}
        <section className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-[#E8E5E0] shadow-sm">
          <div className="max-w-3xl space-y-6">
            <SectionHeading
              tag="Overview"
              title="What We Bring to"
              highlight="Residential Projects"
            />
            <div className="space-y-4 text-base sm:text-lg text-black/60 font-sans leading-relaxed">
              <p>
                From custom homes to multi-unit properties, residential development is deeply personal for owners and demanding for builders. We emphasize proactive schedule management, early material procurement, and close trade collaboration to keep budgets intact and quality uncompromised.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. RESIDENTIAL SERVICES
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Core Offerings"
            title="Our Residential"
            highlight="Capabilities"
            description="Experienced leadership across diverse residential sectors."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentialServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-[#E8E5E0] hover:border-[#C41E1E] shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5F3F0] flex items-center justify-center text-[#C41E1E] group-hover:bg-[#C41E1E] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold font-display text-black/85">
                      {svc.title}
                    </h4>
                    <p className="text-sm text-black/60 font-sans leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            4. OUR APPROACH (4 Steps)
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Methodology"
            title="Our Approach to"
            highlight="Residential Projects"
            description="Four deliberate steps to guide your build from vision through handover."
          />

          <div className="space-y-4">
            <div className="hidden lg:block px-6">
              <AnimatedPath
                stepsCount={4}
                lineColor="#C41E1E"
                trailColor="#C41E1E"
                dotColor="#C41E1E"
                baseOpacity={0.25}
                speed={3.5}
                strokeWidth={2}
                height={28}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pictorialApproach.map((item) => (
                <div
                  key={item.step}
                  className="group relative rounded-3xl overflow-hidden border border-[#E8E5E0] bg-[#ECEAE5] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end aspect-[4/3] min-h-[240px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                  <div className="relative z-10 p-6 space-y-1 text-white">
                    <span className="text-xs font-mono font-bold text-[#C41E1E]">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-200 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            5. WHAT MATTERS IN RESIDENTIAL DEVELOPMENT
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Practical Principles"
            title="What Matters in"
            highlight="Residential Development"
            description="Five practical commitments we bring to every residential project."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Clear Communication', desc: 'Frequent, transparent updates on schedule and budget.', icon: Users },
              { title: 'Thoughtful Planning', desc: 'Resolving details and supply chains before field work begins.', icon: ClipboardList },
              { title: 'Experienced Leadership', desc: 'Decades of on-site supervisory knowledge.', icon: HardHat },
              { title: 'Focus on Quality', desc: 'Rigorous trade craftsmanship inspections.', icon: ShieldCheck },
              { title: 'Accountability', desc: 'Standing behind every milestone and deliverable.', icon: HeartHandshake },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E8E5E0] space-y-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F3F0] flex items-center justify-center text-[#C41E1E]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold font-display text-black/85">
                    {item.title}
                  </h4>
                  <p className="text-xs text-black/60 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <HouseCTA
          onStartProject={() => setActivePage('contact')}
          title="Have a Residential"
          highlight="Project in Mind?"
          description="Whether you're planning a custom single-family home or a larger multifamily development, BNS Development is ready to help you move forward."
          buttonText="Start the Conversation"
        />
      </div>
    </div>
  );
}
