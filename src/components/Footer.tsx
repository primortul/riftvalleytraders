"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
];

const footerLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Sustainability Report", href: "#" },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <footer
      ref={containerRef}
      className="relative py-16 lg:py-24 bg-[#1c1917] overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2067&auto=format&fit=crop"
          alt="African landscape"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#292524]">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <a
              href="#"
              className="flex items-center gap-3"
            >
              <Logo color="#f5f0e6" size={36} />
              <span className="font-display text-2xl font-light tracking-tight text-white">
                Rift Valley <span className="text-[#c4664a] italic">Traders</span>
              </span>
            </a>
            <p className="mt-6 text-[15px] leading-[1.7] text-[#a8a093] max-w-[360px]">
              Connecting the world with Africa&apos;s finest commodities since 1987. 
              Premium coffee, rare spices, and heritage goods sourced with integrity.
            </p>
            
            {/* Color dots representing commodities */}
            <div className="flex items-center gap-3 mt-8">
              <span className="w-3 h-3 rounded-full bg-[#4a3728]" title="Coffee" />
              <span className="w-3 h-3 rounded-full bg-[#8b4513]" title="Spices" />
              <span className="w-3 h-3 rounded-full bg-[#c9a962]" title="Grains" />
              <span className="w-3 h-3 rounded-full bg-[#7d8c6e]" title="Oils" />
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#78716c] mb-5">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Philosophy", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[14px] text-[#d6d0c7] hover:text-[#c4664a] transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#78716c] mb-5">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[14px] text-[#d6d0c7] hover:text-[#c4664a] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Legal links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#78716c] mb-5">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[14px] text-[#d6d0c7] hover:text-[#c4664a] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[12px] tracking-[0.1em] text-[#78716c]">
            © {new Date().getFullYear()} Rift Valley Traders. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4664a]" />
            <span className="text-[12px] tracking-[0.1em] text-[#78716c]">
              26 Shaw Place · Hartsdale, NY 10530
            </span>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#78716c] hover:text-[#c4664a] transition-colors duration-300"
          >
            <span>Back to top</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="group-hover:-translate-y-1 transition-transform duration-300"
            >
              <path
                d="M6 10V2M6 2L2 6M6 2L10 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
