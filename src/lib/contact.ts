/** Rift Valley Traders & Associates — shared business info */

export const COMPANY = {
  legalName: "Rift Valley Traders & Associates, Inc.",
  website: "https://www.riftvalleytraders.co",
  websiteDisplay: "www.riftvalleytraders.co",
  tagline: "Bridging Markets, Building Futures, Cultivating Growth.",
  addressLines: ["26 Shaw Place", "Hartsdale, NY 10530"] as const,
};

/** Primary inbox for general inquiries (forms, CTAs, site contact). */
export const PRIMARY_CONTACT = {
  name: "Gideon Belete",
  email: "gideon@riftvalleytraders.co",
  phoneDisplay: "+1-917-495-7869",
  telHref: "tel:+19174957869",
} as const;

export type Partner = {
  id: string;
  name: string;
  role: string;
  email: string;
  phoneDisplay: string;
  telHref: string;
};

export const PARTNERS: Partner[] = [
  {
    id: "harun",
    name: "Harun K. Abazenab",
    role: "Founder and Chairperson",
    email: "harun@riftvalleytraders.co",
    phoneDisplay: "+251-911-226-454",
    telHref: "tel:+251911226454",
  },
  {
    id: "gideon",
    name: "Gideon Belete",
    role: "Partner",
    email: "gideon@riftvalleytraders.co",
    phoneDisplay: "+1-917-495-7869",
    telHref: "tel:+19174957869",
  },
  {
    id: "lloyd",
    name: "Lloyd Le Page",
    role: "Founder and Chairperson",
    email: "lloyd@riftvalleytraders.co",
    phoneDisplay: "+1-515-770-1685",
    telHref: "tel:+15157701685",
  },
];

export function mailtoPrimary(subject: string, body?: string): string {
  const q = new URLSearchParams();
  q.set("subject", subject);
  if (body) q.set("body", body);
  return `mailto:${PRIMARY_CONTACT.email}?${q.toString()}`;
}

export function mailtoPartner(email: string, subject: string): string {
  const q = new URLSearchParams();
  q.set("subject", subject);
  return `mailto:${email}?${q.toString()}`;
}
