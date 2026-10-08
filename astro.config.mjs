import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yahyaabdulbasser.me',
  integrations: [sitemap({ filter: (p) => !p.includes('type-test') && !p.includes('/studio/thanks') && !p.includes('/studio/work/demo') })],
  build: { inlineStylesheets: 'auto' },
});
