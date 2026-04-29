import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://pinmoji.app',
  integrations: [tailwind(), mdx()],
  output: 'static',
  adapter: cloudflare(),
});