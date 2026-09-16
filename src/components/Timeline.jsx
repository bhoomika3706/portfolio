import React from 'react';
import { timelineData } from '../data/portfolioData';

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 border-t border-dark-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-roseAccent-400 block mb-2">05. Growth</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Milestone Timeline</h2>
          <p className="text-xs sm:text-sm text-dark-muted mt-1">Year-wise progression demonstrating academic excellence and practical milestones.</p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-dark-border ml-3 md:ml-6 space-y-8">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-dark-bg border-2 border-roseAccent-400 group-hover:bg-roseAccent-400 transition-all" />

              <div className="p-5 rounded-xl bg-dark-card border border-dark-border hover:border-roseAccent-500/30 transition-all glow-card">
                <span className="text-xs font-mono font-bold text-roseAccent-300 px-2 py-0.5 rounded bg-roseAccent-500/10 border border-roseAccent-500/20 mb-2 inline-block">
                  {item.year}
                </span>
                <h3 className="text-base font-bold text-white mt-1">{item.title}</h3>
                <div className="text-xs font-medium text-roseAccent-400/90 mb-2">{item.organization}</div>
                <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};