import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, Layers, CheckCircle2, ArrowRight, ArrowUpRight,
  ShieldCheck, Eye, ClipboardList, Users, HardHat, Target,
  Calendar, DollarSign, CheckSquare
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ServiceBreadcrumb from '../components/ServiceBreadcrumb';
import HouseCTA from '../components/HouseCTA';
import AnimatedPath from '../components/AnimatedPath';

export default function PreconstructionPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Pre-development Services";
  }, []);

  const predevelopmentServices = [
    {
      title: 'Project Planning',
      desc: 'We work to understand the project\'s goals, requirements, scope and priorities before construction begins.',
      icon: ClipboardList,
    },
    {
      title: 'Scope Development',
      desc: 'A clearly defined scope helps establish expectations and provides a stronger foundation for project execution.',
      icon: CheckSquare,
    },
    {
      title: 'Scheduling',
      desc: 'We help develop a practical project schedule and identify key stages that need to be coordinated before and during construction.',
      icon: Calendar,
    },
    {
      title: 'Project Coordination',
      desc: 'We help bring owners, consultants, designers, contractors and other project stakeholders together to establish alignment.',
      icon: Users,
    },
    {
      title: 'Construction Planning',
      desc: 'Our construction experience allows us to identify potential challenges early and consider how they may affect execution.',
      icon: HardHat,
    },
    {
      title: 'Budget & Cost Considerations',
      desc: 'Early understanding of project requirements and scope can help inform cost-related decisions and reduce unnecessary surprises later in the process.',
      icon: DollarSign,
    },
  ];

  const pictorialBenefits = [
    {
      step: '01',
      title: 'Identify potential challenges',
      image: '/images/process/step-04-details.jpg',
    },
    {
      step: '02',
      title: 'Clarify project scope',
      image: '/images/process/step-01-vision.jpg',
    },
    {
      step: '03',
      title: 'Improve coordination',
      image: '/images/process/step-03-coordination.jpg',
    },
    {
      step: '04',
      title: 'Establish realistic schedules',
      image: '/images/process/step-02-planning.jpg',
    },
    {
      step: '05',
      title: 'Support informed decision-making',
      image: '/images/home-strategic-leadership.jpg',
    },
    {
      step: '06',
      title: 'Better align project expectations',
      image: '/images/process/step-05-delivery.jpg',
    },
    {
      step: '07',
      title: 'Reduce risk before ground is broken',
      image: '/images/ground-up.jpg',
    },
  ];

  const approachSteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'We take the time to understand your goals, priorities, constraints and expectations.',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Evaluate',
      desc: 'We review the project\'s requirements, potential challenges and opportunities to identify practical considerations.',
      icon: ClipboardList,
    },
    {
      step: '03',
      title: 'Coordinate',
      desc: 'We work with the project team to align scope, expectations and key milestones.',
      icon: Users,
    },
    {
      step: '04',
      title: 'Prepare',
      desc: 'We help create the framework needed to move the project forward with greater confidence and clarity.',
      icon: Target,
    },
  ];

  return (
    <div className="relative pb-20 text-black/90 bg-[#FAFAF8] min-h-screen">
      {/* ========================================================
          1. HERO SECTION: Full-Bleed Architectural Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818] mb-12 sm:mb-16">
        <img
          src="/images/preconstruction.jpg"
          alt="Pre-Development Planning"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <ServiceBreadcrumb currentTitle="Pre-Development Services" setActivePage={setActivePage} />

          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-300 tracking-wider uppercase">
                  Pre-Development Services • Florida &amp; Texas
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
                Start With a Stronger Plan<br />
                <span className="text-[#C41E1E]">Before Development Begins.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-200 font-sans leading-relaxed max-w-3xl pt-1">
                The decisions made before development begins can have the greatest impact on the overall success of a project. Our Pre-development services are designed to help clients evaluate opportunities, define project requirements and establish a clear plan before construction starts.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                <span>Feasibility &amp; Cost Modeling</span>
                <span className="text-neutral-500">•</span>
                <span>Risk Mitigation</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">

        {/* ========================================================
            2. WHY EARLY PLANNING MATTERS
            ======================================================== */}
        <section className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-[#E8E5E0] shadow-sm">
          <div className="max-w-3xl space-y-6">
            <SectionHeading
              tag="Philosophy"
              title="Why Early"
              highlight="Planning Matters"
            />
            <div className="space-y-4 text-base sm:text-lg text-black/60 font-sans leading-relaxed">
              <p>
                Every successful development starts with clear planning. Addressing the right questions early can help reduce uncertainty, improve coordination and create a smoother path to execution.
              </p>
              <p>
                By getting involved before construction begins, BNS Development helps clients look at the project from multiple perspectives—development, project management and construction.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. BENEFITS OF EARLY PLANNING
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Strategic Value"
            title="Benefits of"
            highlight="Early Planning"
            description="Proactive planning aligns every stakeholder and reduces project friction."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pictorialBenefits.map((item) => (
              <div
                key={item.step}
                className="group relative rounded-3xl overflow-hidden border border-[#E8E5E0] bg-[#ECEAE5] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end aspect-[4/3] min-h-[220px]"
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
                  <h3 className="text-base sm:text-lg font-display font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. WHAT OUR PRE-DEVELOPMENT SERVICES INCLUDE
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Core Offerings"
            title="What Our Pre-Development"
            highlight="Services Include"
            description="Comprehensive scope packages covering every discipline before breaking ground."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {predevelopmentServices.map((svc, idx) => {
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
            5. OUR APPROACH (4 Steps)
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Execution Framework"
            title="How We Approach"
            highlight="Pre-Development"
            description="A disciplined 4-stage process to eliminate blind spots."
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

        {/* CTA */}
        <HouseCTA
          onStartProject={() => setActivePage('contact')}
          title="Have a Project in the"
          highlight="Planning Phase?"
          description="Whether you are evaluating a site, preparing a budget or organizing project requirements, BNS Development can help you move forward with clarity."
          buttonText="Start Planning With Us"
        />
      </div>
    </div>
  );
}
