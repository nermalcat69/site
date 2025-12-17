// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  site: 'https://arjunaditya.xyz',
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
  vite: {plugins: [tailwindcss()]},
});