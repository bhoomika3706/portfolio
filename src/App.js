import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Timeline } from './components/Timeline';
import { Certifications } from './components/Certifications';
import { Creative } from './components/Creative';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text selection:bg-roseAccent-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Timeline />
        <Certifications />
        <Creative />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;