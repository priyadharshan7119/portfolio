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
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', glow: 'rgba(59, 130, 246, 0.15)' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', glow: 'rgba(168, 85, 247, 0.15)' },
    green: { bg: 'bg-green-500', text: 'text-green-600', glow: 'rgba(34, 197, 94, 0.15)' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', glow: 'rgba(249, 115, 22, 0.15)' },
    red: { bg: 'bg-red-500', text: 'text-red-600', glow: 'rgba(239, 68, 68, 0.15)' },
  };

  return (
    <section id="skills" className="py-20 transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-4 text-slate-900 dark:text-white font-bold transition-colors duration-500"
          >
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-slate-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto transition-colors duration-500"
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const colors = colorMap[category.color];
              
              const animationVariants = [
                { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
                { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
              ];
              
              const variant = animationVariants[categoryIndex % animationVariants.length];

              const getGridClass = (index: number) => {
                if (index === 3) return "sm:col-span-1 lg:col-start-2 lg:col-span-2";
                if (index === 4) return "sm:col-span-2 sm:place-self-center sm:w-[calc(50%-0.75rem)] lg:w-full lg:col-start-4 lg:col-span-2";
                return "sm:col-span-1 lg:col-span-2";
              };

              return (
                <motion.div
                  key={category.title}
                  initial={variant.initial}
                  whileInView={variant.animate}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  whileHover={{ scale: 1.02, boxShadow: `0 20px 40px ${colors.glow}` }}
                  className={`p-6 md:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-md hover:shadow-xl border border-slate-200/60 dark:border-gray-700/50 flex flex-col h-full transition-all duration-500 ease-in-out ${getGridClass(categoryIndex)}`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3.5 ${colors.bg} rounded-2xl shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-500">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm md:text-base font-medium text-slate-700 dark:text-gray-300 transition-colors duration-500">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400 transition-colors duration-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2.5 bg-slate-100 dark:bg-gray-700/50 rounded-full overflow-hidden border border-slate-200/40 dark:border-gray-600/30 transition-all duration-500">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
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
