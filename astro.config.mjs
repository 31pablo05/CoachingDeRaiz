import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.coachingderaiz.com',
  integrations: [
    tailwind(),
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://www.coachingderaiz.com/',
        'https://www.coachingderaiz.com/blog/',
      ],
    }),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
});
