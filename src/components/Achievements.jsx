import { motion } from 'framer-motion';
import { Trophy, Award, Users, Shield, BookOpen, Star } from 'lucide-react';
import { achievements } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';

const iconMap = { Trophy, Award, Users, Shield, BookOpen, Star };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Achievements() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Achievements" title="Recognition & Certifications" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {achievements.map((a, i) => {
              const Icon = iconMap[a.icon];
              return (
                <motion.div key={i} variants={item}>
                  <GlassCard hover className="h-full">
                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                        {Icon && <Icon className="w-5 h-5 text-indigo-400" />}
                      </div>
                      <Badge variant="accent" label={a.tag} />
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-sm mt-4">{a.title}</h3>

                    {/* Description */}
                    <p className="text-slate-400 text-xs leading-relaxed mt-2">
                      {a.description}
                    </p>
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
