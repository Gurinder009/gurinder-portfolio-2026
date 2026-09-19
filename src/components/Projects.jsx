import React, { useState } from 'react';
import { Sparkles, FolderGit2 } from 'lucide-react';
import { projects } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Top 3 prominent featured projects
  const topFeaturedProjects = projects.slice(0, 3);
  // Remaining core engineering projects
  const secondaryProjects = projects.slice(3);

  return (
    <section id="projects" className="py-24 relative bg-dark-900/40 border-t border-white/[0.04]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-5 w-96 h-96 bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-brand">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Real-world full-stack and frontend systems built with clean architectures, practical problem-solving, and scalable code.
          </p>
        </div>

        {/* Top 3 Prominent Projects Grid */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-brand-indigo" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Highlighted Capstone Platforms
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topFeaturedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={handleOpenModal}
                isProminent={true}
              />
            ))}
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Additional Web &amp; AI Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {secondaryProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={handleOpenModal}
                isProminent={false}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
