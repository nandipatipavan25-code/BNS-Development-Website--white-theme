import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TextRevealOnScroll from '../components/TextRevealOnScroll';
import MotionSubmitButton from '../components/FramerMotionEnvelopeButton';
import CardBeamBorder from '../components/CardBeamBorder';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission & mailbox delivery sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="relative pb-12 sm:pb-16 text-black/90 bg-transparent min-h-screen font-sans selection:bg-[#ED1C24] selection:text-white">
      {/* Subtle Architectural Dot Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none select-none"
        style={{
          backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 sm:pt-36 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Header, Badges, & Contact Form
              ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            <ScrollReveal direction="left" delay={0.05}>
              <div className="space-y-4">
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-[2px] bg-[#ED1C24]" />
                  <span className="text-xs sm:text-sm font-sans font-semibold text-black/50 tracking-wider">
                    Contact BNS Development
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-display font-semibold tracking-tight text-black/95 leading-[44px] sm:leading-[44px] md:leading-[44px]">
                  Have a Project in Mind?<br />
                  <span className="text-black/95">Let's Talk.</span>
                </h1>

                {/* Animated Text Reveal Subtitle */}
                <TextRevealOnScroll
                  text="Connect with BNS Development to explore your project, understand your needs, and find the right path from planning to completion."
                  className="text-[15px] sm:text-[16px] text-black/60 font-sans leading-relaxed max-w-xl"
                  primaryColor="rgba(0, 0, 0, 0.60)"
                  mutedColor="rgba(0, 0, 0, 0.20)"
                  offset={['start 98%', 'start 75%']}
                />
              </div>
            </ScrollReveal>

            {/* Form & Animated Submission State */}
            <ScrollReveal direction="up" delay={0.12}>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.94,
                      y: -20,
                      rotateX: 10,
                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                    }}
                    onSubmit={handleSubmit}
                    className="space-y-4 pt-2"
                  >
                    {/* Row 1: Full Name & Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-sans font-semibold text-black/85 block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#F2F2F2] border border-transparent text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#ED1C24] focus:bg-white focus:ring-2 focus:ring-[#ED1C24]/10 transition-all font-sans"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-sans font-semibold text-black/85 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="hello@invox.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#F2F2F2] border border-transparent text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#ED1C24] focus:bg-white focus:ring-2 focus:ring-[#ED1C24]/10 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-black/85 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(+1) ______"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F2F2F2] border border-transparent text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#ED1C24] focus:bg-white focus:ring-2 focus:ring-[#ED1C24]/10 transition-all font-sans"
                      />
                    </div>

                    {/* Row 3: Your Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-semibold text-black/85 block">
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us how we can help you"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F2F2F2] border border-transparent text-sm text-black/90 placeholder-black/40 focus:outline-none focus:border-[#ED1C24] focus:bg-white focus:ring-2 focus:ring-[#ED1C24]/10 transition-all font-sans resize-none"
                      />
                    </div>

                    {/* Row 4: Framer Motion Interactive Submit Button */}
                    <div className="pt-2">
                      <MotionSubmitButton
                        isSubmitting={isSubmitting}
                        isSubmitted={submitted}
                        buttonLabel="Submit Project Inquiry"
                        sendingLabel="Sending inquiry..."
                        onReset={handleReset}
                      />
                    </div>
                  </motion.form>
                ) : (
                  <MotionSubmitButton
                    isSubmitting={false}
                    isSubmitted={submitted}
                    onReset={handleReset}
                  />
                )}
              </AnimatePresence>
            </ScrollReveal>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Architectural Landmark Building Window
              ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-6">
            <ScrollReveal direction="right" delay={0.12}>
              <div className="group relative overflow-hidden w-full aspect-[4/3.6] sm:aspect-[4/3.4] lg:aspect-[4/3.8] rounded-3xl shadow-2xl border border-black/[0.08] bg-[#F0F0EE]">
                <CardBeamBorder borderRadius="24px" />
                <img
                  src="/images/contact-architectural-modern.png"
                  alt="BNS Development Architectural Landmark"
                  className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}
