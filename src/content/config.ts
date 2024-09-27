import { image } from "@nextui-org/react";
import { z, defineCollection } from "astro:content";

const bio = defineCollection({
  type: "content",
  schema: z.object({}),
});

const experience = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      sortOrder: z.number(),
      title: z.string(),
      company: z.string(),
      companyLogo: image().optional(),
      startDate: z.string(),
      endDate: z.string().optional(),
      location: z.string(),
      summary: z.string(),
      technologies: z.array(z.string()).optional(),
    }),
});

export const collections = {
  bio: bio,
  experience: experience,
};
