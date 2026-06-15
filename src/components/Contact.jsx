import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Code2, ExternalLink, Download, CheckCircle, Send } from 'lucide-react';
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
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  const inputClass =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition min-h-[48px]';

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: personalInfo.social.github },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.social.linkedin },
    { icon: Code2, label: 'LeetCode', href: personalInfo.social.leetcode },
    { icon: ExternalLink, label: 'TryHackMe', href: personalInfo.social.tryhackme },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusMsg({ type: 'error', text: 'Please fill in all required fields (Name, Email, Message).' });
      return;
    }

    const key = personalInfo.web3formsKey || (import.meta.env && import.meta.env.VITE_WEB3FORMS_KEY);
    if (!key) {
      setStatusMsg({
        type: 'error',
        text: 'Access key is missing. Please add your Web3Forms Access Key to portfolio.js (web3formsKey) or VITE_WEB3FORMS_KEY in your environment.'
      });
      return;
    }

    setLoading(true);
    setStatusMsg({ type: '', text: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: key,
          name: name,
          email: email,
          subject: subject || `New contact form message from ${name}`,
          message: message,
          from_name: `${name} (Portfolio Website)`,
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatusMsg({ type: 'error', text: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      console.error(err);
      setStatusMsg({ type: 'error', text: 'Failed to send message. Please check your connection.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together."
          subtitle="Currently seeking Software Engineering, Full Stack Development, Backend Development, and Cybersecurity opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Left Column â€” Contact Info (prominent) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-3">
              <GlassCard hover className="border-l-2 border-indigo-500/40 hover:border-l-indigo-400 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 flex items-center justify-center transition-colors duration-300">
                    <Mail className="text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-white text-sm hover:text-indigo-300 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover className="border-l-2 border-indigo-500/40 hover:border-l-indigo-400 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 flex items-center justify-center transition-colors duration-300">
                    <MapPin className="text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Location</p>
                    <p className="text-white text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Social Links â€” Prominent */}
            <p className="text-xs uppercase tracking-widest text-slate-600 mt-8 mb-3 font-mono">
              Connect
            </p>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 flex items-center gap-3 text-slate-300 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 group"
                >
                  <social.icon className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <MagneticButton className="inline-block cursor-pointer">
                <a
                  href="/Shraddha_Wakchaure_Resume.pdf"
                  download="Shraddha_Wakchaure_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-lg text-sm flex items-center gap-2 transition-colors min-h-[48px]"
                  aria-label="Download resume PDF"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column â€” Form */}
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
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      required
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
                      required
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
                      required
                    />
                  </div>

                  {statusMsg.text && (
                    <div className={`p-3 rounded-lg text-xs font-mono border ${statusMsg.type === 'error'
                        ? 'bg-rose-500/10 border-rose-500/25 text-rose-300'
                        : 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300'
                      }`}>
                      {statusMsg.text}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white py-3 rounded-lg text-sm font-medium transition-colors mt-2 text-center flex items-center justify-center gap-2 outline-none focus:ring-2 focus:ring-indigo-500/40 min-h-[48px]"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </GlassCard>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
