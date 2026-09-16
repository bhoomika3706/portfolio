import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { GitHubIcon, ExternalLinkIcon, CheckIcon } from './Icons';

const categories = ["All", "Full-Stack", "Algorithms", "Python", "Frontend"];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 border-t border-dark-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-roseAccent-400 block mb-2">02. Selected Work</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Projects</h2>
            <p className="text-xs sm:text-sm text-dark-muted mt-1">Real-world applications built with modern frameworks and practical problem-solving.</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-dark-card border border-dark-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === cat
                    ? 'bg-roseAccent-500/20 text-roseAccent-300 border border-roseAccent-500/30'
                    : 'text-dark-muted hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-dark-card border border-dark-border p-6 flex flex-col justify-between glow-card relative group"
            >
              <div>
                {/* Header Tag and Links */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-roseAccent-500/10 text-roseAccent-300 border border-roseAccent-500/20">
                    {project.tag}
                  </span>

                  <div className="flex items-center space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-dark-muted hover:text-white hover:bg-dark-surface transition-colors"
                        title="View Source on GitHub"
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-dark-muted hover:text-roseAccent-300 hover:bg-dark-surface transition-colors"
                        title="Open Live Preview"
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-roseAccent-300 transition-colors mb-2.5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-dark-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Highlights */}
                {project.highlights && (
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start text-xs text-dark-text/90">
                        <CheckIcon className="w-3.5 h-3.5 text-roseAccent-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-dark-border/60 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
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