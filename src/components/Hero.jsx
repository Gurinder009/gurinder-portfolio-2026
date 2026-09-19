import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('developer');

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand-indigo/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-brand-violet/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo text-xs font-semibold mb-6 backdrop-blur-sm shadow-sm animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 -ml-3.5 rounded-full bg-emerald-400" />
              <span>B.Tech (AI &amp; ML) · Akal University · Open for Opportunities</span>
            </div>

            {/* Greeting */}
            <p className="text-base sm:text-lg font-medium text-slate-400 mb-2 flex items-center gap-2">
              <span>Hi, I'm</span>
              <span className="text-white font-bold tracking-tight text-xl sm:text-2xl font-mono text-gradient">
                {personalInfo.name}
              </span>
              <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              AI &amp; ML Student &amp; <br />
              <span className="text-gradient-brand">Software Developer</span>
            </h1>

            {/* Alternative Supporting Line */}
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mb-4">
              Building intelligent AI solutions, cross-platform Flutter applications, and scalable software systems.
            </p>

            {/* Short Professional Introduction */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-8">
              BTech student in Artificial Intelligence &amp; Machine Learning at Akal University (SGPA 8.24). Skilled in Python, C++, Flutter, FastAPI, and machine learning, with production institutional tools recognized and adopted by the university.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-blue text-white shadow-glow-md hover:shadow-glow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/10 hover:border-brand-indigo/50 transition-all duration-200 shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-brand-indigo" />
                <span>View / Download Resume</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08] w-full max-w-lg">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                Connect:
              </span>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.socialLinks.rawEmail}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-rose-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Interactive Developer Workspace Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Decorative background glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-indigo/30 via-brand-violet/20 to-brand-cyan/30 rounded-2xl blur-xl opacity-75 -z-10 group-hover:opacity-100 transition duration-500" />

              {/* IDE / Tech Card */}
              <div className="w-full rounded-2xl bg-[#0e1118]/95 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0c12] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  
                  {/* File Tabs */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab('developer')}
                      className={`px-3 py-1 rounded-md text-xs font-mono transition-colors flex items-center gap-1.5 ${
                        activeTab === 'developer'
                          ? 'bg-[#151924] text-brand-indigo border border-white/[0.08]'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Code2 className="w-3 h-3" />
                      <span>Developer.ts</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('stack')}
                      className={`px-3 py-1 rounded-md text-xs font-mono transition-colors flex items-center gap-1.5 ${
                        activeTab === 'stack'
                          ? 'bg-[#151924] text-brand-cyan border border-white/[0.08]'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Layers className="w-3 h-3" />
                      <span>Stack.json</span>
                    </button>
                  </div>

                  <span className="text-[10px] text-slate-400 font-mono">UTF-8</span>
                </div>

                {/* Window Code Content */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto select-none">
                  {activeTab === 'developer' ? (
                    <div className="space-y-1">
                      <p className="text-slate-500">// Candidate Profile Snapshot</p>
                      <p>
                        <span className="text-brand-violet">const</span>{' '}
                        <span className="text-yellow-300">engineer</span>:{' '}
                        <span className="text-emerald-400">StudentProfile</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">name:</span>{' '}
                        <span className="text-emerald-300">"{personalInfo.name}"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">education:</span> &#123;
                      </p>
                      <p className="pl-8">
                        <span className="text-slate-400">degree:</span>{' '}
                        <span className="text-emerald-300">"B.Tech (AI &amp; ML)"</span>,
                      </p>
                      <p className="pl-8">
                        <span className="text-slate-400">institution:</span>{' '}
                        <span className="text-emerald-300">"Akal University"</span>,
                      </p>
                      <p className="pl-8">
                        <span className="text-slate-400">sgpa:</span>{' '}
                        <span className="text-amber-300">8.24</span>,
                      </p>
                      <p className="pl-8">
                        <span className="text-slate-400">graduation:</span>{' '}
                        <span className="text-emerald-300">"May 2027"</span>,
                      </p>
                      <p className="pl-4">&#125;,</p>
                      <p className="pl-4">
                        <span className="text-slate-400">targetRoles:</span> [
                      </p>
                      <p className="pl-8 text-cyan-300">
                        "Software Developer", "AI/ML Engineer", "Flutter Developer", "Web Developer"
                      </p>
                      <p className="pl-4">],</p>
                      <p className="pl-4">
                        <span className="text-slate-400">honors:</span>{' '}
                        <span className="text-amber-300">"Appreciation Letter (Akal Univ)"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">location:</span>{' '}
                        <span className="text-emerald-300">"{personalInfo.location}"</span>
                      </p>
                      <p>&#125;;</p>
                      <div className="pt-2 text-slate-500">
                        <span className="text-emerald-400 font-bold">✓</span> Compiled 0 errors. Verified Resume Data.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1 text-slate-300">
                      <p className="text-slate-500">// Verified Technical Stack</p>
                      <p>&#123;</p>
                      <p className="pl-4">
                        <span className="text-cyan-400">"ai_and_ml"</span>: [
                        <span className="text-emerald-300">"Machine Learning"</span>,{' '}
                        <span className="text-emerald-300">"FastAPI"</span>,{' '}
                        <span className="text-emerald-300">"AI Agents"</span>
                        ],
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-400">"mobile_and_cloud"</span>: [
                        <span className="text-emerald-300">"Flutter"</span>,{' '}
                        <span className="text-emerald-300">"Firebase Firestore"</span>,{' '}
                        <span className="text-emerald-300">"Dart"</span>
                        ],
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-400">"languages"</span>: [
                        <span className="text-emerald-300">"Python"</span>,{' '}
                        <span className="text-emerald-300">"C/C++"</span>,{' '}
                        <span className="text-emerald-300">"SQL"</span>,{' '}
                        <span className="text-emerald-300">"JavaScript"</span>
                        ],
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-400">"deployedProjects"</span>: [
                        <span className="text-amber-300">"AgriSmart AI"</span>,{' '}
                        <span className="text-amber-300">"InteractED"</span>,{' '}
                        <span className="text-amber-300">"Akal Student Support"</span>
                        ]
                      </p>
                      <p>&#125;</p>
                    </div>
                  )}
                </div>

                {/* Floating Micro-Badge */}
                <div className="px-5 py-3 bg-[#0a0c12]/80 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>5 Capstone Projects Ready</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">Git Clean ●</span>
                </div>
              </div>

              {/* Decorative floating widget */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-dark-850/90 border border-white/10 p-3 rounded-xl shadow-xl items-center gap-3 backdrop-blur-md animate-float">
                <div className="w-8 h-8 rounded-lg bg-brand-indigo/20 border border-brand-indigo/30 flex items-center justify-center text-brand-indigo">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Clean Code &amp; Scalable</span>
                  <span className="text-[10px] text-slate-400">Modular React Architecture</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
