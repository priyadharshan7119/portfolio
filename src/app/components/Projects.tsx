import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Agro Suggester',
      description: 'Crop prediction web application using MERN stack and machine learning. Helps farmers make informed decisions about crop selection based on soil and weather conditions.',
      technologies: ['React', 'JavaScript', 'CSS', 'MongoDB', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA1NDIwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: 'https://github.com/priyadharshan7119',
      demo: '#',
    },
    {
      title: 'Airbnb Clone',
      description: 'Responsive accommodation listing interface using React. Features advanced filtering, booking system, and interactive maps for seamless user experience.',
      technologies: ['React', 'JavaScript', 'CSS', 'Local Storage'],
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzcwNDY3OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: 'https://github.com/priyadharshan7119',
      demo: '#',
    },
    {
      title: 'Reach Reminder',
      description: 'A geolocation-based mobile application that tracks a user’s travel location in real time. The app alerts the user when they reach their destination by running location monitoring in the background.',
      technologies: ['React', 'JavaScript', 'REST API', 'Node.js', 'CSS'],
      image: 'https://images.unsplash.com/photo-1759488820765-5cf0755965ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDU0MjA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: 'https://github.com/priyadharshan7119',
      demo: '#',
    },
    {
      title: 'Home Service App',
      description: 'A mobile app that helps to book home services such as cleaning, electrical repair, plumbing, and maintenance. The app provides a selecting services, scheduling appointments, and managing service requests.',
      technologies: ['Flutter', 'Dart', 'REST API', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNDczMzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: 'https://github.com/priyadharshan7119',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white"
          >
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            A collection of projects demonstrating my skills in web development and problem-solving
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => {
              // Alternate animation directions
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full"
                >
                {/* Project Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Links overlay - visible on mobile by default, on hover for desktop */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between md:justify-center md:gap-6 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-auto md:right-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-xl flex items-center gap-2"
                    >
                      <Github size={20} className="text-gray-900 dark:text-white" />
                      <span className="md:hidden text-sm font-medium text-gray-900 dark:text-white">Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600/90 backdrop-blur-sm rounded-full shadow-xl flex items-center gap-2"
                    >
                      <ExternalLink size={20} className="text-white" />
                      <span className="md:hidden text-sm font-medium text-white">Live Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 md:line-clamp-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-semibold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-100 dark:border-blue-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Border - Desktop only */}
                <div
                  className="hidden md:block absolute inset-0 border-2 border-blue-600/0 group-hover:border-blue-600/50 rounded-3xl transition-all duration-500 pointer-events-none"
                />
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
