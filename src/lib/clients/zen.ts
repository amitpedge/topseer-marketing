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
    label: "Entity Model",
    description: "Finalized entities, relationships, and shorthand formulae for Zenlife.",
    slug: "zen/entity-model",
  },
  {
    href: `/clients/${client}/doc-2/`,
    label: "Product Blueprint",
    description: "Product vision, loops, phased delivery, and decision register.",
    slug: "zen/client-blueprint",
  },
  {
    href: `/clients/${client}/doc-3/`,
    label: "AI Roadmap",
    description: "AI strategy, roadmap specifics, and platform architecture.",
    slug: "zen/ai-roadmap",
  },
];
