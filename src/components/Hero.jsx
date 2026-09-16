import React from 'react';
import { personalData, statsData } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowRightIcon } from './Icons';

export const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-roseAccent-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border text-xs font-medium text-dark-muted mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-roseAccent-400 animate-pulse" />
          <span className="text-dark-text/90 font-mono tracking-tight">{personalData.status}</span>
        </div>

        {/* Name & Intro */}
        <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-roseAccent-400 mb-3 font-mono">
          Hi, I'm Bhoomika Shivani 👋
        </h2>

        {/* Main Positioning Statement */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto mb-6">
          Building real-world systems at the intersection of{' '}
          <span className="bg-gradient-to-r from-roseAccent-300 via-roseAccent-400 to-[#edd5dc] bg-clip-text text-transparent">
            AI, Web Development & FinTech.
          </span>
        </h1>

        {/* Short Tagline */}
        <p className="text-base sm:text-lg text-dark-muted max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Computer Engineering student with a <span className="text-white font-semibold">9.75 CGPA</span> at SIES GST & Web Development Intern at <span className="text-white font-semibold">Jio Platforms Ltd.</span> Dedicated to crafting scalable software, intuitive interfaces, and algorithmic backends.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-roseAccent-500 hover:bg-roseAccent-600 text-white font-medium text-sm transition-all shadow-lg shadow-roseAccent-900/40 hover:shadow-roseAccent-900/60 hover:-translate-y-0.5"
          >
            <span>Explore Projects</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-dark-card hover:bg-dark-cardHover text-dark-text border border-dark-border hover:border-roseAccent-500/40 font-medium text-sm transition-all"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Social Icons Strip */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-roseAccent-400 hover:bg-dark-cardHover transition-all"
            title="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-roseAccent-400 hover:bg-dark-cardHover transition-all"
            title="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-roseAccent-400 hover:bg-dark-cardHover transition-all"
            title="Email Direct"
          >
            <MailIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-dark-card/70 border border-dark-border text-left hover:border-roseAccent-500/30 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 font-mono text-roseAccent-300">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-dark-text">{stat.label}</div>
              <div className="text-[11px] text-dark-muted mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};