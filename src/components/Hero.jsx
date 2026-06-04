import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, ExternalLink, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import AnimatedText from './ui/AnimatedText';
import MagneticButton from './ui/MagneticButton';

export default function Hero() {
  const { displayText } = useTypewriter(personalInfo.roles, 80, 50, 2000);

  const scrollTo = (selector) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Code2, href: personalInfo.social.leetcode, label: 'LeetCode' },
    { icon: ExternalLink, href: personalInfo.social.tryhackme, label: 'TryHackMe' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(79,70,229,0.1)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-indigo-400">
            Software Engineer · {personalInfo.location}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AnimatedText
            text="Building Software that Matters."
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mt-6"
            delay={0.2}
          />
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-400 font-mono mt-8"
        >
          {displayText}
          <span className="cursor" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-slate-500 tracking-widest uppercase mt-4"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 mt-10 flex-wrap justify-center"
        >
          <MagneticButton
            onClick={() => scrollTo('#projects')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo('#contact')}
            className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-6 mt-8 items-center"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              title={social.label}
              className="text-slate-500 hover:text-white transition"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8">
        <ChevronDown className="w-5 h-5 text-slate-600 animate-bounce" />
      </div>
    </div>
  );
}
