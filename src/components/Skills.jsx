import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Shield, Cpu, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';

const iconMap = { Code2, Layout, Server, Database, Shield, Cpu, Wrench };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Skills() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Technical Skills" title="Tools of the Trade" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
            {skillCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <motion.div key={category.name} variants={item}>
                  <GlassCard hover className="border-l-2 border-indigo-500/40 h-full">
                    {/* Header */}
                    <div className="flex items-center gap-2.5 mb-4">
                      {Icon && <Icon className="w-4 h-4 text-indigo-400" />}
                      <span className="text-white font-semibold text-sm">{category.name}</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.div key={skill} whileHover={{ scale: 1.05 }}>
                          <Badge label={skill} variant="default" />
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
