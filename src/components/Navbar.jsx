import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

/* â”€â”€â”€ Tiny floating star for background effect â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function Star({ delay, x, y, size }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  // Generate star positions once so they stay consistent across re-renders
  const stars = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 1.5,
      delay: Math.random() * 3,
    })),
    []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-white/[0.06]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="drop-shadow-[0_0_10px_rgba(79,70,229,0.6)]">
          <a href="#home" aria-label="Home" className="font-bold text-lg tracking-tight text-indigo-400">
            SW
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-sm transition-colors duration-200 relative pb-1 ${isActive
                  ? 'text-white'
                  : 'text-slate-500 hover:text-white'
                  }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-indigo-500"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Resume */}
        <a
          href="/Shraddha_Wakchaure_Resume.pdf"
          download="Shraddha_Wakchaure_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex border border-white/20 text-sm px-4 py-1.5 rounded-md hover:bg-white/5 transition text-white"
          aria-label="Download resume"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 -mr-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          MOBILE MENU â€” Premium full-screen overlay
          Inspired by Linear / Vercel / Apple navigation patterns
          â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 w-screen h-screen overflow-y-auto"
            style={{ zIndex: 9999 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* â”€â”€ Layer 1: Solid gradient background â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #020617 0%, #050B1D 40%, #070F2B 100%)',
              }}
            />

            {/* â”€â”€ Layer 2: Dot grid pattern (subtle) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                opacity: 0.08,
              }}
            />

            {/* â”€â”€ Layer 3: Indigo radial glow (center) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{
                background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(79,70,229,0.12) 0%, transparent 70%)',
              }}
            />

            {/* â”€â”€ Layer 4: Floating star particles â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {stars.map((star) => (
                <Star key={star.id} {...star} />
              ))}
            </div>

            {/* â”€â”€ Layer 5: Backdrop blur catch-all â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
            <div className="absolute inset-0 backdrop-blur-xl pointer-events-none" />

            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
                CONTENT â€” sits above all background layers
                â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <div className="relative z-10 flex flex-col min-h-screen">
              {/* Top bar: Logo + Close */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between px-5 sm:px-6 pt-5 pb-2"
              >
                {/* Logo */}
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="font-bold text-lg tracking-tight text-indigo-400 drop-shadow-[0_0_10px_rgba(79,70,229,0.6)]"
                  aria-label="Home"
                >
                  SW
                </a>

                {/* Close (X) */}
                <button
                  className="text-slate-400 hover:text-white p-2 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-xl hover:bg-white/[0.06] transition-all duration-200"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>

              {/* Navigation items â€” centered vertically in remaining space */}
              <div className="flex-1 flex flex-col items-center justify-center gap-1 px-6">
                {navLinks.map((link, i) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.05,
                        duration: 0.35,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className={`
                        relative w-full max-w-xs text-center
                        text-[20px] font-semibold tracking-wide
                        min-h-[52px] flex items-center justify-center
                        rounded-xl transition-all duration-200
                        ${isActive
                          ? 'text-white bg-white/[0.06]'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                        }
                      `}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}

                      {/* Active indicator â€” subtle indigo glow */}
                      {isActive && (
                        <motion.span
                          layoutId="mobile-active-glow"
                          className="absolute inset-0 rounded-xl border border-indigo-500/25 pointer-events-none"
                          style={{
                            boxShadow: '0 0 20px rgba(79,70,229,0.12), inset 0 0 20px rgba(79,70,229,0.04)',
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.a>
                  );
                })}

                {/* Resume button â€” premium gradient */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + navLinks.length * 0.05,
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="mt-6 w-full flex justify-center"
                >
                  <a
                    href="/Shraddha_Wakchaure_Resume.pdf"
                    download="Shraddha_Wakchaure_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="
                      group relative w-[220px]
                      flex items-center justify-center gap-2.5
                      min-h-[52px] px-6 py-3
                      rounded-xl font-semibold text-[15px] text-white
                      whitespace-nowrap
                      bg-gradient-to-r from-indigo-600 to-indigo-500
                      hover:from-indigo-500 hover:to-indigo-400
                      transition-all duration-300
                      shadow-[0_0_20px_rgba(79,70,229,0.25)]
                      hover:shadow-[0_0_32px_rgba(79,70,229,0.45)]
                    "
                    aria-label="Download resume PDF"
                  >
                    <Download className="w-4.5 h-4.5 group-hover:translate-y-[1px] transition-transform duration-200" />
                    Download Resume
                  </a>
                </motion.div>
              </div>

              {/* Bottom safe-area spacer */}
              <div className="h-8 shrink-0" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
