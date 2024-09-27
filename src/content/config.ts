import { z, defineCollection } from "astro:content";

const experience = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    location: z.string(),
    summary: z.string(),
    responsibilities: z.array(z.string()),
    technologies: z.array(z.string()).optional(),
  }),
});

export const collections = {
  experience: experience,
};
