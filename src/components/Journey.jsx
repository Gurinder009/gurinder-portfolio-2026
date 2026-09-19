import React from 'react';
import { 
  Milestone, 
  GitCommit, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { journeyTimeline } from '../data/journeyData';

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative bg-dark-900/50 border-t border-white/[0.04]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-semibold mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Honest Fresher Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learning &amp; <span className="text-gradient-brand">Development Journey</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            As an enthusiastic fresher, my experience is shaped by rigorous academic study, continuous self-directed learning, and building end-to-end full-stack software projects.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Central Vertical Connector Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-indigo via-brand-violet to-brand-cyan/20" />

          <div className="space-y-12">
            {journeyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-brand-indigo flex items-center justify-center text-brand-indigo z-10 shadow-glow-sm">
                    <span className="text-[10px] font-mono font-bold">{item.phase}</span>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2rem)]">
                    <div className="glass-card glass-card-hover p-5 sm:p-6 rounded-2xl border border-white/[0.08] relative group">
                      
                      {/* Top Meta Line */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-brand-indigo/15 text-brand-indigo border border-brand-indigo/30">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {item.timeframe}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-indigo transition-colors mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Skills Acquired */}
                      <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                        {item.skillsAcquired.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.05]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for other half on desktop */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
