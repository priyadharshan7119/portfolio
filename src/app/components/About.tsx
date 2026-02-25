import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import profileImage from '../../assets/image.jpg';


export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-16 text-gray-900 dark:text-white"
          >
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
              >
            <img
                src={profileImage}
                alt="Priyadharshan D"
                className="w-full h-full object-cover"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Bio Content */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I am a <span className="font-semibold text-blue-600 dark:text-blue-400">BE CSE graduate</span> with strong programming, web development, flutter development and problem-solving skills.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I build scalable web and mobile applications using modern technologies like MongoDB, Express.js, React.js, Node.js, and Flutter. I enjoy solving real-world problems through clean, efficient code and innovative solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I am eager to contribute to meaningful software solutions and grow as a developer in a collaborative team environment.
              </motion.p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                >
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Problems Solved</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                >
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projects Built</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
