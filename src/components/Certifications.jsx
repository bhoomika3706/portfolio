import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { AwardIcon, TerminalIcon, TrendingUpIcon } from './Icons';

export const Certifications = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'terminal': return <TerminalIcon className="w-5 h-5 text-roseAccent-400" />;
      case 'trending': return <TrendingUpIcon className="w-5 h-5 text-roseAccent-400" />;
      default: return <AwardIcon className="w-5 h-5 text-roseAccent-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 border-t border-dark-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-roseAccent-400 block mb-2">06. Credentials</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Certifications & Achievements</h2>
          <p className="text-xs sm:text-sm text-dark-muted mt-1">Recognized validation in software engineering, management, and academic excellence.</p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-dark-card border border-dark-border hover:border-roseAccent-500/40 transition-all glow-card flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center flex-shrink-0">
                {getIcon(cert.icon)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-dark-muted mb-1">
                  <span>{cert.issuer}</span>
                  <span className="text-roseAccent-400">{cert.date}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{cert.title}</h3>
                <p className="text-xs text-dark-muted">{cert.credential}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};