"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  image: string;
};

export default function PageHeader({
  eyebrow,
  title,
  titleAccent,
  intro,
  image,
}: PageHeaderProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0e6]/90 via-[#f5f0e6]/75 to-[#f5f0e6]" />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-32 right-[12%] w-32 h-32 rounded-full bg-[#c4664a]/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="dot-accent" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#57534e] font-medium">
            {eyebrow}
          </span>
        </motion.div>

        <div className="overflow-hidden pb-2">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.75rem,9vw,8rem)] leading-[0.95] tracking-[-0.03em] text-[#1c1917] font-light"
          >
            {title}{" "}
            <span className="italic text-[#c4664a]">{titleAccent}</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[620px] mt-8 text-[15px] md:text-[17px] leading-[1.7] text-[#57534e]"
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
