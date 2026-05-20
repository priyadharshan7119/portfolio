import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-slate-50/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-slate-200/40 dark:border-gray-800/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <motion.div
              className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Terminal size={20} strokeWidth={2.5} />
            </motion.div>
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500">
              Priyadharshan D
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative transition-colors duration-500 ease-in-out ${
                  activeSection === link.id
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-200/70 dark:bg-gray-800 text-slate-800 dark:text-gray-200 hover:bg-slate-300/80 dark:hover:bg-gray-700 transition-all duration-500 ease-in-out border border-slate-300/30 dark:border-gray-700/50 shadow-sm"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-200/70 dark:bg-gray-800 text-slate-800 dark:text-gray-200 hover:bg-slate-300/80 dark:hover:bg-gray-700 transition-all duration-500 ease-in-out border border-slate-300/30 dark:border-gray-700/50 shadow-sm"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 dark:text-gray-300 p-1.5 transition-colors duration-500"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-slate-50/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-slate-200/50 dark:border-gray-800/80 rounded-b-2xl shadow-xl mt-2 transition-all duration-500 ease-in-out"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`flex items-center space-x-4 px-6 py-4 transition-all duration-500 ease-in-out ${
                      activeSection === link.id
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-900/20 font-bold'
                        : 'text-slate-700 dark:text-gray-300 hover:bg-slate-100/50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <span className="text-lg">{link.label}</span>
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeIndicatorMobile"
                        className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
