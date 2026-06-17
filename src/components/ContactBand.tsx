"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

type ContactBandProps = {
  heading: string;
  headingAccent: string;
  description: string;
  ctaLabel: string;
};

export default function ContactBand({
  heading,
  headingAccent,
  description,
  ctaLabel,
}: ContactBandProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative py-28 lg:py-36 bg-[#1c1917]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] text-white font-light">
            {heading}{" "}
            <span className="italic text-[#c4664a]">{headingAccent}</span>
          </h2>
          <p className="mt-6 max-w-[560px] mx-auto text-[15px] leading-[1.7] text-[#a8a093]">
            {description}
          </p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-4 mt-10 bg-[#c4664a] text-white px-8 py-4 text-[13px] uppercase tracking-[0.2em] hover:bg-[#a3523b] transition-colors duration-300"
          >
            <span>{ctaLabel}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
