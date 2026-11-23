import { defineConfig } from 'astro/config';
import noHangingWords from './integrations/no-hanging-words.mjs';

export default defineConfig({
  site: 'https://forlova.vercel.app',
  integrations: [noHangingWords()],
});
