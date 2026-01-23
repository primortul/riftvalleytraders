"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Premium Coffee",
    description:
      "Single-origin Arabica from the highlands of Ethiopia and Kenya. Hand-picked, sun-dried, and carefully processed to preserve complex flavor profiles.",
    regions: ["Ethiopian Yirgacheffe", "Kenyan AA", "Rwandan Bourbon"],
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop",
    color: "#4a3728",
  },
  {
    number: "02",
    title: "Rare Spices",
    description:
      "The finest vanilla from Madagascar, Zanzibar cloves, and rare peppers from the volcanic soils of the Rift Valley. Each spice tells a story of terroir and tradition.",
    regions: ["Madagascar Vanilla", "Zanzibar Cloves", "Kampot Pepper"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    color: "#8b4513",
  },
  {
    number: "03",
    title: "Heritage Grains",
    description:
      "Ancient grains that have sustained civilizations. Teff from the Ethiopian highlands, heritage sorghum, and specialty millets grown using traditional methods.",
    regions: ["Ethiopian Teff", "Heritage Sorghum", "Pearl Millet"],
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop",
    color: "#c9a962",
  },
  {
    number: "04",
    title: "Botanical Oils",
    description:
      "Cold-pressed oils from Africa's most prized botanicals. Argan, marula, and baobab oils that capture the essence of the continent's biodiversity.",
    regions: ["Argan Oil", "Marula Oil", "Baobab Oil"],
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=2187&auto=format&fit=crop",
    color: "#7d8c6e",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
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
              What We Trade
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em] text-[#1c1917] font-light">
            Commodities of
            <br />
            <span className="italic text-[#c4664a]">Distinction</span>
          </h2>
        </motion.div>

        {/* Services grid with images */}
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
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
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Color overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: service.color }}
                  />
                </div>
                {/* Decorative element */}
                <div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 -z-10 opacity-30"
                  style={{ backgroundColor: service.color }}
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span 
                    className="text-[11px] tracking-[0.2em] font-medium px-3 py-1"
                    style={{ backgroundColor: service.color, color: "white" }}
                  >
                    {service.number}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#e8e4de]" />
                </div>
                
                <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-[#1c1917] mb-6">
                  {service.title}
                </h3>
                
                <p className="text-[15px] leading-[1.7] text-[#57534e] mb-8">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.regions.map((region) => (
                    <span
                      key={region}
                      className="inline-block text-[11px] uppercase tracking-[0.15em] text-[#78716c] border border-[#d6d0c7] px-4 py-2 hover:border-[#c4664a] hover:text-[#c4664a] transition-colors duration-300"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 lg:mt-32 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 bg-[#c4664a] text-white px-8 py-4 text-[13px] uppercase tracking-[0.2em] hover:bg-[#a3523b] transition-colors duration-300"
          >
            <span>Request Product Catalog</span>
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
      </div>
    </section>
  );
}
