import React from 'react';
import { blogData } from '../data/portfolioData';
import { ArrowRightIcon } from './Icons';

export const Blog = () => {
  return (
    <section id="blog" className="py-20 border-t border-dark-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-roseAccent-400 block mb-2">08. Thoughts & Writing</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Articles & Insights</h2>
            <p className="text-xs sm:text-sm text-dark-muted mt-1">Explorations in software engineering, client-side caching, and quantitative business logic.</p>
          </div>
          <span className="text-xs font-mono text-dark-muted">Placeholder for technical blogs</span>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="p-5 rounded-2xl bg-dark-card border border-dark-border hover:border-roseAccent-500/40 transition-all glow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-dark-muted mb-3">
                  <span className="text-roseAccent-300">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug hover:text-roseAccent-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-dark-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-surface border border-dark-border text-dark-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-roseAccent-400 hover:text-roseAccent-300 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};