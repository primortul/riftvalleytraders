"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo, { LogoWithText } from "@/components/Logo";
import Link from "next/link";

const BRAND_PASSWORD = "riftvalley2024";

const colorPalette = [
  { name: "Terracotta", hex: "#c4664a", usage: "Primary accent, CTAs, highlights" },
  { name: "Terracotta Dark", hex: "#a3523b", usage: "Hover states, emphasis" },
  { name: "Ochre", hex: "#c9a962", usage: "Secondary accent, gold highlights" },
  { name: "Sage", hex: "#7d8c6e", usage: "Sustainability, botanical elements" },
  { name: "Coffee", hex: "#4a3728", usage: "Deep accents, coffee references" },
  { name: "Cream", hex: "#f5f0e6", usage: "Primary background" },
  { name: "Sand", hex: "#d4c4a8", usage: "Secondary background" },
  { name: "Grey 950", hex: "#0c0a09", usage: "Dark sections, footer" },
  { name: "Grey 900", hex: "#1c1917", usage: "Headlines, primary text" },
  { name: "Grey 600", hex: "#57534e", usage: "Body text" },
  { name: "Grey 400", hex: "#a8a093", usage: "Secondary text, labels" },
];

const typography = [
  { name: "PP Editorial Old", weight: "Light (300)", usage: "Headlines, display text", sample: "Curated Origins" },
  { name: "PP Editorial Old", weight: "Regular (400)", usage: "Subheadings", sample: "Premium African Commodities" },
  { name: "PP Editorial Old", weight: "Italic", usage: "Accent words, emphasis", sample: "Quality, Trust, Origins" },
  { name: "Instrument Sans", weight: "Regular (400)", usage: "Body text, UI elements", sample: "Direct trade partnerships since 1987" },
  { name: "Instrument Sans", weight: "Medium (500)", usage: "Labels, buttons", sample: "DISCOVER OUR STORY" },
];

