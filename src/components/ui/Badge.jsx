import clsx from 'clsx';

const variants = {
  default:  'bg-white/5 text-slate-300 border border-white/10',
  accent:   'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20',
  muted:    'bg-transparent text-slate-500 border border-white/5',
  building: 'bg-amber-500/10 text-amber-300 border border-amber-500/20',
};

export default function Badge({ label, variant = 'default' }) {
  return (
    <span
      className={clsx(
        'px-2.5 py-0.5 text-xs rounded-full font-mono inline-flex items-center',
        variants[variant] || variants.default
      )}
    >
      {variant === 'building' && (
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-slow mr-1.5" />
      )}
      {label}
    </span>
  );
}
