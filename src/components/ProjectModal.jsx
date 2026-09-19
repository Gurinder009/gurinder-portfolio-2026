import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Cpu, 
  FileCode,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close modal on Escape key
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

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f121a] border border-white/10 shadow-2xl z-10 text-slate-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header Banner */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0e1118]/90 backdrop-blur-md border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-brand-indigo/15 text-brand-indigo border border-brand-indigo/30">
                  {project.badge || 'Project Specs'}
                </span>
                <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-white truncate">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none focus:ring-2 focus:ring-brand-indigo"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Project Subtitle & Description */}
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{project.subtitle}</h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-white/[0.08]">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-indigo to-brand-violet text-white shadow-glow-sm hover:scale-[1.02] transition-transform"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Source on GitHub</span>
                  </a>
                )}
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-500/[0.04] border border-red-500/20">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Problem Addressed</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Stack Badges */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>Technology Stack</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-dark-900 border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Key Features</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Overview */}
              {project.architecture && (
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Architecture Overview</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 bg-dark-900/80 p-3.5 rounded-xl border border-white/[0.06] leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              )}

              {/* Challenges & What I Learned */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.challenges && (
                  <div className="p-4 rounded-xl bg-dark-900/60 border border-white/[0.06]">
                    <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>Challenges Faced</span>
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.whatILearned && (
                  <div className="p-4 rounded-xl bg-brand-indigo/[0.05] border border-brand-indigo/20">
                    <h5 className="text-xs font-bold text-brand-indigo uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      <span>What I Learned</span>
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.whatILearned}
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end px-6 py-4 bg-[#0a0c12] border-t border-white/[0.08]">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-white transition-colors"
              >
                Close Modal
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
