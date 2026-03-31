import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DataVisualizations from './components/DataVisualizations';
import Resume from './components/Resume';
import Contact from './components/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Full Scrolling Home Page */}
        <Route path="/" element={
          <div className="flex flex-col w-full relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <DataVisualizations />
            <Resume />
            <Contact />
          </div>
        } />
        
        {/* Dedicated Pages */}
        <Route path="/about" element={<div className="min-h-screen relative z-10 flex items-center"><About /></div>} />
        <Route path="/skills" element={<div className="min-h-screen relative z-10 flex items-center"><Skills /></div>} />
        <Route path="/projects" element={<div className="min-h-screen relative z-10 flex items-center"><Projects /></div>} />
        <Route path="/insights" element={<div className="min-h-screen relative z-10 flex items-center"><DataVisualizations /></div>} />
        <Route path="/resume" element={<div className="min-h-screen relative z-10 flex items-center"><Resume /></div>} />
        <Route path="/contact" element={<div className="min-h-screen relative z-10 flex items-center"><Contact /></div>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        {/* Top Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-primary)] origin-left z-[100]" 
          style={{ scaleX }} 
        />

        {/* Global Background Layer */}
        <Background />

        <Navbar />

        <main className="flex-1 w-full relative z-10 overflow-hidden">
          <AnimatedRoutes />
        </main>

        <footer className="py-8 text-center text-[var(--color-text-muted)] border-t border-[var(--color-glass-border)] mt-auto relative z-20 glass">
          <p>&copy; {new Date().getFullYear()} Neeraj S. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
