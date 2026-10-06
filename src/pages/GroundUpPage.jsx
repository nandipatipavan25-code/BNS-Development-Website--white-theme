import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HardHat, ClipboardList, Users, Target, CheckSquare,
  ShieldCheck, Clock, Award
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ServiceBreadcrumb from '../components/ServiceBreadcrumb';
import HouseCTA from '../components/HouseCTA';
import AnimatedPath from '../components/AnimatedPath';

export default function GroundUpPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Ground-Up Construction Services";
  }, []);

  const approachSteps = [
    {
      step: '01',
      title: 'Preconstruction',
      desc: 'We begin by understanding the project requirements, scope, schedule and construction considerations.',
      icon: ClipboardList,
    },
    {
      step: '02',
      title: 'Planning & Coordination',
      desc: 'We coordinate the information and project teams required to move the project toward construction.',
      icon: Users,
    },
    {
      step: '03',
      title: 'Site & Project Preparation',
      desc: 'We help establish the framework needed for the construction phase and coordinate the work involved in getting the project underway.',
      icon: HardHat,
    },
    {
      step: '04',
      title: 'Construction',
      desc: 'Our team provides project oversight and coordination throughout construction, keeping attention on schedule, scope, communication and execution.',
      icon: CheckSquare,
    },
    {
      step: '05',
      title: 'Completion',
      desc: 'As the project moves toward completion, we remain focused on coordination, resolution of outstanding items and delivering the finished project.',
      icon: Target,
    },
  ];

  const pictorialMatters = [
    {
      step: '01',
      title: 'Clear Communication',
      desc: 'Keeping owners, consultants, contractors and project partners aligned.',
      image: '/images/process/step-03-coordination.jpg',
    },
    {
      step: '02',
      title: 'Early Planning',
      desc: 'Addressing important project questions before construction begins.',
      image: '/images/process/step-02-planning.jpg',
    },
    {
      step: '03',
      title: 'Practical Problem Solving',
      desc: 'Identifying challenges early and finding practical solutions.',
      image: '/images/process/step-04-details.jpg',
    },
    {
      step: '04',
      title: 'Experienced Leadership',
      desc: 'Bringing decades of hands-on development experience to the project.',
      image: '/images/home-strategic-leadership.jpg',
    },
    {
      step: '05',
      title: 'Schedule Awareness',
      desc: 'Maintaining momentum and keeping the project moving forward.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '06',
      title: 'Accountability',
      desc: 'Taking ownership of project responsibilities from planning through completion.',
      image: '/images/ground-up.jpg',
    },
  ];

  return (
    <div className="relative pb-20 text-black/90 bg-[#FAFAF8] min-h-screen">
      {/* ========================================================
          1. HERO SECTION: Full-Bleed Architectural Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818] mb-12 sm:mb-16">
        <img
          src="/images/ground-up.jpg"
          alt="Ground-Up Development Superstructure"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <ServiceBreadcrumb currentTitle="Ground Up Development" setActivePage={setActivePage} />

          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-300 tracking-wider uppercase">
                  Ground-Up Construction Services • Florida &amp; Texas
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
                Starting With a Vision.<br />
                <span className="text-[#C41E1E]">Building From the Ground Up.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-200 font-sans leading-relaxed max-w-3xl pt-1">
                Ground-up construction requires careful planning, disciplined execution and experienced leadership across every stage. BNS Development provides development leadership from early site planning and preconstruction through completion, helping clients move projects from concept to reality.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                <span>Structural Shells &amp; Civil Works</span>
                <span className="text-neutral-500">•</span>
                <span>Turnkey Superstructures</span>
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
              tag="Overview"
              title="Why Early Ground-Up"
              highlight="Planning Matters"
            />
            <div className="space-y-4 text-base sm:text-lg text-black/60 font-sans leading-relaxed">
              <p>
                Every successful ground-up project is built on early decisions. From evaluating constructability and establishing project scope to coordinating teams and managing schedules, early planning helps minimize delays, resolve issues and create a clear path to execution.
              </p>
              <p>
                With experience across development, project management and construction, BNS Development provides the leadership needed to guide projects through every stage.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. WHAT MATTERS IN GROUND-UP CONSTRUCTION
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Core Principles"
            title="What Matters in"
            highlight="Ground-Up Construction"
            description="Six essential commitments that ensure successful execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pictorialMatters.map((item) => (
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
                  <h3 className="text-base sm:text-lg font-display font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-200 font-sans leading-relaxed">
                    {item.desc}
                  </p>
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
            tag="Execution Framework"
            title="Our Approach to"
            highlight="Ground-Up Construction"
            description="From preconstruction through closeout, we maintain hands-on project oversight."
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

        {/* CTA */}
        <HouseCTA
          onStartProject={() => setActivePage('contact')}
          title="Have a Ground-Up"
          highlight="Project in Mind?"
          description="Whether you are in the planning stage, evaluating land opportunities or preparing for construction, BNS Development can help move your project forward."
          buttonText="Start the Conversation"
        />
      </div>
    </div>
  );
}
