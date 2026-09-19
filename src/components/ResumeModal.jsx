import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Mail, 
  CheckCircle2
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0f121a] border border-white/10 shadow-2xl z-10 text-slate-200 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0a0c12] border-b border-white/[0.08] shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-indigo/15 border border-brand-indigo/30 flex items-center justify-center text-brand-indigo">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="resume-modal-title" className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span>{personalInfo.name} — Resume</span>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 hidden sm:inline-block">
                      Official ATS Version
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    B.Tech (AI &amp; ML) · Akal University · Bathinda, Punjab
                  </p>
                </div>
              </div>

              {/* Action Buttons & Close */}
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socialLinks.resumeFile}
                  download="Gurinderpal_Singh_Resume.pdf"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-indigo to-brand-violet text-white hover:scale-105 transition-all shadow-sm"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>

                <a
                  href={personalInfo.socialLinks.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/10 transition-all"
                  title="Open in new window"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-brand-indigo" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1 focus:outline-none focus:ring-2 focus:ring-brand-indigo/50"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer Container */}
            <div className="flex-1 min-h-[500px] max-h-[72vh] p-3 sm:p-4 bg-[#090b10] overflow-hidden">
              <iframe
                src={`${personalInfo.socialLinks.resumeFile}#toolbar=1&navpanes=0`}
                title="Gurinderpal Singh Resume PDF"
                className="w-full h-full min-h-[480px] rounded-xl border border-white/[0.08] bg-white shadow-inner"
              />
            </div>

            {/* Modal Footer with Direct Contact Links */}
            <div className="px-6 py-3 bg-[#0a0c12] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Resume Data</span>
                </span>
                <span className="hidden md:inline">·</span>
                <span className="hidden md:inline text-slate-400">
                  Phone: {personalInfo.socialLinks.phoneDisplay}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.resumeFile}
                  download="Gurinderpal_Singh_Resume.pdf"
                  className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-indigo text-white"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>

                <a
                  href={`mailto:${personalInfo.socialLinks.rawEmail}`}
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  <span className="hidden sm:inline">Send Email</span>
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
