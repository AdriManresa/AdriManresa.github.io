import { defineCollection, z } from "astro:content";

const heroImage = z.union([
  z.string(),
  z.object({
    src: z.string(),
    width: z.number().optional(),
    height: z.number().optional(),
    format: z
      .enum(["png","jpg","jpeg","tiff","webp","gif","svg","avif"])
      .optional(),
    alt: z.string().optional(),
  }),
]);

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    draft: z.coerce.boolean().optional().default(false),
    tags: z.array(z.string()).optional(),
    heroImage: heroImage.optional(),
  }).passthrough(),
});

export const collections = { blog };
