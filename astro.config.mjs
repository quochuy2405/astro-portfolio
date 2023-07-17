import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image()],
  // output: 'server',
  experimental: { assets: true },
});