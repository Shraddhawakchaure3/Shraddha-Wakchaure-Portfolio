import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3">
        <span className="w-8 h-px bg-indigo-500" />
        <span className="text-xs tracking-[0.2em] uppercase text-indigo-400 font-mono">
          {eyebrow}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-3">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-slate-400 mt-3 text-sm leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
