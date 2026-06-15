import { motion } from 'framer-motion';
import {
  Trophy, Award, Shield, BookOpen, Star, Rocket,
  Briefcase, Zap, ExternalLink,
} from 'lucide-react';
import clsx from 'clsx';

const iconMap = { Trophy, Award, Shield, BookOpen, Star, Rocket, Briefcase, Zap };

export default function AchievementCard({ item, index, variant = 'featured' }) {
  const Icon = iconMap[item.icon] || Star;
  const isFeatured = variant === 'featured';

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group"
    >
      <div
        className={clsx(
          'relative h-full flex flex-col rounded-xl p-6 transition-all duration-300',
          'bg-white/[0.03] backdrop-blur-sm border border-white/[0.06]',
          'hover:border-indigo-500/40 hover:bg-indigo-500/[0.04]',
          'hover:shadow-[0_8px_40px_rgba(79,70,229,0.12)]'
        )}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-indigo-500/[0.06] via-transparent to-purple-500/[0.04]" />

        {/* Top row: Icon + Category badge */}
        <div className="relative flex items-start justify-between">
          <div className="w-11 h-11 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 flex items-center justify-center transition-all duration-300">
            <Icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300" />
          </div>
          <span className="px-2.5 py-0.5 text-[10px] rounded-full font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 whitespace-nowrap">
            {isFeatured ? item.category : item.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="relative text-white font-semibold text-sm mt-4 leading-tight">
          {item.title}
        </h3>

        {/* Organization / Issuer */}
        <p className="relative text-indigo-400/70 text-xs font-mono mt-1">
          {isFeatured ? item.organization : item.issuer}
          {!isFeatured && item.issueDate && (
            <span className="text-slate-600 ml-2">· {item.issueDate}</span>
          )}
        </p>

        {/* Status badge (for SIH) */}
        {!isFeatured && item.status && (
          <div className="relative mt-2">
            <span className="px-2 py-0.5 text-[10px] rounded-full font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {item.status}
            </span>
          </div>
        )}

        {/* Description (max 2 lines for featured) */}
        <p
          className={clsx(
            'relative text-slate-400 text-xs leading-relaxed mt-2 flex-grow',
            isFeatured && 'line-clamp-2'
          )}
        >
          {item.description}
        </p>

        {/* Tech chips (full page only) */}
        {!isFeatured && item.tech && item.tech.length > 0 && (
          <div className="relative flex flex-wrap gap-1.5 mt-3">
            {item.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-slate-400 border border-white/[0.06] font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        {isFeatured && item.cta && (
          <div className="relative mt-4 pt-3 border-t border-white/[0.05]">
            {item.ctaUrl ? (
              <a
                href={item.ctaUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors duration-200 font-mono group/link"
              >
                <ExternalLink className="w-3 h-3" />
                <span>{item.cta}</span>
              </a>
            ) : (
              <span className="text-xs text-slate-500 flex items-center gap-1.5 font-mono">
                <ExternalLink className="w-3 h-3" />
                {item.cta}
              </span>
            )}
          </div>
        )}

        {/* CTA for full page */}
        {!isFeatured && item.certUrl && (
          <div className="relative mt-4 pt-3 border-t border-white/[0.05]">
            <a
              href={item.certUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors duration-200 font-mono"
            >
              <ExternalLink className="w-3 h-3" />
              View Certificate →
            </a>
          </div>
        )}

        {/* Credential ID */}
        {!isFeatured && item.credentialId && (
          <p className="relative text-[10px] text-slate-600 font-mono mt-2">
            ID: {item.credentialId}
          </p>
        )}
      </div>
    </motion.div>
  );
}
