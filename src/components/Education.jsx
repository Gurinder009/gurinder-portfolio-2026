import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Binary, 
  Database, 
  Terminal, 
  Network, 
  Globe, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import { education } from '../data/educationData';

const courseworkIcons = {
  Binary,
  Database,
  Terminal,
  Network,
  Globe,
  Cpu,
  Sparkles,
  ShieldCheck
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-gradient-brand">Coursework</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Undergraduate foundation in core Computer Science, engineering systems, and applied software disciplines.
          </p>
        </div>

        {/* Education Degree Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden group">
            <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-brand-indigo to-brand-violet" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 inline-block mb-2">
                  {education.status}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {education.degree}
                </h3>
                <p className="text-sm sm:text-base text-brand-indigo font-medium mt-1">
                  {education.specialization} · <span className="text-slate-300">{education.currentYear}</span>
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-brand-indigo" />
                  {education.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {education.location}
                </span>
              </div>
            </div>

            {/* Institution Details & Notice */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-dark-900/80 border border-white/[0.05]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  College / Institute
                </span>
                <span className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-indigo" />
                  {education.college}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Affiliated to {education.university}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-dark-900/80 border border-white/[0.05] flex flex-col justify-center">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Academic Focus
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {education.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Relevant Coursework Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-4 h-4 text-brand-indigo" />
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold">
              Relevant Computer Science Coursework
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {education.relevantCoursework.map((course, idx) => {
              const Icon = courseworkIcons[course.icon] || BookOpen;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-dark-850/60 border border-white/[0.06] hover:border-brand-indigo/40 hover:bg-dark-800/60 transition-all duration-200 flex items-center gap-3.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200 group-hover:text-white leading-tight">
                      {course.name}
                    </h5>
                    <span className="text-[10px] font-mono text-slate-400">
                      {course.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
