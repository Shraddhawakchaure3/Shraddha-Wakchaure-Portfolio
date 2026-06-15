import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Code2,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';

import { personalInfo, stats } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import MagneticButton from './ui/MagneticButton';

export default function Hero() {
  const { displayText } = useTypewriter(
    personalInfo.roles,
    80,
    50,
    2000
  );

  const scrollTo = (selector) => {
    document.querySelector(selector)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.social.github,
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: personalInfo.social.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Code2,
      href: personalInfo.social.leetcode,
      label: 'LeetCode',
    },
    {
      icon: ExternalLink,
      href: personalInfo.social.tryhackme,
      label: 'TryHackMe',
    },
  ];

  const statBadges = stats.map((s) => {
    if (s.decimals > 0) return `${s.prefix}${s.value.toFixed(s.decimals)}${s.suffix} ${s.label}`;
    return `${s.prefix}${s.value}${s.suffix} ${s.label}`;
  });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid pointer-events-none z-0" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.18)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center w-full">
        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <span className="text-xs md:text-sm font-mono tracking-[0.35em] uppercase text-indigo-400">
            {personalInfo.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] sm:leading-[0.9] break-words"
        >
          Shraddha
          <br />
          Wakchaure
        </motion.h1>

        {/* Typewriter Roles */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 sm:mt-8 text-lg sm:text-xl md:text-3xl font-mono text-indigo-300 min-h-[3rem]"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-4 sm:mt-6 text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0"
        >
          Building secure applications, scalable software systems, and
          cybersecurity solutions that solve real-world business and technology
          challenges.
        </motion.p>

        {/* Recruiter Status */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4 sm:mt-5 px-2 sm:px-0"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-[11px] sm:text-xs md:text-sm font-mono text-center leading-snug flex-wrap justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>Currently seeking Software Engineering, Full Stack, Backend & Cybersecurity opportunities</span>
          </span>
        </motion.div>

        {/* Stat Badges */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-0"
        >
          {statBadges.map((badge) => (
            <span
              key={badge}
              className="px-2.5 sm:px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-[11px] sm:text-xs md:text-sm font-mono backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 px-4 sm:px-0"
        >
          <MagneticButton
            onClick={() => scrollTo('#projects')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl font-medium transition-all min-h-[48px] text-center w-full sm:w-auto"
          >
            View My Work
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollTo('#contact')}
            className="border border-white/15 hover:border-white/30 text-white px-7 py-3 rounded-xl transition-all min-h-[48px] text-center w-full sm:w-auto"
          >
            Get In Touch
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-5 sm:gap-6 mt-8 sm:mt-10"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              title={social.label}
              aria-label={social.label}
              className="text-slate-500 hover:text-white transition-colors duration-300 hover:scale-110 transform p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <ChevronDown className="w-5 h-5 text-slate-500 animate-bounce" />
      </motion.div>
    </section>
  );
}