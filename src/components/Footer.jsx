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
    <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © 2026 Shraddha Wakchaure. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
