"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        style={{ scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop"
          alt="Coffee beans and African landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0e6]/90 via-[#f5f0e6]/70 to-[#f5f0e6]" />
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-[10%] w-32 h-32 rounded-full bg-[#c4664a]/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-[15%] w-48 h-48 rounded-full bg-[#c9a962]/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center"
      >
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="dot-accent" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#57534e] font-medium">
            Since 1987 · East Africa
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden pb-2">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,12vw,11rem)] leading-[0.95] tracking-[-0.03em] text-[#1c1917] font-light"
          >
            Curated
          </motion.h1>
        </div>
        <div className="overflow-hidden pb-4">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,12vw,11rem)] leading-[0.95] tracking-[-0.03em] text-[#c4664a] font-light italic"
          >
            Origins
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[600px] mx-auto mt-10 text-[15px] md:text-[17px] leading-[1.7] text-[#57534e]"
        >
          Connecting the world&apos;s most discerning buyers with Africa&apos;s finest 
          commodities. Premium coffee, rare spices, and heritage goods sourced 
          directly from the heart of the Rift Valley.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.2em] text-[#1c1917] hover:text-[#c4664a] transition-colors duration-300"
          >
            <span>Discover Our Story</span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="group-hover:translate-y-1 transition-transform duration-300"
            >
              <path
                d="M10 3L10 17M10 17L16 11M10 17L4 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-[#c4664a] to-transparent"
        />
      </motion.div>
    </section>
  );
}
