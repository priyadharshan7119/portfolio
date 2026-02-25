import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Download, FileText } from 'lucide-react';

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8"
          >
            <FileText size={40} className="text-blue-600 dark:text-blue-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white"
          >
            My <span className="text-blue-600 dark:text-blue-400">Resume</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Download my resume to know more about my education, skills, and projects. It includes detailed information about my technical expertise and academic achievements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"

              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-lg text-lg font-medium"
            >
              <Download size={24} />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all text-lg font-medium"
            >
              <FileText size={24} />
              View Online
            </motion.a>
          </motion.div>

          {/* Resume Highlights */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                BE CSE
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Computer Science Engineering
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.85, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                10+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Technical Skills
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                4+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Major Projects
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
