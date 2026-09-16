import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, GitHubIcon, LinkedInIcon } from './Icons';
import { personalData } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Creative', href: '#creative' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3.5 shadow-lg shadow-black/40' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="group flex items-center space-x-2 text-lg font-bold tracking-tight text-dark-text hover:text-white transition-colors">
          <span className="w-8 h-8 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-roseAccent-400 group-hover:border-roseAccent-500/50 transition-all">
            B
          </span>
          <span>
            Bhoomika<span className="text-roseAccent-400 font-black">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-dark-muted hover:text-roseAccent-300 px-3 py-1.5 rounded-md hover:bg-white/[0.03] transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions & Social */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-dark-muted hover:text-white rounded-lg hover:bg-dark-card transition-all"
            title="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-dark-muted hover:text-white rounded-lg hover:bg-dark-card transition-all"
            title="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-roseAccent-500/15 text-roseAccent-300 border border-roseAccent-500/30 hover:bg-roseAccent-500/25 hover:border-roseAccent-400 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-dark-card border border-dark-border text-dark-muted hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-dark-border px-6 py-5 mt-2 transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-dark-muted hover:text-roseAccent-300 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-dark-border flex items-center justify-between">
              <div className="flex space-x-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-dark-muted hover:text-white rounded-lg bg-dark-card"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-dark-muted hover:text-white rounded-lg bg-dark-card"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-xs font-semibold px-4 py-2 rounded-lg bg-roseAccent-500 text-white"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};