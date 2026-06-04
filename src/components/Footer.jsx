import { Github, Linkedin, Code2, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Code2, href: personalInfo.social.leetcode, label: 'LeetCode' },
    { icon: ExternalLink, href: personalInfo.social.tryhackme, label: 'TryHackMe' },
  ];

  return (
    <footer className="py-8 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-600">
          © 2025 Shraddha Wakchaure · Built with React & Tailwind CSS
        </p>

        <div className="flex gap-4 items-center">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              title={social.label}
              className="text-slate-600 hover:text-slate-400 transition"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
