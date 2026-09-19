import React, { useState } from 'react';
import { 
  Layout, 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Layers, 
  Check, 
  Sparkles,
  Zap,
  Smartphone
} from 'lucide-react';
import { skillsCategories } from '../data/skillsData';

const categoryIcons = {
  aiml: Sparkles,
  mobile: Smartphone,
  programming: Code,
  'backend-cloud': Server,
  tools: Wrench,
  frontend: Layout,
  backend: Server,
  database: Database,
  other: Cpu,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-dark-950">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-gradient-brand">Expertise</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            A comprehensive overview of programming languages, modern frameworks, backend systems, and development tools I work with.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-brand-indigo to-brand-violet text-white shadow-glow-sm'
                  : 'bg-white/[0.04] text-slate-400 hover:text-slate-200 hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              All Categories
            </button>
            {skillsCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Layers;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-indigo to-brand-violet text-white shadow-glow-sm'
                      : 'bg-white/[0.04] text-slate-400 hover:text-slate-200 hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>
                    {cat.id === 'aiml' ? 'AI & ML' :
                     cat.id === 'mobile' ? 'Mobile App' :
                     cat.id === 'programming' ? 'Languages' :
                     cat.id === 'backend-cloud' ? 'Cloud & Backend' :
                     cat.id === 'tools' ? 'Tools & Systems' : cat.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            return (
              <div
                key={category.id}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-indigo/15 border border-brand-indigo/30 flex items-center justify-center text-brand-indigo">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skill Items List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-dark-900/70 border border-white/[0.05] hover:border-brand-indigo/30 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo group-hover:scale-125 transition-transform" />
                            <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                              {skill.name}
                            </span>
                          </div>

                          {/* Descriptive Proficiency Badge (No fake %) */}
                          <span
                            className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md ${
                              skill.level === 'Proficient'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25'
                                : skill.level === 'Working Knowledge'
                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/25'
                                : 'bg-violet-500/10 text-violet-400 border border-violet-500/25'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-400 pl-3.5">
                          {skill.focus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer tag */}
                <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 font-mono">
                    <Check className="w-3 h-3 text-emerald-400" /> Hands-on Project Tested
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
