"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const divisions = [
  {
    eyebrow: "Division 01",
    title: "Specialty & Origin",
    description:
      "Single-origin coffee, rare spices, heritage grains, and botanical oils — traceable to farm and crafted for the world's most discerning buyers.",
    href: "/specialty",
    color: "#c4664a",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop",
  },
  {
    eyebrow: "Division 02",
    title: "Grain & Commodity Trade",
    description:
      "Bulk grains, sugar and agri-inputs, and soft commodities supplied at scale — dependable volume, transparent logistics, and competitive global pricing.",
    href: "/commodities",
    color: "#7d8c6e",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Divisions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="divisions"
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-[#f5f0e6]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px] mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="dot-accent" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#78716c] font-medium">
              What We Trade
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em] text-[#1c1917] font-light">
            Two Divisions,
            <br />
            <span className="italic text-[#c4664a]">One Standard</span>
          </h2>
          <p className="mt-8 text-[15px] md:text-[17px] leading-[1.7] text-[#57534e] max-w-[560px]">
            From boutique specialty origins to commodity trade at scale, we
            connect African producers with global markets — with the same
            commitment to quality and integrity across both.
          </p>
        </motion.div>

        {/* Division cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={division.href}
                className="group relative block aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden"
              >
                {/* Background image */}
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, ${division.color} 0%, ${division.color}80 35%, transparent 100%)`,
                    opacity: 0.9,
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-3">
                    {division.eyebrow}
                  </span>
                  <h3 className="font-display text-[clamp(1.85rem,3.5vw,3rem)] leading-[1.05] text-white mb-4">
                    {division.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-white/85 max-w-[440px] mb-6">
                    {division.description}
                  </p>
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-[12px] uppercase tracking-[0.15em]">
                      Explore Division
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <path
                        d="M3 8H13M13 8L8 3M13 8L8 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
