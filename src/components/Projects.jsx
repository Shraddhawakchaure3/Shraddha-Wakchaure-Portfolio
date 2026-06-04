import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Projects() {
  // Sort: featured first, then by id ascending
  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.id.localeCompare(b.id);
  });

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Projects" title="Things I've Built" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {sorted.map((project) => (
              <motion.div key={project.id} variants={item}>
                <GlassCard
                  hover
                  className="border-l-2 border-indigo-500/40 h-full flex flex-col hover:shadow-[0_0_0_1px_rgba(79,70,229,0.25)]"
                >
                  {/* Top row */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-slate-600">#{project.id}</span>
                    {project.status === 'building' && (
                      <Badge variant="building" label="In Progress" />
                    )}
                  </div>

                  {/* Category */}
                  <span className="text-xs font-mono text-indigo-400 mt-1">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-bold text-xl mt-2">{project.title}</h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mt-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="muted" label={t} />
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-4 mt-4 border-t border-white/[0.05] flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
