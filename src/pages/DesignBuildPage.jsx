import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, Layers, CheckCircle2, ArrowRight, ArrowUpRight,
  ShieldCheck, Eye, ClipboardList, Users, HardHat, Target,
  Sparkles, CheckSquare, Building2
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ServiceBreadcrumb from '../components/ServiceBreadcrumb';
import HouseCTA from '../components/HouseCTA';
import AnimatedPath from '../components/AnimatedPath';

export default function DesignBuildPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Design-Build Services";
  }, []);

  const approachSteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'We begin by understanding your project objectives, requirements, priorities and expectations.',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'We establish the framework for moving the project from concept toward execution.',
      icon: ClipboardList,
    },
    {
      step: '03',
      title: 'Coordinate',
      desc: 'We facilitate communication between the relevant design, development and project stakeholders.',
      icon: Users,
    },
    {
      step: '04',
      title: 'Build',
      desc: 'Once the project moves into physical execution, our team remains focused on execution, coordination and project oversight.',
      icon: HardHat,
    },
    {
      step: '05',
      title: 'Deliver',
      desc: 'We stay focused on the project\'s objectives through completion.',
      icon: Target,
    },
  ];

  const pictorialBenefits = [
    {
      step: '01',
      title: 'Improved communication',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '02',
      title: 'Greater coordination between project teams',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '03',
      title: 'Earlier identification of development considerations',
      image: '/images/ground-up.jpg',
    },
    {
      step: '04',
      title: 'A more integrated project process',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '05',
      title: 'Clearer accountability',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '06',
      title: 'Better alignment between design and development objectives',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  return (
    <div className="relative pb-20 text-black/90 bg-[#FAFAF8] min-h-screen">
      {/* ========================================================
          1. HERO SECTION: Full-Bleed Architectural Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818] mb-12 sm:mb-16">
        <img
          src="/images/design-build.jpg"
          alt="Design-Build Project Execution"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <ServiceBreadcrumb currentTitle="Design-Build Delivery" setActivePage={setActivePage} />

          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-300 tracking-wider uppercase">
                  Design-Build Delivery • Florida &amp; Texas
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
                One Coordinated Approach From<br />
                <span className="text-[#C41E1E]">Design Through Delivery.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-200 font-sans leading-relaxed max-w-3xl pt-1">
                Design-build connects the design and development processes under a coordinated framework. By bringing design, planning and development together, we help ensure project objectives, budgets and timelines remain aligned from the start.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                <span>Single-Point Contract</span>
                <span className="text-neutral-500">•</span>
                <span>Cost &amp; Schedule Predictability</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">

        {/* ========================================================
            2. WHAT IS DESIGN-BUILD?
            ======================================================== */}
        <section className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-[#E8E5E0] shadow-sm">
          <div className="max-w-3xl space-y-6">
            <SectionHeading
              tag="Overview"
              title="What is"
              highlight="Design-Build?"
            />
            <div className="space-y-4 text-base sm:text-lg text-black/60 font-sans leading-relaxed">
              <p>
                Design-build is a project delivery approach that integrates design and development under a coordinated process. Instead of managing separate relationships between designers and builders, design-build creates a collaborative structure where communication, planning and execution are aligned.
              </p>
              <p>
                This approach allows development considerations to be evaluated earlier in the process, helping reduce miscommunication, improve coordination and create a smoother path to execution.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. BENEFITS OF DESIGN-BUILD
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Advantages"
            title="Benefits of"
            highlight="Design-Build"
            description="A coordinated design-build process brings distinct advantages to complex developments."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pictorialBenefits.map((item) => (
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

                <div className="relative z-10 p-6 space-y-1.5 text-white">
                  <span className="text-xs font-mono font-bold text-[#C41E1E]">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. OUR APPROACH (5 Steps)
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Methodology"
            title="Our Approach to"
            highlight="Design-Build"
            description="A clear, structured 5-step process designed to maintain alignment from the initial concept through project turnover."
          />

          <div className="space-y-4">
            <div className="hidden lg:block px-6">
              <AnimatedPath
                stepsCount={5}
                lineColor="#C41E1E"
                trailColor="#C41E1E"
                dotColor="#C41E1E"
                baseOpacity={0.25}
                speed={3.5}
                strokeWidth={2}
                height={28}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {approachSteps.map((step) => {
                const IconComp = step.icon;
                return (
                  <div
                    key={step.step}
                    className="p-7 rounded-3xl bg-white border border-[#E8E5E0] hover:border-[#C41E1E] transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-lg group hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-mono font-bold text-[#C41E1E]">
                          {step.step}
                        </span>
                        <IconComp className="w-5 h-5 text-black/50 group-hover:text-[#C41E1E] transition-colors" />
                      </div>

                      <h4 className="text-lg font-semibold font-display text-black/85 group-hover:text-[#C41E1E] transition-colors">
                        {step.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            5. PROJECTS WELL-SUITED FOR DESIGN-BUILD
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Applications"
            title="Projects Well-Suited for"
            highlight="Design-Build"
            description="The integrated delivery method is particularly effective for project types requiring high coordination."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Custom Residential Projects',
                desc: 'Single-family residences and bespoke living spaces where design and execution require close coordination.',
                icon: Home,
              },
              {
                title: 'Commercial Improvements & Renovations',
                desc: 'Tenant improvements and interior buildouts where time, budget and execution certainty matter.',
                icon: Maximize,
              },
              {
                title: 'Ground-Up Developments',
                desc: 'New development projects that benefit from early planning and coordinated execution.',
                icon: HardHat,
              },
              {
                title: 'Multifamily & Mixed-Use Projects',
                desc: 'Residential and mixed-use developments requiring alignment between design, planning and delivery.',
                icon: Building2,
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-7 rounded-3xl bg-white border border-[#E8E5E0] hover:border-[#C41E1E] shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F3F0] flex items-center justify-center text-[#C41E1E]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-semibold font-display text-black/85">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-black/60 font-sans leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <HouseCTA
          onStartProject={() => setActivePage('contact')}
          title="Ready to Discuss Your"
          highlight="Design-Build Project?"
          description="Connect with our team to evaluate how the design-build delivery model can streamline your project's timeline and budget."
          buttonText="Start a Conversation"
        />
      </div>
    </div>
  );
}
