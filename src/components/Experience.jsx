import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';

export default function Experience() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Experience" title="Where I've Worked & Learned" />

        {/* Timeline Container */}
        <div className="relative mt-16">
          {/* Center vertical line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.06] transform -translate-x-1/2 hidden md:block" />

          {experience.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-8 relative"
              >
                {/* Mobile layout */}
                <div className="md:hidden pl-8 relative">
                  {/* Left border line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.06]" />
                  {/* Dot */}
                  <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 transform -translate-x-1/2" />

                  <GlassCard className="border-l-2 border-indigo-500/40">
                    <div className="flex justify-between items-start">
                      <span className="text-white font-bold text-sm">{item.company}</span>
                      <Badge variant="accent" label={item.type} />
                    </div>
                    <p className="text-slate-400 text-sm mt-1">{item.role}</p>
                    <div className="flex gap-4 mt-2">
                      <span className="font-mono text-xs text-indigo-300">{item.period}</span>
                      <span className="text-xs text-slate-500">{item.location}</span>
                    </div>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="muted" label={tag} />
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex items-center">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 transform -translate-x-1/2 z-10" />

                  {/* Card container */}
                  <div className={`w-[45%] ${isLeft ? 'ml-0 mr-auto pr-8' : 'ml-auto mr-0 pl-8'}`}>
                    <GlassCard hover className="border-l-2 border-indigo-500/40">
                      <div className="flex justify-between items-start">
                        <span className="text-white font-bold text-sm">{item.company}</span>
                        <Badge variant="accent" label={item.type} />
                      </div>
                      <p className="text-slate-400 text-sm mt-1">{item.role}</p>
                      <div className="flex gap-4 mt-2">
                        <span className="font-mono text-xs text-indigo-300">{item.period}</span>
                        <span className="text-xs text-slate-500">{item.location}</span>
                      </div>
                      <p className="text-slate-400 text-sm mt-3 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="muted" label={tag} />
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
