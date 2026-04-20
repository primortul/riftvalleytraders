"use client";

import { useRef, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";
import {
  COMPANY,
  PRIMARY_CONTACT,
  PARTNERS,
  mailtoPrimary,
  mailtoPartner,
} from "@/lib/contact";

const ctaLinks = [
  {
    title: "Partner With Us",
    description: "Explore wholesale opportunities",
    href: mailtoPrimary("Partner inquiry — Rift Valley Traders"),
    color: "#c4664a",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Request Samples",
    description: "Experience quality firsthand",
    href: mailtoPrimary("Sample request — Rift Valley Traders"),
    color: "#c9a962",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Visit Our Farms",
    description: "Schedule an origin trip",
    href: mailtoPrimary("Origin visit — Rift Valley Traders"),
    color: "#7d8c6e",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop",
  },
];

function ContactMailtoForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const fromEmail = (form.elements.namedItem("fromEmail") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const body = [
      name && `Name: ${name}`,
      fromEmail && `Reply-to: ${fromEmail}`,
      "",
      message || "(Your message)",
    ].join("\n");
    window.location.href = mailtoPrimary("Message from riftvalleytraders.co", body);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto text-left space-y-4"
      id="contact-form"
    >
      <div>
        <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-[0.2em] text-[#57534e] mb-2">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className="w-full bg-white/60 border border-[#a8a093]/40 px-4 py-3 text-[#1c1917] placeholder:text-[#78716c] focus:outline-none focus:border-[#c4664a] transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-[0.2em] text-[#57534e] mb-2">
          Your email
        </label>
        <input
          id="contact-email"
          name="fromEmail"
          type="email"
          autoComplete="email"
          className="w-full bg-white/60 border border-[#a8a093]/40 px-4 py-3 text-[#1c1917] placeholder:text-[#78716c] focus:outline-none focus:border-[#c4664a] transition-colors"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-[0.2em] text-[#57534e] mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="w-full bg-white/60 border border-[#a8a093]/40 px-4 py-3 text-[#1c1917] placeholder:text-[#78716c] focus:outline-none focus:border-[#c4664a] transition-colors resize-y min-h-[120px]"
          placeholder="How can we help?"
        />
      </div>
      <p className="text-[12px] text-[#57534e]">
        Sends an email to{" "}
        <a href={`mailto:${PRIMARY_CONTACT.email}`} className="text-[#1c1917] underline underline-offset-2 hover:text-[#c4664a]">
          {PRIMARY_CONTACT.email}
        </a>{" "}
        (Gideon Belete) via your mail app.
      </p>
      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-[#1c1917] text-[#f5f0e6] text-[12px] uppercase tracking-[0.15em] hover:bg-[#c4664a] transition-colors duration-300"
      >
        Send message
      </button>
    </form>
  );
}

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

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28 pt-12 border-t border-[#a8a093]/30"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] text-[#1c1917] font-light tracking-tight mb-2">
              Partners
            </h3>
            <p className="text-[14px] text-[#57534e] max-w-2xl mx-auto italic">
              {COMPANY.tagline}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {PARTNERS.map((partner, index) => (
              <motion.article
                key={partner.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white/40 border border-[#a8a093]/25 p-8 flex flex-col items-center text-center"
              >
                <div className="mb-6 flex items-center justify-center w-24 h-24 rounded-full bg-[#f5f0e6] border border-[#a8a093]/30">
                  <Logo color="#1c1917" size={56} />
                </div>
                <h4 className="font-display text-xl text-[#1c1917] mb-1">{partner.name}</h4>
                <p className="text-[12px] uppercase tracking-[0.15em] text-[#57534e] mb-4">{partner.role}</p>
                <a
                  href={`mailto:${partner.email}`}
                  className="text-[15px] text-[#1c1917] hover:text-[#c4664a] transition-colors link-underline font-display mb-2"
                >
                  {partner.email}
                </a>
                <a
                  href={partner.telHref}
                  className="text-[15px] text-[#1c1917] hover:text-[#c4664a] transition-colors font-display mb-4"
                >
                  {partner.phoneDisplay}
                </a>
                <p className="text-[13px] text-[#57534e] leading-relaxed mb-2">
                  {COMPANY.addressLines[0]}
                  <br />
                  {COMPANY.addressLines[1]}
                </p>
                <p className="text-[12px] text-[#57534e] mb-3">{COMPANY.legalName}</p>
                <a
                  href={COMPANY.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-[#c4664a] hover:underline mb-6"
                >
                  {COMPANY.websiteDisplay}
                </a>
                <a
                  href={mailtoPartner(partner.email, `Inquiry — ${partner.name}`)}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#1c1917] border border-[#1c1917]/30 px-4 py-2 hover:bg-[#1c1917] hover:text-[#f5f0e6] transition-colors"
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8H13M13 8L8 3M13 8L8 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Contact — primary + form (mailto Gideon) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-20 lg:mt-24 pt-12 border-t border-[#a8a093]/30 items-start"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8 text-center sm:text-left">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#57534e] mb-3">
                Email
              </h4>
              <a
                href={`mailto:${PRIMARY_CONTACT.email}`}
                className="text-[17px] text-[#1c1917] hover:text-[#c4664a] transition-colors duration-300 link-underline font-display"
              >
                {PRIMARY_CONTACT.email}
              </a>
              <p className="text-[13px] text-[#57534e] mt-1">{PRIMARY_CONTACT.name}</p>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#57534e] mb-3">
                Phone
              </h4>
              <a
                href={PRIMARY_CONTACT.telHref}
                className="text-[17px] text-[#1c1917] hover:text-[#c4664a] transition-colors duration-300 link-underline font-display"
              >
                {PRIMARY_CONTACT.phoneDisplay}
              </a>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#57534e] mb-3">
                Office
              </h4>
              <p className="text-[17px] text-[#1c1917] font-display leading-relaxed">
                {COMPANY.addressLines[0]}
                <br />
                {COMPANY.addressLines[1]}
              </p>
              <p className="text-[13px] text-[#57534e] mt-2">{COMPANY.legalName}</p>
              <a
                href={COMPANY.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[15px] text-[#c4664a] hover:underline"
              >
                {COMPANY.websiteDisplay}
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#57534e] mb-6 text-center lg:text-left">
              Write us
            </h4>
            <ContactMailtoForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
