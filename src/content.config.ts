import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const clients = defineCollection({
  loader: glob({ base: "./src/content/clients", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { clients };
