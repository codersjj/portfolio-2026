// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import { remarkReadingTime } from "./src/plugins/remark-reading-time";

// https://astro.build/config
export default defineConfig({
  site: "https://codersjj.cn",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
