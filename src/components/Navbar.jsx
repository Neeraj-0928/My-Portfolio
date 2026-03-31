import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-6'
    }`}>
      <div className={`max-w-7xl mx-auto px-6 md:px-12`}>
        <div className={`glass rounded-2xl md:rounded-[2rem] px-6 md:px-10 py-3 md:py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'shadow-2xl shadow-slate-200/50 border-white/60 bg-white/60' : 'border-transparent bg-transparent'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase transition-transform duration-300 group-hover:scale-105">
              Neeraj<span className="text-[var(--color-primary)]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-[var(--color-primary)] relative group ${
                  location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-slate-600'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link
              to="/resume"
              className="px-6 py-2.5 rounded-xl bg-[var(--color-primary)] text-white font-bold text-sm uppercase tracking-widest transition-all hover:bg-[var(--color-primary-hover)] shadow-lg shadow-cyan-500/20 hover:scale-105"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-3xl text-slate-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white/95 backdrop-blur-2xl z-[1001] shadow-2xl flex flex-col p-12 border-l border-slate-100"
          >
            <button
              className="absolute top-8 right-8 text-4xl text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>

            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-black uppercase tracking-tighter transition-colors ${
                      location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-slate-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
              >
                <Link
                  to="/resume"
                  className="inline-block mt-4 px-10 py-5 rounded-2xl bg-[var(--color-primary)] text-white font-black text-xl uppercase tracking-widest text-center shadow-2xl shadow-cyan-500/20"
                >
                  Download Resume
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
