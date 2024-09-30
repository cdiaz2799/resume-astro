// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import pageInsight from "astro-page-insight";

import markdownIntegration from "@astropub/md";

export default defineConfig({
  site: "https://resume.cdiaz.cloud",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    pageInsight(),
    markdownIntegration(),
  ],
});
