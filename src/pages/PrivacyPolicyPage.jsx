import React, { useEffect } from 'react';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              BNS Development (&ldquo;BNS Development,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the information you provide when you visit our website or contact us.
            </p>
          </div>

          {/* Section: Information We Collect */}
          <section className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Information We Collect
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              We may collect information that you voluntarily provide when you submit a contact form, submit a project inquiry, apply for a career opportunity, request information about our services, or communicate with us by email, phone or through our website.
            </p>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              This information may include your name, company name, email address, phone number, project information, resume and other information you choose to provide.
            </p>
          </section>

          {/* Section: How We Use Your Information */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              How We Use Your Information
            </h2>
            <ul className="space-y-2.5 my-3 pl-5 list-disc text-[15px] sm:text-base text-black/75 font-sans leading-relaxed marker:text-[#ED1C24]">
              <li>Respond to your inquiries</li>
              <li>Understand your project requirements</li>
              <li>Provide information about our services</li>
              <li>Evaluate employment applications</li>
              <li>Communicate with you regarding your inquiry</li>
              <li>Improve our website, services and communications</li>
              <li>Maintain business and communication records</li>
            </ul>
          </section>

          {/* Section: Information Sharing */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Information Sharing
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              BNS Development does not sell or rent your personal information.
            </p>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              We may share information with service providers or professional partners when reasonably necessary to operate our website, respond to your inquiry or provide requested services. We may also disclose information when required by law or when necessary to protect our rights, property or safety.
            </p>
          </section>

          {/* Section: Cookies and Analytics */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Cookies and Analytics
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              Our website may use cookies, analytics tools and similar technologies to understand website traffic, improve functionality and enhance the user experience. You may be able to manage or disable cookies through your browser settings.
            </p>
          </section>

          {/* Section: Data Security */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Data Security
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              We take reasonable measures to protect information submitted through our website. However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section: Third-Party Websites */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Third-Party Websites
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              Our website may contain links to third-party websites. BNS Development is not responsible for the privacy practices, content or security of external websites.
            </p>
          </section>

          {/* Section: Your Privacy Choices */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Your Privacy Choices
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              If you have submitted personal information to BNS Development and would like to request information about how your information is being used or request an update to your information, please contact us.
            </p>
          </section>

          {/* Section: Changes to This Privacy Policy */}
          <section className="space-y-3.5 pt-4 border-t border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-black/95 tracking-tight">
              Changes to This Privacy Policy
            </h2>
            <p className="text-[15px] sm:text-base text-black/75 font-sans leading-relaxed">
              BNS Development may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
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