export default function BrandAssetsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === BRAND_PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  // Password gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#1c1917] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-12">
            <Logo color="#f5f0e6" size={60} className="mx-auto mb-6" />
            <h1 className="font-display text-3xl text-[#f5f0e6] font-light mb-2">
              Brand Assets
            </h1>
            <p className="text-[#a8a093] text-sm">
              Enter password to access brand guidelines
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                className={`w-full bg-transparent border ${
                  error ? "border-[#c4664a]" : "border-[#44403c]"
                } px-4 py-4 text-[#f5f0e6] placeholder-[#78716c] focus:outline-none focus:border-[#c4664a] transition-colors text-center tracking-widest`}
              />
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[#c4664a] text-xs mt-2 text-center"
                  >
                    Incorrect password. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              className="w-full bg-[#c4664a] text-white py-4 text-[13px] uppercase tracking-[0.2em] hover:bg-[#a3523b] transition-colors duration-300"
            >
              Access Brand Assets
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-[#78716c] text-sm hover:text-[#c4664a] transition-colors"
            >
              ← Back to website
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Brand assets content
  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      {/* Header */}
      <header className="py-8 px-6 lg:px-12 border-b border-[#e8e4de]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <LogoWithText color="#1c1917" accentColor="#c4664a" size={32} />
          <Link
            href="/"
            className="text-[13px] uppercase tracking-[0.2em] text-[#57534e] hover:text-[#c4664a] transition-colors"
          >
            Back to Site
          </Link>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4664a]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#78716c]">
              Brand Guidelines
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em] text-[#1c1917] font-light">
            Brand <span className="italic text-[#c4664a]">Assets</span>
          </h1>
        </motion.div>

        {/* Logo Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-display text-2xl text-[#1c1917] mb-8">Logo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary logo - light background */}
            <div className="bg-[#f5f0e6] border border-[#e8e4de] p-12 flex flex-col items-center justify-center">
              <LogoWithText color="#1c1917" accentColor="#c4664a" size={48} />
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#78716c] mt-8">
                Primary — Light Background
              </p>
            </div>

            {/* Logo on dark */}
            <div className="bg-[#1c1917] p-12 flex flex-col items-center justify-center">
              <LogoWithText color="#f5f0e6" accentColor="#c4664a" size={48} />
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#78716c] mt-8">
                Primary — Dark Background
              </p>
            </div>

            {/* Logo mark only */}
            <div className="bg-white border border-[#e8e4de] p-12 flex flex-col items-center justify-center">
              <Logo color="#1c1917" size={80} />
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#78716c] mt-8">
                Logo Mark — Icon Only
              </p>
            </div>

            {/* Terracotta version */}
            <div className="bg-[#d4c4a8] p-12 flex flex-col items-center justify-center">
              <Logo color="#c4664a" size={80} />
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#57534e] mt-8">
                Logo Mark — Terracotta
              </p>
            </div>
          </div>

          {/* Logo meaning */}
          <div className="mt-12 p-8 bg-white border border-[#e8e4de]">
            <h3 className="font-display text-xl text-[#1c1917] mb-4">The Dhow</h3>
            <p className="text-[15px] leading-[1.7] text-[#57534e] max-w-[600px]">
              Our logo features a minimalist Arabic dhow — the traditional sailing vessel that has 
              connected East African ports to the world for centuries. The elegant triangular sail 
              and curved hull represent our heritage in trade, our journey across waters, and our 
              commitment to carrying Africa&apos;s finest goods to global markets.
            </p>
          </div>
        </motion.section>

        {/* Color Palette */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-display text-2xl text-[#1c1917] mb-8">Color Palette</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {colorPalette.map((color) => (
              <div key={color.hex} className="group">
                <div
                  className="aspect-square mb-3 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                />
                <h4 className="text-[13px] font-medium text-[#1c1917]">{color.name}</h4>
                <p className="text-[11px] uppercase tracking-[0.1em] text-[#78716c] mb-1">
                  {color.hex}
                </p>
                <p className="text-[11px] text-[#a8a093] leading-[1.4]">{color.usage}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Typography */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-display text-2xl text-[#1c1917] mb-8">Typography</h2>
          
          <div className="space-y-6">
            {typography.map((type, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-[#e8e4de] grid grid-cols-1 md:grid-cols-4 gap-4 items-center"
              >
                <div>
                  <h4 className="text-[13px] font-medium text-[#1c1917]">{type.name}</h4>
                  <p className="text-[11px] text-[#78716c]">{type.weight}</p>
                </div>
                <div className="md:col-span-2">
                  <p
                    className={`text-2xl text-[#1c1917] ${
                      type.name === "PP Editorial Old" ? "font-display" : "font-sans"
                    } ${type.weight.includes("Italic") ? "italic" : ""} ${
                      type.weight.includes("Light") ? "font-light" : ""
                    }`}
                  >
                    {type.sample}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#a8a093]">{type.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Logo Sizes */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-display text-2xl text-[#1c1917] mb-8">Logo Sizes</h2>
          
          <div className="flex flex-wrap items-end gap-12 p-12 bg-white border border-[#e8e4de]">
            <div className="text-center">
              <Logo color="#1c1917" size={24} />
              <p className="text-[10px] text-[#78716c] mt-2">24px</p>
            </div>
            <div className="text-center">
              <Logo color="#1c1917" size={32} />
              <p className="text-[10px] text-[#78716c] mt-2">32px</p>
            </div>
            <div className="text-center">
              <Logo color="#1c1917" size={48} />
              <p className="text-[10px] text-[#78716c] mt-2">48px</p>
            </div>
            <div className="text-center">
              <Logo color="#1c1917" size={64} />
              <p className="text-[10px] text-[#78716c] mt-2">64px</p>
            </div>
            <div className="text-center">
              <Logo color="#1c1917" size={96} />
              <p className="text-[10px] text-[#78716c] mt-2">96px</p>
            </div>
          </div>
        </motion.section>

        {/* Download section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-2xl text-[#1c1917] mb-8">Downloads</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="#"
              className="group p-6 bg-white border border-[#e8e4de] hover:border-[#c4664a] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[13px] font-medium text-[#1c1917] group-hover:text-[#c4664a] transition-colors">
                    Logo Package
                  </h4>
                  <p className="text-[11px] text-[#78716c]">SVG, PNG, PDF</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#78716c] group-hover:text-[#c4664a] transition-colors">
                  <path d="M8 12V2M8 12L4 8M8 12L12 8M2 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
            <a
              href="#"
              className="group p-6 bg-white border border-[#e8e4de] hover:border-[#c4664a] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[13px] font-medium text-[#1c1917] group-hover:text-[#c4664a] transition-colors">
                    Brand Guidelines
                  </h4>
                  <p className="text-[11px] text-[#78716c]">PDF Document</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#78716c] group-hover:text-[#c4664a] transition-colors">
                  <path d="M8 12V2M8 12L4 8M8 12L12 8M2 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
            <a
              href="#"
              className="group p-6 bg-white border border-[#e8e4de] hover:border-[#c4664a] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[13px] font-medium text-[#1c1917] group-hover:text-[#c4664a] transition-colors">
                    Font Files
                  </h4>
                  <p className="text-[11px] text-[#78716c]">WOFF2, WOFF</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#78716c] group-hover:text-[#c4664a] transition-colors">
                  <path d="M8 12V2M8 12L4 8M8 12L12 8M2 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-[#e8e4de]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <p className="text-[11px] text-[#78716c]">
            © {new Date().getFullYear()} Rift Valley Traders. Confidential.
          </p>
          <p className="text-[11px] text-[#78716c]">
            For internal use only
          </p>
        </div>
      </footer>
    </div>
  );
}

