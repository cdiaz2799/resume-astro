import { image } from "@nextui-org/react";
import { z, defineCollection } from "astro:content";
import { title } from "framer-motion/client";

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

const education = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      school: z.string(),
      major: z.string(),
      logo: image().optional(),
      location: z.string(),
      period: z.string(),
      summary: z.string(),
    }),
});

const certs = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      issuer: z.string(),
      issued: z.date().optional(),
      logo: image().optional(),
      skills: z.array(z.string()).optional(),
      validationLink: z.string().optional(),
    }),
});

export const collections = {
  bio: bio,
  experience: experience,
  education: education,
  certs: certs,
};
