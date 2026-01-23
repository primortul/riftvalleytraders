"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMenuOpen(false);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-5 transition-all duration-500 ${
          scrolled ? "backdrop-blur-nav bg-[#f5f0e6]/90" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Logo color="#1c1917" size={32} />
            <span className="font-display text-xl md:text-2xl font-light tracking-tight text-[#1c1917]">
              Rift Valley <span className="text-[#c4664a] italic">Traders</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.2em] text-[#57534e] hover:text-[#c4664a] transition-colors duration-300 link-underline"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 5 : 0,
                  backgroundColor: menuOpen ? "#c4664a" : "#1c1917",
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-[1.5px] bg-[#1c1917] block origin-center"
              />
              <motion.span
                animate={{
                  opacity: menuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-[1.5px] bg-[#1c1917] block"
              />
              <motion.span
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -5 : 0,
                  backgroundColor: menuOpen ? "#c4664a" : "#1c1917",
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-[1.5px] bg-[#1c1917] block origin-center"
              />
            </div>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#f5f0e6] pt-24 px-6 md:hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-[#c4664a]/10 blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-[#c9a962]/10 blur-3xl" />
            
            <nav className="relative flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl text-[#1c1917] hover:text-[#c4664a] transition-colors"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            
            {/* Mobile menu footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 left-6 right-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#c4664a]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#78716c]">
                  Since 1987
                </span>
              </div>
              <p className="text-[13px] text-[#57534e]">
                trade@riftvalleytraders.com
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
