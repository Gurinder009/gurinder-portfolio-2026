import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message with clean client-side feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 7000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-900/40 border-t border-white/[0.04]">
      {/* Background Accent Glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-brand-indigo/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gradient-brand">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Have an internship opportunity, project collaboration, or question? Send a message or connect directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Pitch Box */}
            <div className="glass-card p-6 rounded-2xl border border-white/[0.07]">
              <h3 className="text-lg font-bold text-white mb-2">
                Let's discuss opportunities
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                I am actively interviewing for software and web developer internship / fresher positions. I respond promptly to recruiter inquiries.
              </p>

              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.socialLinks.rawEmail}`}
                className="glass-card glass-card-hover p-4 rounded-xl border border-white/[0.06] flex items-center gap-3.5 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    {personalInfo.socialLinks.rawEmail}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.socialLinks.phone}`}
                className="glass-card glass-card-hover p-4 rounded-xl border border-white/[0.06] flex items-center gap-3.5 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    {personalInfo.socialLinks.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-4 rounded-xl border border-white/[0.06] flex items-center gap-3.5 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Professional Network
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    LinkedIn Profile
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-4 rounded-xl border border-white/[0.06] flex items-center gap-3.5 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Source Code &amp; Repositories
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    GitHub Profile
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-dark-950/60 border border-white/[0.04] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Based In
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative">
              
              <h3 className="text-lg font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              {/* Success Notification */}
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-400 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">Message Sent Successfully</h4>
                    <p className="text-xs text-emerald-300/90 mt-0.5">
                      Thank you for reaching out! I will review your note and respond as soon as possible.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-white/10 focus:border-brand-indigo focus:ring-brand-indigo/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-white/10 focus:border-brand-indigo focus:ring-brand-indigo/30'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Message / Inquiry <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here (e.g. job details, project inquiry, or interview invite)..."
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-white/10 focus:border-brand-indigo focus:ring-brand-indigo/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-blue text-white shadow-glow-sm hover:shadow-glow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
