import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code2, Palette, Server, Database, Wrench } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      color: 'blue',
      skills: [
        { name: 'Java', level: 70 },
        { name: 'JavaScript', level: 72  },
        { name: 'Python', level: 54 },
        { name: 'C', level: 70 },
      ],
    },
    {
      icon: Palette,
      title: 'Frontend',
      color: 'purple',
      skills: [
        { name: 'React', level: 70 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML', level: 70 },
        { name: 'CSS', level: 80 },
        { name: 'Flutter', level: 75 },
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'green',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 70 },
        { name: 'REST APIs', level: 75 },
      ],
    },
    {
      icon: Database,
      title: 'Database',
      color: 'orange',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Concepts',
      color: 'red',
      skills: [
        { name: 'Git', level: 75 },
        { name: 'GitHub', level: 80 },
        { name: 'DSA', level: 60 },
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; glow: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', glow: 'shadow-blue-500/50' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', glow: 'shadow-purple-500/50' },
    green: { bg: 'bg-green-500', text: 'text-green-600', glow: 'shadow-green-500/50' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', glow: 'shadow-orange-500/50' },
    red: { bg: 'bg-red-500', text: 'text-red-600', glow: 'shadow-red-500/50' },
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white"
          >
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const colors = colorMap[category.color];
              
              // Different animation directions for variety
              const animationVariants = [
                { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } },
                { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, rotate: -180 }, animate: { opacity: 1, rotate: 0 } },
              ];
              
              const variant = animationVariants[categoryIndex % animationVariants.length];

              return (
                <motion.div
                  key={category.title}
                  initial={variant.initial}
                  animate={isInView ? variant.animate : {}}
                  transition={{ duration: 0.7, delay: categoryIndex * 0.15 }}
                  whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${colors.glow}` }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 ${colors.bg} rounded-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                            className={`h-full ${colors.bg} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
