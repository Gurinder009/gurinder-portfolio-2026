import React from 'react';
import { Award, Trophy, BookOpen } from 'lucide-react';
import { achievementsList } from '../data/achievementsData';

const iconMap = {
  Award,
  Trophy,
  BookOpen
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative bg-dark-950 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; <span className="text-gradient-brand">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Verified course certifications, hackathons, and academic milestones. Easily customizable with your certificates.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsList.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.06]">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white shadow-sm`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Items list */}
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-3.5 rounded-xl bg-dark-900/80 border border-white/[0.05] hover:border-brand-indigo/30 transition-all"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-xs font-semibold text-slate-200 leading-snug">
                            {item.title}
                          </h4>
                        </div>

                        <p className="text-[11px] text-brand-indigo font-medium">
                          {item.issuer}
                        </p>

                        {item.description && (
                          <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-2 pt-2 border-t border-white/[0.03]">
                          <span>{item.date}</span>
                          <span className="text-emerald-400 text-[10px] font-sans flex items-center gap-1 font-medium">
                            Verified
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
