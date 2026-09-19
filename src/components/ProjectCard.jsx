import React from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  BookOpen, 
  DollarSign 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const projectVisualIcons = {
  'agrismart-ai': Cpu,
  'securevote': ShieldCheck,
  'mediconnect-ai': Activity,
  'learnmate-ai': BookOpen,
  'smart-expense': DollarSign
};

export default function ProjectCard({ project, onSelect, isProminent }) {
  const VisualIcon = projectVisualIcons[project.id] || Terminal;

  return (
    <div
      className={`group rounded-2xl glass-card flex flex-col justify-between overflow-hidden border transition-all duration-300 relative ${
        isProminent
          ? 'border-brand-indigo/30 hover:border-brand-indigo/60 hover:shadow-glow-md'
          : 'border-white/[0.07] hover:border-white/20 hover:shadow-lg'
      }`}
    >
      {/* Top Banner Accent Line */}
      <div 
        className={`h-1 w-full ${
          isProminent
            ? 'bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan'
            : 'bg-white/[0.1] group-hover:bg-brand-indigo/50 transition-colors'
        }`} 
      />

      {/* Visual Tech Mockup / Card Header */}
      <div className="relative p-6 bg-gradient-to-b from-white/[0.03] to-transparent border-b border-white/[0.05]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
              isProminent
                ? 'bg-brand-indigo/20 text-brand-indigo border border-brand-indigo/40'
                : 'bg-white/[0.05] text-slate-300 border border-white/10'
            }`}>
              <VisualIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                {project.technologies[0]} · {project.technologies[1]}
              </span>
              <span className="text-xs font-semibold text-slate-300">
                {project.subtitle}
              </span>
            </div>
          </div>

          {/* Badges */}
          {project.badge && (
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium ${
              isProminent
                ? 'bg-brand-indigo/15 text-brand-indigo border border-brand-indigo/30 shadow-sm'
                : 'bg-white/[0.05] text-slate-400 border border-white/10'
            }`}>
              {project.badge}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-brand-indigo transition-colors flex items-center gap-2">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-brand-indigo" />
        </h3>

        {/* Short description */}
        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        
        {/* Problem Solved Snapshot */}
        <div className="p-3 rounded-xl bg-dark-950/70 border border-white/[0.04]">
          <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider block mb-1">
            Problem Solved
          </span>
          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Key Features Bullet Summary */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider block mb-1">
            Key Features
          </span>
          {project.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Technologies Pills */}
        <div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.02] text-slate-400">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
          {/* Detailed Modal Trigger */}
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-semibold text-brand-indigo hover:text-brand-violet transition-colors flex items-center gap-1 focus:outline-none focus:underline"
          >
            <span>Full Details &amp; Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* External Action Links */}
          <div className="flex items-center gap-1.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              title="GitHub Repository"
              aria-label={`${project.title} GitHub Source`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              title="Live Demo"
              aria-label={`${project.title} Live Demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
