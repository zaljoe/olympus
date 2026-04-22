// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://olympus.studio',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: { sourcemap: false },
  }
});
