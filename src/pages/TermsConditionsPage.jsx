import React, { useEffect } from 'react';

export default function TermsConditionsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-black/90 font-sans selection:bg-[#ED1C24] selection:text-white">
      {/* ========================================================
          1. SLEEK BANNER (With Architectural Building Image)
          ======================================================== */}
      <section className="relative w-full overflow-hidden min-h-[360px] sm:min-h-[420px] flex flex-col justify-end pt-32 sm:pt-40 pb-12 sm:pb-14 bg-[#181818] border-b border-white/10">
        {/* Background Architectural Building Image */}
        <img
          src="/images/about-hero.jpg"
          alt="BNS Architectural Building Landmark"
          className="absolute inset-0 w-full h-full object-cover object-center select-none brightness-95 contrast-[1.05]"
          loading="eager"
        />
        {/* Dual Directional Architectural Gradients for Perfect Text Readability while Keeping Building Image Vividly Visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* Subtle Architectural Dot Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-3.5">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[2px] bg-[#ED1C24]" />
            <span className="text-xs sm:text-sm font-sans tracking-widest text-[#d4d4d4] font-semibold uppercase">
              Legal &amp; Compliance
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-white leading-tight">
            Terms &amp; Conditions
          </h1>
        </div>
      </section>

      {/* ========================================================
          2. LEGAL CONTENT (Single Clean Content Area)
          Presented directly on page without cards or individual containers
          ======================================================== */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="space-y-10">
          
          {/* Metadata & Introductory Statement */}
          <div className="space-y-4 pb-8 border-b border-black/[0.08]">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-black/50">
              Last Updated: October 2026
            </p>
            <p className="text-base sm:text-[17px] text-black/85 font-sans leading-relaxed">
              Welcome to the BNS Development website. By accessing or using this website, you agree to these Terms &amp; Conditions. If you do not agree with these terms, please do not use this website.
            </p>
          </div>

          {/* Section: Use of This Website */}
          <section className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Use of This Website
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              The content provided on this website is intended for general informational purposes. You may view, access and use the website for lawful purposes only.
            </p>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              You agree not to use the website for unlawful purposes, attempt to gain unauthorized access, interfere with the website&apos;s operation, copy or reproduce website content without permission, or use website content in a way that could misrepresent BNS Development.
            </p>
          </section>

          {/* Section: Website Content */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Website Content
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              BNS Development makes reasonable efforts to provide accurate and current information on this website. However, website content may change over time and may not always reflect the latest information about our services, projects or company.
            </p>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              Information on this website should not be considered a substitute for project-specific professional advice, contractual documents or formal agreements.
            </p>
          </section>

          {/* Section: Project Information */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Project Information
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              Project information, descriptions, images, specifications and other materials displayed on this website are provided for informational purposes.
            </p>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              Past project experience does not guarantee that future projects will have the same scope, schedule, budget, results or other characteristics. Specific project terms and responsibilities are established through individual agreements and contracts.
            </p>
          </section>

          {/* Section: Intellectual Property */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Intellectual Property
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              Unless otherwise stated, content on this website, including text, graphics, logos, images, design elements and other materials, is owned by or licensed to BNS Development. You may not reproduce, distribute, modify, publish or commercially use website content without prior written permission.
            </p>
          </section>

          {/* Section: Third-Party Links */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Third-Party Links
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              This website may contain links to third-party websites. These links are provided for convenience and do not mean that BNS Development endorses or assumes responsibility for the content, services or practices of those websites.
            </p>
          </section>

          {/* Section: User Submissions */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              User Submissions
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              If you submit information through our website, including project inquiries, resumes, documents or other materials, you represent that the information provided is accurate and that you have the right to submit it.
            </p>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              You should not submit confidential information through a general website form unless specifically requested through an appropriate secure process.
            </p>
          </section>

          {/* Section: No Guarantee */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              No Guarantee
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              BNS Development does not guarantee that the website will always be available, uninterrupted, error-free or free from harmful components. We may modify, suspend or discontinue any part of the website at any time.
            </p>
          </section>

          {/* Section: Limitation of Liability */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Limitation of Liability
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              To the extent permitted by applicable law, BNS Development will not be responsible for losses or damages arising from your use of, or inability to use, this website or reliance on information provided through the website.
            </p>
          </section>

          {/* Section: Changes to These Terms */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Changes to These Terms
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              BNS Development may update these Terms &amp; Conditions from time to time. Updated terms will be posted on this page with a revised date.
            </p>
          </section>

          {/* Section: Governing Law */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Governing Law
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              These Terms &amp; Conditions shall be governed by the applicable laws of the jurisdiction in which BNS Development operates, unless otherwise provided by a written agreement between the parties.
            </p>
          </section>

          {/* Section: Contact Us */}
          <section className="space-y-3.5 pt-6 border-t border-black/[0.08]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Contact Us
            </h2>
            <div className="space-y-1.5 text-[15px] sm:text-base text-black/75 font-sans">
              <p className="font-mono text-black/70">
                <a
                  href="mailto:contact@bnsdevelopment.com"
                  className="hover:text-[#ED1C24] transition-colors"
                >
                  contact@bnsdevelopment.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
