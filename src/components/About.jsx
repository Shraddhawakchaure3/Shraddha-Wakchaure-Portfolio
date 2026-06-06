import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, animate, useInView } from 'framer-motion';
import { personalInfo, education, stats } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';

function AnimatedCounter({ stat }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, stat.value, {
        duration: 1.8,
        ease: 'easeOut',
      });
      return () => controls.stop();
    }
  }, [isInView, count, stat.value]);

  useEffect(() => {
    const unsubscribe = count.on('change', (v) => {
      setDisplay(v);
    });
    return unsubscribe;
  }, [count]);

  const formattedCount = stat.decimals > 0
    ? display.toFixed(stat.decimals)
    : Math.round(display).toString();

  return (
    <GlassCard>
      <div ref={ref}>
        <div className="text-3xl font-bold text-white font-mono">
          {stat.prefix}{formattedCount}{stat.suffix}
        </div>
        <div className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-2">
          {stat.label}
        </div>
      </div>
    </GlassCard>
  );
}

export default function About() {
  const focusAreas = [
    'Software Engineering',
    'Full Stack Development',
    'Backend Development',
    'Cybersecurity',
    'System Design',
    'Problem Solving',
  ];

  // Split bio into paragraphs for better rendering
  const bioParagraphs = personalInfo.bio.split('\n\n');

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="About Me" title="Code. Security. Impact." />

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {/* Left Column — Bio & Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Bio — rendered as separate paragraphs */}
            <div className="space-y-4">
              {bioParagraphs.map((para, i) => (
                <p key={i} className="text-slate-400 text-sm leading-7">
                  {para}
                </p>
              ))}
            </div>

            {/* Focus Areas */}
            <p className="text-xs uppercase tracking-widest text-slate-600 mt-8 mb-3 font-mono">
              Focus Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge key={area} label={area} variant="default" />
              ))}
            </div>
          </motion.div>

          {/* Right Column — Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs uppercase tracking-widest text-slate-600 mb-4 font-mono">
              Education
            </p>
             <div className="space-y-3">
              {education.map((edu, i) => (
                <GlassCard key={i} hover className="border-l-2 border-indigo-500/40 hover:border-l-indigo-400 group">
                  <p className="text-white font-semibold text-sm">{edu.institution}</p>
                  <p className="text-slate-400 text-xs mt-1">{edu.degree}</p>
                  <div className="flex justify-between mt-3">
                    <span className="text-xs font-mono text-indigo-300">{edu.period}</span>
                    <span className="text-xs font-mono text-slate-400">{edu.grade}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <AnimatedCounter key={i} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
