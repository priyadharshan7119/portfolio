import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Download, Code } from 'lucide-react';
import heroImage from '../../assets/image2.jpg';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['CSE Graduate', 'Full Stack Developer', 'Software Developer'];
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (typedText.length > 0) {
          setTypedText(currentRole.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl mb-4 text-gray-900 dark:text-white"
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Priyadharshan D</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-12 mb-4"
          >
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-6"
          >
            I build responsive web applications and love solving real-world problems using code. Currently seeking an entry-level <span className="font-semibold text-blue-600 dark:text-blue-400">Software Developer / Full Stack Developer</span> role.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white rounded-lg transition-colors"
            >
              <Code size={20} />
              View Projects
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/priyadharshan7119"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/priyadharshan-d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <motion.div animate={floatingAnimation} className="relative">
            <img
              src={heroImage}
              alt="Tech illustration"
              className="rounded-2xl shadow-2xl"
            />
            
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg"
            >
              <Code size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
