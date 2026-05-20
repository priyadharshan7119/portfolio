import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import profileImage from '../../assets/Photo.jpeg';


export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800/30 transition-all duration-500 ease-in-out">
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
            className="text-4xl md:text-5xl text-center mb-16 text-slate-900 dark:text-white font-bold transition-colors duration-500"
          >
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl"
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
            <div className="space-y-6 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-slate-700 dark:text-gray-300 leading-relaxed transition-colors duration-500"
              >
                I am a <span className="font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-500">BE CSE graduate</span> with strong programming, web development, flutter development and problem-solving skills.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg text-slate-700 dark:text-gray-300 leading-relaxed transition-colors duration-500"
              >
                I build scalable web and mobile applications using modern technologies like MongoDB, Express.js, React.js, Node.js, and Flutter. I enjoy solving real-world problems through clean, efficient code and innovative solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base md:text-lg text-slate-700 dark:text-gray-300 leading-relaxed transition-colors duration-500"
              >
                I am eager to contribute to meaningful software solutions and grow as a developer in a collaborative team environment.
              </motion.p>

              <div className="grid grid-cols-2 gap-4 pt-4 max-w-md mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-5 bg-slate-50/80 dark:bg-gray-800/70 rounded-2xl shadow-md border border-slate-200/50 dark:border-gray-700/60 transition-all duration-500 ease-in-out"
                >
                  <p className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-500">100+</p>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-gray-400 transition-colors duration-500 font-medium">Problems Solved</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-5 bg-slate-50/80 dark:bg-gray-800/70 rounded-2xl shadow-md border border-slate-200/50 dark:border-gray-700/60 transition-all duration-500 ease-in-out"
                >
                  <p className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-500">5+</p>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-gray-400 transition-colors duration-500 font-medium font-medium">Projects Built</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
