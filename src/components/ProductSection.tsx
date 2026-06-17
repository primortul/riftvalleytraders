"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import type { Product } from "@/lib/products";

type ProductSectionProps = {
  id?: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  products: Product[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ProductSection({
  id = "services",
  eyebrow,
  heading,
  headingAccent,
  products,
  ctaLabel,
  ctaHref,
}: ProductSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-[#f5f0e6]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px] mb-20 lg:mb-32"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="dot-accent" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#78716c] font-medium">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em] text-[#1c1917] font-light">
            {heading}
            <br />
            <span className="italic text-[#c4664a]">{headingAccent}</span>
          </h2>
        </motion.div>

        {/* Products grid with images */}
        <div className="space-y-24 lg:space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Color overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: product.color }}
                  />
                </div>
                {/* Decorative element */}
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 -z-10 opacity-30"
                  style={{ backgroundColor: product.color }}
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-[11px] tracking-[0.2em] font-medium px-3 py-1"
                    style={{ backgroundColor: product.color, color: "white" }}
                  >
                    {product.number}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#e8e4de]" />
                </div>

                <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-[#1c1917] mb-6">
                  {product.title}
                </h3>

                <p className="text-[15px] leading-[1.7] text-[#57534e] mb-8">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-[11px] uppercase tracking-[0.15em] text-[#78716c] border border-[#d6d0c7] px-4 py-2 hover:border-[#c4664a] hover:text-[#c4664a] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 lg:mt-32 text-center"
          >
            <a
              href={ctaHref}
              className="group inline-flex items-center gap-4 bg-[#c4664a] text-white px-8 py-4 text-[13px] uppercase tracking-[0.2em] hover:bg-[#a3523b] transition-colors duration-300"
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
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
