import React from 'react';
import { Download, ExternalLink, FileText, Sparkles, Briefcase, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeCTA({ onOpenResume }) {
  return (
    <section className="py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Glowing Gradient Accent */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-brand-indigo/30 bg-gradient-to-r from-brand-indigo/15 via-dark-850 to-brand-violet/15 backdrop-blur-xl shadow-2xl">
          
          {/* Subtle Ambient Radial Lights */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-80 h-80 bg-brand-indigo/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-80 h-80 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/20 border border-brand-indigo/30 text-brand-indigo text-xs font-semibold mb-4">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Open for Opportunities</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Let's build something meaningful.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I'm actively seeking software engineering, web development, and AI/ML internship & entry-level roles. Eager to contribute clean code, autonomous problem-solving, and practical value to your team.
              </p>
            </div>

            {/* Resume Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              {/* Download Resume Button */}
              <a
                href={personalInfo.socialLinks.resumeFile}
                download="Gurinderpal_Singh_Resume.pdf"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-indigo to-brand-violet text-white shadow-glow-md hover:shadow-glow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* View Resume in Interactive Modal or Tab */}
              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 hover:border-brand-indigo/40 transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-brand-indigo" />
                <span>View Resume</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
