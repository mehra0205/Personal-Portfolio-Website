import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-black border-t border-emerald-500/20 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Rohan Mehra. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed with passion for creating exceptional user experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;