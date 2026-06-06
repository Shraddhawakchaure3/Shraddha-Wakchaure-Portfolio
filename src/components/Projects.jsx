import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
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
  // Sort by id ascending (order defined in data)
  const sorted = [...projects].sort(
    (a, b) => Number(a.id) - Number(b.id)
  );

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
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="h-full"
                >
                  <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-xl p-6 h-full flex flex-col hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:shadow-[0_0_30px_rgba(79,70,229,0.08)] transition-all duration-300 group">
                    {/* Top row */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono text-slate-600">#{project.id}</span>
                      <div className="flex items-center gap-2">
                        {/* Category label */}
                        <span className="text-[10px] font-mono text-indigo-400/60 uppercase tracking-wider">
                          {project.category}
                        </span>
                        {project.status === 'building' && (
                          <Badge variant="building" label="In Progress" />
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-xl mt-2 group-hover:text-indigo-300 transition-colors duration-300">
                      {project.title}
                    </h3>

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

                    {/* Footer — GitHub + Demo links */}
                    <div className="mt-auto pt-4 mt-4 border-t border-white/[0.05] flex gap-4">
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors duration-200 group/link"
                        >
                          <Github className="w-3.5 h-3.5 group-hover/link:text-indigo-400 transition-colors" />
                          Source Code
                        </a>
                      )}
                      {project.github === '#' && (
                        <span className="text-xs text-slate-600 flex items-center gap-1.5">
                          <Github className="w-3.5 h-3.5" />
                          Private
                        </span>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors duration-200 group/link"
                        >
                          <ExternalLink className="w-3.5 h-3.5 group-hover/link:text-indigo-400 transition-colors" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
