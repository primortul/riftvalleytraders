/** Rift Valley Traders — product data for both divisions */

export type Product = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
};

export const specialtyProducts: Product[] = [
  {
    number: "01",
    title: "Premium Coffee",
    description:
      "Single-origin Arabica from the highlands of Ethiopia and Kenya. Hand-picked, sun-dried, and carefully processed to preserve complex flavor profiles.",
    tags: ["Ethiopian Yirgacheffe", "Kenyan AA", "Rwandan Bourbon"],
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop",
    color: "#4a3728",
  },
  {
    number: "02",
    title: "Rare Spices",
    description:
      "The finest vanilla from Madagascar, Zanzibar cloves, and rare peppers from the volcanic soils of the Rift Valley. Each spice tells a story of terroir and tradition.",
    tags: ["Madagascar Vanilla", "Zanzibar Cloves", "Kampot Pepper"],
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    color: "#8b4513",
  },
  {
    number: "03",
    title: "Heritage Grains",
    description:
      "Ancient grains that have sustained civilizations. Teff from the Ethiopian highlands, heritage sorghum, and specialty millets grown using traditional methods.",
    tags: ["Ethiopian Teff", "Heritage Sorghum", "Pearl Millet"],
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop",
    color: "#c9a962",
  },
  {
    number: "04",
    title: "Botanical Oils",
    description:
      "Cold-pressed oils from Africa's most prized botanicals. Argan, marula, and baobab oils that capture the essence of the continent's biodiversity.",
    tags: ["Argan Oil", "Marula Oil", "Baobab Oil"],
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=2187&auto=format&fit=crop",
    color: "#7d8c6e",
  },
];

export const commodityProducts: Product[] = [
  {
    number: "01",
    title: "Bulk Grains",
    description:
      "Reliable, container- and vessel-scale supply of staple grains for millers, processors, and food manufacturers. Consistent specifications, dependable lead times, and full documentation on every shipment.",
    tags: ["Wheat", "Maize / Corn", "Rice", "Barley", "Sorghum"],
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop",
    color: "#c9a962",
  },
  {
    number: "02",
    title: "Sugar & Agri-Inputs",
    description:
      "Volume sourcing of refined and raw sugar alongside the fertilizers and agri-inputs that keep production moving. Competitive pricing backed by transparent logistics and quality assurance.",
    tags: ["Refined Sugar", "Raw Sugar", "Fertilizer", "Agri-Inputs"],
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=2070&auto=format&fit=crop",
    color: "#7d8c6e",
  },
  {
    number: "03",
    title: "Soft Commodities",
    description:
      "Export-grade soft commodities traded at scale across global markets. We connect verified producers with international buyers, managing quality, compliance, and shipment end to end.",
    tags: ["Cotton", "Cocoa", "Cashew"],
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop",
    color: "#4a3728",
  },
];
