import React from 'react';
import { creativeData } from '../data/portfolioData';
import { PaletteIcon, CameraIcon, SparklesIcon } from './Icons';

export const Creative = () => {
  return (
    <section id="creative" className="py-20 border-t border-dark-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-roseAccent-500/10 border border-roseAccent-500/20 text-roseAccent-300 text-xs font-mono mb-2">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Creative Differentiator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Visual Curation & Creative Work</h2>
          <p className="text-xs sm:text-sm text-dark-muted mt-1">Bridging architectural engineering with visual storytelling, moodboards, and photographic balance.</p>
        </div>

        {/* 2 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creativeData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-roseAccent-500/40 transition-all glow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-roseAccent-500/10 border border-roseAccent-500/20 flex items-center justify-center text-roseAccent-400">
                    {item.icon === 'palette' ? <PaletteIcon className="w-5 h-5" /> : <CameraIcon className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-mono text-roseAccent-300 px-2.5 py-1 rounded bg-dark-surface border border-dark-border">
                    {item.stats}
                  </span>
                </div>

                <span className="text-xs font-mono text-dark-muted uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-dark-muted leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="pt-4 border-t border-dark-border/60 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-surface border border-dark-border text-dark-text/80"
                  >
                    #{tag}
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