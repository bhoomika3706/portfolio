import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { MailIcon, PhoneIcon, GitHubIcon, LinkedInIcon, CopyIcon, CheckIcon } from './Icons';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-dark-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-roseAccent-400 block mb-2">09. Get in Touch</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let's Connect</h2>
          <p className="text-xs sm:text-sm text-dark-muted mt-1">Open for full-stack engineering roles, FinTech opportunities, and creative collaborations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Direct Connect Info */}
          <div className="space-y-4">
            
            {/* Email Card with Copy Button */}
            <div className="p-5 rounded-xl bg-dark-card border border-dark-border flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-roseAccent-400">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-dark-muted">Email Direct</div>
                  <a href={`mailto:${personalData.email}`} className="text-sm font-semibold text-white hover:text-roseAccent-300 transition-colors">
                    {personalData.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-dark-surface border border-dark-border text-dark-muted hover:text-white transition-all text-xs flex items-center space-x-1"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-roseAccent-400" />
                    <span className="text-[11px] text-roseAccent-300 font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-dark-card border border-dark-border flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-roseAccent-400">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-dark-muted">Phone Number</div>
                <a href={`tel:${personalData.phone}`} className="text-sm font-semibold text-white hover:text-roseAccent-300 transition-colors">
                  {personalData.phone}
                </a>
              </div>
            </div>

            {/* Location & Social */}
            <div className="p-5 rounded-xl bg-dark-card border border-dark-border">
              <div className="text-[11px] font-mono text-dark-muted mb-2">Location & Social Channels</div>
              <div className="text-sm font-semibold text-white mb-4">{personalData.location}</div>
              
              <div className="flex space-x-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center space-x-2 text-xs font-medium text-dark-text hover:text-white hover:border-roseAccent-400 transition-all"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center space-x-2 text-xs font-medium text-dark-text hover:text-white hover:border-roseAccent-400 transition-all"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="p-6 rounded-2xl bg-dark-card border border-dark-border">
            <h3 className="text-sm font-bold text-white mb-4">Send a Message</h3>
            
            {submitted ? (
              <div className="p-4 rounded-xl bg-roseAccent-500/15 border border-roseAccent-500/30 text-center space-y-2">
                <div className="text-sm font-bold text-roseAccent-300">Thank you for reaching out!</div>
                <div className="text-xs text-dark-text">Your note has been received. I will get back to you shortly.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-dark-muted mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-dark-surface border border-dark-border text-sm text-white placeholder-dark-muted/50 focus:outline-none focus:border-roseAccent-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-dark-muted mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-dark-surface border border-dark-border text-sm text-white placeholder-dark-muted/50 focus:outline-none focus:border-roseAccent-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-dark-muted mb-1.5">Message</label>
                  <textarea
                    required
                    rows="4"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Let's discuss an internship, project, or collaboration..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-dark-surface border border-dark-border text-sm text-white placeholder-dark-muted/50 focus:outline-none focus:border-roseAccent-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-roseAccent-500 hover:bg-roseAccent-600 text-white font-medium text-xs sm:text-sm transition-all shadow-md hover:shadow-roseAccent-900/50"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};