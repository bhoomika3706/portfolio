import React from 'react';
import { ArrowUpIcon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-dark-border/60 bg-dark-surface/50 text-xs text-dark-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div>
          <span>© {new Date().getFullYear()} </span>
          <span className="font-semibold text-white">Bhoomika Shivani</span>
          <span>. Built with React & Tailwind CSS.</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="font-mono text-[11px] text-roseAccent-400">Dark Rose Tech Aesthetic</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-dark-card border border-dark-border hover:border-roseAccent-400 text-dark-muted hover:text-white transition-all flex items-center space-x-1"
            title="Scroll to top"
          >
            <ArrowUpIcon className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};