import React from 'react';
import { experienceData } from '../data/portfolioData';
import { CheckIcon } from './Icons';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-dark-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-roseAccent-400 block mb-2">04. Career</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience</h2>
          <p className="text-xs sm:text-sm text-dark-muted mt-1">Professional internship experience and enterprise web development.</p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-roseAccent-500/40 transition-all glow-card"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <div className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded bg-roseAccent-500/10 text-roseAccent-300 border border-roseAccent-500/20 mb-2">
                    {exp.type}
                  </div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <div className="text-sm font-semibold text-roseAccent-400">{exp.company}</div>
                </div>

                <div className="text-xs font-mono text-dark-muted md:text-right">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-dark-muted mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2 mb-5">
                {exp.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start text-xs sm:text-sm text-dark-text/90">
                    <CheckIcon className="w-4 h-4 text-roseAccent-400 mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dark-border/60">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-surface border border-dark-border text-dark-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};