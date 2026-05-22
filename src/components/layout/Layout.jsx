import { useState, useEffect, useRef, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useActiveSection } from '../../hooks/useActiveSection';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import CyberBackground from '../common/CyberBackground';
import Lenis from 'lenis';
import { ThemeContext } from '../../context/ThemeContext';


export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenisRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07, // 0.07 provides a highly visible, smooth glide/inertia scroll effect
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements & Activities', id: 'achievements' },
    { name: 'Contact', id: 'contact' }
  ];

  const sectionIds = navItems.map(item => item.id);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(element, {
          offset: -80, // height of navbar + spacing
          duration: 1.2,
        });
      } else {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="relative z-0 min-h-screen flex flex-col bg-primary-bg text-text-main transition-colors duration-300">
      <CyberBackground />
      {/* Navigation Bar with entrance animation */}
      <motion.header 
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-secondary-bg/75 border-b border-accent-orange/10 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')} 
            className="text-xl md:text-2xl font-bold tracking-wider hover:opacity-80 transition cursor-pointer"
          >
            SATHIYA<span className="text-accent-orange">BALAN</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-accent-orange cursor-pointer"
                >
                  <span className={isActive ? 'text-accent-orange font-semibold drop-shadow-[0_0_8px_rgba(255,90,0,0.5)]' : 'text-neutral-400 hover:text-neutral-200'}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent-orange rounded-full shadow-[0_0_8px_#ff5a00]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            
            {/* Desktop Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-full border border-accent-orange/25 bg-accent-orange/5 text-accent-orange hover:bg-accent-orange/10 hover:shadow-[0_0_15px_rgba(255,90,0,0.2)] transition-all duration-300 cursor-pointer flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>
          </nav>

          {/* Mobile Theme Toggle & Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full border border-accent-orange/20 bg-accent-orange/5 text-accent-orange hover:bg-accent-orange/10 transition cursor-pointer flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-350 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Framer Motion */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-secondary-bg/95 border-b border-accent-orange/10 px-6 py-4 space-y-2 backdrop-blur-md"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`block py-2.5 px-4 rounded-xl text-sm font-semibold transition ${
                      isActive
                        ? 'bg-accent-orange/10 text-accent-orange border border-accent-orange/20 shadow-[0_0_15px_rgba(255,90,0,0.1)]'
                        : 'text-neutral-450 hover:bg-accent-orange/5 hover:text-accent-orange dark:text-neutral-300 dark:hover:bg-neutral-900/50 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-accent-orange/10 py-8 bg-primary-bg text-neutral-500 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Sathiyabalan. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent-orange transition">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent-orange transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
