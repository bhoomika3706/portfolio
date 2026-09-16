import React from 'react';
import { aboutData } from '../data/portfolioData';
import { CodeIcon, TerminalIcon, TrendingUpIcon, PaletteIcon } from './Icons';

export const About = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'code': return <CodeIcon className="w-5 h-5 text-roseAccent-400" />;
      case 'terminal': return <TerminalIcon className="w-5 h-5 text-roseAccent-400" />;
      case 'trending': return <TrendingUpIcon className="w-5 h-5 text-roseAccent-400" />;
      default: return <PaletteIcon className="w-5 h-5 text-roseAccent-400" />;
    }
  };

  return (
    <section id="about" className="py-20 border-t border-dark-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-roseAccent-400 block mb-2">01. Overview</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About Me</h2>
        </div>

        {/* Bio & Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          {/* Main Story Paragraph */}
          <div className="md:col-span-1 space-y-4 text-dark-muted text-sm leading-relaxed">
            <p className="text-white font-medium text-base leading-snug">
              Computer Engineering student with a strong academic record and hands-on experience in developing and deploying full-stack web applications.
            </p>
            <p>
              Pursuing a B.Tech in Computer Engineering with a Minor in Management at SIES Graduate School of Technology, Nerul (CGPA: 9.75).
            </p>
            <p>
              Passionate about building scalable, user-centric software with a strong interest in Full-Stack Development, Machine Learning, and Financial Technology.
            </p>
            
            {/* Languages Known Badges */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-white mb-2 uppercase tracking-wider font-mono">Languages Known</div>
              <div className="flex flex-wrap gap-1.5">
                {aboutData.languages.map((lang) => (
                  <span key={lang} className="text-xs px-2.5 py-1 rounded bg-dark-card border border-dark-border text-dark-text font-mono">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-dark-card/60 border border-dark-border hover:border-roseAccent-500/40 transition-all glow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center mb-3">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{pillar.title}</h3>
                <p className="text-xs text-dark-muted leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Highlight Card */}
        <div className="p-6 rounded-2xl bg-dark-card/40 border border-dark-border">
          <h3 className="text-sm font-mono uppercase tracking-wider text-roseAccent-400 mb-4">Academic Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-dark-border/70">
            {aboutData.education.map((edu, idx) => (
              <div key={idx} className={`${idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}>
                <div className="text-xs font-mono text-roseAccent-300 font-semibold mb-1">{edu.score}</div>
                <h4 className="text-sm font-bold text-white mb-1">{edu.degree}</h4>
                <div className="text-xs text-dark-text mb-1">{edu.institution}</div>
                <div className="text-[11px] text-dark-muted font-mono">{edu.period}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};