import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    site: 'https://tired-fox.github.io',
    base: '/tired_gaming',
  integrations: [solidJs(), image()]
});