import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import image from '@astrojs/image';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), svelte()]
});