import { useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

export default function MagneticButton({ children, className, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };

  const onMouseLeave = () => {
    animate(x, 0, { type: 'spring', stiffness: 200, damping: 20 });
    animate(y, 0, { type: 'spring', stiffness: 200, damping: 20 });
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={`cursor-pointer ${className || ''}`}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
    >
      {children}
    </motion.div>
  );
}
