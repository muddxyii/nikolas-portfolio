import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
