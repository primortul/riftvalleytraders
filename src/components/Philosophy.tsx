"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "Provenance",
    description:
      "Every product we trade has a traceable origin. We know the farms, the families, and the traditions behind each commodity.",
  },
  {
    title: "Sustainability",
    description:
      "Our partnerships prioritize regenerative agriculture and fair labor practices, ensuring prosperity for generations to come.",
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest quality standards at every stage, from harvest to delivery, accepting nothing less than exceptional.",
  },
];

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-[#1c1917] overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute inset-0 opacity-30"
      >
        <Image
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop"
          alt="African landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1917] via-[#1c1917]/80 to-transparent" />
      </motion.div>

      {/* Large background text */}
      <motion.div
        style={{ x: bgTextX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none select-none"
      >
        <span className="font-display text-[clamp(10rem,30vw,25rem)] leading-none tracking-[-0.04em] text-white/[0.03] font-light">
          Heritage · Integrity · Purpose
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4664a]" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#a8a093] font-medium">
                  Our Philosophy
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-[-0.02em] text-white font-light">
                Built on
                <br />
                <span className="italic text-[#c4664a]">Trust</span>
              </h2>
              <p className="mt-8 text-[15px] leading-[1.7] text-[#a8a093] max-w-[480px]">
                For nearly four decades, we&apos;ve operated on a simple principle: 
                relationships built on trust outlast transactions. This philosophy 
                guides every partnership we forge and every promise we make.
              </p>
            </motion.div>

            {/* Image instead of quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
                  alt="Coffee processing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] to-transparent opacity-60" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                  Direct from source
                </span>
                <p className="font-display text-white text-lg mt-1 italic">
                  Every bean, every leaf, every grain
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column - Values */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-0">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group py-8 border-b border-[#292524] first:border-t"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[11px] tracking-[0.2em] text-[#78716c] font-medium mt-2">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] text-white mb-3 group-hover:text-[#c4664a] transition-colors duration-500">
                        {value.title}
                      </h3>
                      <p className="text-[15px] leading-[1.7] text-[#a8a093]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 p-8 bg-gradient-to-br from-[#292524] to-[#1c1917] border border-[#44403c]"
            >
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-[#c4664a] font-light">
                    100%
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#78716c]">
                    Direct Trade
                  </div>
                </div>
                <div className="text-center border-x border-[#44403c]">
                  <div className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-[#c9a962] font-light">
                    Zero
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#78716c]">
                    Middlemen
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-[#7d8c6e] font-light">
                    3x
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#78716c]">
                    Fair Premium
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
