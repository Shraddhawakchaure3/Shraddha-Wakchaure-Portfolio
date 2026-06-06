import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Trophy, Shield } from 'lucide-react';
import { timeline } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';

const typeIcons = {
  Internship: Briefcase,
  'Industry Program': GraduationCap,
  Hackathon: Trophy,
  Security: Shield,
};

function TimelineNode({ index, total }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Glowing node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative z-10"
      >
        <div className="w-4 h-4 rounded-full bg-indigo-500 ring-[6px] ring-indigo-500/20" />
        <div className="absolute inset-0 w-4 h-4 rounded-full bg-indigo-400 animate-ping opacity-20" />
      </motion.div>
    </div>
  );
}

function TimelineEntry({ entry, index, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = typeIcons[entry.type] || Briefcase;

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr] md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8">
      {/* Left side (content on even, empty on odd — desktop) */}
      <div className={`hidden md:flex ${index % 2 === 0 ? 'justify-end' : ''}`}>
        {index % 2 === 0 ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-md"
          >
            <TimelineCard entry={entry} Icon={Icon} />
          </motion.div>
        ) : (
          <div />
        )}
      </div>

      {/* Center node + line */}
      <div className="hidden md:flex flex-col items-center">
        <TimelineNode index={index} total={total} />
        {index < total - 1 && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-px bg-gradient-to-b from-indigo-500/40 to-transparent flex-1"
          />
        )}
      </div>

      {/* Right side (content on odd, empty on even — desktop) */}
      <div className={`hidden md:flex ${index % 2 !== 0 ? '' : ''}`}>
        {index % 2 !== 0 ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-md"
          >
            <TimelineCard entry={entry} Icon={Icon} />
          </motion.div>
        ) : (
          <div />
        )}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden relative pl-10">
        {/* Left line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 to-transparent" />
        {/* Node */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="absolute left-0 top-6 z-10"
        >
          <div className="w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <TimelineCard entry={entry} Icon={Icon} />
        </motion.div>
      </div>
    </div>
  );
}

function TimelineCard({ entry, Icon }) {
  return (
    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-xl p-6 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
            <Icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm leading-snug">{entry.title}</h3>
            <p className="text-indigo-300 text-xs font-mono mt-0.5">{entry.organization}</p>
          </div>
        </div>
        <Badge variant="accent" label={entry.type} />
      </div>

      {/* Period */}
      <div className="mt-3">
        <span className="text-xs font-mono text-slate-500">{entry.period}</span>
      </div>

      {/* Bullets */}
      <ul className="mt-3 space-y-2">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
            <span className="text-indigo-500 mt-1.5 shrink-0">›</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      {entry.tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/[0.05]">
          {entry.tech.map((t) => (
            <Badge key={t} variant="muted" label={t} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked & Learned"
        />

        {/* Timeline */}
        <div className="mt-16 space-y-4 md:space-y-0">
          {timeline.map((entry, i) => (
            <TimelineEntry
              key={i}
              entry={entry}
              index={i}
              total={timeline.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
