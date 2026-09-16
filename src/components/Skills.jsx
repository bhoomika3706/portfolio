import React from 'react';
import { skillsData } from '../data/portfolioData';
import { TerminalIcon, CodeIcon, ServerIcon, DatabaseIcon, LayersIcon, TrendingUpIcon } from './Icons';

export const Skills = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'terminal': return <TerminalIcon className="w-4 h-4 text-roseAccent-400" />;
      case 'code': return <CodeIcon className="w-4 h-4 text-roseAccent-400" />;
      case 'server': return <ServerIcon className="w-4 h-4 text-roseAccent-400" />;
      case 'database': return <DatabaseIcon className="w-4 h-4 text-roseAccent-400" />;
      case 'layers': return <LayersIcon className="w-4 h-4 text-roseAccent-400" />;
      default: return <TrendingUpIcon className="w-4 h-4 text-roseAccent-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-dark-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-roseAccent-400 block mb-2">03. Toolkit</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Skills & Competencies</h2>
          <p className="text-xs sm:text-sm text-dark-muted mt-1">Categorized based on core programming, frontend, backend, databases, and financial systems.</p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-dark-card border border-dark-border hover:border-roseAccent-500/30 transition-all glow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center">
                    {getIcon(cat.icon)}
                  </div>
                  <h3 className="text-sm font-bold text-white">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-dark-surface border border-dark-border text-dark-text/90 font-mono hover:border-roseAccent-400/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};