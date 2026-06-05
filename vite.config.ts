import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwind from '@tailwindcss/vite';

// Client-only Vite config: build a static SPA into `dist/` with assets.
export default defineConfig({
  base: './', // use relative paths so `dist/index.html` can be moved to Hostinger public_html
  plugins: [tailwind(), react(), tsconfigPaths()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {},
  },
  server: {
    port: 5173,
  },
});
