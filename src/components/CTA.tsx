"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const ctaLinks = [
  {
    title: "Partner With Us",
    description: "Explore wholesale opportunities",
    href: "#contact",
    color: "#c4664a",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Request Samples",
    description: "Experience quality firsthand",
    href: "#contact",
    color: "#c9a962",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Visit Our Farms",
    description: "Schedule an origin trip",
    href: "#contact",
    color: "#7d8c6e",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop",
  },
];

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-[#d4c4a8]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231c1917' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 lg:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="dot-accent" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#57534e] font-medium">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[1] tracking-[-0.03em] text-[#1c1917] font-light">
            Let&apos;s Create
            <br />
            <span className="italic text-[#c4664a]">Together</span>
          </h2>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctaLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              {/* Background image */}
              <Image
                src={link.image}
                alt={link.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(to top, ${link.color} 0%, ${link.color}80 30%, transparent 100%)`,
                  opacity: 0.9,
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-2">
                  0{index + 1}
                </span>
                <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-white mb-2">
                  {link.title}
                </h3>
                <p className="text-[13px] text-white/80 mb-4">
                  {link.description}
                </p>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-[12px] uppercase tracking-[0.15em]">Learn More</span>
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
            </motion.a>
          ))}
        </div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 lg:mt-24 pt-12 border-t border-[#a8a093]/30"
        >
          <div className="text-center md:text-left">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#57534e] mb-3">
              Email
            </h4>
            <a
              href="mailto:trade@riftvalleytraders.com"
              className="text-[17px] text-[#1c1917] hover:text-[#c4664a] transition-colors duration-300 link-underline font-display"
            >
              trade@riftvalleytraders.com
            </a>
          </div>
          <div className="text-center">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#57534e] mb-3">
              Phone
            </h4>
            <a
              href="tel:+254201234567"
              className="text-[17px] text-[#1c1917] hover:text-[#c4664a] transition-colors duration-300 link-underline font-display"
            >
              +254 20 123 4567
            </a>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#57534e] mb-3">
              Headquarters
            </h4>
            <p className="text-[17px] text-[#1c1917] font-display">
              Westlands Business Park
              <br />
              Nairobi, Kenya
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
