import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProductSection from "@/components/ProductSection";
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";
import { specialtyProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Specialty & Origin | Rift Valley Traders",
  description:
    "Single-origin coffee, rare spices, heritage grains, and botanical oils — traceable to farm and crafted for the world's most discerning buyers.",
};

export default function SpecialtyPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageHeader
        eyebrow="Division 01 · Specialty & Origin"
        title="Curated"
        titleAccent="Origins"
        intro="For the world's most discerning buyers, we source single-origin coffee, rare spices, heritage grains, and botanical oils — each traceable to the farm and processed to preserve its character."
        image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
      />
      <ProductSection
        id="specialty"
        eyebrow="What We Trade"
        heading="Commodities of"
        headingAccent="Distinction"
        products={specialtyProducts}
        ctaLabel="Request Samples"
        ctaHref="/#contact"
      />
      <ContactBand
        heading="Source with"
        headingAccent="Confidence"
        description="Partner with us for traceable, single-origin quality. Request samples or discuss a specialty program tailored to your needs."
        ctaLabel="Get In Touch"
      />
      <Footer />
    </main>
  );
}
