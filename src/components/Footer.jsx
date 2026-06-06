import { Github, Linkedin, Code2, ExternalLink, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Code2, href: personalInfo.social.leetcode, label: 'LeetCode' },
    { icon: ExternalLink, href: personalInfo.social.tryhackme, label: 'TryHackMe' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Identity */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg">Shraddha Wakchaure</h3>
            <p className="text-indigo-400 text-sm font-mono mt-1">Software Engineer</p>
            <div className="flex items-center justify-center md:justify-start gap-1.5 mt-2">
              <MapPin className="w-3 h-3 text-slate-600" />
              <span className="text-xs text-slate-500">Maharashtra, India</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4 items-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                title={social.label}
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © 2026 Shraddha Wakchaure. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-700">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
