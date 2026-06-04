import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Code2, ExternalLink, Download, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import MagneticButton from './ui/MagneticButton';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition';

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: personalInfo.social.github },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.social.linkedin },
    { icon: Code2, label: 'LeetCode', href: personalInfo.social.leetcode },
    { icon: ExternalLink, label: 'TryHackMe', href: personalInfo.social.tryhackme },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something."
          subtitle="Open to internships, full-time roles, and interesting projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="text-indigo-400 w-4 h-4" />
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="text-indigo-400 w-4 h-4" />
                {personalInfo.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 hover:text-white flex items-center gap-2 transition"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <MagneticButton className="inline-block cursor-pointer">
                <a
                  href="#"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-lg text-sm flex items-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {submitted ? (
              <GlassCard className="border border-emerald-500/20 flex flex-col items-center justify-center py-16">
                <CheckCircle className="text-emerald-400 w-8 h-8" />
                <p className="text-white font-semibold mt-3">Message received!</p>
                <p className="text-slate-400 text-sm mt-1">I'll get back to you soon.</p>
              </GlassCard>
            ) : (
              <GlassCard>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div
                    onClick={handleSubmit}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg text-sm font-medium transition-colors mt-2 cursor-pointer text-center"
                  >
                    Send Message
                  </div>
                </div>
              </GlassCard>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
