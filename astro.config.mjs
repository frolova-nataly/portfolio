import { defineConfig } from 'astro/config';
import noHangingWords from './integrations/no-hanging-words.mjs';

export default defineConfig({
  site: 'https://frolova.vercel.app',
  integrations: [noHangingWords()],
});
