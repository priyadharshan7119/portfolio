import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/priyadharshan7119', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/priyadharshan-d', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:priyadharshan7119@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 bg-slate-50 dark:bg-gray-900 border-t border-slate-200/80 dark:border-gray-800/80 transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-gray-400 flex items-center gap-2 transition-colors duration-500 text-sm font-medium"
          >
            © {currentYear} Priyadharshan D | Built with{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.span>{' '}
            using React, Tailwind CSS & Motion
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-slate-200/60 dark:bg-gray-800 text-slate-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 rounded-full transition-all duration-300 border border-slate-300/30 dark:border-gray-700/50 shadow-sm"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
