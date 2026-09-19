import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Layers, 
  MapPin, 
  Sparkles, 
  Compass, 
  Target, 
  CheckCircle 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const iconMap = {
  GraduationCap,
  Code2,
  Layers,
  MapPin
};

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-dark-900/60 border-t border-white/[0.04]">
      {/* Background Subtle Highlights */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-brand">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Passionate about engineering clean web applications that transform ideas into reliable digital experiences.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-6 space-y-5 text-slate-300">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-white/[0.08]">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-indigo via-brand-violet to-brand-cyan" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Target className="w-5 h-5 text-brand-indigo" />
                <span>Passionate Developer &amp; Problem Solver</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
                <p>
                  I am a <strong className="text-white font-semibold">B.Tech (Artificial Intelligence &amp; Machine Learning) student</strong> at Akal University with an <span className="text-amber-300 font-semibold">8.24 SGPA</span>, deeply passionate about building AI-powered solutions, mobile apps, and automated workflows.
                </p>
                
                <p>
                  My engineering background spans across <span className="text-slate-100 font-medium">Python &amp; C++</span>, <span className="text-slate-100 font-medium">Flutter &amp; Dart</span>, <span className="text-slate-100 font-medium">FastAPI &amp; REST APIs</span>, <span className="text-slate-100 font-medium">Firebase Firestore</span>, and <span className="text-slate-100 font-medium">Machine Learning &amp; AI Agents</span>.
                </p>

                <p className="text-slate-400 text-sm">
                  I have built and deployed practical institutional systems including an automated <strong className="text-slate-200">Exam Seating Plan Generator</strong> officially adopted by Akal University (earning an official Appreciation Letter) and co-led development of the university's <strong className="text-slate-200">Student Support App</strong>.
                </p>
              </div>

              {/* Core Qualities Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strong CS fundamentals</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Responsive UI/UX focused</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Rapid learner &amp; adaptable</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ready for internship &amp; full-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Information Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.quickCards.map((card, idx) => {
              const IconComponent = iconMap[card.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-5 rounded-2xl border border-white/[0.07] flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${card.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                      {card.label}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-brand-indigo transition-colors">
                      {card.value}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {card.subtext}
                    </p>
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
