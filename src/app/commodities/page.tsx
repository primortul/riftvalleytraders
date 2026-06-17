import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProductSection from "@/components/ProductSection";
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";
import { commodityProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Grain & Commodity Trade | Rift Valley Traders",
  description:
    "Bulk grains, sugar and agri-inputs, and soft commodities supplied at scale — dependable volume, transparent logistics, and competitive global pricing.",
};

export default function CommoditiesPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageHeader
        eyebrow="Division 02 · Grain & Commodity Trade"
        title="Trade at"
        titleAccent="Scale"
        intro="We move staple grains, sugar, agri-inputs, and soft commodities in volume — connecting verified producers with global buyers through reliable supply, transparent logistics, and competitive pricing."
        image="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop"
      />
      <ProductSection
        id="commodities"
        eyebrow="What We Trade"
        heading="Volume Supply,"
        headingAccent="Delivered"
        products={commodityProducts}
        ctaLabel="Request a Quote"
        ctaHref="/#contact"
      />
      <ContactBand
        heading="Secure Your"
        headingAccent="Supply"
        description="Discuss volume requirements, specifications, and shipping terms with our trade desk. We respond quickly with competitive, transparent pricing."
        ctaLabel="Discuss Volume Supply"
      />
      <Footer />
    </main>
  );
}
