import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nyx.sametbasbug.dev',
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});
