import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function GlassCard({ children, className, hover = false }) {
  const baseClass = 'bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-xl p-6 transition-all duration-300';

  if (hover) {
    return (
      <motion.div
        className={clsx(baseClass, className, 'hover:border-indigo-500/30 hover:bg-indigo-500/5')}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={clsx(baseClass, className)}>
      {children}
    </div>
  );
}
