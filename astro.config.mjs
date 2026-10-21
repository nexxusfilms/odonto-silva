// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Trocar pelo domínio definitivo (também em src/config/site.ts).
  site: 'https://www.odontosilva.com.br',
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
