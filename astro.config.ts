import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import imgAttr from "remark-imgattr";
import { autolinkConfig } from "./plugins/rehype-autolink-config";

export default defineConfig({
  site: "https://arjunaditya.xyz",
  prefetch: true,
  integrations: [
    react(),
    expressiveCode({
      styleOverrides: {
        codeFontFamily:
          "'MonoLisa', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      },
    }),
    mdx(),
    sitemap(),
    playformCompress(),
  ],
  trailingSlash: "never",
  adapter: vercel(),
  markdown: {
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, autolinkConfig]],
    remarkPlugins: [imgAttr],
  },
  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },

    css: {
      postcss: {
        plugins: [autoprefixer, cssnano],
      },
    },

    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "HEX Franklin",
        cssVariable: "--font-sans",
        fallbacks: ["sans-serif"],
        variants: [
          {
            src: ["./src/fonts/HEX_Franklin_v0.3_Variable.woff2"],
          },
        ],
      },
      {
        provider: "local",
        name: "MonoLisa",
        cssVariable: "--font-mono",
        fallbacks: ["monospace"],
        variants: [
          {
            src: ["./src/fonts/MonoLisaVariableNormal.woff2"],
          },
        ],
      },
    ],
  },
  redirects: {
    "/garden": "/",
    "/projects": "/",
    "/projects/genderswap": "/posts/genderswap",
    "/projects/boundaries-map": "/posts/boundaries-map",
    "/projects/commonplace": "/posts/commonplace",
  },
});
