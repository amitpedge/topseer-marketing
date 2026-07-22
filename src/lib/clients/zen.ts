export const client = "zen";
export const clientLabel = "Zen";

export type ZenDoc = {
  href: string;
  label: string;
  description: string;
  slug?: string;
};

export const zenDocs: ZenDoc[] = [
  {
    href: `/clients/${client}/doc-1/`,
    label: "Product Blueprint",
    description: "Product vision, loops, phased delivery, and decision register.",
    slug: "zen/client-blueprint",
  },
  {
    href: `/clients/${client}/doc-4/`,
    label: "Fulfillment Loop",
    description: "Loop 1 Phase 1 — sign-up, UHID, order lifecycle, Zen report delivery.",
    slug: "zen/fulfillment-loop",
  },
];
