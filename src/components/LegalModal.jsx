import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-white border border-[#E8E5E0] rounded-3xl p-6 sm:p-8 z-10 text-black/85 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#E8E5E0]">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#C41E1E]" />
              <h3 className="font-display font-semibold text-xl tracking-tight text-black/85">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#F5F3F0] text-black/50 hover:text-black/85 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-xs font-sans text-[#C41E1E] font-medium">
            {isPrivacy ? 'Last Updated: October 2026 • BNS Development' : 'Last Revised: October 2026 • BNS Development LLC'}
          </div>

          {isPrivacy ? (
            <div className="space-y-4 text-sm font-sans leading-relaxed text-black/60">
              <p>
                BNS Development ("BNS Development," "we," "our," or "us") respects your privacy and is committed to protecting the information you provide when you visit our website or contact us.
              </p>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">1. Information We Collect</h4>
                <p>
                  We collect information that you voluntarily provide to us when you fill out contact forms, submit inquiries, apply for careers, or communicate with our team. This may include your name, company name, email address, phone number, project details, and any other information you choose to share.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">2. How We Use Your Information</h4>
                <p>
                  We use the information we collect to respond to inquiries, evaluate development opportunities, coordinate project requirements, manage business relationships, and improve our services. We do not sell, rent, or trade your personal information to third parties.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">3. Information Sharing</h4>
                <p>
                  We may share your information with trusted consultants, trade partners, and service providers who assist us in operating our business and delivering projects, subject to confidentiality obligations. We may also disclose information when required by law or to protect our legal rights.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">4. Data Security</h4>
                <p>
                  We implement reasonable technical and organizational measures to safeguard your personal information against unauthorized access, loss, or misuse.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">5. Contact Us</h4>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:contact@bns-development.com" className="text-[#C41E1E] hover:underline">contact@bns-development.com</a> or call (786) 368-3009.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-sm font-sans leading-relaxed text-black/60">
              <p>
                Welcome to the BNS Development website. By accessing or using our website, you agree to comply with and be bound by the following Terms &amp; Conditions.
              </p>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">1. Use of Website</h4>
                <p>
                  The content on this website is for general informational purposes only. BNS Development reserves the right to modify, update, or discontinue any aspect of the website at any time without prior notice.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">2. Intellectual Property</h4>
                <p>
                  All content, text, images, logos, graphics, and design elements on this website are the property of BNS Development LLC or used with permission and are protected by applicable intellectual property laws. Unauthorized reproduction or distribution is strictly prohibited.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">3. Project Information &amp; Disclaimer</h4>
                <p>
                  Project renderings, photography, descriptions, scopes, and timelines presented on this website represent past experience, active developments, or conceptual designs. They do not constitute a binding offer, guarantee, or warranty. All development parameters are subject to formal contract agreements.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">4. Limitation of Liability</h4>
                <p>
                  BNS Development LLC shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use this website or its content.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">5. Governing Law</h4>
                <p>
                  These Terms &amp; Conditions are governed by and construed in accordance with the laws of the State of Florida and the State of Texas.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black/85 mb-1 font-display">6. Inquiries</h4>
                <p>
                  For inquiries regarding these Terms &amp; Conditions, please contact <a href="mailto:contact@bns-development.com" className="text-[#C41E1E] hover:underline">contact@bns-development.com</a>.
                </p>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-[#E8E5E0] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#171717] hover:bg-[#C41E1E] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
