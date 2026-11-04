// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Domínio definitivo (também em src/config/site.ts e public/robots.txt).
  site: 'https://www.odontosilva.com.br',
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
