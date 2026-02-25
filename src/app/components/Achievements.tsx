// import { useRef } from 'react';
// import { motion, useInView } from 'motion/react';
// import { Award, Code, Trophy, BookOpen } from 'lucide-react';

// export function Achievements() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   const achievements = [
//     {
//       icon: Code,
//       title: '200+ Problems Solved',
//       description: 'Successfully solved over 200 coding problems on platforms like LeetCode and CodeChef',
//       color: 'blue',
//     },
//     {
//       icon: BookOpen,
//       title: 'Full Stack Certification',
//       description: 'Completed comprehensive Full Stack Web Development course with hands-on projects',
//       color: 'green',
//     },
//     {
//       icon: Trophy,
//       title: 'Hackathon Participant',
//       description: 'Participated in college-level hackathons, collaborating on innovative solutions',
//       color: 'purple',
//     },
//     {
//       icon: Award,
//       title: 'AWS Certified',
//       description: 'Earned AWS and Coursera certifications in cloud computing and web technologies',
//       color: 'orange',
//     },
//   ];

//   const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
//     blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', glow: 'shadow-blue-500/20' },
//     green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200', glow: 'shadow-green-500/20' },
//     purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200', glow: 'shadow-purple-500/20' },
//     orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200', glow: 'shadow-orange-500/20' },
//   };

//   return (
//     <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div ref={ref}>
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.7, type: "spring" }}
//             className="text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white"
//           >
//             Achievements & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
//           >
//             Milestones and certifications that showcase my dedication to continuous learning
//           </motion.p>

//           <div className="grid md:grid-cols-2 gap-8">
//             {achievements.map((achievement, index) => {
//               const Icon = achievement.icon;
//               const colors = colorMap[achievement.color];
              
//               // Different reveal patterns
//               const isTopLeft = index === 0;
//               const isTopRight = index === 1;
//               const isBottomLeft = index === 2;
//               const isBottomRight = index === 3;

//               return (
//                 <motion.div
//                   key={achievement.title}
//                   initial={{ 
//                     opacity: 0, 
//                     x: isTopLeft || isBottomLeft ? -100 : 100,
//                     y: isTopLeft || isTopRight ? -50 : 50,
//                     scale: 0.8
//                   }}
//                   animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
//                   transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
//                   whileHover={{ 
//                     y: -10, 
//                     boxShadow: `0 20px 40px ${colors.glow}`,
//                   }}
//                   className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden group"
//                 >
//                   {/* Background Gradient */}
//                   <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-300`} />

//                   {/* Icon */}
//                   <motion.div
//                     whileHover={{ rotate: 360, scale: 1.1 }}
//                     transition={{ duration: 0.6 }}
//                     className={`inline-flex p-4 ${colors.bg} rounded-2xl mb-4`}
//                   >
//                     <Icon className="text-white" size={32} />
//                   </motion.div>

//                   {/* Content */}
//                   <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//                     {achievement.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//                     {achievement.description}
//                   </p>

//                   {/* Decorative Line */}
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={isInView ? { width: '100%' } : {}}
//                     transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
//                     className={`absolute bottom-0 left-0 h-1 ${colors.bg}`}
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Code, Trophy, BookOpen } from 'lucide-react';

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: Award,
      title: 'Full Stack Developer Intern',
      description: 'Worked as a Full Stack Developer Intern at SmartED (Jul 2025 – Sep 2025) building and deploying web applications using the MERN stack.',
      color: 'blue',
    },
     {
      icon: Code,
      title: 'Freelance Developer',
      description: 'Worked as a freelance developer creating web applications and responsive websites for clients using modern technologies like React, Node.js, and MongoDB.',
      color: 'green',
    },

  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', glow: 'shadow-blue-500/20' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200', glow: 'shadow-orange-500/20' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200', glow: 'shadow-purple-500/20' },
    green: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200', glow: 'shadow-orange-500/20' },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white"
          >
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            Professional experience and internship work that helped me develop practical software development skills.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const colors = colorMap[achievement.color];
              
              const isTopLeft = index === 0;
              const isTopRight = index === 1;
              const isBottomLeft = index === 2;
              const isBottomRight = index === 3;

              return (
                <motion.div
                  key={achievement.title}
                  initial={{ 
                    opacity: 0, 
                    x: isTopLeft || isBottomLeft ? -100 : 100,
                    y: isTopLeft || isTopRight ? -50 : 50,
                    scale: 0.8
                  }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: `0 20px 40px ${colors.glow}`,
                  }}
                  className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-300`} />

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 ${colors.bg} rounded-2xl mb-4`}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className={`absolute bottom-0 left-0 h-1 ${colors.bg}`}
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