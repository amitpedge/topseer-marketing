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
];
