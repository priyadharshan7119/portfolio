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
    <footer className="py-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
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
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
