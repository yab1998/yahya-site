import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yahyaabdulbasser.me',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
