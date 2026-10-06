import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, Sparkles, Building2, Users, HardHat, CheckCircle2,
  Layers, Wrench, ShieldCheck, ClipboardList, Target, ShoppingBag, Utensils
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ServiceBreadcrumb from '../components/ServiceBreadcrumb';
import HouseCTA from '../components/HouseCTA';

export default function TenantImprovementsPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Tenant Improvement Services";
  }, []);

  const tenantServices = [
    {
      title: 'Space Planning Coordination',
      desc: 'We help coordinate project requirements and work with the relevant project professionals to establish the scope of improvements.',
      icon: Compass,
    },
    {
      title: 'Interior Improvements',
      desc: 'We coordinate development and fit-out work required to transform the interior environment according to the project\'s requirements.',
      icon: Sparkles,
    },
    {
      title: 'Build-Outs',
      desc: 'From preparing an existing space for a new tenant to completing a commercial build-out, we help coordinate the delivery and fit-out process.',
      icon: Building2,
    },
    {
      title: 'Project Coordination',
      desc: 'We help keep owners, tenants, designers, contractors and subcontractors aligned throughout the project.',
      icon: Users,
    },
    {
      title: 'Development Management',
      desc: 'Our team provides hands-on oversight throughout the execution and delivery phase to help keep the project moving.',
      icon: HardHat,
    },
  ];

  const pictorialWhyChoose = [
    {
      step: '01',
      title: 'Clear project coordination',
      image: '/images/projects/executive-office-workspace.png',
    },
    {
      step: '02',
      title: 'Practical development planning',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '03',
      title: 'Communication between stakeholders',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '04',
      title: 'Schedule awareness',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '05',
      title: 'Experienced project oversight',
      image: '/images/ground-up.jpg',
    },
    {
      step: '06',
      title: 'Problem solving throughout execution',
      image: '/images/projects/modern-retail-showroom.png',
    },
  ];

  return (
    <div className="relative pb-20 text-black/90 bg-[#FAFAF8] min-h-screen">
      {/* ========================================================
          1. HERO SECTION: Full-Bleed Architectural Banner
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-[#E6E6E3] bg-[#181818] mb-12 sm:mb-16">
        <img
          src="/images/tenant-improvements.jpg"
          alt="Tenant Improvement Transformation"
          className="absolute inset-0 w-full h-full object-cover select-none brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <ServiceBreadcrumb currentTitle="Tenant Improvements" setActivePage={setActivePage} />

          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-[2px] bg-[#C41E1E]" />
                <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-300 tracking-wider uppercase">
                  Commercial Fit-Outs • Florida &amp; Texas
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] font-display font-semibold tracking-tight text-white leading-[1.1]">
                Transforming Spaces to Meet<br />
                <span className="text-[#C41E1E]">New Business &amp; Operational Needs.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-200 font-sans leading-relaxed max-w-3xl pt-1">
                Commercial spaces must adapt as business needs evolve. BNS Development provides tenant improvement and commercial build-out services that help owners, developers and businesses transform existing spaces into functional, well-coordinated environments.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
                <span>Fast-Track Fit-Outs</span>
                <span className="text-neutral-500">•</span>
                <span>Corporate &amp; Retail Modernization</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">

        {/* ========================================================
            2. WHAT ARE TENANT IMPROVEMENTS?
            ======================================================== */}
        <section className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-[#E8E5E0] shadow-sm">
          <div className="max-w-3xl space-y-6">
            <SectionHeading
              tag="Overview"
              title="What Are"
              highlight="Tenant Improvements?"
            />
            <div className="space-y-4 text-base sm:text-lg text-black/60 font-sans leading-relaxed">
              <p>
                Tenant improvements (also known as leasehold improvements or commercial build-outs) involve modifying, upgrading or customizing an existing interior commercial space to support the operational requirements of a tenant or owner.
              </p>
              <p>
                Whether preparing a space for a new occupant, upgrading an existing facility or completing an interior fit-out, tenant improvement projects require careful planning, fast-track scheduling and effective communication.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. WHAT OUR SERVICES INCLUDE
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Core Offerings"
            title="What Our Tenant Improvement"
            highlight="Services Include"
            description="Comprehensive interior modernization and turnkey build-out oversight."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tenantServices.map((svc, idx) => {
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
            4. WHY CHOOSE BNS DEVELOPMENT
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Why BNS"
            title="Why Choose BNS Development for"
            highlight="Tenant Improvements"
            description="Six core strengths that ensure your commercial space opens on schedule."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pictorialWhyChoose.map((item) => (
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. SPACES WE HELP TRANSFORM
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Facility Types"
            title="Spaces We"
            highlight="Help Transform"
            description="Versatile fit-out capabilities across all asset classes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Office & Professional Spaces',
                desc: 'Corporate offices, medical suites, technology headquarters and professional environments.',
                icon: Building2,
              },
              {
                title: 'Retail & Commercial Spaces',
                desc: 'Boutiques, showrooms, retail storefronts and customer-facing commercial environments.',
                icon: ShoppingBag,
              },
              {
                title: 'Hospitality & Dining Spaces',
                desc: 'Restaurants, cafes, lounges, hotel amenity spaces and customer hospitality environments.',
                icon: Utensils,
              },
              {
                title: 'Specialized Commercial Facilities',
                desc: 'Fitness centers, educational facilities, creative studios and specialized business operations.',
                icon: Layers,
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
          title="Have a Commercial Space to"
          highlight="Transform?"
          description="Whether you are planning a tenant improvement, interior build-out or commercial renovation, BNS Development can help guide the project from planning through completion."
          buttonText="Start Your Buildout Inquiry"
        />
      </div>
    </div>
  );
}
