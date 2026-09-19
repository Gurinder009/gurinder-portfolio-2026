import React from 'react';
import { 
  GitFork, 
  Code2, 
  FolderGit2, 
  Layers, 
  Terminal, 
  ExternalLink, 
  CheckCircle,
  GitPullRequest
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function GithubActivity() {
  const cards = [
    {
      title: "Active Repositories",
      description: "Building responsive frontends, modular REST APIs, and AI integrations version-controlled with Git.",
      icon: FolderGit2,
      tag: "Version Control",
      metric: "15+ Repos"
    },
    {
      title: "Featured Projects",
      description: "Five practical engineering systems built including AgriSmart AI, InteractED, Akal Student Support, and institutional tools.",
      icon: Code2,
      tag: "Full-Stack",
      metric: "5 Systems"
    },
    {
      title: "Core Technologies",
      description: "Hands-on codebase implementation with React.js, JavaScript (ES6+), Node.js, Python, and SQL/NoSQL databases.",
      icon: Layers,
      tag: "Ecosystem",
      metric: "12+ Techs"
    },
    {
      title: "Open Source & Learning",
      description: "Actively studying modern open-source repositories, developer documentation, and contributing to personal projects.",
      icon: GitPullRequest,
      tag: "Community",
      metric: "Continuous"
    },
  ];

  return (
    <section className="py-20 relative bg-dark-900/60 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-semibold mb-3">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Codebase &amp; Activity</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Developer Activity &amp; Open Source
              </h3>
              <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-xl">
                I maintain clean, documented Git repositories with structured commit histories and component-driven modular architectures.
              </p>
            </div>

            {/* Direct GitHub Profile Link */}
            <div>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/10 hover:border-brand-indigo/50 transition-all duration-200 shadow-sm group"
              >
                <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Visit My GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.05] hover:border-brand-indigo/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {c.metric}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-brand-indigo transition-colors">
                    {c.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
