"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "37", label: "Years of Excellence", color: "#c4664a" },
  { value: "12", label: "African Nations", color: "#c9a962" },
  { value: "850+", label: "Partner Farms", color: "#7d8c6e" },
  { value: "40M", label: "KG Exported Yearly", color: "#4a3728" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-[#f5f0e6] overflow-hidden"
    >
      {/* Background decorative image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2067&auto=format&fit=crop"
          alt="African landscape"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left column - Image */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1974&auto=format&fit=crop"
                  alt="African farmer with coffee"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/60 to-transparent" />
              </div>
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/80">
                  Direct Trade Partnership
                </span>
                <p className="font-display text-white text-2xl mt-2 italic">
                  From Farm to Market
                </p>
              </div>
              {/* Decorative color block */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c4664a] -z-10" />
            </div>
          </motion.div>

          {/* Right column - Content */}
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="dot-accent" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#78716c] font-medium">
                  About Us
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] text-[#1c1917] font-light">
                A Legacy of
                <br />
                <span className="italic text-[#c4664a]">Quality</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 mt-10"
            >
              <p className="text-[17px] leading-[1.7] text-[#44403c]">
                Founded in the shadow of the Great Rift Valley, our company has 
                spent nearly four decades building relationships with the finest 
                producers across East Africa. What began as a small trading 
                operation has grown into one of the region&apos;s most respected 
                commodity houses.
              </p>
              <p className="text-[15px] leading-[1.7] text-[#57534e]">
                We work directly with farming cooperatives, ensuring fair prices 
                that support local communities while delivering exceptional quality 
                to our global partners. Every shipment carries with it the rich 
                heritage of African craftsmanship and agricultural excellence.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-8 mt-16 pt-16 border-t border-[#d6d0c7]"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div 
                    className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-tight font-light"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#78716c]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
