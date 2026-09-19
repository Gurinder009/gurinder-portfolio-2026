import React, { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import GithubActivity from './components/GithubActivity';
import ResumeCTA from './components/ResumeCTA';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 font-sans selection:bg-brand-indigo/30 selection:text-white relative">
      {/* Top Reading Scroll Indicator */}
      <ScrollProgress />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Education & Coursework */}
        <Education />

        {/* Learning & Development Journey */}
        <Journey />

        {/* Certifications & Achievements */}
        <Achievements />

        {/* Developer Activity / GitHub */}
        <GithubActivity />

        {/* Dedicated Resume CTA */}
        <ResumeCTA onOpenResume={handleOpenResume} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Floating Action */}
      <BackToTop />

      {/* Interactive Resume Preview Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}

export default App;
